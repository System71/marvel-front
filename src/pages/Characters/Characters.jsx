import "./characters.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterItem from "../../components/CharacterItem/CharacterItem";
import Searchbar from "../../components/Searchbar/Searchbar";

const Characters = ({ token, favoriteCharacters, setFavoriteCharacters }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--nh2bbcwygd2q.code.run/characters?page=${currentPage}&search=${search}`
        );
        setData(response.data);
        // setCount(response.data.count);

        const count = response.data.count;

        //Creation of pagination array
        //Voir pour externaliser!
        const pageValues = [];

        for (let i = 1; i <= Math.ceil(count / 100); i++) {
          pageValues.push(i);
        }
        setPagination(pageValues);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [currentPage, search]);

  return isLoading ? (
    <p>En chargement</p>
  ) : (
    <div className="characters-section crawler">
      <h1>CHARACTERS</h1>
      <div>
        <Searchbar
          search={search}
          setSearch={setSearch}
          setCurrentPage={setCurrentPage}
          placeholder="Recherche personnage"
        />
        <select
          name="page"
          id="page"
          value={currentPage}
          onChange={(event) => {
            setCurrentPage(event.target.value);
          }}
        >
          {pagination.map((page, index) => {
            return (
              <option value={index + 1} key={"page" + (index + 1)}>
                {page}
              </option>
            );
          })}
        </select>
      </div>
      <div className="charactersList">
        {data.results.map((character) => {
          return (
            <CharacterItem
              name={character.name}
              img={
                character.thumbnail.path +
                "/" +
                "portrait_uncanny" +
                "." +
                character.thumbnail.extension
              }
              description={character.description}
              id={character._id}
              key={character._id}
              token={token}
              favoriteCharacters={favoriteCharacters}
              setFavoriteCharacters={setFavoriteCharacters}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
