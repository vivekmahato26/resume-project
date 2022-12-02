import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTemplate } from '../redux/slice/templateSlice';
import Template1 from './resumes/template1'
import Template2 from './resumes/template2';

export default function Resume() {
  const dispatch = useDispatch();
  const selectedTemplate = useSelector(state => state.template.value)
  const [template,setTemplate] = useState(<Template1/>);
  const updateTemplate = () => {
    dispatch(selectTemplate(selectedTemplate == "template1" ? "template2" : "template1"))
    setTemplate(selectedTemplate == "template1" ? <Template1/> : <Template2/>)
  }

  return (
    <div>
      <button onClick={updateTemplate}>Select Template</button>
      {template}
    </div>
  )
}
