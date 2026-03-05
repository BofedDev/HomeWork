import React from 'react';
class Card extends React.Component {
    render () {
        return (

            <div className="card">
                <div className="card-body">
                    {this.props.title &&
                        <h4 className="card-title">hi {this.props.title}</h4>
                    }
                {this.props.text &&
                    <p className="card-text">{this.props.text}</p>
                }
                </div>
            </div>

            );

    }

}

export default Card;