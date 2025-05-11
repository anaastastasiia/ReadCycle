export const getPriceWithDiscount = (price: number, discount?: number): string => {
    if (discount) {
        return (price * (1 - discount / 100)).toFixed(2);
    }
    return '';
};