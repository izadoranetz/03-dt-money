import * as Dialog from '@radix-ui/react-dialog';
import { Overlay, Content, CloseButton } from './styles';
import { X } from 'phosphor-react';

export function NewTransactionModel() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transações</Dialog.Title>
        <CloseButton>
            <X />
        </CloseButton>
        <form>
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />
            <button type="submit">
                Cadastrar
            </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
