"use client";

import { SidebarProvider } from "@/context/SidebarContext";
import type { FC, PropsWithChildren } from "react";
import { DashboardSidebar } from "./navbar";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
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
