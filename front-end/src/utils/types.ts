import { SingleValue } from "react-select";

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