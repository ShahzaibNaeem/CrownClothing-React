import "./cart-item.styles.scss";

const Cartitem = ({name,imageUrl,price,quantity}) => {
  return (
    <>
        <div className="cart-item-container">
         <img src={imageUrl} alt={name} />
         <div className="cart-item-details">
          <div className="name">{name}</div>
          <div className="price">{quantity} x ${price}</div>
         </div>
        </div>
    </>
  )
}

export default Cartitem