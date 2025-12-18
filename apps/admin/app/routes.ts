import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/authLayout.tsx", [
    index("./routes/home.tsx"),
    ...prefix("article", [
      route(":id", "./routes/article/create.tsx"),
      route("database", "./routes/article/database.tsx"),
      route("database/:path/:id", "./routes/article/databaseDetail.tsx"),
    ]),
  ]),
  route("login", "./routes/login.tsx"),
] satisfies RouteConfig;
