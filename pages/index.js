import Head from 'next/head'
import { GraphQLClient } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import Link from '../components/Link';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/cksgb4mr00i8i01z46qk47jci/master"
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
        bio {
          raw
        }
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
        <title>GraphCMS Link Bio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="avatar py-4">
          <Image className="rounded-full" src={avatar.url} alt={title} width={150} height={150} />
        </div>
        <div className="pb-4">
          <RichText content={bio.raw.children} />
        </div>
        <ul className="flex-col">
          <Link pageLinks={pageLinks} />
        </ul>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <ul className="flex flex-col justify-center items-center">
          <li>Created by <a href="https://twitter.com/castroalves">@castroalves</a> | <a href="#">Get yours</a></li>
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
