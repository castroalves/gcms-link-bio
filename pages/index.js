import Head from 'next/head'
import { GraphQLClient } from "graphql-request";
import Image from "next/image";
import Link from '../components/Link';

export async function getServerSideProps() {

  require("dotenv").config();

  const graphcms = new GraphQLClient(
    process.env.GRAPHCMS_ENDPOINT, {
      headers: {
        authorization: `BEARER ${process.env.GRAPHCMS_AUTH_TOKEN}`
      }
    }
  );

  const { pages } = await graphcms.request(
    `
    query GetPage {
      pages {
        title
        avatar {
          id
          url
          width
          height
        }
        bio
        pageLinks {
          ... on Link {
            id
            title
            url
          }
        }
      }
    }
    `
  );

  // console.log(pages);

  return {
    props: {
      pages
    }
  };
}

export default function Home({ pages }) {
  const { title, bio, avatar, pageLinks } = pages[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{title} | GraphCMS Link Bio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-2 flex-1 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="avatar py-4">
          <Image className="rounded-full" src={avatar.url} alt={title} width={150} height={150} />
        </div>
        <div className="pb-4">
          {bio}
        </div>
        <div className="w-full lg:w-96">
          <ul className="flex-col">
            <Link pageLinks={pageLinks} />
          </ul>
        </div>
        
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <ul className="flex flex-col justify-center items-center">
          <li>
            Created by <a href="https://twitter.com/castroalves">@castroalves</a> | 
            <a href="https://app.graphcms.com/clone/7d0621683b454318949909b9fd7d0587?name=GraphCMS%20Link%20Bio"><img src="https://graphcms.com/button" alt="Clone project"/></a></li>
          <li>
            Powered by <a
              href="https://graphcms.com?utm_source=gcms-link-bio&amp;utm_medium=footer-link&amp;utm_campaign=gcms-link-bio"
              target="_blank"
              rel="noopener noreferrer"
            >GraphCMS</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
