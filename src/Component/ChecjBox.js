export default function ChecjBox(text, ...rest) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
}
