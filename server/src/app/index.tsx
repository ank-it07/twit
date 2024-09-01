import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";

import { User } from "./user";
import { GraphqlContext } from "../interface";
import JWTService from "../services/jwt";

export async function initserver() {
  const app = express();

  app.use(bodyParser.json());

  app.use(cors());

  const garphqlServer = new ApolloServer<GraphqlContext>({
    typeDefs: `
        ${User.types}
        type Query {
            ${User.queries}
        }
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
    },
  });
  await garphqlServer.start();

  app.use(
    "/graphql",
    expressMiddleware(garphqlServer, {
      context: async ({ req, res }) => {
        return {
          user: req.headers.authorization
            ? JWTService.decodeToken(req.headers.authorization.split('Bearer ')[1])
            : undefined,
          
        };
      },
    })
  );

  return app;
}
