import { FontAwesome5, MaterialIcons, Octicons } from 'react-native-vector-icons';

export default [
  { 
    title: 'Dados básicos',
    icon: 'library-books',
    vectorIcon: MaterialIcons,
    editLink: 'BasicData',
  },
  { 
    title: 'Contato',
    icon: 'contact-page',
    vectorIcon: MaterialIcons,
    editLink: 'ContactData',
  },
  { 
    title: 'Endereço',
    icon: 'location-on',
    vectorIcon: MaterialIcons,
    editLink: 'AddressData',
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