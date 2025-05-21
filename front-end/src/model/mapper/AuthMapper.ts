import { RegisterRequest, UserNameResponse } from "../../api";
import { RegisterFormData } from "../../store/authStore";
import { UsersNameData } from "../types";

const mapRegisterData = (formData: RegisterFormData): RegisterRequest => {
    return {
        ...formData,
        apartment: formData.apartment ? formData.apartment : ''
    }
}

const mapUserNameData = (data: UserNameResponse): UsersNameData => {
    const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ');

    return {
        id: data.id,
        fullName: fullName
    }
}

export default {mapRegisterData, mapUserNameData}