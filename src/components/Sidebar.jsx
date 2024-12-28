import { InstagramIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="sidebar max-h-screen">
      <div className="logo text-4xl mb-0 max-[1440px]:mb-6">
        <Link href="/">Discus Gallery</Link>
      </div>
      <hr className="hidden max-[1440px]:block" />
      <p className="text-md mt-4 mb-6 description">
        Hello , Welocme to Discus Gallery Blog,
        <br />
        Explore the vibrant world of discus fish! From tank setup and water care
        to feeding and breeding tips, this blog is your go-to guide for keeping
        these stunning aquarium kings happy and healthy .
      </p>
      <hr className="hidden max-[1440px]:block" />

      <div className="flex flex-col my-4 links">
        <Link href="/" className="my-1 text-lg link">
          Home
        </Link>
        <Link href="/about" className="my-1 text-lg link">
          About
        </Link>
      </div>

      <hr className="hidden max-[1440px]:block" />
      <div className="flex items-center my-4 socials">
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
  );
}

export default Sidebar;
