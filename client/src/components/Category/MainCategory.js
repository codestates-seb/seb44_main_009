import { Link } from "react-router-dom";
import {
  CategoryWrapper,
  CategoryItem,
  CategoryImage,
  CategoryName,
} from "./Styles/CategoryStyles/CategoryStyles";
//import { Coat, Jean, Shirt, Skirt, Dress, Accessary } from "../../image/index";
import { categories } from "../../dummyDate/dummyCategory";
// export const categories = [
//   { name: "상의", image: Shirt, slug: "tops" },
//   { name: "원피스", image: Dress, slug: "dress" },
//   { name: "팬츠", image: Jean, slug: "pants" },
//   { name: "스커트", image: Skirt, slug: "skirts" },
//   { name: "아우터", image: Coat, slug: "outerwear" },
//   { name: "잡화", image: Accessary, slug: "accessories" },
// ];

const CategoryList = () => {
  return (
    <div>
      <CategoryWrapper>
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            <Link to={`/products/${category.slug}`}>
              <div>
                <CategoryImage src={category.image} alt={category.name} />
              </div>
            </Link>
            <CategoryName>{category.name}</CategoryName>
          </CategoryItem>
        ))}
      </CategoryWrapper>
    </div>
  );
};

export default CategoryList;
