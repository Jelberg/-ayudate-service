export default class User {
  _id: String;
  email: String;
  password: String;
  user: String;
  school: String;

  constructor(
    _id: String,
    password: String,
    email: String,
    user: String,
    school: String
  ) {
    (email = this.email),
      (password = this.password),
      (user = this.user),
      (school = this.school);
  }
}
