export interface ITeamMate {
  id: string;
  name: string;
  login: string;
  href: string;
  contribution: Array<IUnitItem>;
}

export interface IUnitItem {
  id: string;
  unit: string;
}

const team: Array<ITeamMate> = [
  {
    id: 'a1645207999802',
    href: 'https://github.com/Gibr',
    login: 'Gibr',
    name: 'Denis',
    contribution: [
      {
        id: 'd1645208965441',
        unit: 'Teamlead',
      },
      {
        id: 'e1645208988044',
        unit: 'Login/Registration',
      },
      {
        id: 'f1645209011483',
        unit: 'Audio-challenge',
      },
    ],
  },
  {
    id: 'b1645208033865',
    href: 'https://github.com/kykysja',
    login: 'kykysja',
    name: 'Julia',
    contribution: [
      {
        id: 'g1645209041959',
        unit: 'Textbook',
      },
      {
        id: 'h1645209051044',
        unit: 'Sprint',
      },
      {
        id: 'f1645209011483',
        unit: 'Words-API',
      },
      {
        id: 'i1645209083026',
        unit: 'Difficult & learned words',
      },
    ],
  },
  {
    id: 'c1645208047807',
    href: 'https://github.com/allyksander',
    login: 'allyksander',
    name: 'Aleksandr',
    contribution: [
      {
        id: 'i1645209083026',
        unit: 'Main page',
      },
      {
        id: 'j1645209103643',
        unit: 'Forms/popups',
      },
      {
        id: 'f1645209011483',
        unit: 'Style & adaptive',
      },
    ],
  },
];

export default team;
