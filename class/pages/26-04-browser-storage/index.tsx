export default function BrowserStoragePage(){

    const onClickSaveCookie = () => {
        document.cookie = "aaa=철수"

    const onClickSaveCookie = () => {
        document.cookie = "zzzㅁㅇ"

    }
    const onClickSaveLocal = () => {
        localStorage.setItem("bbb", "영희")

    }
    const onClickSaveSession = () => {
        sessionStorage.setItem( "ccc", "훈이")
    }
    
    const onClickLoadCookie = () => {
        const myCookie = document.cookie.split(";").filter((el)=> el.startWith("aaa="));
        console.myCookie)
        
    }
    const onClickLoadLocal = () => {
        const bbb = localStorage.getItem("bbb")
        console.log(bbb)
        

    }
    const onClickLoadSession = () => {
        const ccc = sessionStorage.getItem("ccc");
        console.log(ccc)
        
    }

    return (
        <div>
            <button onClick={onClickSaveCookie}>쿠키 저장</button>
            <button onClick={onClickSaveLocal}>로컬 저장</button>
            <button onClick={onClickSaveSession}>세선 저장</button>
            =====================================================
            <button onClick={onClickSaveCookie}>쿠키 저장</button>
            <button onClick={onClickSaveLocal}>로컬 저장</button>
            <button onClick={onClickSaveSession}>세선 저장</button>
        </div>
    )
}