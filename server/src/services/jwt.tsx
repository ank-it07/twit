 import JWT from 'jsonwebtoken' 
// import { PrismaClient } from '@prisma/client';
import { User } from "@prisma/client";
const JWT_SECRET="abcd71234";


 class JWTService {
    public static generateTokenForUser(user: User) {
      const payload = {
        id: user?.id,
        email: user?.email,
      };
      const token = JWT.sign(payload, JWT_SECRET);
      return token;
    }
  
    // public static decodeToken(token: string) {
    //   try {
    //     return JWT.verify(token, JWT_SECRET) as JWTUser;
    //   } catch (error) {
    //     return null; 
    //   }
    // }
  }
  
  export default JWTService;