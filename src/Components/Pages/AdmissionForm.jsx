import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AdmissionForm = () => {

  const{user}=useContext(AuthContext)
  const handleSubmit=(event)=>{
    event.preventDefault()
    const form =event.target
    const CandidateName=form?.CandidateName?.value
    const Subject=form?.subject?.value
    const email=form.email.value
    const phoneNumber=form?.phoneNumber?.value
    const address=form?.address?.value
    const photo=form?.photo?.value
    const db=form?.db?.value
    const newAdmission={CandidateName,Subject,email,phoneNumber,address,photo,db}
    // console.log(newAdmission);
    fetch('https://mern-stact-project-for-endgame-server-site.vercel.app/admission',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newAdmission)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have submitted admission form successfully',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset()
      }
    })

  }
    return (
        <div className="text-center mt-24">
        <h1 className="text-medium text-2xl">Fill the Form Carefully:</h1>
        <form onSubmit={handleSubmit}  className="card-body">
          <div className="grid grids-cols-1 gap-6 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Candidate Name</span>
              </label>
              <input
                type="text" defaultValue={user?.displayName}
                placeholder="Your Name"
                 required
                name="CandidateName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                required
                name="subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" defaultValue={user?.email}
                placeholder="Your Email"
                required
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number:</span>
              </label>
              <input
                type="number"
                placeholder="your phone number"  required  
                name="phoneNumber"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>
              <input
                type="text"  required
                placeholder="Your Address"
                name="address"
              
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo:</span>
              </label>
              <input 
                type="url" defaultValue={user?.photoURL}  required
                placeholder="your photo url"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date of Birth:</span>
              </label>
              <input 
                type="date"   required
                placeholder="your db"
                name="db"
                className="input input-bordered"
              />
            </div>
         
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block "
              type="submit"
              value="Submit  Form"
            />
          </div>
        </form>
      </div>
    );
};

export default AdmissionForm;