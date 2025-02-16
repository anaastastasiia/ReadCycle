import BookTypeEnum from '../models/bookTypeEnum.js';

class BookResponse {
    constructor({
        name,
        author,
        image,
        description,
        price,
        discount,
        category_name
    }) {
        this.name = name;
        this.author = author;
        this.image = image;
        this.description = description;
        this.price = Number(price);
        this.discount = discount;
        this.categoryName = Object.values(BookTypeEnum).includes(category_name)
            ? category_name
            : BookTypeEnum.ALL;
    }
}

export default BookResponse;
