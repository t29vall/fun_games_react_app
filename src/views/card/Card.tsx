import React from 'react';
import './Card.scss';
import spade_img from '../../images/card_spade.jpg';
import diamond_img from '../../images/card_diamond.jpg';
import heart_img from '../../images/card_heart.jpg';
import club_img from '../../images/card_club.jpg';

interface CardProps {

    definition: { 
        suit: string, 
        values: number[], 
        visible: boolean
    }
}

interface CardState {}

class Card extends React.Component<CardProps, CardState> {

    private static suiteMap: any = {
        'heart': heart_img,
        'diamond': diamond_img,
        'club': club_img,
        'spade': spade_img
    }

    public suit: any;

    constructor(props: any) {

        super(props);

        this.suit = {
            name: props.definition.suit, 
            image: Card.suiteMap[props.definition.suit]
        };

        this.state = {

        }
    }

    public render() {

        return (
            
            <div className="card-container">
                <img src={this.suit.image} />
            </div>
        );
    }
}

export default Card;