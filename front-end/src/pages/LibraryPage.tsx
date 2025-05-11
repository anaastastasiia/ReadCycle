import { booksStore } from '../store/useBooks';
import BookItem from '../components/Book/Book';
import { BookFilters } from '../components/BookFilters/BookFilters';

export const LibraryPage = () => {
    const { booksOnSale } = booksStore();

    return (
        <div className="overflow-x-hidden">
            <div>
                {booksOnSale.length ? (
                    <div className="container bg-[#f9f9f9]">
                        <div className="flex md:flex-row flex-col">
                            <div className="lg:w-1/4 p-4 w-full">
                                <BookFilters />
                            </div>
                            <div className="lg:w-3/4 p-6 w-full">
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 space-y-6 md:space-y-0 gap-6">
                                    {booksOnSale.map((item, index) => {
                                        return (
                                            <BookItem {...item} key={index} />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
