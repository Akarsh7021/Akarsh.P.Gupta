import { Outlet } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Root() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
