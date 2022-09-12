import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [companyList, setCompanyList] = useState([]);
  const getCompanyDetails = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/v1/company/");
      setCompanyList(response.data);
      console.log("the response is===", response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCompanyDetails();
  }, []);
  return (
    <div className="App">
      {companyList.map((data) => (
        <div className="box">
          <h3>{data.Company_name}</h3>
          <div className="box2">
            <h5>
              Location:
              <span style={{ color: "blue", marginLeft: ".5rem" }}>
                {data.location}
              </span>
            </h5>
            <h5>
              Type:{" "}
              <span style={{ color: "blue", marginLeft: ".5rem" }}>
                {data.type}
              </span>{" "}
            </h5>
          </div>
          <div>
            <h5>
              About:{" "}
              <span style={{ color: "red", marginLeft: ".5rem" }}>
                {data.about}
              </span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
