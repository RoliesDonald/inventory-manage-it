const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvicer({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { lable: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // check if credentials are correct
          if (!credentials?.email || !credentials?.password) {
            console.log("not Inputs");
            return null;
          }

          // check if user exist
          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          });
          if (!existingUser) {
            console.log("No User Found");
            return;
          }
        } catch (error) {}
      },
    }),
  ],
};

export { authOptions };
