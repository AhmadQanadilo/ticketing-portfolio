import request from "supertest";
import { app } from "../../app";

it("should return 201 for successful signup", async () => {
  request(app)
    .post("/api/users/signup")
    .send({
      email: "user@example.com",
      password: "password",
    })
    .expect(201);
});
