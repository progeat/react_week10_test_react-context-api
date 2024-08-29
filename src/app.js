import { Header, UserBlock } from './components';
import { AppContext } from './context';
import styles from './app.module.css';

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Иван',
	age: 23,
	email: 'ivan@mail.ru',
	phone: '+7-999-999-99-99',
});

export const App = () => {
	const userData = getUserFromServer();

	return (
		<AppContext.Provider value={userData}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
			</div>
		</AppContext.Provider>
	);
};
