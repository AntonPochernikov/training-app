import { registerEnumType } from 'type-graphql'

export enum TestLevelToNumber {
    Basic = 1,
}

export enum TestLevel {
    Basic = 'Basic',
}

registerEnumType(TestLevelToNumber, {
    name: 'TestLevel',
})
