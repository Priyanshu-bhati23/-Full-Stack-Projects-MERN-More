import React, { useState, useEffect } from 'react';
import ToDo from './components/ToDo';
import { getAllToDo, addToDo, updateToDo, deleteToDo } from './utils/HandleApi';

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className='container'>
      <h1>ToDo App</h1>

      <div className='top'>
        <input
          type='text'
          placeholder='Add new task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div
          className='add'
          onClick={
            isUpdating
              ? () =>
                  updateToDo(
                    toDoId,
                    text,
                    setToDo,
                    setText,
                    setIsUpdating
                  )
              : () => addToDo(text, setText, setToDo)
          }
        >
          {isUpdating ? 'Updating...' : 'Add'}
        </div>
      </div>

      <div className='list'>
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
