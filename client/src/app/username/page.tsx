"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/back.svg";
import { useContext } from "react";
import { usernameContext } from "@/context/User/usernameContext";
export default function UsernamePage() {
  const { setUsername } = useContext(usernameContext);

  return (
    <main className="w-full min-h-screen gap-5  bg-Wheat flex flex-col justify-center items-center">
      <Link
        href={"/"}
        className="rounded-full w-10 hover:scale-110 transition-transform p-2 h-10 flex items-center justify-center inset-0 m-5 bg-white absolute shadow-md border-2 border-zinc-200"
      >
        <Image src={ArrowIcon} alt="Voltar" className="w-full" />
      </Link>

      <h2 className="font-medium text-3xl text-zinc-500 ">
        Comece digitando seu{" "}
        <span className="font-bold text-zinc-600">nome</span> para entrar
      </h2>
      <input
        type="text"
        name="name"
        autoFocus
        onChange={(value) => setUsername(value.currentTarget.value)}
        id="name"
        className="bg-zinc-200 rounded-full py-1 px-2 text-black"
      />

      <Link
        href="chat"
        className="p-2 rounded-md bg-MBlue text-xl hover:bg-MBlue/50 transition-colors "
      >
        Prosseguir
      </Link>
    </main>
  );
}
