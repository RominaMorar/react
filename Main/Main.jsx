import css from './Main.module.css';


const Main = () => (
    <section className={css.section}>
      <img className={css.image}
          src="/2.jpg"
          alt="arc"
      />  
      <p>________________________________________________________________________________</p>
        <p className={css.textBold}>
          Welcome to our web-site!
         </p>
         <p className={css.text}>If you are looking for a place to hold an event - our restaurant is the one. We are happy to provide further information over a phone call or a text.</p>
    </section>
);

export default Main;