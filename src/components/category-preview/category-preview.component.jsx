import ProductsCard from '../products-card/products-card.component';
import {CategoryPreviewContainer,CategoryPreviewTitle,Title,CategoryPreviewBody} from "./category-preview.styles";

const CategoryPreview = ({title,products}) => {
  return (
    <>
    <CategoryPreviewContainer>
        <CategoryPreviewTitle>
            <Title to={title}>{title.toUpperCase()}</Title>
        </CategoryPreviewTitle>
        <CategoryPreviewBody>
            { products.filter((_,idx)=>idx<4).map((product)=>
                <ProductsCard key={product.id} product={product}/> 
               ) }
        </CategoryPreviewBody>
     </CategoryPreviewContainer>
    </>
  )
}

export default CategoryPreview