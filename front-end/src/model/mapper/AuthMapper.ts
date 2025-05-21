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
    console.log(data);
    console.log(data.firstName);
    console.log(data.lastName);

    let fullName = '';

    if (data.firstName && data.firstName.length > 0) {
        fullName += data.firstName;
    }
    
    if (data.lastName && data.lastName.length > 0) {
        if (fullName.length > 0) {
            fullName += ' ';
        }
        fullName += data.lastName;
    }
    console.log(fullName);

    return {
        id: data.id,
        fullName: fullName
    }
}

export default {mapRegisterData, mapUserNameData}