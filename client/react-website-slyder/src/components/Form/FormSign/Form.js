import React, { useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	LogIn,
	LogOut,
	FormButton,
	FormTitle,
} from '../FormSign/Form.elements';
import { Container } from '../../../globalStyles';
import validateForm from './validateForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './Redux/apiRequest';

const Form = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const newUser = validateForm({ name, email, password, confirmPass });

		loginUser(newUser, dispatch, navigate)
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Password',
			value: password,
			onChange: (e) => setPassword(e.target.value),
			type: 'password',
		},
		{
			label: 'Confirm Password',
			value: confirmPass,
			onChange: (e) => setConfirmPass(e.target.value),
			type: 'password',
		},
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Register</FormTitle>
						<FormWrapper onSubmit={handleLogin}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">
								<LogIn>Register</LogIn>
								<LogOut>Sign In</LogOut>
							</FormButton>
						</FormWrapper>
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;
