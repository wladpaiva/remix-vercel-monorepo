import newHelper from "framework";
import bcrypt from "bcryptjs";

export default function Index() {
  bcrypt.hash("123", 10);

  return <h1>printed from framework: {newHelper()}</h1>;
}
