import React from 'react'
import { Progress } from 'reactstrap';
import LinearProgress from '@mui/material/LinearProgress';
import PersonalDetails from './personalDetails';

import styles from "../styles/form.module.scss";
import Employment from './employment';

import { useSelector } from 'react-redux';

import { addItem, modifyItem, deleteItem } from '../redux/slice/employmentSlice';
import { addItem as eduAdd, modifyItem as eduModify, deleteItem as eduDelete } from '../redux/slice/educationSlice';
import { addItem as intAdd, modifyItem as intModify, deleteItem as intDelete } from '../redux/slice/internshipSlice';
import { addItem as courseAdd, modifyItem as courseModify, deleteItem as courseDelete } from '../redux/slice/coursesSlice';
import { addItem as referenceAdd, modifyItem as referenceModify, deleteItem as referenceDelete } from '../redux/slice/referenceSlice';
import { addItem as extraCurrAdd, modifyItem as extraCurrModify, deleteItem as extraCurrDelete } from '../redux/slice/extracurricSlice';
import { addItem as langAdd, modifyItem as langModify, deleteItem as langDelete } from '../redux/slice/languagesSlice';
import { addItem as linksAdd, modifyItem as linksModify, deleteItem as linksDelete } from '../redux/slice/linksSlice';

export default function Form() {
    const employmentState = useSelector(state => state.employment.value);
    const educationState = useSelector(state => state.education.value);
    const internshipState = useSelector(state => state.internship.value);
    const coursesState = useSelector(state => state.courses.value);
    const referencesState = useSelector(state => state.reference.value);
    const extraCurricState = useSelector(state => state.extracurrics.value);
    const languagesState = useSelector(state => state.languages.value);
    const linksState = useSelector(state => state.links.value);


    const employment = {
        title: "Employment History",
        desc: "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
        form: {
            title: { name: "jobTitle", value: "Job Title" },
            subTitle: { name: "employer", value: "Employer" },
            start: { name: "start", value: "Start Date" ,type:"date",col:3},
            end: { name: "end", value: "End Date" ,type:"date",col:3},
            city: { name: "city", value: "City" , col: 6},
            desc: { name: "decs", value: "Description", type:"textarea" }
        },
        redux: {
            state: employmentState,
            actions: {
                addItem,
                deleteItem, 
                modifyItem
            }
        }

    }
    const extracurrics = {
        title: "Extra-curricular Activities",
        desc: "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
        form: {
            title: { name: "name", value: "Name" },
            subTitle: { name: "organisation", value: "Organisation" },
            start: { name: "start", value: "Start Date" ,type:"date",col:3},
            end: { name: "end", value: "End Date" ,type:"date",col:3},
            city: { name: "city", value: "City" , col: 6},
            desc: { name: "decs", value: "Description", type:"textarea" }
        },
        redux: {
            state: extraCurricState,
            actions: {
                addItem:extraCurrAdd,
                deleteItem:extraCurrDelete, 
                modifyItem:extraCurrModify
            }
        }

    }
    const internShip = {
        title: "Internship History",
        desc: "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
        form: {
            title: { name: "internship", value: "Internship Title" },
            subTitle: { name: "employer", value: "Employer" },
            start: { name: "start", value: "Start Date" ,type:"date",col:3},
            end: { name: "end", value: "End Date" ,type:"date",col:3},
            city: { name: "city", value: "City" , col: 6},
            desc: { name: "decs", value: "Description", type:"textarea" }
        },
        redux: {
            state: internshipState,
            actions: {
                addItem: intAdd,
                deleteItem: intDelete, 
                modifyItem: intModify
            }
        }

    }

    const education = {
        title: "Education History",
        desc: "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
        form: {
            title: { name: "school", value: "School" },
            subTitle: { name: "degree", value: "Degree" },
            start: { name: "start", value: "Start Date" , type:"date"},
            end: { name: "end", value: "End Date", type:"date" },
            city: { name: "city", value: "City" },
            desc: { name: "decs", value: "Description",type:"textarea" }
        },
        redux: {
            state: educationState,
            actions: {
                addItem : eduAdd,
                deleteItem : eduDelete, 
                modifyItem : eduModify
            }
        }

    }
    const courses = {
        title: "Courses",
        form: {
            title: { name: "school", value: "School" },
            subTitle: { name: "degree", value: "Degree" },
            start: { name: "start", value: "Start Date" , type:"date"},
            end: { name: "end", value: "End Date", type:"date" },
        },
        redux: {
            state: coursesState,
            actions: {
                addItem : courseAdd,
                deleteItem : courseDelete, 
                modifyItem : courseModify
            }
        }

    }
    const refernce = {
        title: "References",
        form: {
            title: { name: "name", value: "Referent's Full Name" },
            subTitle: { name: "company", value: "Company" },
            start: { name: "phone", value: "Phone" },
            end: { name: "email", value: "Email" },
        },
        redux: {
            state: referencesState,
            actions: {
                addItem : referenceAdd,
                deleteItem : referenceDelete, 
                modifyItem : referenceModify
            }
        }

    }
    const languages = {
        title: "Languages",
        form: {
            title: { name: "name", value: "Language" },
            subTitle: { name: "proficiency", value: "Proficiency" },
        },
        redux: {
            state: languagesState,
            actions: {
                addItem : langAdd,
                deleteItem : langDelete, 
                modifyItem : langModify
            }
        }

    }
    const links = {
        title: "Websites & Social Links",
        form: {
            title: { name: "name", value: "Websites & Social Link" },
            subTitle: { name: "url", value: "URL" },
        },
        redux: {
            state: linksState,
            actions: {
                addItem : linksAdd,
                deleteItem : linksDelete, 
                modifyItem : linksModify
            }
        }

    }

    return (
        <div className={styles.container}>
            <p>Title</p>
            <p>Language</p>
            {/* <Progress
                value={50}
            /> */}
            <LinearProgress variant="determinate" value={50} />
            <PersonalDetails />
            <Employment data={employment} />
            <Employment data={education} />
            <Employment data={internShip} />
            <Employment data={courses} />
            <Employment data={refernce} />
            <Employment data={links} />
            <Employment data={languages} />
            <Employment data={extracurrics} />
            <br />
            <br />
            <br />
        </div>
    )
}
