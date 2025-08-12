import { GetStaticProps } from 'next';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: Post[];
  buildTime: string;
}

export default function PostsPage({ posts, buildTime }: PostsPageProps) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>記事一覧（getStaticProps）</h1>
      <p>ビルド時刻: {buildTime}</p>
      <p>ビルド時に一度だけデータを取得し、静的に生成されます</p>
      
      <div style={{ marginTop: '20px' }}>
        {posts.slice(0, 5).map((post) => (
          <article key={post.id} style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            margin: '15px 0',
            borderRadius: '5px'
          }}>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>
              {post.title}
            </h3>
            <p style={{ lineHeight: '1.6', color: '#666' }}>
              {post.body}
            </p>
            <small style={{ color: '#999' }}>投稿ID: {post.id}</small>
          </article>
        ))}
      </div>
      
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <p>ページをリロードしてもビルド時刻は変わりません</p>
        <p>これはgetStaticPropsがビルド時に一度だけ実行されるためです</p>
        <p>（開発モードでは毎回実行されますが、本番ビルドでは静的生成されます）</p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps実行中...');
  
  try {
    // 外部APIからデータを取得（JSONPlaceholderを使用）
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();
    
    // ビルド時刻を取得（ビルド時に固定されることを確認するため）
    const buildTime = new Date().toLocaleString('ja-JP');
    
    return {
      props: {
        posts,
        buildTime,
      },
      // ISR（Incremental Static Regeneration）
      // 60秒ごとにページを再生成（オプション）
      revalidate: 60,
    };
  } catch (error) {
    console.error('データ取得エラー:', error);
    
    return {
      props: {
        posts: [],
        buildTime: new Date().toLocaleString('ja-JP'),
      },
      revalidate: 60,
    };
  }
};