import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

import ListPage from "./pages/ListPage";
import CreateReviewPage from "./pages/CreateReviewPage";
import DetailPage from "./pages/DetailPage";
import ReviewPage from "./pages/ReviewPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/create-review" element={<CreateReviewPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/review" element={<ReviewPage />} />
    </Routes>
  );
}

export default App;
