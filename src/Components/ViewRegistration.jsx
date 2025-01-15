import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/viewRegistration.css";

function ViewRegistration({onViewDetail}) {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch("http://localhost:3000/viewRegistration")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleViewDetail = (rowData) => {
    nav("/detail", { state: rowData });
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Determine the rows to display for the current page
  const startRow = (currentPage - 1) * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const currentData = data.slice(startRow, endRow);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="view-table">
      <main className="table">
        <section>
          <h1>Customer's Orders</h1>
        </section>
        <section className="table_body">
          <table className="table table-hover">
            <thead>
              <tr>
                {/* <th>Id</th> */}
                <th>Username</th>
                <th>Business Name</th>
                <th>Contact Person</th>
                {/* <th>Status</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((d, i) => (
                <tr key={i}>
                  {/* <td>{d.id}</td> */}
                  <td>{d.username}</td>
                  <td>{d.business_name}</td>
                  <td>{d.contact_person}</td>
                  {/* <td>{d.id}</td> */}
                  <td className="btn-v">
                    <button onClick={() => onViewDetail(d)}>View Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

         {/* Pagination Section */}
        <section className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </section>
      </main> 
    
    </div>
  );
}

export default ViewRegistration;
