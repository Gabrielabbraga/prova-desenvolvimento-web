import { useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;
    setTasks((current) => [
      ...current,
      { id: Date.now().toString(), text: trimmedText, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  return (
    <main className="app-container">
      <section className="card">
        <h1>Lista de Tarefas</h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
      </section>
    </main>
  );
}

export default App;
