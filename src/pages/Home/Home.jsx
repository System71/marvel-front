import "./home.css";
import { useEffect } from "react";
import axios from "axios";
import heroes2 from "../../assets/images/heroes2.png";

const Home = ({ token, setFavoriteCharacters, setFavoriteComics }) => {
  useEffect(() => {
    const fetchFavorites = async (token) => {
      try {
        const response1 = await axios.get(
          `https://site--marvel-backend--nh2bbcwygd2q.code.run/user/favorites/characters?token=${token}`
        );
        setFavoriteCharacters(response1.data.favoriteCharacters);

        const response2 = await axios.get(
          `https://site--marvel-backend--nh2bbcwygd2q.code.run/user/favorites/comics?token=${token}`
        );
        setFavoriteComics(response2.data.favoriteComics);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchFavorites(token);
  }, []);

  return (
    <main>
      <img src={heroes2} alt="HEROES" />
    </main>
  );
};

export default Home;
