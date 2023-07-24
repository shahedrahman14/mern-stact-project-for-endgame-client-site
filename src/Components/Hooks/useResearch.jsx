import { useEffect, useState } from "react";


const useResearch = () => {
    const [research,setResearch]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://mern-stact-project-for-endgame-server-site.vercel.app/research')
        .then(res=>res.json())
        .then(data=>{
            setResearch(data)
             setLoading(false)
        })
    },[])
    return [research,loading]
};

export default useResearch;