import { useState } from "react";
import Button from "../components/Button";
import List from "../components/List";
import Loading from "../components/Loading";

export type CandidateProps = {
  firstName: string;
  email: string;
  height: number;
}

const Search = () => {
  const [candidate, setCandidate] = useState<CandidateProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const getCandidateData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/users?limit=30")
    .then(response => response.json())
    .then(data => {
      const shuffleData = data.users.sort(() => Math.random() - 0.5);
      setCandidate(shuffleData);
      setLoading(false);
      setCount(prevCount => prevCount + 1);
    })
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="search">
      <h2>検索ページ</h2>
      <Button
        text="候補者を表示"
        buttonColor="#2c7ce5"
        handler={getCandidateData}
        padding={[6,40,6,40]}
      />
      <Button
        text={count}
        buttonColor="#f8213a"
        padding={[10,12,10,12]}
        borderRadius={50}
        handler={handleReset}
      />
      {loading ?
        <Loading/>
      :  
        <List candidate={candidate}/>
      }

    </div>
  );
};

export default Search;