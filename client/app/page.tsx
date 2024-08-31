"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { Bs0Circle, BsBell, BsTwitter } from "react-icons/bs";
import { Inter } from "next/font/google";
import {
  BiBookmark,
  BiEnvelope,
  BiHash,
  BiHomeCircle,
  BiMoney,
  BiUser,
} from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/routes/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BiEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BiBookmark />,
  },
  {
    title: "Twitter blue",
    icon: <BiMoney />,
  },
  {
    title: "Pofile",
    icon: <BiUser />,
  },
];

export default function Home() {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googletoken = cred.credential;
      if (!googletoken) return toast.error("google token not found");
      const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleTokenQuery, {token:googletoken});
      toast.success("verified success");
      console.log(verifyGoogleToken);

      if(verifyGoogleToken){
        window.localStorage.setItem("__twitter_token",verifyGoogleToken);
      }
    },
    []
  );
  const handleSuccess = (cred: any) => {
    console.log(cred);
  };

  const handleError = (error: any) => {
    console.error("Login failed:", error);
  };
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 ">
          <div className="text-4xl  w-fit hover:bg-gray-600 rounded-full p-3 transition-all cursor-pointer">
            <BsTwitter />
          </div>
          <div className="mt-4 text-3xl font-bold pr-4 ">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  className=" flex justify-start items-center gap-4 mt-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className=" bg-[#1d9bf0] mt-5 p-4 rounded-full w-full">
              Tweet
            </button>
          </div>
        </div>
        <div className="col-span-5  pt-8 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll no-scrollbar border-gray-600 ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-2 p-5">
          <div className="p-5 bg-slate-700  rounded-lg">
            <h3 className="text-center text-1xl">New to Twitter</h3>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}
