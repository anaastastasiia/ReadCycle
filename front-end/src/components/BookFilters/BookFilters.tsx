import { useEffect, useState } from 'react';
import { categoriesActions, categoriesStore } from '../../store/useCategories';
import { useTranslation } from 'react-i18next';

export const BookFilters = () => {
    const { t } = useTranslation();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const { getCategories } = categoriesActions;
    const { categories } = categoriesStore();

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Фільтри</h3>

            <input
                type="text"
                placeholder="Пошук за назвою"
                className="w-full p-2 border rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex gap-2 items-center">
                Жанр:
                <select
                    className="w-full p-2 border rounded"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" disabled selected />
                    {categories.reverse().map((item) => {
                        return (
                            <option value={item.id}>
                                {t(`enums:BooksTypeEnum.${item.key}`)}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="flex gap-2 items-center">
                Ціна:
                <input
                    type="number"
                    placeholder="Від"
                    className="w-1/2 p-2 border rounded"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="До"
                    className="w-1/2 p-2 border rounded"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>

            <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Застосувати
            </button>
        </div>
    );
};
