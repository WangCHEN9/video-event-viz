import type { NextPage } from 'next'
import Head from 'next/head'
import { YoutubeVideo } from '../components'
import { useRef, useEffect, useState } from 'react'

const Home: NextPage = () => {
  const video = {
    id: 'P3qmqUZJ7l0',
    height: '480',
    width: '720',
  }

  return (
    <div>
      <YoutubeVideo
        id={video.id}
        height={video.height}
        width={video.width}
        // ref={playerRef}
      />
    </div>
  )
}

export default Home
