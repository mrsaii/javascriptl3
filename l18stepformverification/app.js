// Get UI
var getdots = document.getElementsByClassName('dot');
var getform = document.getElementById('form');
var getpages = document.getElementsByClassName('page');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');
var getrstcontainer = document.getElementById('result-container');
var objkeys = ['email','password','firstname','lastname','dob','phone','address'];
var datas = [];

// console.log(getpages); //HTMLCollection
// console.log(getpages[0]);

var curridx = 0;

showpage(curridx);

function showpage(num){

	// console.log(num);

	getpages[num].style.display = 'block';

	num === 0 ? getprevbtn.style.display = 'none' : getprevbtn.style.display = 'inline-block';

	num === (getpages.length-1) ? getnextbtn.textContent = 'Submit' : getnextbtn.textContent = 'Next';

	dotindicator(num);

}



function dotindicator(num){

	// console.log(num);

	for(var x = 0; x < getdots.length; x++){
		getdots[x].classList.remove('active');
	}

	getdots[num].className += ' active';

}

function gonow(num){


// ------------- For Testing ---------

 	// console.log(num);

 	// console.log(curridx);
 	// getpages[curridx].style.display = 'none';

 	// curridx = curridx+num;

 	// console.log(curridx);	

 	// if(curridx >= getpages.length){
 	// 	getform.submit();
 	// }

 	// showpage(curridx);

	// formvalidation();

	// console.log(formvalidation());

// -------------End For Testing ---------


			// Method 1
	// this place always true (when we use if function)
	// if(formvalidation()){
	// 	getpages[curridx].style.display = 'none';

	// 	curridx = curridx+num;

	// 	if(curridx >= getpages.length){
 	// 		getform.submit();
 	// 	}

 	// 	showpage(curridx);
	// }



	// Method 2
	// if(!formvalidation()){
	// 	return false;
	// }

	//Method 3 
	// if(!formvalidation()) return false;


	//Method 4 ( Check for go and back )
	if(num === 1 && !formvalidation()) return false;


	getpages[curridx].style.display = 'none';

	curridx = curridx+num;

	if(curridx >= getpages.length){
 		// getform.submit();

 		getform.style.display = 'none';
 		getrstcontainer.style.display = 'block';

		result(datas);

		return false;

 	}

 	showpage(curridx);
}


function* genfun(){

	var index = 0;

	while(index < objkeys.length){
		yield index++;
	}

}

let gen = genfun();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value); //undefined




function formvalidation(){

	var valid = true;

	// console.log(curridx);

	var getcurrentinputs = getpages[curridx].getElementsByTagName('input');
	// console.log(getcurrentinputs);
	// console.log(getcurrentinputs[0].value);
	// console.log(getcurrentinputs[1].value);


	for(var x=0; x < getcurrentinputs.length; x++){

		// console.log(getcurrentinputs[x].value);

		if(getcurrentinputs[x].value === ''){
			getcurrentinputs[x].classList.add('invalid');
			valid = false;
		}else{

			// console.log('x value is = ', x);  // 0 1 rely on input

			const keys = objkeys[gen.next().value];
			const values = getcurrentinputs[x].value;
			
			// Method 1
			// const obj = {
			// 	[keys]:values
			// };

			// Method 2
			// var obj = {};
			// obj[keys] = values;
			// console.log(obj);

			// Method 3
			datas.push({[keys]:values});

			// console.log(datas);

			// console.log(objkeys[x]);
			// console.log('this is x value = ',x);
			// console.log(objkeys[gen.next().vlaue]);

		}




	}

	if(valid){
		getdots[curridx].className += ' done';
	}

	return valid;


}


function result(data){
	// console.log(data);

	getrstcontainer.innerHTML = `
		<ul>
			<li>Name : ${data[2].firstname} ${data[3].lastname}</li>
			<li>Email : ${data[0].email}</li>
			<li>Date Of Birth : ${data[4].dob}</li>
			<li>Address : ${data[6].address}</li>
			<li>Phone Number : ${data[5].phone}</li>
		</ul>

		<button type='submit' class='submit-btn' onclick='submitbtn()'>Apply Now</button>
	`;

}

function submitbtn(){
	getform.submit();
}