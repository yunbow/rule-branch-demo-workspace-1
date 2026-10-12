import type { Profile } from "./profile";

const roleLabel: Record<Profile["role"], string> = {
  developer: "Developer",
  reviewer: "Reviewer",
  maintainer: "Maintainer",
};

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="profileCard">
      <div className="avatar" aria-hidden="true">
        {profile.name.slice(0, 1).toUpperCase()}
      </div>
      <div>
        <p className="profileRole">{roleLabel[profile.role]}</p>
        <h3>{profile.name}</h3>
        <p>{profile.email}</p>
        <small>
          Rule updates: {profile.receiveUpdates ? "enabled" : "disabled"}
        </small>
      </div>
    </article>
  );
}
