import React, {useRef} from "react";
import styles from './Sendler.module.css';
import {Button} from "./Button";

type SendlerPropsType = {
    buttonTitle: string;
    callBack: (value: string) => void;
}

export const Sendler = ({callBack, buttonTitle}: SendlerPropsType) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onClickHandler = () => {

        if (textareaRef.current !== null) callBack(textareaRef.current.value);
    }

    return (
        <div className={styles.wrapper}>
            <textarea ref={textareaRef} className={styles.textarea} name="" id=""></textarea>
            <Button callBack={onClickHandler} title={buttonTitle} />
        </div>
    )
}