import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

import ListPage from "./pages/ListPage";
import CreateReviewPage from "./pages/CreateReviewPage";
import DetailPage from "./pages/DetailPage";
import ReviewPage from "./pages/ReviewPage";
import KakoLoginPage from "./pages/KakaoLoginPage";
// route
import PrivateRoute from "./components/Route/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/KakaoLogin" element={<KakoLoginPage />} />

      {/* 로그인 해야 접근 가능한 페이지 */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/create-review/:storeId" element={<CreateReviewPage />} />
        <Route path="/detail/:storeId" element={<DetailPage />} />
        <Route path="/review/:storeId" element={<ReviewPage />} />
      </Route>
    </Routes>
  );
}

export default App;
