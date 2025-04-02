import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, FormInput } from '../components/Form/Form';
import { FormTextArea } from '../components/Form/TextArea';
import BooksMapper from '../model/mapper/BooksMapper';
import { createBookSchema } from '../validation/bookSchema';
import { FormSelect } from '../components/Form/Select';
import { booksActions, CreateBookFormData } from '../store/useBooks';
import { categoriesActions, categoriesStore } from '../store/useCategories';

export const CreateItemPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { createBook } = booksActions;
    const { getCategories } = categoriesActions;
    const { categories } = categoriesStore();

    useEffect(() => {
        getCategories();
    }, []);

    const {
        register: formRegister,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<CreateBookFormData>({
        resolver: yupResolver(createBookSchema)
    });

    const handleCreate = async (data: CreateBookFormData) => {
        const res = await createBook(BooksMapper.mapNewBook(data));
        if (res) {
            navigate('/');
        }
    };

    const handleClearFiles = () => {
        setValue('images', []);
    };

    const handleClearFile = () => {
        setValue('image', '');
    };

    const categoriesOptions = categories.map((category) => ({
        value: category.id.toString(),
        label: t(`enums:BooksTypeEnum.${category.key}`)
    }));

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {t('pages:createBookPage.title')}
            </h2>
            <Form className="space-y-4" onSubmit={handleSubmit(handleCreate)}>
                <FormInput
                    type="file"
                    accept="image/*"
                    label={t('pages:createBookPage.form.image')}
                    register={formRegister('image')}
                    error={errors.image}
                    onClear={handleClearFile}
                    clearable
                />
                <FormInput
                    register={formRegister('name')}
                    label={t('pages:createBookPage.form.name')}
                    error={errors.name}
                />
                <FormInput
                    register={formRegister('author')}
                    label={t('pages:createBookPage.form.author')}
                    error={errors.author}
                />
                <FormTextArea
                    register={formRegister('description')}
                    label={t('pages:createBookPage.form.description')}
                />
                <FormInput
                    register={formRegister('price')}
                    label={t('pages:createBookPage.form.price')}
                    error={errors.price}
                />
                <FormSelect
                    register={formRegister('categoryName')}
                    label={t('pages:createBookPage.form.category')}
                    options={categoriesOptions}
                />
                <FormInput
                    type="file"
                    accept="image/*"
                    multiple
                    label={t('pages:createBookPage.form.images')}
                    register={formRegister('images')}
                    clearable
                    onClear={handleClearFiles}
                />
                <FormInput
                    register={formRegister('edition')}
                    label={t('pages:createBookPage.form.edition')}
                    error={errors.edition}
                />
                <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                        register={formRegister('year')}
                        label={t('pages:createBookPage.form.year')}
                        error={errors.year}
                    />
                    <FormInput
                        register={formRegister('pages')}
                        label={t('pages:createBookPage.form.pages')}
                        error={errors.pages}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                >
                    {t('common:button.add')}
                </button>
            </Form>
        </div>
    );
};
