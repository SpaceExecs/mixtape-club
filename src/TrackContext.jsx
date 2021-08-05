import React, { createContext } from 'react';

const TrackContext = createContext();

const TrackContextProvider = ({children}) => {
  const test = 'hello';

  const trackProps = {
    test
  };

  return (
    <TrackContext.Provider value={trackProps}>
      {children}
    </TrackContext.Provider>
  );
  };

  export { TrackContext, TrackContextProvider };
