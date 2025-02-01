console.log('hello world');

const getStart = document.getElementById('gets');
const joinNow = document.getElementById('joinn');

getStart.addEventListener('click', function(){
    alert('Hey bro, you have clicked the "Get Started" button!');
    console.log('You have clicked the "Get Started" button!');    
});
joinNow.addEventListener('click', function(){
    alert('Hey bro, you have clicked the "Join Now" button!');
    console.log('You have clicked the "Join Now" button!');    
});

