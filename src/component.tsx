import React from "react";
import type { Profile } from "./profile.ts";

export function ProfileCard({ profile }: { profile: Profile }) {
  return React.createElement("article", null,
    React.createElement("strong", null, profile.name),
    React.createElement("span", null, profile.email),
  );
}
