import { useState } from "react";
import "./styles.css";
import explorer from "./Data/folderData";
import Folder from "./components/Folder";
import useTraverseNode from "./hooks/use-traverse-tree";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseNode();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  console.log("exploredData is ", explorerData);
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorerData={explorerData} />
    </div>
  );
}
