import React from 'react';

const walkScore = ({ activeListing }) => {
  let newScore = activeListing.walkScore;
  newScore = JSON.parse(newScore);
  console.log('newscore', newScore);
  return (
    <div>
      <div className="walkScore">
        <div>
          <p>
            <a target="_blank" href={newScore.result.ws_link}>Walking Score: {newScore.result.walkscore} </a>
          </p>
        </div>
      </div>
      <div className="transitScore">
      </div>
    </div>
  );
};

export default walkScore;

// <img src={newScore.result.logo_url}></img>
