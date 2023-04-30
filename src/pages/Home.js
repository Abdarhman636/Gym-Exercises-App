import React, { useState } from 'react'
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'


const Home = () => {
  const [exercises, setExercises] = useState([])
  console.log("🚀 ~ file: Home.js:11 ~ Home ~ exercises:", exercises)
  const [bodyPart, setBodyPart] = useState('all')
  // console.log("🚀 ~ file: Home.js:12 ~ Home ~ setBodyPart:", setBodyPart)

  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home