const User = {
  type: 'object',
  required: ['email', 'fullName'],
  properties: {
    id: {
      type: 'string',
      description: 'The user id',
    },
    email: {
      type: 'string',
      description: 'The user email',
    },
    fullName: {
      type: 'string',
      description: 'The user full name',
    },
    created_at: {
      type: 'string',
      description: 'The created date',
    },
    updated_at: {
      type: 'string',
      description: 'The updated date',
    },
  },
  example: {
    email: 'test@test.com',
    fullName: 'jane doe',
    created_at: '2020-01-01',
    updated_at: '2020-01-01',
  },
};

const UserSignUpRequest = {
  type: 'object',
  required: ['email', 'fullName', 'password'],
  properties: {
    email: {
      type: 'string',
      description: 'The user email',
    },
    fullName: {
      type: 'string',
      description: 'The user full name',
    },
    password: {
      type: 'string',
      description: 'The user password',
    },
  },
  example: {
    email: 'jane@test.com',
    fullName: 'jane doe',
    password: 'password',
  },
};

const UserLoginRequest = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      description: 'The user email',
    },
    password: {
      type: 'string',
      description: 'The user password',
    },
  },
  example: {
    email: 'jane@test.com',
    password: 'password',
  },
};

module.exports = {
  User,
  UserSignUpRequest,
  UserLoginRequest,
};
