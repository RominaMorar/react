import css from './Section.module.css';

const Section = (props) => (
        <div className={css.container}>
            {props.children}
        </div>
);

export default Section;