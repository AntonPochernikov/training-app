import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    getGraphqlLink(): string {
        return 'http://localhost:4000/graphql'
    }
}
