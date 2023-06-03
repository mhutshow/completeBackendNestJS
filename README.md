<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Task Management API Documentation

This documentation provides an overview of the Task Management API, implemented using NestJS. The API allows you to manage tasks with various statuses. The main data structure used in the API is the `Task` object, which has the following properties:

## Task Object

```typescript
export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}
```

The `Task` object represents an individual task in the system. It contains the following properties:

- `id` (string): A unique identifier for the task.
- `title` (string): The title or name of the task.
- `description` (string): A description or additional details about the task.
- `status` (TaskStatus): The current status of the task. It is an enumeration defined as `TaskStatus`.

## TaskStatus Enumeration

```typescript
export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}
```

The `TaskStatus` enumeration represents the possible statuses that a task can have. It includes the following values:

- `OPEN`: The task is open and has not been started yet.
- `IN_PROGRESS`: The task is currently being worked on.
- `DONE`: The task has been completed.

## API Endpoints

The Task Management API provides the following endpoints for managing tasks:

### GET /tasks

Retrieve a list of all tasks in the system.

#### Response

- Status code: 200
- Body: An array of `Task` objects representing the tasks in the system.

### GET /tasks/{id}

Retrieve a specific task by its ID.

#### Parameters

- `id` (string): The unique identifier of the task to retrieve.

#### Response

- Status code: 200
- Body: The `Task` object representing the retrieved task.

### POST /tasks

Create a new task.

#### Request Body

- Body: The `Task` object representing the task to be created.

#### Response

- Status code: 201
- Body: The `Task` object representing the created task.

### PUT /tasks/{id}

Update an existing task by its ID.

#### Parameters

- `id` (string): The unique identifier of the task to update.

#### Request Body

- Body: The `Task` object representing the updated task properties.

#### Response

- Status code: 200
- Body: The `Task` object representing the updated task.

### DELETE /tasks/{id}

Delete a specific task by its ID.

#### Parameters

- `id` (string): The unique identifier of the task to delete.

#### Response

- Status code: 204

## Conclusion

This documentation provides an overview of the Task Management API implemented using NestJS. It describes the structure of the `Task` object, the `TaskStatus` enumeration, and the available API endpoints for managing tasks. With this API, you can perform operations such as retrieving tasks, creating new tasks, updating task details, and deleting tasks.
