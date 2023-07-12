import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import { OrderContainer } from "../../user/Cart/order/styles/OrderContainer.styled";
import { useState } from "react";
import { styled } from "styled-components";
import CategoryView from "../../../components/Category/CategoryView";
import CategoryList from "../../../components/Category/CategoryList";

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
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <CategoryView categories={categories} />
      </CategoryNavigator>
      <Footer />
    </OrderContainer>
  );
}

export default CategoryPage;
