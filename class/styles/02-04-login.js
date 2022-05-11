import styled from '@emotion/styled'

export const Main = styled.div`
    width: 640px;
    height: 1138px;
    background-color: black;
`;
export const Wrapper = styled.div`
    background-image: url('/02-road/bg.png');
    background-size: cover;
    width: 640px;
    height: 1138px;
    padding: 85px 50px 85px 50px;
`;
export const Rec = styled.img`
    position: absolute;
    z-index: 0;
    opacity: 0.8;
`
export const Logo = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.div`
    font-size: 60px;
    color: white;
`;
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const DeleteInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const Input = styled.input`
    width: 80%;
    height: 50px;
    font-size: 20px;
    color: white;
    letter-spacing: 1.5px;
    font-weight: 100px;
    border: none;
    background: transparent;
    &:focus{
        outline: none;
    }
`;
export const Error = styled.div`
    padding-top: 10px;
    height: 30px;
    color : #ff1b6d;
    font-size: 18px;
    border-top: 1px solid rgba(255, 255, 255, .3);;
`;
export const LoginButton = styled.button`
    width: 100%;
    height: 78px;
    border-radius: 38px;
    background-color:rgba(255,27,109,0.5);
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.81;
    letter-spacing: normal;
    text-align: center;
    color: white;
    border: none;
    margin: 30px 0px 50px 0px;
`;

export const FindWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0px 10px;
`;
export const Find = styled.button`
    width: 105px;
    height: 20px;
    font-size: 20px;
    color: white;
    background-color: transparent;
    border: none;
    opacity: 0.7;
`;
export const PwFind = styled.button`
    width: 180px;
    height: 20px;
    border: none;
    border-left: 1px solid rgba(255, 255, 255, .3);
    border-right: 1px solid rgba(255, 255, 255, .3);
    font-size: 20px;
    color: white;
    background-color: transparent;
    padding: 0px 30px;
    opacity: 0.7;
`
export const KakaoLogin = styled.button`
    width: 100%;
    height: 78px;
    background-color: transparent;
    border-radius: 38px;
    border: 2px solid #fae100;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const ButtonTitle = styled.span`
    font-size: 26px;
    line-height: 21px;
    color: #fae100;
    margin-left: 20px;
`;