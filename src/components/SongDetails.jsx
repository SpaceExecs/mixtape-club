import React, { useState } from 'react';

const SongDetails = ({ lyrics, art, geniusLink }) => {
  const [visible, setVisible] = useState(false);



  return (
  <div style={{textAlign: 'center'}}
  className='songDetails'
  >
    { visible ?
    <div>
    <img src={art} style={{height: 275, width: 'auto'}} alt='album art' />
    <div>{lyrics}</div>
    <a href={geniusLink}>
      <button type="button" className="btn btn-light btn-sm">Genius</button>
    </a>
    <br />
    <br />
    <button type='button'
      onClick={() => { setVisible(false); }}
      className="btn btn-info mx-auto">
      Hide Details
    </button>
    </div> :
      <button type='button'
        onClick={() => { setVisible(true); }}
        className="btn btn-info mx-auto">
        Show Details
      </button>
}
  </div>);
};

export default SongDetails;
