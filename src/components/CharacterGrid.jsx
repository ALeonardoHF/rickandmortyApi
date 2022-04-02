import { Card } from "./Card";
import { Pagination } from "./Pagination";

export const CharacterGrid = ({
  characters,
  onNextPage,
  onPrevPage,
  next,
  prev,
  totalPages,
  page,
  notFound,
}) => {
  return (
    <div>
      {notFound ? (
        <div className="not-results">
          <p>No existen resultados...</p>
        </div>
      ) : (
        <>
          <Pagination
            onNextPage={onNextPage}
            onPrevPage={onPrevPage}
            next={next}
            prev={prev}
            totalPages={totalPages}
            page={page}
          />
          <div className="cards-container">
            {characters.results.map((character) => {
              return <Card key={character.id} character={character} />;
            })}
          </div>
          <Pagination
            onNextPage={onNextPage}
            onPrevPage={onPrevPage}
            next={next}
            prev={prev}
            totalPages={totalPages}
            page={page}
          />
        </>
      )}
    </div>
  );
};
