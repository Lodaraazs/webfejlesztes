document.getElementById("mehet").addEventListener("click", kalkulator);
function kalkulator(){
    let repulout_ara = 0;
    let szallas_ara = 0;
    let szervezett_ut = "";
    let valasztott_orszag = document.getElementById("orszag").value;
    let utazas_fo = document.getElementById("fo").value;
    let osszeg = 0;
    /* A "new Date"-tel lehet dátum formátummá alakítani, ilyenkor miliszekundumban lesz, tehát / 1000 * 60 * 60 * 24 */
    const datum1 = new Date(document.getElementById("erkezes").value);
    const datum2 = new Date(document.getElementById("indulas").value);
    const promo = document.getElementById("promo").value;
    
    const utazas_napok = Math.abs((datum1 - datum2)/(1000 * 60 * 60 * 24)) + 1;

    if (valasztott_orszag == "Kína"){
        repulout_ara = 800000;
        szallas_ara = 20000;
    }
    else{
        if(valasztott_orszag == "Vietnám"){
            repulout_ara = 700000;
            szallas_ara = 10000;
        }
        else{
            repulout_ara = 750000;
            szallas_ara = 15000;
        }
    }

    if(document.getElementById("szervezett").checked){
        osszeg = utazas_fo * (repulout_ara + (szallas_ara * (utazas_napok - 1))) * 1.5;
        szervezett_ut = "szervezett";
    }
    else{
        osszeg = utazas_fo * (repulout_ara + (szallas_ara * (utazas_napok - 1)));
    }

    if (promo == 123){
        document.getElementById("vegosszeg_kiiras").innerHTML = `<p>A(z) ${utazas_fo} fős, ${utazas_napok} napos ${szervezett_ut} utazás ${valasztott_orszag}ba előreláthatólag ${(osszeg*0.8).toLocaleString("hu-HU")} Ft-ba fog kelrülni.</p><p>Részletes költséglebontás:</p><p>Repülőjegyek: ${(repulout_ara*utazas_fo).toLocaleString("hu-HU")} Ft</p><p>Szállás ára: ${(szallas_ara*(utazas_napok-1)*utazas_fo).toLocaleString("hu-HU")} Ft</p><p>Kedvezmény: ${(osszeg*0.2).toLocaleString("hu-HU")} Ft</p><p>Szervezett úton való részvétel ára: ${(osszeg - ((repulout_ara*utazas_fo) + szallas_ara*(utazas_napok-1)*utazas_fo)).toLocaleString("hu-HU")} Ft</p>`;
        
    }
    else{
        document.getElementById("vegosszeg_kiiras").innerHTML = `<p>A(z) ${utazas_fo} fős, ${utazas_napok} napos ${szervezett_ut} utazás ${valasztott_orszag}ba előreláthatólag ${osszeg.toLocaleString("hu-HU")} Ft-ba fog kelrülni.</p><p>Részletes költséglebontás:</p><p>Repülőjegyek: ${(repulout_ara*utazas_fo).toLocaleString("hu-HU")} Ft</p><p>Szállás ára: ${(szallas_ara*(utazas_napok-1)*utazas_fo).toLocaleString("hu-HU")} Ft</p><p>Szervezett úton való részvétel ára: ${(osszeg - ((repulout_ara*utazas_fo) + szallas_ara*(utazas_napok-1)*utazas_fo)).toLocaleString("hu-HU")} Ft</p>`;
    }
}