import { useState } from "react";

const Folder = ({ label, level, children }) => {
  const [folderOpen, setFolderOpen] = useState(false);

  const handleDoubleClick = (e) => {
    setFolderOpen((prevState) => !prevState);
  };

  return (
    <div style={{ marginLeft: level * 10 + "px", cursor: "pointer" }}>
      <div onDoubleClick={handleDoubleClick}>Folder: {label}</div>
      {folderOpen === true && children}
    </div>
  );
};

export default Folder;
