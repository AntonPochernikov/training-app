import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql'
import { Test } from './test.schema'
import { TestService } from './test.service'

@Resolver(() => Test)
export class TestResolver {
    constructor(private readonly testService: TestService) {}
}
