p1_scr = 0;
p2_scr = 0;

function getname(){
    pn = [localStorage.getItem('name1'), localStorage.getItem('name2')];
    console.log(pn);
    window.alert("The Game room Has Loaded");
    pn1 = pn[0];
    pn2 = pn[1];

    console.log(pn1);
    console.log(pn2);

    document.getElementById('p1_scr').innerHTML = pn1 + " : " + p1_scr;
    document.getElementById('p2_scr').innerHTML = pn2 + " : " + p2_scr;
    document.getElementById('1lturn').innerHTML = 'Question Turn - ' + pn1;
    document.getElementById('2lturn').innerHTML = 'Answer Turn - ' + pn2;

}
