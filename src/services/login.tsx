import { api } from "../api"

export const login = async (email: string, password: string): Promise<boolean> => {
    const md5 = require('md5')
    const data: any = await api

    if(email !== data.email || password !== md5(data.password)) {
        return false
    }

    return true
}
