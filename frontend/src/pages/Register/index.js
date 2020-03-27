import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default function Register(){
    const history                   = useHistory();
    const [name, setName]           = useState('');
    const [email, setEmail]         = useState('');
    const [whatsapp, setWhatsapp]   = useState('');
    const [city, setCity]           = useState('');
    const [uf, setUf]               = useState('');

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{
            const response = await api.post('ongs', data);
            alert(`Seu Id de acesso: ${response.data}`);
            history.push('/');
        }catch(err){
            alert("Erro no cadastro, tente novamente!");
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="The Big Hero"/>
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas
                        a encontrarem os casos da sua ONG.
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                        name={name}
                        onChange={ e => setName(e.target.value) } 
                    />
                    <input type="email" placeholder="E-mail" 
                        name={email}
                        onChange={ e => setEmail(e.target.value) } 
                    />
                    <input type="text" placeholder="Whatsapp" 
                        name={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value) } 
                    />
                    <div className="input-group">
                        <input type="text" placeholder="Cidade"
                            name={city}
                            onChange={ e => setCity(e.target.value) } 
                        />
                        <input type="text" placeholder="UF" style={{ width: 80 }}
                            name={uf}
                            onChange={ e => setUf(e.target.value) } 
                        />
                    </div>
                    <button className="button-danger" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}