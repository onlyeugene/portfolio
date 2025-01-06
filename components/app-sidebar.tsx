"use client";

import { VscVscode } from "react-icons/vsc";
import { FcGallery, FcHome, FcPicture } from "react-icons/fc";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import blog from "@/assets/blog.webp";
import services from "@/assets/services.webp";
import resume from "@/assets/resume.webp";
import contact from "@/assets/contact.webp";
import cloud from "@/assets/cloud.webp";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: FcHome,
  },
  {
    title: "About",
    url: "/about",
    icon: FcGallery,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: VscVscode,
  },
];

const secondItems = [
  {
    title: "Skills",
    url: "/skills",
    icon: FcPicture,
  },
  {
    title: "Services",
    url: "/services",
    icon: services,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: contact,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: resume,
  },
  {
    title: "Github",
    url: "/github",
    icon: cloud,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: blog,
  },
];

const tags = [
  {
    title: "Red",
    class: "rounded-full bg-red-500 w-2 h-2",
  },
  {
    title: "Orange",
    class: "rounded-full bg-orange-500 w-2 h-2",
  },
  {
    title: "Yellow",
    class: "rounded-full bg-yellow-500 w-2 h-2",
  },
  {
    title: "Green",
    class: "rounded-full bg-green-500 w-2 h-2",
  },
  {
    title: "Blue",
    class: "rounded-full bg-blue-500 w-2 h-2",
  },
  {
    title: "Purple",
    class: "rounded-full bg-purple-500 w-2 h-2",
  },
  {
    title: "Grey",
    class: "rounded-full bg-gray-500 w-2 h-2",
  },
  {
    title: "All Tags...",
    class: "rounded-full bg-transparent border border-gray-400 w-2 h-2",
  },
];

export function AppSidebar() {
  const [isTagsVisible, setTagsVisible] = useState(false);

  return (
    <Sidebar className="text-white w-40">
      <SidebarContent className="bg-[#1c1c1c]">
        <SidebarGroup className="space-y-10 px-0 py-3">
          <SidebarGroupLabel className="border-b rounded-none px-0 border-gray-700 shadow-sm">
            {/* <span className="rounded-full border w-[15px] h-4 px-[4px] bg-red-500 border-red-500 text-red-800">x</span> */}
            {/* <XCircle style={{color: 'red'}}/> */}
          </SidebarGroupLabel>
          <SidebarGroupContent className="space-y-10 ">
            <SidebarMenu>
              <h1 className="px-4 font-semibold text-xs text-gray-500">
                Favorites
              </h1>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="px-2">
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarSeparator className="m-0 bg-gray-700 mt-2" />
            </SidebarMenu>
            <SidebarMenu>
              <h1 className="px-4 font-semibold text-xs text-gray-500">
                ICloud
              </h1>
              {secondItems.map((item) => (
                <SidebarMenuItem key={item.title} className="px-2">
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {typeof item.icon === "function" ? (
                        <item.icon />
                      ) : (
                        <Image
                          src={item.icon}
                          alt={item.title}
                          className="w-4 h-4"
                        />
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenu className="border-none bg-transparent gap-0">
              <div className="flex items-center justify-between px-2">
                <h1 className="px-4 font-semibold text-xs text-gray-500">
                  Tags
                </h1>
                <button onClick={() => setTagsVisible(!isTagsVisible)} className="bg-transparent">
                  {!isTagsVisible ? (
                      <ChevronDown size={12} />
                ) : (
                    <ChevronRight size={12} />
                  )}
                </button>
              </div>
              {!isTagsVisible &&
                tags.map((item) => (
                  <SidebarMenuItem key={item.title} className="px-2 border-none ">
                    <SidebarMenuButton asChild className="hover:border-none hover:text-white hover:bg-transparent cursor-default active:text-white active:bg-transparent">
                      <div className="flex">
                        <span className={`${item.class}`} />
                        <p className="text-xs">{item.title}</p>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
