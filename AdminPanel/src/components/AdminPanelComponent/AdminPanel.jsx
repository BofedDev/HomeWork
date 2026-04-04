import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const AdminPanel = () => {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem('products');
        return saved ? JSON.parse(saved) : [];
    });

    const [filters, setFilters] = useState({
        sortBy: "name",
        onlyActive: false,
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: Date.now(),
            createdAt: new Date().toISOString(),
        };
        setProducts(prev => [newProduct, ...prev]);
    };

    const deleteProduct = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const toggleStatus = (id) => {
        setProducts(prev =>
            prev.map(p => p.id === id ? { ...p, active: !p.active } : p)
        );
    };

    return (
        <Container className="admin-panel py-5">
            <h1 className="admin-panel__title mb-5">Адмін-панель товарів</h1>

            <ProductForm onSubmit={addProduct} />

            <ProductList
                products={products}
                filters={filters}
                setFilters={setFilters}
                onDelete={deleteProduct}
                onToggleStatus={toggleStatus}
            />
        </Container>
    );
};

export default AdminPanel;