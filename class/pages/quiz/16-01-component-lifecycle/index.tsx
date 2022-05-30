import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ComponentLifecyclePage() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  const onClickEditButton = () => {
    setIsChange(true);
  };
  const onClickMoveButton = () => {
    router.push("/");
  };

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);
  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);
  return (
    <>
      <button onClick={onClickEditButton}>변경</button>
      <button onClick={onClickMoveButton}>이동</button>
    </>
  );
}
