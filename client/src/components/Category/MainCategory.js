import {
  CategoryWrapper,
  CategoryItem,
  CategoryImage,
  CategoryName,
} from "./Styles/CategoryStyles";
import { Coat, Jean, Shirt, Skirt, Dress, Accessary } from "../../image/index";

//const categories = ["상의", "원피스", "팬츠", "스커트", "아우터", "잡화"];
const categories = [
  { name: "상의", image: Skirt },
  { name: "원피스", image: Dress },
  { name: "팬츠", image: Jean },
  { name: "스커트", image: Shirt },
  { name: "아우터", image: Coat },
  { name: "잡화", image: Accessary },
];
const CategoryList = () => {
  return (
    <div>
      <CategoryWrapper>
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            <div>
              <CategoryImage src={category.image} alt={category.name} />
            </div>
            <CategoryName>{category.name}</CategoryName>
          </CategoryItem>
        ))}
      </CategoryWrapper>
    </div>
  );
};

export default CategoryList;
