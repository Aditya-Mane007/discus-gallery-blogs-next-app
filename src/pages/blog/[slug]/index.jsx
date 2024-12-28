import React, { useState } from "react";
import { useRouter } from "next/router";
import { fetchBlog } from "@/utils/apis";
import Image from "next/image";
import Head from "next/head";

function index(data) {
  console.log(data.data.items[0]);
  const mainImage = data && data.data.items[0].fieldData["main-image"].url;
  const title = data && data.data.items[0].fieldData.name;
  const blogContent = data && data.data.items[0].fieldData["post-body"];
  const postSummary = data && data.data.items[0].fieldData["post-summary"];
  const slug = data && data.data.items[0].fieldData.slug;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={postSummary} />
        <link
          rel="canonical"
          href={`https://discusgalleryblogs.vercel.app/blog/${slug}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={postSummary} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://discusgalleryblogs.vercel.app/blog/${slug}`}
        />
        <meta property="og:image" content={mainImage} />
        
        <meta name="twitter:card" content={mainImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={postSummary} />
        <meta name="twitter:image" content={mainImage} />
      </Head>
      <div className="blogSection px-4 my-4">
        <div className="mainImage h-72 mb-4">
          <Image
            src={mainImage}
            alt={title}
            width={1000}
            height={1000}
            className="h-[100%] w-[100%] object-fill rounded-xl"
          />
        </div>
        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: blogContent }}
        />
      </div>
    </>
  );
}

export default index;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const response = await fetchBlog(slug);
  return {
    props: {
      data: response,
    },
  };
};
