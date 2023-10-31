import { AppLayout } from "../_layouts/AppLayout";
import { Hero } from "./components/Hero";

export function HomePage() {
  return (
    <AppLayout>
      <Hero />
    </AppLayout>
  );
}
