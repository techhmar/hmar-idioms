// Sample word data (replace with your own data)
const wordData = {
    "ar kai zan" : "Thlâpa chêng ṭhat zân tak hi âr kai zân an tih. Thla lir zâna asuok le rîla âr an kai ânruol char hlak leia âr kai zân an ti a nih.",
    "a khau kâpin" : "A chin a lien, naupang le tar ti um bik lovin rêngin tina a nih. 'A khau kâpin kan inthawk', an ti chun rêngin kan inthawk tina a nih.",
    "a khelneng a khawlnawng" : "Chipchier takin, kimchang deu in tina a nih.",
    "ar anga invai" : "Mi chavai, Invai, Hnemtu umlo, nei lo, Hmangai tak tak nei ve lo. Hmangaitu tak tak nei ve lo.",
    "a ngûr" : "Mi ropui. Mi che thei. Mi lien.",
    "a dung a khangin" : "Nghat dân tinrengin. A dung a khangin an let el a nih an ti chun nghat dan tinrenga inletin an vir vel el tina a nih.",
    "a siruk lakin" : "Kum bul thlipui hrang hi a tawp a chu na deu in a hung hrang a, Pinle Puhai chun siruk khi a mut hmang a nih an ti hiel hlak. Chu siruk lak hnung chun siruk khi hmu ding a um ta nawh, thlasik ân ṭan nawk hma chu. Thu tawpkhawk hrilna a hmang a nih.",
    "a bawplawk" : "Mi thuhril inkhing lova dawn, a hriltu ti naw zawngtaka lâklek pek hi a bawplawk a ti a nih.",
    "a lungthu kimin" : "Thil kawpkim hrilnaa hmang hlak a nih. Ṭhangruol le inrem hrilna a nih.",
    "a letlinga khai ang" : "A ngaina hrietlo. Beidawng hrilna a nih.",
    "a mit le siekawp ang" : "A hmu hawia thup thei lo. A hmu nawk pei hlak leiin a mit le siekawp ang a nih an ti hlak.",
    "a bila tho lo" : "Infûk lo. A tira inthawka chiengkuong lo. Mi tlinglo le phâk zo lo hrilna a nih.",
    "arpui mitsîm" : "Hmu naw tehlem thaw. Insîm hmar hmar.",
    "ar ṭiel vara var" : "Ar laia chu âr ṭiel hi a var bik rieua ngai a nih. Mi naran nêka var deu hlek hi âr ṭiel vara var an ti hlak.",
    "arte thi a thi" : "Hmangaitu le ngaisaktu nei lovat hi hi arte thia thi an tih.",
    "ar hmai bo" : "Thil hlu lo deuh hrilna a nih. 'I hung si leh âr hmai bo bek that ka che' an ti chun hlunaw sien khawm âr bêk that ka che tina a nih.",
    "ar khaw thim palh" : "Hmu chieng thei si lova fe dîm dîm hi âr khaw thim palh an ti hlak.",
    "ar kuo suok" : "Hrechieng mang lova suok thut.",
    "arte lu kawla kawl" : "Nei nei lo, chân zo vawng tina a nih.",
    "a sa se" : "A tak tak. Thaw ding tak. 'A sa se tak tak a ngam nawh' an ti chun a thaw tak tak OR hril sien khawm thaw ding tak thaw chu a ngam nawh' tina a nih.",
    "a sesam" : "An ṭan lai, a tawntîr tina a nih. A nau nei chu a sesam a sawt an ti hlak.",
    "aite cheu" : "Thaw sin, insin, ensin.",
    "a bu delh" : "A dang nêka chan chau deu, sie deu tina a nih.",
    "a pheiruoi" : "Fie lo, chienglo.",
    "a sa fe a fe" : "Lu tieng hmasa a lawn hi sa fe a fe OR sa lawna lawn an ti hlak.",
    "arte lungsie Sanghar lunglawm" : "Pakhat tadinga pawu si mi dang ta dinga ṭha si hrilna'n an hmang hlak.",
    "a hnâr laido" : "A pawimaw tak, ṭangkai tak hrilna a nih.",
    "arpui nene sem ang" : "Thilnei insem kâwt hrilna. Tienlai Arpui hi nene a sem leh ama'n a chang ta nawh a, tuchen hin Arpuiin nene a nei naw a nih an ti hlak. 'Ka bu sem chu arpui nene sem ang el ka nih ka kâwt dêr' an ti chun, chang ka nei ta dêr nawh an tina a nih.",
    "a serh laia a mei ang" : "In thawina a sa an sem hin a mei an semsa ve zie hlak a, tuchen hin thil tawp thei lo hrik khina in an hmang hlak.",
    // Add more words and meanings as needed
};

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const resultContainer = document.getElementById("resultContainer");

    searchInput.addEventListener("input", function () {
        const inputValue = searchInput.value.toLowerCase();
        const suggestions = getAutocompleteSuggestions(inputValue);

        displayAutocompleteSuggestions(suggestions);
    });

    function getAutocompleteSuggestions(input) {
        return Object.keys(wordData).filter(word => word.startsWith(input));
    }

    function displayAutocompleteSuggestions(suggestions) {
        const autocompleteContainer = document.getElementById("autocompleteContainer");

        if (!autocompleteContainer) {
            return;
        }

        if (suggestions.length > 0) {
            autocompleteContainer.innerHTML = suggestions.map(word => `<div class="autocomplete-item" onclick="selectAutocomplete('${word}')">${word}</div>`).join("");
            autocompleteContainer.style.display = "block";
        } else {
            autocompleteContainer.innerHTML = "";
            autocompleteContainer.style.display = "none";
        }
    }

    window.selectAutocomplete = function (word) {
        searchInput.value = word;
        searchWord();
        document.getElementById("autocompleteContainer").style.display = "none";
    };
});

function searchWord() {
    const searchInput = document.getElementById("searchInput");
    const resultContainer = document.getElementById("resultContainer");
    const autocompleteContainer = document.getElementById("autocompleteContainer");

    const word = searchInput.value.toLowerCase();

    if (wordData[word]) {
        resultContainer.innerHTML = `<p><strong>${word}</strong>: ${wordData[word]}</p>`;
        autocompleteContainer.style.display = "none";
    } else {
        resultContainer.innerHTML = "<p>Word not found - I thil zawng a um nawh.</p>";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // ... (existing code remains unchanged) ...
});

function scrollToSearchInput() {
    const searchInput = document.getElementById("searchInput");
    searchInput.scrollIntoView({ behavior: "smooth" });
}
