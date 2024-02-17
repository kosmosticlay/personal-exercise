import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개 페이지</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">김민준님의 소개 페이지</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">홍길동님의 소개 페이지</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필 페이지</Link>
        </li>
      </ul>
      <Link to="/mypage">마이페이지</Link>
    </div>
  );
};

export default Home;
