var friends = ['rahim', 'karim', 'abdul', 'sadsd', 'heroAlom'];
let friend = friends[0];
for(let i=0; i<friends.length; i++)
{
    if (friend.length<friends[i].length){
        friend = friends[i]
    }
}
console.log(friend);