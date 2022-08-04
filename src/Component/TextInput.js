import classes from "../styls/TextInput.module.css";
export default function TextInput({ icon, ...rest }) {
  return (
    <div>
      <div className={classes.textInput}>
        <input type="text" placeholder="type your name" />
        <span className="person"> Person </span>
      </div>
    </div>
  );
}
