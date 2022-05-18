import styled from '@emotion/styled'

//input 동일한 스타일 적용
const MyInput = styled.input`
    margin-bottom: 10px;
    height: 52px;
    border: 1px solid #BDBDBD;
    padding: 5px 0px 0px 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    &::placeholder{
        color: #BDBDBD;  
    }
`
//가로 정렬
const MyRow = styled.div`
    display: flex;
    flex-direction: row;
`;
//세로 정렬
const MyCul = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Body = styled.div`
    width: 1200px;
    padding: 60px 100px 100px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    margin: 50px auto;
`;
export const Title = styled.h1`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
`;
export const IdDiv = styled(MyCul)`
    width: 490px;
`;
export const ParentIdDiv = styled(MyRow)`
    width: 100%;
    justify-content: space-between;
`;
export const ParentDiv = styled(MyRow)`
    margin-bottom: 15px;
`;
export const ChildDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const SubTitle= styled.h3`
    /* font-family: 'Noto Sans CJK KR'; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color : ${(props) => props.aaa}
`;
export const IdInput = styled(MyInput)`
    width: 100%;
`;
export const TitleInput = styled(MyInput)`
    width: 100%;
`;
export const BoardInput = styled.textarea`
    height: 500px;
    margin-bottom: 10px;
    border: 1px solid #BDBDBD;
    padding: 10px 0px 0px 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    resize: none;
    &::placeholder{
        color: #BDBDBD;  
    }
`;
export const PostNum = styled.span`
    height: 52px;
    width: 77px;
    border: 1px solid #BDBDBD;
    margin-right: 16px;
    text-align: center;
    padding-top: 15px;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #BDBDBD;
`;
export const SearchPost = styled.button`
    padding: 14px 16px;
    background-color: black;
    width: 124px;
    height: 52px;
    color: white;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;
export const PostInput = styled(MyInput)`
    height: 50px;
    margin-bottom: 20px;
`;
export const Plus = styled(MyCul)`
    align-items: center;
    justify-content: center;
    width: 78px;
    height: 78px;
    background-color: #DBDBDB;
    margin-right: 24px;
`;
export const YoutubeInput = styled(MyInput)`
`;
export const UpLoad = styled(MyRow)``;
export const PlusIcon = styled.span`
    font-size: 25px;
    font-weight: 100;
`;
export const PlusUpload = styled.span`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #4F4F4F;
`;
export const ChooseDiv = styled(MyRow)``;
export const ChooseMain = styled.input`
    margin-right: 5px;
`;
export const ChooseLabel = styled.label`
    margin-left: 8px;
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
`

export const Enroll = styled.button`
    width: 180px;
    height: 52px;
    border: none;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    background-color: ${(props)=>props.isActive ? "yellow" : "default"};
`;
export const ErrorBox = styled.div`
    color: red;
    margin-left: 10px;
`;
