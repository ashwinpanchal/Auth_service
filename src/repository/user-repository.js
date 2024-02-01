const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = User.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }
}

module.exports = UserRepository;
