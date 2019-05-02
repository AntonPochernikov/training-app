import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Test } from './test.schema'
import { TestRepository } from './test.repository'
import { TestService } from './test.service'
import { TestResolver } from './test.resolver'

@Module({
    imports: [TypeOrmModule.forFeature([Test, TestRepository])],
    providers: [TestService, TestResolver],
})
export class TestModule {}
