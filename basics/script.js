
function player(nickname) {
    this.nickname = nickname;
    this.playedMatch = 0;
}
player.prototype.play = function () {
    this.playedMatch++;
    console.log(this.nickname, this.playedMatch)
}
const gomszab = new player("gomszab1");

console.log(gomszab)



player.prototype.gettierlevel = function () {
    if (this.playedMatch < 4) {
        return "A"
    }
    else if ( this.playedMatch < 7 && this.playedMatch > 3) {
        return "B"
    }
    else {
        return "C"
    }

}
console.log(gomszab.gettierlevel())
gomszab.play();
gomszab.play();
console.log(gomszab.gettierlevel())