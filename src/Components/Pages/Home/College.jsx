
import { Link } from "react-router-dom";
import useCollege from "../../Hooks/useCollege";


// Declare it outside your component so it doesn't get re-created

const College = () => {
  const [college] = useCollege([]);
  
  return (
  <div className="mx-auto flex">
      <div  className="grid sm:grid-cols-1 hover:shadow-lime-500 md:grid-cols-2  lg:grid-cols-3 mx-auto px-2 gap-10 mt-16">
     {
        college.slice(0,3).map(singleCollege=><div key={singleCollege.id}>
         <div  className="card w-96 h-full bg-base-100 shadow-xl hover:shadow-lime-500 hover:scale-105 duration-300 ">
        <figure>
          <img className="pt-4 hover:scale-125 duration-300"
            src={singleCollege.img}
            alt="college img "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{singleCollege.name}</h2>
         
          <p><span className="font-bold">Admission Date:</span> {singleCollege.admission_dates}</p>
          <h2 className=""><span className="font-bold">Events: </span> {singleCollege.events.map(event=><li key={event.id}>{event}</li>)}</h2>
          <p><span className="font-bold">Research History:</span> {singleCollege.research_history}</p>
          <h2 className=""><span className="font-bold">Sports: </span> {singleCollege.sports.map(sport=><li key={sport.id}>{sport}</li>)}</h2>
          <div className="card-actions justify-end">
          <Link to={`/college/${singleCollege._id}`} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
        </div>)
     }
    </div>
  </div>
  );
};

export default College;
