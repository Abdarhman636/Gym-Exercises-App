import { fetchData, exerciseOptions } from '../utils/fetchData';
import React, { useState, createContext } from 'react'

export const ExerciseContext = createContext()

export const ExerciseContextProvider = ({ children }) => {
     const [exercises, setExercises] = useState([]);

     const fetchingExercisesData = async () => {
          const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
          const exercisesData = await data.json();

          setExercises(exercisesData);
     }


     return (
          <ExerciseContext.Provider value={{ fetchingExercisesData, exercises, setExercises }}>
               {children}
          </ExerciseContext.Provider>
     )
}
