import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateQuestion {
    @Field()
    title: string

    @Field()
    text: string

    @Field()
    level: number
}
