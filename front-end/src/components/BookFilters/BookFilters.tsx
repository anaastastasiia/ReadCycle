import { useEffect } from 'react';
import { categoriesActions, categoriesStore } from '../../store/useCategories';
import { useTranslation } from 'react-i18next';
import { Form, FormInput } from '../Form/Form';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FilterFormData } from '../../store/useBooks';
import { FormSelect } from '../Form/Select';

export const BookFilters = () => {
    const { t } = useTranslation();
    const { getCategories } = categoriesActions;
    const { categories } = categoriesStore();

    useEffect(() => {
        getCategories();
    }, []);

    const { register: formRegister, handleSubmit } = useForm();

    const onSubmit = async (data: FilterFormData) => {
        console.log(data);
    };

    const categoriesOptions = categories.reverse().map((item) => ({
        value: item.id.toString(),
        label: t(`enums:BooksTypeEnum.${item.key}`)
    }));
    return (
        <motion.div
            className="flex-1 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <h3 className="text-lg font-semibold">
                {t('components:bookFilter.filters.header')}
            </h3>
            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex gap-2 items-center">
                    <FormInput
                        label={t('components:bookFilter.filters.byName')}
                        type="text"
                        register={formRegister('name')}
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <FormInput
                        label={t('components:bookFilter.filters.byAuthor')}
                        type="text"
                        register={formRegister('author')}
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <FormSelect
                        register={formRegister('category')}
                        label={t('components:bookFilter.filters.byGenre')}
                        options={categoriesOptions}
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <FormInput
                        label={t('components:bookFilter.filters.byPrice')}
                        type="number"
                        register={formRegister('priceFrom')}
                    />
                    <FormInput
                        type="number"
                        label={t('components:bookFilter.filters.to')}
                        register={formRegister('priceTo')}
                    />
                </div>

                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    {t('components:bookFilter.filters.search')}
                </button>
            </Form>
        </motion.div>
    );
};
