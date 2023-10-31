import Dashboard from "./(dashboard)/DashboardPage";
import { HomePage } from "./(home)/HomePage";

const Page = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <Dashboard /> : <HomePage />;
};

export default Page;
