import "./favorites.css";

const Favorites = ({ favoriteCharacters, favoriteComics, token }) => {
  return (
    <div className="favorites-section crawler">
      <h1>MY FAVORITES</h1>
      <h2>CHARACTERS</h2>
      <div className="favorite-characters">
        {favoriteCharacters.map((character) => {
          return (
            <div className="favorite-character-item" key={character._id}>
              <h2>{character.name}</h2>
              <img src={character.img} alt="" />
            </div>
          );
        })}
      </div>
      <h2>COMICS</h2>
      <div className="favorite-comics">
        {favoriteComics.map((comic) => {
          return (
            <div className="favorite-comic-item" key={comic._id}>
              <h2>{comic.name}</h2>
              <img src={comic.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
