import "./characterItem.css";
import { Link } from "react-router-dom";

const CharacterItem = ({ name, img, description, id }) => {
  const addToFavorites = () => {};

  return (
    <div key={id}>
      <Link to={`/characters/${id}`}>
        <div className="character-item">
          <h2>{name}</h2>
          <img src={img} alt="" />
          <p>{description}</p>
        </div>
      </Link>
      <input type="checkbox" name="favorites" id="favorites" />
    </div>
  );
};

export default CharacterItem;
