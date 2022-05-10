const { useForm } = require('react-hook-form');
import P from 'prop-types';

const FormLogin = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form">
      <div id="login">
        <section id="container-logo">
          <img src="./logo.png" alt="" />
        </section>
        <section>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Seu email..."
            {...register('email')}
          />
        </section>
        <section>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            required
            name="password"
            placeholder="Sua senha..."
            {...register('password')}
          />
        </section>
        <section id="container-button">
          <button>Entrar</button>
        </section>
      </div>
    </form>
  );
};

FormLogin.propTypes = {
  onSubmit: P.func,
};

export default FormLogin;
