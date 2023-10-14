import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ singleExercis }) => {
  console.log(singleExercis)
  return (
    <Link to={`/exercise/${singleExercis.id}`}>
      <img src={singleExercis.gifUrl} alt={singleExercis.name} loading='lazy' />
      <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {singleExercis.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {singleExercis.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {singleExercis.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard