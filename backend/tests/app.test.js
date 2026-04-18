const request = require("supertest");
const app = require("../src/app");

describe("Backend API Tests", () => {
  test("GET / returns welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello from DevOps Backend! ??");
  });
  test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
  test("GET /api/projects returns array", async () => {
    const res = await request(app).get("/api/projects");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
