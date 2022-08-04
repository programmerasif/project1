import styl from "../styls/Layout.module.css";
import Nav from "./Nave";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styl.main}>
        <div className={styl.container}> {children} </div>
      </main>
    </>
  );
}
