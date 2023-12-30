"use client";

import { ReactNode, useState } from "react";
import { usernameContext } from "./usernameContext";

export const UsernameProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");
  const array = new Uint32Array(10);
  const [id, setID] = useState(crypto.getRandomValues(array).toString());

  return (
    <usernameContext.Provider value={{ username, setUsername, id, setID }}>
      {children}
    </usernameContext.Provider>
  );
};
