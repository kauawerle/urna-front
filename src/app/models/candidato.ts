import { Cargo } from "./enums/cargos";
import { Status } from "./enums/status";

export class Candidato {
  id !: number;
  nome_completo !: string;
  cpf !: string;
  codigoUnico!: number;
  cargo!: Cargo
  status!: Status
}
