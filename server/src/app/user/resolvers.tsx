const queries = {
    verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
      // const resultToken = await UserService.verifyGoogleAuthToken(token);
      return token;
    },
  };

export const resolvers={queries};


