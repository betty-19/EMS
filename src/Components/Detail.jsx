import { saveAs } from "file-saver";
import { useLocation } from "react-router-dom";
import expenditure from "../assets/Expenditure.jpg";
import { useNavigate } from "react-router-dom";
import "../assets/Detail.css";
import { useEffect } from "react";

function Detail() {
  const {state } = useLocation();
  const nav = useNavigate();
 
  const downloadImg = () => {
    saveAs(state.receipt_url , state.event_name + "_receipt.jpg");
  };
  const handleCloseDetail = () =>{
    nav('/viewRegistration')
  }
  

  return (
    <div className="detail-wrapper">
      <div className="detail">
        <div className="head">
      <i class="bi bi-arrow-left" onClick={handleCloseDetail}></i>
          <h1>Detail Information</h1>
        </div>
        <div className="content">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              value={state?.event_name || ""}
              readOnly 
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
              value={state?.username || ""}
              readOnly 
            />
          </div>
          <div className="img-cl">
          <label htmlFor="formGroupExampleInput" className="form-label">
              Receipt
            </label><br></br>
            <img id="download" src={state?.receipt_url || ""} alt="Expenditure" /><br></br>
            <button onClick={downloadImg}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
