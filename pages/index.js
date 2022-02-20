import Head from 'next/head'
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="text-xl leading-normal mt-4 mb-6">
        <p>
          Hello, I'm Salvador or Chava as everyone calls me. I'm a software engineer
          on Arkusnexus living in Tijuana, B.C.{' '}
        </p>
      </section>

      <section>
        <h2 className="text-2xl leading-snug my-4 mx-0 font-bold">
          Blog
        </h2>

        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-0 mx-0 mb-5" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />

              <small className='text-sm font-light'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
