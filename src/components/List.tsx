import { type CandidateProps } from "../pages/Search";
import { type CandidatePropsD } from "../pages/SearchDetaild";

type ListProps<T> = {
  candidate: T[];
};

function List<T extends CandidateProps | CandidatePropsD>({ candidate }: ListProps<T>) {
  
  return (
    <div className="list-container">
      {candidate.map((can, index) => {
        if("firstName" in can){
          return (
            <div key={index}>
              <p>名前：{can.firstName}</p>
              <p>メール：{can.email}</p>
              <p>身長：{can.height}</p>
            </div>
          );
        }else if("picture" in can){
          return (
            <div key={index}>
              <img src={can.picture.large}/>
              <p>名前：{can.name.first}</p>
              <p>年齢：{can.dob.age}</p>
              <p>電話：{can.phone}</p>
            </div>
          )
        }
        
      }
      )}
    </div>
  )
}

export default List;