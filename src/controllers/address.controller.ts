import fastify from "fastify";
import { Address } from "../entities/address";

interface addressController {
  get: fastify.RequestHandler;
  find: fastify.RequestHandler;
  add: fastify.RequestHandler;
  update: fastify.RequestHandler;
  delete: fastify.RequestHandler;
}

let addressController: addressController = {
  get: async (request, reply) => {
    try {
      const addresses: Address[] = await Address.find();

      reply.code(200).send(addresses);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  find: async (request, reply) => {
    try {
      const address: Address = await Address.findOne({
        id: request.params.id
      });

      reply.code(200).send(address);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  add: async (request, reply) => {
    try {
      const response = await Address.insert(request.body);

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  update: async (request, reply) => {
    try {
      const { id } = request.body;

      const address = await Address.update({ id }, request.body);

      reply.status(200).send(address);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  delete: async (request, reply) => {
    try {
      const { id } = request.params;

      const address = await Address.delete({ id });

      reply.status(200).send(address);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  }
};

export { addressController };
