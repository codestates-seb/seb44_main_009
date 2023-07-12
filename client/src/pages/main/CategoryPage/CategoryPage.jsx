import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import { OrderContainer } from "../../user/Cart/order/styles/OrderContainer.styled";
import { useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CategoryNavigator = styled.div`
  width: 834px;
  height: 100%;
  border: 1px solid #383838;
  flex: 1;
  display: flex;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 200px;
  background-color: transparent;
  align-items: center;
  background-color: #f5f6f8;
`;

const CategoryItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  width: 200px;
  height: 70px;
  text-decoration: none;
  color: #383838;
  font-weight: 600;
  font-size: 20px;

  &.selected {
    background-color: #fff;
  }
`;

const CategoryView = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
function CategoryPage() {
  const categories = ["상의", "원피스", "팬츠", "스커트", "아우터", "잡화"];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <OrderContainer>
      <Header_back />
      <CategoryNavigator>
        <CategoryList>
          {categories.map(category => (
            <CategoryItem
              key={category}
              href="#"
              className={selectedCategory === category ? "selected" : ""}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </CategoryItem>
          ))}
        </CategoryList>
        <CategoryView>
          {categories.map(category => (
            <Section key={category}>
              <h2>{category}</h2>
              <FontAwesomeIcon icon={faChevronRight} />
            </Section>
          ))}
        </CategoryView>
      </CategoryNavigator>
      <Footer />
    </OrderContainer>
  );
}

export default CategoryPage;
