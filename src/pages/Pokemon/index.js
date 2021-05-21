import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

import './styles.css';

function Pokemon(){ //abilities, name, weight, height, stats, sprites
    const [abilities, setAbilities] = useState([]);
    const [name, setName] = useState("");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [stats, setStats] = useState([]);
    const [sprites, setSprites] = useState([]);
    const {pokemonId} = useParams();

    useEffect(async () => {
        const {data} = await api.get(`/pokemon/${pokemonId}`);

        setAbilities(data.abilities);
        setName(data.name);
        setWeight(data.weight);
        setHeight(data.height);
        setStats(data.stats);

        const sprites = [];
        Object.keys(data.sprites).forEach(key => {
            const value = data.sprites[key];
            if(typeof value === 'string'){
                sprites.push(value);
            }
        })

        setSprites(sprites);
    }, [])

    return(
        <div>
            <Header />
            <div className="content">
                <div className="images">
                    <img src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`} alt="" className="main-img" />
                    <div className="img-versions">
                        {sprites.map(sprite => {
                            return (
                                <div>
                                    <img src={sprite} alt={name}/>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <div className="powers">
                        <p>Poderes:</p>
                        <div>
                            {abilities.map(ability => <span>{ability.ability.name}</span> )}
                        </div>
                    </div>
                    <div className="weight">
                        <p>Peso:</p>
                        <span>{weight/10} kg</span>
                    </div>
                    <div className="height">
                        <p>Altura:</p>
                        <span>{height/10} m</span>
                    </div>
                    <div className="stats">
                        <p>Estatísticas:</p>
                        {stats.map(stat => {
                            return (
                                <div>
                                    <p>{stat.stat.name}:</p>
                                    <span>{stat.base_stat}</span>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;