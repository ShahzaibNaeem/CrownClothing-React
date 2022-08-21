import "./cart-item.styles.scss";

const Cartitem = ({name,quantity}) => {
  return (
    <>
        <h2>{name}</h2>
        <span>{quantity}</span>
    </>
  )
}

export default Cartitem