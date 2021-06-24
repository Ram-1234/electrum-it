import React,{useEffect,useState} from 'react'
import Card from './Card';
import './styles.css'

function Home() {
    const [Data,setData]=useState([])
    const [selectvalue,setValue]=useState(50)
    // console.log(Data)

     const selectOption=(e)=>{
         setValue(e.target.value)
     }



    useEffect(()=>{
        fetch(`https://6051b8b8fb49dc00175b6997.mockapi.io/api/quotes`,{method:'POST'})
        .then(file=>file.json())
        .then(d=>{ console.log(d)
            const data=d.data.quotes.product_quotes.filter(item=> item.volume<=parseInt(selectvalue))
        setData(data)  
        })
    },[selectvalue])

    return (
        <div>
            <div className="header">
                <select style={{width:"100px"}} onChange={selectOption} defaultValue="50">
                    <option value="80">80</option>
                    <option value="50">50</option>
                    <option value="40">40</option>
                    <option value="30">30</option>
                </select>
            </div>
         {
             Data.map(item=> (
               <Card 
               key={item.model_id}
               item={item}
               />
             ))
         }
        </div>
    )
}

export default Home;

