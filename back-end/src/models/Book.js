export class BookResponse {
    constructor({
        id,
        name,
        author,
        image,
        description,
        price,
        discount,
        category_name,
        user_id
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
        this.userId = user_id;
    }
}

export class BookDetailsResponse {
    constructor({
        id,
        name,
        author,
        image,
        description,
        price,
        discount,
        category_name,
        images,
        pages,
        edition,
        year,
        date_created,
        num_reviews,
        user_id
    }) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.edition = edition;
        this.year = year;
        this.dateCreated = date_created;
        this.numReviews = num_reviews;
        this.pages = pages;
        this.author = author;
        this.image = image;
        this.description = description;
        this.price = Number(price);
        this.discount = discount;
        this.categoryName = Object.values(BookTypeEnum).includes(category_name)
            ? category_name
            : BookTypeEnum.ALL;
        this.userId = user_id;
    }
}

export const BookTypeEnum = Object.freeze({
    FICTION: 'fiction',
    ROMANCE: 'romance',
    CHILDREN: 'children',
    FANTASY: 'fantasy',
    MYSTERY: 'mystery',
    BUSINESS: 'business',
    PERSONAL: 'personal',
    ALL: 'all'
});

export class NewBookRequest {
    constructor({
        name,
        author,
        image,
        description,
        price,
        discount,
        category_name,
        images,
        pages,
        edition,
        year,
        num_reviews,
        user_id
    }) {
        this.name = name;
        this.images = images;
        this.edition = edition;
        this.year = year;
        this.dateCreated = date_created;
        this.numReviews = num_reviews;
        this.pages = pages;
        this.author = author;
        this.image = image;
        this.description = description;
        this.price = Number(price);
        this.discount = discount;
        this.categoryName = Object.values(BookTypeEnum).includes(category_name)
            ? category_name
            : BookTypeEnum.ALL;
        this.userId = user_id;
    }
}

export class UserBooksIdsResponse {
    constructor({ id }) {
        this.id = id;
    }
}
