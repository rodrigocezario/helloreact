import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  //const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

  function setValor(chave, valor){
    //chave: nome, descricao, cor
    setValores({
      ...valores,
      [chave]: valor, //nome: 'valor'
    });
  }

  function handleChange(infoEvento){
    //setValores(infoEvento.target.value);
    // const { getAttribute, value } = infoEvento.target;
    // setValor(
    //   getAttribute('name'), 
    //   value
    // );

   setValor(infoEvento.target.getAttribute('name'), infoEvento.target.value);
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {valores.nome}</h1>

          <form onSubmit={function handleSubmite(infoDoEvento){
            infoDoEvento.preventDefault();
            //console.log('Você tentou enviar o form.');
            setCategorias([
              ...categorias,
            valores
            ]);

            setValores(valoresIniciais);
          }}>

          <FormField 
            label="Nome da categoria"
            type="text"
            name="nome"
            value={valores.nome} 
            onChange={handleChange}
          />

          <FormField 
            label="Descrição da categoria"
            type="text"
            name="descricao"
            value={valores.descricao} 
            onChange={handleChange}
          />

          <FormField 
            label="Cor da categoria"
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

            <button>
              Cadastrar
            </button>
          </form>

          <ul>
              {categorias.map((categoria, indice) => {
                return (
                  <li key={`${categoria}${indice}`}>
                    {categoria.nome}
                  </li>
                )
              })}
          </ul>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;