# RuleBranch Demo Workspace 1

このリポジトリは **Zenn 第5回 Agentic AI Hackathon with Google Cloud** の RuleBranch 審査デモ専用です。

## RuleBranch デモ

- Web: https://rulebranch-web-fab7jjl4ta-an.a.run.app/login
- 初期ルール反映: https://github.com/yunbow/rule-branch-demo-workspace-1/pull/1
- React 19 / Zod 4 対応のDraft PR: https://github.com/yunbow/rule-branch-demo-workspace-1/pull/2

Webでは「デモを見る」から審査用ID・パスワードでログインし、読み取り専用Workspaceで確認します。

## デモシナリオ

1. React 18 / Zod 3 を前提にした開発ルールを RuleBranch から反映
2. 依存関係を React 19 / Zod 4 へ更新
3. RuleBranch が dependency drift を検出
4. Gemini が根拠付きのルール改定案を生成
5. Vertex AI Evaluation / Model Armor の評価結果に応じて人間へエスカレーション
6. 承認されたルールを AI コーディングエージェント向けファイルへ変換し Draft PR で提示

## 確認ポイント

- PR #1: 初期ルールがマージ済み
- `package.json`: React 19 / Zod 4 へ更新済み
- PR #2: RuleBranchの更新結果をDraft PRとして保持
- 最終マージは人間が行うため、PR #2は審査中はDraftのまま維持

このリポジトリは審査デモ専用で、本番プロジェクトのコードは含みません。
