export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //   "BQAMmOcq8SAjKW-aDer2geLqdr-SZmP2xVefMkv_6QznGZmGgN7DcVKrwnnP-zNvm6TWMQs6_VyjEC7V6PO38nmi5WGTBkGNWBD1fQVZ8_K1c3pmpGVfI5r-DKD5fEf6PBRccH1v23SEsCoI00zvT9H-C4E02jc8b2ssPnVCJe0tGETG"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify
      };
    default:
      return state;
  }
};

export default reducer;
