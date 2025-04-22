'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { deleteUsersAction } from "@/actions"
import { useContext } from "react"
import { UserContext } from "@/context"


export function SingleUserCard({user}){
  const { setOpenPopUp, setAddNewUserFormData, setCurrentEditedId } =
    useContext(UserContext);
  async function handleDeleteId(getCurrentId) {
    const result = await deleteUsersAction(getCurrentId, "/user-management");
    console.log(result);
  }
  function handleEditUser(getCurrentUser){
    setOpenPopUp(true)
    setAddNewUserFormData({
      firstName : getCurrentUser?.firstName,
      lastName : getCurrentUser?.lastName,
      email : getCurrentUser?.email,
      address : getCurrentUser?.address
    })
    setCurrentEditedId(getCurrentUser?._id)
  }
  return(
    <Card>
  <CardHeader>
    <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
    <CardDescription>{user?.email}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{user?.address}</p>
  </CardContent>
  <CardFooter className = "flex justify-between">
    <Button onClick = {()=>handleEditUser(user)}>EDIT</Button>
    <Button onClick = {()=> handleDeleteId(user?._id)}>DELETE</Button>
  </CardFooter>
</Card>

  )
}