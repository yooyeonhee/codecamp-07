import { RedoOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

// emotion과 함께 사용 가능.
const MyIcon = styled(RedoOutlined)`
  color: blue;
  font-size: 40px;
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
