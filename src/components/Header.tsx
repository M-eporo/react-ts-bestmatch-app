import { Link } from "react-router-dom";
import Button from "./Button";

type HeaderProps = {
  user: UserProps;
  loggedIn: boolean;
  handleDelete: () => void;
};

type UserProps = {
  name: string;
  password: string;
};

const Header = ({ loggedIn, handleDelete, user }: HeaderProps) => {
  return (
    <header>
      <div>
        Header
        <ul>
          <li>
            <Link to="/">
              <Button
                text="ホーム"
                buttonColor="#f82553"
              />
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button
                text="登録"
                buttonColor="#2190f8"
              />
            </Link>
          </li>
          <li>
            {loggedIn &&
              <Link to="search">
                <Button
                  text="検索"
                  buttonColor="#49cc5c"
                />
              </Link>
            }
          </li>
        </ul>
      </div>
      <div>
        {user && loggedIn && 
          <p>こんにちは、{user.name}さん</p>}
        {loggedIn && 
          <div>
            <div className="pulse"></div>
            <Button
              text="ログアウト"
              buttonColor="#fb6640"
              handler={handleDelete}
            />
          </div>
        }
      </div>
    </header>
  );
};

export default Header;