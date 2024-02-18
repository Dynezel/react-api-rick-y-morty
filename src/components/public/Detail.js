import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    RickAndMortyService.getCharacterById(id).then((data) => setCharacter(data));
  }, []);

  return (
    <div className="card mb-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">
              {character.species}
            </strong>
            <h3 className="mb-0 text-dark"> {character.name} </h3>
            <p className="mb-3">
              {character.location &&
                character.location.name &&
                `Location: ${character.location.name}`}
            </p>
            <div className="mb-1 text-muted">
              {new Date(character.created).toLocaleDateString()}
            </div>
            <div className="mb-1 text-muted"> </div>
            <p className="card-text mb-auto">
              {" "}
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This is a wider card with
              supporting text below as a natural lead-in to additional content.
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This is a wider card with
              supporting text below as a natural lead-in to additional content.
            </p>

            <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
              Volver
            </Link>

            <img
              className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
              height="auto"
              src={character.image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
