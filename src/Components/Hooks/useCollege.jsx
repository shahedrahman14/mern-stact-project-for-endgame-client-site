import { useEffect, useState } from "react";


const useCollege = () => {
    const [college,setCollege]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://mern-stact-project-for-endgame-server-site.vercel.app/college')
        .then(res=>res.json())
        .then(data=>{
            setCollege(data)
             setLoading(false)
        })
    },[])
    return [college,loading]
};

export default useCollege;