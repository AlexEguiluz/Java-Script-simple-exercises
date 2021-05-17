window.onload = function(){ //Attend le chargement du DOM

	// document.getElementById('id1').addEventListener('click', fonction1 );
	// //On récupère dans le DOM l'élément qui possède l'id 'id1', on lui ajoute un evenement, au click, on exécutera la fonction nommée 'fonction1'

	// function fonction1(){

	// 	alert('Vous avez cliqué dans la div 1 !');
	// }

	//autre syntaxe :
	document.getElementById('id1').addEventListener('click', function(){

		alert('Vous avez bien cliqué sur la div 1 !')
	} );

	//--------------------------------------------------------------
	document.getElementById('id2').addEventListener('dblclick', function(){

		alert("Vous avez double cliqué dans la div 2 !")
	} );

	//--------------------------------------------------------------
	document.getElementById('id3').addEventListener('mouseover', function(){

		alert("Vous avec passé la souris dans la div 3 !");
	} );

	//--------------------------------------------------------------
	document.getElementById('id4').addEventListener('mouseout', function(){

		alert("Vous avez sorti la souris de la div 4 !");
	} );

	//--------------------------------------------------------------
	document.getElementById('id55').addEventListener('blur', function(){

		alert("Vous avez quitté l'input de la div 5 !");
	} );

	//--------------------------------------------------------------
	// document.getElementById('id66').addEventListener('focus', function(){

	// 	alert("Vous avez selectionné l'input de la div 6 !");
	// } );

	//--------------------------------------------------------------
	document.getElementById('id77').addEventListener('submit', function(){

		alert("Vous avez valider (soumis) le formulaire !");
	} );

	//Liste des evenements javascript :
		//https://developer.mozilla.org/fr/docs/Web/Events
}

