import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostDetailPageProps {
  post: Post | null;
  buildTime: string;
}

export default function PostDetailPage({ post, buildTime }: PostDetailPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => router.back()}
        style={{ 
          marginBottom: '20px', 
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← 戻る
      </button>
      
      <article>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          {post.title}
        </h1>
        
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '20px',
          fontSize: '14px',
          color: '#666'
        }}>
          <p>記事ID: {post.id} | ユーザーID: {post.userId}</p>
          <p>ビルド時刻: {buildTime}</p>
        </div>
        
        <div style={{ 
          lineHeight: '1.8', 
          fontSize: '16px',
          color: '#444'
        }}>
          {post.body.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '15px' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      
      <div style={{ 
        marginTop: '40px', 
        padding: '15px',
        backgroundColor: '#e3f2fd',
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        <h3>getStaticPaths + getStaticPropsの動作</h3>
        <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
          <li>getStaticPathsで事前生成するIDを指定</li>
          <li>getStaticPropsで各IDのデータを取得</li>
          <li>ビルド時に静的ページとして生成</li>
        </ul>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('getStaticPaths実行中...');
  
  try {
    // 事前生成するページのIDを取得（最初の5記事のみ）
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();
    
    // 最初の5つのIDのみ事前生成
    const paths = posts.slice(0, 5).map((post) => ({
      params: { id: post.id.toString() },
    }));

    return {
      paths,
      // fallback: falseの場合、pathsに含まれないページは404
      // fallback: trueの場合、pathsに含まれないページも動的生成
      fallback: false,
    };
  } catch (error) {
    console.error('パス取得エラー:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('getStaticProps実行中（記事詳細）...', params);
  
  const id = params?.id;
  
  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if (!response.ok) {
      return {
        notFound: true,
      };
    }
    
    const post: Post = await response.json();
    const buildTime = new Date().toLocaleString('ja-JP');
    
    return {
      props: {
        post,
        buildTime,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('記事取得エラー:', error);
    
    return {
      notFound: true,
    };
  }
};