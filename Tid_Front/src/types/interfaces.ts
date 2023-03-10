import { ReactNode } from "react";

export interface Cliente {
  id?: number | null;
  nome: string;
  ultima_visita: Date;
  cpf: string;
  genero: string;
  telefone: string;
  planoId: number;
  filiacao?: string;
  preco?: number;
}

export interface Plano {
  id?: number | null;
  filiacao: string;
  preco: number;
}

export interface ClienteContextProps {
  clientes: Cliente[];
  setClientes: React.Dispatch<React.SetStateAction<Cliente[]>>

  cliente: Object;
  setCliente: React.Dispatch<React.SetStateAction<Cliente[]>>

  adicionarCliente: (cliente: Object) => Promise<void>;
  deletarCliente: (id: number | null | undefined) => void;
  obterClienteId: (id: number) => Promise<void>;
  editarCliente: (id: number, cliente: Object) => Promise<void>;

  planos: Plano[];
  setPlanos: React.Dispatch<React.SetStateAction<Plano[]>>

  plano: Object;
  setPlano: React.Dispatch<React.SetStateAction<Plano[]>>

  adicionarPlano: (plano: Object) => Promise<void>;
  deletarPlano: (id: number | null | undefined) => void;
  obterPlanoId: (id: number) => Promise<void>;
  editarPlano: (id: number, plano: Object) => Promise<void>;

  mostrarModal: boolean;
  abrirModal: () => void;
  fecharModal: () => void;

}

export interface ContextProviderProps {
  children: ReactNode;
}