/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice,gamePlaying;

init();

//dice=Math.floor(Math.random()*6)+1;

//document.querySelector('#current-'+activeplayer).textContent=dice;
//document.querySelector('#current-'+activeplayer).textContent='<em>'+dice+ '</em>';
//document.querySelector('#name-0').style.display='none';
// var a=document.querySelector('#current-0').textContent;
// console.log(a);





document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlaying){
			//random number

		dice=Math.floor(Math.random()*6)+1;

		//display the result

		var diceDom=document.querySelector('.dice');
		diceDom.style.display='block';
		diceDom.src='dice-'+dice+'.png';

		/// update round score

		if(dice!==1){
			roundScore+=dice;
			document.querySelector('#current-'+ activeplayer).textContent=roundScore;
		}else{
			nextplayer();
		}
	}
	

});


document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlaying){

		scores[activeplayer]+=roundScore;
		//console.log(scores[activeplayer]);


		////////////////////////Update UI

		document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];

		/// if player won the game
		if(scores[activeplayer]>=20){
			document.querySelector('#name-'+activeplayer).textContent='WINNER!';
			document.querySelector('.dice').style.display='none';
			document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
			gamePlaying=false;

		}else{
			// Next player
			nextplayer();
		}

	}
	

});


document.querySelector('.btn-new').addEventListener('click',init);



function nextplayer(){
		activeplayer===0 ? activeplayer= 1 : activeplayer= 0;
		roundScore=0;

		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display='none';
}


function init(){
	scores=[0,0];
	roundScore=0;
	activeplayer=0;
	gamePlaying=true;
	document.querySelector('.dice').style.display='none';

	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}