import { useState, type FormEvent } from "react";
import { ProfileCard } from "./component";
import { validateProfile, type Profile } from "./profile";

const dependencyChanges = [
  { name: "React", before: "18", after: "19" },
  { name: "Zod", before: "3", after: "4" },
];

export function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [issues, setIssues] = useState<string[]>([]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = validateProfile({
      name: form.get("name"),
      email: form.get("email"),
      role: form.get("role"),
      receiveUpdates: form.get("receiveUpdates") === "on",
    });

    if (!result.success) {
      setProfile(null);
      setIssues(result.issues);
      return;
    }

    setIssues([]);
    setProfile(result.data);
  };

  return (
    <main className="appShell">
      <section className="hero">
        <p className="eyebrow">RuleBranch · Hackathon Judge Demo</p>
        <h1>コードが変われば、ルールも育つ。</h1>
        <p className="lead">
          React 19 / Zod 4 への依存更新を題材に、RuleBranchがコードと開発ルールの
          ずれを検出し、根拠付きの改定案へつなげるシナリオを確認できます。
        </p>
        <div className="dependencyGrid">
          {dependencyChanges.map((dependency) => (
            <article key={dependency.name}>
              <strong>{dependency.name}</strong>
              <span>{dependency.before}</span>
              <span aria-hidden="true">→</span>
              <span className="dependencyAfter">{dependency.after}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contentGrid">
        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="step">DEMO APP</p>
              <h2>プロフィールを検証する</h2>
            </div>
            <span className="badge">Zod 4</span>
          </div>

          <p className="panelDescription">
            このフォームは <code>src/profile.ts</code> のスキーマで検証されます。
            RuleBranchではこの実装と依存バージョンをEvidenceとして扱います。
          </p>

          <form onSubmit={submit} className="profileForm">
            <label>
              <span>名前</span>
              <input name="name" defaultValue="RuleBranch Demo" required />
            </label>
            <label>
              <span>メールアドレス</span>
              <input
                name="email"
                type="email"
                defaultValue="judge@example.com"
                required
              />
            </label>
            <label>
              <span>ロール</span>
              <select name="role" defaultValue="reviewer">
                <option value="developer">Developer</option>
                <option value="reviewer">Reviewer</option>
                <option value="maintainer">Maintainer</option>
              </select>
            </label>
            <label className="checkboxRow">
              <input name="receiveUpdates" type="checkbox" defaultChecked />
              <span>RuleBranchの更新通知を受け取る</span>
            </label>
            <button type="submit">Zodで検証する</button>
          </form>

          {issues.length > 0 && (
            <div className="validationError" role="alert">
              <strong>入力を確認してください</strong>
              <ul>
                {issues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {profile && (
            <div className="validationResult">
              <p>Validation passed</p>
              <ProfileCard profile={profile} />
            </div>
          )}
        </article>

        <aside className="panel flowPanel">
          <p className="step">RULEBRANCH FLOW</p>
          <h2>審査で見るポイント</h2>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>Dependency Drift</strong>
                <p><code>package.json</code> の React / Zod メジャー更新を検出。</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Evidence</strong>
                <p><code>src/profile.ts</code> などの実装を根拠として関連付け。</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>AI Evaluation</strong>
                <p>Gemini、Vertex AI Evaluation、Model Armorで改定案を評価。</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <strong>Human-in-the-loop</strong>
                <p>高リスク・低信頼の判断は人間へエスカレーション。</p>
              </div>
            </li>
            <li>
              <span>05</span>
              <div>
                <strong>Draft PR</strong>
                <p>承認済みルールをAIエージェント向けファイルへ展開。</p>
              </div>
            </li>
          </ol>
        </aside>
      </section>
    </main>
  );
}
