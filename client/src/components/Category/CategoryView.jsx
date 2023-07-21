import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CategoryViewContainer } from "./Styles/CategoryView/CategoryViewContainer.styled";
import { Section } from "./Styles/CategoryView/Section.styled";

function CategoryView({ categories }) {
  const slug = ["상의", "원피스", "하의", "스커트", "아우터", "악세사리"];
  return (
    <CategoryViewContainer>
      {categories.map((category, index) => (
        <Section key={category}>
          <Link to={`/products/${slug[index]}`}>
            <h2>{category}</h2>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
        </Section>
      ))}
    </CategoryViewContainer>
  );
}

export default CategoryView;
