import classes from "../styls/Videos.module.css";
import Video from "./Video";
export default function videos() {
  return (
    <div className={classes.videos}>
      <Video />
      <Video />
    </div>
  );
}
