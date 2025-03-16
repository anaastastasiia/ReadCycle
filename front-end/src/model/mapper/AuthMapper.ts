import { RegisterRequest } from "../../api";
import { RegisterFormData } from "../../store/authStore";

const mapRegisterData = (formData: RegisterFormData): RegisterRequest => {
    return {
        ...formData,
        apartment: formData.apartment ? formData.apartment : ''
    }
}
  
export default {mapRegisterData}