import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const UserPersonalInfo = () => {
	const { userData, dispatch } = useContext(AppContext);
	const { name, age } = userData;

	const onUserDataUpdate = () => {
		const newUserData = getNewUserDataFromServer();

		dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};

	return (
		<div>
			<h3>Персональные данные:</h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<button onClick={onUserDataUpdate}>Обновить данные пользователя</button>
		</div>
	);
};
