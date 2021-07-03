    import './styles.css';

import ProductImg from 'assets/images/product.png';
import ProductDescription from 'components/ProductDescription';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <ProductDescription />
            </div>
            <div className="d-grid gap-2 block">
                <button className="btn btn-primary" type="button">COMPRAR</button>
            </div>
            
        </div>
    );
}

export default ProductCard;