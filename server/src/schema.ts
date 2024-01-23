export const typeDefs = `#graphql
  type User {
    id:       String
    email:    String 
    name:     String
    password: String
    ads: [Ad]
  }

  type Ad {
    id: String
    title:     String
    content:   String
    published: Boolean
    user:      [User]
  }


  type Query {
    userGetAll: User
    userGetById (id : ID): [User] 
  }
`;


export const resolvers = {
  Query: {
    userGetAll: () => [],
    userGetById: async (parent: any, args: any, context: any) => {
      const { prisma } = context;
      return await prisma.user.findFirst({
        where: {
          id: args.id,
        },
      });
    },
  },
};