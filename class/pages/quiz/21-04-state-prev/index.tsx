import { useState } from "react";

export default function StatePrevPage() {
  const [state, setState] = useState(0);

  const onClickUpNumber = () => {
    setState((qwer) => qwer + 1);
  };

  return (
    <div>
      <>{state}</>
      <button onClick={onClickUpNumber}>button</button>
    </div>
  );
}
