import "./comics.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ComicItem from "../../components/ComicItem/ComicItem";
import Searchbar from "../../components/Searchbar/Searchbar";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("chargement des données");
        const response = await axios.get(
          `http://localhost:3000/comics?page=${currentPage}&search=${search}`
        );
        console.log("response.data", response.data);
        setData(response.data);

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

  return isLoading ? (
    <p>En chargement</p>
  ) : (
    <div className="comics-section">
      <Searchbar
        search={search}
        setSearch={setSearch}
        setCurrentPage={setCurrentPage}
        placeholder="Recherche comics"
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
      <div className="comicsList">
        {data.results.map((comic) => {
          return (
            <ComicItem
              name={comic.title}
              img={
                comic.thumbnail.path +
                "/" +
                "portrait_uncanny" +
                "." +
                comic.thumbnail.extension
              }
              description={comic.description}
              id={comic._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
