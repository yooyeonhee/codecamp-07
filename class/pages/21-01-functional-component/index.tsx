import ChildPage from "../21-02-child";

export default function ParentPage() {
  const qqq = {
    count: 200,
  };
  //   return <ChildPage count = {123}/>;
  return <>{ChildPage({ count: qqq })}</>;
}
