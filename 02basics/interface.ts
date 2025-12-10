interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  getCoupon: (couponName: string) => number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const aviral: Admin = {
  email: "a@a.com",
  userId: 1,
  dbId: 10,
  startTrial: () => "Trial started",
  getCoupon: (name: string = "SUMMER10") => 10,
  githubToken: "ghp_12345",
  role: "admin",
};
