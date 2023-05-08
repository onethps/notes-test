import { Dropdown } from "flowbite";
import { useRef, useEffect, MutableRefObject } from "react";

export const useDropdown = (
  target: MutableRefObject<HTMLDivElement | null>,
  trigger: MutableRefObject<HTMLDivElement | null>
) => {
  const dropdown = useRef<Dropdown | null>(null);

  useEffect(() => {
    if (!dropdown.current) {
      dropdown.current = new Dropdown(target.current, trigger.current);
    }
  }, []);

  return { dropdown };
};
