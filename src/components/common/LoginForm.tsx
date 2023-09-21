import {Field, FormikProvider, useFormik} from "formik";

export const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm()
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