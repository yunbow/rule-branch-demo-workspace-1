# RuleBranch Demo Workspace 1

**Zenn 第5回 Agentic AI Hackathon with Google Cloud** の RuleBranch 審査デモ用プロジェクトです。

このRepositoryには、RuleBranchが「コードの変化 → ルールのずれ → 改定提案 → 評価 → Draft PR」を扱う流れを確認するための、小さなReactアプリを配置しています。

## デモアプリ

React 19 + TypeScript + Zod 4 で作ったプロフィール入力・検証アプリです。

- フォーム入力を `src/profile.ts` のZodスキーマで検証
- 正常時はReactでプロフィールカードを表示
- React 18 → 19 / Zod 3 → 4 のメジャー更新をRuleBranchのDrift題材として利用
- `package.json` と `src/profile.ts` がRuleBranch上のEvidenceとして対応

### 起動

```bash
npm install
npm run dev
```

ブラウザで表示されたViteのURLを開いてください。

### テスト・ビルド

```bash
npm run typecheck
npm test
npm run build
```

## 主なファイル

```text
.
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── component.tsx
│   ├── main.tsx
│   ├── profile.ts
│   ├── profile.test.ts
│   └── styles.css
├── AGENTS.md
├── CLAUDE.md
├── .github/
│   └── copilot-instructions.md
└── .rulebranch/
    └── rules/
        └── L3/
            └── dependency-compatibility.md
```

## RuleBranch デモ

- Web: https://rulebranch-web-fab7jjl4ta-an.a.run.app/login
- 初期ルール反映: https://github.com/yunbow/rule-branch-demo-workspace-1/pull/1
- React 19 / Zod 4 対応のDraft PR: https://github.com/yunbow/rule-branch-demo-workspace-1/pull/2

Webでは「デモを見る」から審査用ID・パスワードでログインし、読み取り専用Workspaceで確認します。

## デモシナリオ

1. React 18 / Zod 3 を前提にした開発ルールをRuleBranchから反映
2. `package.json` の依存関係をReact 19 / Zod 4へ更新
3. RuleBranchがDependency Driftを検出
4. Geminiが `package.json` や `src/profile.ts` を根拠に改定案を生成
5. Vertex AI Evaluation / Model Armorの評価結果に応じて人間へエスカレーション
6. 承認済みルールをAIコーディングエージェント向けファイルへ変換
7. GitHubへDraft PRとして提示し、人間が最終判断

## 審査時の確認順

RuleBranchの審査用Workspaceでは、次の順番で確認できます。

1. **Drift**
   - React / Zod の依存更新
   - Evidence
   - confidence / severity
2. **承認待ち**
   - AIによる改定提案
   - Judge score
   - Groundedness
   - 人間確認になった理由
3. **反映状況**
   - 生成された `AGENTS.md`
   - `CLAUDE.md`
   - `.github/copilot-instructions.md`
   - `.rulebranch/rules/**`
4. **GitHub Draft PR**
   - RuleBranchが生成した変更差分
   - 自動マージせず人間が最終確認する境界

## GitHub上の状態

- **PR #1**: 初期ルール反映、マージ済み
- **main**: React 19 / Zod 4への依存更新を含む
- **PR #2**: 更新後のRuleBranchルールを示すDraft PR

審査中はPR #2をDraftのまま維持します。

> このRepositoryは審査デモ専用です。本番プロジェクトのコードや秘密情報は含みません。
