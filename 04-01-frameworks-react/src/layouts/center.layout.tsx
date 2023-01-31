// Vamos a crear un diseño que centrará el contenido, este diseño nos permitirá simplificar nuestra página de inicio de sesión:
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const CenterLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-center">{children}</div>
);