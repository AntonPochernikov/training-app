import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserRegistrationInput, UserLoginInput } from './types/inputs'
import { User } from './user.schema'
import { UserService } from './user.service'
import { UserRegistrationOutput, UserLoginOutput } from './types/outputs'

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
        return this.userService.userRegistration(data)
    }

    @Mutation(() => UserLoginOutput)
    async userLogin(@Args('data') data: UserLoginInput): Promise<UserLoginOutput> {
        return this.userService.userLogin(data)
    }
}
