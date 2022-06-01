import axios from "axios";
import { useEffect, useState } from "react";

export default function openApiDogPage() {
  const [dogUrl, setDogUrl] = useState("");
  useEffect(() => {
    const WhatDog = async () => {
      const dog = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(dog.data.message);
    };
    WhatDog();
  }, []);
  return (
    <div>
      <img src={dogUrl} />
    </div>
  );
}
