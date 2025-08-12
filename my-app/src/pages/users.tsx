import { GetServerSideProps } from "next";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UsersPageProps {
  users: User[];
  timestamp: string;
}

export default function UsersPage({ users, timestamp }: UsersPageProps) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>ユーザー一覧（getServerSideProps）</h1>
      <p>取得時刻: {timestamp}</p>
      <p>毎回リクエスト時にサーバーサイドでデータを取得します</p>

      <div style={{ marginTop: "20px" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
            }}
          >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px", fontSize: "14px", color: "#666" }}>
        <p>ページをリロードするたびに新しいタイムスタンプが表示されます</p>
        <p>これはgetServerSidePropsがリクエストごとに実行されるためです</p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("getServerSideProps実行中...");

  try {
    // 外部APIからデータを取得（JSONPlaceholderを使用）
    const host = context.req.headers.host || "localhost:3000";
    const protocol = /^localhost/.test(host) ? "http" : "https";
    const response = await fetch(`${protocol}://${host}/api/user`);
    const { data, timestamp } = await response.json();

    return {
      props: {
        users: data,
        timestamp,
      },
    };
  } catch (error) {
    console.error("データ取得エラー:", error);

    return {
      props: {
        users: [],
        timestamp: new Date().toLocaleString("ja-JP"),
      },
    };
  }
};
