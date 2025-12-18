import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div>게이야 여긴 아무것도 없다</div>
      <Link to="/article/database">아티클</Link>
    </div>
  );
}
