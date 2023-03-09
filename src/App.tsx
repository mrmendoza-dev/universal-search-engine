import { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  const [imageData, setImageData] = useState<any>(null);
  const [bgImageUrl, setBgImageUrl] = useState(updateBackground);

  function updateBackground() {
    let url = `https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${"night"}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBgImageUrl(data.urls.regular);
        setImageData(data);
      })
      .catch((err) => {
        console.error(err);
        let url: any =
          "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
        setBgImageUrl(url);
      });
  }

  return (
    <div className="App">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      ></div>
      {imageData && (
        <div className="bg-author">
          <a
            target="_blank"
            href={"https://unsplash.com/photos/%s".replace("%s", imageData.id)}
          >
            Photo by: {imageData.user.name}
          </a>
        </div>
      )}

      <h1 className="title">Universal Search Engine</h1>
      <Searchbar />
    </div>
  );
}

export default App;
