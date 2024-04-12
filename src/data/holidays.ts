interface Props {
  date: Date;
  name: string;
}

export const HOLIDAYS: Props[] = [
  {
    date: new Date("2024-01-01"),
    name: "Año Nuevo",
  },
  {
    date: new Date("2024-01-06"),
    name: "Reyes",
  },
  {
    date: new Date("2024-03-29"),
    name: "Viernes Santo",
  },
  {
    date: new Date("2024-04-01"),
    name: "Lunes de Pascua Florida",
  },
  {
    date: new Date("2024-05-01"),
    name: "Fiesta del Trabajo",
  },
  {
    date: new Date("2024-05-20"),
    name: "Lunes de Pascua Granada",
  },
  {
    date: new Date("2024-06-24"),
    name: "San Juan",
  },
  {
    date: new Date("2024-08-15"),
    name: "La Asunción",
  },
  {
    date: new Date("2024-09-11"),
    name: "Diada Nacional de Cataluña",
  },
  {
    date: new Date("2024-09-24"),
    name: "Virgen de la Merced",
  },
  {
    date: new Date("2024-10-12"),
    name: "Fiesta Nacional de España",
  },
  {
    date: new Date("2024-11-01"),
    name: "Todos los Santos",
  },
  {
    date: new Date("2024-12-06"),
    name: "Día de la Constitución",
  },
  {
    date: new Date("2024-12-25"),
    name: "Navidad",
  },
  {
    date: new Date("2024-12-26"),
    name: "San Esteban",
  },
];
