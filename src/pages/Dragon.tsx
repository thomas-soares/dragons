import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

interface Dragon {
    id: string;
    createdAt: string;
    name: string;
    type: string;
    history: string;
    histories: object;
}

interface DragonParams {
  id: string;
}

export default function Dragon() {
  const params = useParams<DragonParams>();
  const [dragon, setDragon] = useState<Dragon>();

  useEffect(() => {
      api.get(`dragon/${params.id}`).then(response => {
          setDragon(response.data);
      });
  }, [params.id]);

  if (!dragon) {
    return <p>Carregando...</p>;
  }
  
  return (
    <div id="page-dragon">

      <main>
        <div className="dragon-details">
          
          <div className="dragon-details-content">
            <h1>{dragon.id}</h1>
            <p>{dragon.createdAt}</p>
            <h1>{dragon.name}</h1>
            <p>{dragon.type}</p>
            <p>{dragon.history}</p>
            <p>{dragon.histories}</p>

          </div>
        </div>
      </main>
    </div>
  );
}