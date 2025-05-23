import { IIcon } from "./type";

export const Responsive: React.FunctionComponent<IIcon> = ({
  color = "currentColor",
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${size}`}
    height={`${size}`}
    viewBox="0 0 24 24"
    style={{
      minWidth: "20px",
      minHeight: "20px",
    }}
  >
    <path
      fill={`${color}`}
      d="M3 19v-9q0-.825.588-1.412T5 8h3V5q0-.825.588-1.412T10 3h9q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19m13 0h3V5h-9v3h4q.825 0 1.413.588T16 10zm-6 0h4v-9h-4zm-5 0h3v-9H5z"
    />
  </svg>
);
