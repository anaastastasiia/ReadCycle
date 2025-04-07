import { create } from 'zustand';
import { uploadController } from "../controllers/uploadController.ts";

export interface UploadImageState {
    image?: string;
    images?: string[];
}

//STORE
export const uploadStore = create<UploadImageState>(() => ({
    image: undefined,
    images: undefined
}));

//ACTIONS
const uploadImage = async (file: File, bookId: number) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await uploadController.callEndpoint((api) =>
            api.apiUploadPost(file, bookId)  
        );

        if (response) {
            const {data} = await response;
            uploadStore.setState(() => ({
                image: data.imageUrl 
            }));
            return data.imageUrl;
        }
    } catch (err) {
        console.error('Upload failed: ', err);
    }

    return null;
};

const uploadImages = async (files: File[], bookId: number) => {
    try {
        const response = await uploadController.callEndpoint((api) =>
            api.apiUploadImagesPost(files, bookId)  
        );

        if (response) {
            const {data} = await response;
            uploadStore.setState(() => ({
                images: data.imageUrls
            }));
            return uploadStore.getState().images;
        }
    } catch (err) {
        console.error('Upload failed: ', err);
    }

    return null;
};

export const uploadActions = { uploadImage, uploadImages };
