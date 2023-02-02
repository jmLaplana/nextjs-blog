import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am John Michael Laplana, 20 years of age and I live in Mexico, Pampanga.  
			I look forward to learn new skills and improve my knowledge to advance my career.
			In five years from now, I see myself as a knowledgeable professional having an in-depth	
			knowledge of the company and the industry.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}