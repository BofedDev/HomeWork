import PropTypes from 'prop-types';
import { Card, Badge, Button, ListGroup } from 'react-bootstrap';

const ProductCard = ({ product, onDelete, onToggleStatus }) => {
    const {
        id, name, description, price, discountedPrice, category, brand, sku, quantity,
        imageUrl, additionalImages, active, inStock, showOnHome,
    } = product;

    const extraImages = additionalImages
        ? additionalImages.split(',').map(s => s.trim()).filter(Boolean)
        : [];

    return (
        <Card className={`product-card mb-4 ${active ? 'product-card--active' : 'product-card--inactive'}`}>
            {imageUrl && (
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt={name}
                    className="product-card__img"
                />
            )}

            <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="product-card__name">{name}</Card.Title>
                    <Badge bg={active ? 'success' : 'secondary'} className="product-card__badge">
                        {active ? 'Активний' : 'Неактивний'}
                    </Badge>
                </div>

                {description && (
                    <Card.Text className="product-card__description text-muted">
                        {description}
                    </Card.Text>
                )}

                <ListGroup variant="flush" className="product-card__info mb-3">
                    <ListGroup.Item>
                        <span className="product-card__label">Ціна:</span>{' '}
                        <strong>{price} грн</strong>
                        {discountedPrice && (
                            <span className="product-card__discount ms-2 text-danger">
                                ціна зі знижкою {discountedPrice} грн
                            </span>
                        )}
                    </ListGroup.Item>
                    {category && (
                        <ListGroup.Item>
                            <span className="product-card__label">Категорія:</span> {category}
                        </ListGroup.Item>
                    )}
                    {brand && (
                        <ListGroup.Item>
                            <span className="product-card__label">Бренд:</span> {brand}
                        </ListGroup.Item>
                    )}
                    {sku && (
                        <ListGroup.Item>
                            <span className="product-card__label">SKU:</span> {sku}
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <span className="product-card__label">Кількість:</span> {quantity}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Badge bg={inStock ? 'success' : 'warning'} text={inStock ? undefined : 'dark'}>
                            {inStock ? 'В наявності' : 'Немає в наявності'}
                        </Badge>
                        {showOnHome && (
                            <Badge bg="info" className="ms-2">На головній</Badge>
                        )}
                    </ListGroup.Item>
                </ListGroup>

                {extraImages.length > 0 && (
                    <div className="product-card__extra-images mb-3">
                        {extraImages.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Додаткове ${i + 1}`}
                                className="product-card__extra-img"
                            />
                        ))}
                    </div>
                )}

                <div className="d-flex gap-2">
                    <Button
                        variant={active ? 'outline-secondary' : 'outline-success'}
                        size="sm"
                        onClick={() => onToggleStatus(id)}
                    >
                        {active ? 'Деактивувати' : 'Активувати'}
                    </Button>
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => onDelete(id)}
                    >
                        Видалити
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        discountedPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        category: PropTypes.string,
        brand: PropTypes.string,
        sku: PropTypes.string,
        quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        imageUrl: PropTypes.string,
        additionalImages: PropTypes.string,
        active: PropTypes.bool.isRequired,
        inStock: PropTypes.bool,
        showOnHome: PropTypes.bool,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleStatus: PropTypes.func.isRequired,
};

export default ProductCard;