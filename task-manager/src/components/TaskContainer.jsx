// src/components/TaskContainer.jsx
import React from 'react';
import Task from './Task'; // Importando o componente Task

function TaskContainer() {
  // Array de tarefas com id, title e description
  const tasks = [
    { id: 1, title: 'Estudar React', description: 'Estudar a documentação oficial do React e praticar os conceitos básicos.' },
    { id: 2, title: 'Ler um livro', description: 'Ler o capítulo 3 do livro "O Poder do Hábito".' },
    { id: 3, title: 'Fazer exercícios de matemática', description: 'Resolver questões do livro de álgebra e revisar fórmulas.' },
    { id: 4, title: 'Exercitar-se', description: 'Correr por 30 minutos e fazer alongamento.' },
    { id: 5, title: 'Estudar inglês', description: 'Revisar vocabulário e praticar conversação com um amigo.' },
    { id: 6, title: 'Organizar a casa', description: 'Limpar a sala, arrumar os quartos e lavar a louça.' },
  ];

  return (
    <div>
      {/* Iterando sobre o array de tarefas e renderizando o componente Task */}
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} description={task.description} />
      ))}
    </div>
  );
}

export default TaskContainer;
