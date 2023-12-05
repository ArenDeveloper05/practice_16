import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import FeedbackPage from "./pages/FeedbackPage";
import HomePage from "./pages/HomePage";
import PartnersPage from "./pages/PartnersPage";
import PublicationsPage from "./pages/PublicationsPage";
import ServicesPage from "./pages/ServicesPage";
import NewsPage from "./pages/NewsPage";

import ROUTER from "./router/router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={ROUTER.ABOUT_PAGE_ROUTE} element={<AboutPage />} />
        <Route
          path={ROUTER.PUBLICATIONS_PAGE_ROUTE}
          element={<PublicationsPage />}
        />
        <Route path={ROUTER.SERVICES_PAGE_ROUTE} element={<ServicesPage />} />
        <Route path={ROUTER.PARTNERS_PAGE_ROUTE} element={<PartnersPage />} />
        <Route path={ROUTER.FEEDBACK_PAGE_ROUTE} element={<FeedbackPage />} />
        <Route path={ROUTER.NEWS_PAGE_ROUTE} element={<NewsPage />} />
        <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
