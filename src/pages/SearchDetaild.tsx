import { useState } from "react";
import Button from "../components/Button";
import List from "../components/List";
import Loading from "../components/Loading";

export type CandidatePropsD = {
  picture: {
    large: string;
  }
  name: {
      first: string;
  };
  dob: {
    age: number;
  };
  phone: string;
};

const SearchDetailed = () => {
  const [candidateD, setCandidateD] = useState<CandidatePropsD[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const getCandidateData = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=12")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const shuffleData = data.results.sort(() => Math.random() - 0.5);
      setCandidateD(shuffleData);
      setLoading(false);
      setCount(prevCount => prevCount + 1);
    })
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="search">
      <h2>検索ページ（詳細）</h2>
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
        <List candidate={candidateD}/>
      }

    </div>
  );
};

export default SearchDetailed;