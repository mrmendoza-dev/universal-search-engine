import "./index.css";
import { useState, useEffect } from "react";

const Searchbar = () => {
  // Replace %s with query
  const searchEngines = [
    {
      name: "Google",
      homepage: "https://www.google.com/",
      searchURL: "https://www.google.com/search?q=",
      imageSearchURL: "https://www.google.com/search?q=%s&tbm=isch",
    },
    {
      name: "Brave",
      homepage: "https://search.brave.com/",
      searchURL: "https://search.brave.com/search?q=",
      imageSearchURL: "https://search.brave.com/images?q=%s",
    },
    {
      name: "Bing",
      homepage: "https://www.bing.com/",
      searchURL: "https://www.bing.com/search?q=",
      imageSearchURL: "https://www.bing.com/images/search?q=%s",
    },
    {
      name: "Yahoo",
      homepage: "https://www.yahoo.com/",
      searchURL: "https://www.search.yahoo.com/search?p=",
      imageSearchURL: "https://images.search.yahoo.com/search/images?p=%s",
    },
    {
      name: "DuckDuckGo",
      homepage: "https://duckduckgo.com/",
      searchURL: "https://duckduckgo.com/?q=",
      imageSearchURL: "https://duckduckgo.com/?q=%s&iax=images&ia=images",
    },
    {
      name: "Baidu",
      homepage: "https://www.baidu.com/",
      searchURL: "https://www.baidu.com/s?wd=",
      imageSearchURL:
        "https://image.baidu.com/search/index?tn=baiduimage&word=%s",
    },
    {
      name: "Yandex",
      homepage: "https://www.yandex.com/",
      searchURL: "https://www.yandex.com/search/?text=",
      imageSearchURL: "https://yandex.com/images/search?text=%s",
    },
    {
      name: "WolframAlpha",
      homepage: "https://www.wolframalpha.com/",
      searchURL: "https://www.wolframalpha.com/input/?i=",
      imageSearchURL: "https://www.wolframalpha.com/input/?i=%s&t=image",
    },
    {
      name: "Ask",
      homepage: "https://www.ask.com/",
      searchURL: "https://www.ask.com/web?q=",
      imageSearchURL: "https://www.ask.com/images?q=%s",
    },
    {
      name: "Aol",
      homepage: "https://www.aol.com/",
      searchURL: "https://search.aol.com/aol/search?q=",
      imageSearchURL: "https://www.search.aol.com/aol/image?q=%s",
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
    if (inputValue) {
      let engine: any = searchEngines.find(
        (item: any) => item.name === selectedOption.name
      );
      let searchUrl = `${engine.searchURL}${inputValue}`;
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
