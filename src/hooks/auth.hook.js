import {useState, useCallback, useEffect} from 'react';

const storageName = 'EpamSlava'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [ava, setAva] = useState(null)
    const [name, setName] = useState(null)

    const login = useCallback((jwtToken, id, ava, name) => {
        setToken(jwtToken)
        setUserId(id)
        setAva(ava)
        setName(name)
        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken,
            userId: id,
            ava: ava,
            name:name,
        }))
    }, [])
    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setAva(null)
        setName(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token, data.userId, data.ava, data.name)
        }
    }, [login])


    return {login, logout, token, userId, ava, name}
}