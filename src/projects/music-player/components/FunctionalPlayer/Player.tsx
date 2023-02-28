import {
  Container,
  MusicTitleContainer,
  PlayerOptionsContainer,
  RangeContainer,
  TimeContainer,
} from "./styles";

import dbSounds from "../../db/sounds.json";
import { useRef, useState } from "react";

interface DesignPlayer {
  isPlayerOnScreen:boolean;
}

export function Player({isPlayerOnScreen}:DesignPlayer) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [musicFilePosition, setMusicFilePosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  

  function handleSetMusicPosition(id: string) {
    const actions = {
      back: () => {
        if (musicFilePosition === 0) {
          setMusicFilePosition(dbSounds.length - 1);
        } else {
          setMusicFilePosition((state) => state - 1);
        }
        handlePlaymusic(musicFilePosition - 1);
      },
      forward: () => {
        if (musicFilePosition === dbSounds.length - 1) {
          setMusicFilePosition(0);
        } else {
          setMusicFilePosition((state) => state + 1);
        }
        handlePlaymusic(musicFilePosition + 1);
      },
    };

    if (id === "back") {
      actions.back();
    } else actions.forward();
  }

  function handleAudioLoad(e: number) {
    const number = e.toFixed(0);
    setDuration(Number(number));
  }

  function handlePlaymusic(position?: number, pause?: boolean) {
    if (position === dbSounds.length) {
      position = 0;
    }
    if (position === -1) {
      position = dbSounds.length - 1;
    }

    if (audioElement.current && pause) {
      if (isPlayingMusic) {
        audioElement.current.pause();
      } else {
        audioElement.current.src = dbSounds[musicFilePosition].soundTrack;
        audioElement.current.currentTime = current;
        audioElement.current.play();
      }
      setIsPlayingMusic((state) => !state);
    } else if (audioElement.current) {
      audioElement.current.src = dbSounds[Number(position)].soundTrack;
      audioElement.current.play();
      setIsPlayingMusic(true);
      setCurrent(0);
    }
  }

  function handleChangeCurrentTime(e: HTMLAudioElement) {
    const time = e.currentTime;

    const number = time.toFixed(0);
    setCurrent(Number(number));

    if (current === duration) {
      handleSetMusicPosition("forward");
    }
  }

  function onChange(e: number) {
    const audio = audioElement.current;
    if (audio) {
      audio.currentTime = (Number(audio?.duration) / 100) * e;
    }
  }

  return (
    <Container isOnScreen={isPlayingMusic} isPlayerOnScreen={isPlayerOnScreen}>
      <MusicTitleContainer>
        <img src={dbSounds[musicFilePosition].image} />
        <div>
          <h1>{dbSounds[musicFilePosition].title}</h1>
          <p>{dbSounds[musicFilePosition].subtitle}</p>
        </div>
      </MusicTitleContainer>
      <PlayerOptionsContainer>
        <img
          id="back"
          src="/assets/music-player/images/play-back.png"
          onClick={() => handleSetMusicPosition("back")}
        />
        <img
          src={
            isPlayingMusic
              ? "/assets/music-player/images/pause.svg"
              : "/assets/music-player/images/play.png"
          }
          onClick={() => handlePlaymusic(musicFilePosition, true)}
        />
        <img
          id="forward"
          src="/assets/music-player/images/play-forward.png"
          onClick={() => handleSetMusicPosition("forward")}
        />
      </PlayerOptionsContainer>

      <RangeContainer isOnScreen={isPlayingMusic}>
        <input
          type="range"
          disabled
          step="1"
          max={duration}
          ref={inputRef}
          onChange={(e) => onChange(Number(e.target.value))}
          value={current}
        />
      </RangeContainer>

      <TimeContainer isOnScreen={isPlayingMusic}>
        <p>
          0{Math.floor(duration / 60)}:{Math.floor(duration % 60)}
        </p>
        <p>
          0{Math.floor(current / 60)}:{Math.floor(current % 60)}
        </p>
      </TimeContainer>

      <audio
        ref={audioElement}
        onLoadedData={(e) => handleAudioLoad(e.currentTarget.duration)}
        onTimeUpdate={(e) => handleChangeCurrentTime(e.currentTarget)}
      >
        <source
          src={dbSounds[musicFilePosition].soundTrack}
          type="audio/mpeg"
        />
      </audio>
    </Container>
  );
}
