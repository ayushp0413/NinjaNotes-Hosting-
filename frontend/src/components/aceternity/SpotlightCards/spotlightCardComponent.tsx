import { CardSpotlight } from "./spotlightCards";
import React from "react";
import notesImg2 from "../../../assets/images/notesImg2.jpeg"
import { PiStudentFill } from "react-icons/pi";
import { BiBullseye } from "react-icons/bi";
import { MdCalendarToday } from "react-icons/md";
import { LiaUserNinjaSolid } from "react-icons/lia";
import { MdAccessTime } from "react-icons/md";
import { MdLayers } from "react-icons/md";
import { removeFromCart } from "../../../slices/cartSlice";
import { useDispatch } from "react-redux";
import HighlightText from "../../common/HighlightText";
import { TYPE_OF_CONTENT } from "../../../utils/constants";

export default function CardSpotlightDemo({data}) {

    const dispatch = useDispatch();

  return (
   
    <CardSpotlight className="flex flex-col justify-start items-start">
      <p className="text-[1.3rem] font-bold relative z-10 -mt-4"><HighlightText text={`${data?.type}`}/></p>
      {/* <img src={notesImg2} /> */}
      <div className="text-neutral-200 mt-4 relative z-10">
        <span className="font-bold text-[1.7rem]">{data?.subject}</span>
        <p className="text-[1.2rem] font-semibold">{data?.unit}</p>
        
        {/* Info grid */}
        {
          data?.type === TYPE_OF_CONTENT.NOTES ? (
            <div className='w-full grid grid-cols-2 place-items-start text-sm'>
              <div className='flex  justify-center items-center gap-2'><PiStudentFill size={20} /> <p>{data?.course}</p></div>
              <div className='flex  justify-center items-center gap-2'><MdLayers size={18} /> <p>{data?.branch}</p></div>
              <div className='flex  justify-center items-center gap-2'><MdAccessTime size={19} /> <p>{data?.sem}</p></div>
              <div className='flex  justify-center items-center gap-2'><LiaUserNinjaSolid size={22} /> <p>Ninja Notes</p></div>
            </div>
          ):
          data?.type === TYPE_OF_CONTENT.PAPERS ? (
            <div className='w-full grid grid-cols-2 place-items-start text-sm'>
              <div className='flex  justify-center items-center gap-2'><MdCalendarToday size={17}/> <p>{data?.content.year}</p></div>
              <div className='flex  justify-center items-center gap-2'><PiStudentFill size={20} /> <p>{data?.examType}</p></div>
              <div className='flex  justify-center items-center gap-2'><MdLayers size={18} /> <p>{data?.branch}</p></div>
              <div className='flex  justify-center items-center gap-2'><MdAccessTime size={19} /> <p>{data?.sem}</p></div>
            </div>
          ) :(
            <div className='w-full grid grid-cols-2 place-items-start text-sm'>
              <div className='flex  justify-center items-center gap-2'><PiStudentFill size={20} /> <p>{data?.course}</p></div>
              <div className='flex  justify-center items-center gap-2'><MdLayers size={18} /> <p>{data?.branch}</p></div>
              <div className='flex  justify-center items-center gap-2'><MdAccessTime size={19} /> <p>{data?.sem}</p></div>
              <div className='flex  justify-center items-center gap-2'><LiaUserNinjaSolid size={22} /> <p>Ninja Blogs</p></div>
            </div>
          )
        }
      </div>
      <p className="text-neutral-300 mt-4 relative z-10 text-sm">
        Ensuring your content is properly saved,
        {
          data?.type === TYPE_OF_CONTENT.NOTES ? (<a href={data?.content} target="blank" className='font-semibold'> click </a>) : 
          data.type === TYPE_OF_CONTENT.PAPERS ? (<a href={data?.content?.link} target="blank" className='font-semibold'> click </a>) : 
          (<p>blog</p>)
           
        }
        to access freely.
        <span> or </span><span onClick={() => dispatch(removeFromCart(data?._id))} className="z-10 text-red-600 cursor-pointer font-semibold">Remove</span>
      </p>
    </CardSpotlight>

  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
