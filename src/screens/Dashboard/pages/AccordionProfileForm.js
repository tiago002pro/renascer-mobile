import { FontAwesome5, MaterialIcons, Octicons } from 'react-native-vector-icons';

export default [
  { 
    title: 'Dados básicos',
    icon: 'library-books',
    vectorIcon: MaterialIcons,
    subItens: ['Nome completo', 'Sexo', 'Data de nascimento', 'Estado civil']
  },
  { 
    title: 'Contato',
    icon: 'location-on',
    vectorIcon: MaterialIcons,
    subItens: ['Endereço', 'E-mail', 'Celunar', 'Telefone']
  },
  { 
    title: 'Igreja',
    icon: 'church',
    vectorIcon: FontAwesome5,
    subItens: ['Igreja local', 'Relação com a igreja', 'Data da entrada', 'Entrada por', 'Igreja de onde veio', 'Já se batizou?', 'Aceitou a Jesus?', 'É lider?', 'É pastor?']
  },
  { 
    title: 'Dados adicionais',
    icon: 'star-fill',
    vectorIcon: Octicons,
    subItens: ['Escolaridade', 'Profissão', 'Nacionalidade', 'Naturalidade']
  },
]