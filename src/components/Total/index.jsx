import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Container, TextContent } from "./styles";

function Total() {
  const history = useHistory();

  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <h2>Seu Carrinho</h2>
      <hr />
      <TextContent>
        <span className="contentTitle">Produtos no carrinho:</span>
        <span>{cart.length}</span>
      </TextContent>
      <hr />
      <TextContent>
        <span className="contentTitle">Preço total:</span>
        <span>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(cart.reduce((acc, curr) => acc + curr.price, 0))}
        </span>
      </TextContent>
      <hr />
      <button
        onClick={() => {
          toast.success("Compra finalizada!");
          localStorage.clear();
          history.push("/");
        }}
      >
        Finalizar compra!
      </button>
    </Container>
  );
}

export default Total;
