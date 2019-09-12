const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function post(parent, { name, color, location, description, img }, context) {
  // const userId = getUserId(context)
  return context.prisma.createFlower({
    name,
    color,
    location,
    img,
    description,
    postedBy: {
      // connect: {
      //   id: userId
      // }
    }
  })
}

async function signup(parent, args, context) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

async function login(parent, args, context) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user
  }
}

async function vote(parent, args, context) {
  const userId = getUserId(context)
  const flowerExists = await context.prisma.$exists.vote({
    user: { id: userId },
    flower: { id: args.flowerId }
  })
  if (flowerExists) {
    throw new Error(`Already voted for flower: ${args.flowerId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    flower: { connect: { id: args.flowerId } }
  })
}

module.exports = {
  post,
  signup,
  login,
  vote
}
