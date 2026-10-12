import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().trim().min(2, "名前は2文字以上で入力してください").max(50),
  email: z.string().trim().email("メールアドレスの形式を確認してください"),
  role: z.enum(["developer", "reviewer", "maintainer"]),
  receiveUpdates: z.boolean(),
});

export type Profile = z.infer<typeof profileSchema>;

export type ValidationResult =
  | { success: true; data: Profile }
  | { success: false; issues: string[] };

export function validateProfile(input: unknown): ValidationResult {
  const result = profileSchema.safeParse(input);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return {
    success: false,
    issues: result.error.issues.map((issue) => issue.message),
  };
}
