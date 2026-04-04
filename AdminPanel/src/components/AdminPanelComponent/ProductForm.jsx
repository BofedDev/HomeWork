import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Row, Col, Image, Form } from 'react-bootstrap';
import FormField from './FormField';
import PropTypes from 'prop-types';

const fields = [
    { label: "Назва товару", name: "name", placeholder: "Введіть назву" },
    { label: "Опис товару", name: "description", type: "textarea", placeholder: "Введіть опис" },
    { label: "Ціна (грн)", name: "price", type: "number", placeholder: "0" },
    { label: "Ціна зі знижкою (грн)", name: "discountedPrice", type: "number", placeholder: "0" },
    { label: "Категорія", name: "category", placeholder: "Наприклад: Електроніка" },
    { label: "Бренд", name: "brand", placeholder: "Наприклад: Samsung" },
    { label: "SKU / Артикул", name: "sku", placeholder: "Наприклад: SKU-001" },
    { label: "Кількість на складі", name: "quantity", type: "number", placeholder: "0" },
    { label: "URL головного зображення", name: "imageUrl", placeholder: "https://..." },
    { label: "Додаткові зображення (через кому)", name: "additionalImages", placeholder: "https://img1.jpg, https://img2.jpg" },
];

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Мінімум 3 символи")
        .required("Назва обов'язкова"),
    description: Yup.string()
        .min(10, "Мінімум 10 символів")
        .required("Опис обов'язковий"),
    price: Yup.number()
        .typeError("Введіть число")
        .moreThan(0, "Ціна має бути більше 0")
        .required("Ціна обов'язкова"),
    discountedPrice: Yup.number()
        .typeError("Введіть число")
        .min(0, "Не може бути від'ємною")
        .test(
            'less-than-price',
            'Не може бути більшою за звичайну ціну',
            function (value) {
                if (!value) return true;
                return value < this.parent.price;
            }
        )
        .nullable(),
    category: Yup.string().required("Категорія обов'язкова"),
    brand: Yup.string().required("Бренд обов'язковий"),
    sku: Yup.string().required("SKU обов'язковий"),
    quantity: Yup.number()
        .typeError("Введіть число")
        .min(0, "Не менше 0")
        .required("Кількість обов'язкова"),
    imageUrl: Yup.string()
        .url("Введіть валідне посилання (https://...)")
        .required("URL зображення обов'язковий"),
    additionalImages: Yup.string(),
    inStock: Yup.boolean(),
    showOnHome: Yup.boolean(),
    active: Yup.boolean(),
});

const ProductForm = ({ onSubmit }) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            discountedPrice: '',
            category: '',
            brand: '',
            sku: '',
            quantity: 0,
            imageUrl: '',
            additionalImages: '',
            inStock: true,
            showOnHome: false,
            active: true,
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
        },
    });

    const isImageUrlValid =
        formik.values.imageUrl &&
        !formik.errors.imageUrl;

    return (
        <div className="product-form mb-5">
            <h2>Додати новий товар</h2>

            <form onSubmit={formik.handleSubmit}>

                {fields.map(({ label, name, type, placeholder }) => (
                    <FormField
                        key={name}
                        label={label}
                        name={name}
                        type={type}
                        formik={formik}
                        placeholder={placeholder}
                    />
                ))}

                <Row className="mt-3 mb-3">
                    <Col md={4}>
                        <Form.Check
                            type="checkbox"
                            label="Активний товар"
                            name="active"
                            checked={formik.values.active}
                            onChange={formik.handleChange}
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Check
                            type="checkbox"
                            label="В наявності"
                            name="inStock"
                            checked={formik.values.inStock}
                            onChange={formik.handleChange}
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Check
                            type="checkbox"
                            label="Показувати на головній"
                            name="showOnHome"
                            checked={formik.values.showOnHome}
                            onChange={formik.handleChange}
                        />
                    </Col>
                </Row>

                {isImageUrlValid && (
                    <div className="mb-3">
                        <p><strong>Прев'ю головного зображення:</strong></p>
                        <Image
                            src={formik.values.imageUrl}
                            alt="Прев'ю"
                            thumbnail
                            style={{ maxHeight: '220px', objectFit: 'contain' }}
                        />
                    </div>
                )}

                <div className="d-flex gap-2 mt-4">
                    <Button
                        type="submit"
                        variant="primary"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Збереження...' : 'Зберегти товар'}
                    </Button>
                    <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() => formik.resetForm()}
                        disabled={formik.isSubmitting}
                    >
                        Очистити форму
                    </Button>
                </div>

            </form>
        </div>
    );
};

ProductForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;