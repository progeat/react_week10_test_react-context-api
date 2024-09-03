import { useEffect } from 'react';
import { Header, UserBlock } from './components';
import { store } from './store';
import styles from './app.module.css';

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Иван',
	age: 23,
	email: 'ivan@mail.ru',
	phone: '+7-999-999-99-99',
});

const getNewUserDataFromServer = () => ({
	id: 'a11101',
	name: 'Вася',
	age: 25,
	email: 'vasya@mail.ru',
	phone: '+7-999-999-99-98',
});

export const App = () => {
	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getNewUserDataFromServer();

		store.dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
	};

	return (
		<div className={styles.app}>
			<Header />
			<hr />
			<UserBlock />
			<button type="button" onClick={onUserChange}>
				Сменить пользователя
			</button>
		</div>
	);
};
