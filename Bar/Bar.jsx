import css from "./Bar.module.css";

const Bar = () => (
    <div className={css.container}>
        <p className={css.logo}>
            Restaurant Elegant 
        </p>
        <ul className={css.list}>
            <li className={css.item}>
                Home
            </li>
            <li className={css.item}>
                About
            </li>
            <li className={css.item}>
                Contact
            </li>
        </ul>
    </div>
);

export default Bar;