import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";
import FAB from "../components/FAB";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);

  const curDiaryItem = useDiary(params.id);

  // useEffect는 component가 렌더링된 이후에만 실행되기 때문에 맨처음 component가 호출되었을 경우엔 실행되지 않는다. 그래서 Diary component가 렌더링되기전 최초 호출되었을때 undefined가 반환됨. 그리고나서 컴포넌트가 마운트된 후에 useDiary의 useEffect가 실제로 실행되어서 그때 데이터 반환을 확인할 수 있음. 이를 대비해가 위해 조치 사항
  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
      <FAB />
    </div>
  );
};

export default Diary;
