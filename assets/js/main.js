var panier = [];
var total = 0;

function ajouterArticle(prix) {
  //alert(total);
  total += prix;
  panier.push(prix);

  document.getElementById('texte-panier').innerHTML = 'Vous avez ' + panier.length + ' articles pour un total de ' +  total.toString() + '€';
  //document.getElementById('details-panel').innerHTML = panier.toString();
  rafraichirPanier();
}

function rafraichirPanier() {
  var nbreArticle1 = 0;
  var nbreArticle2 = 0;
  var nbreArticle3 = 0;

  for(var i = 0; i < panier.length; i++) {
    if(panier[i] == 1) {
      nbreArticle1++;
      document.getElementById('article1').innerHTML = 'Vous avez ' + nbreArticle1 + ' articles 1';
      document.getElementById('article1').style.visibility = 'visible';
    }
    if(panier[i] == 10) {
      nbreArticle2++;
      document.getElementById('article2').innerHTML = 'Vous avez ' + nbreArticle2 + ' articles 2';
      document.getElementById('article2').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle3++;
      document.getElementById('article3').innerHTML = 'Vous avez ' + nbreArticle3 + ' articles 3';
      document.getElementById('article3').style.visibility = 'visible';
    }
  }
}
