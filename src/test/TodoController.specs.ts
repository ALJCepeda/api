import { request, expect } from 'chai'
import {getApp} from "./bootstrap";
import { endOfTomorrow } from 'date-fns';

describe('TodoController', () => {
  describe('/POST /todo/item', () => {
    it('should create a ToDo item', async function() {
      this.timeout(0)
      const app = await getApp()

      request(app)
        .post('/todo/item')
        .send({
          title: 'Test todo',
          description: 'This todo was made for testing',
          expiration: endOfTomorrow()
        })
        .end((err, resp) => {
          expect(resp.status).to.eql(200)
          console.log(resp.body)
        })
    })
  })
})