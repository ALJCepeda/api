import {EntityRepository, Repository} from "typeorm";
import {TodoEntry} from "../models/Todo";

@EntityRepository(TodoEntry)
export default class TodoEntryRepository extends Repository<TodoEntry> {

}