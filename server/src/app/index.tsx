import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from "../clients/db";
import { User } from "./user";

export async function initserver() {
  const app = express();

  app.use(bodyParser.json());
  


  const garphqlServer = new ApolloServer({
    typeDefs: `
        ${User.types}
        type Query {
            ${User.queries}
        }
    `,
    resolvers: {
        Query:{
            ...User.resolvers.queries,
        },
    },
  });
  await garphqlServer.start();

  app.use("/graphql", expressMiddleware(garphqlServer));

  return app;
}
