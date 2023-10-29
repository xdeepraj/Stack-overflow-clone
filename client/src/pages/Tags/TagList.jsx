import React from "react";
import "./Tags.css";

const TagList = ({ tag }) => {
  return (
    <div className="tag">
      <h5 className="tag-name">{tag.tagName}</h5>
      <p className="tag-desc">{tag.tagDesc}</p>
    </div>
  );
};

export default TagList;
