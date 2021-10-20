import { Link } from "react-router-dom";
import ProductsDisplay from "../../components/ProductsDisplay";
import { Container, ContentContainer, TitleContainer } from "./styles";
import CartIcon from "../../assets/img/shopping-cart.png";

function Home() {
  return (
    <Container>
      <TitleContainer>
        <Link to="/">KenzieShop</Link>
        <Link to="/cart">
          <img src={CartIcon} alt="" />
        </Link>
      </TitleContainer>
      <ContentContainer>
        <h2>Produtos</h2>
        <ProductsDisplay />
      </ContentContainer>
    </Container>
  );
}

export default Home;
