"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar"
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,

} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";
import logoImg from '../../../assets/images/minLogo.svg';
import {AiOutlineBook} from "react-icons/ai"
import { HiOutlineNewspaper } from "react-icons/hi2";


export default function SidebarDemo({img, name}) {
  const links = [
    {
      label: "Profile",
      href: "/dashboard/myProfile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    }, 
    {
      label: "Edit Profile",
      href: "/dashboard/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Notes",
      href: "/dashboard/notes",
      icon: (
        <AiOutlineBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Papers",
      href: "/dashboard/papers",
      icon: (
        <HiOutlineNewspaper className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Blogs",
      href: "/dashboard/blogs",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "fixed rounded-md flex flex-col md:flex-row bg-tempSecondary border-tempPrimary dark:bg-neutral-800 flex-1  mx-auto border dark:border-neutral-700 overflow-hidden",
        "h-full z-20 " // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>     
        <SidebarBody className="justify-between rounded-md">
          <div className="flex flex-col flex-1 overflow-hidden"  onClick={() => setOpen(false)}>
            {open ? <Logo /> : <Logo/> }
            <div className="mt-8 flex flex-col gap-2" >
              {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />) 
              )}
            </div>
            <div className=" mt-[19rem] md:mt-[19rem]">
            <SidebarLink
              link={{
                label: `${name}`,
                href: "/dashboard/myProfile",
                icon: (
                  <img
                    src={img}
                    className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> we will do this from outlet */} 

    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to="/home"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src={logoImg} className="h-5 w-6 dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> 
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Ninja Notes
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src={logoImg} className="h-5 w-6 dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> 
    </Link>
  );
};

// Dummy dashboard component with content
// const Dashboard = () => {
//   return (
//     <div className="flex flex-1">
//       <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        
//         <div className="flex gap-2">
//           {[...new Array(4)].map((i) => (
//             <div
//               key={"first-array" + i}
//               className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
//             ></div>
//           ))}
//         </div>

//         <div className="flex gap-2 flex-1">
//           {[...new Array(2)].map((i) => (
//             <div
//               key={"second-array" + i}
//               className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
//             ></div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };
