import { Navbar } from "./components/Navbar";
import { CharacterGrid } from "./components/CharacterGrid";
import { useEffect, useState } from "react";
import { getCharacters, getCharacter } from "./api/apiCall";

function App() {
  const [characters, setCharacters] = useState();
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const onNextPage = async () => {
    const data = await getCharacters(next);
    setCharacters(data);
    setNext(data.info.next);
    setPrev(data.info.prev);
    setPage(page + 1);
  };

  const onPrevPage = async () => {
    const data = await getCharacters(prev);
    setCharacters(data);
    setNext(data.info.next);
    setPrev(data.info.prev);
    setPage(page - 1);
  };

  const fetchCharacters = async () => {
    try {
      const data = await getCharacters();
      setCharacters(data);
      setNext(data.info.next);
      setPrev(data.info.prev);
      setTotalPages(data.info.pages);
      setNotFound(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!search) {
      fetchCharacters();
    }
  }, []);

  const onSearch = async (character_name) => {
    if (!character_name) {
      return fetchCharacters();
    }
    setNotFound(false);
    setSearch(true);
    const data = await getCharacter(character_name);
    if (data.error === "There is nothing here") {
      setNotFound(true);
      return;
    } else {
      setCharacters(data);
      setNext(data.info.next);
      setPrev(data.info.prev);
      setPage(1);
      setTotalPages(data.info.pages);
    }
    setSearch(false);
  };

  return (
    <div className="container-app">
      <Navbar onSearch={onSearch} />
      { characters && <CharacterGrid
        characters={characters}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        next={next}
        prev={prev}
        totalPages={totalPages}
        page={page}
        notFound={notFound}
      />}
    </div>
  );
}

export default App;
