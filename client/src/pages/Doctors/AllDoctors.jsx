import React, { useEffect } from "react";
import AllDoctorsData from "./DoctorsData.json";
import { NavLink } from "react-router-dom";
import "./AllDoctors.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../redux/actions/doctorAction";

const AllDoctors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const { doctors } = useSelector((state) => state.doctor);
  return (
    <>
      <div className="container doc-container">
        <h4 className="text-center text-success mt-3">
          Select a Doctor and Book an Appointment Now!!
        </h4>
        <div className="d-flex flex-wrap">
          {doctors?.map((d) => (
            <div className="card m-4" key={d._id} style={{ width: "15rem" }}>
              <NavLink to={`/doctors/${d._id}`}>
                <img
                  src={`data:image/jpeg;base64,${d?.image}`}
                  alt="picture"
                  width={150}
                  height={150}
                  className="card-image-top"
                />
                <div className="card-body">
                  <h6>{d.name}</h6>
                  <p>{d.Degree}</p>
                </div>
                <div className="card-footer">
                  <p className="text-muted">
                    <i className={d.icon}></i> {d.experience}
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllDoctors;
