import React from "react";

// Importamos useNavigate para navegar desde JavaScript
import { useNavigate } from "react-router-dom";

// Importamos el layout
import { CenterLayout } from "@/layouts";

// Importamos los componentes de mui
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  // Guardamos en el estado el valor de username y la clave
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Para que no haga post a servidor tenemos que decirle que no realice ese comportamiento por defecto
  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Si el user = admin y pass = test pasa al listado, si no error
    if (username === "admin" && password === "test") {
      navigate("./list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <CenterLayout>
      <Card sx={{ padding: "20px" }} variant="outlined">
        <CardHeader title="Bienvenido" />
        <CardContent>
          {/* // Vamos a meterlo dentro de un formulario, porque así lo hacemos más
      accesible y por ejemplo el botón de envío se ejecuta al pulsar enter. */}
          <form onSubmit={handleNavigation}>
            <div>
              <div>
                <TextField
                  name="username"
                  placeholder="Usuario"
                  onChange={(e) => setUsername(e.target.value)}
                  variant="standard"
                  margin="dense"
                />
              </div>
              <div>
                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                  margin="dense"
                />
              </div>
            </div>
            <div>
              <Button variant="outlined" type="submit" sx={{ marginTop: 2 }}>
                Iniciar sesión
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </CenterLayout>
  );
};
