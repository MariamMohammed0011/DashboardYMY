const CustomTick = (props) => {
  const { x, y, payload, activeLabel } = props;
  const value = payload.value;
  const isActive = value === activeLabel;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        fill={isActive ? "#9EFFC1" : "#ccc"}
        fontWeight={isActive ? "bold" : "normal"}
        fontSize={isActive ? "14px" : "12px"}
        textAnchor="middle"
      >
        {value}
      </text>
    </g>
  );
};

export default CustomTick;
