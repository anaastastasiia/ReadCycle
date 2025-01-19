import { create } from 'zustand';
// import { produce } from 'immer';
import axios from 'axios';
import CategoriesMapper from '../model/mapper/CategoriesMapper';
import { CategoryType } from '../model/types';
// import { ProduceState } from '../model/types';

export interface CategoriesState {
    categories: CategoryType[];
}

type CategoryResponse = CategoryType[];

//STORE
export const categoriesStore = create<CategoriesState>(() => ({
    categories: []
}))

// const map = produce<ProduceState<CategoriesState>>;

//ACTIONS
const getCategories = async () => {
    try {
        const {data}: {data: CategoryResponse} = await axios.get('http://localhost:3000/api/category');
        const categories = data.map((category, index) => CategoriesMapper.mapCategoriesFromDb(category, index));
        console.log(categories)
        
        categoriesStore.setState(() => ({
            categories: categories
        }))
        return categories;
    } catch (err) {
        console.error('Error while getting categories: ', err)
    }
}

export const categoriesActions = {getCategories}