import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Arena Palmeiras",
        data: "20/10/2018",
        horario: "19h"
    },
    casa: {
        nome: "Palmeiras"
    },
    visitante: {
        nome: "Corinthians"
    }
};

export default class App extends React.Component {
    render() {
        return <PlacarContainer {...dados}/>
    }
}