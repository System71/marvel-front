import "./characterItem.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";

const CharacterItem = ({
  name,
  img,
  description,
  id,
  token,
  favoriteCharacters,
  setFavoriteCharacters,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    favoriteCharacters.map((character) => {
      if (character.id === id) {
        setIsFavorite(true);
      }
    });
  }, [favoriteCharacters]);

  const toggleFavoriteCharacter = async (id, token) => {
    const response = await axios.post(
      `https://site--marvel-backend--nh2bbcwygd2q.code.run/user/favorites/characters/add`,
      { id: id, name: name, token: token, description: description, img: img }
    );
    setFavoriteCharacters(response.data.favoriteCharacters);
    setIsFavorite(!isFavorite);
  };

  return (
    <div key={id}>
      <Link to={`/characters/${id}`}>
        <div className="character-item">
          <h2>{name}</h2>
          <img src={img} alt="" />
          <p>{description}</p>
        </div>
      </Link>
      <label htmlFor={`favorite${id}`}>
        {isFavorite ? (
          <FontAwesomeIcon icon="heart" id="red-heart" />
        ) : (
          <FontAwesomeIcon icon="heart" id="white-heart" />
        )}
      </label>
      <input
        type="checkbox"
        name={`favorite${id}`}
        id={`favorite${id}`}
        className="favorite-character"
        onChange={() => {
          toggleFavoriteCharacter(id, token);
        }}
      />
    </div>
  );
};

export default CharacterItem;
