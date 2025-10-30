import React, { useState } from "react";
import { Pencil, Trash2, PlusCircle, CheckCircle } from "lucide-react";

const Todo = () => {
  const [text, setText] = useState("");
  const [all, setAll] = useState([]);
  const [editId, setEditId] = useState(null);

  const addOrUpdate = () => {
    if (text.trim() === "") return alert("Please enter something...");

    if (editId) {
      // Update existing todo
      const updated = all.map((item) =>
        item.key === editId ? { ...item, text } : item
      );
      setAll(updated);
      setEditId(null);
      setText("");
    } else {
      // Add new todo
      setAll([
        ...all,
        {
          key: Date.now(),
          text,
          date: new Date().toLocaleString(),
        },
      ]);
      setText("");
    }
  };

  const del = (key) => {
    const filtered = all.filter((item) => item.key !== key);
    setAll(filtered);
  };

  const edit = (item) => {
    setText(item.text);
    setEditId(item.key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-lg bg-zinc-800/50 backdrop-blur-lg border border-zinc-700 rounded-2xl shadow-xl p-6">
        <h1 className="text-center text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent tracking-wide">
          Todo List
        </h1>

        {/* Input Section */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 p-3 rounded-xl bg-zinc-700/60 border border-zinc-600 focus:ring-2 focus:ring-sky-400 outline-none text-white placeholder-zinc-400"
          />
          <button
            onClick={addOrUpdate}
            className="px-4 bg-sky-500 hover:bg-sky-400 rounded-xl transition-all active:scale-95 flex items-center gap-2"
          >
            {editId ? (
              <>
                <CheckCircle size={20} /> Update
              </>
            ) : (
              <>
                <PlusCircle size={20} /> Add
              </>
            )}
          </button>
        </div>

        {/* Todo Items */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
          {all.length === 0 ? (
            <p className="text-center text-zinc-400 italic">
              No tasks yet. Add one ✨
            </p>
          ) : (
            all.map((item) => (
              <div
                key={item.key}
                className="bg-zinc-900/70 p-4 rounded-xl flex justify-between items-center border border-zinc-700 hover:border-sky-400/60 transition-all duration-300"
              >
                <div>
                  <p className="text-lg font-medium">{item.text}</p>
                  <p className="text-xs text-zinc-400 mt-1">{item.date}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => edit(item)}
                    className="p-2 bg-emerald-500/80 hover:bg-emerald-400/80 rounded-lg active:scale-90 transition-all"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => del(item.key)}
                    className="p-2 bg-red-500/80 hover:bg-red-400/80 rounded-lg active:scale-90 transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
