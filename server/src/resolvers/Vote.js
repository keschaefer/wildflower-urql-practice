function flower(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).flower()
}

function user(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).user()
}

module.exports = {
  flower,
  user
}
