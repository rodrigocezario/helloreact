import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  // const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

  function setValor(chave, valor) {
    // chave: nome, descricao, cor
    setValores({
      ...valores,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infoEvento) {
    // setValores(infoEvento.target.value);
    // const { getAttribute, value } = infoEvento.target;
    // setValor(
    //   getAttribute('name'),
    //   value
    // );

    setValor(infoEvento.target.getAttribute('name'), infoEvento.target.value);
  }

  useEffect(() => {
    //console.log('Olá mundo com useeffect');
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacana',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Uma categoria bacana',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmite(infoDoEvento) {
        infoDoEvento.preventDefault();
        // console.log('Você tentou enviar o form.');
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        {/* <div>
              <label>
              Descrição:
              <textarea
              type="text"
              name="descricao"
              value={valores.descricao}
              onChange={handleChange}
              />
              </label>
            </div>

            <div>
              <label>
                Cor:
                <input
                type="color"
                name="cor"
                value={valores.cor}
                onChange={handleChange}
                />
                </label>
            </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
