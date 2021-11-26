import Folder from "./component/Folder";
import File from "./component/File";
import data from "./data";

const generateHtml = (data, level = 0) => {
  return data.map((item) => {
    if (item.type === "file") {
      return <File label={item.label} level={level} />;
    } else {
      return (
        <Folder label={item.label} level={level}>
          {generateHtml(item.children, level + 1)}
        </Folder>
      );
    }
  });
};

const App = () => {
  return <div className="App">{generateHtml(data)}</div>;
};

export default App;
