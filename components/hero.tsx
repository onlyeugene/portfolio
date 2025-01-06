"use client";

import { ChevronUp, ChevronDown} from "lucide-react";
import React, { useState } from "react";
import photos from "@/assets/ios/Photos.svg";
import contacts from "@/assets/ios/Contacts.svg";
import files from "@/assets/ios/Files.svg";
import notes from "@/assets/ios/Notes.svg";
import safari from "@/assets/ios/Safari.svg";
import settings from '@/assets/ios/Settings.svg'
import weather from "@/assets/ios/Weather.svg";
import app from "@/assets/ios/App Store.svg";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "About Me",
    image: photos,
    url: "/about",
  },
  {
    title: "Projects",
    image: files,
    url: "/projects",
  },
  {
    title: 'Services',
    image: settings,
    url: '/services'
  },
  {
    title: 'Github',
    image: weather,
    url: '/github'
  },
  {
    title: 'Contact',
    image: contacts,
    url: '/contact'
  },
  {
    title: 'Blog',
    image: safari,
    url: '/blog'
  },
  {
    title: 'Skills',
    image: app,
    url: '/skill'
  },
  {
    title: 'Resume',
    image: notes,
    url: '/resume'
  },
];

function Hero() {
  const [isTagsVisible, setTagsVisible] = useState(false);

  return (
    <div className="text-white">
      <div className="flex items-center px-2 gap-2">
        <button onClick={() => setTagsVisible(!isTagsVisible)}>
          {!isTagsVisible ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
        </button>
        <h1 className=" font-semibold text-xs">Quick access</h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 place-items-center gap-20  py-5">
        {!isTagsVisible &&
          items.map((item) => (
            <Link href={item.url} key={item.title}>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="sm:w-20 h-auto  w-60"
                />
                <p className="text-xs">{item.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Hero;
