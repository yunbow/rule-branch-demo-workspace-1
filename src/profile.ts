import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export type Profile = z.infer<typeof profileSchema>;

export function parseProfile(input: unknown): Profile {
  return profileSchema.parse(input);
}
