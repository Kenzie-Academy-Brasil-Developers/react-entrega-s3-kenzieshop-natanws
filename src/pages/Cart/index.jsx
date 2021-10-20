import { Link } from "react-router-dom";
import CartDisplay from "../../components/CartDisplay";
import Total from "../../components/Total";
import { CartProducts, ContentContainer } from "./styles";
import { Container, TitleContainer } from "./styles";

function Cart() {
  return (
    <Container>
      <TitleContainer>
        <Link to="/">KenzieShop</Link>
      </TitleContainer>
      <ContentContainer>
        <CartProducts>
          <h2>Carrinho</h2>
          <CartDisplay />
        </CartProducts>
        <Total />
      </ContentContainer>
    </Container>
  );
}

export default Cart;
