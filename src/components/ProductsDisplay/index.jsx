import { products } from "../../assets/products";
import { ProductCard } from "./styles";
import { useDispatch } from "react-redux";
import { addProductThunk } from "../../store/modules/shop/thunk";

function ProductsDisplay() {
  const dispatch = useDispatch();

  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index}>
          <img src={product.image} alt={product.name} />
          <span>{product.name}</span>
          <p>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </p>
          <button onClick={() => dispatch(addProductThunk(product))}>
            Adicionar ao Carrinho
          </button>
        </ProductCard>
      ))}
    </>
  );
}

export default ProductsDisplay;
