import { saveAs } from "file-saver";
import expenditure from "../assets/Expenditure.jpg";
import "../assets/Detail.css";

function Detail() {
  const downloadImg = () => {
    // Use the image path directly
    saveAs(expenditure, "receipt.jpg"); // The second argument is the filename
  };

  return (
    <div className="detail-wrapper">
      <div className="detail">
        <h1>Detail Information</h1>
        <div className="content">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Name
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
              placeholder="Enter Username"
            />
          </div>
          <div className="img-cl">
            <img id="download" src={expenditure} alt="Expenditure" />
            <button onClick={downloadImg}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
