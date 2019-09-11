function newFlowerSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.flower({ mutation_in: ['CREATED'] }).node()
}

const newFlower = {
  subscribe: newFlowerSubscribe,
  resolve: payload => {
    return payload
  }
}

function newVoteSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  }
}

module.exports = {
  newFlower,
  newVote
}
