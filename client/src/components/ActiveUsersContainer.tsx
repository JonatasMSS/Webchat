export const ActiveUserContaier = ({
  usersInSession,
  isMobileScreen,
}: {
  usersInSession: string[];
  isMobileScreen: boolean;
}) => {
  const MobileScreen = () => {
    return (
      <div className="w-full h-fit p-2 flex flex-col bg-white rounded-md shadow-md">
        <h2 className="font-bold text-zinc-800"> Usuários ativos </h2>
        {usersInSession.map((user, i) => (
          <span className="font-bold text-MBlue" key={i}>
            {user}
          </span>
        ))}
      </div>
    );
  };

  if (isMobileScreen) {
    return <MobileScreen />;
  }

  return (
    <div className="w-44 h-96 mt-14 p-2 flex flex-col bg-white rounded-md shadow-md">
      <h2 className="font-bold text-zinc-800"> Usuários ativos </h2>
      {usersInSession.map((user, i) => (
        <span className="font-bold text-MBlue" key={i}>
          {user}
        </span>
      ))}
    </div>
  );
};
