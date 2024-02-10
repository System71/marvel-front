import "./comicItem.css";

const ComicItem = ({ name, img, description, id }) => {
  return (
    <div className="comic-item" key={id}>
      <h2>{name}</h2>
      <img src={img} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default ComicItem;
