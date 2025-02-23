import { auth } from "@/auth";
import { cache } from "react";

// Gets server session from next auth

export const getSession = cache(async () => {
  const session = await auth();
  return session;
});
