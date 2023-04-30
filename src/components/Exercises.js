import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard'
import {fetchData, exerciseOptions } from '../utils/fetchData'

const Exercises = ({setExercises, exercises, bodyPart}) => {
  // console.log("🚀 ~ file: Exercises.js:8 ~ Exercises ~ exercises:", exercises.length)

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if (bodyPart === 'all' ) {
        exercisesData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        // console.log("🚀 ~ file: Exercises.js:29 ~ fetchExercisesData ~ exercisesData:", exercisesData)
      } else {
        exercisesData =  await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData)
      // console.log("🚀 ~ file: Exercises.js:34 ~ fetchExercisesData ~ setExercises:", setExercises)
    }

    fetchExercisesData()
  }, [bodyPart])

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
       {currentExercises.map((singleExercis, index) => (
        <ExerciseCard key={index} singleExercis={singleExercis} />
       ))}
      </Stack>
      <Stack>
        {exercises.length > 9 && (
           <Pagination color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size='large'/>
          // console.log('asf')
        )}
      </Stack>
    </Box>
  )
}

export default Exercises