import UsersAPI from "../users";

describe("Users API", () => {
  describe("getUsers", () => {
    it("should get a list of users", async () => {
      const users = await UsersAPI.getUsers();
      expect(users).not.toBeEmpty;
    });
  });
  describe("getUser", () => {
    it("should get a user from an id", async () => {
      const user = await UsersAPI.getUser({
        userId: 10,
      });
      const expected = {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models",
        },
      };
      expect(user).toEqual(expected);
    });
    it("should bring back empty user on unknown id", async () => {
      const user = await UsersAPI.getUser({
        userId: 11,
      });
      const expected = {};
      expect(user).toEqual(expected);
    });
  });
});
