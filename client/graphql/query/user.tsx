import { User } from "@/gql/graphql";
import { graphql } from "../../gql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);
interface GetCurrentUserResponse {
  getCurrentUser: {
    id: string;
    profileImageURL: string;
    email: string;
    firstName: string;
    lastName: string;
  } ;
}
 
export const getCurrentUserQuery: DocumentNode<GetCurrentUserResponse, {}> = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      profileImageURL
      email
      firstName
      lastName
    }
  }
`);

// getcurrentuser is basically that we generated on opollo server using req and now here we are degfining the what should we want from the front req