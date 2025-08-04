🚀 モダンフロントエンド集中キャッチアップ ToDoリスト
序章：学習の進め方
[ ] 学習用プロジェクトの作成: このリストの成果物をすべて実装する「Todoアプリ」用のリポジトリをGitHubに作成する。

[ ] 公式ドキュメントのブックマーク: 使用する技術（Next.js, Recoil, tRPCなど）の公式サイトをブックマークしておく。

[ ] 毎日コミット: 小さな進捗でも良いので、学習した内容を毎日コミットする癖をつける。

✅ 第1フェーズ：基礎固め（1〜5日目）
1〜2日目: React + TypeScript の再確認
[ ] 環境構築

[ ] npm create vite@latest my-react-app -- --template react-ts でVite + React + TSのプロジェクトを作成する。

[ ] Hooksの復習

[ ] useState: 基本的な状態の宣言と更新を実装する。

[ ] useEffect: コンポーネントのマウント時・アンマウント時（クリーンアップ関数）に処理を実行する。

[ ] useCallback: 関数のメモ化が必要な場面を理解し、実装してみる。

[ ] useMemo: 値のメモ化が必要な場面を理解し、実装してみる。

[ ] カスタムフック

[ ] 状態の表示/非表示を切り替える useToggle フックを自作する。

[ ] TypeScriptでの型付け

[ ] コンポーネントのPropsに型を付ける（type Props = { ... }）。

[ ] useStateに明示的に型を付ける（例: useState<string[] | null>(null)）。

[ ] onClick や onChange などのイベントハンドラに型を付ける。

[ ] 成果物

[ ] Todoの追加と一覧表示ができる、コンポーネント分割されたTodoアプリの雛形を作成する。

3〜4日目: Next.js (Pages Router) の基礎
[ ] プロジェクト作成

[ ] npx create-next-app@latest --typescript でNext.jsプロジェクトを作成する（pages routerを選択）。

[ ] Pages Routerの理解

[ ] pages/index.tsx がルート(/)に対応することを確認する。

[ ] pages/about.tsx を作成し、/about ページを追加する。

[ ] pages/todos/[id].tsx を作成し、動的ルーティングを実装する。

[ ] データ取得方法の理解

[ ] getServerSideProps を使って、リクエスト時にサーバーサイドでデータをフェッチするページを作成する。

[ ] getStaticProps を使って、ビルド時にデータをフェッチするページを作成する。

[ ] 上記2つの違いと、どのような場合にどちらを使うべきかを自分の言葉で説明できるようにする。

[ ] API Routes

[ ] pages/api/hello.ts を作成し、JSONを返す簡単なAPIエンドポイントを実装する。

[ ] スタイリング

[ ] [componentName].module.css ファイルを作成し、CSS Modulesを使ったスタイリングをコンポーネントに適用する。

[ ] 成果物

[ ] Viteで作成したTodoアプリをNext.jsに移植する。

5日目: 状態管理 (Recoil)
[ ] 導入

[ ] npm install recoil でライブラリをインストールする。

[ ] pages/_app.tsx に <RecoilRoot> を設置する。

[ ] 基本機能の実装

[ ] src/recoil/atoms.ts のようなファイルを作成し、Todoリストを管理する atom を定義する。

[ ] Todoリストを表示するコンポーネントで useRecoilValue を使って atom の値を読み取る。

[ ] Todoを追加するコンポーネントで useRecoilState または useSetRecoilState を使って atom の値を更新する。

[ ] 派生状態の管理

[ ] Todoリストの中から完了済みのタスク数などを計算する selector を定義し、useRecoilValue で表示する。

[ ] 成果物

[ ] Todoアプリの状態管理を、コンポーネントのPropsリレーからRecoilに置き換える。

✅ 第2フェーズ：アプリケーション開発の実践（6〜10日目）
6〜7日目: フォーム実装 (React Hook Form + Zod)
[ ] 導入

[ ] npm install react-hook-form zod @hookform/resolvers をインストールする。

[ ] スキーマ定義

[ ] Zodを使って、新しいTodoの入力フォーム用のスキーマを定義する（例: task: z.string().min(1, "タスク名は必須です")）。

[ ] フォーム実装

[ ] useForm フックを呼び出し、register と handleSubmit を取得する。

[ ] <input> に {...register("task")} を渡してフォームコントロールと連携させる。

