function flowers(parent, args, context) {
  return context.prisma.user({ id: parent.id }).flowers()
}

module.exports = {
  flowers
}
