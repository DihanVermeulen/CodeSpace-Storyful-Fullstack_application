import "./CategoryButton.css";

interface Props {
  title: string;
  filter?: any;
  icon?: any;
}

const CategoryButton: React.FC<Props> = ({ title, filter, icon }) => {
  return (
    <div className="category-button">
      <div></div>
      <div>
        <h4 className="category-button-title">{title}</h4>
      </div>
    </div>
  );
};

export default CategoryButton;
