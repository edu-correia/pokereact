import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import AshImage from '../../assets/ash.png';

import './styles.css';

function LandingPage(){
    const [qtdeDePokemons, setQtdeDePokemons] = useState(0);

    useEffect(async () => {
        const {data} = await api.get('/pokemon');

        setQtdeDePokemons(data.count);
    }, []);

    return (
        <div>
            <div className="lp-header">
                <h1>POKEREACT</h1>
                <p>{qtdeDePokemons} pokemons capturados pelo site até o momento!</p>
            </div>
            <div className="lp-description">
                <p>Segure sua pokebola e entre no catálogo de todos os pokemons existentes!</p>
                <Link to="/pokedex/0">Entrar</Link>
            </div>
            <img src={AshImage} alt="Ash" className="lp-img" />
        </div>
    )
}

export default LandingPage;