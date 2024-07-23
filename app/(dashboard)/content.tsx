"use client";

import CourseDetailDrawer from "@/app/(dashboard)/CourseDetailDrawer";
import { Button, Progress, Tabs, TabsRef } from "flowbite-react";
import type { NextPage } from "next";
import { useRef, useState } from "react";

export const HomePageContent: NextPage = function () {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openCourseDrawer, setOpenCourseDrawer] = useState(false);
  return (
    <>
      <div className="min-h-[100vh] p-6">
        {/* First section */}
        <div className="flex items-center justify-between">
          <div className="w-[20%]">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <div className="w-[70%]">
            <form className="mx-auto w-full">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-lg bg-orange-50 p-3 ps-10 text-lg font-semibold text-gray-900"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_12)">
                      <path
                        d="M24.6948 23.2219L18.4771 17.0042C20.1715 14.9319 21.0046 12.2876 20.804 9.61828C20.6035 6.94898 19.3846 4.45887 17.3996 2.66303C15.4146 0.867185 12.8152 -0.0970007 10.1392 -0.0300926C7.46324 0.0368155 4.91533 1.1297 3.02253 3.0225C1.12973 4.9153 0.0368461 7.46321 -0.0300621 10.1392C-0.0969702 12.8152 0.867215 15.4145 2.66306 17.3996C4.4589 19.3846 6.94901 20.6034 9.61831 20.804C12.2876 21.0045 14.9319 20.1715 17.0042 18.4771L23.2219 24.6948C23.4184 24.8845 23.6815 24.9895 23.9546 24.9871C24.2277 24.9848 24.489 24.8752 24.6821 24.6821C24.8753 24.489 24.9848 24.2277 24.9872 23.9546C24.9896 23.6814 24.8846 23.4183 24.6948 23.2219ZM10.4167 18.75C8.76851 18.75 7.15734 18.2612 5.78693 17.3456C4.41652 16.4299 3.34842 15.1284 2.71769 13.6057C2.08696 12.083 1.92193 10.4074 2.24347 8.7909C2.56502 7.17439 3.35869 5.68953 4.52413 4.5241C5.68956 3.35866 7.17442 2.56499 8.79093 2.24344C10.4074 1.9219 12.083 2.08693 13.6057 2.71766C15.1284 3.34839 16.4299 4.41649 17.3456 5.7869C18.2613 7.15731 18.75 8.76847 18.75 10.4167C18.7475 12.626 17.8688 14.7442 16.3065 16.3065C14.7442 17.8687 12.6261 18.7475 10.4167 18.75Z"
                        fill="#A4A4A4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_12">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="flex w-[10%] justify-center">
            <button className="rounded-md bg-orange-50 p-5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_612)">
                  <path
                    d="M16.25 4.16974C16.2534 4.38518 16.3197 4.59492 16.4408 4.77316C16.5619 4.95139 16.7324 5.09034 16.9314 5.17291C18.7105 5.95571 20.215 7.25238 21.2518 8.89644C22.2886 10.5405 22.8103 12.4569 22.75 14.3997C22.7081 16.9855 21.6406 19.4488 19.7825 21.2476C17.9243 23.0464 15.4277 24.0334 12.8419 23.9915C10.256 23.9495 7.79271 22.8821 5.99389 21.0239C4.19507 19.1658 3.20807 16.6692 3.25002 14.0833C3.25252 12.1942 3.80376 10.3466 4.83673 8.7649C5.86969 7.18324 7.33989 5.93572 9.0686 5.174C9.26771 5.09093 9.43824 4.95156 9.55929 4.77298C9.68033 4.5944 9.74662 4.38437 9.75002 4.16866C9.7503 3.99122 9.70699 3.81643 9.6239 3.65965C9.5408 3.50287 9.42047 3.3689 9.27348 3.26951C9.12648 3.17012 8.95733 3.10836 8.78088 3.08966C8.60443 3.07096 8.42608 3.09588 8.26152 3.16224C5.74741 4.25223 3.68576 6.17536 2.42383 8.60772C1.1619 11.0401 0.7768 13.833 1.3334 16.5161C1.88999 19.1992 3.35427 21.6085 5.4796 23.3382C7.60492 25.0679 10.2614 26.0123 13.0016 26.0123C15.7419 26.0123 18.3984 25.0679 20.5237 23.3382C22.649 21.6085 24.1133 19.1992 24.6699 16.5161C25.2265 13.833 24.8414 11.0401 23.5795 8.60772C22.3175 6.17536 20.2559 4.25223 17.7418 3.16224C17.577 3.09516 17.3982 3.0697 17.2212 3.08813C17.0442 3.10655 16.8745 3.16829 16.727 3.26788C16.5796 3.36747 16.4589 3.50185 16.3757 3.65915C16.2925 3.81644 16.2493 3.99181 16.25 4.16974Z"
                    fill="#10393B"
                  />
                  <path
                    d="M14.0833 1.08333C14.0833 0.485025 13.5983 0 13 0C12.4017 0 11.9166 0.485025 11.9166 1.08333V7.58333C11.9166 8.18164 12.4017 8.66667 13 8.66667C13.5983 8.66667 14.0833 8.18164 14.0833 7.58333V1.08333Z"
                    fill="#10393B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_612">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex gap-5 p-3">
          <div className="w-1/2 rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-3">
              <h2 className="text-base font-semibold text-teal-900">
                Latest Statics
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col justify-center gap-3 rounded-lg bg-yellow-50 p-4">
                <h3 className="text-trueGray-800 text-sm font-medium">
                  Registered Users
                </h3>
                <h4 className="text-trueGray-800 text-lg font-medium">1081</h4>
              </div>
              <div className="flex flex-col gap-3 rounded-lg bg-rose-100 p-4">
                <h3 className="text-trueGray-800 text-sm font-medium">
                  Last 24 hours Registrations
                </h3>
                <h4 className="text-trueGray-800 text-lg font-medium">542</h4>
              </div>
              <div className="flex flex-col gap-3 rounded-lg bg-pink-300 p-4">
                <h3 className="text-trueGray-800 text-sm font-medium">
                  Account Created Users
                </h3>
                <h4 className="text-trueGray-800 text-lg font-medium">3540</h4>
              </div>
              <div className="flex flex-col gap-3 rounded-lg bg-orange-200 p-4">
                <h3 className="text-trueGray-800 text-sm font-medium">
                  Registered Users
                </h3>
                <h4 className="text-trueGray-800 text-lg font-medium">1081</h4>
              </div>
              <div className="flex flex-col gap-3 rounded-lg bg-red-100 p-4">
                <h3 className="text-trueGray-800 text-sm font-medium">
                  Last 24 hours Registrations
                </h3>
                <h4 className="text-trueGray-800 text-lg font-medium">542</h4>
              </div>
              <div className="flex flex-col gap-3 rounded-lg bg-cyan-300 p-4">
                <h3 className="text-trueGray-800 text-sm font-medium">
                  Account Created Users
                </h3>
                <h4 className="text-trueGray-800 text-lg font-medium">3540</h4>
              </div>
            </div>
          </div>

          <div className="w-1/2 rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-teal-900">
                Trending Courses
              </h2>
              <div>
                <Button.Group>
                  <Button
                    color="gray"
                    onClick={() => tabsRef.current?.setActiveTab(0)}
                    className={activeTab === 0 ? "bg-[#EF8352]" : ""}
                  >
                    Courses
                  </Button>
                  <Button
                    color="gray"
                    onClick={() => tabsRef.current?.setActiveTab(1)}
                    className={activeTab === 1 ? "bg-[#EF8352]" : ""}
                  >
                    Events
                  </Button>
                </Button.Group>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <Tabs
                  aria-label="Default tabs"
                  ref={tabsRef}
                  onActiveTabChange={(tab) => setActiveTab(tab)}
                >
                  <Tabs.Item title="Courses" active={activeTab === 0}>
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-5">
                        <h2 className="rounded-md bg-orange-200 px-3 py-1 text-teal-900">
                          01
                        </h2>
                        <div className="mb-1 flex w-full cursor-pointer flex-col justify-between">
                          <Progress
                            progress={89}
                            progressLabelPosition="outside"
                            textLabel="Career Foundry UI Design Course"
                            textLabelPosition="outside"
                            size="sm"
                            labelProgress
                            labelText
                            onClick={() => setOpenCourseDrawer(true)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <h2 className="rounded-md bg-orange-200 px-3 py-1 text-teal-900">
                          02
                        </h2>
                        <div className="mb-1 flex w-full cursor-pointer flex-col justify-between">
                          <Progress
                            progress={22}
                            progressLabelPosition="outside"
                            textLabel="Udemy"
                            textLabelPosition="outside"
                            size="sm"
                            labelProgress
                            labelText
                            onClick={() => setOpenCourseDrawer(true)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <h2 className="rounded-md bg-orange-200 px-3 py-1 text-teal-900">
                          03
                        </h2>
                        <div className="mb-1 flex w-full cursor-pointer flex-col justify-between">
                          <Progress
                            progress={58}
                            progressLabelPosition="outside"
                            textLabel="Thinkful"
                            textLabelPosition="outside"
                            size="sm"
                            labelProgress
                            labelText
                            onClick={() => setOpenCourseDrawer(true)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <h2 className="rounded-md bg-orange-200 px-3 py-1 text-teal-900">
                          04
                        </h2>
                        <div className="mb-1 flex w-full cursor-pointer flex-col justify-between">
                          <Progress
                            progress={30}
                            progressLabelPosition="outside"
                            textLabel="Google: Build Dynamic User Interfaces (UI) for Websites (Coursera)"
                            textLabelPosition="outside"
                            size="sm"
                            labelProgress
                            labelText
                            onClick={() => setOpenCourseDrawer(true)}
                          />
                        </div>
                      </div>
                    </div>
                  </Tabs.Item>
                  <Tabs.Item title="Events" active={activeTab === 1}>
                    This is{" "}
                    <span className="font-medium text-gray-800 dark:text-white">
                      Dashboard tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </Tabs.Item>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* Third section */}
        <div className="m-3 rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-3">
            <h2 className="text-base font-semibold text-teal-900">
              List of contacts
            </h2>
          </div>
          <div>
            <div className="flex w-full gap-8">
              <form className="w-[30%]">
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Search
                </label>
                <div className="relative flex items-center">
                  <input
                    type="search"
                    id="default-search"
                    className="text-md block w-full rounded-xl border border-[#A4A4A4] bg-white p-3 ps-3 font-semibold text-gray-900"
                    placeholder="Search by First name and Last name....."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_6_12)">
                        <path
                          d="M24.6948 23.2219L18.4771 17.0042C20.1715 14.9319 21.0046 12.2876 20.804 9.61828C20.6035 6.94898 19.3846 4.45887 17.3996 2.66303C15.4146 0.867185 12.8152 -0.0970007 10.1392 -0.0300926C7.46324 0.0368155 4.91533 1.1297 3.02253 3.0225C1.12973 4.9153 0.0368461 7.46321 -0.0300621 10.1392C-0.0969702 12.8152 0.867215 15.4145 2.66306 17.3996C4.4589 19.3846 6.94901 20.6034 9.61831 20.804C12.2876 21.0045 14.9319 20.1715 17.0042 18.4771L23.2219 24.6948C23.4184 24.8845 23.6815 24.9895 23.9546 24.9871C24.2277 24.9848 24.489 24.8752 24.6821 24.6821C24.8753 24.489 24.9848 24.2277 24.9872 23.9546C24.9896 23.6814 24.8846 23.4183 24.6948 23.2219ZM10.4167 18.75C8.76851 18.75 7.15734 18.2612 5.78693 17.3456C4.41652 16.4299 3.34842 15.1284 2.71769 13.6057C2.08696 12.083 1.92193 10.4074 2.24347 8.7909C2.56502 7.17439 3.35869 5.68953 4.52413 4.5241C5.68956 3.35866 7.17442 2.56499 8.79093 2.24344C10.4074 1.9219 12.083 2.08693 13.6057 2.71766C15.1284 3.34839 16.4299 4.41649 17.3456 5.7869C18.2613 7.15731 18.75 8.76847 18.75 10.4167C18.7475 12.626 17.8688 14.7442 16.3065 16.3065C14.7442 17.8687 12.6261 18.7475 10.4167 18.75Z"
                          fill="#A4A4A4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6_12">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </form>
              <form className="w-[20%]">
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Search
                </label>
                <div className="relative flex items-center">
                  <input
                    type="search"
                    id="default-search"
                    className="text-md block w-full rounded-xl border border-[#A4A4A4] bg-white p-3 ps-3 font-semibold text-gray-900"
                    placeholder="Filter by"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium text-white"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0.5C14 0.775 13.7375 1 13.4167 1H0.583333C0.2625 1 0 0.775 0 0.5C0 0.225 0.2625 0 0.583333 0H13.4167C13.7375 0 14 0.225 14 0.5ZM8.75 9H5.25C4.92917 9 4.66667 9.225 4.66667 9.5C4.66667 9.775 4.92917 10 5.25 10H8.75C9.07083 10 9.33333 9.775 9.33333 9.5C9.33333 9.225 9.07083 9 8.75 9ZM11.0833 4.5H2.91667C2.59583 4.5 2.33333 4.725 2.33333 5C2.33333 5.275 2.59583 5.5 2.91667 5.5H11.0833C11.4042 5.5 11.6667 5.275 11.6667 5C11.6667 4.725 11.4042 4.5 11.0833 4.5Z"
                        fill="#A4A4A4"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      ></input>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      First name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
                      ></input>
                    </th>
                    <th scope="row" className="px-6 py-4">
                      Alexander
                    </th>
                    <td className="px-6 py-4">Johnson</td>
                    <td className="px-6 py-4">+44 20 7123 4567</td>
                    <td className="px-6 py-4">Alexander.johnson@gmail.com</td>
                    <td className="flex items-center gap-3 px-6 py-4">
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_14_122)">
                            <path
                              d="M15.2353 0.765333C14.7821 0.312798 14.1678 0.0586243 13.5273 0.0586243C12.8869 0.0586243 12.2726 0.312798 11.8193 0.765333L0.976677 11.608C0.666178 11.9168 0.419985 12.284 0.252342 12.6885C0.0846994 13.093 -0.00106532 13.5268 9.98748e-06 13.9647V15.3333C9.98748e-06 15.5101 0.0702479 15.6797 0.195272 15.8047C0.320296 15.9298 0.489866 16 0.666677 16H2.03534C2.47319 16.0012 2.90692 15.9156 3.31145 15.7481C3.71597 15.5805 4.08325 15.3344 4.39201 15.024L15.2353 4.18067C15.6877 3.72746 15.9417 3.11331 15.9417 2.473C15.9417 1.83269 15.6877 1.21854 15.2353 0.765333ZM3.44934 14.0813C3.07335 14.4548 2.56532 14.6651 2.03534 14.6667H1.33334V13.9647C1.33267 13.7019 1.38411 13.4417 1.4847 13.199C1.58529 12.9563 1.73302 12.7359 1.91934 12.5507L10.148 4.322L11.6813 5.85533L3.44934 14.0813ZM14.292 3.238L12.6213 4.90933L11.088 3.37933L12.7593 1.708C12.86 1.60754 12.9795 1.52789 13.111 1.47361C13.2424 1.41932 13.3833 1.39146 13.5255 1.39161C13.6678 1.39177 13.8086 1.41994 13.9399 1.47451C14.0712 1.52908 14.1905 1.60899 14.291 1.70967C14.3915 1.81035 14.4711 1.92983 14.5254 2.06129C14.5797 2.19275 14.6076 2.33362 14.6074 2.47584C14.6072 2.61807 14.5791 2.75888 14.5245 2.89022C14.4699 3.02156 14.39 3.14087 14.2893 3.24133L14.292 3.238Z"
                              fill="#10393B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_14_122">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="19"
                          viewBox="0 0 16 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.364 3.06H12.0204C11.8449 2.19663 11.3807 1.42087 10.7059 0.863469C10.0311 0.306069 9.18707 0.00111271 8.316 0L6.804 0C5.93293 0.00111271 5.08888 0.306069 4.41409 0.863469C3.73931 1.42087 3.27506 2.19663 3.0996 3.06H0.756C0.555496 3.06 0.363205 3.1406 0.221427 3.28406C0.0796497 3.42753 0 3.62211 0 3.825C0 4.02789 0.0796497 4.22247 0.221427 4.36594C0.363205 4.5094 0.555496 4.59 0.756 4.59H1.512V14.535C1.5132 15.5491 1.91183 16.5213 2.62046 17.2383C3.32909 17.9554 4.28985 18.3588 5.292 18.36H9.828C10.8301 18.3588 11.7909 17.9554 12.4995 17.2383C13.2082 16.5213 13.6068 15.5491 13.608 14.535V4.59H14.364C14.5645 4.59 14.7568 4.5094 14.8986 4.36594C15.0404 4.22247 15.12 4.02789 15.12 3.825C15.12 3.62211 15.0404 3.42753 14.8986 3.28406C14.7568 3.1406 14.5645 3.06 14.364 3.06ZM6.804 1.53H8.316C8.78493 1.53058 9.2422 1.67793 9.6251 1.95185C10.008 2.22578 10.2978 2.61285 10.4547 3.06H4.66528C4.82221 2.61285 5.112 2.22578 5.4949 1.95185C5.8778 1.67793 6.33507 1.53058 6.804 1.53ZM12.096 14.535C12.096 15.1437 11.8571 15.7274 11.4317 16.1578C11.0064 16.5882 10.4295 16.83 9.828 16.83H5.292C4.69049 16.83 4.11361 16.5882 3.68828 16.1578C3.26295 15.7274 3.024 15.1437 3.024 14.535V4.59H12.096V14.535Z"
                            fill="#10393B"
                          />
                          <path
                            d="M5.94002 14.04C6.08324 14.04 6.22059 13.9547 6.32186 13.8028C6.42313 13.6509 6.48002 13.4448 6.48002 13.23V8.37C6.48002 8.15517 6.42313 7.94915 6.32186 7.79724C6.22059 7.64534 6.08324 7.56 5.94002 7.56C5.79681 7.56 5.65946 7.64534 5.55819 7.79724C5.45692 7.94915 5.40002 8.15517 5.40002 8.37V13.23C5.40002 13.4448 5.45692 13.6509 5.55819 13.8028C5.65946 13.9547 5.79681 14.04 5.94002 14.04Z"
                            fill="#10393B"
                          />
                          <path
                            d="M9.18001 14.04C9.32323 14.04 9.46058 13.9547 9.56185 13.8028C9.66312 13.6509 9.72001 13.4448 9.72001 13.23V8.37C9.72001 8.15517 9.66312 7.94915 9.56185 7.79724C9.46058 7.64534 9.32323 7.56 9.18001 7.56C9.0368 7.56 8.89945 7.64534 8.79818 7.79724C8.69691 7.94915 8.64001 8.15517 8.64001 8.37V13.23C8.64001 13.4448 8.69691 13.6509 8.79818 13.8028C8.89945 13.9547 9.0368 14.04 9.18001 14.04Z"
                            fill="#10393B"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
                      ></input>
                    </th>
                    <th scope="row" className="px-6 py-4">
                      Emily
                    </th>
                    <td className="px-6 py-4">Kateson</td>
                    <td className="px-6 py-4">+44 20 7123 4567</td>
                    <td className="px-6 py-4">Alexander.johnson@gmail.com</td>
                    <td className="flex items-center gap-3 px-6 py-4">
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_14_122)">
                            <path
                              d="M15.2353 0.765333C14.7821 0.312798 14.1678 0.0586243 13.5273 0.0586243C12.8869 0.0586243 12.2726 0.312798 11.8193 0.765333L0.976677 11.608C0.666178 11.9168 0.419985 12.284 0.252342 12.6885C0.0846994 13.093 -0.00106532 13.5268 9.98748e-06 13.9647V15.3333C9.98748e-06 15.5101 0.0702479 15.6797 0.195272 15.8047C0.320296 15.9298 0.489866 16 0.666677 16H2.03534C2.47319 16.0012 2.90692 15.9156 3.31145 15.7481C3.71597 15.5805 4.08325 15.3344 4.39201 15.024L15.2353 4.18067C15.6877 3.72746 15.9417 3.11331 15.9417 2.473C15.9417 1.83269 15.6877 1.21854 15.2353 0.765333ZM3.44934 14.0813C3.07335 14.4548 2.56532 14.6651 2.03534 14.6667H1.33334V13.9647C1.33267 13.7019 1.38411 13.4417 1.4847 13.199C1.58529 12.9563 1.73302 12.7359 1.91934 12.5507L10.148 4.322L11.6813 5.85533L3.44934 14.0813ZM14.292 3.238L12.6213 4.90933L11.088 3.37933L12.7593 1.708C12.86 1.60754 12.9795 1.52789 13.111 1.47361C13.2424 1.41932 13.3833 1.39146 13.5255 1.39161C13.6678 1.39177 13.8086 1.41994 13.9399 1.47451C14.0712 1.52908 14.1905 1.60899 14.291 1.70967C14.3915 1.81035 14.4711 1.92983 14.5254 2.06129C14.5797 2.19275 14.6076 2.33362 14.6074 2.47584C14.6072 2.61807 14.5791 2.75888 14.5245 2.89022C14.4699 3.02156 14.39 3.14087 14.2893 3.24133L14.292 3.238Z"
                              fill="#10393B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_14_122">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="19"
                          viewBox="0 0 16 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.364 3.06H12.0204C11.8449 2.19663 11.3807 1.42087 10.7059 0.863469C10.0311 0.306069 9.18707 0.00111271 8.316 0L6.804 0C5.93293 0.00111271 5.08888 0.306069 4.41409 0.863469C3.73931 1.42087 3.27506 2.19663 3.0996 3.06H0.756C0.555496 3.06 0.363205 3.1406 0.221427 3.28406C0.0796497 3.42753 0 3.62211 0 3.825C0 4.02789 0.0796497 4.22247 0.221427 4.36594C0.363205 4.5094 0.555496 4.59 0.756 4.59H1.512V14.535C1.5132 15.5491 1.91183 16.5213 2.62046 17.2383C3.32909 17.9554 4.28985 18.3588 5.292 18.36H9.828C10.8301 18.3588 11.7909 17.9554 12.4995 17.2383C13.2082 16.5213 13.6068 15.5491 13.608 14.535V4.59H14.364C14.5645 4.59 14.7568 4.5094 14.8986 4.36594C15.0404 4.22247 15.12 4.02789 15.12 3.825C15.12 3.62211 15.0404 3.42753 14.8986 3.28406C14.7568 3.1406 14.5645 3.06 14.364 3.06ZM6.804 1.53H8.316C8.78493 1.53058 9.2422 1.67793 9.6251 1.95185C10.008 2.22578 10.2978 2.61285 10.4547 3.06H4.66528C4.82221 2.61285 5.112 2.22578 5.4949 1.95185C5.8778 1.67793 6.33507 1.53058 6.804 1.53ZM12.096 14.535C12.096 15.1437 11.8571 15.7274 11.4317 16.1578C11.0064 16.5882 10.4295 16.83 9.828 16.83H5.292C4.69049 16.83 4.11361 16.5882 3.68828 16.1578C3.26295 15.7274 3.024 15.1437 3.024 14.535V4.59H12.096V14.535Z"
                            fill="#10393B"
                          />
                          <path
                            d="M5.94002 14.04C6.08324 14.04 6.22059 13.9547 6.32186 13.8028C6.42313 13.6509 6.48002 13.4448 6.48002 13.23V8.37C6.48002 8.15517 6.42313 7.94915 6.32186 7.79724C6.22059 7.64534 6.08324 7.56 5.94002 7.56C5.79681 7.56 5.65946 7.64534 5.55819 7.79724C5.45692 7.94915 5.40002 8.15517 5.40002 8.37V13.23C5.40002 13.4448 5.45692 13.6509 5.55819 13.8028C5.65946 13.9547 5.79681 14.04 5.94002 14.04Z"
                            fill="#10393B"
                          />
                          <path
                            d="M9.18001 14.04C9.32323 14.04 9.46058 13.9547 9.56185 13.8028C9.66312 13.6509 9.72001 13.4448 9.72001 13.23V8.37C9.72001 8.15517 9.66312 7.94915 9.56185 7.79724C9.46058 7.64534 9.32323 7.56 9.18001 7.56C9.0368 7.56 8.89945 7.64534 8.79818 7.79724C8.69691 7.94915 8.64001 8.15517 8.64001 8.37V13.23C8.64001 13.4448 8.69691 13.6509 8.79818 13.8028C8.89945 13.9547 9.0368 14.04 9.18001 14.04Z"
                            fill="#10393B"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
                      ></input>
                    </th>
                    <th scope="row" className="px-6 py-4">
                      Alexander
                    </th>
                    <td className="px-6 py-4">Johnson</td>
                    <td className="px-6 py-4">+44 20 7123 4567</td>
                    <td className="px-6 py-4">Alexander.johnson@gmail.com</td>
                    <td className="flex items-center gap-3 px-6 py-4">
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_14_122)">
                            <path
                              d="M15.2353 0.765333C14.7821 0.312798 14.1678 0.0586243 13.5273 0.0586243C12.8869 0.0586243 12.2726 0.312798 11.8193 0.765333L0.976677 11.608C0.666178 11.9168 0.419985 12.284 0.252342 12.6885C0.0846994 13.093 -0.00106532 13.5268 9.98748e-06 13.9647V15.3333C9.98748e-06 15.5101 0.0702479 15.6797 0.195272 15.8047C0.320296 15.9298 0.489866 16 0.666677 16H2.03534C2.47319 16.0012 2.90692 15.9156 3.31145 15.7481C3.71597 15.5805 4.08325 15.3344 4.39201 15.024L15.2353 4.18067C15.6877 3.72746 15.9417 3.11331 15.9417 2.473C15.9417 1.83269 15.6877 1.21854 15.2353 0.765333ZM3.44934 14.0813C3.07335 14.4548 2.56532 14.6651 2.03534 14.6667H1.33334V13.9647C1.33267 13.7019 1.38411 13.4417 1.4847 13.199C1.58529 12.9563 1.73302 12.7359 1.91934 12.5507L10.148 4.322L11.6813 5.85533L3.44934 14.0813ZM14.292 3.238L12.6213 4.90933L11.088 3.37933L12.7593 1.708C12.86 1.60754 12.9795 1.52789 13.111 1.47361C13.2424 1.41932 13.3833 1.39146 13.5255 1.39161C13.6678 1.39177 13.8086 1.41994 13.9399 1.47451C14.0712 1.52908 14.1905 1.60899 14.291 1.70967C14.3915 1.81035 14.4711 1.92983 14.5254 2.06129C14.5797 2.19275 14.6076 2.33362 14.6074 2.47584C14.6072 2.61807 14.5791 2.75888 14.5245 2.89022C14.4699 3.02156 14.39 3.14087 14.2893 3.24133L14.292 3.238Z"
                              fill="#10393B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_14_122">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="19"
                          viewBox="0 0 16 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.364 3.06H12.0204C11.8449 2.19663 11.3807 1.42087 10.7059 0.863469C10.0311 0.306069 9.18707 0.00111271 8.316 0L6.804 0C5.93293 0.00111271 5.08888 0.306069 4.41409 0.863469C3.73931 1.42087 3.27506 2.19663 3.0996 3.06H0.756C0.555496 3.06 0.363205 3.1406 0.221427 3.28406C0.0796497 3.42753 0 3.62211 0 3.825C0 4.02789 0.0796497 4.22247 0.221427 4.36594C0.363205 4.5094 0.555496 4.59 0.756 4.59H1.512V14.535C1.5132 15.5491 1.91183 16.5213 2.62046 17.2383C3.32909 17.9554 4.28985 18.3588 5.292 18.36H9.828C10.8301 18.3588 11.7909 17.9554 12.4995 17.2383C13.2082 16.5213 13.6068 15.5491 13.608 14.535V4.59H14.364C14.5645 4.59 14.7568 4.5094 14.8986 4.36594C15.0404 4.22247 15.12 4.02789 15.12 3.825C15.12 3.62211 15.0404 3.42753 14.8986 3.28406C14.7568 3.1406 14.5645 3.06 14.364 3.06ZM6.804 1.53H8.316C8.78493 1.53058 9.2422 1.67793 9.6251 1.95185C10.008 2.22578 10.2978 2.61285 10.4547 3.06H4.66528C4.82221 2.61285 5.112 2.22578 5.4949 1.95185C5.8778 1.67793 6.33507 1.53058 6.804 1.53ZM12.096 14.535C12.096 15.1437 11.8571 15.7274 11.4317 16.1578C11.0064 16.5882 10.4295 16.83 9.828 16.83H5.292C4.69049 16.83 4.11361 16.5882 3.68828 16.1578C3.26295 15.7274 3.024 15.1437 3.024 14.535V4.59H12.096V14.535Z"
                            fill="#10393B"
                          />
                          <path
                            d="M5.94002 14.04C6.08324 14.04 6.22059 13.9547 6.32186 13.8028C6.42313 13.6509 6.48002 13.4448 6.48002 13.23V8.37C6.48002 8.15517 6.42313 7.94915 6.32186 7.79724C6.22059 7.64534 6.08324 7.56 5.94002 7.56C5.79681 7.56 5.65946 7.64534 5.55819 7.79724C5.45692 7.94915 5.40002 8.15517 5.40002 8.37V13.23C5.40002 13.4448 5.45692 13.6509 5.55819 13.8028C5.65946 13.9547 5.79681 14.04 5.94002 14.04Z"
                            fill="#10393B"
                          />
                          <path
                            d="M9.18001 14.04C9.32323 14.04 9.46058 13.9547 9.56185 13.8028C9.66312 13.6509 9.72001 13.4448 9.72001 13.23V8.37C9.72001 8.15517 9.66312 7.94915 9.56185 7.79724C9.46058 7.64534 9.32323 7.56 9.18001 7.56C9.0368 7.56 8.89945 7.64534 8.79818 7.79724C8.69691 7.94915 8.64001 8.15517 8.64001 8.37V13.23C8.64001 13.4448 8.69691 13.6509 8.79818 13.8028C8.89945 13.9547 9.0368 14.04 9.18001 14.04Z"
                            fill="#10393B"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
                      ></input>
                    </th>
                    <th scope="row" className="px-6 py-4">
                      Alexander
                    </th>
                    <td className="px-6 py-4">Johnson</td>
                    <td className="px-6 py-4">+44 20 7123 4567</td>
                    <td className="px-6 py-4">Alexander.johnson@gmail.com</td>
                    <td className="flex items-center gap-3 px-6 py-4">
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_14_122)">
                            <path
                              d="M15.2353 0.765333C14.7821 0.312798 14.1678 0.0586243 13.5273 0.0586243C12.8869 0.0586243 12.2726 0.312798 11.8193 0.765333L0.976677 11.608C0.666178 11.9168 0.419985 12.284 0.252342 12.6885C0.0846994 13.093 -0.00106532 13.5268 9.98748e-06 13.9647V15.3333C9.98748e-06 15.5101 0.0702479 15.6797 0.195272 15.8047C0.320296 15.9298 0.489866 16 0.666677 16H2.03534C2.47319 16.0012 2.90692 15.9156 3.31145 15.7481C3.71597 15.5805 4.08325 15.3344 4.39201 15.024L15.2353 4.18067C15.6877 3.72746 15.9417 3.11331 15.9417 2.473C15.9417 1.83269 15.6877 1.21854 15.2353 0.765333ZM3.44934 14.0813C3.07335 14.4548 2.56532 14.6651 2.03534 14.6667H1.33334V13.9647C1.33267 13.7019 1.38411 13.4417 1.4847 13.199C1.58529 12.9563 1.73302 12.7359 1.91934 12.5507L10.148 4.322L11.6813 5.85533L3.44934 14.0813ZM14.292 3.238L12.6213 4.90933L11.088 3.37933L12.7593 1.708C12.86 1.60754 12.9795 1.52789 13.111 1.47361C13.2424 1.41932 13.3833 1.39146 13.5255 1.39161C13.6678 1.39177 13.8086 1.41994 13.9399 1.47451C14.0712 1.52908 14.1905 1.60899 14.291 1.70967C14.3915 1.81035 14.4711 1.92983 14.5254 2.06129C14.5797 2.19275 14.6076 2.33362 14.6074 2.47584C14.6072 2.61807 14.5791 2.75888 14.5245 2.89022C14.4699 3.02156 14.39 3.14087 14.2893 3.24133L14.292 3.238Z"
                              fill="#10393B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_14_122">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="19"
                          viewBox="0 0 16 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.364 3.06H12.0204C11.8449 2.19663 11.3807 1.42087 10.7059 0.863469C10.0311 0.306069 9.18707 0.00111271 8.316 0L6.804 0C5.93293 0.00111271 5.08888 0.306069 4.41409 0.863469C3.73931 1.42087 3.27506 2.19663 3.0996 3.06H0.756C0.555496 3.06 0.363205 3.1406 0.221427 3.28406C0.0796497 3.42753 0 3.62211 0 3.825C0 4.02789 0.0796497 4.22247 0.221427 4.36594C0.363205 4.5094 0.555496 4.59 0.756 4.59H1.512V14.535C1.5132 15.5491 1.91183 16.5213 2.62046 17.2383C3.32909 17.9554 4.28985 18.3588 5.292 18.36H9.828C10.8301 18.3588 11.7909 17.9554 12.4995 17.2383C13.2082 16.5213 13.6068 15.5491 13.608 14.535V4.59H14.364C14.5645 4.59 14.7568 4.5094 14.8986 4.36594C15.0404 4.22247 15.12 4.02789 15.12 3.825C15.12 3.62211 15.0404 3.42753 14.8986 3.28406C14.7568 3.1406 14.5645 3.06 14.364 3.06ZM6.804 1.53H8.316C8.78493 1.53058 9.2422 1.67793 9.6251 1.95185C10.008 2.22578 10.2978 2.61285 10.4547 3.06H4.66528C4.82221 2.61285 5.112 2.22578 5.4949 1.95185C5.8778 1.67793 6.33507 1.53058 6.804 1.53ZM12.096 14.535C12.096 15.1437 11.8571 15.7274 11.4317 16.1578C11.0064 16.5882 10.4295 16.83 9.828 16.83H5.292C4.69049 16.83 4.11361 16.5882 3.68828 16.1578C3.26295 15.7274 3.024 15.1437 3.024 14.535V4.59H12.096V14.535Z"
                            fill="#10393B"
                          />
                          <path
                            d="M5.94002 14.04C6.08324 14.04 6.22059 13.9547 6.32186 13.8028C6.42313 13.6509 6.48002 13.4448 6.48002 13.23V8.37C6.48002 8.15517 6.42313 7.94915 6.32186 7.79724C6.22059 7.64534 6.08324 7.56 5.94002 7.56C5.79681 7.56 5.65946 7.64534 5.55819 7.79724C5.45692 7.94915 5.40002 8.15517 5.40002 8.37V13.23C5.40002 13.4448 5.45692 13.6509 5.55819 13.8028C5.65946 13.9547 5.79681 14.04 5.94002 14.04Z"
                            fill="#10393B"
                          />
                          <path
                            d="M9.18001 14.04C9.32323 14.04 9.46058 13.9547 9.56185 13.8028C9.66312 13.6509 9.72001 13.4448 9.72001 13.23V8.37C9.72001 8.15517 9.66312 7.94915 9.56185 7.79724C9.46058 7.64534 9.32323 7.56 9.18001 7.56C9.0368 7.56 8.89945 7.64534 8.79818 7.79724C8.69691 7.94915 8.64001 8.15517 8.64001 8.37V13.23C8.64001 13.4448 8.69691 13.6509 8.79818 13.8028C8.89945 13.9547 9.0368 14.04 9.18001 14.04Z"
                            fill="#10393B"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
                      ></input>
                    </th>
                    <th scope="row" className="px-6 py-4">
                      Alexander
                    </th>
                    <td className="px-6 py-4">Johnson</td>
                    <td className="px-6 py-4">+44 20 7123 4567</td>
                    <td className="px-6 py-4">Alexander.johnson@gmail.com</td>
                    <td className="flex items-center gap-3 px-6 py-4">
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_14_122)">
                            <path
                              d="M15.2353 0.765333C14.7821 0.312798 14.1678 0.0586243 13.5273 0.0586243C12.8869 0.0586243 12.2726 0.312798 11.8193 0.765333L0.976677 11.608C0.666178 11.9168 0.419985 12.284 0.252342 12.6885C0.0846994 13.093 -0.00106532 13.5268 9.98748e-06 13.9647V15.3333C9.98748e-06 15.5101 0.0702479 15.6797 0.195272 15.8047C0.320296 15.9298 0.489866 16 0.666677 16H2.03534C2.47319 16.0012 2.90692 15.9156 3.31145 15.7481C3.71597 15.5805 4.08325 15.3344 4.39201 15.024L15.2353 4.18067C15.6877 3.72746 15.9417 3.11331 15.9417 2.473C15.9417 1.83269 15.6877 1.21854 15.2353 0.765333ZM3.44934 14.0813C3.07335 14.4548 2.56532 14.6651 2.03534 14.6667H1.33334V13.9647C1.33267 13.7019 1.38411 13.4417 1.4847 13.199C1.58529 12.9563 1.73302 12.7359 1.91934 12.5507L10.148 4.322L11.6813 5.85533L3.44934 14.0813ZM14.292 3.238L12.6213 4.90933L11.088 3.37933L12.7593 1.708C12.86 1.60754 12.9795 1.52789 13.111 1.47361C13.2424 1.41932 13.3833 1.39146 13.5255 1.39161C13.6678 1.39177 13.8086 1.41994 13.9399 1.47451C14.0712 1.52908 14.1905 1.60899 14.291 1.70967C14.3915 1.81035 14.4711 1.92983 14.5254 2.06129C14.5797 2.19275 14.6076 2.33362 14.6074 2.47584C14.6072 2.61807 14.5791 2.75888 14.5245 2.89022C14.4699 3.02156 14.39 3.14087 14.2893 3.24133L14.292 3.238Z"
                              fill="#10393B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_14_122">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href="" className="rounded-md bg-[#FBF7EE] p-3">
                        <svg
                          width="16"
                          height="19"
                          viewBox="0 0 16 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.364 3.06H12.0204C11.8449 2.19663 11.3807 1.42087 10.7059 0.863469C10.0311 0.306069 9.18707 0.00111271 8.316 0L6.804 0C5.93293 0.00111271 5.08888 0.306069 4.41409 0.863469C3.73931 1.42087 3.27506 2.19663 3.0996 3.06H0.756C0.555496 3.06 0.363205 3.1406 0.221427 3.28406C0.0796497 3.42753 0 3.62211 0 3.825C0 4.02789 0.0796497 4.22247 0.221427 4.36594C0.363205 4.5094 0.555496 4.59 0.756 4.59H1.512V14.535C1.5132 15.5491 1.91183 16.5213 2.62046 17.2383C3.32909 17.9554 4.28985 18.3588 5.292 18.36H9.828C10.8301 18.3588 11.7909 17.9554 12.4995 17.2383C13.2082 16.5213 13.6068 15.5491 13.608 14.535V4.59H14.364C14.5645 4.59 14.7568 4.5094 14.8986 4.36594C15.0404 4.22247 15.12 4.02789 15.12 3.825C15.12 3.62211 15.0404 3.42753 14.8986 3.28406C14.7568 3.1406 14.5645 3.06 14.364 3.06ZM6.804 1.53H8.316C8.78493 1.53058 9.2422 1.67793 9.6251 1.95185C10.008 2.22578 10.2978 2.61285 10.4547 3.06H4.66528C4.82221 2.61285 5.112 2.22578 5.4949 1.95185C5.8778 1.67793 6.33507 1.53058 6.804 1.53ZM12.096 14.535C12.096 15.1437 11.8571 15.7274 11.4317 16.1578C11.0064 16.5882 10.4295 16.83 9.828 16.83H5.292C4.69049 16.83 4.11361 16.5882 3.68828 16.1578C3.26295 15.7274 3.024 15.1437 3.024 14.535V4.59H12.096V14.535Z"
                            fill="#10393B"
                          />
                          <path
                            d="M5.94002 14.04C6.08324 14.04 6.22059 13.9547 6.32186 13.8028C6.42313 13.6509 6.48002 13.4448 6.48002 13.23V8.37C6.48002 8.15517 6.42313 7.94915 6.32186 7.79724C6.22059 7.64534 6.08324 7.56 5.94002 7.56C5.79681 7.56 5.65946 7.64534 5.55819 7.79724C5.45692 7.94915 5.40002 8.15517 5.40002 8.37V13.23C5.40002 13.4448 5.45692 13.6509 5.55819 13.8028C5.65946 13.9547 5.79681 14.04 5.94002 14.04Z"
                            fill="#10393B"
                          />
                          <path
                            d="M9.18001 14.04C9.32323 14.04 9.46058 13.9547 9.56185 13.8028C9.66312 13.6509 9.72001 13.4448 9.72001 13.23V8.37C9.72001 8.15517 9.66312 7.94915 9.56185 7.79724C9.46058 7.64534 9.32323 7.56 9.18001 7.56C9.0368 7.56 8.89945 7.64534 8.79818 7.79724C8.69691 7.94915 8.64001 8.15517 8.64001 8.37V13.23C8.64001 13.4448 8.69691 13.6509 8.79818 13.8028C8.89945 13.9547 9.0368 14.04 9.18001 14.04Z"
                            fill="#10393B"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="my-5 w-full items-end justify-end">
            <nav
              aria-label="Page navigation example"
              className="flex w-full items-end justify-end"
            >
              <ul className="flex h-8 items-center text-sm">
                <li>
                  <a
                    href="#"
                    className="ms-0 flex h-8 items-center justify-center rounded-s-lg border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-2.5 w-2.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center justify-center border-gray-300 bg-white px-3 leading-tight  text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center justify-center border-gray-300 bg-white px-3 leading-tight  text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex h-8 items-center justify-center rounded-lg bg-orange-500 px-3 leading-tight text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center justify-center border-gray-300 bg-white px-3 leading-tight  text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center justify-center border-gray-300 bg-white px-3 leading-tight  text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center justify-center rounded-e-lg border-gray-300 bg-white px-3  leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-2.5 w-2.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Course Detail Drawer */}
      <CourseDetailDrawer
        openCourseDrawer={openCourseDrawer}
        setOpenCourseDrawer={setOpenCourseDrawer}
      />
    </>
  );
};
