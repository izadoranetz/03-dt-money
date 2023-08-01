import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logoImg from '../../assets/logo.svg';

export function Header() {

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo DT Money" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    );

}