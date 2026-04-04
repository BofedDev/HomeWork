import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductList = ({ products, filters, setFilters, onDelete, onToggleStatus }) => {

    let filtered = filters.onlyActive
        ? products.filter(p => p.active)
        : [...products];

    filtered.sort((a, b) => {
        if (filters.sortBy === 'name') return a.name.localeCompare(b.name, 'uk');
        if (filters.sortBy === 'price') return (Number(a.price) || 0) - (Number(b.price) || 0);
        return 0;
    });

    return (
        <div className="product-list-wrapper">
            <div className="product-list__controls">
                <label>
                    Сортувати за:&nbsp;
                    <select
                        value={filters.sortBy}
                        onChange={e => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                    >
                        <option value="name">Назвою</option>
                        <option value="price">Ціною</option>
                    </select>
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={filters.onlyActive}
                        onChange={e => setFilters(prev => ({ ...prev, onlyActive: e.target.checked }))}
                    />
                    &nbsp;Тільки активні
                </label>
            </div>

            {filtered.length === 0 ? (
                <div className="product-list-empty">
                    <span className="empty-icon">📦</span>
                    <p>Список товарів порожній</p>
                </div>
            ) : (
                <ul className="product-list">
                    {filtered.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onDelete={onDelete}
                            onToggleStatus={onToggleStatus}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            active: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        })
    ).isRequired,
    filters: PropTypes.shape({
        sortBy: PropTypes.string.isRequired,
        onlyActive: PropTypes.bool.isRequired,
    }).isRequired,
    setFilters: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleStatus: PropTypes.func.isRequired,
};

export default ProductList;