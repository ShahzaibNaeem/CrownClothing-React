import Button from "../button/button.component"
import "./products-card.styles.scss"

const ProductsCard = ({name,imageUrl,price}) => {
  return (
    <>
        <div className="container products-card-container">
            <img src={imageUrl} alt={name} />
            <div className="products-card-footer">
                <span className="footer-name">{name}</span>
                <span className="footer-price">{price}</span>
            </div>
            <Button buttonType="hoverInverted">Add to cart</Button>
        </div>
    </>
  )
}

export default ProductsCard