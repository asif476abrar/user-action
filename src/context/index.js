'use-client'

import { createContext, useState } from "react"
import { addNewUserFormInitialSate } from "@/utils";

export const UserContext = createContext(null);

export default function UserState({ children }) {
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialSate
  );
  return (
    <UserContext.Provider
      value={{
        currentEditedId,
        setCurrentEditedId,
        openPopUp,
        setOpenPopUp,
        addNewUserFormData,
        setAddNewUserFormData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
