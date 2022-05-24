import React, { useState } from "react";
import { Rate } from "antd";

export default function RatePage() {
  const desc = ["1점", "2점", "3점", "4점", "5점"];
  const [value, setValue] = useState(3);

  return (
    <span>
      <Rate onChange={setValue} value={value} />
      <br />

      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
}
