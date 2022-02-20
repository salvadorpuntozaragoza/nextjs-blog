import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  }
} 

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className="text-xl font-bold mt-8">
          {postData.title}
        </h1>

        <div className="text-sm font-light mb-12">
          <Date dateString={postData.date} />
        </div>
        
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </Layout>
  )
}