import type { MenuItems } from "@/types/menuItems";
import { persistentAtom } from "@nanostores/persistent";
import { atom } from "nanostores";

export const $currentTheme = persistentAtom<"light" | "dark">("theme");

export const $currentMenuItemActive = atom<MenuItems>("home");
