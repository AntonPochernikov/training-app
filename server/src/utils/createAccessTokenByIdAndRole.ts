import jsonwebtoken from 'jsonwebtoken'
import { jsonToken } from 'src/Jwt'
import { UserRole } from 'src/enums'

export const createAccessTokenByIdAndRole = (
    id: string | number,
    role: number,
): string => {
    return jsonwebtoken.sign({ id, role: UserRole[role] }, jsonToken.secret, {
        expiresIn: jsonToken.time,
    })
}
