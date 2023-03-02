import "./CategoryButton.css";

interface Props {
  title: string;
  filter?: any;
  icon?: any;
  onClick?: any;
  selected?: boolean;
}

const CategoryButton: React.FC<Props> = ({
  title,
  filter,
  icon,
  onClick,
  selected,
}) => (
  <div
    className={
      selected ? "category-button category-selected" : "category-button"
    }
    onClick={onClick}
  >
    <div className="category-button-group">
      <div className="category-button-item">{icon}</div>
      <div className="category-button-item">
        <h4 className="category-button-title">{title}</h4>
      </div>
    </div>
  </div>
);

export default CategoryButton;
