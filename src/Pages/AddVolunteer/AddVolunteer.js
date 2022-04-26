import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./addvol.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddVolunteer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const result = await axios.post("http://localhost:5000/volunteers", data);
    if (result.data.insertedId) {
      toast("volunteer added successfully");
    }
  };
  return (
    <div className="add-vol">
      <h3 style={{ textAlign: "center", color: "rgb(224, 21, 89)" }}>
        Add Volunteers
      </h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* <input placeholder="Title" {...register("title")} /> */}
        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="Title" {...register("title", { required: true })} />
        <textarea
          cols={30}
          rows={2}
          placeholder="Description"
          {...register("desc", { required: true })}
        />
        <input
          placeholder="Image URL"
          {...register("img", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddVolunteer;
