import { useContext, useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import SerieContext from "../../../store/serie-context";

const Navbar = () => {
  const router = useRouter();
  const { term, changeTerm } = useContext(SerieContext);

  function handleOnSubmit() {
    router.push(`/search/${term}`);
  }

  return (
    <nav className={styles.Navbar}>
      <h1>
        <Link href="/">
          <a>SerInfo</a>
        </Link>
      </h1>

      <form
        action={`/search/${term}`}
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Search a show"
          name="term"
          value={term}
          onChange={(e) => {
            changeTerm(e.target.value);
          }}
        />
        <Button>Hello</Button>
      </form>
    </nav>
  );
};

export default Navbar;
