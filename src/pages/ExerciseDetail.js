import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import SimilarExercises from '../components/SimilarExercises'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState([])
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercisesData, setTargetMuscleExercises] = useState([]);
  const [equimentExercisesData, setEquipmentExercises] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const fetchExrciseDetailData = async () => {
      const exerciseDetailUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDetailUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetail);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDetailUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDetailUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    }


    fetchExrciseDetailData()
  }, [id])

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercisesData={targetMuscleExercisesData} equimentExercisesData={equimentExercisesData}/>
    </Box>
  )
}

export default ExerciseDetail