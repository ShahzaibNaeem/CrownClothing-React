import { Link } from 'react-router-dom';
import ProductsCard from '../products-card/products-card.component';
import "./category-preview.styles.scss";

const CategoryPreview = ({title,products}) => {
  return (
    <>
    <div className="category-preview-container">
        <div className='category-preview-title'>
            <Link to={title}>{title.toUpperCase()}</Link>
        </div>
        <div className="category-preview-body">
            { products.filter((_,idx)=>idx<4).map((product)=>
                <ProductsCard key={product.id} product={product}/> 
               ) }
        </div>
    </div>
    </>
  )
}

export default CategoryPreview