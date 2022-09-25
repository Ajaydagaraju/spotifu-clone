import React, { useState, useRef, useEffect } from "react";
import {
  FaBackward,
  FaHeart,
  FaRegHeart,
  FaStepBackward,
  FaPlay,
  FaPause,
  FaForward,
  FaStepForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import "../Stlyles/MusicStyle.css";

function MusicPlyer({ song, imgSrc, auto }) {
//   console.log(song, imgSrc);
  const [islove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setduration] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);
  const audioPlayer = useRef(); // for our autio tag
  const progressBar = useRef(); // for progrress bar
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setduration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    //10 , 09, 11, 13, 04, etc
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : ` ${seconds}`;
    return `${returnMin}: ${returnSec}`;
  };


  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };
  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--player-played",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setcurrentTime(progressBar.current.value);
  };

  const changeLoved = () => {
    setLoved(!islove);
  };

  return (
    <div className="MusicPlayer">
      <div className="songImag">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioPlayer}/>
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {islove ? (
                <i>
                    <FaHeart />
                </i>
              ) : (
                  <i>
                    <FaRegHeart />
                </i>
              )}
            </div>
            <div className="download">
              
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            defaultValue="0"
            ref={progressBar}
            onChange={changeProgress}
            autoPlay = {auto}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlyer };
