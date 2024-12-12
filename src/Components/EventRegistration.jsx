import { useNavigate } from "react-router-dom";
// import "../assets/Signup.css";
import "../assets/EventRegistration.css"
function EventRegistration(){

// const [file, setFile] = useState();
const nav = useNavigate();

function handleFile(event){
    setFile(event.target.files[0])
    console.log(file)
}

const handleRegister = ()=>{
  nav('/viewRegistration')
}
const closeRegistration = () => {
  nav("/");
};
return(
    <div className="register-wrapper">
      <div className="register">
        <h1>Register</h1>
        <div className="form">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Full Name"
            />
          </div>

          <form action="">
            <p>Upload Reciept</p>
            <input type="file" name="file" onChange={handleFile} />
            <img src="" alt="" />
          </form>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-outline-danger"
           onClick={closeRegistration}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-outline-success" onClick={handleRegister}>
              Register
            </button>
          </div>
          
          </div>
      

      </div>
    </div>
);
}
export default EventRegistration;