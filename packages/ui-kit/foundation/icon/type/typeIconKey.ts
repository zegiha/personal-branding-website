import type * as z from "zod";
import type { ZodEnumIconKey } from "../const";

export type TypeIconKey = z.infer<typeof ZodEnumIconKey>;
