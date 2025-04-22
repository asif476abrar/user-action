
import {fetchListofData} from "@/actions"

async function serverPageExample(){
  // 'use server'
  // async function fetchListofData(){
  //   const list = await fetch('https://dummyjson.com/products')
  //   const data = await list.json()
    
  //   return data?.products;
  // }
  
  const products = await fetchListofData()
  console.log(products);
  
  return (
    <div>
      <h1>server action example - server component</h1>
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
export default serverPageExample;