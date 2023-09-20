import { useEffect, useState } from "react"

export default function Phones() {
    const [phone, setPhone] = useState([])
    useEffect(()=>{
        fetch('')
    }, [])
  return (
    <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Phones</h2>
    </div>
  )
}
