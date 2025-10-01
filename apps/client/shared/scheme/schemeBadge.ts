import { ZodEnumIconKey } from "ui-kit/foundation";
import * as z from "zod";

export const SchemeBadge = z.object({
  label: z.string(),
  leadIcon: z.optional(ZodEnumIconKey),
  trailIcon: z.optional(ZodEnumIconKey),
});
