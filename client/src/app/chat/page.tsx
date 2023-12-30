"use client";

import { UserChatC } from "@/components/Other";
import { usernameContext } from "@/context/User/usernameContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import SendIcon from "@/assets/sender.svg";
import { useRouter } from "next/navigation";
import { ActiveUserContaier } from "@/components/ActiveUsersContainer";
import { GetOutSession } from "@/components/GetOutSession";
import { useMediaQuery } from "react-responsive";

export default function ChatPage() {
  const { username, id } = useContext(usernameContext);
  const [socketInstance, setSocket] = useState<any>(undefined);
  const [messageToSend, setMessageToSend] = useState("");
  const [usersInSession, setUsersInSession] = useState([]);
  const navigator = useRouter();
  const [chatHistory, setChatHistory] = useState<UserChatC[]>([]);

  useEffect(() => {
    if (username === "") {
      navigator.replace("/");
    }

    const socket = io(
      `http://${process.env.NEXT_PUBLIC_HOST_IP}:${process.env.NEXT_PUBLIC_PORT}`
    );

    //Listeners
    socket.on("connect", () => {
      setSocket(socket);
      socket.emit("changeName", username);
      socket.emit("usersInSession");
    });

    socket.on("ioUserInSession", (usernamesInSession) => {
      setUsersInSession(usernamesInSession);
    });

    socket.on("ioMessage", (data) => {
      const { whoSend, message, ID } = data;

      setChatHistory([
        ...chatHistory,
        {
          whatSend: message,
          whoID: ID,
          whoSend,
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [chatHistory]);

  const handleSend = () => {
    socketInstance.emit("message", {
      whoSend: username,
      message: messageToSend,
      ID: id ?? "No ID",
    });
    setMessageToSend("");
  };

  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });

  if (isMobile) {
    return (
      <main className="w-full min-h-screen flex flex-col px-5 py-1 justify-center gap-10 bg-Wheat">
        {/* Chat and send input */}
        <div className="w-full flex gap-5 items-center flex-col">
          {/* chat */}
          <div className=" w-full h-96 gap-5  overflow-auto  p-5 flex flex-col bg-white rounded-md shadow-md border-zinc-300 border-2">
            {/* Chat Other */}

            {chatHistory.map((user, i) => (
              <UserChatC
                key={i}
                whatSend={user.whatSend}
                whoID={user.whoID}
                whoSend={user.whoSend}
              />
            ))}
          </div>

          {/* Input */}

          <div className="w-full flex gap-2 items-center  h-10 p-2  bg-MBlue rounded-md shadow-md">
            <input
              type="text"
              name="send"
              id="send"
              autoComplete="false"
              value={messageToSend}
              onChange={(value) => setMessageToSend(value.currentTarget.value)}
              className="w-full rounded-md outline-none text-zinc-900 px-2"
            />
            <button
              type="submit"
              onClick={handleSend}
              className="flex justify-center items-center p-1  w-8 h-8"
            >
              <Image src={SendIcon} alt="Enviar" className="w-full " />
            </button>
          </div>
        </div>
        <div className="flex w-full gap-5 flex-col">
          <ActiveUserContaier
            isMobileScreen={isMobile}
            usersInSession={usersInSession}
          />
          <GetOutSession />
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen flex  justify-center gap-10 bg-Wheat">
      <div className="flex gap-5 flex-col">
        <ActiveUserContaier
          isMobileScreen={false}
          usersInSession={usersInSession}
        />
        <GetOutSession />
      </div>

      {/* Chat and send input */}
      <div className="mt-14 w-1/2 flex gap-5 items-center flex-col">
        {/* chat */}
        <div className=" w-full h-96 gap-5  overflow-auto  p-5 flex flex-col bg-white rounded-md shadow-md border-zinc-300 border-2">
          {/* Chat Other */}

          {chatHistory.map((user, i) => (
            <UserChatC
              key={i}
              whatSend={user.whatSend}
              whoID={user.whoID}
              whoSend={user.whoSend}
            />
          ))}
        </div>

        {/* Input */}

        <div className="w-full flex gap-2 items-center  h-10 p-2  bg-MBlue rounded-md shadow-md">
          <input
            type="text"
            name="send"
            id="send"
            autoComplete="false"
            value={messageToSend}
            onChange={(value) => setMessageToSend(value.currentTarget.value)}
            className="w-full rounded-md outline-none text-zinc-900 px-2"
          />
          <button
            type="submit"
            onClick={handleSend}
            className="flex justify-center items-center p-1  w-8 h-8"
          >
            <Image src={SendIcon} alt="Enviar" className="w-full " />
          </button>
        </div>
      </div>
    </main>
  );
}
