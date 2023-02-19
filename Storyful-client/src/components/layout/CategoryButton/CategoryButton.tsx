import "./CategoryButton.css";

interface Props {
  title: string;
  filter: any;
  icon: any;
}

const CategoryButton: React.FC<Props> = ({ title, filter, icon }) => {
  return <div className="category-button"></div>;
};

export default CategoryButton;
