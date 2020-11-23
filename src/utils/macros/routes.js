import { ICONS } from 'src/__jscash__/icons-names-list';

i18n

export const ROUTES = {
  welcome: {
    path: '/',
    name: 'welcome',
    label: 'Strona startowa',
    shortLabel: 'Strona startowa',
    icon: ICONS.sensor_door,
  },
  about: {
    path: '/about',
    name: 'about',
    label: 'O nas',
    shortLabel: 'O nas',
    icon: ICONS.emoji_objects,
  },
  signIn: {
    path: '/sign-in',
    name: 'sign-in',
    label: 'Logowanie',
    shortLabel: 'Logowanie',
    icon: ICONS.login,
  },
  signUp: {
    path: '/sign-up',
    name: 'sign-up',
    label: 'Rejestracja',
    shortLabel: 'Rejestracja',
    icon: ICONS.how_to_reg,
  },
  remindPassword: {
    path: '/remind-password',
    name: 'remind-password',
    label: 'Przypomnij hasło',
    shortLabel: 'Przypomnij hasło',
    icon: ICONS.vpn_key,
  },
  changePassword: {
    path: '/user/remind/',
    pathWithParam: '/user/remind/:key',
    name: 'change-password',
    label: 'Zmień hasło',
    shortLabel: 'Zmień hasło',
    icon: ICONS.create,
  },
  start: {
    path: '/start',
    name: 'start',
    label: 'Start',
    shortLabel: 'Start',
    icon: ICONS.home,
  },
  temporaryPoints: {
    path: '/temporary-points',
    name: 'temporary-points',
    label: 'Wydarzenia czasowe',
    shortLabel: 'Czasowe',
    icon: ICONS.watch_later,
  },
  collectPoint: {
    path: '/collect-point',
    name: 'collect-point',
    label: 'Zbierz punkt',
    shortLabel: 'Zbierz pkt',
    icon: ICONS.star,
  },
  collectedPoints: {
    path: '/collected-points',
    name: 'collected-points',
    label: 'Zebrane punkty',
    shortLabel: 'Zebrane',
    icon: ICONS.view_list,
  },
  map: {
    path: '/map',
    name: 'map',
    label: 'Mapa',
    shortLabel: 'Mapa',
    icon: ICONS.map,
  },
  editEvent: {
    path: '/edit-event',
    name: 'edit-event',
    label: 'Edytowanie wydarzenia',
    shortLabel: 'Wydarzenie',
    icon: ICONS.edit,
  },
};
