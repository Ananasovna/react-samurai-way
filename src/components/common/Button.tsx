import s from './Button.module.css';

type ButtonPropsType = {
    title: string;
    callBack: () => void;
}

export const Button = ({title, callBack}: ButtonPropsType) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
        <button onClick={onClickHandler} className={s.button}>{title}</button>
    )
}