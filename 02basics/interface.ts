interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  getCoupon: (couponName: string) => number;
}

const aviral: User = {
  email: "a@a.com",
  userId: 1,
  dbId: 10,
  startTrial: () => "Trial started",
  getCoupon: (name: string = "SUMMER10") => 10
};
