import React from "react";

export const Pagination = ({
  onNextPage,
  onPrevPage,
  next,
  prev,
  totalPages,
  page,
}) => {
  

  return (
    <div>
      <div className="pagination">
        {prev ? <button onClick={onPrevPage}>Prev</button> : null}
        {next ? <button onClick={onNextPage}>Next</button> : null}
      </div>
      <div>
        <p className="pages">
          {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};
