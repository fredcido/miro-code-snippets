import { z } from "zod";
import { CodeSnippetSchema } from "./models";

const snippetCreated = z.object({
  type: z.literal("snippet:created"),
  payload: CodeSnippetSchema,
});

const snippetUpdated = z.object({
  type: z.literal("snippet:updated"),
  payload: CodeSnippetSchema,
});

const snippetDeleted = z.object({
  type: z.literal("snippet:deleted"),
  payload: CodeSnippetSchema,
});

const ActionsSchema = z.union([snippetCreated, snippetUpdated, snippetDeleted]);

type ActionPayloadMap = {
  "snippet:created": z.infer<typeof snippetCreated>["payload"];
  "snippet:updated": z.infer<typeof snippetUpdated>["payload"];
  "snippet:deleted": z.infer<typeof snippetDeleted>["payload"];
};

export type Actions = z.infer<typeof ActionsSchema>;

export type ActionSubscription<Payload = Actions["payload"]> = (
  payload: Payload
) => Promise<unknown>;

export type ActionUnsubcriber = () => void;

export class ActionsRegistry {
  channel: BroadcastChannel;

  subscriptions = new Map<Actions["type"], ActionSubscription[]>();

  constructor(namespace: string) {
    this.channel = new BroadcastChannel(namespace);
    this.channel.addEventListener("message", (message) => {
      try {
        const action = ActionsSchema.parse(message.data);
        this.dispatch(action.type, action.payload);
      } catch (error) {
        console.error(`Error parsing action payload`, error);
      }
    });

    this.subscriptions.set("snippet:created", []);
    this.subscriptions.set("snippet:updated", []);
    this.subscriptions.set("snippet:deleted", []);
  }

  on<T extends Actions["type"]>(
    action: T,
    subscriber: ActionSubscription<ActionPayloadMap[T]>
  ): ActionUnsubcriber {
    const subscribers = this.subscriptions.get(action) ?? [];
    this.subscriptions.set(action, [...subscribers, subscriber]);

    return () => {
      this.off(action, subscriber);
    };
  }

  off<T extends Actions["type"]>(
    action: T,
    subscriber: ActionSubscription<ActionPayloadMap[T]>
  ): void {
    const subscribers = this.subscriptions.get(action) ?? [];
    this.subscriptions.set(
      action,
      subscribers.filter((fn) => fn !== subscriber)
    );
  }

  broadcast<T extends Actions["type"]>(
    action: T,
    payload: ActionPayloadMap[T]
  ): void {
    const message = {
      type: action,
      payload,
    };

    ActionsSchema.parse(message);
    this.channel.postMessage(message);
  }

  dispatch<T extends Actions["type"]>(
    action: T,
    payload: ActionPayloadMap[T]
  ): void {
    if (!this.subscriptions.has(action)) {
      return;
    }

    const subscribers = this.subscriptions.get(action) ?? [];

    subscribers.map(async (fn) => {
      return fn(payload).catch((error) => {
        console.error(`Error dispatching ${action}`, error);
      });
    });
  }
}

let actions: ActionsRegistry | undefined = undefined;
export const getRegistry = () => {
  if (!actions) {
    actions = new ActionsRegistry("miro-code-snippets");
  }

  return actions;
};
