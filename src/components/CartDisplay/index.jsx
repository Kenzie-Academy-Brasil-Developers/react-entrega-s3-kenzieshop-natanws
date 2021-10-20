import { ProductCard } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeProductThunk } from "../../store/modules/shop/thunk";

function CartDisplay() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.map((product, index) => (
        <ProductCard key={index}>
          <img src={product.image} alt={product.name} />
          <div>
            <span>{product.name}</span>
            <p>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
            <button onClick={() => dispatch(removeProductThunk(index))}>
              Remover do Carrinho
            </button>
          </div>
        </ProductCard>
      ))}
    </>
  );
}

export default CartDisplay;
