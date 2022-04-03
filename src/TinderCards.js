import { SwipeDown } from "@mui/icons-material";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Peter Jackson",
      url: "https://picsum.photos/id/1005/5760/3840",
    },
    {
      name: "Harry Kim",
      url: "https://picsum.photos/id/1012/3973/2639",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    //setLastDirection(direction);
  }

  const outOfFrame = (name) => {

  }
  return (
    <div className="tinderCard">
      <div className="tinderCard__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", " down"]}
            onSwipe={(dir) => SwipeDown(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}>
            <div style={{ backgroundImage: `url(${person.url})` }} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
