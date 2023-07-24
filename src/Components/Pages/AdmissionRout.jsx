
import { Link } from 'react-router-dom';
import useCollege from './../Hooks/useCollege';
const AdmissionRout = () => {
    const [college]=useCollege()
    return (
        <div className='mx-auto mt-24 px-2 mb-12'>
            <h1 className=" font-bold text-2xl ">College List: </h1>
         <div className='mx-auto px-4'>
         <div> 
         {
                college.map(a=><Link
                     className='underline font-medium mx-auto' to="/admissionForm" key={a?.id}><li>{a?.name}</li></Link>)
            }

         </div>
         </div>
        </div>
    );
};

export default AdmissionRout;