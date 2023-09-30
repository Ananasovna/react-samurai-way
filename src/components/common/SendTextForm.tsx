import React, {ChangeEvent, useEffect, useState} from "react";
import styles from './SendTextForm.module.css'
import {Button} from "./Button";
import {Field, FormikProvider, useFormik} from "formik";
import {ErrorCloud} from "./ErrorCloud";

type SendTextFormPropsType = {
    buttonTitle: string
    callBack: (text: string) => void
}

type FormikInitialValuesType = {
    text: string
}

export const SendTextForm = ({callBack, buttonTitle}: SendTextFormPropsType) => {

    const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false)

    const validate = (values: FormikInitialValuesType) => {
        const errors: FormikInitialValuesType = {} as FormikInitialValuesType;
        if (!values.text) {
            errors.text = 'Add some text';
            showError();
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            text: '',
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            values.text.length !== 0 && callBack(values.text);
            resetForm();
        }
    })

    const showError = () => {
        setIsErrorVisible(true);
        setTimeout(() => {
            setIsErrorVisible(false)
        }, 5000)
    }

    const onChangeHandler = (e: ChangeEvent) => {
        formik.handleChange(e);
        setIsErrorVisible(false);
    }

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className={styles.wrapper}>
                {isErrorVisible && <ErrorCloud text={formik.errors.text!}/> }
                <Field value={formik.values.text}
                       onChange={onChangeHandler} className={styles.textarea}
                       name="text"
                onBlur={null}/>
                <Button type={'submit'} title={buttonTitle}/>
            </form>
        </FormikProvider>
    )
}