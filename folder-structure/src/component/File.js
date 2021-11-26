const File = ({ label, level }) => {
  return (
    <div style={{ marginLeft: level * 10 + "px", cursor: "pointer" }}>
      File: {label}
    </div>
  );
};

export default File;
