import "./characterItem.css";
import { Link } from "react-router-dom";

const CharacterItem = ({ name, img, description, id }) => {
  return (
    <Link to={`/characters/${id}`}>
      <div className="character-item" key={id}>
        <h2>{name}</h2>
        <img src={img} alt="" />
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CharacterItem;
