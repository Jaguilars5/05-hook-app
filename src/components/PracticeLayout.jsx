import { BackButton } from "./BackButton";

export const PracticeLayout = ({ children, title }) => {
  return (
    <div style={{ padding: "20px", paddingTop: "70px" }}>
      <BackButton />
      {title && <h2 style={{ marginBottom: "20px" }}>{title}</h2>}
      {children}
    </div>
  );
};
