import axios from 'axios';

const baseUrl = 'http://localhost:5000';

// 🚀 Read all todos
const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log('data --->', data);
      setToDo(data);
    })
    .catch((err) => console.error('Error fetching todos:', err));
};

// ➕ Create a todo
const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(({ data }) => {
      console.log('Added:', data);
      setText('');
      getAllToDo(setToDo);
    })
    .catch((err) => console.error('Error adding todo:', err));
};

// 🔧 Update a todo
const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update/${toDoId}`, { text })
    .then(({ data }) => {
      console.log('Updated:', data);
      setText('');
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.error('Error updating todo:', err));
};

// ❌ Delete a todo
const deleteToDo = (toDoId, setToDo) => {
  axios
    .delete(`${baseUrl}/delete/${toDoId}`)
    .then(({ data }) => {
      console.log('Deleted:', data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.error('Error deleting todo:', err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
