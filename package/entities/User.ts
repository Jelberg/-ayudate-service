export default class User {
  _id: String;
  email: String;
  password: String;

  constructor(_id: String, password: String, email: String) {
    (email = this.email), (password = this.password);
  }
}
