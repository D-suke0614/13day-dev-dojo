import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js データ取得学習</title>
        <meta
          name="description"
          content="getServerSideProps と getStaticProps の学習"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Next.js データ取得方法の学習</h1>

        <div style={{ marginTop: "30px" }}>
          <h2>データ取得方法の比較</h2>

          <div
            style={{
              display: "grid",
              gap: "20px",
              marginTop: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>getServerSideProps</h3>
              <p>リクエストごとにサーバーサイドで実行</p>
              <Link
                href="/users"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 16px",
                  backgroundColor: "#0070f3",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                ユーザー一覧を見る
              </Link>
            </div>

            <div
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>getStaticProps</h3>
              <p>ビルド時に一度だけ実行（静的生成）</p>
              <Link
                href="/posts"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 16px",
                  backgroundColor: "#28a745",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                記事一覧を見る
              </Link>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3>動的ルート（getStaticPaths + getStaticProps）</h3>
            <p>記事詳細ページ（1-5まで事前生成済み）:</p>
            <div style={{ marginTop: "10px" }}>
              {[1, 2, 3, 4, 5].map((id) => (
                <Link
                  key={id}
                  href={`/posts/${id}`}
                  style={{
                    display: "inline-block",
                    margin: "5px",
                    padding: "6px 12px",
                    backgroundColor: "#6c757d",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  記事{id}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2>その他のページ</h2>
          <Link
            href="/about"
            style={{
              display: "inline-block",
              margin: "5px",
              padding: "8px 16px",
              backgroundColor: "#17a2b8",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            About
          </Link>
          <Link
            href="/todo"
            style={{
              display: "inline-block",
              margin: "5px",
              padding: "8px 16px",
              backgroundColor: "#17a2b8",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Todo
          </Link>
        </div>
      </div>
    </>
  );
}
