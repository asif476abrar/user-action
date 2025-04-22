'use client'
import {fetchListofData} from "@/actions"
import { useEffect, useState } from "react";


function clientPageExample() {
  const [products , setProducts] =useState([]);
  const [loading , setLoading] = useState(true)  //You cannot make the component function itself async, because React expects components to return JSX synchronously.
  async function getFetchProducts(){
    setLoading(true)
    const data = await fetchListofData()
    console.log(data);
    if(data) {
      setProducts(data)
      setLoading(false)
    }
  }

  useEffect(()=>{
    getFetchProducts();
  },[])
  if(loading) return <h1>Loading data! Please wait</h1>
  return (
    <div>
      <h1>Server action page - client side page</h1>
      <ul>
        {
          products && products.length > 0 ? 
          products.map(item=><li>{item.title}</li>)
          :<h1>NO products list here</h1>
        }
      </ul>
    </div>
  )
  
}
export default clientPageExample;