import * as yup from "yup";
import { BooksTypeEnum } from "../model/enums";

export const createBookSchema = yup.object().shape({
  name: yup.string().required("Field name is required"),
  author: yup.string().required("Field author is required"),
  description: yup.string().required("Field description is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Field price is required"),
  categoryName: yup
    .mixed<BooksTypeEnum>()
    .oneOf(Object.values(BooksTypeEnum), "Invalid category")
    .required("Field categoryName is required"),
  image: yup.string().nullable(),
  pages: yup.number().positive("Pages must be positive").nullable(),
  edition: yup.string().nullable(),
  year: yup
    .string()
    .matches(/^\d{4}$/, "Year must be a valid 4-digit number")
    .nullable(),
});
