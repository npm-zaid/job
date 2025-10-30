import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react';

const Todo = () => {
  const [task, setTask] = useState([]);
  const [content, setContent] = useState('');

  const AddFunc = () => {
    if (!content.trim()) return;
    setTask([
      ...task,
      {
        key: Date.now(),
        text: content,
        date: new Date().toLocaleDateString(),
        status: false,
      },
    ]);
    setContent(''); // clear input after add
  };

  const DelFunc = (i) => {
    const filtered = task.filter((ii) => ii.key !== i.key);
    setTask(filtered);
  };

  const StatusFunc = (i) => {
    const updated = task.map((t) =>
      t.key === i.key ? { ...t, status: !t.status } : t
    );
    setTask(updated);
  };

  return (
    <div className="bg-black/70 h-screen w-full flex justify-center items-center">
      <div className="w-1/2 h-[70vh] bg-zinc-800 rounded-lg p-4 flex flex-col gap-6">
        <h1 className="text-[3vw] text-center text-white italic uppercase">
          todo list app
        </h1>
        <div className="flex gap-4">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && AddFunc()}
            className="outline-none w-full bg-zinc-900/50 focus:border border-sky-300 rounded-lg p-3 text-white"
            type="text"
            placeholder="Enter a task..."
          />
          <button
            onClick={AddFunc}  
            className="p-3 bg-sky-400/90 active:bg-sky-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-sky-100 rounded-xl"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="container flex flex-col gap-3 min-h-[30vh] overflow-y-scroll">
          {task.map((i) => (
            <div
              key={i.key}
              className="bg-zinc-700/70 p-4 rounded-lg text-white font-semibold flex justify-between items-center uppercase"
            >
              <h1 className={`${i.status ? 'line-through text-gray-400' : ''}`}>
                {i.text}
              </h1>

              <div
                onClick={() => StatusFunc(i)}
                className={`cursor-pointer px-3 py-1 rounded-lg text-sm font-bold ${
                  i.status ? 'bg-green-400' : 'bg-red-500'
                }`}
              >
                {i.status ? 'Done' : 'Pending'}
              </div>

              <button
                onClick={() => DelFunc(i)}
                className="p-3 bg-red-400/90 active:bg-red-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-red-100 rounded-xl"
              >
                <Minus size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
