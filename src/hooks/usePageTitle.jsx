import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // DOM요소를 저장하는 변수의 이름 앞에 관례상 $를 붙임
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};
export default usePageTitle;
