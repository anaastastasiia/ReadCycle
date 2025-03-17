import { RegisterRequest } from "../../api";
import { RegisterFormData, UserData } from "../../store/authStore";

const mapRegisterData = (formData: RegisterFormData): RegisterRequest => {
    return {
        ...formData,
        apartment: formData.apartment ? formData.apartment : ''
    }
}

const mapUserData = (formData: RegisterFormData): UserData => {
    return {
        ...formData,
        apartment: formData.apartment ? formData.apartment : ''
    }
}
  
export default {mapRegisterData, mapUserData}