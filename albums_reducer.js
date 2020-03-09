// albums_reducer.js
const initialState = [];
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [...state, action.payload];
    }

    case "REMOVE_ALBUM":
      return state.filter(album => {
        if (album.title !== action.payload.albumTitleToRemove) {
          return true;
        } else {
          return false;
        }
      });
    default: {
      return state;
    }
  }
}

// selector
function getGenreStats(state) {
  const genres = {};

  state.forEach(album => {
    if (genres[album.genre] === undefined) {
      genres[album.genre] = 0;
    }
    genres[album.genre] = genres[album.genre] + 1;
  });

  return genres;
}

module.exports = { reducer, getGenreStats };
