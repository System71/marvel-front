import "./charactercard.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CharacterCard = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("chargement des données");
        console.log("id=", id);
        const response = await axios.get(`http://localhost:3000/comics/${id}`);
        console.log("response.data", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement en cours</p>
  ) : (
    <div className="character-card">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Comics with {data.name}</p>
      <div className="character-comics">
        {data.comics.map((comic) => {
          return (
            <div className="character-comic" key={comic._id}>
              <h2>{comic.title}</h2>
              <img
                src={
                  comic.thumbnail.path +
                  "/" +
                  "portrait_uncanny" +
                  "." +
                  comic.thumbnail.extension
                }
                alt=""
              />
              <p>{comic.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterCard;
