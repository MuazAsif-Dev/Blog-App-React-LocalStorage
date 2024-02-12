import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Formats, Modules } from "../../assets/Constants";

const Editor = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={Modules}
      formats={Formats}
    />
  );
};

export default Editor;
