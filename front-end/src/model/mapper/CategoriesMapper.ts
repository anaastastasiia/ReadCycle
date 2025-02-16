import { BooksTypeEnum } from "../enums";
import { Category, CategoryType } from "../types";

const valueToBooksTypeEnum = (value: string): BooksTypeEnum => {
    console.log('value: ', value)
    const enumValue = BooksTypeEnum[value.toUpperCase() as keyof typeof BooksTypeEnum]
    return enumValue || BooksTypeEnum.ALL
}
//change enum

const mapCategoriesFromDb = (category: Category, index: number): CategoryType => {
    return {
        id: category.id,
        key: valueToBooksTypeEnum(category.name),
        color: category.color ?? "#0063ff",
        icon: category.icon ?? "",
        delay: (0.2 + index * 0.1),
    }
}

export default {mapCategoriesFromDb}