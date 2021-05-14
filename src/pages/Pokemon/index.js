import './styles.css';

function Pokemon(){
    return(
        <div className="content">
            <div className="images">
                <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" className="main-img" />
                <div className="img-versions">
                    <div><img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" /></div>
                    <div><img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" /></div>
                    <div><img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" /></div>
                    <div><img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" /></div>
                    <div><img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" /></div>
                    <div><img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" /></div>
                    <div><img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" /></div>
                    <div><img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true" alt="" /></div>
                </div>
            </div>
            <div className="info">
                <h2>Charizard</h2>
                <div className="powers">
                    <p>Poderes:</p>
                    <div>
                        <span>Solar-power</span>
                        <span>Blaze</span>
                    </div>
                </div>
                <div className="weight">
                    <p>Peso:</p>
                    <span>90 kg</span>
                </div>
                <div className="height">
                    <p>Altura:</p>
                    <span>1.7 m</span>
                </div>
                <div className="stats">
                    <p>Estatísticas:</p>
                    <div>
                        <p>hp</p>
                        <span>100</span>
                    </div>
                    <div>
                        <p>attack:</p>
                        <span>60</span>
                    </div>
                    <div>
                        <p>strength:</p>
                        <span>34</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;