import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import type { DatePickerProps } from "antd";
export default function CalendarPage() {
  const [printDate, setPrintDate] = useState("");
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setPrintDate(dateString);
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <div>{printDate}</div>
    </Space>
  );
}
