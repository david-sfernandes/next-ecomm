export default function Logo({ color = "white" }: HeaderColor) {
  return (
    <svg
      viewBox="0 0 144 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9"
    >
      <path
        d="M4.27891 54.8119L32.2096 26.8812C34.3575 24.7333 37.8399 24.7333 39.9878 26.8812L103.274 90.1673L71.4541 121.987L4.27891 54.8119Z"
        stroke={color}
        strokeWidth="10"
      />
      <line
        x1="70.6771"
        y1="122.892"
        x2="141.388"
        y2="52.1812"
        stroke={color}
        strokeWidth="10"
      />
      <path
        d="M67 20.2322L99.969 20.2324C103.682 20.2324 107.243 21.7074 109.868 24.3329L141.123 55.5877"
        stroke={color}
        strokeWidth="10"
      />
    </svg>
  );
}
