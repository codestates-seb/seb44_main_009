import { styled } from "styled-components";

const CategoryListContainer = styled.ul`
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

const CategoryListItem = styled.a`
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
