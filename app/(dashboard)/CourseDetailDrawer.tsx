"use client";

import { Card, Drawer, Timeline } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiAcademicCap, HiCalendar, HiOutlineX } from "react-icons/hi";

const CourseDetailDrawer = ({ openCourseDrawer, setOpenCourseDrawer }: any) => {
  const [isOpen, setIsOpen] = useState(openCourseDrawer);

  useEffect(() => {
    setIsOpen(openCourseDrawer);
  }, [openCourseDrawer]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setOpenCourseDrawer(!isOpen);
  };

  return (
    <>
      <Drawer open={isOpen} onClose={toggleDrawer} position="right">
        <Drawer.Header
          title="Course Details"
          titleIcon={HiAcademicCap}
          closeIcon={HiOutlineX}
        />
        <Drawer.Items>
          <div className="flex w-full items-center justify-center px-6">
            <Card className="w-full bg-[#10393B]">
              <div className="flex items-center justify-between px-4 py-4">
                <h2 className="text-xl font-medium text-white dark:text-white">
                  Personal Details
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="size-6 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center pb-4">
                <Image
                  alt="Bonnie image"
                  height="96"
                  src="/profile-picture-5.jpg"
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
                  Emily Kateson
                </h5>
              </div>
              <div className="flex flex-col items-center pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EF8352"
                  className="size-6 mb-1"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-md mb-1 font-medium text-white dark:text-white">
                  9 Milestone Cottages,
                </p>
                <p className="text-md mb-1 font-medium text-white dark:text-white">
                  Chichester West Sussex,
                </p>
                <p className="text-md mb-1 font-medium text-white dark:text-white">
                  Po20 7FE
                </p>
              </div>
              <div className="flex flex-col items-center pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EF8352"
                  className="size-6 mb-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-md mb-1 font-medium text-white dark:text-white">
                   (44) 01632960345
                </p>
              </div>
              <div className="flex flex-col items-center pb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EF8352"
                  className="size-6 mb-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-md mb-1 font-medium text-white dark:text-white">
                  emily.kateson@gmail.com
                </p>
              </div>
            </Card>
          </div>
          <div className="mt-5 flex w-full items-center justify-center px-6">
            <Card className="w-full">
              <Timeline>
                <Timeline.Item>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content>
                    <Timeline.Title>August</Timeline.Title>
                    <Timeline.Body>
                      <Card className="mt-5 max-w-sm md:max-w-xl">
                        <p className="text-md font-semibold tracking-tight text-[#A4A4A4] dark:text-white">
                          24th August at 14:30pm
                        </p>
                        <p className="text-md font-semibold text-[#252525] dark:text-gray-400">
                          User Research London 2024
                        </p>
                      </Card>
                      <Card className="mt-5 max-w-sm md:max-w-xl">
                        <p className="text-md font-semibold tracking-tight text-[#A4A4A4] dark:text-white">
                          30th August at 16:30pm
                        </p>
                        <p className="text-md font-semibold text-[#252525] dark:text-gray-400">
                          Google: Build Dynamic User Interfaces (UI) for
                          Websites (Coursera)
                        </p>
                      </Card>
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content>
                    <Timeline.Title>July</Timeline.Title>
                    <Timeline.Body>
                      <Card className="mt-5 max-w-sm md:max-w-xl">
                        <p className="text-md font-semibold tracking-tight text-[#A4A4A4] dark:text-white">
                          30th August at 16:30pm
                        </p>
                        <p className="text-md font-semibold text-[#252525] dark:text-gray-400">
                          Google: Build Dynamic User Interfaces (UI) for
                          Websites (Coursera)
                        </p>
                      </Card>
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline>
            </Card>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default CourseDetailDrawer;
