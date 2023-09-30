import {Field, FormikProvider, useFormik} from "formik";
import * as Yup from 'yup';
import styles from './LoginForm.module.css';
import {Button} from "../common/Button";
import {ErrorCloud} from "../common/ErrorCloud";

type LoginFormPropsType = {
    onSubmit: (formData: LoginFormDataType) => void
    appError: string | null
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe?: boolean | undefined
}

export const LoginForm = ({onSubmit, appError}: LoginFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(4, 'Must be 4 characters or more')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        },
    });

    return (
        <div className={styles.wrapper}>
            {appError && <ErrorCloud text={appError}/> }
            <h1>Login</h1>
            <FormikProvider value={formik}>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.fieldWrapper}>
                        {formik.touched.email && formik.errors.email && <ErrorCloud text={formik.errors.email}/>}
                        <Field placeholder="Email" {...formik.getFieldProps("email")}/>

                    </div>
                    <div className={styles.fieldWrapper}>
                        {formik.touched.password && formik.errors.password &&
                            <ErrorCloud text={formik.errors.password}/>}
                        <Field placeholder="Password" {...formik.getFieldProps('password')}/>
                    </div>
                    <div>
                        <Field type='checkbox' onChange={formik.handleChange} name='rememberMe'/>
                    </div>
                    <div className={styles.fieldWrapper}>

                        <Button title={'Login'} type={'submit'}/>
                    </div>
                </form>
            </FormikProvider>
        </div>
    )
}