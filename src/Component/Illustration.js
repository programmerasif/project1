import signeupImg from "../assets/images/signup.svg";
import classes from "../styls/illustration.module.css";
export default function Illustration() {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={signeupImg} alt="Signup" />
      </div>
    </div>
  );
}
