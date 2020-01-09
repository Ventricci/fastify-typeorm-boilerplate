import fastify from "fastify";
import { userRoutes } from "./user.route";
import { addressRoutes } from "./address.route";
import { projectRoutes } from "./project.route";

type Routes = fastify.RouteOptions[];

const routes: Routes = [...userRoutes, ...addressRoutes, ...projectRoutes];

export default routes;
