import { expect, test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('User Can Create New Transaction', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'Freelancer',
    amount: 700,
    type: 'credit',
  })

  expect(response.statusCode).toEqual(201)
})
