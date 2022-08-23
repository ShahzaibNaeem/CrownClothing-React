import React from 'react';
import ProductsCard from '../products-card/products-card.component';
import "./category-preview.styles.scss";

const CategoryPreview = ({title,products}) => {
  return (
    <>
    <div className="category-preview-container">
        <div className='category-title'>
            <span >{title.toUpperCase()}</span>
        </div>
        <div className="category-preview">
            { products.filter((_,idx)=>idx<4).map((product)=>
                <ProductsCard key={product.id} product={product}/> 
               ) }
        </div>
    </div>
    </>
  )
}

export default CategoryPreview