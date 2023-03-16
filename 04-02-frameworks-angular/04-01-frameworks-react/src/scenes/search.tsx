import React from "react";

// Importamos los componentes de mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface Props {
  onSearch: (company: string) => void; // callback prop (para avisar al padre de hacer la búsqueda)
}

// Definimos la interfaz del contexto
interface CompanyContext {
  company: string;
  setCompany: (value: string) => void;
}

// Creamos el contexto
const MyContext = React.createContext<CompanyContext>({
  company: "",
  setCompany: () => {},
});

// Provider del contexto
export const MyContextProvider = (props) => {
  // Inicializamos el filtro con la compañía "lemoncode" para mostrar sus miembros
  const [company, setCompany] = React.useState("lemoncode");

  return (
    <MyContext.Provider value={{ company, setCompany }}>
      {props.children}
    </MyContext.Provider>
  );
};

export const Search: React.FC<Props> = (props) => {
  // Destructuring de las props
  const { onSearch } = props;

  // Usamos el contexto
  const myContext = React.useContext(MyContext);

  // Se hace la carga de datos al montar el componente
  React.useEffect(() => {
    onSearch(myContext.company);
  }, []); // No se vigila 'company' porque solo es cuando se pulse el botón

  return (
    <>
      <div className="search-container">
        <TextField
          name="company"
          placeholder="Compañía"
          onChange={(e) => myContext.setCompany(e.target.value)}
          value={myContext.company}
          size="small"
        />
        <Button
          variant="contained"
          type="submit"
          onClick={() => onSearch(myContext.company)}
        >
          Buscar
        </Button>
      </div>
    </>
  );
};
