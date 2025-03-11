import { BookDetails } from '../../model/types';

export const Book = ({
    id,
    image,
    name,
    description,
    author,
    price,
    discount,
    categoryName,
    dateCreated,
    edition,
    images,
    numReviews,
    pages,
    year
}: BookDetails) => {
    return (
        <div>
            <div>
                <img src={image} />
            </div>
            <div>
                <h2>{name}</h2>
                <h3>{author}</h3>
            </div>
        </div>
    );
};
