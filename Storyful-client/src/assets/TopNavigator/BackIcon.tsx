interface Props {
  colour: string;
  width: string;
  height: string;
}

const BackIcon: React.FC<Props> = ({ colour, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.57 5.92999L3.5 12L9.57 18.07M20.5 12H3.67"
      stroke={colour}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BackIcon;
