import * as yup from "yup";
import { BooksTypeEnum } from "../model/enums";

export const createBookSchema = yup.object().shape({
  name: yup.string().required('errors:validation.required'),
  author: yup.string().required("errors:validation.required"),
  description: yup.string().required("errors:validation.required"),
  price: yup
    .number()
    .typeError("errors:validation.createBook.priceNumber")
    .positive("errors:validation.createBook.pricePositive")
    .required("errors:validation.required"),
  categoryName: yup
    .mixed<BooksTypeEnum>()
    .oneOf(Object.values(BooksTypeEnum), "errors:validation.createBook.category")
    .required("errors:validation.required"),
  image: yup.string().nullable(),
  pages: yup.number().typeError("errors:validation.createBook.pagesNumber").positive("errors:validation.createBook.pagesPositive").nullable(),
  edition: yup.string().nullable(),
  year: yup
    .string()
    .matches(/^\d{4}$/, "errors:validation.createBook.year")
    .nullable(),
});
