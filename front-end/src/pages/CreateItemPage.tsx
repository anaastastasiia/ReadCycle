import { useState } from 'react';

export const CreateItemPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        price: '',
        category: '',
        mainImage: null,
        additionalImages: [],
        discount: '',
        publisher: '',
        year: '',
        pages: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, mainImage: e.target.files[0] });
    };

    const handleAdditionalImages = (e) => {
        setFormData({ ...formData, additionalImages: [...e.target.files] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting product:', formData);
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Add New Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">
                        Main Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">
                        Author
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">
                        Price ($)
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">
                        Category
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">
                        Additional Images
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleAdditionalImages}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">
                        Discount (%)
                    </label>
                    <input
                        type="number"
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">
                        Publisher
                    </label>
                    <input
                        type="text"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium">
                            Year
                        </label>
                        <input
                            type="number"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">
                            Pages
                        </label>
                        <input
                            type="number"
                            name="pages"
                            value={formData.pages}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
