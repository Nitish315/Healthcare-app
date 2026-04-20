import React, { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import "./AllDoctors.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../redux/actions/doctorAction";

const AllDoctors = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctor);

  // --- Local Filter State ---
  const [filters, setFilters] = useState({
    speciality: "",
    maxFees: "",
    search: "",
  });

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  // --- Filter Logic ---
  // useMemo ensures we only recalculate the list when doctors or filters change
  const filteredDoctors = useMemo(() => {
    if (!doctors) return [];

    return doctors.filter((doc) => {
      const docSpec = doc.specialization || "General Physician";
      const matchesSpec = filters.speciality === "" || docSpec === filters.speciality;
      const matchesFees = filters.maxFees === "" || Number(doc.fees || 500) <= Number(filters.maxFees);
      const matchesSearch = doc.name.toLowerCase().includes(filters.search.toLowerCase());

      return matchesSpec && matchesFees && matchesSearch;
    });
  }, [doctors, filters]);

  // Get unique specialities for the dropdown dynamically
  const specialities = [...new Set(doctors?.map((d) => d.specialization || "General Physician"))];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container py-5 doc-container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Expert Doctors</h2>
          <p className="text-muted col-lg-6 mx-auto">
            Choose from our experienced specialists and book your appointment quickly and easily.
          </p>
        </div>

        {/* --- Filter Bar --- */}
        <div className="row g-3 mb-5 p-3 bg-white shadow-sm rounded-3 border">
          <div className="col-md-5">
            <label className="form-label small fw-bold">Search Doctor</label>
            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Search by name..."
              value={filters.search}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-bold">Speciality</label>
            <select
              name="speciality"
              className="form-select"
              value={filters.speciality}
              onChange={handleFilterChange}
            >
              <option value="">All Specialities</option>
              {specialities.map((s, index) => (
                <option key={index} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label small fw-bold">Max Fees (₹)</label>
            <input
              type="number"
              name="maxFees"
              className="form-control"
              placeholder="e.g. 1000"
              value={filters.maxFees}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="row g-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((d) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                key={d._id}
              >
                <div className="card h-100 shadow-sm border-0 doctor-card">
                  <NavLink
                    to={`/doctors/${d._id}`}
                    className="text-decoration-none text-dark"
                  >
                    {/* Image */}
                    <div className="text-center p-3">
                      <img
                        src={`data:image/jpeg;base64,${d?.image}`}
                        alt="doctor"
                        className="img-fluid rounded-circle doctor-img"
                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                      />
                    </div>

                    {/* Body */}
                    <div className="card-body text-center">
                      <h6 className="fw-bold mb-1">{d.name}</h6>
                      <p className="text-muted mb-1 small">{d.Degree}</p>

                      <p className="small text-primary mb-1 fw-bold">
                        {d.specialization || "General Physician"}
                      </p>

                      <p className="small text-muted mb-1">
                        💼 Experience: {d.experience}
                      </p>

                      <p className="small text-muted mb-1">
                        💰 Fees: ₹{d.fees || 500}
                      </p>

                      <p className="small text-success mb-1">
                        🟢 Available Today
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="card-footer text-center bg-white border-0 pb-3">
                      <button className="btn btn-sm btn-primary w-100 rounded-pill">
                        Book Appointment
                      </button>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <h5 className="text-muted">No doctors found matching your criteria.</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllDoctors;