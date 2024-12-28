import { InstagramIcon, YoutubeIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

function About() {
  return (
    <>
      <Head>
        <title>About | Discus Gallery</title>
        <meta
          name="description"
          content="Your guide to discus fish care, diet, water tips, and thriving aquarium insights!"
        />
      </Head>
      <div className="w-full h-auto max-h-[100vh] about p-4">
        <div className="w-full h-96 max-[1440px]:h-72 bg-[#444444] rounded-2xl ">
          <img
            src="/assets/ProfileImage.jpg"
            alt="Aditya Mane"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="info  p-2">
          <div className="text-4xl">About Me</div>
          <p className="my-4  text-lg">
            Hi, I’m Aditya Mane, passionate discus fish enthusiast. Over the
            years, I’ve developed a deep love for these beautiful creatures and
            have dedicated my time to understanding how to care for and maintain
            them. Through this blog, I aim to share practical tips, personal
            experiences, and expert advice on keeping discus fish happy and
            healthy. Whether you’re new to the hobby or an experienced aquarist,
            I hope to provide valuable insights to make your journey with discus
            fish enjoyable and fulfilling. Join me as we explore the fascinating
            world of discus fish care!
          </p>
          <div className="flex items-center my-4">
            <Link
              href="https://instagram.com/adityamane.jsx"
              target="_blank"
              className="mr-4"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.youtube.com/@discusgallery4013"
              target="_blank"
              className="mr-4"
            >
              <YoutubeIcon size={30} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
