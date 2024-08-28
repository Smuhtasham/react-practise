import React, { useEffect, useRef, useState } from "react";
import turk1 from "./Assets/Music/jhol.mp3";
import turk2 from "./Assets/Music/prime.mp3";
import turk3 from "./Assets/Music/Jaan.mp3";

const App = () => {
  const [play, setPlay] = useState(false);
  const [currTime, setCurrTime] = useState("00:00");
  const [speed, setSpeed] = useState(1);
  const [audioName, setAudioName] = useState("Jhol - Slowed & Reverb MP3");
  const [currentAudio, setCurrentAudio] = useState(turk1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const Audio = useRef(null);

  const songs = [
    { name: "Jhol - Slowed & Reverb MP3", imgSrc: "lyc.svg", audioSrc: turk1 },
    {
      name: "MY Prime - Slowed & Reverb MP3",
      imgSrc: "lyc.svg",
      audioSrc: turk2,
    },
    { name: "JAAN - Slowed & Reverb MP3", imgSrc: "lyc.svg", audioSrc: turk3 },
  ];

  const musicToggle = () => {
    if (!play) {
      Audio.current.play();
      setPlay(true);
    } else {
      Audio.current.pause();
      setPlay(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const timeUpdate = () => {
    if (Audio.current) {
      const currentTime = Audio.current.currentTime;
      setCurrTime(formatTime(currentTime));
    }
  };

  const SkipBack = (time) => {
    if (Audio.current) {
      Audio.current.currentTime -= time;
      Audio.current.play();
    }
  };

  const SkipFwd = (time) => {
    if (Audio.current) {
      Audio.current.currentTime += time;
      Audio.current.play();
    }
  };

  const speedUp = () => {
    if (Audio.current) {
      setSpeed(1.5);
      Audio.current.playbackRate = 1.5;
    }
  };

  const speedNormal = () => {
    if (Audio.current) {
      setSpeed(1);
      Audio.current.playbackRate = 1;
    }
  };

  const changeSong = (song) => {
    setCurrentAudio(song.audioSrc);
    setAudioName(song.name);
    setPlay(true);
    setCurrTime("00:00");
    if (Audio.current) {
      Audio.current.load();
    }
  };

  const nextSong = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    changeSong(songs[nextIndex]);
  };
  const prevSong = () => {
    const prevIndex = (currentIndex - 1) % songs.length;
    setCurrentIndex(prevIndex);
    changeSong(songs[prevIndex]);
  };

  return (
    <>
      <div className="bg-slate-600 h-[100vh] flex w-[90%] m-auto p-10">
        <div className="w-[40%] h-[80vh] m-auto border-2 bg-slate-700 rounded-3xl">
          <div className="justify-center text-center items-center text-white underline text-2xl font-extrabold pt-4">
            MP3 Player
          </div>
          <div className="justify-center text-center text-white items-center text-xl font-bold pt-4 pb-6">
            {audioName}
          </div>
          <div className={`w-[40%] ${play && "animate-pulse"} relative m-auto pt-6`}>
            <img className="size-40" src="music.svg" alt="Music Icon" />
            <img className="absolute bottom-10 size-36" src="lyc.svg" alt="" />
          </div>
          <audio
            src={currentAudio}
            onTimeUpdate={timeUpdate}
            autoPlay={true}
            ref={Audio}
          />
          <div className="text-center pt-4 text-white text-lg">{currTime}</div>
          <div className="flex gap-6 justify-center pt-4">
            <img src="SkipBack.svg" alt="Skip Back" onClick={prevSong} />
            <img
              src="Rewind.svg"
              alt="Skip Back"
              onClick={() => SkipBack(10)}
            />
            <img
              src={play ? "Pause.svg" : "Play.svg"}
              alt="Play/Pause"
              onClick={musicToggle}
            />
            <img
              src="FastFwd.svg"
              alt="Skip Back"
              onClick={() => SkipFwd(10)}
            />
            <img src="SkipFwd.svg" alt="Next Song" onClick={nextSong} />
          </div>
          <div className="text-center pt-8 items-center">
            <button
              className="bg-slate-900 text-white px-2 py-1 text-sm rounded"
              onClick={speedNormal}
            >
              Normal
            </button>
            <button
              className="bg-slate-900 text-white ml-4 px-2 py-1 text-sm rounded"
              onClick={speedUp}
            >
              Speed Up 1.5x
            </button>
          </div>
        </div>
        <div className="w-[30%] m-auto pt-8">
          <h2 className="text-center text-2xl text-white underline font-bold mb-4">
            Song List
          </h2>
          {songs.map((song, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800/90 duration-300 rounded-xl py-2 px-2 text-white
                 bg-slate-400/50 mb-4 ${
                   song.audioSrc === currentAudio && "bg-slate-800/30 border-2 border-white"
                 }`}
              onClick={() => {
                setCurrentIndex(index);
                changeSong(song);
              }}
            >
              <img
                src={song.imgSrc}
                alt={song.name}
                className="w-10 h-10 mr-4"
              />
              <p>{song.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
