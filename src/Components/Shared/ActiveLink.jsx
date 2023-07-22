import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ActiveLink = ({to,children}) => {
    return (
        <div>
        <NavLink
          to={to}
          className={({ isActive}) =>isActive ? "active font-bold  text-purple-700 underline": "" }
        >
          {children}
        </NavLink>
</div>
    );
};

export default ActiveLink;