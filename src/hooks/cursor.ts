import { createContext, useContext } from "react";

export type CursorVariant = "default" | "link" | "text";
export interface CursorContextType {
	setCursorVariant: (variant: CursorVariant) => void;
}

export const CursorContext = createContext<CursorContextType>({
	setCursorVariant: () => {},
});
export const useCursor = () => useContext(CursorContext);
