import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import { OrderContainer } from "../../user/Cart/order/styles/OrderContainer.styled";
import { useState } from "react";
import CategoryView from "../../../components/Category/CategoryView";
import CategoryList from "../../../components/Category/CategoryList";
import { CategoryNavigator } from "./styles/CategoryNavigator.styled";

function CategoryPage() {
  const categories = ["상의", "원피스", "팬츠", "스커트", "아우터", "잡화"];
  const [selectedCategory, setSelectedCategory] = useState("");

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
        <CategoryView
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </CategoryNavigator>
      <Footer />
    </OrderContainer>
  );
}

export default CategoryPage;
