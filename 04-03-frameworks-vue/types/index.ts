// Es el tipado de los datos de los miembros que devolverá el servicio

// Importante exportar la interfaz para usarlo!

export interface Member {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  company: string;
  name: string;
  twitter_username: string;
  blog: string;
}
