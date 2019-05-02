import { EntityRepository, Repository } from 'typeorm'
import { Test } from './test.schema'

@EntityRepository(Test)
export class TestRepository extends Repository<Test> {}
