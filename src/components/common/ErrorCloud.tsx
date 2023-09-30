import styles from "./ErrorCloud.module.css";
import React from "react";

type ErrorCloudPropsType = {
    text: string
}

export const ErrorCloud = ({text}: ErrorCloudPropsType) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.error}>{text}</div>
        </div>
    )
}