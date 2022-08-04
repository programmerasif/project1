import classes from "../../styls/Signeup.module.css";
import Button from "../Button";
import ChecjBox from "../ChecjBox";
import Form from "../From";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
export default function Signeup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="coloum">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <ChecjBox text="I agree to the Terms &amp; Conditions" />

          <Button>Submit Now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
