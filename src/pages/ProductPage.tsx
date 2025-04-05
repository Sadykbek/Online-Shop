import axios from "axios"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import NotFound from "./NotFound";
interface Product{
   title: string,

}

export default function ProductPage(){
   const [data, setData] = useState<Product|null>(null)
   const [err, setErr] = useState(false)
   const {id} = useParams()
   useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${id}`).then(res=>{
         setData(res.data)
      }).catch(err=>{
         console.log(err)
        setErr(true)
      }
      )
   },[id])
   if(err){
      return <NotFound/>
   }
   if(!data){
      return <div>Загружаем...</div>
   }
   return(
      <div>
         
        { data.title}
      </div>
   )
}