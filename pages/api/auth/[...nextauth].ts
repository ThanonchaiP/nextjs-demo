import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findByEmailUser } from "services/user.service";
import argon2 from "argon2";

export default NextAuth({
  //   useSecureCookies: false, // true สำหรับ https เท่านั้นตอน production (false for http)
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, //1 day
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      //type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        //1. เช็คว่ามี user ในระบบหรือไม่
        const user = await findByEmailUser(email);
        if (!user) {
          throw new Error("ไม่พบผู้ใช้นี้ในระบบ");
        }

        //2. ตรวจสอบรหัสผ่านว่าตรงกันหรือไม่
        const isValid = await argon2.verify(user.password, password);
        if (!isValid) {
          throw new Error("รหัสผ่านไม่ถูกต้อง");
        }

        // if everything is fine
        return {
          id: user.id!.toString(),
          name: user.fullname,
          email: user.email,
        };
      },
    }),
  ],
});
