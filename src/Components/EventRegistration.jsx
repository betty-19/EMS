import { useNavigate } from "react-router-dom";
// import "../assets/Signup.css";
import "../assets/EventRegistration.css"
function EventRegistration(){

// const [file, setFile] = useState();

function handleFile(event){
    setFile(event.target.files[0])
    console.log(file)
}

return(
    <div className="register-wrapper">
      <div className="register">
        <h1>Register</h1>
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
            <input type="file" name="file" onChange={handleFile} />
            <button>Upload</button>
          </form>

      </div>
    </div>
);
}
export default EventRegistration;