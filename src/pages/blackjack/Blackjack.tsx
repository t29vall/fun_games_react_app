import React from 'react';
import Card from '../../views/card/Card';

class Blackjack extends React.Component {

    constructor(props: any) {

        super(props);

        
    }

    public render() { 

        return (

            <div className="page-container">

                <Card definition={{suit: 'heart', values: [10], visible: true}} />
            </div>
        );
    }
}

export default Blackjack;