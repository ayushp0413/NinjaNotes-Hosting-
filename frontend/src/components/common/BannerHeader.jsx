import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

export default function BannerHeader() {
  return (
    <Banner className="w-full -mb-14 -z-0">
      <div className="flex justify-center items-center mt-7 border-b border-gray-200 bg-tempPrimary dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex z-0">
          <p className="flex items-center text-sm font-normal text-tempDark dark:text-gray-400">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span>
              Currently, Ninja Notes is serving first-year students and is in the process of expanding our services to include all semesters. Please stay tuned!!
            </span>
          </p>
        </div>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
