import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const MyRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const MyColum = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  width: 1200px;
  height: 2000px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  margin: 80px auto;
  padding: 80px 100px;
`;
export const Title = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  margin-bottom: 80px;
`;
// export const Form = styled.form``;
export const InputTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  width: 100%;
  height: 55px;
  padding: 5px 10px;
  border: 1px solid #bdbdbd;
  margin-bottom: 40px;
`;

export const InputQuill = styled(ReactQuill)`
  width: 100%;
  height: 300px;
  margin-bottom: 60px;
`;

export const Map = styled.div`
  width: 384px;
  height: 252px;
`;

export const GPSItem = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid #bdbdbd;
  text-align: center;
  margin-bottom: 20px;
`;

export const InputImages = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
`;
export const ChooseDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ChooseMain = styled.input`
  margin-right: 5px;
`;
export const ChooseLabel = styled.span`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background: #bdbdbd;
  text-align: center;
`;
