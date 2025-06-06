

<script>
    if (Math.random() < (1/33000000)) {
      alert("you have been struck by lightning");
    }
</script>


<script>
function darkMode() {
   var element = document.body;
   element.classList.add('dark-mode');
   var element = document.querySelectorAll('.blunderline');
   element.classList.remove('blunderline');
   var element = document.querySelectorAll('.runderline');
   element.classList.remove('runderline');
   
}
</script>    

<script>
let bouncing = false;
let challengeBegin = true;
let loopNum = 0;

function challengeMode() {
	bouncing = true;
	const links = document.querySelectorAll('a');
	const pos = [];

	function posRand() {
		links.forEach((link) => {
		link.style.position = "absolute";
		
		link.style.left = Math.random() * (window.innerWidth - link.offsetWidth) + "px";
		link.style.top = Math.random() * (window.innerHeight - link.offsetHeight) + "px";

	});
	}
	
	function oneToTen() {
		loopNum = Math.floor(Math.random() * 11);
		const buttons = document.querySelectorAll('button');
		
		if (loopNum <= 1) {
			posRand();
			buttons.forEach(btn => {
            btn.style.opacity = 0;
			
        });
		}
		
	function btnHide() {
		buttons.forEach(btn => {
            btn.style.opacity = 1;
			
        });
	}
		
		if (challengeBegin) {
			setTimeout(btnHide, 100);
			setTimeout(oneToTen, 100);
		}
		
	}
	
	oneToTen();
}

function disableChallengeMode() {
	if (bouncing){
		alert("the gods help those who help themselves");
	}
}

</script>