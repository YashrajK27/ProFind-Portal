import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const ResumeModel = ({ imageUrl, onClose }) => {
  return (
    <>
      <div className="resume-model">
        <div className="model-content">
          <span className="close" onClick={onClose}>
            <IoMdCloseCircle />
          </span>
          <img src={imageUrl} alt="resume" />
        </div>
      </div>
    </>
  );
};

export default ResumeModel;
