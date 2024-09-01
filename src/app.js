import { useEffect, useState } from 'react';
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

const getNewUserDataFromServer = () => ({
	id: 'a11101',
	name: 'Вася',
	age: 25,
	email: 'vasya@mail.ru',
	phone: '+7-999-999-99-98',
});

export const App = () => {
	// const userData = getUserFromServer();
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		setUserData(userDataFromServer);
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getNewUserDataFromServer();

		setUserData(anotherUserDataFromServer);
	};

	const dispatch = (action) => {
		const { type, payload } = action;

		switch (type) {
			case 'SET_USER_DATA': {
				setUserData(payload);
				break;
			}
			case 'SET_USER_AGE': {
				setUserData({
					...userData,
					age: payload,
				});
				break;
			}
			default:
			// ничего не делать
		}
	};

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
				<button type="button" onClick={onUserChange}>
					Сменить пользователя
				</button>
			</div>
		</AppContext.Provider>
	);
};
