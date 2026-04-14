import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(value);
    setValue('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Digite uma tarefa"
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
