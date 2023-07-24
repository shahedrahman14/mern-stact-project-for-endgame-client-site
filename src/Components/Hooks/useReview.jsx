import { useState } from "react";
import { useEffect } from "react";


const useReview = () => {
    const [review,setReview]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://mern-stact-project-for-endgame-server-site.vercel.app/review')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
             setLoading(false)
        })
    },[])
    return [review,loading]
};

export default useReview;