import "./comicItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";

const ComicItem = ({
  title,
  img,
  description,
  id,
  token,
  favoriteComics,
  setFavoriteComics,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    favoriteComics.map((comic) => {
      if (comic.id === id) {
        setIsFavorite(true);
      }
    });
  }, [favoriteComics]);

  const toggleFavoriteComic = async (id, token) => {
    const response = await axios.post(
      `https://site--marvel-backend--nh2bbcwygd2q.code.run/user/favorites/comics/add`,
      { id: id, title: title, token: token, description: description, img: img }
    );
    setFavoriteComics(response.data.favoriteComics);
    console.log(response.data.favoriteComics);
    setIsFavorite(!isFavorite);
  };

  return (
    <div key={id}>
      <div className="comic-item" key={id}>
        <h2>{title}</h2>
        <img src={img} alt="" />
        <p>{description}</p>
      </div>
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
        className="favorite-comic"
        onChange={() => {
          toggleFavoriteComic(id, token);
        }}
      />
    </div>
  );
};

export default ComicItem;
