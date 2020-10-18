import React, { useEffect, useState } from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZF1DX0XUfTFmNBRM`
      })
      .then(res => {
        spotify.getMyCurrentPlayingTrack().then(r => {
          dispatch({
            type: "SET_ITEM", 
            item: r.item
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`]
      })
      .then(res => {
        spotify.getMyCurrentPlayingTrack().then(r => {
          dispatch({
            type: "SET_ITEM",
            item: r.item
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infotext">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon fontSize="large" onClick={playPlaylist} className="body__shuffle" />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>

        {discover_weekly?.tracks.items.map(item => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
