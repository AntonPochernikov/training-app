import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql'
import { Test } from './test.schema'
import { TestService } from './test.service'
import { GetTestsInput } from './types/inputs'

@Resolver(() => Test)
export class TestResolver {
    constructor(private readonly testService: TestService) {}

    @ResolveProperty()
    async questions(@Parent() test: Test) {
        const { id } = test
        return await this.testService.getQuestions(id)
    }

    @Query(() => [Test])
    async tests(@Args('data') data: GetTestsInput) {
        const { limit } = data
        return await this.testService.getTestsByLimit(limit)
    }
}
