import { Navbar } from "../_components/navigation/Navbar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
