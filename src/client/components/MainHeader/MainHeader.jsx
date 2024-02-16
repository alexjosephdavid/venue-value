import classes from "./MainHeader.module.css";
import Navigation from './Navigation.jsx';
const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Venue Value</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;