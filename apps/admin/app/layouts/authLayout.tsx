import { Outlet } from "react-router";
import axios from "../utils/axios";
import { redirect } from "react-router";
import type { Route } from "./+types/authLayout";

export async function loader({ request }: Route.ActionArgs) {
  try {
    const cookies = request.headers.get("cookie") || "";
    await axios.get("/auth/me", {
      headers: {
        Cookie: cookies,
      },
    });
    return null;
  } catch {
    return redirect("/login");
  }
}

export default function AuthLayout() {
  return <Outlet />;
}
