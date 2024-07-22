import React from "react";

interface NotesContextProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: (task: string) => void;
  allTasks: string[];
  setAllTasks: (tasks: string[]) => void;
  removeTask: (task: string) => void;
  setEdited: React.Dispatch<React.SetStateAction<boolean>>;
  editTask: (task: string) => void;
  edited: boolean;
}

interface NotesProviderProps {
  children: React.ReactNode;
}

export const NotesContext = React.createContext<NotesContextProps | undefined>(
  undefined
);

export function NotesProvider({ children }: NotesProviderProps) {
  const [task, setTask] = React.useState<string>("");
  const [allTasks, setAllTasks] = React.useState<string[]>([]);
  const [edited, setEdited] = React.useState(false);

  const addTask = (task: string) => {
    setAllTasks((tasks) => [...tasks, task] as string[]);
  };

  const removeTask = (task: string) => {
    setAllTasks((tasks) => tasks.filter((t) => t !== task));
  };

  const editTask = (task: string) => {
    if (edited) {
      setTask(task);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        task,
        setTask,
        addTask,
        allTasks,
        setAllTasks,
        removeTask,
        setEdited,
        editTask,
        edited,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotesContext() {
  const context = React.useContext(NotesContext);
  if (!context) {
    throw new Error("useNotesContext must be used within a NotesProvider");
  }
  return context;
}
