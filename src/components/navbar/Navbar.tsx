import style from './Navbar.module.css';
export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </div>
    )
}