[ ] <form> の onSubmit に handleSubmit を渡す。

[ ] formState: { errors } を使って、バリデーションエラーメッセージを表示する。

[ ] 連携

[ ] useForm の resolver オプションに zodResolver(schema) を渡してZodと連携させる。

[ ] 成果物

[ ] Todoアプリの入力フォームをReact Hook Form + Zodでリファクタリングし、リアルタイムバリデーションを実装する。

8〜10日目: API通信と型安全 (tRPC)
[ ] 導入と設定

[ ] 必要なtRPC関連ライブラリをインストールする (@trpc/client, @trpc/server, @trpc/react-query, @trpc/next)。

[ ] サーバーサイド (server/trpc.ts など) でtRPCの初期化処理を記述する。

[ ] フロントエンド (utils/trpc.ts など) でtRPCクライアントの設定を行う。

[ ] pages/_app.tsx をtRPCのProviderでラップする。

[ ] バックエンド実装 (API)

[ ] server/routers/todo.ts のようなファイルを作成し、Todo用のルーターを定義する。

[ ] query プロシージャを定義する（例: getAll, getById）。入力にはZodを使用する。

[ ] mutation プロシージャを定義する（例: create, update, delete）。入力にはZodを使用する。

[ ] 作成したルーターをメインのルーターにマージし、API Route (pages/api/trpc/[trpc].ts) で公開する。

[ ] フロントエンド実装 (UI)

[ ] api.todo.getAll.useQuery() を使ってTodoリストをフェッチし、表示する。

[ ] isLoading や error 状態をハンドリングして、ローディング表示やエラー表示を行う。

[ ] api.todo.create.useMutation() を使って新しいTodoを作成する。

[ ] mutation成功時にuseQueryのキャッシュを更新（invalidate）する処理を実装する。

[ ] 成果物

[ ] Todoアプリのデータ管理を、Recoilのローカル状態からtRPC経由でのAPI通信に完全に置き換える。

✅ 第3フェーズ：品質と開発効率の向上（11〜13日目）
11日目: テスティング (Jest + MSW)
[ ] 導入と設定

[ ] jest, @testing-library/react, msw などをインストールし、Jestの設定 (jest.config.js) を行う。

[ ] 単純なコンポーネントのテスト

[ ] ButtonのようなUIコンポーネントが、渡されたProps通りに正しくレンダリングされるかテストする。

[ ] MSWのセットアップ

[ ] src/mocks ディレクトリを作成し、handlers.ts にtRPCのリクエストをモックするハンドラを記述する。

[ ] Jestのテストセットアップファイルで、MSWのモックサーバーを起動・終了する設定を行う。

[ ] API通信を行うコンポーネントのテスト

[ ] Todoリストを表示するコンポーネントをレンダリングし、MSWが返したモックデータが画面に表示されることを waitFor などを使って非同期にテストする。

[ ] 成果物

[ ] Buttonコンポーネントと、Todoリスト表示コンポーネントのテストコードを作成する。

12日目: コンポーネント駆動開発 (Storybook)
[ ] 導入と設定

[ ] npx storybook@latest init を実行してStorybookをプロジェクトに導入する。

[ ] Storyの作成

[ ] Button.stories.tsx を作成し、default, disabled などのバリエーションをStoryとして定義する。

[ ] args を使って、コンポーネントに渡すPropsを定義する。

[ ] StorybookのControlsアドオンで、Propsをブラウザ上から動的に変更できることを確認する。

[ ] 成果物

[ ] Buttonコンポーネントと TodoItem コンポーネントのStoryを作成し、コンポーネントカタログを構築する。

13日目: 総仕上げと周辺知識
[ ] 周辺知識のキャッチアップ

[ ] Next.jsにおける環境変数の扱い方（.env.local, NEXT_PUBLIC_プレフィックス）について調べる。

[ ] 全体像の整理

[ ] 作成したTodoアプリの技術スタック構成図を自分で描いてみる（どの技術がどの部分で、どのように連携しているか）。

[ ] これまでの学習内容を俯瞰し、特に重要だと感じたポイントをメモにまとめる。

[ ] 実務への準備

[ ] この12日間で解決できなかった疑問点をリストアップする。

[ ] プロジェクト固有のルールや設計思想について、参画後に質問したいことをまとめる（例: エラーハンドリングの共通方針、tRPCルーターの設計ルールなど）。