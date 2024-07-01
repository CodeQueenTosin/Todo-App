import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(request, response) {

  if (request.method === 'GET') {
    const todos = await prisma.todo.findMany()
    response.status(200).json(todos)
  } else if (request.method === 'POST') {
    const { title } = request.body
    const todo = await prisma.todo.create({
      data: {
        title,
      },
    })
    response.status(201).json(todo)
  } else if (request.method === 'PUT') {
    const { id, title, completed } = request.body
    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        completed,
      },
    })
    response.status(200).json(todo)
  } else if (request.method === 'DELETE') {
    const { id } = request.body
    await prisma.todo.delete({
      where: {
        id,
      },
    })
    response.status(204).end()
  } else {
    response.status(405).end()
  }
}






