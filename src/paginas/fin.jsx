import React, { useState } from 'react';

const exerciseDatabase = [
  {
    id: 1,
    name: 'Press de Banca',
    muscleGroup: 'Pecho',
    description: 'Ejercicio para el pecho',
    recommendedSets: 4,
    recommendedReps: 10,
  },
  {
    id: 2,
    name: 'Sentadillas',
    muscleGroup: 'Piernas',
    description: 'Ejercicio para las piernas',
    recommendedSets: 4,
    recommendedReps: 12,
  },
  // Agregar más ejercicios
];

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    fitnessLevel: 'beginner',
  });

  const [routine, setRoutine] = useState([]);
  const [availableExercises] = useState(exerciseDatabase);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateRoutine = () => {
    const userGender = formData.gender;
    const userFitnessLevel = formData.fitnessLevel;

    // Filtrar ejercicios basados en género y nivel de condición física
    const filteredExercises = availableExercises.filter(
      (exercise) =>
        (exercise.muscleGroup === 'Pecho' && userGender === 'male') ||
        (exercise.muscleGroup === 'Piernas' && userGender === 'female') ||
        exercise.muscleGroup !== 'Pecho' ||
        (exercise.muscleGroup !== 'Piernas' && userFitnessLevel !== 'beginner')
    );

    // Elegir ejercicios de forma más inteligente, en este caso solo se eligen 3 al azar
    const selectedExercises = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * filteredExercises.length);
      selectedExercises.push(filteredExercises[randomIndex]);
      filteredExercises.splice(randomIndex, 1);
    }

    setRoutine(selectedExercises);
  };

  return (
    <div className="titulorutina">
      <p>EN ESTA SECCIÓN PODRAS GENERAR TU RUTINA DIARIA</p>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Edad:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Género:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </label>
        <br />
        <label>
          Nivel de Fitness:
          <select name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange}>
            <option value="beginner">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="advanced">Avanzado</option>
          </select>
        </label>
      </form>
      <button onClick={generateRoutine}>Generar Rutina</button>

      <div>
  {routine.length > 0 ? (
    <ul>
      {routine.map((exercise) => (
        exercise && (
          <li key={exercise.id}>
            <strong>{exercise.name}</strong> - {exercise.description}.{' '}
            Recomendado: {exercise.recommendedSets} series de {exercise.recommendedReps} repeticiones.
          </li>
        )
      ))}
    </ul>
  ) : (
    <p>¡Genera tu rutina!</p>
  )}
</div>

    </div>
  );
};

export default App;
