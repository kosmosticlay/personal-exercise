import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    navigate("/articles");
  };

  const goMyPage = () => {
    navigate("/mypage");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>게시글 목록</button>
        <button onClick={goMyPage}>마이 페이지</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
