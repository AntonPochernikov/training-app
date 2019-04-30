import bcryptjs from 'bcryptjs'
import { EntityRepository, Repository } from 'typeorm'
import uuidJs from 'uuid-js'
import { UserLoginInput, UserRegistrationInput } from './types/inputs'
import { User } from './user.schema'
import { UserRole } from 'src/enums'
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async getUsersByLimit(limit: number): Promise<User[]> {
        try {
            return await User.find({ take: limit })
        } catch (err) {
            throw new Error(err)
        }
    }

    async userRegistration(data: UserRegistrationInput): Promise<User> {
        try {
            const { password, role, ...other } = data
            // encrypt password

            const salt = bcryptjs.genSaltSync(10)
            const passwordBeCrypt = bcryptjs.hashSync(password, salt)

            const emailTaken = await this.findOne({
                where: {
                    email: data.email,
                },
            })

            if (emailTaken) {
                throw new Error('Email is taken')
            }

            const nickNameTaken = await this.findOne({
                where: {
                    nickName: data.nickName,
                },
            })
            if (nickNameTaken) {
                throw new Error('Nickname is taken')
            }

            // generation of a one-time token (Refresh Token) and its rewriting in the database
            const refreshToken = await uuidJs.create(4).toString()

            const user = await this.create({
                ...other,
                refreshToken,
                role: Number(UserRole[role]),
                password: passwordBeCrypt,
            }).save()

            return user
        } catch (err) {
            throw new Error(err)
        }
    }

    async userLogin(data: UserLoginInput): Promise<User> {
        try {
            const { email, password } = data
            // search user in database
            const candidate = await this.findOne({ where: { email } })
            if (!candidate) throw new Error('User not found')

            // password convergence check
            const isValidPassword = await bcryptjs.compareSync(
                password,
                candidate.password,
            )
            if (!isValidPassword) throw new Error('Wrong password')

            // generation of a one-time token (Refresh Token) and its rewriting in the database
            const refreshToken = uuidJs.create(4).toString()
            candidate.refreshToken = refreshToken

            // write new current to base
            await this.update(
                {
                    email,
                },
                { refreshToken },
            )

            return candidate
        } catch (err) {
            throw new Error(err)
        }
    }
}
