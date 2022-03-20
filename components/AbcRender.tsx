import React, { useEffect, useRef, useState } from 'react'

interface AbcRenderProps {
  abc: string
}

export default function AbcRender(props: AbcRenderProps) {
  const abcInputRef = useRef(null)
  const [value, setValue] = useState(props.abc)
  const [abcEditor, setAbcEditor] = useState(null)
  useEffect(() => {
    const abcjsInit = async () => {
      const abcjs = await import("abcjs");
      const abc_editor = new abcjs.Editor("abc", { 
        canvas_id: "paper", 
        warnings_id:"warnings" 
      });
      setAbcEditor(abc_editor)
    };
    abcjsInit();
  }, []);

  useEffect(() => {
    if (abcEditor) {
      // FIXME: just to rerender the editor with the new 
      abcEditor.paramChanged()
    }
  }, [props.abc, abcEditor])

  return (
    <>
      <textarea
        style={{visibility:"hidden"}}
        id="abc"
        value={props.abc}
      />
      <div id="warnings"></div>
      <div id="paper"></div>
      {/* <div id="audio"></div><button className="activate-audio">Activate Audio</button>
      <div id="midi-download"></div>
      <button className="start">Start</button> */}
    </>
  )
}
