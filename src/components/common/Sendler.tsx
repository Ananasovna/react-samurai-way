import React, {useRef} from "react";
import styles from './Sendler.module.css';
import {Button} from "./Button";

type SendlerPropsType = {
    buttonTitle: string
    callBack: () => void
    onChangeHandler: (text: string) => void
    value: string
}

export const Sendler = ({callBack, buttonTitle, value, onChangeHandler}: SendlerPropsType) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onClickHandler = () => {
        if (textareaRef.current !== null) {
            callBack();
        }
    }

    const onChangeTextareaHandler = () => {
        if (textareaRef.current !== null) {
            onChangeHandler(textareaRef.current.value)
        }

    }

    return (
        <div className={styles.wrapper}>
            <textarea value={value} onChange={onChangeTextareaHandler} ref={textareaRef} className={styles.textarea} name="" id=""></textarea>
            <Button callBack={onClickHandler} title={buttonTitle} />
        </div>
    )
}