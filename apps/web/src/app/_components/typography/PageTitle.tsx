export const PageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className="text-3xl font-bold tracking-tight">{children}</h2>;
};
