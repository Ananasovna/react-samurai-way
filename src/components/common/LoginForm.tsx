import {Field, FormikProvider, useFormik} from "formik";

type LoginFormPropsType = {
    onSubmit: (formData: LoginFormDataType) => void
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe?: boolean | undefined
}

export const LoginForm = ({onSubmit}: LoginFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: (values, {resetForm}) => {
            onSubmit(values);
            resetForm();
        },
    });

    return (
        <div>
            <h1>Login</h1>
            <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <Field placeholder="Email" {...formik.getFieldProps("email")}/>
                </div>
                <div>
                    <Field placeholder="Password" {...formik.getFieldProps('password')}/>
                </div>
                <div>
                    <Field type='checkbox' onChange={formik.handleChange} name='rememberMe'/>
                </div>
                <button type={'submit'}>Login</button>
            </form>
            </FormikProvider>
        </div>
    )
}