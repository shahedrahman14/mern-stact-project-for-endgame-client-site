import { Rating, ThinStar } from "@smastrom/react-rating";

import { useLoaderData } from "react-router-dom";

import '@smastrom/react-rating/style.css'
const SingleCollege = () => {
  const singleCollege = useLoaderData();

  console.log(singleCollege);
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div key={singleCollege.id} className="mx-auto flex my-12">
      <div className="mx-auto">
        <div className=" hover:shadow-lime-500  mx-auto px-2 mt-16">
          <div key={singleCollege.id}>
            <div className="card w-96 h-full bg-base-100 shadow-xl hover:shadow-lime-500  hover:scale-105 duration-300 ">
              <figure>
                <img
                  className="pt-4 hover:scale-125 duration-300"
                  src={singleCollege?.img}
                  alt="singleCollege img "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleCollege?.name}</h2>
                <div className="font-bold">
                  Rating:{" "}
                  <Rating
                    className="my-4"
                    style={{ maxWidth: 120 }}
                    value={singleCollege?.rating}
                    itemStyles={myStyles}
                    readOnly
                  />
                </div>
                <p>
                  <span className="font-bold">Admission Date:</span>{" "}
                  {singleCollege?.admission_dates}
                </p>
                <p>
                  <span className="font-bold">Number of Research:</span>{" "}
                  {singleCollege?.number_of_research}
                </p>
                <h2 className="">
                  <span className="font-bold">Events: </span>{" "}
                  {singleCollege?.events?.map((event) => (
                    <li key={event.id}>{event}</li>
                  ))}
                </h2>
                <p>
                  <span className="font-bold">Research History:</span>{" "}
                  {singleCollege?.research_history}
                </p>
                <h2 className="">
                  <span className="font-bold">Sports: </span>{" "}
                  {singleCollege?.sports?.map((sport) => (
                    <li key={sport?.id}>{sport}</li>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
