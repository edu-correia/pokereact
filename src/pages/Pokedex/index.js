import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import api from '../../services/api';
import getIndexFromUrl from '../../utils/getIndexFromUrl';

import PokedexItem from '../../components/PokedexItem';
import Header from '../../components/Header';

import NextImg from '../../assets/icons/next.svg';
import PrevImg from '../../assets/icons/prev.svg';

import './styles.css';

function Pokedex(){
    const [pokemons, setPokemons] = useState([]);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);


    const {page} = useParams();

    useEffect(async () => {
        const {data} = await api.get(`/pokemon?offset=${Number(page)*15}&limit=15`);

        console.log(data.next, data.previous);

        setPokemons(data.results);
        setNext(data.next);
        setPrev(data.previous);
    }, [page]);

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Pokedex */}
            <div className="pokedex">
                {pokemons.map(pokemon => {
                    return (
                        <PokedexItem 
                            index={getIndexFromUrl(pokemon.url)}
                            name={pokemon.name}
                        />
                    )
                })}
                
            </div>

            {/* Paginação */}
            <div className="btns">
                <Link to={prev === null ? '/pokedex/0' : `/pokedex/${Number(page)-1}`} className="prev">
                    <img src={PrevImg} alt="" />
                    <span>Anterior</span>
                </Link>
                <Link to={next === null ? '/pokedex/0' : `/pokedex/${Number(page)+1}`} className="next">
                    <span>Próxima</span>
                    <img src={NextImg} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Pokedex;