import React, { useState } from "react";

export default function QuestItem(props) {
  const [title, setTitle] = useState(props.quest.title);
  const [editMode, setEditMode] = useState(false);
  const concluded = props.quest.status === "concluído";

  console.log(" props.quest.status ", props.quest.status);

  return (
    <div className="flex gap-4 flex-col md:flex-row items-center">
      <div className="flex gap-4 items-center w-full sm:w-[80%]">
        <input
          disabled={concluded}
          type="checkbox"
          checked={concluded}
          className="checkbox rounded-full border"
          onChange={() => {
            if (!concluded) {
              props.saveConcludedQuest(props.quest); 
            }
          }}
        />

        {editMode && !concluded ? (
          <input
            placeholder="quest"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-full bg-secundary pl-2 w-full input-sm flex focus:outline-none"
          />
        ) : (
          <p className={`break-words ${concluded ? "line-through" : ""}`}>
            {props.quest.title}
          </p>
        )}
      </div>
      {!concluded && (
        <div className="flex gap-4 w-full sm:w-fit justify-center">
          <button
            onClick={() => {
              if (editMode) props.saveEditQuest(props.quest, title);
              setEditMode(!editMode);
            }}
          >
            {!editMode ? "Editar" : "Salvar alterações"}
          </button>
          <button>Excluir</button>
        </div>
      )}
    </div>
  );
}
