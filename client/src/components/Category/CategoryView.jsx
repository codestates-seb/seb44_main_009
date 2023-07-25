import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CategoryViewContainer } from "./Styles/CategoryView/CategoryViewContainer.styled";
import { Section } from "./Styles/CategoryView/Section.styled";

function CategoryView({ categories, selectedCategory }) {
  const slugMap = {
    상의: "상의",
    원피스: "원피스",
    팬츠: "하의",
    스커트: "스커트",
    아우터: "아우터",
    잡화: "악세사리",
  };
  const uniqueCategories = new Set(
    selectedCategory
      ? [selectedCategory]
      : categories.map(category => category.name),
  );
  uniqueCategories.delete("");

  const categoryNames = Array.from(uniqueCategories);
  return (
    <CategoryViewContainer>
      {categoryNames.map((category, index) => (
        <Section key={`${category}-${index}`}>
          <Link to={`/products/${slugMap[category]}`}>
            <h2>{category}</h2>
          </Link>
          {selectedCategory === category && (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
        </Section>
      ))}
    </CategoryViewContainer>
  );
}

export default CategoryView;
