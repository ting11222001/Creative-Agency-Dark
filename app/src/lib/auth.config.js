export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    // add user info into session
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      // return false; // it will force the app to redirect users to the login page.
      
      // console.log(auth);
      // console.log(request);

      const user = auth?.user;
      // console.log(request.nextUrl.pathname);
      
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;  // redirect users to the login page.
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      if (isOnBlogPage && !user) {
        return false;  // redirect users to the login page.
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl)); 
        // redirect to home page
        // request.nextUrl is the base url
      }

      return true;
    }
  },
}