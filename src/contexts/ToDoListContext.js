import React, { createContext, useContext, useState } from "react";

const ToDoListContext = createContext();

export const useToDoList = () => useContext(ToDoListContext);

export const ToDoListProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  return (
    <ToDoListContext.Provider value={{ toDoList, setToDoList }}>
      {children}
    </ToDoListContext.Provider>
  );
};
