import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Мінімум 2 символи")
        .required("Назва обов'язкова"),
    username: Yup.string()
        .required("Ім'я користувача обов'язкове"),
    email: Yup.string()
        .email('Введіть коректний email')
        .required("Email є обов'язковим"),
    phone: Yup.string()
        .matches(/^\+?[0-9\s\-]{10,15}$/, 'Невірний формат')
        .required("Номер є обов'язковим"),
    website: Yup.string()
        .matches(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/,'Невірний формат сайту')
        .required("Вебсайт є обов'язковим"),
    city: Yup.string()
        .required("Місто є обов'язковим"),
    street : Yup.string()
        .required("Вулиця є обов'язковою"),
    companyName: Yup.string()
        .required("Назва компанії є обов'язковою"),


});

export default validationSchema;