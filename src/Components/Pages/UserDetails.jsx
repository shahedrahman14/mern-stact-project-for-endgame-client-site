import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserDetails = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto mt-48 mb-14">
      <div className="card w-96 bg-base-100 hover:shadow-orange-500 hover:scale-110 duration-300 mx-auto shadow-xl">
        <div className="avatar mx-auto">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img className="hover:scale-110 duration-300" src={user?.photoURL} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>Email: {user?.email}</p>
         
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
