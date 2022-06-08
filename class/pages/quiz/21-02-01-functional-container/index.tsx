import Presenter from "../21-02-02-functional-presenter";

export default function Container() {
  return <>{Presenter({ child: "철수", age: 13 })}</>;
}
