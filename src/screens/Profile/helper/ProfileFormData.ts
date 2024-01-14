import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Octicons, Ionicons } from 'react-native-vector-icons';

export default [
  { 
    title: 'Dados básicos',
    icon: 'file-document-edit-outline',
    vectorIcon: MaterialCommunityIcons,
    route: 'BasicData',
    key: 'BASIC',
  },
  { 
    title: 'Contato',
    icon: 'person-circle-outline',
    vectorIcon: Ionicons,
    route: 'ContactData',
    key: 'CONTACT',
  },
  { 
    title: 'Endereço',
    icon: 'location-outline',
    vectorIcon: Ionicons,
    route: 'AddressData',
    key: 'ADDRESS',
  },
  // { 
  //   title: 'Igreja',
  //   icon: 'church',
  //   vectorIcon: FontAwesome5,
  //   subItens: ['Igreja local', 'Relação com a igreja', 'Data da entrada', 'Entrada por', 'Igreja de onde veio', 'Já se batizou?', 'Aceitou a Jesus?', 'É lider?', 'É pastor?']
  // },
  // { 
  //   title: 'Dados adicionais',
  //   icon: 'star-fill',
  //   vectorIcon: Octicons,
  //   subItens: ['Escolaridade', 'Profissão', 'Nacionalidade', 'Naturalidade']
  // },
]