import { useTranslation } from 'react-i18next';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { useBookContext } from '../../contexts/BookContext';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

export const Book = () => {
    const { t } = useTranslation();
    const book = useBookContext();
    const name = book.name;

    const allImages =
        book.image || (book.images && book.images.length > 0)
            ? [
                  {
                      original: book.image ? book.image : '',
                      thumbnail: book.image ? book.image : ''
                  },
                  ...(book.images?.map((imgUrl) => ({
                      original: imgUrl,
                      thumbnail: imgUrl
                  })) || [])
              ]
            : null;

    return (
        <div className="w-full flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex justify-center h-full w-full">
                {allImages ? (
                    <ImageGallery
                        items={allImages}
                        showPlayButton={false}
                        showFullscreenButton={true}
                        thumbnailPosition="bottom"
                        showNav={true}
                        slideOnThumbnailOver={true}
                        autoPlay={false}
                    />
                ) : (
                    <div className="text-center text-gray-400 italic">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 mx-auto mb-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3l18 18M4 4h16v16H4V4zm8 4a4 4 0 100 8 4 4 0 000-8z"
                            />
                        </svg>
                        {t('common:info.noImages')}
                    </div>
                )}
            </div>
            <div className="lg:w-1/2 w-full flex flex-col p-2 gap-y-2 sm:pt-6 lg:pt-0">
                <Breadcrumb paths={[{ name, href: `/details/${book.id}` }]} />
                <div className="text-[28px] text-xl">{name}</div>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full">
                    <h3 className="font-semibold text-lg mb-2">
                        {t('pages:bookDetails.characteristics.header')}
                    </h3>
                    <table className="w-full text-sm">
                        <tbody>
                            <tr className="border-b">
                                <td className="font-medium py-1">
                                    {t(
                                        'pages:bookDetails.characteristics.author'
                                    )}
                                    :
                                </td>
                                <td className="py-1 text-right">
                                    {book.author}
                                </td>
                            </tr>
                            {book.edition ? (
                                <tr className="border-b">
                                    <td className="font-medium py-1">
                                        {t(
                                            'pages:bookDetails.characteristics.edition'
                                        )}
                                        :
                                    </td>
                                    <td className="py-1 text-right">
                                        {book.edition}
                                    </td>
                                </tr>
                            ) : null}
                            <tr className="border-b">
                                <td className="font-medium py-1">
                                    {t(
                                        'pages:bookDetails.characteristics.pages'
                                    )}
                                    :
                                </td>
                                <td className="py-1 text-right">
                                    {book.pages}
                                </td>
                            </tr>
                            <tr>
                                <td className="font-medium py-1">
                                    {t(
                                        'pages:bookDetails.characteristics.year'
                                    )}
                                    :
                                </td>
                                <td className="py-1 text-right">{book.year}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="mt-2 text-blue-500 font-medium hover:underline">
                        {t('pages:bookDetails.characteristics.showAll')}
                    </button>
                </div>
            </div>
        </div>
    );
};
