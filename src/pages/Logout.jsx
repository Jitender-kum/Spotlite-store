import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    function handleLogout() {
        //console.log("User logged out");
        navigate("/login"); 
    }
    return (
        <div className="container">
            <button className="btn" type="submit" onClick={Logout()}>Logout</button>
        </div>
    )
}
   