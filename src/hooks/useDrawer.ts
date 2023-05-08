import { Drawer, DrawerOptions } from "flowbite";
import { useRef, useEffect, MutableRefObject } from "react";

export const useDrawer = () => {
  const drawer = useRef<Drawer | null>(null);
  const refDrawer = useRef<HTMLDivElement | null>(null);

  const options: DrawerOptions = {
    backdrop: true,
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
  };

  useEffect(() => {
    if (!drawer.current) {
      drawer.current = new Drawer(refDrawer.current, options);
    }
  }, []);

  return { drawer, refDrawer };
};
