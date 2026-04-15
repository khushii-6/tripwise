"use client";
import { createContext, useContext, useState } from "react";

const TripContext = createContext();

export function TripProvider({ children }) {
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  return (
    <TripContext.Provider value={{ members, setMembers, expenses, setExpenses }}>
      {children}
    </TripContext.Provider>
  );
}

export const useTrip = () => useContext(TripContext);
