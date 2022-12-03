import React from 'react'
import Form from '../components/form'
import Resume from '../components/resume'

import styles from "../styles/home.module.scss"
export default function Home() {
    return (
        <div className={styles.container}>
            <Form />
            <Resume />
        </div>
    )
}
