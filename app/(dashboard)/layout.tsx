"use client";

import type { FC, PropsWithChildren } from "react";
import { DashboardSidebar } from "@/app/(dashboard)/sidebar";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </>
  );
};

const DashboardLayoutContent: FC<PropsWithChildren> = function ({ children }) {
  return (
    <>
      <div className="flex items-start">
        <DashboardSidebar />
        <div className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
