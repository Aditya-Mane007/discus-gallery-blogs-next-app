import LandscapeWarning from "@/components/LandscapeWarning";
import { fetchBlogs } from "@/utils/apis";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { useState } from "react";

function Home({ data }) {
  const blogs = data;
  return (
    <>
      <Head>
        <title>Home | Discus Gallery Blogs</title>
        <meta
          name="description"
          content="Your guide to discus fish care, diet, water tips, and thriving aquarium insights!"
        />
        <link rel="canonical" href="https://discusgalleryblogs.vercel.app/" />
        <meta property="og:title" content="Home | Discus Gallery Blogs" />
        <meta
          property="og:description"
          content="Your guide to discus fish care, diet, water tips, and thriving aquarium insights!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://discusgalleryblogs.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dj524uqwc/image/upload/v1735403400/DiscusGalleryBlack_prsott.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Discus Gallery Blogs" />
        <meta
          name="twitter:description"
          content="Your guide to discus fish care, diet, water tips, and thriving aquarium insights!"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dj524uqwc/image/upload/v1735403400/DiscusGalleryBlack_prsott.svg"
        />
      </Head>

      <div className="w-full h-auto blogs">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link href={"/blog/" + blog.fieldData.slug} key={blog.id}>
              <div className="w-full h-72 bg-[#444444] mb-8 rounded-2xl cursor-pointer flex blog">
                <div className="w-[50%]">
                  <img
                    src={blog.fieldData?.["main-image"].url}
                    alt=""
                    className="w-[100%] max-md:h-full h-full object-fill rounded-2xl blog-image"
                  />
                </div>
                <div className="w-[50%] my-4 h-auto ">
                  <div className="max-md:text-xl text-2xl my-2 px-4">
                    {blog.fieldData.name.slice(0, 60)}...
                  </div>
                  <p className="text-text-sm px-4">
                    {blog.fieldData?.["post-summary"]?.slice(0, 60) || ""}
                  </p>
                  <p className="px-4 py-1 font-mono font-bold">Read More...</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1>No Data Available to Show , Please check in sometime</h1>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchBlogs();
  return {
    props: {
      data: data.items,
    },
  };
};

export default Home;
