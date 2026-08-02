const icons = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  shield: "M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z",
  map: "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z",
  id: "M5 7h14v10H5V7Zm3 3h3m-3 3h8",
  radio: "M8 13a4 4 0 0 1 8 0m-11-3a8 8 0 0 1 14 0M12 13v8",
  supply: "M4 8l8-4 8 4-8 4-8-4Zm0 0v8l8 4 8-4V8",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z",
  people: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a5 5 0 0 1 10 0m-2 0a5 5 0 0 1 10 0",
};

export default function Icon({ name, size = 24, style }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d={icons[name] || icons.shield} />
    </svg>
  );
}
