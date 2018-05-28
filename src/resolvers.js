export default {
  Query: {
    allUsers: async (parent, args, { User }) => {
      const users = await User.find();
      return users.map(x => {
        x._id = x._id.toString();
        return x;
      })
    }
  },
  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save();
      user._id = user._id.toString();
      return user;
    }
  }
}
