import { SingleValue } from "react-select";
import { BooksTypeEnum } from "./enums";
import { BookTypeEnum } from "../api";

export type ProduceState<T> = (state: T) => void;

export interface MenuItemProps {
    id: number;
    key: string,
    link: string
}

export interface MenuProps {
    open: boolean;
    options: MenuItemProps[];
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
    id: number,
    name: string,
    author: string,
    image?: string | null,
    description: string,
    price: number,
    discount?: number,
    reverse?: boolean,
    categoryName: BookTypeEnum,
    userId: number
}

export type BookDetails = {
    id: number,
    name: string,
    author: string,
    image?: string,
    images?: string[],
    pages?: number,
    description: string,
    edition?: string,
    price: number,
    discount?: number,
    year?: string,
    dateCreated?: string,
    categoryName: BookTypeEnum,
    numReviews?: number,
    userId: number
}

export enum AuthEnum {
    REGISTER,
    LOGIN
}

export type UsersNameData = {
    id: number,
    fullName: string
}
