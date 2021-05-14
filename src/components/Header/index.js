import {useHistory} from 'react-router';

import BackImg from '../../assets/icons/arrow-left.svg';

import './styles.css';

function Header(){
    const history = useHistory();

    return(
        <div className="hd-comp">
            <button className="back" onClick={() => history.goBack()}>
                <img src={BackImg} alt="Voltar" />
                <span>Voltar</span>
            </button>
            <p>POKEREACT</p>
        </div>
    )
}

export default Header;