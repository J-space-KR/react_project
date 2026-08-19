import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage from "./pages/HomePage/HomePage";
import YachtPage from "./pages/YachtPage/YachtPage";
import SuitesPage from "./pages/SuitesPage/SuitesPage";
import VoyagesPage from "./pages/VoyagesPage/VoyagesPage";
import InquirePage from "./pages/InquirePage/InquirePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yacht" element={<YachtPage />} />
          <Route path="/suites" element={<SuitesPage />} />
          <Route path="/voyages" element={<VoyagesPage />} />
          <Route path="/inquire" element={<InquirePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
