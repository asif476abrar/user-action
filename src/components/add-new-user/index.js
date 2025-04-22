'use client'

import { addNewUserAction, editUsersActin } from "@/actions";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addNewUserFormInitialSate, addNewUsersFormControls } from "@/utils";
import { useContext, useState } from "react";
import { UserContext } from "@/context";
function AddNewUser(){
  const {
    openPopUp,
    setOpenPopUp,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedId,
    setCurrentEditedId,
  } = useContext(UserContext);
  // const [openPopUp , setOpenPopUp] = useState(false)
  // const [addNewUserFormData , setAddNewUserFormData] = useState(addNewUserFormInitialSate)
  console.log(addNewUserFormData);

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ''
    );
  }
  async function handleAddNewUserAction() {
    const result =
      currentEditedId !== null
        ? await editUsersActin(
            currentEditedId,
            addNewUserFormData,
            "//user-management"
          )
        : await addNewUserAction(addNewUserFormData, "/user-management");
    console.log(result);
    setOpenPopUp(false);
    setAddNewUserFormData(addNewUserFormInitialSate);
  } 

  return (
    <div>
      <Button onClick={() => setOpenPopUp(true)}>Add new User</Button>
      <Dialog
        open={openPopUp}
        onOpenChange={() => {
          setOpenPopUp(false);
          setAddNewUserFormData(addNewUserFormInitialSate);
          setCurrentEditedId(null)
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedId !== null ? "Edit User" : "Add New User"}
            </DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {addNewUsersFormControls.map((item) => (
              <div className="mb-5" key={item.name}>
                <Label htmlFor={item.name} className="text-right">
                  {item.label}
                </Label>
                <Input
                  id={item.name}
                  name={item.name}
                  placeholder={item.placeholder}
                  className="col-span-3"
                  type={item.type}
                  value={addNewUserFormData[item.name]}
                  onChange={(e) =>
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [item.name]: e.target.value,
                    })
                  }
                />
              </div>
            ))}
            <DialogFooter>
              <Button
                className="disabled:opacity-55"
                disabled={!handleSaveButtonValid()}
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default AddNewUser;