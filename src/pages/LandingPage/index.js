import AshImage from '../../assets/ash.png';

import './styles.css';

function LandingPage(){
    return (
        <div>
            <div className="lp-header">
                <h1>POKEREACT</h1>
                <p>1118 pokemons capturados pelo site até o momento!</p>
            </div>
            <div className="lp-description">
                <p>Segure sua pokebola e entre no catálogo de todos os pokemons existentes!</p>
                <a href="/pokedex">Entrar</a>
            </div>
            <img src={AshImage} alt="Ash" className="lp-img" />
        </div>
    )
}

export default LandingPage;