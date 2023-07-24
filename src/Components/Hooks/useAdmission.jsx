import { useEffect, useState } from "react";

const useAdmission = () => {
    const [admission,setAdmission]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://mern-stact-project-for-endgame-server-site.vercel.app/admission')
        .then(res=>res.json())
        .then(data=>{
            setAdmission(data)
             setLoading(false)
        })
    },[])
    return [admission,loading]
};

export default useAdmission;