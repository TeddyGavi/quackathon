import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import React, { useState, useEffect } from "react"


export default function App() {
  const [catArray, setCatArray] = useState([]);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/cats?max_weight=500?offset=10&limit=5", {
          method: "GET",
          headers: { "x-api-key": process.env.REACT_APP_CAT_API_KEY,  },
          contentType: "application/json",
          mode: "no-cors",
          
        });
        const catJSON = await response.json();
        setCatArray(catJSON);
      } catch (err) {
        console.error(err);
      }
    }
    getImages();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home catArray={catArray} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
