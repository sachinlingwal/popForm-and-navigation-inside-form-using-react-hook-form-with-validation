import React from "react";
import styles from "./OrganizationInfo.module.css";
import { useForm } from "react-hook-form";
import { SchemaOrgInfo } from "./SchemaOrgInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import UploadManifest from "./UploadManifest";

//to use this for form component install react-hook-form(npm i react-hook-form),hookform/resolver(npm i @hookform/resolvers) and
//react-icons(npm i react-icons)

const OrganizationInfo = () => {
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaOrgInfo),
  });
  console.log(errors);

  // const [data, setData] = React.useState({});

  const registerHandler = (data) => {
    //use this function for api call
    console.log(data);
    // setData(data);
    reset(); //reset function is for resetting field values after form submission
  };

  return (
    <form onSubmit={handleSubmit(registerHandler)} autoComplete="off">
      <div className={styles.main_container}>
        <div className={styles.column_one}>
          <div className={styles.input_field_div}>
            <p>Organization Name*</p>
            <input
              type="text"
              placeholder="Enter organization name"
              name="organizationame"
              {...register("organizationame")}
              style={{
                border: errors.organizationame?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>
              {errors.organizationame?.message}
            </p>
          </div>
          <div className={styles.input_field_div}>
            <p>Address*</p>
            <input
              type="text"
              placeholder="Enter Address"
              name="address"
              {...register("address")}
              style={{
                border: errors.address?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.address?.message}</p>
          </div>
          <div className={styles.input_field_div}>
            <p>Country*</p>
            <input
              type="text"
              placeholder="Enter Country"
              name="country"
              {...register("country")}
              style={{
                border: errors.country?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.country?.message}</p>
          </div>
          <div
            className={styles.input_field_div}
            style={{ marginBottom: "3em" }}
          >
            <p>Email*</p>
            <input
              className={errors.email?.message && "errors-msgs-border"}
              type="email"
              placeholder="Enter email"
              name="email"
              {...register("email")}
              style={{
                border: errors.email?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.email?.message}</p>
          </div>
        </div>
        <div className={styles.column_two}>
          <div className={styles.input_field_div}>
            <p>Website</p>
            <input
              type="text"
              placeholder="Enter Website URL"
              name="website"
              {...register("website")}
              style={{
                border: errors.website?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.website?.message}</p>
          </div>
          <div className={styles.input_field_div}>
            <p>Region</p>
            <input
              type="text"
              placeholder="Enter region"
              name="region"
              {...register("region")}
              style={{
                border: errors.region?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.region?.message}</p>
          </div>
          <div className={styles.input_field_div}>
            <p>Zipcode*</p>
            <input
              type="number"
              placeholder="Enter zipcode"
              name="zipcode"
              {...register("zipcode")}
              style={{
                border: errors.zipcode?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.zipcode?.message}</p>
          </div>

          <div className={styles.input_field_div}>
            <p>Phone Number*</p>
            <input
              type="number"
              placeholder="Enter phone number"
              name="phonenumber"
              {...register("phonenumber")}
              style={{
                border: errors.phonenumber?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.phonenumber?.message}</p>
          </div>
        </div>
      </div>

      <div className={styles.uploadInputAvatar}>
        <p>Upload Logo / Avatar</p>
        <UploadManifest />
      </div>

      <div className={styles.footer}>
        <button type="reset">Cancel</button>
        <button>Save & Next</button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default OrganizationInfo;
