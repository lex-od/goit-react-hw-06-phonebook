import css from './styles/App.module.scss';

const App = () => (
    <div className="container">
        <h1 className={css.telBookTitle}>Телефонная книга</h1>
        <h2 className={css.contactsTitle}>Контакты</h2>
    </div>
);

export default App;
