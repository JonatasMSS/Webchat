"use client";

import { usernameContext } from "@/context/User/usernameContext";
import { useContext } from "react";

export interface UserChatC {
  whoSend?: string;
  whoID: string;
  whatSend: string;
}

export function UserChatC({ whoID, whoSend, whatSend }: UserChatC) {
  const { id } = useContext(usernameContext);

  if (whoID === id) {
    return (
      <div className="w-full flex flex-col items-end justify-center">
        <h2 className="font-medium text-zinc-800">Você</h2>
        <div className="rounded-md max-w-52 h-fit w-fit p-1  bg-MBlue">
          <span className="w-full font-medium text-white">{whatSend}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col items-start justify-center">
        <h2 className="font-medium text-zinc-800">{whoSend}</h2>
        <div className="rounded-md max-w-52 h-fit w-fit p-1  bg-zinc-200">
          <span className="w-full font-medium text-zinc-900">{whatSend}</span>
        </div>
      </div>
    );
  }
}
