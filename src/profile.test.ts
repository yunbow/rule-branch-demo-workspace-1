import { describe, expect, it } from "vitest";
import { validateProfile } from "./profile";

describe("validateProfile", () => {
  it("accepts a valid profile", () => {
    const result = validateProfile({
      name: "RuleBranch Demo",
      email: "judge@example.com",
      role: "reviewer",
      receiveUpdates: true,
    });

    expect(result.success).toBe(true);
  });

  it("returns readable issues for invalid input", () => {
    const result = validateProfile({
      name: "A",
      email: "invalid",
      role: "unknown",
      receiveUpdates: true,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.issues.length).toBeGreaterThanOrEqual(2);
    }
  });
});
