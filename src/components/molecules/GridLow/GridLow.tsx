interface GridLowProps {
  grid: number;
  children: React.ReactNode;
}

const GridLow = ({ grid: count, children }: GridLowProps) => {
  const gridCols = `grid-cols-${count}`;
  return <div className={`grid ${gridCols}`}>{children}</div>;
};

export default GridLow;
