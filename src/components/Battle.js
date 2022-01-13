const useMove = (player, enemy) => {
    let rand = Math.floor(Math.random() * player.moves.length)
    let damage = Math.floor(player.moves[rand].movePower * (player.attack/100))
    if (player.moves[rand].moveType == player.type) {
        damage = Math.floor(damage * 1.5)
    }
    enemy.health = enemy.health - damage
    console.log(`${player.name} uses ${player.moves[rand].moveName}.`)
    console.log(`${player.moves[rand].moveName} deals ${damage} points of damage to ${enemy.name}.`)
    console.log(`${enemy.name} has ${enemy.health} hitpoints remaining.`)
    console.log('-----------------------------------')
}

const battleScenario = (player, enemy) => {
    let winner = ''
    while (player.health > 0 || enemy.health > 0) {
        useMove(player, enemy)
        if (player.health <= 0) {
            winner = enemy
            break
        } else if (enemy.health <= 0) {
            winner = player
            break
        } else {
            let temp = player
            player = enemy
            enemy = temp
        }
    }
    console.log(`${winner.name} has won the battle!`)
}