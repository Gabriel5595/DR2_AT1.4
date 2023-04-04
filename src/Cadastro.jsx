import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setEndereco(response.data.logradouro);
    setBairro(response.data.bairro);
    setCidade(response.data.localidade);
    setEstado(response.data.uf);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        CEP:
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
        />
      </label>

      <label>
        Endereço:
        <input type="text" value={endereco} readOnly />
      </label>

      <label>
        Bairro:
        <input type="text" value={bairro} readOnly />
      </label>

      <label>
        Cidade:
        <input type="text" value={cidade} readOnly />
      </label>

      <label>
        Estado:
        <input type="text" value={estado} readOnly />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Cadastro;
