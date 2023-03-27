const kaverit = []

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#nimiInput').value.length == 0){
        alert("Kirjoitathan nimen!");
        return;
    } else if(kaverit.includes(document.querySelector('#nimiInput').value)) {
        alert("Et voi lisätä samaa nimeä kahdesti!");
        return;
    }
    else {

      kaverit.push(document.querySelector('#nimiInput').value);
        if(kaverit.length > 10) {
            alert("Maksimimäärä saavutettu")
            return;
        }


        /* document.querySelector('#nimet').innerHTML += `
            <div class="nimi">
                <span id="nimi1">
                    ${document.querySelector('#nimiInput').value}
                </span>


             <button class="delete">
             <i class="far fa-trash-alt"></i>
             </button>
            </div>
        `; */

        document.querySelector('#nimet').innerHTML = "";
            for (let nimi of kaverit) {
                document.querySelector('#nimet').innerHTML += `
            <div class="nimi">
                <span id="nimi1">${nimi}</span>


             <button class="delete">
             <i class="far fa-trash-alt"></i>
             </button>
            </div>
        `;
            }

        var poistanimi = document.querySelectorAll(".delete");
        for (var i=0; i<poistanimi.length; i++) {
            poistanimi[i].onclick = function() {
                let xd = this.parentNode.childNodes[1].textContent;
                console.log(xd);
                const indeksi = kaverit.indexOf(xd);
                this.parentNode.remove();
                if (indeksi > -1) {
                kaverit.splice(indeksi, 1);
                }
            }
        }

        document.querySelector('#jarjestaKaverit').onclick = function() {
            kaverit.sort();
            document.querySelector('#nimet').innerHTML = "";
            for (let nimi of kaverit) {
                document.querySelector('#nimet').innerHTML += `
            <div class="nimi">
                <span id="nimi1">${nimi}</span>


             <button class="delete">
             <i class="far fa-trash-alt"></i>
             </button>
            </div>
        `;
            }
        }

    }    
    
    }
