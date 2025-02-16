import { SingleValue } from "react-select";
import { BooksTypeEnum } from "./enums";

export type ProduceState<T> = (state: T) => void;

export interface NavbarMenuProps {
    id: number;
    key: string,
    link: string
}

export interface ResponsiveMenuProps {
    open: boolean;
    options: NavbarMenuProps[];
    closeMenu: () => void;
}

export type Option = {
    value: string;
    label: string;
}

export type SelectProps = {
    options: Option[];
    defaultValue?: string | number;
    onChange: (newValue: SingleValue<Option>) => void;
}

export type LanguageType = {
    value: string;
    label: string;
    img: string;
}

export type CategoryType = {
    id: number;
    key: BooksTypeEnum;
    color?: string,
    icon?: string,
    delay: number
}

export type Category = {
    id: number;
    name: string;
    color?: string,
    icon?: string,
}

export type Book = {
    name: string,
    author: string,
    image?: string,
    images?: string[],
    pages: number,
    description: string,
    edition?: string,
    price: number,
    discount?: number,
    year: number,
    date_created: Date,
    category_id: number,
    num_reviews: number,
}

export type BookBanner = {
    name: string,
    author: string,
    image?: string,
    description: string,
    price: number,
    discount?: number,
    reverse?: boolean,
    category: string
}