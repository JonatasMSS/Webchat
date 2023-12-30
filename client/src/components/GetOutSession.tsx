import Link from "next/link";

export const GetOutSession = () => {
  return (
    <Link
      href={"/"}
      className="w-full p-1 flex items-center justify-center hover:bg-red-400 hover:scale-110 transition-all bg-red-500 rounded-md shadow-md"
    >
      Sair da sessão
    </Link>
  );
};
