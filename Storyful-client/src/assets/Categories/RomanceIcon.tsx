interface Props {
  colour: string;
}

const RomanceIcon: React.FC<Props> = ({ colour }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={colour}
      width="15px"
      height="15px"
      viewBox="0 0 32 32"
      version="1.1"
    >
      <title>two-hearts</title>
      <path d="M30.399 19.478c-1.445 6.16-12.165 7.888-13.962 11 0-3.927-8.126-10.087-6.622-16.515 1.445-6.174 9.347-5.48 10.931 0.433 4.434-4.434 11.077-0.988 9.653 5.082v0zM1.282 6.371c0.738 3.145 6.211 4.027 7.128 5.616-0-2.005 4.149-5.15 3.381-8.432-0.738-3.152-4.772-2.797-5.581 0.221-2.264-2.264-5.655-0.504-4.928 2.595z" />
    </svg>
  );
};

export default RomanceIcon;
