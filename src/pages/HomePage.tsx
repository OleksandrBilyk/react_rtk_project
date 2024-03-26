import style from "./HomePage.module.css"
const HomePage = () => {
    return (
        <div className={style.Home_page}>
            <h1 className={style.welcome_text}>Welcome to the Home Cinema</h1>
            <div className={style.autorisation}>a window for user authorization that may be added in the future</div>
        </div>
    );
};

export {HomePage};