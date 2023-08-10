import { z } from "zod";

export const SourceTypeSchema = z.enum(["USER", "BOARD", "TEAM"]);
