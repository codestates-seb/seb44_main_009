import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CategoryViewContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
