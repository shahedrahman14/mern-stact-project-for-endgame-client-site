
import { Link } from "react-router-dom";
import useCollege from "../Hooks/useCollege";
import { Rating, ThinStar } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'

const CollegeRoute = () => {
  const [college] = useCollege();
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
  return (
    <div>
      <div className="mx-auto flex mt-24 mb-12">
        <div className="grid sm:grid-cols-1 hover:shadow-lime-500 md:grid-cols-2  lg:grid-cols-3 mx-auto px-2 gap-10 mt-16">
          {college?.map((singleCollege) => (
            <div key={singleCollege.id}>
              <div className="card w-96 h-full bg-base-100 shadow-xl hover:shadow-lime-500  hover:scale-105 duration-300 ">
                <figure>
                  <img
                    className="pt-4 hover:scale-125 duration-300"
                    src={singleCollege.img}
                    alt="college img "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{singleCollege?.name}</h2>
                  <p className="font-bold">Rating: <Rating className="my-4" style={{ maxWidth: 120 }} value={singleCollege?.rating}  itemStyles={myStyles} readOnly /></p>
                 
                  <p>
                    <span className="font-bold">Admission Date:</span>{" "}
                    {singleCollege?.admission_dates}
                  </p>
                  <p>
                    <span className="font-bold">Number of Research:</span>{" "}
                    {singleCollege?.number_of_research}
                  </p>
                  {/* <h2 className="">
                    <span className="font-bold">Events: </span>{" "}
                    {singleCollege.events.map((event) => (
                      <li key={event.id}>{event}</li>
                    ))}
                  </h2> */}
                  <p>
                    <span className="font-bold">Research History:</span>{" "}
                    {singleCollege?.research_history}
                  </p>
                  {/* <h2 className="">
                    <span className="font-bold">Sports: </span>{" "}
                    {singleCollege.sports.map((sport) => (
                      <li key={sport.id}>{sport}</li>
                    ))}
                  </h2> */}
                  <div className="card-actions justify-end">
                    <Link to={`/college/${singleCollege?._id}`} className="btn btn-primary">Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeRoute;
