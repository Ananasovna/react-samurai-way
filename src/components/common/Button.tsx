import s from './Button.module.css';

type ButtonPropsType = {
    title: string
    callBack?: () => void
    disabled?: boolean
    type?: "button" | "submit" | "reset" | undefined
}

export const Button = ({title, callBack, disabled, type}: ButtonPropsType) => {

    const onClickHandler = () => {
        callBack && callBack();
    }

    return (
        <button type={type} disabled={disabled} onClick={onClickHandler} className={s.button}>
            {title}
        </button>
    )
}