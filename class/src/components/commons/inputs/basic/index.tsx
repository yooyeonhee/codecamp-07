export default function InputBasic(props) {
  return <input type={props.type} {...props.register} />;
}
