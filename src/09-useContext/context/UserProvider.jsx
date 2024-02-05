import { UserContext } from "./UserContext";
const user={
    id:123,
    name:"Jefferson",
    email:"jegor.28.a@gmail.com"
}
UserContext;
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user:user }}>
      {children}
    </UserContext.Provider>
  );
};
