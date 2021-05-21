import {Link} from 'react-router-dom';

import './styles.css';

function PokedexItem(props){
    return (
        <Link to={`/pokemon/${props.index}`} className="pokedexItem">
            <img src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${props.index}.png?raw=true`} alt={props.name} />
            <p>{props.name}</p>
        </Link>
    )
}

export default PokedexItem;