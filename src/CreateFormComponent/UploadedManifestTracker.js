import axios from "axios";
import { useEffect, useState } from "react";

// import { uploadManifestFileApi } from "../../../../api/apiEndpoints";

import fileIcon from "../assets/images/file.svg";
import cancelUploadIcon from "../assets/images/cancel-upload.svg";
import classes from "./UploadedManifestTracker.module.css";

const UploadedManifestTracker = (props) => {
  const { fileDetails, setFetchAgain, removeFile, setFileErrors } = props;
  const [fileProgress, setFileProgress] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      try {
        const data = new FormData();
        data.append("file", fileDetails);
        axios
          .request({
            // url: uploadManifestFileApi,
            method: "post",
            params: {
              createdBy: "Donna",
            },
            data: data,
            signal: controller.signal,
            onUploadProgress: (progress) => {
              const uploaded = (progress.loaded / progress.total) * 100;
              setFileProgress(uploaded);
            },
          })
          .then((res) => {
            console.log("Manifest ERRORS: ", res);
            if (res.data != null && res.data.length > 0) {
              if (
                res.data?.[0].manifestId == null &&
                res.data[0].errors?.[0].httpStatusCode === 200
              ) {
                setFileErrors(null);
                removeFile(fileDetails);
                setFetchAgain(true);
              } else {
                setFileErrors({
                  fileName: fileDetails.name,
                  manifestResponse: res.data,
                });
              }
            }
          });
      } catch (error) {
        if (parseInt(fileProgress) === 100) {
          removeFile(fileDetails);
        } else {
          if (error.error != null) {
            setFileErrors({
              fileName: fileDetails.name,
              criticalError: true,
              manifestResponse: [{ message: error.error }],
            });
          } else {
            setFileErrors({
              fileName: fileDetails.name,
              criticalError: true,
              manifestResponse: [{ message: error }],
            });
          }
        }
      }
    };
    loadData();

    return () => {
      controller.abort();
    };
  }, [fileDetails]);

  return (
    <div className={classes.container}>
      <div className={classes.file}>
        <img src={fileIcon} alt="File" />
        {/* <span>{fileDetails.name}</span> */}
        <span>sacin</span>
      </div>
      <div className={classes.progress}>
        <div>
          <div
            className={classes.tracker}
            style={{
              width: `${parseInt(fileProgress)}%`,
              backgroundColor: "#74a2ef",
            }}
          ></div>
        </div>
        <img
          src={cancelUploadIcon}
          alt="Cancel upload"
          onClick={() => {
            removeFile(fileDetails);
          }}
        />
      </div>
      <p className={classes.uploaded}>Uploaded {fileProgress.toFixed(2)}%</p>
    </div>
  );
};

export default UploadedManifestTracker;
