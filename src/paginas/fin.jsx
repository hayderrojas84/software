import React, { useState } from 'react';

// Simulación de una base de datos de ejercicios
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
    gender: '',
    fitnessLevel: '',
  });

  const [routine, setRoutine] = useState([]);
  const [availableExercises, setAvailableExercises] = useState(exerciseDatabase);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateRoutine = () => {
    // Implementar lógica para generar una rutina equilibrada basada en la base de datos de ejercicios y datos del usuario
    // Puedes utilizar algoritmos para seleccionar ejercicios de manera inteligente

    // Ejemplo simple: selecciona aleatoriamente 3 ejercicios
    const selectedExercises = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * availableExercises.length);
      selectedExercises.push(availableExercises[randomIndex]);
    }

    setRoutine(selectedExercises);
  };

  return (
    <div className="App">
      <h1>Generador de Rutinas Diarias</h1>
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
        <h2>Rutina Diaria</h2>
        {routine.length > 0 ? (
          <ul>
            {routine.map((exercise) => (
              <li key={exercise.id}>
                <strong>{exercise.name}</strong> - {exercise.description}.{' '}
                Recomendado: {exercise.recommendedSets} series de {exercise.recommendedReps} repeticiones.
              </li>
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



