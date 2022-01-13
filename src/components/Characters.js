const fighters = {
    Rook: {
        name: 'Rook',
        type: 'Basic',
        attack: 5, 
        defense: 5,
        speed: 5,
        health: 20,
        moves: [{
            moveName: 'Jab',
            moveType: 'Basic',
            movePower: 40,
            moveAcc: 100
        },
        {
            moveName: 'Slice',
            moveType: 'Basic',
            movePower: 50,
            moveAcc: 100
        }
    ]
    },
    Starr: {
        name: 'Starr',
        type: 'Flame',
        attack: 8,
        defense: 3,
        health: 15,
        moves: [{
            moveName: 'Singe',
            moveType: 'Flame',
            movePower: 40,
            moveAcc: 100
        },
        {
            moveName: 'Hot Hands',
            moveType: 'Flame',
            movePower: 50,
            moveAcc: 100
        }
    ]
    },
    Tartane:{
        name: 'Tartane',
        type: 'Warrior',
        attack: 10,
        defense: 12,
        health: 20,
        moves: [{
            moveName: 'Slam',
            moveType: 'Warrior',
            movePower: 40,
            moveAcc: 100
        },
        {
            moveName: 'Heavy Punch',
            moveType: 'Warrior',
            movePower: 60,
            moveAcc: 90
        }
    ]
    }
}

export default fighters;