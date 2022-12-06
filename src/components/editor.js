import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import {
  EditorState,
  convertToRaw,
} from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import ColorPic from './colorPicker';
import { useDispatch } from 'react-redux';
import HtmlToReact from 'html-to-react';
const EditorComp = ({chnageEvent}) => {
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const HtmlToReactParser = HtmlToReact.Parser
  const htmlToReactParser = new HtmlToReactParser();
  useEffect(()=> {
    const draft = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const reactComp = htmlToReactParser.parse(draft);
    const {modifyItem,input,id} = chnageEvent;
    dispatch(modifyItem({key: input.name, value: reactComp, id}))
  },[editorState])
  
  return (
    <div>
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          colorPicker: { component: ColorPic },
        }}
      />
     

    </div>
  );
};

export default EditorComp;