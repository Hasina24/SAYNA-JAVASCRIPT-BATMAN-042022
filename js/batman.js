//Les rubriques du menu doivent être soulignées et en gras.
//Lorsqu'on se situe dans une rubrique, celle-ci garde cette mise en forme.
let menu = document.querySelectorAll('li')

menu.forEach(function(li) {
        li.addEventListener('mouseover', () => {
            li.style.textDecoration = 'underline'
        })
    })
    //Effet hover sur les boutons: opacité; passe de 40% à100%.
let btn = document.getElementsByClassName('btn')
console.log(btn)

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseover', () => {
        btn[i].style.opacity = '1';
    })
}
//les logos réseaux sociaux et les logos Batman(header+sur le côté) ont effet hover sur les icônes .
let image = document.getElementsByClassName('image');

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('mouseover', () => {
        image[i].style.color = '#FFFF00';
    });
    image[i].addEventListener('mouseout', () => {
        image[i].style.color = 'none';
    });
}
//les icônes à côté doivent défiler en suivant le scroll de la page.

//tous les titres du site apparaissent avec un fade in et démarrent de gauche à droite.
//sous-titres, apparaissent progressivement(opacité de 0% à 100%).
//Les lignes discrètes sont présentes pour tracer les contours de la page(espace sur la largeur:102px de chaque côté; espace au niveau du header:132px de la bordure haute)