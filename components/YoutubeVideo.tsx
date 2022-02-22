import React from 'react'
import YouTube from 'react-youtube'
import { useRef, useEffect, useState } from 'react'

export interface YoutubeVideoInterface {
  id: string
  height: string
  width: string
}

const YoutubeVideo: React.FC<YoutubeVideoInterface> = (
  props: YoutubeVideoInterface
) => {
  const checkElapsedTimeInterval = (e: any) => {
    const checkElapsedTime = () => {
      const duration = e.target.getDuration()
      const currentTime = e.target.getCurrentTime()
      console.log(currentTime)
      console.log(duration)
    }
    let interval = setInterval(checkElapsedTime, 100) // 100 ms refresh. increase it if you don't require millisecond precision
  }

  return (
    <div className="m-h-fit m-w-fit relative flex justify-center overflow-hidden pb-5">
      <YouTube videoId={props.id} onPlay={checkElapsedTimeInterval} />
    </div>
  )
}

export default YoutubeVideo
