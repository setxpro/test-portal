import { ReactNode } from "react";
import SidebarProvider from "../../Contexts/SidebarContext";
import { Container } from "./styles";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <Container>{children}</Container>
    </SidebarProvider>
  );
};

export default Template;
