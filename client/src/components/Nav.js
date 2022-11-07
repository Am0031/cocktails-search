import Auth from "../utils/auth";
import { Link } from "react-router-dom";

//possible to amend with modal for login/signup - is it worth it?

const Nav = () => {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/saved">My saved cocktails</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  };
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="cocktail1">
            🍹
          </span>
          Cocktails Party
          <span role="img" aria-label="cocktail2">
            🍸
          </span>
        </Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
};

export default Nav;
