import BookTypeEnum from './bookTypeEnum.js';

class BookResponse {
    constructor({
        id,
        name,
        author,
        image,
        description,
        price,
        discount,
        category_name
    }) {
        this.id = id;
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
