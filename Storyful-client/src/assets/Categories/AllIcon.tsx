interface Props {
  colour: string;
}

const AllIcon: React.FC<Props> = ({ colour }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15px"
    height="15px"
    viewBox="0 0 16 16"
  >
    <g fill={colour} strokeWidth=".82858px">
      <path
        d="M8.04 10.471 2.938 7.953l2.085-1.03-.932-.46-3.017 1.49L8.04 11.39l6.965-3.437-3.017-1.49-.93.46 2.084 1.03z"
        transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)"
      />

      <path
        d="M8.04 13.448 2.938 10.93 5.023 9.9l-.932-.46-3.017 1.49 6.966 3.437 6.965-3.437-3.017-1.49-.93.46 2.084 1.03z"
        transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)"
      />

      <path
        d="M8.04 1.537 1.074 4.974 8.04 8.41l6.965-3.437zm0 .919 5.102 2.518L8.04 7.492 2.938 4.974z"
        transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)"
      />
    </g>
  </svg>
);

export default AllIcon;
