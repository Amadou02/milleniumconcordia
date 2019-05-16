var panier = [];
var total = 0;

function ajouterArticle(prix) {
  //alert(total);
  total += prix;
  panier.push(prix);

  document.getElementById('texte-panier').innerHTML = 'Vous avez ' + panier.length + ' articles pour un total de ' +  total.toString() + ' M.I';
  //document.getElementById('details-panel').innerHTML = panier.toString();
  rafraichirPanier();
}

function rafraichirPanier(){
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
    if(panier[i] == 15000) {
      nbreArticle1++;
      document.getElementById('article1').innerHTML = 'Vous avez pris ' + nbreArticle1 + ' billet pour voyage sur Mars';
      document.getElementById('article1').style.visibility = 'visible';
    }
    if(panier[i] == 10000) {
      nbreArticle2++;
      document.getElementById('article2').innerHTML = 'Vous avez pris ' + nbreArticle2 + ' billet pour voyage sur Jupiter';
      document.getElementById('article2').style.visibility = 'visible';
    }
    if(panier[i] == 100000) {
      nbreArticle3++;
      document.getElementById('article3').innerHTML = 'Vous avez pris ' + nbreArticle3 + ' billet pour voyage sur Namek';
      document.getElementById('article3').style.visibility = 'visible';
    }
    if(panier[i] == 12000) {
      nbreArticle4++;
      document.getElementById('article4').innerHTML = 'Vous avez pris ' + nbreArticle4 + ' billet pour voyage sur Kashyyyk';
      document.getElementById('article4').style.visibility = 'visible';
    }
    if(panier[i] == 20000) {
      nbreArticle5++;
      document.getElementById('article5').innerHTML = 'Vous avez pris ' + nbreArticle5 + ' billet pour voyage sur Noveria';
      document.getElementById('article5').style.visibility = 'visible';
    }
    if(panier[i] == 25000) {
      nbreArticle6++;
      document.getElementById('article6').innerHTML = 'Vous avez pris ' + nbreArticle6 + ' billet pour voyage sur Arrakis';
      document.getElementById('article6').style.visibility = 'visible';
    }
    if(panier[i] == 30000) {
      nbreArticle7++;
      document.getElementById('article7').innerHTML = 'Vous avez pris ' + nbreArticle7 + ' billet pour voyage sur Trantor';
      document.getElementById('article7').style.visibility = 'visible';
    }
    if(panier[i] == 35000) {
      nbreArticle8++;
      document.getElementById('article8').innerHTML = 'Vous avez pris ' + nbreArticle8 + ' billet pour voyage sur Étoile Noire';
      document.getElementById('article8').style.visibility = 'visible';
    }
    if(panier[i] == 40020) {
      nbreArticle9++;
      document.getElementById('article9').innerHTML = 'Vous avez pris ' + nbreArticle9 + ' billet pour voyage sur  Titan';
      document.getElementById('article9').style.visibility = 'visible';
    }
    if(panier[i] == 45050) {
      nbreArticle10++;
      document.getElementById('article10').innerHTML = 'Vous avez pris ' + nbreArticle10 + ' billet pour voyage sur Lune';
      document.getElementById('article10').style.visibility = 'visible';
    }
    if(panier[i] == 50050) {
      nbreArticle11++;
      document.getElementById('article11').innerHTML = 'Vous avez pris ' + nbreArticle11 + ' billet pour voyage sur Europe';
      document.getElementById('article11').style.visibility = 'visible';
    }
    if(panier[i] == 55000) {
      nbreArticle12++;
      document.getElementById('article12').innerHTML = 'Vous avez pris ' + nbreArticle12 + ' billet pour voyage sur Capella';
      document.getElementById('article12').style.visibility = 'visible';
    }
  }
}
