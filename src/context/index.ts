import { createContext } from "react";
import { ContextType } from "types/index.type";

const initialContext: ContextType = { isMobile: false };

export const Context = createContext<ContextType>(initialContext);
