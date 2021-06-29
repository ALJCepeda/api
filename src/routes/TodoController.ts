import { API, POST, tokens } from "expressman";
import TodoEntryRepository from "../repositories/TodoEntryRepository";
import {TodoEntry} from "../models/Todo";

@API('/todo')
export default class TodoController {
  constructor(
    private todoEntryRepository: TodoEntryRepository
  ) {}

  @POST('item')
  async POSTTodoItem(payload: TodoEntry): Promise<TodoEntry> {
    console.log(payload);
    const result = await this.todoEntryRepository.insert(payload)
    return result.raw
  }
}