import { createContext, useContext } from "react";
import { BookDetails } from "../model/types";

export const BookContext = createContext<BookDetails | null>(null);

export const useBookContext = () => {
    const context = useContext(BookContext);
    if (!context) throw new Error("useBookContext must be used within a BookProvider");
    return context;
};
