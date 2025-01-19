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