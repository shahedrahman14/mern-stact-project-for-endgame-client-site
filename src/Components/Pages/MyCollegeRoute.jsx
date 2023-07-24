import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAdmission from "../Hooks/useAdmission";

const MyCollegeRoute = () => {
  const { user } = useContext(AuthContext);

  const handleSubmitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const student_name = form?.student_name?.value;
    const Rating = form?.Rating?.value;
    const student_img = form?.student_img?.value;
    const review = form?.review?.value;

    const newReview = { student_img, Rating, student_name, review };
    // console.log(newAdmission);
    fetch("https://mern-stact-project-for-endgame-server-site.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Review Saved Successfully",
          });
          form.reset();
        }
      });
  };
  const [admission] = useAdmission();
  return (
    <div className="text-center mt-28">
      <div className="mx-auto flex mb-12">
        <div className="grid sm:grid-cols-1 hover:shadow-lime-500 md:grid-cols-2  lg:grid-cols-3 mx-auto px-2 gap-10 mt-16">
          {admission?.map((singleadmission) => (
            <div key={singleadmission.id}>
              <div className="card w-96 h-full bg-base-100 shadow-xl hover:shadow-lime-500  hover:scale-105 duration-300 ">
                <div className="avatar mx-auto">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={singleadmission?.photo} />
                  </div>
                </div>
                <div className="card-body text-left">
                  <h2 className="card-title">
                    {singleadmission?.CandidateName}
                  </h2>
               

                  <p>
                    <span className="font-bold">Subject:</span>{" "}
                    {singleadmission?.Subject}
                  </p>
                  <p>
                    <span className="font-bold">Email:</span>{" "}
                    {singleadmission?.email}
                  </p>
                
                  <p>
                    <span className="font-bold">phoneNumber:</span>{" "}
                    {singleadmission?.phoneNumber}
                  </p>
                  <p>
                    <span className="font-bold">Address:</span>{" "}
                    {singleadmission?.address}
                  </p>
                  <p>
                    <span className="font-bold">Date of Birth:</span>{" "}
                    {singleadmission?.db}
                  </p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-medium text-2xl">Make a Review About the college</h1>
      <form onSubmit={handleSubmitReview} className="card-body">
        <div className="grid grids-cols-1 gap-6 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              required
              defaultValue={user?.displayName}
              name="student_name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating in 5"
              required
              max={5}
              maxLength={2}
              min={1}
              name="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Review</span>
            </label>
            <textarea
              className="border"
              name="review"
              placeholder="write your review here"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Photo:</span>
            </label>
            <input
              type="url"
              defaultValue={user?.photoURL}
              required
              placeholder="your photo"
              name="student_img"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block "
            type="submit"
            value="Submit Review"
          />
        </div>
      </form>
    </div>
  );
};

export default MyCollegeRoute;
