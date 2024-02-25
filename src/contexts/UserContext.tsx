import React, { createContext, useEffect, useState } from "react";
import { IUser } from "../types/UserInterface";
import { usePersistState } from "../hooks/usePersistState";

interface IUserContext {
  user?: IUser;
  goal: number;
  setGoal: (value: number) => Promise<void>;
  setUser: (value: IUser) => Promise<void>;
}

const GOAL = 2000;
const USER = {
  name: "Evandro Oliveira",
  photo:
    "https://avatars.githubusercontent.com/u/65333466?v=4",
};

export const UserContext = createContext<IUserContext>({
  goal: GOAL,
  user: USER,
  setUser: () => Promise.resolve(),
  setGoal: () => Promise.resolve(),
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = usePersistState<IUser>(USER, "@user");
  const [goal, setGoal] = usePersistState<number>(GOAL, "goal1");

  return (
    <UserContext.Provider value={{ goal, user, setGoal, setUser }}>
      {children}
    </UserContext.Provider>
  );
};