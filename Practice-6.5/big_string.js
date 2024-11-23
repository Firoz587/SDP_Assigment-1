const checkFriend =(friends) => {
    let bigFriend = friends[0];
    for(let i=0;i<friends.length;i++){
        const element = friends[i];
        if(element.length > bigFriend.length){
            bigFriend = element;
        }
    }
    return bigFriend;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log((checkFriend(friends)));