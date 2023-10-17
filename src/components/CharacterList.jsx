import { useEffect, useState } from "react";
import { Character } from "./Character";

export const CharacterList = () => {
  const [Characters, setCharacters] = useState([]);
  const [Page, setPage] = useState(1);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    Peticion();
  }, [Page]);

  const sumar = () => {
    Page === 42 ? setPage(42) : setPage(Page + 1);
  };

  const restar = () => {
    Page === 1 ? setPage(1) : setPage(Page - 1);
  };

  const Peticion = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${Page}`
    );
    const data = await response.json();
    const { results } = data;
    setLoading(false);
    setCharacters(results);
  };

  const navPag = () => {
    return (
      <header className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary btn-sm" onClick={restar}>
          {`Pagina: ${Page}`}
        </button>
        <button className="btn btn-primary btn-sm" onClick={sumar}>
          {`Pagina: ${Page + 1}`}
        </button>
      </header>
    );
  };

  return (
    <div className="container">
      {/* <navPag/> */}
      {navPag()}

      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {/* Inicio de llaves de un objeto */}
          {Characters.map((prsj) => {
            //Mapear array
            return (
              //Retorno los objetos de ese arreglo
              <div className="col-md-4" key={prsj.id}>
                <Character prsj={prsj} />
              </div>
            );
          })}
        </div>
      )}
      {navPag()}
    </div>
  );
};
