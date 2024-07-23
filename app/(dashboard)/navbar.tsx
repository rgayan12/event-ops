import type { FC } from "react";

export const DashboardSidebar: FC = function () {
  return (
    <>
      <div className="flex h-[150vh] w-[16rem] bg-teal-900 flex-col py-10 px-2">
        <div className="px-3">
          <h2 className="text-[22px] font-semibold text-[#FFFFFF]">Sugar Loaf</h2>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="bg-[#EF8352] flex gap-4 items-center px-5 py-2 w-full rounded-lg">
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9001 10.4542C23.5072 7.42957 21.9773 4.66809 19.6214 2.73099C17.2655 0.793897 14.2605 -0.17344 11.217 0.0255971C8.17347 0.224634 5.31996 1.57511 3.23644 3.80253C1.15291 6.02995 -0.00428024 8.96716 7.4054e-05 12.0172C-0.00569035 13.6497 0.325132 15.2658 0.971889 16.7648C1.61865 18.2637 2.56745 19.6133 3.75907 20.7292C4.67041 21.5729 5.87123 22.034 7.11307 22.0172H16.8801C18.192 22.0202 19.4525 21.5069 20.3891 20.5882C21.7238 19.2896 22.7364 17.697 23.346 15.9374C23.9556 14.1778 24.1453 12.3001 23.9001 10.4542ZM18.9911 19.1542C18.4284 19.7085 17.6699 20.0186 16.8801 20.0172H7.11307C6.38235 20.0322 5.67357 19.767 5.13207 19.2762C4.13935 18.3463 3.3489 17.2218 2.81003 15.9729C2.27116 14.7239 1.99544 13.3774 2.00007 12.0172C2.00106 10.6094 2.29885 9.21766 2.87401 7.93275C3.44918 6.64785 4.28879 5.49866 5.33807 4.56015C7.16122 2.91606 9.53111 2.00952 11.9861 2.01715C12.3783 2.01731 12.7703 2.03935 13.1601 2.08315C15.0357 2.30099 16.8112 3.04571 18.281 4.23107C19.7508 5.41643 20.8547 6.99393 21.4649 8.78084C22.0751 10.5677 22.1666 12.491 21.7287 14.3277C21.2909 16.1645 20.3417 17.8396 18.9911 19.1592V19.1542ZM7.80707 16.3022C7.9967 16.4878 8.10482 16.7412 8.10763 17.0065C8.11044 17.2719 8.00772 17.5275 7.82207 17.7172C7.63642 17.9068 7.38304 18.0149 7.11768 18.0177C6.85232 18.0205 6.5967 17.9178 6.40707 17.7322C5.27203 16.6203 4.49377 15.1957 4.17148 13.6399C3.8492 12.0841 3.99749 10.4675 4.59746 8.99627C5.19743 7.52504 6.22189 6.26579 7.54027 5.37903C8.85865 4.49227 10.4112 4.01816 12.0001 4.01715C12.3825 4.01704 12.7645 4.04411 13.1431 4.09815C13.2731 4.1169 13.3982 4.16108 13.5111 4.22817C13.624 4.29526 13.7227 4.38395 13.8013 4.48916C13.88 4.59438 13.9371 4.71406 13.9695 4.84138C14.0019 4.96869 14.0089 5.10114 13.9901 5.23115C13.9729 5.36188 13.9297 5.48784 13.863 5.60164C13.7964 5.71543 13.7077 5.81475 13.6022 5.89376C13.4966 5.97277 13.3763 6.02987 13.2483 6.06171C13.1204 6.09355 12.9874 6.09948 12.8571 6.07915C11.6056 5.90039 10.3296 6.12151 9.21117 6.71095C8.09278 7.3004 7.18915 8.22804 6.62923 9.36151C6.06932 10.495 5.88174 11.7763 6.09325 13.0227C6.30477 14.2691 6.90457 15.4169 7.80707 16.3022ZM19.9191 10.8742C19.9731 11.2528 20.0002 11.6347 20.0001 12.0172C20.0033 13.0828 19.7917 14.1382 19.378 15.1203C18.9643 16.1024 18.3569 16.991 17.5921 17.7332C17.4022 17.9188 17.1463 18.0214 16.8808 18.0184C16.6152 18.0154 16.3617 17.907 16.1761 17.7172C15.9904 17.5273 15.8878 17.2714 15.8908 17.0058C15.8938 16.7403 16.0022 16.4868 16.1921 16.3012C16.8677 15.6426 17.378 14.8335 17.6811 13.94C17.9842 13.0464 18.0716 12.0939 17.9361 11.1602C17.8981 10.8975 17.9661 10.6305 18.1251 10.4179C18.284 10.2053 18.5209 10.0646 18.7836 10.0267C19.0463 9.98872 19.3133 10.0567 19.5258 10.2156C19.7384 10.3746 19.8791 10.6115 19.9171 10.8742H19.9191ZM13.9261 11.5052C14.0464 11.9379 14.0201 12.3983 13.8511 12.8145C13.6821 13.2307 13.3801 13.5792 12.9922 13.8056C12.6043 14.0321 12.1523 14.1236 11.7068 14.0661C11.2613 14.0085 10.8475 13.805 10.5298 13.4874C10.2122 13.1698 10.0087 12.7559 9.95117 12.3104C9.89359 11.865 9.98516 11.413 10.2116 11.025C10.438 10.6371 10.7865 10.3351 11.2027 10.1661C11.6189 9.99717 12.0793 9.97081 12.5121 10.0912L16.2931 6.31015C16.3853 6.21464 16.4957 6.13846 16.6177 6.08605C16.7397 6.03364 16.8709 6.00605 17.0037 6.0049C17.1365 6.00375 17.2681 6.02905 17.391 6.07933C17.5139 6.12961 17.6256 6.20386 17.7195 6.29776C17.8134 6.39165 17.8876 6.5033 17.9379 6.6262C17.9882 6.74909 18.0135 6.88077 18.0123 7.01355C18.0112 7.14633 17.9836 7.27755 17.9312 7.39956C17.8788 7.52156 17.8026 7.6319 17.7071 7.72415L13.9261 11.5052Z" fill="white"/></svg>
            <h2 className="text-white font-semibold text-[18px]">Dashboard</h2>
          </div>

          <div className="flex gap-4 items-center px-5 py-2 w-full rounded-lg">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 11C12.1046 11 13 10.1046 13 9C13 7.89543 12.1046 7 11 7C9.89543 7 9 7.89543 9 9C9 10.1046 9.89543 11 11 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.24 4.75999C15.7979 5.31723 16.2404 5.97896 16.5424 6.70735C16.8443 7.43574 16.9997 8.2165 16.9997 9.00499C16.9997 9.79349 16.8443 10.5742 16.5424 11.3026C16.2404 12.031 15.7979 12.6928 15.24 13.25M6.76 13.24C6.20214 12.6828 5.75959 12.021 5.45764 11.2926C5.1557 10.5642 5.00028 9.78349 5.00028 8.99499C5.00028 8.2065 5.1557 7.42574 5.45764 6.69735C5.75959 5.96896 6.20214 5.30723 6.76 4.74999M18.07 1.92999C19.9447 3.80527 20.9979 6.34835 20.9979 8.99999C20.9979 11.6516 19.9447 14.1947 18.07 16.07M3.93 16.07C2.05529 14.1947 1.00214 11.6516 1.00214 8.99999C1.00214 6.34835 2.05529 3.80527 3.93 1.92999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h2 className="text-white font-semibold text-[18px]">Link one</h2>
          </div>

          <div className="flex gap-4 items-center px-5 py-2 w-full rounded-lg">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 11C12.1046 11 13 10.1046 13 9C13 7.89543 12.1046 7 11 7C9.89543 7 9 7.89543 9 9C9 10.1046 9.89543 11 11 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.24 4.75999C15.7979 5.31723 16.2404 5.97896 16.5424 6.70735C16.8443 7.43574 16.9997 8.2165 16.9997 9.00499C16.9997 9.79349 16.8443 10.5742 16.5424 11.3026C16.2404 12.031 15.7979 12.6928 15.24 13.25M6.76 13.24C6.20214 12.6828 5.75959 12.021 5.45764 11.2926C5.1557 10.5642 5.00028 9.78349 5.00028 8.99499C5.00028 8.2065 5.1557 7.42574 5.45764 6.69735C5.75959 5.96896 6.20214 5.30723 6.76 4.74999M18.07 1.92999C19.9447 3.80527 20.9979 6.34835 20.9979 8.99999C20.9979 11.6516 19.9447 14.1947 18.07 16.07M3.93 16.07C2.05529 14.1947 1.00214 11.6516 1.00214 8.99999C1.00214 6.34835 2.05529 3.80527 3.93 1.92999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h2 className="text-white font-semibold text-[18px]">Link one</h2>
          </div>
        </div>
      </div>
    </>
  );
};
