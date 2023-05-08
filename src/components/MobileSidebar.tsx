import { PropsWithChildren, forwardRef } from "react";

export const MobileSidebar = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        id="drawer-example"
        className="fixed z-50 top-0 left-0 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-label"
        data-drawer-toggle
      >
        {children}
      </div>
    );
  }
);
