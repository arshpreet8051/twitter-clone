import React from "react";
import Image from 'next/image'
import { FaRegComment } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import { AiOutlineRetweet } from "react-icons/ai";

const FeedCard : React.FC = () =>{
    return(
        <div className='border border-r-0 border-l-0 border-b-0 border-gray-400 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1'>
                <Image src='https://avatars.githubusercontent.com/u/99662930?v=4' alt='User Image' height={50} width={50}></Image>
            </div>
            <div className='col-span-11'>
                <h3 className='text-lg'>Arshpreet Singh</h3>
                <p className='text-sm'>Data Structures/Algorithms aren't a must for web development.
                    Usually for a startup/MVP you will use already built libraries that are already optimized.
                    What do y'all think ? 🤔</p>
                    <div className='flex justify-between mt-5 text-base items-center w-[90%]'>
                        <div>
                        <FaRegComment/>
                        </div>
                        <div>
                        <AiOutlineRetweet/>
                        </div>
                        <div>
                        <IoMdHeartEmpty/>
                        </div>
                        <div>
                        <LuUpload/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default FeedCard;