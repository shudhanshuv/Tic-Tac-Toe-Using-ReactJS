import React from 'react'

class Nav extends React.Component {
    render(){
        const {player1, player2, ties, userName1, userName2} = this.props;

        return(
            <div className="navbar">
                <div className="heading">
                    <h1>Tic Tac Toe</h1>
                </div>

                <div className="status">
                    <h2>
                        {userName1}: {player1}
                    </h2>

                    <h2>
                        {userName2}: {player2}
                    </h2>

                    <h2>
                        Ties: {ties}
                    </h2>
                </div>
            </div>
        )
    }
}

export default Nav;