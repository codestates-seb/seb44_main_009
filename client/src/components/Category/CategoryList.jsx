import { CategoryListContainer } from "./Styles/CategoryList/CategoryListContainer.styled";
import { CategoryListItem } from "./Styles/CategoryList/CategoryListItem.styled";

function CategoryList({ categories, selectedCategory, handleCategoryClick }) {
  return (
    <CategoryListContainer>
      {categories.map(category => (
        <CategoryListItem
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </CategoryListItem>
      ))}
    </CategoryListContainer>
  );
}

export default CategoryList;
