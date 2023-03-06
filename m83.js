function goster() {

const  ay = document.getElementById("mevsimForm" ).value
    if (ay === "haziran" || ay=== "temmuz" || ay=== "ağustos" ) {

        alert("Yaz Mevsimindeyiz.")
    }

    if (ay=== "mart" || ay=== "nisan" || ay=== "mayıs") {
        alert("İlkbahar Mevsimindeyiz.")
    }

    if (ay=== "eylül" || ay=== "ekim" || ay=== "kasım") {
        alert("Sonbahar Mevsimindeyiz.")
    }

    if (ay=== "ocak" || ay=== "şubat" || ay=== "aralık") {
        alert("Kış Mevsimindeyiz.")
    }


}
