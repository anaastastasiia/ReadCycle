export class AuthRequest {
    constructor(
        firstName,
        lastName,
        city,
        street,
        houseNumber,
        apartment,
        postalCode,
        phoneNumber,
        email,
        password
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.apartment = apartment;
        this.postalCode = postalCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
}

export class UserNameResponse {
    constructor(id, first_name, last_name) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
    }
}
