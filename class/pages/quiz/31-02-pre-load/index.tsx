import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const img = new Image();
    img.src = "/31-quiz/mini.webp";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);
  const onClickPreload = () => {
    // document.getElementById("aaa")? .appendChild(imgTag)
    if (imgTag) divRef.current?.appendChild(imgTag);
  };
  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 보여주기</button>
    </div>
  );
}
