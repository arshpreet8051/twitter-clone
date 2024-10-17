import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { LiaFeatherAltSolid } from "react-icons/lia";
import React from 'react';
import FeedCard from '@/components/FeedCard';

const inter = Inter({ subsets: ['latin'] })


interface TwitterSidebarButtons {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButtons[] = [
  {
    title: "Home",
    icon: <MdHomeFilled />,
  },
  {
    title:"Search",
    icon:<IoMdSearch/>
  },
  {
    title:"Notification",
    icon:<IoMdNotifications/>
  },
  {
    title:"Mail",
    icon:<IoMdMail/>
  },
  {
    title:"Community",
    icon:<IoPeopleSharp/>
  },
  {
    title:"Profile",
    icon:<IoPerson/>
  },
  {
    title:"More",
    icon:<CiCircleMore/>
  },
];

export default function Home() {
  return (
    
    <div>
      <div className="grid grid-cols-12 h-screen w-screen">
        {/* Sidebar column */}
        <div className="col-span-2 flex flex-col items-end pr-4">
          {/* Twitter logo */}
          <div className="text-3xl hover:bg-gray-800 p-2 rounded-full h-fit cursor-pointer transition-all mt-2">
            <FaXTwitter />
          </div>
          {/* Menu items */}
          <div className="w-full text-4xl">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li key={item.title} className="flex justify-end">
                  <span className="text-3xl hover:bg-gray-800 p-2 mt-2 rounded-full h-fit cursor-pointer transition-all">{item.icon}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-3xl bg-blue-500 hover:bg-blue-400 p-2 rounded-full h-fit cursor-pointer transition-all mt-2">
            <LiaFeatherAltSolid />
          </div>
          <div className= "hover:bg-gray-800 rounded-full cursor-pointer transition-all mt-16 px-2 py-2">
            <img className="h-[40px] w-[40px] rounded-full" src="/new_me.png" alt="profile_img" />
          </div>
        </div>
       
        {/* Main content area */}
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-b-0 border-gray-600 h-screen overflow-scroll scroll no-scroll"> 
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
       
        {/* Right content area */}
        <div className="col-span-4">
          <div className="bg-[#202327] rounded-full m-4 p-2 ">
          <p className="text-center">Search here ...</p>
          </div>
          <div className="border flex justify-center items-center p-8 m-5 mx-16 rounded-xl flex-col gap-1">
          <p className="text-lg">New to Twitter ?</p>
          <button className='border border-slate-600 px-2 py-1 rounded-md bg-slate-500'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>

  )
}
