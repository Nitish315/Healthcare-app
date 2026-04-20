import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDoctor,
  getDoctorDetails,
  updateDoctor,
  updateStatus,
} from "../../redux/actions/doctorAction";
import InputForm from "../../components/Forms/InputForm";
import InputSelect from "../../components/Forms/InputSelect";
import toast from "react-hot-toast";

const DoctorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDoctorDetails(id));
  }, [dispatch, id]);

  const { doctor, success, error } = useSelector((state) => state.doctor);
  const [edit, setEdit] = useState(true);

  const [name, setName] = useState(doctor?.name);
  const [email, setEmail] = useState(doctor?.email);
  const [image, setImage] = useState(doctor?.image);
  const [speciality, setSpeciality] = useState(doctor?.speciality);
  const [experience, setExperience] = useState(doctor?.experience);
  const [degree, setDegree] = useState(doctor?.degree);
  const [about, setAbout] = useState(doctor?.about);
  const [fees, setFees] = useState(doctor?.fees);
  const [address, setAddress] = useState(doctor?.address);
  const [gender, setGender] = useState(doctor?.gender);
  const [phone, setPhone] = useState(doctor?.phone);
  const [dob, setDob] = useState(doctor?.dob);

  useEffect(() => {
    if (doctor) {
      setName(doctor?.name);
      setEmail(doctor?.email);
      setImage(doctor?.image);
      setSpeciality(doctor?.speciality);
      setExperience(doctor?.experience);
      setDegree(doctor?.degree);
      setAbout(doctor?.about);
      setAddress(doctor?.address);
      setFees(doctor?.fees);
      setGender(doctor?.gender);
      setPhone(doctor?.phone);
      setDob(doctor?.dob);
    }
  }, [doctor]);

  //Update
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("about", about);
    formData.append("speciality", speciality);
    formData.append("fees", fees);
    formData.append("experience", experience);
    formData.append("degree", degree);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("image", image);
    formData.append("gender", gender);
    formData.append("dob", dob);
    dispatch(updateDoctor({ id, formData }));
    if (success) {
      toast.success("Doctor Updated");
      navigate("/all-doctors");
    }
    if (error) {
      toast.error(error);
    }
  };
  //Delete Doctor
  const handleDelete = () => {
    const confirm = window.confirm("Are You Sure Want to Delete This Doctor ?");
    if (confirm) {
      dispatch(deleteDoctor(id));
    }
    if (success) {
      toast.success("Doctor Deleted!");
      navigate("/all-doctors");
    }
    if (error) {
      toast.error(error);
    }
  };

  const handleUpdateStatus = (id,availableStatus)=>{
    dispatch(updateStatus({id,availableStatus}))
    if (success) {
      toast.success("Doctor Status Updated!");
      navigate("/all-doctors");
    }
    if (error) {
      toast.error(error);
    }
  }
  return (
    <Layout>
      <div className="d-flex p-3 justify-content-between bg-light">
        <h1>Doctor Details</h1>
        <div className="ms-auto">
          <button
            className="btn btn-warning ms-3"
            onClick={() => setEdit(!edit)}
          >
            {edit ? "EDIT" : "CANCEL"}
          </button>
          <button
            className="btn btn-danger ms-3"
            onClick={() => handleDelete(doctor?._id)}
          >
            DELETE
          </button>
        </div>
      </div>
      <div className="w-75">
        <img
          // src={`data:image/jpeg;base64,${d?.image}`}
          src={
            doctor?.image
              ? `data:image/jpeg;base64,${doctor.image}`
              : "https://via.placeholder.com/50"
          }
          alt="docimage"
          className="bg-info border rounded-3"
          height={250}
          width={250}
        />
        <InputForm
          label={"Name"}
          value={name}
          setValue={setName}
          disabled={edit}
        />
        <InputForm
          label={"Email"}
          value={email}
          setValue={setEmail}
          disabled={edit}
        />
        <InputForm
          label={"Degree"}
          value={degree}
          setValue={setDegree}
          disabled={edit}
        />
        <InputSelect
          label={"Speciality"}
          value={speciality}
          setValue={setSpeciality}
          disabled={edit}
          options={["Select Speciality", "General", "Dental", "Mental", "Eye"]}
        />
        <InputSelect
          label={"Gender"}
          value={gender}
          setValue={setGender}
          disabled={edit}
          options={["Select Gender", "Male", "Female"]}
        />
        <InputForm
          label={"DOB"}
          value={dob}
          setValue={setDob}
          disabled={edit}
        />
        <InputForm
          label={"Experience"}
          value={experience}
          disabled={edit}
          setValue={setExperience}
        />
        <InputForm
          label={"Fees"}
          value={fees}
          setValue={setFees}
          disabled={edit}
        />
        <InputForm
          label={"About"}
          value={about}
          setValue={setAbout}
          disabled={edit}
        />
        <InputForm
          label={"Phone"}
          value={phone}
          setValue={setPhone}
          disabled={edit}
        />
        <InputForm
          label={"Address"}
          value={address}
          setValue={setAddress}
          disabled={edit}
        />
        <div className="mb-3">
          <label htmlFor="form-label">Select Image File:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
          />
        </div>
        <div className="flex" style={{ marginBottom: "50px" }}>
          <button
            className="btn btn-primary"
            onClick={() => handleUpdate(doctor?._id)}
          >
            UPDATE DOCTOR
          </button>
          {doctor?.available ?(<button
            className="btn btn-danger"
            onClick={() => handleUpdateStatus(doctor?._id,{availableStatus:"false"})}
          >
            MARK AS UN-AVAILABLE
          </button>):(<button
            className="btn btn-success"
            onClick={() => handleUpdateStatus(doctor?._id,{availableStatus:"true"})}
          >
            MARK AS AVAILABLE
          </button>)}
        </div>
      </div>
    </Layout>
  );
};

export default DoctorDetails;
