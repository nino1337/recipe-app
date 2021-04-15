import { workoutDataApiInstance } from './config';

const getApiRoute = (url, mockUrl) =>
  process.env.REACT_APP_MOCKS ? mockUrl : url;

export default {
  getWorkouts: async () => {
    try {
      const apiRoute = getApiRoute('workouts', 'workout/workouts.json');
      const response = await workoutDataApiInstance.get(apiRoute);

      return { response };
    } catch (error) {
      return {
        errorMessage:
          'Laden der Workouts fehlgeschlagen. Versuche es bitte erneut!',
      };
    }
  },
  getRoutines: async () => {
    try {
      const apiRoute = getApiRoute('routines', 'workout/routines.json');
      const response = await workoutDataApiInstance.get(apiRoute);

      return { response };
    } catch (error) {
      return {
        errorMessage:
          'Laden der Routinen fehlgeschlagen. Versuche es bitte erneut!',
      };
    }
  },
  addRoutine: async (routine) => {
    try {
      const response = await workoutDataApiInstance.post('routines', routine);
      let errorMessage;

      if (response.status === 400) {
        errorMessage =
          'Routine konnte nicht angelegt werden. Versuche es bitte erneut!';
      }

      return { response, errorMessage };
    } catch (error) {
      return {
        errorMessage:
          'Routine konnte nicht angelegt werden. Versuche es bitte erneut!',
      };
    }
  },
  getExercises: async () => {
    try {
      const apiRoute = getApiRoute('exercises', 'workout/exercises.json');
      const response = await workoutDataApiInstance.get(apiRoute);

      return { response };
    } catch (error) {
      return {
        errorMessage:
          'Laden der Übungen fehlgeschlagen. Versuche es bitte erneut!',
      };
    }
  },
};
