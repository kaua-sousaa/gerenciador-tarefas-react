import { useState } from "react";
import Input from "./Input";

function AddTask({ onClickAddTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descricao da tarefa"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
            if (!title.trim() || !description.trim()){
                return alert("Preencha o titlo ou a descricao da tarefa")
            }
            onClickAddTasks(title, description)
            setTitle("")
            setDescription("")
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
