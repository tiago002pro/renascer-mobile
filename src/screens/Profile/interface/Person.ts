import { Address } from "./Address";

export interface Person {
  name?: string; 
  gender?: string; 
  dateBirth?: string; 
  maritalStatus?: string; 
  email?: string; 
  cellPhone?: string; 
  phone?: string;
  profileImage?: string;
  address?: Address; 
}