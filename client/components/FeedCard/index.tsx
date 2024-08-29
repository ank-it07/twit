import React from "react";
import Image from "next/image";
import { BiMessage, BiMessageRounded } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";



const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://pbs.twimg.com/profile_images/1579036104384471041/mQhDRCGM_400x400.jpg"
            alt="user-image"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>ankit kumar </h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            accusamus quisquam dolor cupiditate vitae officia, impedit alias
            consequatur officiis saepe assumenda ipsum dolores mollitia illum
            delectus consequuntur amet eligendi voluptatum.
          </p>
          <div className=" flex justify-between mt-5 text-xl items-center w-[90%]"  >
            <div>
            <FiMessageCircle />
            </div>
            <div>
            <FaRetweet />

            </div>
            <div>
            <FaRegHeart />
            </div>
            <div>
            <IoMdShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
