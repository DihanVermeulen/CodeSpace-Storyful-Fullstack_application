import "./CategoryButton.css";

interface Props {
  title: string;
  filter?: any;
  icon?: any;
}

const CategoryButton: React.FC<Props> = ({ title, filter, icon }) => {
  return (
    <div className="category-button">
      <div className="category-button-group">
        <div className="category-button-item">{icon}</div>
        <div className="category-button-item">
          <h4 className="category-button-title">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default CategoryButton;
