import React, { useEffect, useState } from "react";
import styles from "./CreateForm.module.css";
import { FiX } from "react-icons/fi";

import OrganizationInfo from "./OrganizationInfo";
import IdamDetails from "./IdamDetails";

function CreateForm(props) {
  const { onRequestClose } = props;

  const orgInfoIDAMDetail = [
    { id: 1, name: "Organization Info" },
    { id: 2, name: "IDAM Details" },
  ];
  //state for navigation orgInfo and IDAM info
  const [selected, setSelected] = useState("");
  const changeColor = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    changeColor(1);
  }, []);
  return (
    <div className={styles.App}>
      <div className={styles.main_form_container}>
        <div className={styles.header}>
          <div>
            <span>Create Organization</span>
          </div>
          <div style={{ cursor: "pointer" }}>
            <FiX size={30} color="#9c9c9c" onClick={onRequestClose} />
          </div>
        </div>
        <div className={styles.miniheader}>
          <div className={styles.miniheaderitem}>
            {orgInfoIDAMDetail.map((item) => {
              const { name, id } = item;
              return (
                <span
                  key={id}
                  onClick={() => changeColor(id)}
                  style={{
                    borderBottom:
                      selected === id ? "3px solid #5484C0" : "white",
                    paddingBottom: selected === id ? "0.7em" : "",
                  }}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.body}>
          {selected === 1 ? (
            <OrganizationInfo onRequestClose={onRequestClose} />
          ) : selected === 2 ? (
            <IdamDetails onRequestClose={onRequestClose} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
