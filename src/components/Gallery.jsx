import React from "react";
import { CardList } from "@components/CardList";
import '@styles/Gallery.css';

const Gallery = () => {
  const API_KEY = "eNnvWXRXeAoi46DuYePffd8AWw13mGbJukMfZMDn";
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=6`;

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const api = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
  
      setItems(data);
      setIsLoading(false);
    };
    api()
  }, []);

  return (
    <section id="gallery" className="gallery"> 
      {isLoading ? <p>Cargando...</p> : null}
      <h2 className="gallery--title">Gallery</h2>
      <CardList items={items} setItems={setItems} />
    </section>
  );
};

export { Gallery };


