import Image from "next/image";
import LockerIcon from "@/assets/keylocker.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 items-center justify-center p-24 bg-Wheat">
      {/* Logo */}
      <div className="w-44 h-44 p-10 rounded-full shadow-md bg-white border-2 border-zinc-100">
        <Image src={LockerIcon} alt="Cadeado" className="w-full" />
      </div>

      {/* Texts */}

      <h2 className="font-medium text-zinc-500 text-4xl">
        Bem vindo ao <span className="font-bold text-MBlue">Secret Chat</span>
      </h2>
      <h2 className="font-medium text-zinc-500 text-2xl">
        Chat local, para{" "}
        <a className="font-bold text-zinc-600">conversas locais</a>
      </h2>

      <Link
        href="username"
        className="p-2 rounded-md bg-MBlue text-xl hover:bg-MBlue/50 transition-colors "
      >
        Prosseguir
      </Link>
    </main>
  );
}
