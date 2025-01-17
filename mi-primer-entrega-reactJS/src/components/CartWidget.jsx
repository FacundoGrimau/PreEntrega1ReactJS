import cart from "../assets/images/cart4.svg";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-white position-relative">
            <img src={cart} alt="Carrito" width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget