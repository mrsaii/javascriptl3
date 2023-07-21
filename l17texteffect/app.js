// Get Ui
const languages = ['Nodejs','Reactjs','Vuejs','Laravel'];
const colors = ['red','skyblue','violet','yellow'];
const gettxtani = document.querySelector('.txtani');

// console.log(languages[0]);
// console.log(languages[1]);
// console.log(languages[2]);
// console.log(languages[3]);

// console.log(languages.indexOf('Nodejs'));  //o
// console.log(languages.indexOf('Laravel')); //3
// console.log(colors[languages.indexOf('Nodejs')]);  //red



// function* abc(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// const testnum = abc();

// console.log(testnum.next().value); //1
// console.log(testnum.next().value); //2
// console.log(testnum.next().value); //3
// console.log(testnum.next().value); //undefined





// Generator Function (iterate from to 3)

function* generator(){

	var index = 0;

	while(true){

		yield index++;

		if(index > 3){
			index=0;
		}
	}
}


const testnumber = generator();

// console.log(testnumber.next()); //obj {vale:0,done:flase} (before we use if function)
// console.log(testnumber.next()); //obj {vale:1,done:flase} (before we use if function)
// console.log(testnumber.next()); //obj {vale:2,done:flase} (before we use if function)
// console.log(testnumber.next()); //obj {vale:3,done:flase} (before we use if function)
// console.log(testnumber.next()); //obj {vale:4,done:flase} (before we use if function)

// console.log(testnumber.next().value); //0
// console.log(testnumber.next().value); //1
// console.log(testnumber.next().value); //2
// console.log(testnumber.next().value); //3
// console.log(testnumber.next().value); //0



let genfun = generator();

showwords(languages[genfun.next().value]);

function showwords(word){

	// console.log(word);

	var x = 0;

	// console.log(word);
	// console.log(word[0]);
	// console.log(word[1]);


	gettxtani.textContent = "";
	gettxtani.classList.add(colors[languages.indexOf(word)]);

	// gettxtani.textContent = word; //Nodejs
	// gettxtani.textContent += word[x]; //N

	let showintval = setInterval(function(){

		if(x >= word.length){

			clearInterval(showintval);

			deletewords();

		}else{
			gettxtani.textContent += word[x];
			x++;
		}

	},300);


}


function deletewords(){

	let getword =  gettxtani.innerText;
	// console.log(getword);


	let getlastidx = getword.length-1;
	// console.log(getlastidx);


	let delintval = setInterval(function(){

		if(getlastidx >= 0){

			gettxtani.textContent = gettxtani.textContent.substring(0,gettxtani.textContent.length -1);
			// console.log(getlastidx);
			getlastidx--;

		}else{
			
			gettxtani.classList.remove(colors[languages.indexOf(getword)]);
			showwords(languages[genfun.next().value]);
			clearInterval(delintval);
		}

	},300);

}


let gettxtlights = document.querySelectorAll('.text-light');

gettxtlights.forEach(function(gettxtlight){

	// console.log(gettxtlight);

	let arrtexts = gettxtlight.textContent.split('');
	// console.log(arrtxts);


	gettxtlight.textContent = '';

	arrtexts.forEach(function(arrtext,idx){

		// console.log(arrtext);

		// emphasized
		let newem = document.createElement('em');
		newem.textContent = arrtext;
		// console.log(newem);
		// console.log(idx);
		newem.style.animationDelay = `${idx*0.05}s`;

		gettxtlight.append(newem);
	});

});


// 22AR