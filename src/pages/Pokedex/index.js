import PokedexItem from '../../components/PokedexItem';
import Header from '../../components/Header';

import NextImg from '../../assets/icons/next.svg';
import PrevImg from '../../assets/icons/prev.svg';

import './styles.css';

function Pokedex(){
    

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Pokedex */}
            <div className="pokedex">
                <PokedexItem 
                    index={1}
                    name="Pokemon"
                />

                <PokedexItem 
                    index={2}
                    name="Zeca"
                />
                
            </div>

            {/* Paginação */}
            <div className="btns">
                <a href="#" className="prev">
                    <img src={PrevImg} alt="" />
                    <span>Anterior</span>
                </a>
                <a href="#" className="next">
                    <span>Próxima</span>
                    <img src={NextImg} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Pokedex;