import { login } from "./login"

describe('login', () => {

    const mockEmail = 'junior@dio.bank'
    const mockPassword = '123456';

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com', mockPassword)
        expect(response).toBeFalsy()
    })

    it('Deve exibir um erro caso a senha seja inválida', async() => {
        const response = await login(mockEmail, '234553')
        expect(response).toBeFalsy()
    })
})