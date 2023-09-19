import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const LS_KEY = "videoplayer-current-time";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(LS_KEY, data.seconds);
};

player.on("timeupdate", throttle(onPlay, 1000));

player.setCurrentTime(Number(localStorage.getItem(LS_KEY)));
