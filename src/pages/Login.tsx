import Header from '../layouts/Header';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';

import Input from '../components/inputs/Input';
import ButtonHighLight from '../components/buttons/RaisedButton';

const Login = () => {
  return (
    <>
      <Header disabledBreadcrumb={true} disabledSearch={true} />
      <Main>
        <div>
          <form>
            <fieldset className="flex flex-col gap-6 p-4 border-2 rounded-sm border-tertiary">
              <legend className="px-2 font-bold text-shadow-highlight">
                Login de usuário
              </legend>
              <Input label="Email" type="email" placeholder="Email" value="" />
              <Input
                label="Senha:"
                type="password"
                placeholder="Senha"
                value=""
              />
              <ButtonHighLight text="Entrar:" />
            </fieldset>
          </form>
        </div>
      </Main>
      <Footer disabledLinks={true} />
    </>
  );
};

export default Login;