import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Button from "../Button/Button";

const Navbar = () => (
  <nav className={styles.Navbar}>
    <h1>
      <Link href="/">
        <a>SerInfo</a>
      </Link>
    </h1>

    <form action="/">
      <input type="text" placeholder="Search a show" />
      <Button>Hello</Button>
    </form>
  </nav>
);

export default Navbar;
