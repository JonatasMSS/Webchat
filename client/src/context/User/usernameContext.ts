import { Dispatch, SetStateAction, createContext } from "react";



type UsernameContext = {
    username: string;
    id: string;
    setUsername: Dispatch<SetStateAction<string>>;
    setID: Dispatch<SetStateAction<string>>;
}


export const usernameContext = createContext<UsernameContext>({
    username: '',
    id: '',
    setUsername: () => { },
    setID: () => { }
})