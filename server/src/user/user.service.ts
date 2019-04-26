import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserRegistrationInput, UserLoginInput } from './types/inputs'
import { UserRepository } from './user.repository'
import { User } from './user.schema'
import { UserRegistrationOutput, UserLoginOutput } from './types/outputs'
import { createAccessTokenByIdAndRole } from 'src/utils'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
    ) {}

    sayHello(): string {
        return 'Hello from GraphQL!'
    }

    async getUsers(): Promise<User[]> {
        const users = await this.userRepository.find()
        if (!users) {
            throw new Error('Users not found')
        }
        return users
    }

    async getUsersByLimit(first: number): Promise<User[]> {
        return await this.userRepository.getUsersByLimit(first)
    }

    async userRegistration(data: UserRegistrationInput): Promise<UserRegistrationOutput> {
        const newUser = await this.userRepository.userRegistration(data)
        const accessToken = createAccessTokenByIdAndRole(newUser.id, newUser.role)
        return {
            accessToken,
            user: newUser,
        }
    }

    async userLogin(data: UserLoginInput): Promise<UserLoginOutput> {
        const user = await this.userRepository.userLogin(data)
        const accessToken = createAccessTokenByIdAndRole(user.id, user.role)
        return {
            accessToken,
            user,
        }
    }
}
