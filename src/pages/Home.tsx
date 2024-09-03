import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to BESTMATCH!</h1>
      <p>ベストマッチをみつけよう</p>
      <Link to="/register">
        <Button
          text="スタート"
          buttonColor="#2dc84d"
          textColor="yellow"
          padding={[7,80,7,80]}
        />
      </Link>
    </div>
  );
};

export default Home;