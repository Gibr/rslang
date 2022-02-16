export interface teamMate {
  name: string;
  login: string;
  href: string;
  contribution: Array<string>;
}

const team: Array<teamMate> = [
  {
    href: 'https://github.com/Gibr',
    login: 'Gibr',
    name: 'Denis',
    contribution: ['teamlead', 'unit-1', 'unit-2'],
  },
  {
    href: 'https://github.com/kykysja',
    login: 'kykysja',
    name: 'Julia',
    contribution: ['unit-1', 'unit-2'],
  },
  {
    href: 'https://github.com/allyksander',
    login: 'allyksander',
    name: 'Aleksandr',
    contribution: ['unit-1', 'unit-2'],
  },
];

export default team;
