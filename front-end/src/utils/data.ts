import { BooksTypeEnum, NavbarEnum } from "./enums";
import Flag_of_Ukraine from '../assets/Flag_of_Ukraine.png';
import Flag_of_Poland from '../assets/Flag_of_Poland.png';
import Flag_of_the_United_States from '../assets/Flag_of_the_United_States.png';

export const NavbarMenu = [
  {
    id: 1,
    key: NavbarEnum.HOME,
    link: "/",
  },
  {
    id: 2,
    key: NavbarEnum.LIBRARY,
    link: "#",
  },
  {
    id: 3,
    key: NavbarEnum.ABOUT_US,
    link: "#",
  },
  {
    id: 5,
    key: NavbarEnum.HELP,
    link: "#",
  },
];

export const BooksTypesList = [
  {
    id: 1,
    key: BooksTypeEnum.FICTION,
    color: "#0063ff",
    delay: 0.2,
  },
  {
    id: 2,
    key: BooksTypeEnum.ROMANCE,
    color: "#00c986",
    delay: 0.3,
  },
  {
    id: 3,
    key: BooksTypeEnum.CHILDREN,
    color: "#922aee",
    delay: 0.4,
  },
  {
    id: 4,
    key: BooksTypeEnum.FANTASY,
    color: "#ea7516",
    delay: 0.5,
  },
  {
    id: 5,
    key: BooksTypeEnum.MYSTERY,
    color: "#d9e00b",
    delay: 0.6,
  },
  {
    id: 6,
    key: BooksTypeEnum.BUSINESS,
    color: "#986d1d",
    delay: 0.7,
  },
  {
    id: 7,
    key: BooksTypeEnum.PERSONAL,
    color: "#b93838",
    delay: 0.8,
  },
  {
    id: 8,
    key: BooksTypeEnum.ALL,
    color: "#464646",
    delay: 0.9,
  },
];

export const LANGUAGES = [
  { label: "English", value: "en", img: Flag_of_the_United_States},
  { label: "Polish", value: "pl", img: Flag_of_Poland },
  { label: "Ukrainian", value: "ua", img: Flag_of_Ukraine },
];