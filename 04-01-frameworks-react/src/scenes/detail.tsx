import React from "react";

// Usamos el hook useParams para recibir los parámetros de la url
// El parámetro :id está definido en el Route de app.tsx
import { Link, useParams } from "react-router-dom";

// Importamos el layout
import { AppLayout } from "@/layouts";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <AppLayout>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <Link to="/list">Back to list page</Link>
    </AppLayout>
  );
};
