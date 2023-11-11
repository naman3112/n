import { useState } from "react";

function Folder({ explorerData, handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });
  const handleNewFolder = (e, isFolder) => {
    console.log("button is clicked");
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
    e.stopPropagation();
  };
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  console.log("i am in Folder component s", explorerData);
  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className="folder"
          onClick={() => {
            console.log("event bubbledu[");
            setExpand(!expand);
          }}
        >
          <span>&#x1F4C1; {explorerData.name}</span>
          <div>
            <button onClick={handleNewFolder}>Folder +</button>
            <button>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>`{" "}
              <input
                onKeyDown={onAddFolder}
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className="inputContainer__input"
              />
            </div>
          )}
          {explorerData.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorerData={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file"> &#x1F4C4; {explorerData.name} </span>;
  }
}

export default Folder;
