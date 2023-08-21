import {
  IconExclamationPointCircle,
  IconInformationMarkCircle,
  IconTickCircle,
} from "@mirohq/design-system";
import classNames from "classnames";
import React from "react";

export type Message = {
  variant: AlertVariant;
  content: string;
};

export type AlertVariant = "info" | "danger" | "success" | "warning" | "idle";

type Props = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant: AlertVariant;
};

const variantProps = {
  info: {
    className:
      "text-blue-800 border-blue-300 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
    icon: <IconInformationMarkCircle />,
  },
  danger: {
    className:
      "text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
    icon: <IconExclamationPointCircle />,
  },
  warning: {
    className:
      "text-yellow-800 border-yellow-300 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-800",
    icon: <IconTickCircle />,
  },
  success: {
    className:
      "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
    icon: <IconExclamationPointCircle />,
  },
  idle: {
    className:
      "text-gray-800 border-gray-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800",
    icon: <IconExclamationPointCircle />,
  },
} as const;

export function Alert({ children, variant, icon }: Props) {
  return (
    <div
      className={classNames(
        "flex items-center gap-3 rounded-lg border p-4",
        variantProps[variant].className
      )}
      role="alert"
    >
      {icon ?? variantProps[variant].icon}
      <div className="font-medium">{children}</div>
    </div>
  );
}
