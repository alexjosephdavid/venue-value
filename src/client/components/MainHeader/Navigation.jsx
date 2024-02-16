import classes from "./Navigation.module.css";

export default function Navigation () {

  return (
    <nav className={classes.nav}>
      <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
          <li>
            <button >Logout</button>
          </li>
      </ul>
    </nav>
  );
};

