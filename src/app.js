import { Header, UserBlock } from './components';
import styles from './app.module.css';

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Иван',
	age: 23,
	email: 'ivan@mail.ru',
	phone: '+7-999-999-99-99',
});

export const App = () => {
	const { name, age, email, phone } = getUserFromServer();

	return (
		<div className={styles.app}>
			<Header currentUser={name} />
			<hr />
			<UserBlock name={name} age={age} email={email} phone={phone} />
		</div>
	);
};
