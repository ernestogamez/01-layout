import React from "react";

// Importamos generatePath para crear la url de los detalles de la lista
import { Link, generatePath } from "react-router-dom";

// Importamos el layout
import { AppLayout } from "@/layouts";

// Importamos los componentes de mui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

// Importamos el componente de búsqueda
import { Search } from "./search";

// Creamos una interfaz para tener tipada nuestra lista
interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  // Handle para manejar la búsqueda de miembros
  const handleSearch = (company: string) => {
    fetch(`https://api.github.com/orgs/${company}/members`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error al recuperar los miembros");
        }
      })
      .then((json) => setMembers(json))
      .catch(() => {});
  };

  return (
    <AppLayout>
      <Search onSearch={handleSearch}></Search>

      <List>
        {members.map((member) => (
          <>
            <Link to={generatePath("/detail/:id", { id: member.login })}>
              <ListItem key={member.id} disablePadding>
                <ListItemButton role={undefined} dense>
                  <ListItemAvatar>
                    <Avatar alt={member.login} src={member.avatar_url} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={member.login}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
          </>
        ))}
      </List>
    </AppLayout>
  );
};
