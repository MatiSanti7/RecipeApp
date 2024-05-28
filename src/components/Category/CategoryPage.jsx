import { useParams } from "react-router-dom";
import Category from "./Category";

const CategoryPage = () => {
  const { category } = useParams();

  return <Category category={category} />;
};

export default CategoryPage;
