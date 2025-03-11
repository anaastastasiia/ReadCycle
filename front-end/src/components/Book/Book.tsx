import { BookDetails } from '../../model/types';
import Breadcrumb from '../Breadcrumb/BreadCrumb';

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
        <div className="container w-full flex">
            <div className="w-1/2 flex justify-center">
                <img src={image} width={'400px'} />
            </div>
            <div className="w-1/2 flex flex-col p-2 gap-y-2">
                <Breadcrumb paths={[{ name, href: `/details/${id}` }]} />

                <div className="text-[28px] text-xl">{name}</div>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full">
                    <h3 className="font-semibold text-lg mb-2">
                        Характеристики
                    </h3>
                    <table className="w-full text-sm">
                        <tbody>
                            <tr className="border-b">
                                <td className="font-medium py-1">Автор</td>
                                <td className="py-1 text-right">{author}</td>
                            </tr>
                            {edition ? (
                                <tr className="border-b">
                                    <td className="font-medium py-1">
                                        Видавництво
                                    </td>
                                    <td className="py-1 text-right">
                                        {edition}
                                    </td>
                                </tr>
                            ) : null}
                            <tr className="border-b">
                                <td className="font-medium py-1">
                                    Кількість сторінок
                                </td>
                                <td className="py-1 text-right">{pages}</td>
                            </tr>
                            <tr>
                                <td className="font-medium py-1">Рік:</td>
                                <td className="py-1 text-right">{year}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="mt-2 text-blue-500 font-medium hover:underline">
                        Дивитися всі характеристики
                    </button>
                </div>
            </div>
        </div>
    );
};
