import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    await app.listen(4000).then(() => {
        // tslint:disable-next-line: no-console
        console.log(`Server started on http://localhost:4000/graphql`)
    })
}
bootstrap()
