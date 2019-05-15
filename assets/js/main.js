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
  var nbreArticle4 = 0;
  var nbreArticle5 = 0;
  var nbreArticle6 = 0;
  var nbreArticle7 = 0;
  var nbreArticle8 = 0;
  var nbreArticle9 = 0;
  var nbreArticle10 = 0;
  var nbreArticle11 = 0;
  var nbreArticle12 = 0;


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
    if(panier[i] == 100) {
      nbreArticle4++;
      document.getElementById('article4').innerHTML = 'Vous avez ' + nbreArticle4 + ' articles 4';
      document.getElementById('article4').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle5++;
      document.getElementById('article5').innerHTML = 'Vous avez ' + nbreArticle5 + ' articles 5';
      document.getElementById('article5').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle6++;
      document.getElementById('article6').innerHTML = 'Vous avez ' + nbreArticle6 + ' articles 6';
      document.getElementById('article6').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle7++;
      document.getElementById('article7').innerHTML = 'Vous avez ' + nbreArticle7 + ' articles 7';
      document.getElementById('article7').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle8++;
      document.getElementById('article8').innerHTML = 'Vous avez ' + nbreArticle8 + ' articles 8';
      document.getElementById('article8').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle9++;
      document.getElementById('article9').innerHTML = 'Vous avez ' + nbreArticle9 + ' articles 9';
      document.getElementById('article9').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle10++;
      document.getElementById('article10').innerHTML = 'Vous avez ' + nbreArticle10 + ' articles 10';
      document.getElementById('article10').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle11++;
      document.getElementById('article11').innerHTML = 'Vous avez ' + nbreArticle11 + ' articles 11';
      document.getElementById('article11').style.visibility = 'visible';
    }
    if(panier[i] == 100) {
      nbreArticle12++;
      document.getElementById('article12').innerHTML = 'Vous avez ' + nbreArticle12 + ' articles 12';
      document.getElementById('article12').style.visibility = 'visible';
    }
  }
}
