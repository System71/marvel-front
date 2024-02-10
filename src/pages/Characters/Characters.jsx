import "./characters.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterItem from "../../components/CharacterItem/CharacterItem";
import Searchbar from "../../components/Searchbar/Searchbar";

const Characters = () => {
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?page=${currentPage}&search=${search}`
        );
        console.log("response.data", response.data);
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
        console.log("pagination", pageValues);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [currentPage, search]);

  // console.log("pagination=", pagination);

  return isLoading ? (
    <p>En chargement</p>
  ) : (
    <div className="characters-section">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
