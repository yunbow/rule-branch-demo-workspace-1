# RuleBranch Demo Workspace 1

このリポジトリは **Zenn 第5回 Agentic AI Hackathon with Google Cloud** の RuleBranch 審査デモ専用です。

## デモシナリオ

1. React 18 / Zod 3 を前提にした開発ルールを RuleBranch から反映
2. 依存関係を React 19 / Zod 4 へ更新
3. RuleBranch が dependency drift を検出
4. Gemini が根拠付きのルール改定案を生成
5. Vertex AI Evaluation / Model Armor の評価結果に応じて人間へエスカレーション
6. 承認されたルールを AI コーディングエージェント向けファイルへ変換し Draft PR で提示

このリポジトリは審査デモ専用で、本番プロジェクトのコードは含みません。
