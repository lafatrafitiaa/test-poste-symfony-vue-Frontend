import Utilisateur from "./utilisateur.model";


/**
 * interface de mapping des attributs d'un message
 */
export default interface Message {
  id: number;
  person: Utilisateur;
  date?: Date;
  contenue: string;
  lu?: boolean;
  current?: boolean;
}
