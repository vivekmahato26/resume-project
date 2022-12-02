import React from 'react'
import { Progress } from 'reactstrap';
import LinearProgress from '@mui/material/LinearProgress';
import PersonalDetails from './personalDetails';

import styles from "../styles/form.module.scss";
import Employment from './employment';

export default function Form() {

    return (
        <div className={styles.container}>
            <p>Title</p>
            <p>Language</p>
            {/* <Progress
                value={50}
            /> */}
            <LinearProgress variant="determinate" value={50} />
            <PersonalDetails />
            <Employment/>
        </div>
    )
}
