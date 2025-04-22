'use server'

import connectToDB from "@/database"
import User from "@/models/user";
import { revalidatePath } from "next/cache";

  // export async function fetchListofData(){
  //   const list = await fetch('https://dummyjson.com/products')
  //   const data = await list.json()
    
  //   return data?.products;
  // }

  //add new user
  export async function addNewUserAction(formData, pathToRevalidate){
    await connectToDB();
    try{
//validate data using joi/ other packages you can use
      
      const newlyCreatedUser = await User.create(formData);
      if(newlyCreatedUser){
        revalidatePath(pathToRevalidate)
        return {
          success : true,
          message : "new user created successfully"
        }
      }else{
        return({
          success : false,
          message : "Someting occurs wrong. please try again"
        })
      }
    }catch(e){
      console.log(e);
      return({
        success : false,
        message : "Someting occurs wrong1. please try again"
      })
    }
  }
  //fetch new user
  export async function fetchUsersActions(){
    await connectToDB();
    try{
      const fetchUsersList = await User.find({})
      if(fetchUsersList){
        return({
          success : true,
          data : JSON.parse(JSON.stringify(fetchUsersList))
        })
      }else{
        return({
          success : false,
          message : "something occurs wrong! please try again"
        })
      }
    }catch(e){
      console.log(e);
      return ({
        success : false,
        message :"something occurs wrong! please try again"
      })
      
    }
  }
  //edit new user
  export async function editUsersActin(currentId , formData, pathToRevalidate) {
    await connectToDB()
    try{
      const {firstName, lastName, email, address} = formData;
      const updateUser = await User.findByIdAndUpdate(
      {
        _id : currentId
      },
      {
        firstName ,lastName, email, address
      },
      {new :true}
    )
    if(updateUser){
      revalidatePath(pathToRevalidate)
      return({
        success : true,
        messsage : "updated data successfully"
      })
    }else{
      return({
        success : false,
        message : "something occurs wrong! please try again"
      })
    }
    }catch(e){
      console.log(e);
      return({
        seccess : true,
        message : "Somethig occurs wrong !try again later"
      })
      
    }
  }
  //delete new user
  export async function deleteUsersAction(currentId ,pathToRevalidate){
    await connectToDB();
    try{
      const deleteUser = await User.findByIdAndDelete(currentId);
      if(deleteUser){
        revalidatePath(pathToRevalidate);
        return({
          successs : true,
          message :"Users deleted successfully"
        })
      }else{
        return ({
          success: false,
          meassae : "not able to delete is user"
        })
      }
    }catch(e){
      console.log(e);
      return({
        seccess : true,
        message : "Somethig occurs wrong !try again later"
      })
      
    }
  }