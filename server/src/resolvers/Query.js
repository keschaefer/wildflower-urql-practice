async function feed(parent, args, context) {
  const count = await context.prisma
    .flowers({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    })
    .aggregate()
    .count()
  const flowers = await context.prisma.flowers({
    where: {
      OR: [{ name_contains: args.filter }, { img_contains: args.filter }]
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  return {
    count,
    flowers
  }
}

module.exports = {
  feed
}
