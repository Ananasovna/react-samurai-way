import s from './Preloader.module.css';

export const Preloader = () => {
    const preloader = '/assets/gif/Preloader.gif';

    return <div className={s.preloader}><img src={preloader} alt="loading"/></div>
}
