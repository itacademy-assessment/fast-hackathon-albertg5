export type Form = {
	labelConfirmPassword?: string
	labelEmail: string
	labelPassword: string
	labelUserName?: string
	textError: string
	textButtonSignIn?: string
	textButtonSignUp?: string
	errorNoEmailPassword?: string
	error?: string
	errorEmailRepeat?: string
	textSignIn?: string
}

export type FormErrors = {
	isError?: boolean
	noEmailPassword?: boolean
	repeatEmail?: boolean
	register?: boolean
	message?: string
}
