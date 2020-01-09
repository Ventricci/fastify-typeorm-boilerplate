import { projectController } from "../controllers/project.controller";
import fastify from "fastify";

type Routes = fastify.RouteOptions[];

const projectRoutes: Routes = [
  {
    method: "GET",
    url: "/project",
    handler: projectController.get
  },
  {
    method: "GET",
    url: "/project/:iud",
    handler: projectController.find
  },
  {
    method: "POST",
    url: "/project",
    handler: projectController.add
  },
  {
    method: "PUT",
    url: "/project",
    handler: projectController.update
  },
  {
    method: "DELETE",
    url: "/project/:id",
    handler: projectController.delete
  }
];

export { projectRoutes };
