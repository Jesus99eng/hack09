function piramide () {
    ent=document.getElementById('entero').value;
    cad=ent.repeat(ent*1+1)+'\n';
    for (var i = ent-1; i >= 0; i--) {
      cad+=('*').repeat(i+1)+'\n';
      cad=('*').repeat(i+1)+'\n'+cad;
    };
    document.getElementById('evento').innerHTML=cad;
}