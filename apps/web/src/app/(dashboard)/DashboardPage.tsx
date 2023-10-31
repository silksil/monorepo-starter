import { Metadata } from "next";
import { DashboardLayout } from "../_layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for starter package.",
};

export default function Dashboard() {
  return <DashboardLayout>hi</DashboardLayout>;
}
