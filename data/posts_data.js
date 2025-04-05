const posts = [
    {
        id: 1,
        title: "Ciambellone",
        slug: "ciambellone",
        content: "Sarà che una volta le cose erano più semplici, ma erano anche molto buone. Come le crostate, i biscotti o il ciambellone che la nonna preparava anche all'ultimo sapendo che sareste passati per la merenda: uova, zucchero e farina. Niente di più basic ma che tra le sue mani, mescolando e infornando, diventava una delle prelibatezze per accompagnare il succo di frutta al pomeriggio o il latte e caffè al mattino. Ecco la nostra ricetta del ciambellone a quale atmosfera si ispira, quella di casa e genuinità: con una manciata di scorze di limone o di arancia e una spolverata di zucchero a velo renderete questa soffice delizia profumata e invitante. E per una volta sarà la nonna a farvi i complimenti per aver preparato un morbido ciambellone, così buono che non passa mai di moda!",
        image: "http://localhost:3000/imgs/posts/ciambellone.jpeg",
        tags: ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno"],
        recipe: `Per preparare il ciambellone, iniziamo a sbattere in una boule capiente le uova con lo zucchero utilizzando delle fruste elettriche. Montiamo fin quando non otterremo un composto chiaro, spumoso e omogeneo.

        Dopodiché versiamo l'olio di semi e poi, continuando a mescolare, il latte. Aromatizziamo con un cucchiaino di aroma alla vaniglia, oppure se preferiamo con la scorza grattugiata di mezzo limone o un pizzico di cannella.
        
        Aggiungiungiamo poco alla volta la farina 00 e il lievito per dolci setacciandoli. Mescoliamo bene fino ad ottenere un composto liscio e uniforme.
        
        Versiamo in uno stampo per ciambella: noi ne abbiamo utilizzato uno in silicone di 22-24 cm di diametro; se ne usate uno tradizionale, ricordatevi di imburrarlo o oliarlo per evitare che l'impasto resti attaccato alla superficie.
        
        Cuociamo in forno già caldo a 170° per 40-45 minuti se ventilato, oppure in forno statico a 180° per 45-50 minuti.

        Il nostro ciambellone classico è pronto!

        Una volta raffreddato possiamo cospargere la superficie di zucchero a velo.`,
        ingredients: ["4 uova", "180 g di zucchero", "120 g di olio di semi", "150 g di latte", "300 g di farina 00", "16 g di lievito per dolci", "1 cucchiaino di aroma alla vaniglia"]
    },
    {
        id: 2,
        title: "Cracker alla barbabietola",
        slug: "cracker-alla-barbabeitola",
        content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
                Cracker di farro
                Cracker di lupini
                Cracker allo zafferano
                Cracker ai semi`,
        image: "http://localhost:3000/imgs/posts/cracker_barbabietola.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        recipe: `LOREM LOREM LOREM LOREM
        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM     
        LOREM LOREM LOREM LOREM   
        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM`,
        ingredients: ["4 IPSUM IPSUM IPSUM IPSUM", "18 IPSUM IPSUM IPSUM IPSUM", "1 IPSUM IPSUM IPSUM IPSUM", "150 g di IPSUM IPSUM IPSUM IPSUM", "3650 g di IPSUM IPSUM IPSUM IPSUM 00", "16 g IPSUM IPSUM IPSUM IPSUM", "1 cucchiaino di aroma alla IPSUM IPSUM IPSUM IPSUM"]
    },
    {
        id: 3,
        title: "Pasta barbabietola e gorgonzola",
        slug: "pasta-barbabietola-e-gorgonzola",
        content: `La nostra ricetta della pasta barbabietola e gorgonzola vuole ricreare in questo primo piatto un abbinamento appetitoso, già proposto con la torta salata alla barbabietola! Per un pranzo veloce ma gustoso, per chi ama giocare con consistenze e colori naturali in cucina, questa pasta è perfetta! La dolcezza della barbabietola smorza il gusto deciso che caratterizza questo formaggio erborinato molto amato, un'abbinata vincente e molto gustosa. Provate un nuovo condimento per la vostra pasta e sperimentate altre sfiziose varianti:
              Pasta con barbabietola e pecorino
              Gnocchi di barbabietola
              Tagliatelle alla barbabietola con asparagi`,
        image: "http://localhost:3000/imgs/posts/pasta_barbabietola.jpeg",
        tags: ["Primi piatti", "Ricette vegetariane"],
        recipe: `LOREM LOREM LOREM LOREM
        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM     
        LOREM LOREM LOREM LOREM   
        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM`,
        ingredients: ["4 IPSUM IPSUM IPSUM IPSUM", "18 IPSUM IPSUM IPSUM IPSUM", "1 IPSUM IPSUM IPSUM IPSUM", "150 g di IPSUM IPSUM IPSUM IPSUM", "3650 g di IPSUM IPSUM IPSUM IPSUM 00", "16 g IPSUM IPSUM IPSUM IPSUM", "1 cucchiaino di aroma alla IPSUM IPSUM IPSUM IPSUM"]
    },
    {
        id: 4,
        title: "Pane fritto dolce",
        slug: "pane-fritto-dolce",
        content: `Il pane fritto dolce è la versione più antica dell'odierno french toast! Una deliziosa ricetta antispreco che le nonne preparavano ai bambini per merenda, utilizzando gli ingredienti che si avevano sempre a disposizione in casa: pane raffermo, uova, latte e zucchero, che noi abbiamo deciso di aromatizzare con un pizzico di cannella. Facile e veloce da realizzare, il pane fritto dolce vi riporterà con la mente ai sapori dell'infanzia… gustatelo da solo o accompagnatelo con frutta fresca e yogurt per uno spuntino tanto goloso quanto genuino!`,
        image: "http://localhost:3000/imgs/posts/pane_fritto_dolce.jpeg",
        tags: ["Dolci", "Dolci veloci", "Ricette veloci", "Ricette vegetariane"],
        recipe: `LOREM LOREM LOREM LOREM
        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM     
        LOREM LOREM LOREM LOREM   
        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM`,
        ingredients: ["4 IPSUM IPSUM IPSUM IPSUM", "18 IPSUM IPSUM IPSUM IPSUM", "1 IPSUM IPSUM IPSUM IPSUM", "150 g di IPSUM IPSUM IPSUM IPSUM", "3650 g di IPSUM IPSUM IPSUM IPSUM 00", "16 g IPSUM IPSUM IPSUM IPSUM", "1 cucchiaino di aroma alla IPSUM IPSUM IPSUM IPSUM"]
    },
    {
        id: 5,
        title: "Torta paesana",
        slug: "torta-paesana",
        content: `La torta paesana è un dolce di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. E' un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. E' infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte). A seconda dei gusti e delle disponibilità del momento, al pane ammollato ogni famiglia univa ingredienti diversi, chi l'uvetta o chi i pinoli ad esempio. Noi vi presentiamo la nostra versione con l'aggiunta di cacao e amaretti: perfetta da gustare per una merenda dal sapore rustico, la torta paesana è un perfetto dolce di recupero quando si ha del pane avanzato… ed è ancora più buona il giorno dopo!`,
        image: "http://localhost:3000/imgs/posts/torta_paesana.jpeg",
        tags: ["Dolci", "Dolci al cioccolato", "Torte", "Ricette vegetariane", "Ricette al forno"],
        recipe: `LOREM LOREM LOREM LOREM
        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM     
        LOREM LOREM LOREM LOREM   
        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM

        LOREM LOREM LOREM LOREM`,
        ingredients: ["4 IPSUM IPSUM IPSUM IPSUM", "18 IPSUM IPSUM IPSUM IPSUM", "1 IPSUM IPSUM IPSUM IPSUM", "150 g di IPSUM IPSUM IPSUM IPSUM", "3650 g di IPSUM IPSUM IPSUM IPSUM 00", "16 g IPSUM IPSUM IPSUM IPSUM", "1 cucchiaino di aroma alla IPSUM IPSUM IPSUM IPSUM"]
    },
];

module.exports = posts