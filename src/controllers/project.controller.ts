import fastify from "fastify";
import { Project } from "../entities/project";
import { User } from "../entities/user";

interface projectController {
  get: fastify.RequestHandler;
  find: fastify.RequestHandler;
  add: fastify.RequestHandler;
  update: fastify.RequestHandler;
  delete: fastify.RequestHandler;
}

let projectController: projectController = {
  get: async (request, reply) => {
    try {
      const projects: Project[] = await Project.find();

      reply.code(200).send(projects);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  find: async (request, reply) => {
    try {
      const project: Project = await Project.findOne({ name: request.params.na });

      reply.code(200).send(project);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  add: async (request, reply) => {
    try {
      const user: User = await User.findOne({
        cpf: request.body.userId
      });
      const response = await Project.insert({ ...request.body, user });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  update: async (request, reply) => {
    try {
      const { id } = request.body;

      const user: User = await User.findOne({
        cpf: request.body.userId
      });
      console.log(user);
      const { userId, ...project } = request.body;

      const response = await Project.update({ id }, { ...project, user });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  delete: async (request, reply) => {
    try {
      const { id } = request.params;

      const response = await Project.delete({ id });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  }
};

export { projectController };
