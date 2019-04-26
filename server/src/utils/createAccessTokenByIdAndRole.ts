import jsonwebtoken from 'jsonwebtoken'
import { jsonToken } from 'src/Jwt'

export const createAccessTokenByIdAndRole = (
    id: string | number,
    role: string,
): string => {
    return jsonwebtoken.sign({ id, role }, jsonToken.secret, {
        expiresIn: jsonToken.time,
    })
}
