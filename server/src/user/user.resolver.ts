import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserRegistrationInput, UserLoginInput } from './types/inputs'
import { User } from './user.schema'
import { UserService } from './user.service'
import { UserRegistrationOutput, UserLoginOutput } from './types/outputs'
import { loginvalidation } from 'src/validation/loginvalidation'
import { registrationValidation } from 'src/validation/ragistrationValidation'

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => String)
    async hello() {
        return this.userService.sayHello()
    }

    @Query(() => [User])
    async users(@Args('first') first: number) {
        return this.userService.getUsersByLimit(first)
    }

    @Mutation(() => UserRegistrationOutput)
    async userRegistration(
        @Args('data') data: UserRegistrationInput,
    ): Promise<UserRegistrationOutput> {
        await registrationValidation(data)
        return this.userService.userRegistration(data)
    }

    @Mutation(() => UserLoginOutput)
    async userLogin(@Args('data') data: UserLoginInput): Promise<UserLoginOutput> {
        await loginvalidation(data)
        return this.userService.userLogin(data)
    }
}
