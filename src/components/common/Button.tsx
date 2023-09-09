import s from './Button.module.css';

type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
}

export const Button = ({title, callBack, disabled}: ButtonPropsType) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
        <button disabled={disabled} onClick={onClickHandler} className={s.button}>
            {title}
        </button>
    )
}