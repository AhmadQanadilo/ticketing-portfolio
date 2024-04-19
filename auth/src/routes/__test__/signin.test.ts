import request from "supertest";
import { app } from "../../app";

it("should fail with status of 400 when a not registered user is trying to login", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "user@example.com",
      password: "password",
    })
    .expect(400);
});
