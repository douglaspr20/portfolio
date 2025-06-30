import { persistentAtom } from "@nanostores/persistent";
import { atom } from "nanostores";

export const $currentTheme = persistentAtom<"light" | "dark">("theme", "dark");

export const $currentMenuItemActive = atom("home");
