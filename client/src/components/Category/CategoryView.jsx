import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CategoryViewContainer } from "./Styles/CategoryView/CategoryViewContainer.styled";
import { Section } from "./Styles/CategoryView/Section.styled";

function CategoryView({ categories }) {
  return (
    <CategoryViewContainer>
      {categories.map(category => (
        <Section key={category}>
          <h2>{category}</h2>
          <FontAwesomeIcon icon={faChevronRight} />
        </Section>
      ))}
    </CategoryViewContainer>
  );
}

export default CategoryView;
