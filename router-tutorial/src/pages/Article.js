import { useParams } from "react-router-dom";

const Article = () => {
  const params = useParams();
  const { id } = params;
  return <p>이건 아티클 {id}번 게시글 입니다.</p>;
};

export default Article;
