export const authenticateUser = (email, password) => {
  // Mock authentication; replace with real API calls in production
  const users = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    {
      email: "instructor@example.com",
      password: "instructor123",
      role: "instructor",
    },
    { email: "sp@c.com", password: "1", role: "student" },
  ];

  const user = users.find((u) => u.email === email && u.password === password);

  return user ? { role: user.role, name: user.email.split("@")[0] } : null;
};
