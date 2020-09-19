import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Controlled } from "react-codemirror2";

export default function Editor(props) {
  const { displayName, language, value, onChange } = props;
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? `` : `collapsed`} `}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen((preValue) => !preValue)}>
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineNumbers: true,
          lint: true,
          mode: language,
          lineWrapping: true,
          theme: "material",
        }}
      />
    </div>
  );
}
