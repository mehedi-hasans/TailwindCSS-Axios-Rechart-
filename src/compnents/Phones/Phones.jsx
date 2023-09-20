import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"
import axios from 'axios'
export default function Phones() {
    const [phones, setPhones] = useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone=>{
                const obj = {
                    name: phone.phone_name,
                    price: parseFloat(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phoneWithFakeData);
            setPhones(phoneWithFakeData)
        })
    }, [])
  return (
    <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Phones {phones.length}</h2>
        <BarChart className="mx-auto  my-9" width={1200} height={400} data={phones}>
            <Bar dataKey="price" fill='#90ee90'/>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </BarChart>
    </div>
  )
}
