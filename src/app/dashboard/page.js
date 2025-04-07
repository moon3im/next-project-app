import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/route.ts";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return <p>Access Denied</p>;
  }

  return <p>Welcome {session.user?.name}!</p>;
}
