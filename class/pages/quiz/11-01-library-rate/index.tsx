import React, { useState } from "react";
import { Rate } from "antd";
import { Alert } from "antd";
const desc = ["1점", "2점", "3점", "4점", "5점"];

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  return (
    <span>
      <Rate onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      <Alert message={value + "점입니다."} type="success" />
    </span>
  );
};

export default App;
