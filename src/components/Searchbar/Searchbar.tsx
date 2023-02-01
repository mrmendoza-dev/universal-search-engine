import "./index.css"
import { useState, useEffect } from "react";

const Searchbar = () => {
  const searchEngines = [
    {
      name: "Google",
      homepage: "https://www.google.com/",
      searchURL: "https://www.google.com/search?q=",
    },
    {
      name: "Bing",
      homepage: "https://www.bing.com/",
      searchURL: "https://www.bing.com/search?q=",
    },
    {
      name: "Yahoo",
      homepage: "https://www.yahoo.com/",
      searchURL: "https://www.search.yahoo.com/search?p=",
    },
    {
      name: "DuckDuckGo",
      homepage: "https://duckduckgo.com/",
      searchURL: "https://duckduckgo.com/?q=",
    },
    {
      name: "Baidu",
      homepage: "https://www.baidu.com/",
      searchURL: "https://www.baidu.com/s?wd=",
    },
    {
      name: "Yandex",
      homepage: "https://www.yandex.com/",
      searchURL: "https://www.yandex.com/search/?text=",
    },
    {
      name: "WolframAlpha",
      homepage: "https://www.wolframalpha.com/",
      searchURL: "https://www.wolframalpha.com/input/?i=",
    },
    {
      name: "Ask",
      homepage: "https://www.ask.com/",
      searchURL: "https://www.ask.com/web?q=",
    },
    {
      name: "Aol",
      homepage: "https://www.aol.com/",
      searchURL: "https://search.aol.com/aol/search?q=",
    },
  ];

  const defaultOption = searchEngines[0];
  const storedOption = localStorage.getItem("selectedOption");
  const initialOption = storedOption ? JSON.parse(storedOption) : defaultOption;
  const [selectedOption, setSelectedOption] = useState(initialOption);

  useEffect(() => {
    const storedOption = localStorage.getItem("selectedOption");
    if (storedOption) {
      setSelectedOption(JSON.parse(storedOption));
    } else {
      setSelectedOption(searchEngines[0]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
  }, [selectedOption]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: any) => {
    if (e.target.name === "option") {
      console.log(e.target.value);

      const selectedName = e.target.value;
      const selectedEngine: any = searchEngines.find(
        (engine) => engine.name === selectedName
      );
      setSelectedOption(selectedEngine);
    } else {
      setInputValue(e.target.value);
    }
  };

  const handleSubmit = (e: any) => {
        e.preventDefault();

    console.log(selectedOption);
    if (inputValue) {
      let engine: any = searchEngines.find(
        (item: any) => item.name === selectedOption.name
      );
      let searchUrl = `${engine.searchURL}${inputValue}`;
      console.log(searchUrl);
      window.location.href = searchUrl;
    }
  };

  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit}>
        <select
          name="option"
          value={selectedOption.name}
          onChange={handleChange}
        >
          {searchEngines.map((engine) => (
            <option key={engine.name} value={engine.name}>
              {engine.name}
            </option>
          ))}
        </select>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;