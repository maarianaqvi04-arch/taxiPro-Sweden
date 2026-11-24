const QUESTIONS = [
  {
    "id": "TP001",
    "category": "trafikregler",
    "question": "När du närmar dig ett obevakat övergångsställe där en gående är på väg ut, vad gäller? ",
    "options": [
      "Du ska lämna företräde åt den gående",
      "Den gående måste alltid vänta",
      "Du får köra om hastigheten är låg"
    ],
    "answer": 0,
    "explanation": "Vid obevakade övergångsställen har fordonsförare väjningsplikt mot gående. Anpassa hastigheten och var beredd att stanna.",
    "source": "Transportstyrelsen – Övergångsställe",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/overgangsstalle/",
    "difficulty": "lätt"
  },
  {
    "id": "TP002",
    "category": "trafikregler",
    "question": "Har du väjningsplikt mot en person som cyklar över ett obevakat övergångsställe på cykel?",
    "options": [
      "Ja, alltid",
      "Nej, inte enbart för att personen cyklar över övergångsstället",
      "Bara om personen vinkar"
    ],
    "answer": 1,
    "explanation": "Ett obevakat övergångsställe är avsett för gående. Fordonsförare har inte väjningsplikt mot den som cyklar över det, men ska alltid köra hänsynsfullt och säkert.",
    "source": "Transportstyrelsen – Övergångsställe",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/overgangsstalle/",
    "difficulty": "medel"
  },
  {
    "id": "TP003",
    "category": "trafikregler",
    "question": "Vad ska främst styra din hastighet utöver skyltad hastighetsgräns?",
    "options": [
      "Endast hur snabbt övrig trafik kör",
      "Väg, väder, sikt, fordonets skick och trafikförhållanden",
      "Hur bråttom passageraren har"
    ],
    "answer": 1,
    "explanation": "Hastigheten ska anpassas efter omständigheterna och får aldrig vara högre än att du kan behålla kontrollen och stanna inom den överblickbara sträckan.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "difficulty": "lätt"
  },
  {
    "id": "TP004",
    "category": "trafikregler",
    "question": "Du kör i tätort i kraftigt regn och sikten är dålig. Vad är rätt?",
    "options": [
      "Hålla skyltad hastighet oavsett sikt",
      "Sänka hastigheten så att du kan stanna inom den sträcka du ser",
      "Följa bilen framför på nära avstånd"
    ],
    "answer": 1,
    "explanation": "Du måste anpassa hastigheten efter sikt och väglag. Öka också avståndet till framförvarande fordon.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "difficulty": "lätt"
  },
  {
    "id": "TP005",
    "category": "trafikregler",
    "question": "Vad innebär väjningsplikt?",
    "options": [
      "Du ska tydligt visa att du tänker köra först",
      "Du ska i god tid sänka hastigheten eller stanna och bara köra vidare om det kan ske utan fara eller hinder",
      "Du behöver bara sakta ner om någon tutar"
    ],
    "answer": 1,
    "explanation": "Väjningsplikt innebär att du tydligt ska visa din avsikt att väja och inte köra vidare om det medför fara eller hinder.",
    "source": "Trafikförordningen – grundläggande väjningsregler",
    "sourceUrl": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikforordning-19981276_sfs-1998-1276/",
    "difficulty": "medel"
  },
  {
    "id": "TP006",
    "category": "trafikregler",
    "question": "Du närmar dig en korsning utan skyltar eller signaler. Vilken regel gäller normalt?",
    "options": [
      "Högerregeln",
      "Största fordonet kör först",
      "Den som kör snabbast kör först"
    ],
    "answer": 0,
    "explanation": "När inget annat reglerar företrädet gäller normalt högerregeln: du ska lämna företräde åt trafik som kommer från höger.",
    "source": "Trafikförordningen",
    "sourceUrl": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikforordning-19981276_sfs-1998-1276/",
    "difficulty": "lätt"
  },
  {
    "id": "TP007",
    "category": "trafikregler",
    "question": "Du ska svänga vänster i en korsning. Vad behöver du normalt göra?",
    "options": [
      "Placera dig lämpligt, ge tecken i god tid och försäkra dig om att svängen kan ske säkert",
      "Bara tuta",
      "Öka farten för att snabbt komma igenom"
    ],
    "answer": 0,
    "explanation": "Planera svängen i god tid, visa avsikt och kontrollera mötande trafik, cyklister och gående.",
    "source": "Trafikförordningen",
    "sourceUrl": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikforordning-19981276_sfs-1998-1276/",
    "difficulty": "lätt"
  },
  {
    "id": "TP008",
    "category": "trafikregler",
    "question": "Vad ska du göra när en trafiksignal visar rött ljus?",
    "options": [
      "Stanna före stopplinjen eller, om sådan saknas, före signalen",
      "Köra om det inte syns någon annan trafik",
      "Sakta ner och passera försiktigt"
    ],
    "answer": 0,
    "explanation": "Rött ljus betyder stopp. Stanna vid stopplinjen, eller före signalen om stopplinje saknas.",
    "source": "Transportförordningen / trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/",
    "difficulty": "lätt"
  },
  {
    "id": "TP009",
    "category": "trafikregler",
    "question": "Vad betyder en heldragen linje mellan körfält?",
    "options": [
      "Den får alltid korsas vid omkörning",
      "Den får normalt inte korsas eller överskridas",
      "Den betyder att körfältet upphör"
    ],
    "answer": 1,
    "explanation": "En heldragen linje får normalt inte korsas eller överskridas. Kontrollera alltid skyltning och markeringarnas sammanhang.",
    "source": "Transportstyrelsen – Vägmärken och vägmarkeringar",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/",
    "difficulty": "medel"
  },
  {
    "id": "TP010",
    "category": "trafikregler",
    "question": "Du närmar dig ett övergångsställe med skymd sikt bakom en parkerad skåpbil. Vad är klokast?",
    "options": [
      "Hålla samma fart eftersom du har företräde",
      "Sänka farten och vara beredd att stanna",
      "Tuta och köra vidare"
    ],
    "answer": 1,
    "explanation": "Skymd sikt kräver låg hastighet och beredskap att stanna. En gående kan vara dold bakom fordonet.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "difficulty": "medel"
  },
  {
    "id": "TP011",
    "category": "trafikregler",
    "question": "När får du använda mobiltelefonen i handen när du kör motordrivet fordon?",
    "options": [
      "När bilen rullar långsamt",
      "Aldrig när du kör",
      "När passageraren ber dig"
    ],
    "answer": 1,
    "explanation": "Du får inte använda mobiltelefon eller annan kommunikationsutrustning på ett sätt som innebär att du håller den i handen när du kör.",
    "source": "Transportstyrelsen – trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "lätt"
  },
  {
    "id": "TP012",
    "category": "trafikregler",
    "question": "Du ska backa ut från en parkeringsplats nära gående. Vem ansvarar för att det kan ske säkert?",
    "options": [
      "Föraren som backar",
      "Den gående",
      "Föraren bakom"
    ],
    "answer": 0,
    "explanation": "Den som backar har ett särskilt ansvar att försäkra sig om att manövern kan ske utan fara eller hinder.",
    "source": "Trafikförordningen",
    "sourceUrl": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikforordning-19981276_sfs-1998-1276/",
    "difficulty": "medel"
  },
  {
    "id": "TP013",
    "category": "trafikregler",
    "question": "Vad är rätt när du närmar dig ett barn som står nära körbanan?",
    "options": [
      "Hålla hastigheten om barnet står still",
      "Sänka hastigheten och vara beredd på att barnet kan gå ut",
      "Tuta för att visa att du kommer"
    ],
    "answer": 1,
    "explanation": "Barn kan agera oväntat. Hastigheten ska vara särskilt låg där barn uppehåller sig på eller bredvid vägen.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "difficulty": "lätt"
  },
  {
    "id": "TP014",
    "category": "trafikregler",
    "question": "Vad betyder vägmärket STOP?",
    "options": [
      "Du ska stanna helt och därefter lämna företräde enligt reglerna",
      "Du får rulla långsamt om vägen är fri",
      "Du ska bara stanna om annan trafik syns"
    ],
    "answer": 0,
    "explanation": "Stopplikt innebär att du måste stanna helt vid stopplinjen eller, om den saknas, vid märket/platsen där du får bäst sikt.",
    "source": "Transportstyrelsen – Vägmärken",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/",
    "difficulty": "lätt"
  },
  {
    "id": "TP015",
    "category": "trafikregler",
    "question": "Du närmar dig en cykelöverfart. Vad är särskilt viktigt?",
    "options": [
      "Följa reglerna för cykelöverfart och anpassa hastigheten så att du kan lämna cyklister företräde när det krävs",
      "Alltid köra först",
      "Bara se efter motorfordon"
    ],
    "answer": 0,
    "explanation": "Vid cykelöverfart har fordonsförare väjningsplikt mot cyklister som är ute på eller just ska färdas ut på cykelöverfarten. Sänk farten och var uppmärksam.",
    "source": "Transportstyrelsen – Cykelöverfart",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/",
    "difficulty": "medel"
  },
  {
    "id": "TP016",
    "category": "taxilagstiftning",
    "question": "Vad krävs normalt för att arbeta som taxiförare i Sverige?",
    "options": [
      "Giltig taxiförarlegitimation",
      "Enbart B-körkort",
      "Enbart tillstånd från kommunen"
    ],
    "answer": 0,
    "explanation": "För att arbeta som taxiförare krävs taxiförarlegitimation. Taxitrafikföretaget behöver också rätt tillstånd för sin verksamhet.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP017",
    "category": "taxilagstiftning",
    "question": "Hur många teoridelprov ingår i taxiförarprovet?",
    "options": [
      "Ett",
      "Två",
      "Tre"
    ],
    "answer": 1,
    "explanation": "Teoriprovet består av två delprov: Säkerhet och beteende samt Lagstiftning. Därutöver ingår ett körprov.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP018",
    "category": "taxilagstiftning",
    "question": "Hur lång är ordinarie provtid för vart och ett av teoridelproven?",
    "options": [
      "30 minuter",
      "50 minuter",
      "90 minuter"
    ],
    "answer": 1,
    "explanation": "Ordinarie provtid är 50 minuter för vart och ett av de två teoridelproven.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP019",
    "category": "taxilagstiftning",
    "question": "Hur många frågor består delprov 1 av totalt enligt Trafikverkets upplägg?",
    "options": [
      "50",
      "70",
      "80"
    ],
    "answer": 1,
    "explanation": "Delprov 1 innehåller totalt 70 frågor, varav 5 är testfrågor som inte räknas in i resultatet.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP020",
    "category": "taxilagstiftning",
    "question": "Hur många poänggivande frågor finns i delprov 1?",
    "options": [
      "65",
      "70",
      "75"
    ],
    "answer": 0,
    "explanation": "Av de 70 frågorna i delprov 1 är 65 poänggivande. Fem är testfrågor.",
    "source": "TSFS 2021:119",
    "sourceUrl": "https://webapp.trafikverket.se/TRVFS/pdf/TSFS%202021nr119.pdf",
    "difficulty": "medel"
  },
  {
    "id": "TP021",
    "category": "taxilagstiftning",
    "question": "Hur många rätt krävs för godkänt på delprov 1?",
    "options": [
      "34",
      "40",
      "48"
    ],
    "answer": 2,
    "explanation": "Minst 48 rätt av de 65 poänggivande frågorna krävs för godkänt på delprov 1.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP022",
    "category": "taxilagstiftning",
    "question": "Hur många frågor består delprov 2 av totalt?",
    "options": [
      "46",
      "50",
      "65"
    ],
    "answer": 1,
    "explanation": "Delprov 2 innehåller totalt 50 frågor, varav 4 är testfrågor som inte räknas in i resultatet.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP023",
    "category": "taxilagstiftning",
    "question": "Hur många rätt krävs för godkänt på delprov 2?",
    "options": [
      "30",
      "34",
      "40"
    ],
    "answer": 1,
    "explanation": "Minst 34 rätt av de 46 poänggivande frågorna krävs för godkänt på delprov 2.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP024",
    "category": "taxilagstiftning",
    "question": "Inom vilken tid måste båda teoridelproven vara godkända?",
    "options": [
      "Inom 6 månader från första godkända delprovet",
      "Inom 12 månader från körkortets utfärdande",
      "Det finns ingen tidsgräns"
    ],
    "answer": 0,
    "explanation": "Båda delproven måste vara godkända inom sex månader från och med datumet för det första godkända delprovet.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "medel"
  },
  {
    "id": "TP025",
    "category": "taxilagstiftning",
    "question": "Vad ska finnas synligt i taxifordonet för att identifiera föraren?",
    "options": [
      "Taxiförarlegitimationen",
      "Förarens privata körjournal",
      "En kopia av passet"
    ],
    "answer": 0,
    "explanation": "Föraren ska ha sin taxiförarlegitimation väl synlig i fordonet.",
    "source": "Transportstyrelsen – Taxikunder",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxikunder/",
    "difficulty": "lätt"
  },
  {
    "id": "TP026",
    "category": "taxilagstiftning",
    "question": "Vad gäller för prisinformation i taxifordon?",
    "options": [
      "Den ska vara tydlig och finnas både invändigt och utvändigt",
      "Den behövs bara om kunden frågar",
      "Den får bara finnas i en app"
    ],
    "answer": 0,
    "explanation": "Taxifordon ska ha tydlig prisinformation både inne i och utanpå fordonet enligt gällande regler.",
    "source": "Transportstyrelsen – Prisinformation",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/prisinformation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP027",
    "category": "taxilagstiftning",
    "question": "Vad beskriver jämförpriset för en taxiresa?",
    "options": [
      "En typresa på 10 km som tar 15 minuter",
      "En resa på 5 km som tar 30 minuter",
      "En resa mellan två flygplatser"
    ],
    "answer": 0,
    "explanation": "Jämförpriset avser en typresa på 10 kilometer som tar 15 minuter, inklusive eventuell grundavgift.",
    "source": "Transportstyrelsen – Prisinformation",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/prisinformation/",
    "difficulty": "medel"
  },
  {
    "id": "TP028",
    "category": "taxilagstiftning",
    "question": "När ska en bindande prisuppgift lämnas enligt Transportstyrelsens information?",
    "options": [
      "När jämförpriset överstiger 700 kronor, om inte fast pris används",
      "Vid varje resa oavsett pris",
      "Bara efter avslutad resa"
    ],
    "answer": 0,
    "explanation": "När jämförpriset överstiger 700 kronor ska en bindande prisuppgift lämnas. Regeln har undantag när fast pris används.",
    "source": "Transportstyrelsen – Taxikunder",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxikunder/",
    "difficulty": "medel"
  },
  {
    "id": "TP029",
    "category": "taxilagstiftning",
    "question": "Vad gäller när taxifordonet är utrustat med taxameter?",
    "options": [
      "Taxametern ska användas vid varje köruppdrag",
      "Taxametern används bara vid kontantbetalning",
      "Föraren får själv välja att inte registrera resan"
    ],
    "answer": 0,
    "explanation": "Om fordonet har taxameter ska den användas vid varje köruppdrag. Även appbokade resor omfattas av reglerna.",
    "source": "Transportstyrelsen – Taxameter",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/taxameter/",
    "difficulty": "lätt"
  },
  {
    "id": "TP030",
    "category": "taxilagstiftning",
    "question": "Vad ska föraren erbjuda efter en avslutad taxameterresa?",
    "options": [
      "Taxameterkvitto",
      "Enbart muntlig prisuppgift",
      "Inget kvitto om kunden inte bett om det"
    ],
    "answer": 0,
    "explanation": "Efter varje körning ska ett kvitto erbjudas. Elektroniskt kvitto kan användas om kunden kan ta emot och läsa det.",
    "source": "Transportstyrelsen – Taxameter",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/taxameter/",
    "difficulty": "lätt"
  },
  {
    "id": "TP031",
    "category": "taxilagstiftning",
    "question": "Hur ofta ska taxameterutrustning normalt besiktas?",
    "options": [
      "Senast ett år från installationen eller senaste besiktningen",
      "Vart femte år",
      "Endast när bilen säljs"
    ],
    "answer": 0,
    "explanation": "Taxameterutrustningen ska besiktas senast ett år från installationen eller från senaste besiktningen.",
    "source": "Transportstyrelsen – Taxameter",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/taxameter/",
    "difficulty": "medel"
  },
  {
    "id": "TP032",
    "category": "taxilagstiftning",
    "question": "Gäller taxameterreglerna även när resan bokas och betalas via en app?",
    "options": [
      "Ja",
      "Nej",
      "Bara på helger"
    ],
    "answer": 0,
    "explanation": "Transportstyrelsen anger att taxameterreglerna även gäller förare som kör för app-tjänster.",
    "source": "Transportstyrelsen – Taxameter",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/taxameter/",
    "difficulty": "medel"
  },
  {
    "id": "TP033",
    "category": "säkerhet",
    "question": "En passagerare sätter sig utan säkerhetsbälte. Vad gör du?",
    "options": [
      "Startar eftersom passageraren ansvarar själv",
      "Uppmanar passageraren att använda bältet och startar först när det är säkert och lagligt",
      "Kör långsamt utan att säga något"
    ],
    "answer": 1,
    "explanation": "Som yrkesförare ska du arbeta för en trygg och säker resa. Säkerställ att passagerare använder tillgängligt bälte enligt reglerna.",
    "source": "Trafikverket – Kunskapsområden",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP034",
    "category": "säkerhet",
    "question": "En kund ber dig skriva ett sms medan du kör. Vad gör du?",
    "options": [
      "Skriver snabbt vid rödljus",
      "Avböjer och stannar på en säker plats om det behövs",
      "Låter kunden hålla telefonen framför dig"
    ],
    "answer": 1,
    "explanation": "Du ska inte låta distraktioner påverka körningen. Använd säker plats om du behöver hantera navigation eller kommunikation.",
    "source": "Transportstyrelsen – trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "lätt"
  },
  {
    "id": "TP035",
    "category": "säkerhet",
    "question": "Du känner dig mycket trött under ett arbetspass. Vad är rätt beslut?",
    "options": [
      "Fortsätta och öppna fönstret",
      "Ta paus på en säker plats och fortsätta först när du är tillräckligt alert",
      "Öka musiken"
    ],
    "answer": 1,
    "explanation": "Trötthet försämrar uppmärksamhet och reaktion. Avbryt körningen på ett säkert ställe och vila.",
    "source": "Trafikverket – Säkerhet och beteende",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP036",
    "category": "säkerhet",
    "question": "En passagerare med rullstol behöver hjälp vid hämtning. Vad gör du först?",
    "options": [
      "Frågar respektfullt vilken hjälp personen önskar och följer säkra rutiner",
      "Tar tag i rullstolen utan att fråga",
      "Ber personen vänta medan du kör närmare trottoaren"
    ],
    "answer": 0,
    "explanation": "Fråga personen om önskat stöd. Respektera självbestämmande och använd fordonets godkända hjälpmedel och säkra förankringsrutiner.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "medel"
  },
  {
    "id": "TP037",
    "category": "säkerhet",
    "question": "En passagerare verkar ha svårt att höra dig. Hur kommunicerar du bäst?",
    "options": [
      "Höjer rösten kraftigt utan att fråga",
      "Vänder dig mot personen, talar tydligt och frågar vilket sätt som fungerar bäst",
      "Ignorerar personen och kör"
    ],
    "answer": 1,
    "explanation": "Anpassa kommunikationen respektfullt och fråga vilket stöd som fungerar. Bemötandet ska ta hänsyn till olika behov.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "lätt"
  },
  {
    "id": "TP038",
    "category": "säkerhet",
    "question": "En kund vill bli avsläppt på en plats där bilen skulle blockera ett övergångsställe. Vad gör du?",
    "options": [
      "Stannar där kunden pekar",
      "Förklarar och väljer en närliggande säker och tillåten plats",
      "Stannar med varningsblinkers på övergångsstället"
    ],
    "answer": 1,
    "explanation": "Föraren ansvarar för att stanna och släppa av passagerare på ett säkert och lagligt sätt. Kundens önskemål går inte före trafiksäkerheten.",
    "source": "Trafikverket – Körprov taxi",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "medel"
  },
  {
    "id": "TP039",
    "category": "säkerhet",
    "question": "Du får en GPS-instruktion som verkar leda in på en enkelriktad gata åt fel håll. Vad gör du?",
    "options": [
      "Följer GPS eftersom den alltid har rätt",
      "Följer skyltning och trafikregler och väljer en säker alternativ väg",
      "Kör in försiktigt"
    ],
    "answer": 1,
    "explanation": "Föraren ansvarar alltid för körningen. GPS är ett hjälpmedel och får aldrig ersätta skyltar, omdöme eller trafikregler.",
    "source": "Trafikverket – Navigering",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP040",
    "category": "säkerhet",
    "question": "En passagerare blir aggressiv och hotfull. Vad bör du prioritera?",
    "options": [
      "Att slutföra resan till varje pris",
      "Din och passagerarens säkerhet; stanna på en lämplig säker plats och kalla på hjälp vid behov",
      "Att argumentera tills kunden lugnar sig"
    ],
    "answer": 1,
    "explanation": "Säkerheten går först. Undvik att eskalera situationen och sök hjälp om hotet kvarstår.",
    "source": "Trafikverket – Riskmedvetenhet",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "medel"
  },
  {
    "id": "TP041",
    "category": "säkerhet",
    "question": "Varför bör du kontrollera att dörrar och bagage är säkrade innan avfärd?",
    "options": [
      "För att undvika att passagerare eller föremål skadas",
      "För att spara bränsle",
      "Det behövs bara på motorväg"
    ],
    "answer": 0,
    "explanation": "En enkel säkerhetskontroll före start minskar risken för personskador och att bagage faller ut eller stör körningen.",
    "source": "Trafikverket – Säkerhet",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP042",
    "category": "säkerhet",
    "question": "En passagerare får plötsligt bröstsmärta och verkar allvarligt sjuk. Vad gör du?",
    "options": [
      "Kör vidare till destinationen",
      "Stanna säkert, bedöm situationen och ring 112 vid misstanke om akut livshotande tillstånd",
      "Låter passageraren själv bestämma utan att agera"
    ],
    "answer": 1,
    "explanation": "Vid misstanke om akut allvarligt tillstånd ska du prioritera säker stoppplats och larma 112. Följ larmoperatörens instruktioner.",
    "source": "SOS Alarm – 112",
    "sourceUrl": "https://www.sosalarm.se/112-och-andra-viktiga-nummer/",
    "difficulty": "medel"
  },
  {
    "id": "TP043",
    "category": "miljö",
    "question": "Vilket körsätt minskar normalt bränsleförbrukningen?",
    "options": [
      "Jämn körning, framförhållning och mjuka accelerationer",
      "Hårda accelerationer och sena inbromsningar",
      "Låta motorn gå på tomgång vid varje kort stopp"
    ],
    "answer": 0,
    "explanation": "Planerad, jämn körning och god framförhållning minskar onödig energiåtgång och kan ge bekvämare resor.",
    "source": "Trafikverket – Körekonomi och miljö",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP044",
    "category": "miljö",
    "question": "Du väntar länge på en kund utomhus och bilen står stilla. Vad är normalt bäst för miljön?",
    "options": [
      "Låta motorn gå hela tiden",
      "Stänga av motorn när det är lämpligt och säkert",
      "Varva motorn ibland"
    ],
    "answer": 1,
    "explanation": "Onödig tomgång ger utsläpp och förbrukar bränsle. Följ gällande lokala regler och tänk på säkerhet och komfort.",
    "source": "Trafikverket – Miljö",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP045",
    "category": "miljö",
    "question": "Varför är rätt däcktryck viktigt?",
    "options": [
      "Det kan minska rullmotstånd och däckslitage samt bidra till säker körning",
      "Det påverkar aldrig bilen",
      "Det gör att bromsarna inte behöver kontrolleras"
    ],
    "answer": 0,
    "explanation": "Rätt däcktryck bidrar till säkerhet, ekonomi och däckens livslängd. Följ fordonstillverkarens rekommendationer.",
    "source": "Trafikverket – Fordonskännedom",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP046",
    "category": "fordonskunskap",
    "question": "En varningslampa för bromssystemet tänds under körning. Vad gör du?",
    "options": [
      "Ignorerar den om bilen känns normal",
      "Stannar säkert så snart det är möjligt och undersöker felet; kör inte vidare om bromsarna kan vara osäkra",
      "Kör snabbare till verkstaden"
    ],
    "answer": 1,
    "explanation": "Bromssystemet är säkerhetskritiskt. Stanna säkert och fortsätt inte köra om bromsfunktionen kan vara påverkad.",
    "source": "Trafikverket – Fordonskännedom",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP047",
    "category": "fordonskunskap",
    "question": "Varför ska vindrutans siktfält hållas rent och fritt?",
    "options": [
      "För att föraren ska kunna upptäcka risker och se trafiken",
      "Bara för att bilen ska se fin ut",
      "Det behövs endast vid mörkerkörning"
    ],
    "answer": 0,
    "explanation": "God sikt är grundläggande för trafiksäkerheten. Rengör rutor och kontrollera torkarblad och spolare.",
    "source": "Trafikverket – Fordonskännedom",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP048",
    "category": "fordonskunskap",
    "question": "Vad bör du göra om ett däck har synlig skada eller kraftigt felaktigt lufttryck?",
    "options": [
      "Köra vidare om resan är kort",
      "Bedöma säkerheten och åtgärda problemet innan fortsatt körning",
      "Sänka radion"
    ],
    "answer": 1,
    "explanation": "Däckens skick och lufttryck påverkar väggrepp och stabilitet. Kör inte vidare med ett däck som kan vara trafikfarligt.",
    "source": "Trafikverket – Fordonskännedom",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP049",
    "category": "fordonskunskap",
    "question": "Varför är det viktigt att kontrollera belysningen före arbetspasset?",
    "options": [
      "För att upptäcka fel som kan försämra sikten eller göra bilen svår att upptäcka",
      "För att batteriet ska laddas snabbare",
      "Endast för att undvika böter"
    ],
    "answer": 0,
    "explanation": "Fungerande belysning hjälper dig att se och synas. Kontrollera lampor och åtgärda fel innan körning.",
    "source": "Trafikverket – Fordonskännedom",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP050",
    "category": "navigation",
    "question": "GPS visar en rutt men en tillfällig avstängningsskylt visar att vägen är stängd. Vad gör du?",
    "options": [
      "Följer GPS-rutten",
      "Följer den tillfälliga skyltningen och väljer en säker omledning",
      "Kör fram till avspärrningen och chansar"
    ],
    "answer": 1,
    "explanation": "Tillfällig vägmärkning och avspärrningar ska respekteras. GPS-information kan vara inaktuell.",
    "source": "Trafikverket – Navigering och körprov",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP051",
    "category": "navigation",
    "question": "Du behöver ändra destination i GPS under färd. Vad är säkrast?",
    "options": [
      "Knappa in adressen medan du kör",
      "Stanna på en lämplig säker plats innan du hanterar enheten",
      "Be passageraren hålla telefonen framför ratten"
    ],
    "answer": 1,
    "explanation": "Undvik att distraheras. Stanna säkert innan du gör inställningar som tar uppmärksamhet från körningen.",
    "source": "Trafikverket – Navigering",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP052",
    "category": "navigation",
    "question": "En kund anger en adress som finns på flera orter. Vad bör du göra?",
    "options": [
      "Välja den första träffen i GPS",
      "Bekräfta ort, gata och gärna nummer med kunden innan avfärd",
      "Gissa utifrån kundens dialekt"
    ],
    "answer": 1,
    "explanation": "Bekräfta destinationen för att undvika felkörning och onödig tidsåtgång. God kommunikation är en del av yrkesrollen.",
    "source": "Trafikverket – Bemötande och navigering",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP053",
    "category": "navigation",
    "question": "Vad är förarens ansvar när GPS och vägmärken visar olika saker?",
    "options": [
      "GPS har företräde",
      "Vägmärken och gällande trafikregler ska följas",
      "Passageraren får avgöra"
    ],
    "answer": 1,
    "explanation": "Föraren ansvarar för att följa trafikregler och skyltning. Navigationsutrustning är endast ett hjälpmedel.",
    "source": "Trafikverket – Navigering",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP054",
    "category": "bemötande",
    "question": "En passagerare ber om en annan temperatur i bilen. Vad är ett bra bemötande?",
    "options": [
      "Avfärda önskemålet",
      "Försöka anpassa temperaturen om det kan göras säkert och hänsynsfullt",
      "Stänga av ventilationen helt utan att fråga"
    ],
    "answer": 1,
    "explanation": "Ett serviceinriktat bemötande innebär att lyssna och försöka möta rimliga önskemål utan att äventyra säkerheten.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "lätt"
  },
  {
    "id": "TP055",
    "category": "bemötande",
    "question": "En passagerare har en synnedsättning och vill ha hjälp att hitta rätt dörr. Vad gör du?",
    "options": [
      "Frågar om personen vill ha hjälp och hur den i så fall önskas",
      "Tar tag i personen utan förvarning",
      "Ropar från bilen att personen får hitta själv"
    ],
    "answer": 0,
    "explanation": "Fråga först och följ personens instruktioner. Respektera självbestämmande och kommunicera tydligt.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "lätt"
  },
  {
    "id": "TP056",
    "category": "bemötande",
    "question": "En kund är missnöjd med färdvägen. Vad är bäst?",
    "options": [
      "Lyssna lugnt, förklara rutten och fråga om kunden önskar en annan väg om det är möjligt",
      "Börja argumentera",
      "Ignorera kunden"
    ],
    "answer": 0,
    "explanation": "Lugn kommunikation och tydlig information kan förebygga konflikter. Föraren ansvarar samtidigt för en säker och lämplig färdväg.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "lätt"
  },
  {
    "id": "TP057",
    "category": "arbetsmiljö",
    "question": "Du har arbetat många timmar och märker att koncentrationen sjunker. Vad är bäst?",
    "options": [
      "Planera in paus och avstå från fortsatt körning om du inte kan köra säkert",
      "Ta fler uppdrag för att bli klar snabbare",
      "Köra närmare framförvarande för att hålla tempot"
    ],
    "answer": 0,
    "explanation": "Riskmedvetenhet innebär att känna igen trötthet och andra arbetsmiljörisker och agera innan de påverkar körningen.",
    "source": "Trafikverket – Arbetsmiljö och riskmedvetenhet",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP058",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare har svårt att kliva in i bilen. Vad är första steget?",
    "options": [
      "Fråga vilken hjälp personen vill ha och kontrollera att det finns en säker lösning",
      "Lyfta personen utan förvarning",
      "Avboka direkt"
    ],
    "answer": 0,
    "explanation": "Utgå från passagerarens önskemål och använd säkra metoder. Bemötandet ska vara respektfullt och individuellt.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "lätt"
  },
  {
    "id": "TP059",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare med kognitiv funktionsnedsättning verkar osäker på destinationen. Vad bör du göra?",
    "options": [
      "Bekräfta destination och önskemål lugnt och tydligt, utan att stressa personen",
      "Gissa destinationen",
      "Köra till den adress som GPS föreslår"
    ],
    "answer": 0,
    "explanation": "Tydlig, lugn kommunikation och bekräftelse av resmålet minskar risken för missförstånd.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "medel"
  },
  {
    "id": "TP060",
    "category": "säkerhet",
    "question": "Du ska hämta en kund vid en hårt trafikerad gata. Var bör du stanna?",
    "options": [
      "Där kunden vinkar, även om det är olämpligt",
      "På en laglig och säker plats där påstigning kan ske utan att skapa fara eller hinder",
      "Mitt i körfältet med varningsblinkers"
    ],
    "answer": 1,
    "explanation": "Föraren måste själv bedöma var stopp kan ske säkert och lagligt. Varningsblinkers gör inte en olämplig plats tillåten.",
    "source": "Trafikverket – Körprov taxi",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "medel"
  },
  {
    "id": "TP061",
    "category": "säkerhet",
    "question": "Du upptäcker att ett barn behöver färdas i bilen. Vad måste du säkerställa?",
    "options": [
      "Att barnet använder lämplig och godkänd skyddsanordning enligt reglerna",
      "Att barnet sitter i knät på en vuxen",
      "Att barnet bara sitter i baksätet utan bälte"
    ],
    "answer": 0,
    "explanation": "Barn ska färdas med lämplig skyddsanordning enligt gällande regler och barnets längd och vikt. Kontrollera alltid korrekt montering.",
    "source": "Transportstyrelsen – Barn i bil",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafiksakerhet/barn-i-bil/",
    "difficulty": "medel"
  },
  {
    "id": "TP062",
    "category": "trafikregler",
    "question": "Du kör bakom en buss som stannat vid hållplats i tätort. Vad bör du vara särskilt uppmärksam på?",
    "options": [
      "Passagerare kan gå ut framför eller bakom bussen",
      "Bussen får aldrig lämna hållplatsen",
      "Det finns ingen särskild risk"
    ],
    "answer": 0,
    "explanation": "Var beredd på gående som korsar vägen och på buss som lämnar hållplats. Anpassa hastigheten och håll avstånd.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "difficulty": "medel"
  },
  {
    "id": "TP063",
    "category": "taxilagstiftning",
    "question": "Vilka två huvudområden ingår i delprov 2?",
    "options": [
      "Taxitrafiklagstiftning och trafiklagstiftning",
      "Kundservice och fordonsvård",
      "Navigering och miljö"
    ],
    "answer": 0,
    "explanation": "Delprov 2 omfattar taxitrafiklagstiftning och trafiklagstiftning enligt föreskrifterna om taxiförarlegitimation.",
    "source": "TSFS 2021:119",
    "sourceUrl": "https://webapp.trafikverket.se/TRVFS/pdf/TSFS%202021nr119.pdf",
    "difficulty": "lätt"
  },
  {
    "id": "TP064",
    "category": "taxilagstiftning",
    "question": "Vilka områden ingår i delprov 1 enligt föreskrifterna?",
    "options": [
      "Navigering, körekonomi, miljö, säkerhet, bemötande, funktionsnedsättningar, arbetsmiljö/risk och fordonskännedom",
      "Endast trafikskyltar och taxameter",
      "Bara körteknik"
    ],
    "answer": 0,
    "explanation": "Delprov 1 omfattar bland annat navigering, körekonomi, miljö, säkerhet, bemötande, funktionsnedsättningar, arbetsmiljö/riskmedvetenhet och fordonskännedom.",
    "source": "TSFS 2021:119",
    "sourceUrl": "https://webapp.trafikverket.se/TRVFS/pdf/TSFS%202021nr119.pdf",
    "difficulty": "medel"
  },
  {
    "id": "TP065",
    "category": "säkerhet",
    "question": "Varför ska du undvika hårda inbromsningar när det inte behövs?",
    "options": [
      "De kan överraska och skada passagerare samt försämra komforten",
      "De gör alltid resan kortare",
      "De minskar däckslitage"
    ],
    "answer": 0,
    "explanation": "Framförhållning och mjuk körning ger en säkrare och bekvämare resa, särskilt för passagerare som kan vara sköra eller ha rörelseproblem.",
    "source": "Trafikverket – Säkerhet och beteende",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP066",
    "category": "navigation",
    "question": "Du ska hämta en passagerare vid en stor terminal. Vad är bäst?",
    "options": [
      "Planera hämtplats i förväg och följ terminalens skyltning och anvisningar",
      "Stanna på första lediga plats oavsett skyltning",
      "Köra runt tills kunden hittar dig"
    ],
    "answer": 0,
    "explanation": "Planera hämtningen, kommunicera tydligt och följ skyltning och lokala trafikregler. Det minskar stress och risker.",
    "source": "Trafikverket – Navigering och körprov",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP067",
    "category": "miljö",
    "question": "Varför kan en välplanerad rutt vara bättre för miljön?",
    "options": [
      "Den kan minska onödig körsträcka, tomgång och ryckig körning",
      "Den gör att hastighetsgränser kan överskridas",
      "Den gör att bilen inte behöver underhåll"
    ],
    "answer": 0,
    "explanation": "Effektiv planering kan minska onödig körning och bränsleförbrukning. Trafiksäkerhet och lagliga vägar går alltid först.",
    "source": "Trafikverket – Navigering och körekonomi",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP068",
    "category": "fordonskunskap",
    "question": "Vad är en viktig kontroll före arbetspassets början?",
    "options": [
      "Att däck, belysning, rutor, torkare och säkerhetsutrustning är i gott skick",
      "Att endast kontrollera bilens färg",
      "Att kontrollera radion"
    ],
    "answer": 0,
    "explanation": "Förebyggande underhåll och enklare kontroller hjälper dig upptäcka fel som kan påverka säkerheten.",
    "source": "Trafikverket – Fordonskännedom",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP069",
    "category": "säkerhet",
    "question": "Du kommer fram till en olycksplats där det finns skadade. Vad är första prioritet?",
    "options": [
      "Skydda dig själv och platsen, larma 112 vid behov och följ larmoperatörens råd",
      "Flytta alla skadade direkt oavsett skador",
      "Fortsätta köra för att inte blockera vägen"
    ],
    "answer": 0,
    "explanation": "Säkra olycksplatsen utan att utsätta dig själv eller andra för fara. Larma 112 vid behov och följ instruktioner.",
    "source": "SOS Alarm – 112",
    "sourceUrl": "https://www.sosalarm.se/112-och-andra-viktiga-nummer/",
    "difficulty": "medel"
  },
  {
    "id": "TP070",
    "category": "bemötande",
    "question": "En passagerare vill resa i tystnad. Vad gör du?",
    "options": [
      "Respekterar önskemålet och håller en professionell service",
      "Fortsätter prata för att vara trevlig",
      "Spelar hög musik"
    ],
    "answer": 0,
    "explanation": "God service innebär att anpassa bemötandet efter passagerarens önskemål när det är möjligt.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "lätt"
  },
  {
    "id": "TP071",
    "category": "trafikregler",
    "question": "Du närmar dig en järnvägskorsning. Vad är viktigt?",
    "options": [
      "Följa signaler och bommar och aldrig köra in om du riskerar att bli stående på spåret",
      "Köra över snabbt om bommarna börjar gå ner",
      "Stanna på spåret om bilen framför stannar"
    ],
    "answer": 0,
    "explanation": "Kör aldrig in i en järnvägskorsning om du inte kan passera helt. Respektera alltid ljus- och ljudsignaler samt bommar.",
    "source": "Trafikverket – Järnvägskorsningar",
    "sourceUrl": "https://www.trafikverket.se/resa-och-trafik/trafiksakerhet/sakerhet-vid-jarnvag/",
    "difficulty": "medel"
  },
  {
    "id": "TP072",
    "category": "säkerhet",
    "question": "Du ska lasta in en tung resväska. Vad är lämpligast?",
    "options": [
      "Placera och säkra bagaget så att det inte kan förflyttas eller skada någon",
      "Lägga väskan löst i baksätet",
      "Placera väskan framför förarens fötter"
    ],
    "answer": 0,
    "explanation": "Bagage ska placeras så att det inte stör föraren eller kan skada passagerare vid inbromsning eller undanmanöver.",
    "source": "Trafikverket – Säkerhet",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP073",
    "category": "taxilagstiftning",
    "question": "Vad gäller om ett fast pris har avtalats för en taxiresa?",
    "options": [
      "Det fasta priset ska registreras i taxametern när körningen påbörjas om fordonet använder taxameter",
      "Det behöver aldrig registreras",
      "Föraren får ändra priset efter resan"
    ],
    "answer": 0,
    "explanation": "Transportstyrelsen anger att om priset är uppgjort på förhand ska priset registreras i taxametern innan körningen påbörjas.",
    "source": "Transportstyrelsen – Taxameter",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/taxameter/",
    "difficulty": "medel"
  },
  {
    "id": "TP074",
    "category": "trafikregler",
    "question": "Du kör på en väg med halt väglag. Vad bör du göra?",
    "options": [
      "Öka avståndet och anpassa hastigheten efter greppet",
      "Följa framförvarande på samma avstånd som torr väg",
      "Bromsa hårt i kurvor"
    ],
    "answer": 0,
    "explanation": "Halt väglag kräver lägre hastighet, större säkerhetsavstånd och mjuka manövrer.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "difficulty": "lätt"
  },
  {
    "id": "TP075",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare har en led- eller rörelsenedsättning. Hur kan du underlätta resan?",
    "options": [
      "Fråga om personen vill ha hjälp, ge tid och undvika att stressa på- och avstigning",
      "Dra personen snabbt in i bilen",
      "Anta att alla med samma diagnos behöver samma hjälp"
    ],
    "answer": 0,
    "explanation": "Behov varierar mellan individer. Fråga, lyssna och anpassa hjälpen efter personens önskemål.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "lätt"
  },
  {
    "id": "TP076",
    "category": "arbetsmiljö",
    "question": "Varför är det viktigt att justera stol, ratt och speglar innan du kör?",
    "options": [
      "För att få god kontroll, sikt och en ergonomisk körställning",
      "För att passagerarna ska se bättre",
      "Det påverkar bara komforten vid långresor"
    ],
    "answer": 0,
    "explanation": "Rätt körställning och inställda speglar förbättrar kontroll, sikt och minskar belastning under arbetspasset.",
    "source": "Trafikverket – Säkerhet och fordonskännedom",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP077",
    "category": "trafikregler",
    "question": "Du närmar dig en plats där en polis dirigerar trafiken. Vad gäller?",
    "options": [
      "Polisens anvisningar går före trafiksignaler och vanliga trafikregler",
      "Du följer alltid trafiksignalen",
      "Du följer GPS"
    ],
    "answer": 0,
    "explanation": "Trafikant ska följa polismans anvisningar i trafiken även om de avviker från signaler eller skyltar.",
    "source": "Trafikförordningen",
    "sourceUrl": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikforordning-19981276_sfs-1998-1276/",
    "difficulty": "medel"
  },
  {
    "id": "TP078",
    "category": "säkerhet",
    "question": "Du upptäcker att en passagerare inte kan stänga sin dörr ordentligt. Vad gör du?",
    "options": [
      "Kör försiktigt ändå",
      "Startar inte förrän dörren är ordentligt stängd och felet är åtgärdat",
      "Ber passageraren hålla i dörren"
    ],
    "answer": 1,
    "explanation": "Fordonet ska vara säkert innan färden startar. En dörr som inte går att stänga ordentligt innebär en tydlig risk.",
    "source": "Trafikverket – Fordonskännedom och säkerhet",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP079",
    "category": "navigation",
    "question": "Du är osäker på vilken av två liknande adresser kunden menar. Vad är bäst?",
    "options": [
      "Fråga kunden och bekräfta destinationen innan du kör",
      "Välja den närmaste automatiskt",
      "Köra till båda i tur och ordning utan att fråga"
    ],
    "answer": 0,
    "explanation": "Bekräfta destinationen för att undvika missförstånd. Effektiv navigation bygger på korrekt information.",
    "source": "Trafikverket – Navigering och bemötande",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP080",
    "category": "miljö",
    "question": "Vilket av följande bidrar oftast till onödiga utsläpp?",
    "options": [
      "Onödig tomgångskörning",
      "Planerad körning",
      "Rätt däcktryck"
    ],
    "answer": 0,
    "explanation": "Onödig tomgång förbrukar bränsle och ger utsläpp utan att bilen förflyttas.",
    "source": "Trafikverket – Miljö och körekonomi",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP081",
    "category": "bemötande",
    "question": "En passagerare frågar om resan kan ta en annan väg för att undvika en viss plats. Vad gör du?",
    "options": [
      "Lyssnar, förklarar möjliga alternativ och väljer en säker och laglig väg",
      "Vägrar alltid ändra färdväg",
      "Kör utan att kontrollera om alternativet är möjligt"
    ],
    "answer": 0,
    "explanation": "Lyhördhet och tydlig kommunikation är viktigt. Föraren ansvarar för att alternativet är säkert och följer trafikreglerna.",
    "source": "Transportstyrelsen – Kunskapskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforare/kunskapskrav/",
    "difficulty": "medel"
  },
  {
    "id": "TP082",
    "category": "fordonskunskap",
    "question": "Varför ska du kontrollera att backspeglarna är rätt inställda?",
    "options": [
      "För att minska döda vinklar och få bättre uppsikt runt fordonet",
      "För att förbättra ljudet i bilen",
      "För att spara bränsle"
    ],
    "answer": 0,
    "explanation": "Rätt inställda speglar förbättrar uppsikten, men ersätter inte kontroll av döda vinkeln.",
    "source": "Trafikverket – Fordonskännedom",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP083",
    "category": "trafikregler",
    "question": "Vad ska du göra när du passerar en olycksplats?",
    "options": [
      "Sänka hastigheten och visa särskild hänsyn",
      "Titta länge på olyckan och hålla samma fart",
      "Köra nära räddningsfordon"
    ],
    "answer": 0,
    "explanation": "Du ska anpassa hastigheten och visa hänsyn vid olycksplatser. Undvik att skapa ytterligare risker.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "difficulty": "lätt"
  },
  {
    "id": "TP084",
    "category": "taxilagstiftning",
    "question": "Vilket påstående om fri prissättning för taxi är korrekt?",
    "options": [
      "Taxipriser är fria, därför är tydlig prisinformation viktig",
      "Alla taxibolag måste ha exakt samma pris",
      "Det finns alltid ett gemensamt nationellt maxpris"
    ],
    "answer": 0,
    "explanation": "Det råder fri prissättning på taxiresor. Därför ska kunden kunna ta del av tydlig prisinformation före resan.",
    "source": "Transportstyrelsen – Taxikunder",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxikunder/",
    "difficulty": "medel"
  },
  {
    "id": "TP085",
    "category": "säkerhet",
    "question": "En passagerare öppnar dörren mot cykeltrafik. Vad bör du göra?",
    "options": [
      "Påminna passageraren om att kontrollera trafiken och hjälpa till att välja en säker plats för avstigning",
      "Ignorera situationen",
      "Stanna i cykelbanan för att skydda dörren"
    ],
    "answer": 0,
    "explanation": "Planera avstigning på en säker plats och var uppmärksam på cyklister och annan trafik. Hjälp passageraren att undvika dörröppning i trafiken.",
    "source": "Trafikverket – Säkerhet och körprov",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "medel"
  },
  {
    "id": "TP086",
    "category": "trafikregler",
    "question": "Vad innebär att köra med tillräckligt avstånd till framförvarande fordon?",
    "options": [
      "Du ska kunna reagera och stanna utan att köra in i fordonet framför",
      "Du ska ligga så nära som möjligt för att hindra andra",
      "Avståndet saknar betydelse i låg fart"
    ],
    "answer": 0,
    "explanation": "Säkerhetsavstånd ger tid och utrymme att reagera. Öka avståndet vid halka, regn, mörker och tung last.",
    "source": "Transportstyrelsen – Hastighet och trafiksäkerhet",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "difficulty": "lätt"
  },
  {
    "id": "TP087",
    "category": "arbetsmiljö",
    "question": "Varför bör du variera arbetsställning och ta pauser under långa arbetspass?",
    "options": [
      "För att minska belastning och bibehålla uppmärksamhet",
      "För att bilen ska svalna",
      "För att kunna köra fortare"
    ],
    "answer": 0,
    "explanation": "Pauser och ergonomi kan minska belastning och hjälpa dig behålla koncentrationen under arbetet.",
    "source": "Trafikverket – Arbetsmiljö",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP088",
    "category": "säkerhet",
    "question": "Du får ett uppdrag i ett område du inte känner till. Vad är ett bra arbetssätt?",
    "options": [
      "Planera rutten före avfärd och använd navigation utan att distraheras under körning",
      "Köra runt tills du känner igen dig",
      "Låta kunden sköta all körning från passagerarsätet"
    ],
    "answer": 0,
    "explanation": "Planering och säker användning av karta/GPS ingår i kunskapskraven för taxiförare.",
    "source": "Trafikverket – Taxiförarlegitimation",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP089",
    "category": "taxilagstiftning",
    "question": "Vilken uppgift har taxiförarlegitimationen i fordonet?",
    "options": [
      "Den visar att föraren har behörighet att arbeta som taxiförare och gör föraren identifierbar",
      "Den ersätter körkortet",
      "Den fungerar som taxameterkvitto"
    ],
    "answer": 0,
    "explanation": "Taxiförarlegitimation krävs för att arbeta som taxiförare och ska vara väl synlig i fordonet.",
    "source": "Trafikverket – Taxiförarlegitimation och Transportstyrelsen – Taxikunder",
    "sourceUrl": "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/",
    "difficulty": "lätt"
  },
  {
    "id": "TP090",
    "category": "trafikregler",
    "question": "Närmar dig en korsning med skymd sikt och ingen skyltning. Vad är säkrast?",
    "options": [
      "Sänka farten och vara beredd att lämna företräde enligt högerregeln",
      "Öka farten för att komma igenom först",
      "Utgå från att den bredaste vägen alltid har företräde"
    ],
    "answer": 0,
    "explanation": "Högerregeln gäller där inget annat reglerar väjningsplikten. Skymd sikt kräver extra låg hastighet och beredskap.",
    "source": "Transportstyrelsen – Väjningsregler",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "lätt"
  },
  {
    "id": "TP091",
    "category": "trafikregler",
    "question": "Du ska svänga höger över en cykelpassage och en cyklist kommer parallellt. Vad gör du?",
    "options": [
      "Anpassa farten och lämna cyklisten företräde när reglerna kräver det; sväng först när det kan ske säkert",
      "Svänga snabbt eftersom bilen har grönt",
      "Tuta så att cyklisten stannar"
    ],
    "answer": 0,
    "explanation": "Vid sväng ska föraren vara särskilt uppmärksam på cyklister och gående och följa väjningsreglerna vid passagen.",
    "source": "Transportstyrelsen – Cykelpassage och sväng",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "lätt"
  },
  {
    "id": "TP092",
    "category": "trafikregler",
    "question": "Du ska svänga höger över en cykelpassage och en cyklist kommer parallellt. Vilket handlingssätt är korrekt?",
    "options": [
      "Svänga snabbt eftersom bilen har grönt",
      "Tuta så att cyklisten stannar",
      "Anpassa farten och lämna cyklisten företräde när reglerna kräver det; sväng först när det kan ske säkert"
    ],
    "answer": 2,
    "explanation": "Vid sväng ska föraren vara särskilt uppmärksam på cyklister och gående och följa väjningsreglerna vid passagen.",
    "source": "Transportstyrelsen – Cykelpassage och sväng",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "medel"
  },
  {
    "id": "TP093",
    "category": "trafikregler",
    "question": "Du kör ut från en bensinstation till en väg. Vilken regel gäller?",
    "options": [
      "Du har väjningsplikt mot trafiken på vägen",
      "Trafik på vägen ska lämna dig företräde",
      "Högerregeln ger dig företräde"
    ],
    "answer": 0,
    "explanation": "Den som kör ut från en bensinstation, fastighet eller liknande utfart har väjningsplikt.",
    "source": "Transportstyrelsen – Utfartsregeln",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "lätt"
  },
  {
    "id": "TP094",
    "category": "trafikregler",
    "question": "Som taxiförare kör du ut från en bensinstation till en väg. Vilken regel gäller?",
    "options": [
      "Högerregeln ger dig företräde",
      "Du har väjningsplikt mot trafiken på vägen",
      "Trafik på vägen ska lämna dig företräde"
    ],
    "answer": 1,
    "explanation": "Den som kör ut från en bensinstation, fastighet eller liknande utfart har väjningsplikt.",
    "source": "Transportstyrelsen – Utfartsregeln",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "medel"
  },
  {
    "id": "TP095",
    "category": "trafikregler",
    "question": "Du närmar dig ett övergångsställe där sikten skyms av en parkerad skåpbil. Vad bör du göra?",
    "options": [
      "Sänka hastigheten och kunna stanna omedelbart",
      "Hålla samma fart eftersom ingen syns",
      "Placera bilen närmare den parkerade bilen för bättre sikt"
    ],
    "answer": 0,
    "explanation": "Du ska anpassa hastigheten så att du kan stanna för gående; skymd sikt kräver särskild försiktighet.",
    "source": "Transportstyrelsen – Övergångsställe",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/overgangsstalle/",
    "difficulty": "lätt"
  },
  {
    "id": "TP096",
    "category": "trafikregler",
    "question": "Du får möte på en smal väg där två fordon inte kan passera samtidigt. Vad gör du?",
    "options": [
      "Sänker farten och samarbetar så att mötet kan ske säkert",
      "Kräver alltid att mötande backar",
      "Kör ut på vägrenen utan att kontrollera underlaget"
    ],
    "answer": 0,
    "explanation": "Förare ska visa hänsyn och anpassa hastigheten och placeringen efter vägens bredd och mötande trafik.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "lätt"
  },
  {
    "id": "TP097",
    "category": "trafikregler",
    "question": "Du får möte på en smal väg där två fordon inte kan passera samtidigt. Vilket handlingssätt är korrekt?",
    "options": [
      "Kräver alltid att mötande backar",
      "Kör ut på vägrenen utan att kontrollera underlaget",
      "Sänker farten och samarbetar så att mötet kan ske säkert"
    ],
    "answer": 2,
    "explanation": "Förare ska visa hänsyn och anpassa hastigheten och placeringen efter vägens bredd och mötande trafik.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/",
    "difficulty": "medel"
  },
  {
    "id": "TP098",
    "category": "trafikregler",
    "question": "Du kör in i en tunnel och trafiken framför bromsar kraftigt. Vad är rätt?",
    "options": [
      "Hålla avstånd, vara uppmärksam och undvika onödiga filbyten",
      "Stanna i tunneln för att kontrollera kartan",
      "Öka farten för att undvika kö"
    ],
    "answer": 0,
    "explanation": "I tunnel behöver du hålla avstånd och följa anvisningar; stanna inte utan anledning.",
    "source": "Trafikverket – Säker körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP099",
    "category": "trafikregler",
    "question": "Som taxiförare kör du in i en tunnel och trafiken framför bromsar kraftigt. Vad är rätt?",
    "options": [
      "Öka farten för att undvika kö",
      "Hålla avstånd, vara uppmärksam och undvika onödiga filbyten",
      "Stanna i tunneln för att kontrollera kartan"
    ],
    "answer": 1,
    "explanation": "I tunnel behöver du hålla avstånd och följa anvisningar; stanna inte utan anledning.",
    "source": "Trafikverket – Säker körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP100",
    "category": "trafikregler",
    "question": "Du närmar dig en järnvägsövergång med rött blinkande ljus. Vad gör du?",
    "options": [
      "Stannar före signalen och kör inte över förrän det är tillåtet",
      "Kör över om bommen ännu inte har gått ner",
      "Kör runt bommen om tåget inte syns"
    ],
    "answer": 0,
    "explanation": "Rött ljus vid järnvägskorsning innebär stopp. Passera aldrig när varningssignal visar stopp.",
    "source": "Transportstyrelsen – Järnvägskorsning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP101",
    "category": "trafikregler",
    "question": "Du närmar dig en järnvägsövergång med rött blinkande ljus. Vilket handlingssätt är korrekt?",
    "options": [
      "Kör över om bommen ännu inte har gått ner",
      "Kör runt bommen om tåget inte syns",
      "Stannar före signalen och kör inte över förrän det är tillåtet"
    ],
    "answer": 2,
    "explanation": "Rött ljus vid järnvägskorsning innebär stopp. Passera aldrig när varningssignal visar stopp.",
    "source": "Transportstyrelsen – Järnvägskorsning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP102",
    "category": "trafikregler",
    "question": "Du kör på motorväg och missar avfarten. Vad gör du?",
    "options": [
      "Fortsätter till nästa avfart",
      "Backar på vägrenen",
      "Vänder vid närmaste öppning"
    ],
    "answer": 0,
    "explanation": "Backning och vändning på motorväg är förbjudet och mycket farligt. Fortsätt till nästa avfart.",
    "source": "Trafikverket – Motorväg",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP103",
    "category": "trafikregler",
    "question": "Som taxiförare kör du på motorväg och missar avfarten. Vad gör du?",
    "options": [
      "Vänder vid närmaste öppning",
      "Fortsätter till nästa avfart",
      "Backar på vägrenen"
    ],
    "answer": 1,
    "explanation": "Backning och vändning på motorväg är förbjudet och mycket farligt. Fortsätt till nästa avfart.",
    "source": "Trafikverket – Motorväg",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP104",
    "category": "trafikregler",
    "question": "Du kör på motorväg och missar avfarten. Vilket handlingssätt är korrekt?",
    "options": [
      "Backar på vägrenen",
      "Vänder vid närmaste öppning",
      "Fortsätter till nästa avfart"
    ],
    "answer": 2,
    "explanation": "Backning och vändning på motorväg är förbjudet och mycket farligt. Fortsätt till nästa avfart.",
    "source": "Trafikverket – Motorväg",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP105",
    "category": "trafikregler",
    "question": "Du får punktering på motorväg. Vad prioriterar du?",
    "options": [
      "Ta dig om möjligt till säker plats, varna andra och invänta hjälp på säkert avstånd",
      "Byta hjul direkt i körfältet",
      "Stå bakom bilen i körbanan"
    ],
    "answer": 0,
    "explanation": "Vid stopp på motorväg är säker placering och varning avgörande. Följ vägassistansens och myndigheternas råd.",
    "source": "Trafikverket – Stopp på väg",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP106",
    "category": "trafikregler",
    "question": "Du kör i mörker och möter ett fordon med starka strålkastare. Vad gör du?",
    "options": [
      "Undviker att titta rakt in i ljuset och anpassar farten",
      "Bländar tillbaka med helljus",
      "Ökar farten för att snabbt passera"
    ],
    "answer": 0,
    "explanation": "Minska bländningsrisken genom att rikta blicken mot höger vägkant och anpassa hastigheten.",
    "source": "Transportstyrelsen – Belysning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP107",
    "category": "trafikregler",
    "question": "Som taxiförare kör du i mörker och möter ett fordon med starka strålkastare. Vad gör du?",
    "options": [
      "Ökar farten för att snabbt passera",
      "Undviker att titta rakt in i ljuset och anpassar farten",
      "Bländar tillbaka med helljus"
    ],
    "answer": 1,
    "explanation": "Minska bländningsrisken genom att rikta blicken mot höger vägkant och anpassa hastigheten.",
    "source": "Transportstyrelsen – Belysning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP108",
    "category": "trafikregler",
    "question": "Du kör i mörker och möter ett fordon med starka strålkastare. Vilket handlingssätt är korrekt?",
    "options": [
      "Bländar tillbaka med helljus",
      "Ökar farten för att snabbt passera",
      "Undviker att titta rakt in i ljuset och anpassar farten"
    ],
    "answer": 2,
    "explanation": "Minska bländningsrisken genom att rikta blicken mot höger vägkant och anpassa hastigheten.",
    "source": "Transportstyrelsen – Belysning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP109",
    "category": "taxilagstiftning",
    "question": "En kund vill att du kör fortare än hastighetsgränsen för att hinna till ett tåg. Vad gör du?",
    "options": [
      "Följer trafikreglerna och förklarar att du inte kan överskrida hastighetsgränsen",
      "Ökar farten om kunden accepterar risken",
      "Låter kunden bestämma hastigheten"
    ],
    "answer": 0,
    "explanation": "Föraren ansvarar för att körningen sker enligt trafikreglerna. Kundens önskemål ändrar inte ansvaret.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP110",
    "category": "taxilagstiftning",
    "question": "En passagerare vill att du kör fortare än hastighetsgränsen för att hinna till ett tåg. Vad gör du?",
    "options": [
      "Låter kunden bestämma hastigheten",
      "Följer trafikreglerna och förklarar att du inte kan överskrida hastighetsgränsen",
      "Ökar farten om kunden accepterar risken"
    ],
    "answer": 1,
    "explanation": "Föraren ansvarar för att körningen sker enligt trafikreglerna. Kundens önskemål ändrar inte ansvaret.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP111",
    "category": "taxilagstiftning",
    "question": "En kund frågar om priset innan resan börjar. Vad bör du göra?",
    "options": [
      "Undvika att svara tills resan är klar",
      "Säga ett ungefärligt pris utan att förklara villkoren",
      "Informera tydligt om pris eller hur priset beräknas innan färden"
    ],
    "answer": 2,
    "explanation": "Kunden ska kunna förstå prisinformationen före färden. Följ reglerna för prisinformation och jämförpris.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP112",
    "category": "taxilagstiftning",
    "question": "En passagerare frågar om priset innan resan börjar. Vad bör du göra?",
    "options": [
      "Informera tydligt om pris eller hur priset beräknas innan färden",
      "Undvika att svara tills resan är klar",
      "Säga ett ungefärligt pris utan att förklara villkoren"
    ],
    "answer": 0,
    "explanation": "Kunden ska kunna förstå prisinformationen före färden. Följ reglerna för prisinformation och jämförpris.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP113",
    "category": "taxilagstiftning",
    "question": "En kund vill dela taxiresan med en okänd person för att spara pengar. Vad gör du?",
    "options": [
      "Avslutar resan direkt",
      "Följer kundens beställning och företagets rutiner samt säkerställer samtycke och trygghet",
      "Lägger alltid till en passagerare utan att fråga"
    ],
    "answer": 1,
    "explanation": "Resans upplägg ska vara tydligt och tryggt; samtycke och beställningsvillkor behöver respekteras.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP114",
    "category": "taxilagstiftning",
    "question": "En passagerare vill dela taxiresan med en okänd person för att spara pengar. Vad gör du?",
    "options": [
      "Lägger alltid till en passagerare utan att fråga",
      "Avslutar resan direkt",
      "Följer kundens beställning och företagets rutiner samt säkerställer samtycke och trygghet"
    ],
    "answer": 2,
    "explanation": "Resans upplägg ska vara tydligt och tryggt; samtycke och beställningsvillkor behöver respekteras.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP115",
    "category": "taxilagstiftning",
    "question": "Du upptäcker att taxametern inte fungerar enligt företagets rutiner. Vad gör du?",
    "options": [
      "Följer reglerna och företagets rutiner; genomför inte en resa på ett otillåtet sätt",
      "Gissar priset efter resans längd",
      "Stänger av taxametern och tar kontant betalning utan information"
    ],
    "answer": 0,
    "explanation": "Taxameter och prisredovisning omfattas av särskilda regler. Fel ska hanteras enligt gällande krav och rutiner.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP116",
    "category": "taxilagstiftning",
    "question": "Under arbetspasset upptäcker att taxametern inte fungerar enligt företagets rutiner. Vad gör du?",
    "options": [
      "Stänger av taxametern och tar kontant betalning utan information",
      "Följer reglerna och företagets rutiner; genomför inte en resa på ett otillåtet sätt",
      "Gissar priset efter resans längd"
    ],
    "answer": 1,
    "explanation": "Taxameter och prisredovisning omfattas av särskilda regler. Fel ska hanteras enligt gällande krav och rutiner.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP117",
    "category": "taxilagstiftning",
    "question": "En passagerare ber dig att lämna kvitto. Vad gör du?",
    "options": [
      "Säger att kvitto bara ges vid kontant betalning",
      "Hänvisar kunden till att fotografera taxametern",
      "Lämnar föreskrivet kvitto eller färdbevis enligt betalnings- och taxameterreglerna"
    ],
    "answer": 2,
    "explanation": "Kunden ska få korrekt betalningsunderlag enligt gällande regler och företagets system.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP118",
    "category": "taxilagstiftning",
    "question": "En kund glömmer en väska i bilen efter avslutad resa. Vad är lämpligt?",
    "options": [
      "Öppnar och använder innehållet",
      "Följer företagets rutiner för hittegods och försöker återlämna den på ett säkert sätt",
      "Behåller väskan tills kunden hör av sig"
    ],
    "answer": 1,
    "explanation": "Hittegods ska hanteras ansvarsfullt och enligt företagets rutiner och tillämpliga regler.",
    "source": "Polisen – Hittegods",
    "sourceUrl": "https://polisen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP119",
    "category": "taxilagstiftning",
    "question": "En passagerare glömmer en väska i bilen efter avslutad resa. Vad är lämpligt?",
    "options": [
      "Behåller väskan tills kunden hör av sig",
      "Öppnar och använder innehållet",
      "Följer företagets rutiner för hittegods och försöker återlämna den på ett säkert sätt"
    ],
    "answer": 2,
    "explanation": "Hittegods ska hanteras ansvarsfullt och enligt företagets rutiner och tillämpliga regler.",
    "source": "Polisen – Hittegods",
    "sourceUrl": "https://polisen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP120",
    "category": "taxilagstiftning",
    "question": "Du får en beställning men är osäker på om din taxiförarlegitimation är giltig. Vad gör du?",
    "options": [
      "Kontrollerar giltigheten och kör inte taxiresan om behörigheten saknas",
      "Kör ändå om kunden redan väntar",
      "Lånar en kollegas legitimation"
    ],
    "answer": 0,
    "explanation": "Taxiförarlegitimation krävs för att arbeta som taxiförare. Behörigheten är personlig.",
    "source": "Transportstyrelsen – Taxiförarlegitimation",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP121",
    "category": "säkerhet",
    "question": "En passagerare blir aggressiv under färden. Vad är lämpligast?",
    "options": [
      "Argumentera högljutt medan du kör",
      "Fortsätta köra oavsett hotbild",
      "Behålla lugnet, undvika att eskalera och stanna på en säker plats om situationen kräver det"
    ],
    "answer": 2,
    "explanation": "Förarens och passagerarens säkerhet går först. Undvik konfrontation och sök säker hjälp vid behov.",
    "source": "Polisen – Råd vid hot och våld",
    "sourceUrl": "https://polisen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP122",
    "category": "säkerhet",
    "question": "Du känner dig mycket trött efter flera timmars körning. Vad gör du?",
    "options": [
      "Öppnar fönstret och håller samma arbetstakt",
      "Tar paus och kör inte vidare förrän du är tillräckligt alert",
      "Dricker energidryck och fortsätter oavsett trötthet"
    ],
    "answer": 1,
    "explanation": "Trötthet försämrar reaktionsförmåga och uppmärksamhet. Paus eller avbruten körning kan behövas.",
    "source": "Trafikverket – Trötthet i trafiken",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP123",
    "category": "säkerhet",
    "question": "En kund får plötsligt svårt att andas och verkar allvarligt sjuk. Vad gör du?",
    "options": [
      "Stannar säkert, larmar 112 och följer instruktionerna",
      "Kör vidare till kundens hem",
      "Ger läkemedel som du själv har med dig"
    ],
    "answer": 0,
    "explanation": "Vid misstänkt akut livshotande tillstånd ska 112 kontaktas. Följ larmoperatörens instruktioner.",
    "source": "SOS Alarm – 112",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP124",
    "category": "säkerhet",
    "question": "Du kommer först till en trafikolycka med skadade. Vad prioriterar du?",
    "options": [
      "Flytta alla skadade direkt utan bedömning",
      "Filma olyckan innan du hjälper",
      "Skydda olycksplatsen utan att utsätta dig själv, larma 112 och hjälp efter förmåga"
    ],
    "answer": 2,
    "explanation": "Säkra platsen, larma och ge hjälp efter förmåga. Flytta inte skadade i onödan om det inte finns omedelbar fara.",
    "source": "SOS Alarm – Olycka",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP125",
    "category": "säkerhet",
    "question": "En passagerare med nedsatt hörsel förstår inte din information. Hur bör du agera?",
    "options": [
      "Avstå från att ge information",
      "Kommunicera tydligt, använd skrift eller visuella signaler vid behov och kontrollera förståelsen",
      "Höja rösten kraftigt utan att fråga"
    ],
    "answer": 1,
    "explanation": "Anpassa kommunikationen efter individens behov och säkerställ att viktig information når fram.",
    "source": "1177 – Kommunikation och hörsel",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP126",
    "category": "fordonskunskap",
    "question": "Vad bör du kontrollera på däcken före ett arbetspass?",
    "options": [
      "Synliga skador, mönsterdjup och att däcken verkar ha rätt lufttryck",
      "Endast däckens färg",
      "Att alla fyra däck har exakt samma tillverkningsdatum"
    ],
    "answer": 0,
    "explanation": "Däckens skick och lufttryck påverkar väggrepp, bromsning och stabilitet.",
    "source": "Transportstyrelsen – Fordon och däck",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP127",
    "category": "fordonskunskap",
    "question": "Under en körning möter du en varningslampa för bromssystemet tänds under körning. Vad gör du?",
    "options": [
      "Stannar säkert så snart det går och kontrollerar felet; kör inte vidare om bromsarna kan vara osäkra",
      "Ignorerar lampan om bilen fortfarande rullar",
      "Kör snabbare till nästa kund"
    ],
    "answer": 0,
    "explanation": "Bromssystemfel kan påverka möjligheten att stanna. Säkerheten går före körschemat.",
    "source": "Transportstyrelsen – Fordon",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP128",
    "category": "fordonskunskap",
    "question": "Varför ska vindrutans insida hållas ren?",
    "options": [
      "För att förbättra mobilmottagningen",
      "Smuts och imma kan försämra sikten och skapa bländning",
      "För att minska bilens vikt"
    ],
    "answer": 1,
    "explanation": "God sikt är grundläggande för säker körning; rengör glas och ventilera för att motverka imma.",
    "source": "Trafikverket – Säker körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP129",
    "category": "fordonskunskap",
    "question": "Vad är en viktig kontroll av bilens belysning?",
    "options": [
      "Kontrollera att föreskrivna lampor fungerar och att lyktorna är rena",
      "Kontrollera bara helljuset",
      "Kontrollera lamporna endast på sommaren"
    ],
    "answer": 0,
    "explanation": "Fungerande och rena lyktor gör att du ser och syns i trafiken.",
    "source": "Transportstyrelsen – Fordonsbelysning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP130",
    "category": "fordonskunskap",
    "question": "Du märker vibrationer i ratten vid bromsning. Vad är klokt?",
    "options": [
      "Öka farten tills vibrationerna försvinner",
      "Stänga av ABS-systemet",
      "Låta verkstad kontrollera bromsar och hjul snarast"
    ],
    "answer": 2,
    "explanation": "Vibrationer kan tyda på tekniskt fel. Fordonet bör kontrolleras innan fortsatt yrkeskörning om säkerheten påverkas.",
    "source": "Transportstyrelsen – Fordon",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP131",
    "category": "fordonskunskap",
    "question": "Under ett taxipass märker vibrationer i ratten vid bromsning. Vad är klokt?",
    "options": [
      "Låta verkstad kontrollera bromsar och hjul snarast",
      "Öka farten tills vibrationerna försvinner",
      "Stänga av ABS-systemet"
    ],
    "answer": 0,
    "explanation": "Vibrationer kan tyda på tekniskt fel. Fordonet bör kontrolleras innan fortsatt yrkeskörning om säkerheten påverkas.",
    "source": "Transportstyrelsen – Fordon",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP132",
    "category": "navigation",
    "question": "GPS:en föreslår en väg genom en gågata. Vad gör du?",
    "options": [
      "Ber kunden ta ansvar för vägvalet",
      "Följer vägmärken och trafikregler i verkligheten, inte GPS-förslaget",
      "Kör in eftersom GPS:en alltid har rätt"
    ],
    "answer": 1,
    "explanation": "Navigationshjälpmedel ersätter inte förarens ansvar att följa skyltning och regler.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP133",
    "category": "navigation",
    "question": "Du ska hämta en kund vid en stor station med flera utgångar. Vad minskar risken för missförstånd?",
    "options": [
      "Bekräfta exakt mötesplats och kännetecken via beställningens kontaktväg",
      "Stanna var som helst utanför stationen",
      "Ringa upprepade gånger utan att ange var du står"
    ],
    "answer": 0,
    "explanation": "Tydlig mötesplatsinformation sparar tid och minskar osäkerhet för kunden.",
    "source": "Trafikverket – Säker trafikmiljö",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP134",
    "category": "navigation",
    "question": "Under ett taxipass ska hämta en kund vid en stor station med flera utgångar. Vad minskar risken för missförstånd?",
    "options": [
      "Ringa upprepade gånger utan att ange var du står",
      "Bekräfta exakt mötesplats och kännetecken via beställningens kontaktväg",
      "Stanna var som helst utanför stationen"
    ],
    "answer": 1,
    "explanation": "Tydlig mötesplatsinformation sparar tid och minskar osäkerhet för kunden.",
    "source": "Trafikverket – Säker trafikmiljö",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP135",
    "category": "navigation",
    "question": "GPS-signalen försvinner i en tunnel. Vad bör du göra?",
    "options": [
      "Titta länge på telefonen medan du kör",
      "Stanna i körfältet för att starta om GPS:en",
      "Fortsätta köra uppmärksamt efter skyltning och den planerade rutten när det är säkert"
    ],
    "answer": 2,
    "explanation": "Föraren ska prioritera körningen och använda vägvisning och planering utan att distraheras.",
    "source": "Transportstyrelsen – Mobiltelefon och körning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP136",
    "category": "navigation",
    "question": "Du får en adress som verkar finnas på flera platser. Vad gör du före avfärd?",
    "options": [
      "Gissar utifrån kundens namn",
      "Bekräftar ort, gatunamn och eventuell port eller entré med kunden",
      "Väljer den första träffen i GPS:en utan kontroll"
    ],
    "answer": 1,
    "explanation": "Bekräfta destinationen för att undvika felkörning och onödiga kostnader.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP137",
    "category": "navigation",
    "question": "Under ett taxipass får en adress som verkar finnas på flera platser. Vad gör du före avfärd?",
    "options": [
      "Väljer den första träffen i GPS:en utan kontroll",
      "Gissar utifrån kundens namn",
      "Bekräftar ort, gatunamn och eventuell port eller entré med kunden"
    ],
    "answer": 2,
    "explanation": "Bekräfta destinationen för att undvika felkörning och onödiga kostnader.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP138",
    "category": "navigation",
    "question": "En väg är avstängd trots att kartan visar den som öppen. Vad gäller?",
    "options": [
      "Följa avstängningen och välja en tillåten alternativ väg",
      "Köra förbi avspärrningen om det ser tomt ut",
      "Följa GPS:en eftersom kartan är nyare än skyltarna"
    ],
    "answer": 0,
    "explanation": "Tillfälliga vägmärken och avspärrningar ska följas även om digitala kartor inte hunnit uppdateras.",
    "source": "Trafikverket – Vägarbeten",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP139",
    "category": "navigation",
    "question": "Under en körning möter du en väg är avstängd trots att kartan visar den som öppen. Vad gäller?",
    "options": [
      "Följa GPS:en eftersom kartan är nyare än skyltarna",
      "Följa avstängningen och välja en tillåten alternativ väg",
      "Köra förbi avspärrningen om det ser tomt ut"
    ],
    "answer": 1,
    "explanation": "Tillfälliga vägmärken och avspärrningar ska följas även om digitala kartor inte hunnit uppdateras.",
    "source": "Trafikverket – Vägarbeten",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP140",
    "category": "bemötande",
    "question": "En kund är missnöjd med väntetiden. Hur bemöter du kunden?",
    "options": [
      "Avbryter och skyller på kunden",
      "Ignorerar kunden resten av resan",
      "Lyssnar, bekräftar upplevelsen och ger saklig information utan att bli defensiv"
    ],
    "answer": 2,
    "explanation": "Ett professionellt bemötande bygger på respekt, tydlig information och lugn kommunikation.",
    "source": "Konsumentverket – Konsumenträtt",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP141",
    "category": "bemötande",
    "question": "Under en körning möter du en kund är missnöjd med väntetiden. Hur bemöter du kunden?",
    "options": [
      "Lyssnar, bekräftar upplevelsen och ger saklig information utan att bli defensiv",
      "Avbryter och skyller på kunden",
      "Ignorerar kunden resten av resan"
    ],
    "answer": 0,
    "explanation": "Ett professionellt bemötande bygger på respekt, tydlig information och lugn kommunikation.",
    "source": "Konsumentverket – Konsumenträtt",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP142",
    "category": "bemötande",
    "question": "En kund vill prata ostört i telefon. Vad är ett bra förhållningssätt?",
    "options": [
      "Spela hög musik för att överrösta samtalet",
      "Respektera kundens önskemål och hålla en lugn, diskret miljö",
      "Delta i kundens samtal"
    ],
    "answer": 1,
    "explanation": "Service innebär att anpassa bemötandet efter kundens rimliga önskemål.",
    "source": "Konsumentverket – Konsumenttjänster",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP143",
    "category": "bemötande",
    "question": "Under en körning möter du en kund vill prata ostört i telefon. Vad är ett bra förhållningssätt?",
    "options": [
      "Delta i kundens samtal",
      "Spela hög musik för att överrösta samtalet",
      "Respektera kundens önskemål och hålla en lugn, diskret miljö"
    ],
    "answer": 2,
    "explanation": "Service innebär att anpassa bemötandet efter kundens rimliga önskemål.",
    "source": "Konsumentverket – Konsumenttjänster",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP144",
    "category": "bemötande",
    "question": "En kund frågar om du kan hjälpa till med en tung väska. Vad gör du?",
    "options": [
      "Hjälper till om det kan göras säkert och inom dina förutsättningar",
      "Lyfter alltid oavsett skaderisk",
      "Låter väskan falla på marken"
    ],
    "answer": 0,
    "explanation": "Hjälp ska ges med hänsyn till både kundens behov och arbetsmiljö/säkerhet.",
    "source": "Arbetsmiljöverket – Belastningsergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP145",
    "category": "bemötande",
    "question": "Under en körning möter du en kund frågar om du kan hjälpa till med en tung väska. Vad gör du?",
    "options": [
      "Låter väskan falla på marken",
      "Hjälper till om det kan göras säkert och inom dina förutsättningar",
      "Lyfter alltid oavsett skaderisk"
    ],
    "answer": 1,
    "explanation": "Hjälp ska ges med hänsyn till både kundens behov och arbetsmiljö/säkerhet.",
    "source": "Arbetsmiljöverket – Belastningsergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP146",
    "category": "bemötande",
    "question": "En kund har svårt att förstå svenska. Hur kan du minska risken för missförstånd?",
    "options": [
      "Låtsas förstå och gissa destinationen",
      "Prata snabbare och högre",
      "Använda enkelt språk, korta meningar och be kunden bekräfta viktiga uppgifter"
    ],
    "answer": 2,
    "explanation": "Tydlig kommunikation och kontroll av förståelse förebygger fel och skapar trygghet.",
    "source": "Konsumentverket – Kundinformation",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP147",
    "category": "bemötande",
    "question": "Under en körning möter du en kund har svårt att förstå svenska. Hur kan du minska risken för missförstånd?",
    "options": [
      "Använda enkelt språk, korta meningar och be kunden bekräfta viktiga uppgifter",
      "Låtsas förstå och gissa destinationen",
      "Prata snabbare och högre"
    ],
    "answer": 0,
    "explanation": "Tydlig kommunikation och kontroll av förståelse förebygger fel och skapar trygghet.",
    "source": "Konsumentverket – Kundinformation",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP148",
    "category": "bemötande",
    "question": "Kunden vill ändra destination under resan. Vad gör du?",
    "options": [
      "Avslutar resan utan förklaring",
      "Bekräftar den nya destinationen och informerar om eventuell pris- eller ruttpåverkan",
      "Ändrar utan att kontrollera med kunden"
    ],
    "answer": 1,
    "explanation": "Tydlighet om destination och prisförändring förebygger tvister.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP149",
    "category": "miljö",
    "question": "Du väntar på en kund i flera minuter. Vad är normalt ett bättre miljöval?",
    "options": [
      "Undvika onödig tomgång och följa regler och fordonstillverkarens råd",
      "Låta motorn gå hela tiden oavsett väntetid",
      "Varva motorn för att hålla den varm"
    ],
    "answer": 0,
    "explanation": "Onödig tomgång ökar bränsleförbrukning och utsläpp.",
    "source": "Naturvårdsverket – Utsläpp från transporter",
    "sourceUrl": "https://www.naturvardsverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP150",
    "category": "miljö",
    "question": "Under ett taxipass väntar på en kund i flera minuter. Vad är normalt ett bättre miljöval?",
    "options": [
      "Varva motorn för att hålla den varm",
      "Undvika onödig tomgång och följa regler och fordonstillverkarens råd",
      "Låta motorn gå hela tiden oavsett väntetid"
    ],
    "answer": 1,
    "explanation": "Onödig tomgång ökar bränsleförbrukning och utsläpp.",
    "source": "Naturvårdsverket – Utsläpp från transporter",
    "sourceUrl": "https://www.naturvardsverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP151",
    "category": "miljö",
    "question": "Vilket körsätt brukar minska bränsleförbrukningen?",
    "options": [
      "Täta kraftiga accelerationer och inbromsningar",
      "Köra på låg växel med högt varvtal i onödan",
      "Jämn körning, god framförhållning och mjuka accelerationer"
    ],
    "answer": 2,
    "explanation": "Planerad och jämn körning kan minska energiåtgång och slitage.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP152",
    "category": "miljö",
    "question": "Du ser ett rött trafikljus långt fram. Hur kan du köra mer energieffektivt?",
    "options": [
      "Växla ner sent och gasa",
      "Släppa gasen i god tid och rulla kontrollerat när situationen tillåter",
      "Accelerera fram till ljuset och bromsa hårt"
    ],
    "answer": 1,
    "explanation": "Framförhållning och mjuka inbromsningar minskar onödig energiåtgång.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP153",
    "category": "miljö",
    "question": "Under ett taxipass ser ett rött trafikljus långt fram. Hur kan du köra mer energieffektivt?",
    "options": [
      "Accelerera fram till ljuset och bromsa hårt",
      "Växla ner sent och gasa",
      "Släppa gasen i god tid och rulla kontrollerat när situationen tillåter"
    ],
    "answer": 2,
    "explanation": "Framförhållning och mjuka inbromsningar minskar onödig energiåtgång.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP154",
    "category": "miljö",
    "question": "Varför är rätt däcktryck viktigt även ur miljösynpunkt?",
    "options": [
      "För lågt tryck kan öka rullmotstånd och bränsleförbrukning",
      "Det gör bilen tyngre",
      "Det minskar alltid bromssträckan"
    ],
    "answer": 0,
    "explanation": "Rätt däcktryck bidrar till lägre rullmotstånd och bättre däcklivslängd.",
    "source": "Transportstyrelsen – Däck",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP155",
    "category": "miljö",
    "question": "Du planerar flera hämtningar i samma område. Vad kan minska onödig körning?",
    "options": [
      "Köra runt utan plan för att leta kunder",
      "Alltid välja den längsta vägen",
      "Planera rutten och undvika onödiga omvägar utan att bryta mot kundlöften eller trafikregler"
    ],
    "answer": 2,
    "explanation": "Ruttplanering och framförhållning kan minska körsträcka och energianvändning.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP156",
    "category": "miljö",
    "question": "Under ett taxipass planerar flera hämtningar i samma område. Vad kan minska onödig körning?",
    "options": [
      "Planera rutten och undvika onödiga omvägar utan att bryta mot kundlöften eller trafikregler",
      "Köra runt utan plan för att leta kunder",
      "Alltid välja den längsta vägen"
    ],
    "answer": 0,
    "explanation": "Ruttplanering och framförhållning kan minska körsträcka och energianvändning.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP157",
    "category": "arbetsmiljö",
    "question": "Du sitter länge i samma körställning. Vad är en bra förebyggande åtgärd?",
    "options": [
      "Ställa sätet så långt bak som möjligt oavsett räckvidd",
      "Variera arbetsställning och ta lämpliga pauser",
      "Sitta helt stilla hela arbetspasset"
    ],
    "answer": 1,
    "explanation": "Variation och god ergonomi minskar belastningsbesvär.",
    "source": "Arbetsmiljöverket – Ergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP158",
    "category": "arbetsmiljö",
    "question": "Under ett taxipass sitter länge i samma körställning. Vad är en bra förebyggande åtgärd?",
    "options": [
      "Sitta helt stilla hela arbetspasset",
      "Ställa sätet så långt bak som möjligt oavsett räckvidd",
      "Variera arbetsställning och ta lämpliga pauser"
    ],
    "answer": 2,
    "explanation": "Variation och god ergonomi minskar belastningsbesvär.",
    "source": "Arbetsmiljöverket – Ergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP159",
    "category": "arbetsmiljö",
    "question": "Du behöver lyfta en tung väska ur bagageutrymmet. Vad är säkrast?",
    "options": [
      "Stå nära lasten, använda benen och undvika vridning; be om hjälp vid behov",
      "Lyfta med raka ben och vriden rygg",
      "Rycka upp väskan snabbt"
    ],
    "answer": 0,
    "explanation": "God lyftteknik och hjälpmedel minskar risken för belastningsskador.",
    "source": "Arbetsmiljöverket – Belastningsergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP160",
    "category": "arbetsmiljö",
    "question": "Under ett taxipass behöver lyfta en tung väska ur bagageutrymmet. Vad är säkrast?",
    "options": [
      "Rycka upp väskan snabbt",
      "Stå nära lasten, använda benen och undvika vridning; be om hjälp vid behov",
      "Lyfta med raka ben och vriden rygg"
    ],
    "answer": 1,
    "explanation": "God lyftteknik och hjälpmedel minskar risken för belastningsskador.",
    "source": "Arbetsmiljöverket – Belastningsergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP161",
    "category": "arbetsmiljö",
    "question": "Du känner dig stressad av flera sena körningar. Vad är lämpligt?",
    "options": [
      "Köra fortare för att komma ikapp",
      "Hoppa över pauser",
      "Planera om, meddela berörda och prioritera säker körning framför tidspress"
    ],
    "answer": 2,
    "explanation": "Tidspress får inte leda till osäker körning. Planering och kommunikation minskar stress.",
    "source": "Arbetsmiljöverket – Organisatorisk och social arbetsmiljö",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP162",
    "category": "arbetsmiljö",
    "question": "Under ett taxipass känner dig stressad av flera sena körningar. Vad är lämpligt?",
    "options": [
      "Planera om, meddela berörda och prioritera säker körning framför tidspress",
      "Köra fortare för att komma ikapp",
      "Hoppa över pauser"
    ],
    "answer": 0,
    "explanation": "Tidspress får inte leda till osäker körning. Planering och kommunikation minskar stress.",
    "source": "Arbetsmiljöverket – Organisatorisk och social arbetsmiljö",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP163",
    "category": "arbetsmiljö",
    "question": "Du arbetar ensam kvällstid och känner dig hotad vid en hämtning. Vad gör du?",
    "options": [
      "Stänger av telefonen",
      "Följer säkerhetsrutiner, avstår eller lämnar platsen om det behövs och kontaktar hjälp",
      "Går in i en konfrontation"
    ],
    "answer": 1,
    "explanation": "Arbetsgivare och arbetstagare behöver förebygga hot och våld genom rutiner och riskbedömning.",
    "source": "Arbetsmiljöverket – Hot och våld",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP164",
    "category": "arbetsmiljö",
    "question": "Under ett taxipass arbetar ensam kvällstid och känner dig hotad vid en hämtning. Vad gör du?",
    "options": [
      "Går in i en konfrontation",
      "Stänger av telefonen",
      "Följer säkerhetsrutiner, avstår eller lämnar platsen om det behövs och kontaktar hjälp"
    ],
    "answer": 2,
    "explanation": "Arbetsgivare och arbetstagare behöver förebygga hot och våld genom rutiner och riskbedömning.",
    "source": "Arbetsmiljöverket – Hot och våld",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP165",
    "category": "arbetsmiljö",
    "question": "Varför är det viktigt att hålla bilen ren och fri från lösa föremål?",
    "options": [
      "Det förbättrar hygien och minskar risken att föremål blir farliga vid inbromsning",
      "Det ökar motoreffekten",
      "Det gör att bromsarna inte behöver kontrolleras"
    ],
    "answer": 0,
    "explanation": "Ordning i kupé och bagageutrymme bidrar till säkerhet och god arbetsmiljö.",
    "source": "Arbetsmiljöverket – Arbetsplatsens utformning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP166",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En resenär använder rullator. Hur bör du hjälpa till?",
    "options": [
      "Ta rullatorn utan att fråga",
      "Lämna personen ensam med bagaget",
      "Fråga vilken hjälp personen önskar och hantera hjälpmedlet varsamt"
    ],
    "answer": 2,
    "explanation": "Individens önskemål och självbestämmande ska respekteras; hjälpmedel ska hanteras varsamt.",
    "source": "1177 – Hjälpmedel",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP167",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Under en körning möter du en resenär använder rullator. Hur bör du hjälpa till?",
    "options": [
      "Fråga vilken hjälp personen önskar och hantera hjälpmedlet varsamt",
      "Ta rullatorn utan att fråga",
      "Lämna personen ensam med bagaget"
    ],
    "answer": 0,
    "explanation": "Individens önskemål och självbestämmande ska respekteras; hjälpmedel ska hanteras varsamt.",
    "source": "1177 – Hjälpmedel",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP168",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare har synnedsättning och reser ensam. Vad kan underlätta?",
    "options": [
      "Prata endast med eventuell ledsagare",
      "Presentera dig, beskriv omgivningen och erbjud hjälp utan att ta tag i personen oväntat",
      "Dra personen mot bilen utan förvarning"
    ],
    "answer": 1,
    "explanation": "Tydlig muntlig information och att fråga innan fysisk hjälp ger tryggare bemötande.",
    "source": "1177 – Syn och hjälpmedel",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP169",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Under en körning möter du en passagerare har synnedsättning och reser ensam. Vad kan underlätta?",
    "options": [
      "Dra personen mot bilen utan förvarning",
      "Prata endast med eventuell ledsagare",
      "Presentera dig, beskriv omgivningen och erbjud hjälp utan att ta tag i personen oväntat"
    ],
    "answer": 2,
    "explanation": "Tydlig muntlig information och att fråga innan fysisk hjälp ger tryggare bemötande.",
    "source": "1177 – Syn och hjälpmedel",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP170",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En kund med diabetes verkar plötsligt förvirrad och svettig. Vad bör du göra?",
    "options": [
      "Ta symtomen på allvar, fråga om hjälp behövs och ring 112 vid allvarligt eller akut tillstånd",
      "Anta att kunden är berusad och lämna platsen",
      "Ge insulin utan medicinsk kompetens"
    ],
    "answer": 0,
    "explanation": "Förvirring och svettning kan ha flera orsaker, inklusive lågt blodsocker. Vid akut allvarligt tillstånd larma 112.",
    "source": "1177 – Lågt blodsocker",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP171",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Under en körning möter du en kund med diabetes verkar plötsligt förvirrad och svettig. Vad bör du göra?",
    "options": [
      "Ge insulin utan medicinsk kompetens",
      "Ta symtomen på allvar, fråga om hjälp behövs och ring 112 vid allvarligt eller akut tillstånd",
      "Anta att kunden är berusad och lämna platsen"
    ],
    "answer": 1,
    "explanation": "Förvirring och svettning kan ha flera orsaker, inklusive lågt blodsocker. Vid akut allvarligt tillstånd larma 112.",
    "source": "1177 – Lågt blodsocker",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP172",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare har svårt att kliva in i bilen. Vad är bäst?",
    "options": [
      "Dra personen snabbt i armen",
      "Stressa personen för att hålla tidtabellen",
      "Fråga hur personen vill ha hjälp och ge tid"
    ],
    "answer": 2,
    "explanation": "Individanpassat stöd och respekt för personens integritet och förmåga är viktigt.",
    "source": "1177 – Rörelse och hjälpmedel",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP173",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Under en körning möter du en passagerare har svårt att kliva in i bilen. Vad är bäst?",
    "options": [
      "Fråga hur personen vill ha hjälp och ge tid",
      "Dra personen snabbt i armen",
      "Stressa personen för att hålla tidtabellen"
    ],
    "answer": 0,
    "explanation": "Individanpassat stöd och respekt för personens integritet och förmåga är viktigt.",
    "source": "1177 – Rörelse och hjälpmedel",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP174",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare får ett epileptiskt anfall under resan. Vad är rätt?",
    "options": [
      "Stoppa något i munnen",
      "Stanna säkert, skydda personen från skador och ring 112 om anfallet är långvarigt, upprepas eller situationen är akut",
      "Hålla fast personens armar och ben hårt"
    ],
    "answer": 1,
    "explanation": "Vid krampanfall ska personen skyddas från skador; stoppa inget i munnen. Följ 1177:s råd och larma vid akuta tecken.",
    "source": "1177 – Epilepsi och anfall",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP175",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Under en körning möter du en passagerare får ett epileptiskt anfall under resan. Vad är rätt?",
    "options": [
      "Hålla fast personens armar och ben hårt",
      "Stoppa något i munnen",
      "Stanna säkert, skydda personen från skador och ring 112 om anfallet är långvarigt, upprepas eller situationen är akut"
    ],
    "answer": 2,
    "explanation": "Vid krampanfall ska personen skyddas från skador; stoppa inget i munnen. Följ 1177:s råd och larma vid akuta tecken.",
    "source": "1177 – Epilepsi och anfall",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP176",
    "category": "trafikregler",
    "question": "På ditt nästa arbetspass: du närmar dig en skolbuss som stannat vid hållplats. Vad är klokt?",
    "options": [
      "Sänka hastigheten och vara beredd på barn som kan gå ut i körbanan",
      "Köra om utan att kontrollera om barn finns",
      "Tuta och fortsätta i samma fart"
    ],
    "answer": 0,
    "explanation": "Barn kan röra sig oväntat nära skolskjuts. Anpassa hastigheten och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP177",
    "category": "trafikregler",
    "question": "I rusningstrafik: du närmar dig en skolbuss som stannat vid hållplats. Vad är klokt?",
    "options": [
      "Tuta och fortsätta i samma fart",
      "Sänka hastigheten och vara beredd på barn som kan gå ut i körbanan",
      "Köra om utan att kontrollera om barn finns"
    ],
    "answer": 1,
    "explanation": "Barn kan röra sig oväntat nära skolskjuts. Anpassa hastigheten och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP178",
    "category": "trafikregler",
    "question": "När du transporterar en kund: du närmar dig en skolbuss som stannat vid hållplats. Vad är klokt?",
    "options": [
      "Köra om utan att kontrollera om barn finns",
      "Tuta och fortsätta i samma fart",
      "Sänka hastigheten och vara beredd på barn som kan gå ut i körbanan"
    ],
    "answer": 2,
    "explanation": "Barn kan röra sig oväntat nära skolskjuts. Anpassa hastigheten och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP179",
    "category": "trafikregler",
    "question": "Vid en stressig hämtning: du närmar dig en skolbuss som stannat vid hållplats. Vad är klokt?",
    "options": [
      "Sänka hastigheten och vara beredd på barn som kan gå ut i körbanan",
      "Köra om utan att kontrollera om barn finns",
      "Tuta och fortsätta i samma fart"
    ],
    "answer": 0,
    "explanation": "Barn kan röra sig oväntat nära skolskjuts. Anpassa hastigheten och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP180",
    "category": "trafikregler",
    "question": "Som yrkesförare behöver du veta: du närmar dig en skolbuss som stannat vid hållplats. Vad är klokt?",
    "options": [
      "Tuta och fortsätta i samma fart",
      "Sänka hastigheten och vara beredd på barn som kan gå ut i körbanan",
      "Köra om utan att kontrollera om barn finns"
    ],
    "answer": 1,
    "explanation": "Barn kan röra sig oväntat nära skolskjuts. Anpassa hastigheten och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP181",
    "category": "trafikregler",
    "question": "På ditt nästa arbetspass: en ambulans närmar sig med blåljus och siren bakom dig. Vad gör du?",
    "options": [
      "Tvärnita mitt i körfältet",
      "Följa efter ambulansen genom korsningen",
      "Underlätta fri väg utan att skapa fara och följa trafikreglerna så långt situationen medger"
    ],
    "answer": 2,
    "explanation": "Du ska lämna fri väg för utryckningsfordon men får inte skapa fara när du gör det.",
    "source": "Transportstyrelsen – Utryckningsfordon",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP182",
    "category": "trafikregler",
    "question": "I rusningstrafik: en ambulans närmar sig med blåljus och siren bakom dig. Vad gör du?",
    "options": [
      "Underlätta fri väg utan att skapa fara och följa trafikreglerna så långt situationen medger",
      "Tvärnita mitt i körfältet",
      "Följa efter ambulansen genom korsningen"
    ],
    "answer": 0,
    "explanation": "Du ska lämna fri väg för utryckningsfordon men får inte skapa fara när du gör det.",
    "source": "Transportstyrelsen – Utryckningsfordon",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP183",
    "category": "trafikregler",
    "question": "När du transporterar en kund: en ambulans närmar sig med blåljus och siren bakom dig. Vad gör du?",
    "options": [
      "Följa efter ambulansen genom korsningen",
      "Underlätta fri väg utan att skapa fara och följa trafikreglerna så långt situationen medger",
      "Tvärnita mitt i körfältet"
    ],
    "answer": 1,
    "explanation": "Du ska lämna fri väg för utryckningsfordon men får inte skapa fara när du gör det.",
    "source": "Transportstyrelsen – Utryckningsfordon",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP184",
    "category": "trafikregler",
    "question": "Vid en stressig hämtning: en ambulans närmar sig med blåljus och siren bakom dig. Vad gör du?",
    "options": [
      "Tvärnita mitt i körfältet",
      "Följa efter ambulansen genom korsningen",
      "Underlätta fri väg utan att skapa fara och följa trafikreglerna så långt situationen medger"
    ],
    "answer": 2,
    "explanation": "Du ska lämna fri väg för utryckningsfordon men får inte skapa fara när du gör det.",
    "source": "Transportstyrelsen – Utryckningsfordon",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP185",
    "category": "trafikregler",
    "question": "Som yrkesförare behöver du veta: en ambulans närmar sig med blåljus och siren bakom dig. Vad gör du?",
    "options": [
      "Underlätta fri väg utan att skapa fara och följa trafikreglerna så långt situationen medger",
      "Tvärnita mitt i körfältet",
      "Följa efter ambulansen genom korsningen"
    ],
    "answer": 0,
    "explanation": "Du ska lämna fri väg för utryckningsfordon men får inte skapa fara när du gör det.",
    "source": "Transportstyrelsen – Utryckningsfordon",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP186",
    "category": "trafikregler",
    "question": "På ditt nästa arbetspass: du ska byta körfält i tät trafik. Vad måste du göra?",
    "options": [
      "Byta direkt eftersom du har bråttom",
      "Kontrollera att bytet kan ske säkert, använda tecken och inte tvinga andra att bromsa",
      "Förutsätta att blinkers ger dig företräde"
    ],
    "answer": 1,
    "explanation": "Körfältsbyte kräver uppsikt och får inte skapa fara eller onödigt hinder.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP187",
    "category": "trafikregler",
    "question": "I rusningstrafik: du ska byta körfält i tät trafik. Vad måste du göra?",
    "options": [
      "Förutsätta att blinkers ger dig företräde",
      "Byta direkt eftersom du har bråttom",
      "Kontrollera att bytet kan ske säkert, använda tecken och inte tvinga andra att bromsa"
    ],
    "answer": 2,
    "explanation": "Körfältsbyte kräver uppsikt och får inte skapa fara eller onödigt hinder.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP188",
    "category": "trafikregler",
    "question": "När du transporterar en kund: du ska byta körfält i tät trafik. Vad måste du göra?",
    "options": [
      "Kontrollera att bytet kan ske säkert, använda tecken och inte tvinga andra att bromsa",
      "Förutsätta att blinkers ger dig företräde",
      "Byta direkt eftersom du har bråttom"
    ],
    "answer": 0,
    "explanation": "Körfältsbyte kräver uppsikt och får inte skapa fara eller onödigt hinder.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP189",
    "category": "trafikregler",
    "question": "Vid en stressig hämtning: du ska byta körfält i tät trafik. Vad måste du göra?",
    "options": [
      "Byta direkt eftersom du har bråttom",
      "Kontrollera att bytet kan ske säkert, använda tecken och inte tvinga andra att bromsa",
      "Förutsätta att blinkers ger dig företräde"
    ],
    "answer": 1,
    "explanation": "Körfältsbyte kräver uppsikt och får inte skapa fara eller onödigt hinder.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP190",
    "category": "trafikregler",
    "question": "Som yrkesförare behöver du veta: du ska byta körfält i tät trafik. Vad måste du göra?",
    "options": [
      "Förutsätta att blinkers ger dig företräde",
      "Byta direkt eftersom du har bråttom",
      "Kontrollera att bytet kan ske säkert, använda tecken och inte tvinga andra att bromsa"
    ],
    "answer": 2,
    "explanation": "Körfältsbyte kräver uppsikt och får inte skapa fara eller onödigt hinder.",
    "source": "Transportstyrelsen – Trafikregler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP191",
    "category": "trafikregler",
    "question": "På ditt nästa arbetspass: du närmar dig en rondell och ska köra in. Vad gör du?",
    "options": [
      "Anpassar hastigheten och lämnar företräde åt fordon i cirkulationen",
      "Kör in eftersom du kommer från höger",
      "Stannar alltid mitt i rondellen"
    ],
    "answer": 0,
    "explanation": "Fordon som kör in i cirkulationsplats har väjningsplikt mot trafiken där.",
    "source": "Transportstyrelsen – Cirkulationsplats",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP192",
    "category": "trafikregler",
    "question": "I rusningstrafik: du närmar dig en rondell och ska köra in. Vad gör du?",
    "options": [
      "Stannar alltid mitt i rondellen",
      "Anpassar hastigheten och lämnar företräde åt fordon i cirkulationen",
      "Kör in eftersom du kommer från höger"
    ],
    "answer": 1,
    "explanation": "Fordon som kör in i cirkulationsplats har väjningsplikt mot trafiken där.",
    "source": "Transportstyrelsen – Cirkulationsplats",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP193",
    "category": "trafikregler",
    "question": "När du transporterar en kund: du närmar dig en rondell och ska köra in. Vad gör du?",
    "options": [
      "Kör in eftersom du kommer från höger",
      "Stannar alltid mitt i rondellen",
      "Anpassar hastigheten och lämnar företräde åt fordon i cirkulationen"
    ],
    "answer": 2,
    "explanation": "Fordon som kör in i cirkulationsplats har väjningsplikt mot trafiken där.",
    "source": "Transportstyrelsen – Cirkulationsplats",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP194",
    "category": "trafikregler",
    "question": "Vid en stressig hämtning: du närmar dig en rondell och ska köra in. Vad gör du?",
    "options": [
      "Anpassar hastigheten och lämnar företräde åt fordon i cirkulationen",
      "Kör in eftersom du kommer från höger",
      "Stannar alltid mitt i rondellen"
    ],
    "answer": 0,
    "explanation": "Fordon som kör in i cirkulationsplats har väjningsplikt mot trafiken där.",
    "source": "Transportstyrelsen – Cirkulationsplats",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP195",
    "category": "trafikregler",
    "question": "Som yrkesförare behöver du veta: du närmar dig en rondell och ska köra in. Vad gör du?",
    "options": [
      "Stannar alltid mitt i rondellen",
      "Anpassar hastigheten och lämnar företräde åt fordon i cirkulationen",
      "Kör in eftersom du kommer från höger"
    ],
    "answer": 1,
    "explanation": "Fordon som kör in i cirkulationsplats har väjningsplikt mot trafiken där.",
    "source": "Transportstyrelsen – Cirkulationsplats",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP196",
    "category": "säkerhet",
    "question": "På ditt nästa arbetspass: en passagerare har inte tagit på sig bilbältet. Vad gör du?",
    "options": [
      "Startar ändå eftersom resan är kort",
      "Låter kunden hålla i bältet",
      "Uppmanar passageraren att använda bältet och kör inte iväg innan det är säkert och lagligt"
    ],
    "answer": 2,
    "explanation": "Bilbälte ska användas enligt gällande regler; föraren har ansvar i vissa situationer och ska köra säkert.",
    "source": "Transportstyrelsen – Bilbälte",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP197",
    "category": "säkerhet",
    "question": "I rusningstrafik: en passagerare har inte tagit på sig bilbältet. Vad gör du?",
    "options": [
      "Uppmanar passageraren att använda bältet och kör inte iväg innan det är säkert och lagligt",
      "Startar ändå eftersom resan är kort",
      "Låter kunden hålla i bältet"
    ],
    "answer": 0,
    "explanation": "Bilbälte ska användas enligt gällande regler; föraren har ansvar i vissa situationer och ska köra säkert.",
    "source": "Transportstyrelsen – Bilbälte",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP198",
    "category": "säkerhet",
    "question": "När du transporterar en kund: en passagerare har inte tagit på sig bilbältet. Vad gör du?",
    "options": [
      "Låter kunden hålla i bältet",
      "Uppmanar passageraren att använda bältet och kör inte iväg innan det är säkert och lagligt",
      "Startar ändå eftersom resan är kort"
    ],
    "answer": 1,
    "explanation": "Bilbälte ska användas enligt gällande regler; föraren har ansvar i vissa situationer och ska köra säkert.",
    "source": "Transportstyrelsen – Bilbälte",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP199",
    "category": "säkerhet",
    "question": "Vid en stressig hämtning: en passagerare har inte tagit på sig bilbältet. Vad gör du?",
    "options": [
      "Startar ändå eftersom resan är kort",
      "Låter kunden hålla i bältet",
      "Uppmanar passageraren att använda bältet och kör inte iväg innan det är säkert och lagligt"
    ],
    "answer": 2,
    "explanation": "Bilbälte ska användas enligt gällande regler; föraren har ansvar i vissa situationer och ska köra säkert.",
    "source": "Transportstyrelsen – Bilbälte",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP200",
    "category": "säkerhet",
    "question": "Som yrkesförare behöver du veta: en passagerare har inte tagit på sig bilbältet. Vad gör du?",
    "options": [
      "Uppmanar passageraren att använda bältet och kör inte iväg innan det är säkert och lagligt",
      "Startar ändå eftersom resan är kort",
      "Låter kunden hålla i bältet"
    ],
    "answer": 0,
    "explanation": "Bilbälte ska användas enligt gällande regler; föraren har ansvar i vissa situationer och ska köra säkert.",
    "source": "Transportstyrelsen – Bilbälte",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP201",
    "category": "säkerhet",
    "question": "På ditt nästa arbetspass: du märker att en passagerare lämnat ett barn utan korrekt fastspänning. Vad gör du?",
    "options": [
      "Låter barnet sitta i knät på en vuxen",
      "Säkerställer att barnet färdas med rätt skydd innan resan startar",
      "Kör långsamt och hoppas att det räcker"
    ],
    "answer": 1,
    "explanation": "Barn ska använda särskilt skydd utifrån ålder och längd enligt gällande regler.",
    "source": "Transportstyrelsen – Skydd för barn i bil",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP202",
    "category": "säkerhet",
    "question": "I rusningstrafik: du märker att en passagerare lämnat ett barn utan korrekt fastspänning. Vad gör du?",
    "options": [
      "Kör långsamt och hoppas att det räcker",
      "Låter barnet sitta i knät på en vuxen",
      "Säkerställer att barnet färdas med rätt skydd innan resan startar"
    ],
    "answer": 2,
    "explanation": "Barn ska använda särskilt skydd utifrån ålder och längd enligt gällande regler.",
    "source": "Transportstyrelsen – Skydd för barn i bil",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP203",
    "category": "säkerhet",
    "question": "När du transporterar en kund: du märker att en passagerare lämnat ett barn utan korrekt fastspänning. Vad gör du?",
    "options": [
      "Säkerställer att barnet färdas med rätt skydd innan resan startar",
      "Kör långsamt och hoppas att det räcker",
      "Låter barnet sitta i knät på en vuxen"
    ],
    "answer": 0,
    "explanation": "Barn ska använda särskilt skydd utifrån ålder och längd enligt gällande regler.",
    "source": "Transportstyrelsen – Skydd för barn i bil",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP204",
    "category": "säkerhet",
    "question": "Vid en stressig hämtning: du märker att en passagerare lämnat ett barn utan korrekt fastspänning. Vad gör du?",
    "options": [
      "Låter barnet sitta i knät på en vuxen",
      "Säkerställer att barnet färdas med rätt skydd innan resan startar",
      "Kör långsamt och hoppas att det räcker"
    ],
    "answer": 1,
    "explanation": "Barn ska använda särskilt skydd utifrån ålder och längd enligt gällande regler.",
    "source": "Transportstyrelsen – Skydd för barn i bil",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP205",
    "category": "säkerhet",
    "question": "Som yrkesförare behöver du veta: du märker att en passagerare lämnat ett barn utan korrekt fastspänning. Vad gör du?",
    "options": [
      "Kör långsamt och hoppas att det räcker",
      "Låter barnet sitta i knät på en vuxen",
      "Säkerställer att barnet färdas med rätt skydd innan resan startar"
    ],
    "answer": 2,
    "explanation": "Barn ska använda särskilt skydd utifrån ålder och längd enligt gällande regler.",
    "source": "Transportstyrelsen – Skydd för barn i bil",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP206",
    "category": "bemötande",
    "question": "På ditt nästa arbetspass: en kund vill ha hjälp att förstå slutpriset på resan. Vad gör du?",
    "options": [
      "Förklarar prisuppgifterna lugnt och visar kvitto eller underlag",
      "Säger att priset inte går att diskutera",
      "Avslutar samtalet utan svar"
    ],
    "answer": 0,
    "explanation": "Tydlig prisinformation och saklig förklaring minskar risken för missförstånd.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP207",
    "category": "bemötande",
    "question": "I rusningstrafik: en kund vill ha hjälp att förstå slutpriset på resan. Vad gör du?",
    "options": [
      "Avslutar samtalet utan svar",
      "Förklarar prisuppgifterna lugnt och visar kvitto eller underlag",
      "Säger att priset inte går att diskutera"
    ],
    "answer": 1,
    "explanation": "Tydlig prisinformation och saklig förklaring minskar risken för missförstånd.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP208",
    "category": "bemötande",
    "question": "När du transporterar en kund: en kund vill ha hjälp att förstå slutpriset på resan. Vad gör du?",
    "options": [
      "Säger att priset inte går att diskutera",
      "Avslutar samtalet utan svar",
      "Förklarar prisuppgifterna lugnt och visar kvitto eller underlag"
    ],
    "answer": 2,
    "explanation": "Tydlig prisinformation och saklig förklaring minskar risken för missförstånd.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP209",
    "category": "bemötande",
    "question": "Vid en stressig hämtning: en kund vill ha hjälp att förstå slutpriset på resan. Vad gör du?",
    "options": [
      "Förklarar prisuppgifterna lugnt och visar kvitto eller underlag",
      "Säger att priset inte går att diskutera",
      "Avslutar samtalet utan svar"
    ],
    "answer": 0,
    "explanation": "Tydlig prisinformation och saklig förklaring minskar risken för missförstånd.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP210",
    "category": "bemötande",
    "question": "Som yrkesförare behöver du veta: en kund vill ha hjälp att förstå slutpriset på resan. Vad gör du?",
    "options": [
      "Avslutar samtalet utan svar",
      "Förklarar prisuppgifterna lugnt och visar kvitto eller underlag",
      "Säger att priset inte går att diskutera"
    ],
    "answer": 1,
    "explanation": "Tydlig prisinformation och saklig förklaring minskar risken för missförstånd.",
    "source": "Konsumentverket – Taxi",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP211",
    "category": "navigation",
    "question": "På ditt nästa arbetspass: du hittar inte kundens port trots rätt gatunummer. Vad gör du?",
    "options": [
      "Kör upp på trottoaren för att leta",
      "Blockerar cykelbanan medan du söker",
      "Stannar lagligt och säkert och kontaktar kunden för att precisera entrén"
    ],
    "answer": 2,
    "explanation": "Säker placering och tydlig kontakt är bättre än att skapa hinder eller risker.",
    "source": "Transportstyrelsen – Stannande och parkering",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP212",
    "category": "navigation",
    "question": "I rusningstrafik: du hittar inte kundens port trots rätt gatunummer. Vad gör du?",
    "options": [
      "Stannar lagligt och säkert och kontaktar kunden för att precisera entrén",
      "Kör upp på trottoaren för att leta",
      "Blockerar cykelbanan medan du söker"
    ],
    "answer": 0,
    "explanation": "Säker placering och tydlig kontakt är bättre än att skapa hinder eller risker.",
    "source": "Transportstyrelsen – Stannande och parkering",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP213",
    "category": "navigation",
    "question": "När du transporterar en kund: du hittar inte kundens port trots rätt gatunummer. Vad gör du?",
    "options": [
      "Blockerar cykelbanan medan du söker",
      "Stannar lagligt och säkert och kontaktar kunden för att precisera entrén",
      "Kör upp på trottoaren för att leta"
    ],
    "answer": 1,
    "explanation": "Säker placering och tydlig kontakt är bättre än att skapa hinder eller risker.",
    "source": "Transportstyrelsen – Stannande och parkering",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP214",
    "category": "navigation",
    "question": "Vid en stressig hämtning: du hittar inte kundens port trots rätt gatunummer. Vad gör du?",
    "options": [
      "Kör upp på trottoaren för att leta",
      "Blockerar cykelbanan medan du söker",
      "Stannar lagligt och säkert och kontaktar kunden för att precisera entrén"
    ],
    "answer": 2,
    "explanation": "Säker placering och tydlig kontakt är bättre än att skapa hinder eller risker.",
    "source": "Transportstyrelsen – Stannande och parkering",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP215",
    "category": "navigation",
    "question": "Som yrkesförare behöver du veta: du hittar inte kundens port trots rätt gatunummer. Vad gör du?",
    "options": [
      "Stannar lagligt och säkert och kontaktar kunden för att precisera entrén",
      "Kör upp på trottoaren för att leta",
      "Blockerar cykelbanan medan du söker"
    ],
    "answer": 0,
    "explanation": "Säker placering och tydlig kontakt är bättre än att skapa hinder eller risker.",
    "source": "Transportstyrelsen – Stannande och parkering",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP216",
    "category": "fordonskunskap",
    "question": "På ditt nästa arbetspass: du märker att en vindrutetorkare inte fungerar i kraftigt regn. Vad gör du?",
    "options": [
      "Ökar hastigheten för att komma fram snabbare",
      "Stannar säkert och åtgärdar felet innan fortsatt körning om sikten inte kan hållas säker",
      "Kör vidare med huvudet ut genom fönstret"
    ],
    "answer": 1,
    "explanation": "Fungerande torkare behövs för tillräcklig sikt. Kör inte vidare om sikten är otillräcklig.",
    "source": "Transportstyrelsen – Fordonskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP217",
    "category": "fordonskunskap",
    "question": "I rusningstrafik: du märker att en vindrutetorkare inte fungerar i kraftigt regn. Vad gör du?",
    "options": [
      "Kör vidare med huvudet ut genom fönstret",
      "Ökar hastigheten för att komma fram snabbare",
      "Stannar säkert och åtgärdar felet innan fortsatt körning om sikten inte kan hållas säker"
    ],
    "answer": 2,
    "explanation": "Fungerande torkare behövs för tillräcklig sikt. Kör inte vidare om sikten är otillräcklig.",
    "source": "Transportstyrelsen – Fordonskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP218",
    "category": "fordonskunskap",
    "question": "När du transporterar en kund: du märker att en vindrutetorkare inte fungerar i kraftigt regn. Vad gör du?",
    "options": [
      "Stannar säkert och åtgärdar felet innan fortsatt körning om sikten inte kan hållas säker",
      "Kör vidare med huvudet ut genom fönstret",
      "Ökar hastigheten för att komma fram snabbare"
    ],
    "answer": 0,
    "explanation": "Fungerande torkare behövs för tillräcklig sikt. Kör inte vidare om sikten är otillräcklig.",
    "source": "Transportstyrelsen – Fordonskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP219",
    "category": "fordonskunskap",
    "question": "Vid en stressig hämtning: du märker att en vindrutetorkare inte fungerar i kraftigt regn. Vad gör du?",
    "options": [
      "Ökar hastigheten för att komma fram snabbare",
      "Stannar säkert och åtgärdar felet innan fortsatt körning om sikten inte kan hållas säker",
      "Kör vidare med huvudet ut genom fönstret"
    ],
    "answer": 1,
    "explanation": "Fungerande torkare behövs för tillräcklig sikt. Kör inte vidare om sikten är otillräcklig.",
    "source": "Transportstyrelsen – Fordonskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP220",
    "category": "fordonskunskap",
    "question": "Som yrkesförare behöver du veta: du märker att en vindrutetorkare inte fungerar i kraftigt regn. Vad gör du?",
    "options": [
      "Kör vidare med huvudet ut genom fönstret",
      "Ökar hastigheten för att komma fram snabbare",
      "Stannar säkert och åtgärdar felet innan fortsatt körning om sikten inte kan hållas säker"
    ],
    "answer": 2,
    "explanation": "Fungerande torkare behövs för tillräcklig sikt. Kör inte vidare om sikten är otillräcklig.",
    "source": "Transportstyrelsen – Fordonskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP221",
    "category": "miljö",
    "question": "På ditt nästa arbetspass: du kör en hybridbil i tätort. Vad är ett bra körsätt?",
    "options": [
      "Planera körningen mjukt och undvika onödiga accelerationer och inbromsningar",
      "Accelerera kraftigt mellan varje trafikljus",
      "Låta bilen stå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och framförhållning kan minska energiförbrukningen oavsett drivlina.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP222",
    "category": "miljö",
    "question": "I rusningstrafik: du kör en hybridbil i tätort. Vad är ett bra körsätt?",
    "options": [
      "Låta bilen stå på tomgång vid varje stopp",
      "Planera körningen mjukt och undvika onödiga accelerationer och inbromsningar",
      "Accelerera kraftigt mellan varje trafikljus"
    ],
    "answer": 1,
    "explanation": "Jämn körning och framförhållning kan minska energiförbrukningen oavsett drivlina.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP223",
    "category": "miljö",
    "question": "När du transporterar en kund: du kör en hybridbil i tätort. Vad är ett bra körsätt?",
    "options": [
      "Accelerera kraftigt mellan varje trafikljus",
      "Låta bilen stå på tomgång vid varje stopp",
      "Planera körningen mjukt och undvika onödiga accelerationer och inbromsningar"
    ],
    "answer": 2,
    "explanation": "Jämn körning och framförhållning kan minska energiförbrukningen oavsett drivlina.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP224",
    "category": "miljö",
    "question": "Vid en stressig hämtning: du kör en hybridbil i tätort. Vad är ett bra körsätt?",
    "options": [
      "Planera körningen mjukt och undvika onödiga accelerationer och inbromsningar",
      "Accelerera kraftigt mellan varje trafikljus",
      "Låta bilen stå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och framförhållning kan minska energiförbrukningen oavsett drivlina.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP225",
    "category": "miljö",
    "question": "Som yrkesförare behöver du veta: du kör en hybridbil i tätort. Vad är ett bra körsätt?",
    "options": [
      "Låta bilen stå på tomgång vid varje stopp",
      "Planera körningen mjukt och undvika onödiga accelerationer och inbromsningar",
      "Accelerera kraftigt mellan varje trafikljus"
    ],
    "answer": 1,
    "explanation": "Jämn körning och framförhållning kan minska energiförbrukningen oavsett drivlina.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP226",
    "category": "trafikregler",
    "question": "Scenario: du kör i ett bostadsområde där barn leker nära vägen. Vilken hastighet väljer du?",
    "options": [
      "Alltid exakt den skyltade maxhastigheten",
      "Samma hastighet som på landsväg",
      "En hastighet som är tillräckligt låg för att kunna stanna för något oväntat"
    ],
    "answer": 2,
    "explanation": "Hastigheten ska anpassas till omständigheterna, särskilt där barn kan komma ut i vägen.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP227",
    "category": "trafikregler",
    "question": "Under ett kvällspass: du kör i ett bostadsområde där barn leker nära vägen. Vilken hastighet väljer du?",
    "options": [
      "En hastighet som är tillräckligt låg för att kunna stanna för något oväntat",
      "Alltid exakt den skyltade maxhastigheten",
      "Samma hastighet som på landsväg"
    ],
    "answer": 0,
    "explanation": "Hastigheten ska anpassas till omständigheterna, särskilt där barn kan komma ut i vägen.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP228",
    "category": "trafikregler",
    "question": "När du kör i Stockholm: du kör i ett bostadsområde där barn leker nära vägen. Vilken hastighet väljer du?",
    "options": [
      "Samma hastighet som på landsväg",
      "En hastighet som är tillräckligt låg för att kunna stanna för något oväntat",
      "Alltid exakt den skyltade maxhastigheten"
    ],
    "answer": 1,
    "explanation": "Hastigheten ska anpassas till omständigheterna, särskilt där barn kan komma ut i vägen.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP229",
    "category": "trafikregler",
    "question": "I rollen som taxiförare: du kör i ett bostadsområde där barn leker nära vägen. Vilken hastighet väljer du?",
    "options": [
      "Alltid exakt den skyltade maxhastigheten",
      "Samma hastighet som på landsväg",
      "En hastighet som är tillräckligt låg för att kunna stanna för något oväntat"
    ],
    "answer": 2,
    "explanation": "Hastigheten ska anpassas till omständigheterna, särskilt där barn kan komma ut i vägen.",
    "source": "Transportstyrelsen – Hastighet",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP230",
    "category": "trafikregler",
    "question": "Scenario: en trafiksignal visar gult fast sken när du närmar dig. Vad gäller?",
    "options": [
      "Stanna om du kan göra det utan fara",
      "Öka alltid farten för att hinna",
      "Gult betyder samma sak som grönt"
    ],
    "answer": 0,
    "explanation": "Gult ljus betyder stopp, om du inte redan kommit så nära att du inte kan stanna utan fara.",
    "source": "Transportstyrelsen – Trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP231",
    "category": "trafikregler",
    "question": "Under ett kvällspass: en trafiksignal visar gult fast sken när du närmar dig. Vad gäller?",
    "options": [
      "Gult betyder samma sak som grönt",
      "Stanna om du kan göra det utan fara",
      "Öka alltid farten för att hinna"
    ],
    "answer": 1,
    "explanation": "Gult ljus betyder stopp, om du inte redan kommit så nära att du inte kan stanna utan fara.",
    "source": "Transportstyrelsen – Trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP232",
    "category": "trafikregler",
    "question": "När du kör i Stockholm: en trafiksignal visar gult fast sken när du närmar dig. Vad gäller?",
    "options": [
      "Öka alltid farten för att hinna",
      "Gult betyder samma sak som grönt",
      "Stanna om du kan göra det utan fara"
    ],
    "answer": 2,
    "explanation": "Gult ljus betyder stopp, om du inte redan kommit så nära att du inte kan stanna utan fara.",
    "source": "Transportstyrelsen – Trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP233",
    "category": "trafikregler",
    "question": "I rollen som taxiförare: en trafiksignal visar gult fast sken när du närmar dig. Vad gäller?",
    "options": [
      "Stanna om du kan göra det utan fara",
      "Öka alltid farten för att hinna",
      "Gult betyder samma sak som grönt"
    ],
    "answer": 0,
    "explanation": "Gult ljus betyder stopp, om du inte redan kommit så nära att du inte kan stanna utan fara.",
    "source": "Transportstyrelsen – Trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP234",
    "category": "trafikregler",
    "question": "Scenario: du kör bakom en cyklist på en smal väg. När får du köra om?",
    "options": [
      "Alltid om bilen är bredare än cykeln",
      "När det kan ske med tillräckligt sidavstånd och utan fara eller hinder",
      "Så snart du använder signalhornet"
    ],
    "answer": 1,
    "explanation": "Omkörning kräver god sikt, tillräckligt utrymme och hänsyn till cyklistens säkerhet.",
    "source": "Transportstyrelsen – Omkörning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP235",
    "category": "trafikregler",
    "question": "Under ett kvällspass: du kör bakom en cyklist på en smal väg. När får du köra om?",
    "options": [
      "Så snart du använder signalhornet",
      "Alltid om bilen är bredare än cykeln",
      "När det kan ske med tillräckligt sidavstånd och utan fara eller hinder"
    ],
    "answer": 2,
    "explanation": "Omkörning kräver god sikt, tillräckligt utrymme och hänsyn till cyklistens säkerhet.",
    "source": "Transportstyrelsen – Omkörning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP236",
    "category": "trafikregler",
    "question": "När du kör i Stockholm: du kör bakom en cyklist på en smal väg. När får du köra om?",
    "options": [
      "När det kan ske med tillräckligt sidavstånd och utan fara eller hinder",
      "Så snart du använder signalhornet",
      "Alltid om bilen är bredare än cykeln"
    ],
    "answer": 0,
    "explanation": "Omkörning kräver god sikt, tillräckligt utrymme och hänsyn till cyklistens säkerhet.",
    "source": "Transportstyrelsen – Omkörning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP237",
    "category": "trafikregler",
    "question": "I rollen som taxiförare: du kör bakom en cyklist på en smal väg. När får du köra om?",
    "options": [
      "Alltid om bilen är bredare än cykeln",
      "När det kan ske med tillräckligt sidavstånd och utan fara eller hinder",
      "Så snart du använder signalhornet"
    ],
    "answer": 1,
    "explanation": "Omkörning kräver god sikt, tillräckligt utrymme och hänsyn till cyklistens säkerhet.",
    "source": "Transportstyrelsen – Omkörning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP238",
    "category": "säkerhet",
    "question": "Scenario: du får ett meddelande i mobilen medan du kör. Vad gör du?",
    "options": [
      "Läser meddelandet snabbt i låg hastighet",
      "Skriver svar när vägen är rak",
      "Låter bli att hantera mobilen under körning och stannar säkert om det behövs"
    ],
    "answer": 2,
    "explanation": "Mobilanvändning får inte påverka körningen; hantering ska ske utan fara och i enlighet med reglerna.",
    "source": "Transportstyrelsen – Mobiltelefon vid körning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP239",
    "category": "säkerhet",
    "question": "Under ett kvällspass: du får ett meddelande i mobilen medan du kör. Vad gör du?",
    "options": [
      "Låter bli att hantera mobilen under körning och stannar säkert om det behövs",
      "Läser meddelandet snabbt i låg hastighet",
      "Skriver svar när vägen är rak"
    ],
    "answer": 0,
    "explanation": "Mobilanvändning får inte påverka körningen; hantering ska ske utan fara och i enlighet med reglerna.",
    "source": "Transportstyrelsen – Mobiltelefon vid körning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP240",
    "category": "säkerhet",
    "question": "När du kör i Stockholm: du får ett meddelande i mobilen medan du kör. Vad gör du?",
    "options": [
      "Skriver svar när vägen är rak",
      "Låter bli att hantera mobilen under körning och stannar säkert om det behövs",
      "Läser meddelandet snabbt i låg hastighet"
    ],
    "answer": 1,
    "explanation": "Mobilanvändning får inte påverka körningen; hantering ska ske utan fara och i enlighet med reglerna.",
    "source": "Transportstyrelsen – Mobiltelefon vid körning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP241",
    "category": "säkerhet",
    "question": "I rollen som taxiförare: du får ett meddelande i mobilen medan du kör. Vad gör du?",
    "options": [
      "Läser meddelandet snabbt i låg hastighet",
      "Skriver svar när vägen är rak",
      "Låter bli att hantera mobilen under körning och stannar säkert om det behövs"
    ],
    "answer": 2,
    "explanation": "Mobilanvändning får inte påverka körningen; hantering ska ske utan fara och i enlighet med reglerna.",
    "source": "Transportstyrelsen – Mobiltelefon vid körning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP242",
    "category": "säkerhet",
    "question": "Scenario: du kör på en isig bro som kan vara halare än vägen före bron. Vad gör du?",
    "options": [
      "Minskar hastigheten i god tid och undviker kraftiga manövrer",
      "Bromsar hårt mitt på bron",
      "Accelererar kraftigt för att få grepp"
    ],
    "answer": 0,
    "explanation": "Broar kan bli hala snabbt. Mjuk körning och anpassad hastighet minskar risken för sladd.",
    "source": "Trafikverket – Vinterväglag",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP243",
    "category": "säkerhet",
    "question": "Under ett kvällspass: du kör på en isig bro som kan vara halare än vägen före bron. Vad gör du?",
    "options": [
      "Accelererar kraftigt för att få grepp",
      "Minskar hastigheten i god tid och undviker kraftiga manövrer",
      "Bromsar hårt mitt på bron"
    ],
    "answer": 1,
    "explanation": "Broar kan bli hala snabbt. Mjuk körning och anpassad hastighet minskar risken för sladd.",
    "source": "Trafikverket – Vinterväglag",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP244",
    "category": "säkerhet",
    "question": "När du kör i Stockholm: du kör på en isig bro som kan vara halare än vägen före bron. Vad gör du?",
    "options": [
      "Bromsar hårt mitt på bron",
      "Accelererar kraftigt för att få grepp",
      "Minskar hastigheten i god tid och undviker kraftiga manövrer"
    ],
    "answer": 2,
    "explanation": "Broar kan bli hala snabbt. Mjuk körning och anpassad hastighet minskar risken för sladd.",
    "source": "Trafikverket – Vinterväglag",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP245",
    "category": "säkerhet",
    "question": "I rollen som taxiförare: du kör på en isig bro som kan vara halare än vägen före bron. Vad gör du?",
    "options": [
      "Minskar hastigheten i god tid och undviker kraftiga manövrer",
      "Bromsar hårt mitt på bron",
      "Accelererar kraftigt för att få grepp"
    ],
    "answer": 0,
    "explanation": "Broar kan bli hala snabbt. Mjuk körning och anpassad hastighet minskar risken för sladd.",
    "source": "Trafikverket – Vinterväglag",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP246",
    "category": "fordonskunskap",
    "question": "Scenario: varför ska du kontrollera att registreringsskyltarna är läsbara?",
    "options": [
      "Det minskar däckslitaget",
      "Fordonet ska kunna identifieras och skyltarna får inte vara skymda eller oläsliga",
      "Det förbättrar bilens aerodynamik"
    ],
    "answer": 1,
    "explanation": "Registreringsskyltar ska vara synliga och läsbara enligt fordonsreglerna.",
    "source": "Transportstyrelsen – Registreringsskyltar",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP247",
    "category": "fordonskunskap",
    "question": "Under ett kvällspass: varför ska du kontrollera att registreringsskyltarna är läsbara?",
    "options": [
      "Det förbättrar bilens aerodynamik",
      "Det minskar däckslitaget",
      "Fordonet ska kunna identifieras och skyltarna får inte vara skymda eller oläsliga"
    ],
    "answer": 2,
    "explanation": "Registreringsskyltar ska vara synliga och läsbara enligt fordonsreglerna.",
    "source": "Transportstyrelsen – Registreringsskyltar",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP248",
    "category": "fordonskunskap",
    "question": "När du kör i Stockholm: varför ska du kontrollera att registreringsskyltarna är läsbara?",
    "options": [
      "Fordonet ska kunna identifieras och skyltarna får inte vara skymda eller oläsliga",
      "Det förbättrar bilens aerodynamik",
      "Det minskar däckslitaget"
    ],
    "answer": 0,
    "explanation": "Registreringsskyltar ska vara synliga och läsbara enligt fordonsreglerna.",
    "source": "Transportstyrelsen – Registreringsskyltar",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP249",
    "category": "fordonskunskap",
    "question": "I rollen som taxiförare: varför ska du kontrollera att registreringsskyltarna är läsbara?",
    "options": [
      "Det minskar däckslitaget",
      "Fordonet ska kunna identifieras och skyltarna får inte vara skymda eller oläsliga",
      "Det förbättrar bilens aerodynamik"
    ],
    "answer": 1,
    "explanation": "Registreringsskyltar ska vara synliga och läsbara enligt fordonsreglerna.",
    "source": "Transportstyrelsen – Registreringsskyltar",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP250",
    "category": "navigation",
    "question": "Scenario: du ser att en GPS-rutt leder in på en privat väg med förbudsskylt. Vad gör du?",
    "options": [
      "Kör in om kunden säger att det går bra",
      "Följer GPS-rösten oavsett skylt",
      "Följer förbudet och väljer annan tillåten väg"
    ],
    "answer": 2,
    "explanation": "Vägmärken och lokala trafikregler gäller även när GPS visar en annan väg.",
    "source": "Transportstyrelsen – Vägmärken",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP251",
    "category": "navigation",
    "question": "Under ett kvällspass: du ser att en GPS-rutt leder in på en privat väg med förbudsskylt. Vad gör du?",
    "options": [
      "Följer förbudet och väljer annan tillåten väg",
      "Kör in om kunden säger att det går bra",
      "Följer GPS-rösten oavsett skylt"
    ],
    "answer": 0,
    "explanation": "Vägmärken och lokala trafikregler gäller även när GPS visar en annan väg.",
    "source": "Transportstyrelsen – Vägmärken",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP252",
    "category": "navigation",
    "question": "När du kör i Stockholm: du ser att en GPS-rutt leder in på en privat väg med förbudsskylt. Vad gör du?",
    "options": [
      "Följer GPS-rösten oavsett skylt",
      "Följer förbudet och väljer annan tillåten väg",
      "Kör in om kunden säger att det går bra"
    ],
    "answer": 1,
    "explanation": "Vägmärken och lokala trafikregler gäller även när GPS visar en annan väg.",
    "source": "Transportstyrelsen – Vägmärken",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP253",
    "category": "navigation",
    "question": "I rollen som taxiförare: du ser att en GPS-rutt leder in på en privat väg med förbudsskylt. Vad gör du?",
    "options": [
      "Kör in om kunden säger att det går bra",
      "Följer GPS-rösten oavsett skylt",
      "Följer förbudet och väljer annan tillåten väg"
    ],
    "answer": 2,
    "explanation": "Vägmärken och lokala trafikregler gäller även när GPS visar en annan väg.",
    "source": "Transportstyrelsen – Vägmärken",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP254",
    "category": "bemötande",
    "question": "Scenario: en kund har glömt att ange att hen har med sig ett husdjur. Vad gör du?",
    "options": [
      "Kontrollerar företagets regler och hittar en säker och tydlig lösning tillsammans med kunden",
      "Låter djuret sitta löst i förarsätet",
      "Blir arg och lämnar kunden utan förklaring"
    ],
    "answer": 0,
    "explanation": "Tydlig kommunikation och säkra rutiner behövs för djurtransport och passagerarsäkerhet.",
    "source": "Jordbruksverket – Transport av sällskapsdjur",
    "sourceUrl": "https://jordbruksverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP255",
    "category": "bemötande",
    "question": "Under ett kvällspass: en kund har glömt att ange att hen har med sig ett husdjur. Vad gör du?",
    "options": [
      "Blir arg och lämnar kunden utan förklaring",
      "Kontrollerar företagets regler och hittar en säker och tydlig lösning tillsammans med kunden",
      "Låter djuret sitta löst i förarsätet"
    ],
    "answer": 1,
    "explanation": "Tydlig kommunikation och säkra rutiner behövs för djurtransport och passagerarsäkerhet.",
    "source": "Jordbruksverket – Transport av sällskapsdjur",
    "sourceUrl": "https://jordbruksverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP256",
    "category": "bemötande",
    "question": "När du kör i Stockholm: en kund har glömt att ange att hen har med sig ett husdjur. Vad gör du?",
    "options": [
      "Låter djuret sitta löst i förarsätet",
      "Blir arg och lämnar kunden utan förklaring",
      "Kontrollerar företagets regler och hittar en säker och tydlig lösning tillsammans med kunden"
    ],
    "answer": 2,
    "explanation": "Tydlig kommunikation och säkra rutiner behövs för djurtransport och passagerarsäkerhet.",
    "source": "Jordbruksverket – Transport av sällskapsdjur",
    "sourceUrl": "https://jordbruksverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP257",
    "category": "bemötande",
    "question": "I rollen som taxiförare: en kund har glömt att ange att hen har med sig ett husdjur. Vad gör du?",
    "options": [
      "Kontrollerar företagets regler och hittar en säker och tydlig lösning tillsammans med kunden",
      "Låter djuret sitta löst i förarsätet",
      "Blir arg och lämnar kunden utan förklaring"
    ],
    "answer": 0,
    "explanation": "Tydlig kommunikation och säkra rutiner behövs för djurtransport och passagerarsäkerhet.",
    "source": "Jordbruksverket – Transport av sällskapsdjur",
    "sourceUrl": "https://jordbruksverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP258",
    "category": "arbetsmiljö",
    "question": "Scenario: du känner smärta i ryggen efter upprepade lyft. Vad bör du göra?",
    "options": [
      "Dölja problemet för arbetsgivaren",
      "Rapportera besvären och se över arbetsmetod, hjälpmedel och belastning",
      "Fortsätta lyfta på samma sätt tills smärtan går över"
    ],
    "answer": 1,
    "explanation": "Tidiga åtgärder och riskbedömning kan förebygga långvariga belastningsbesvär.",
    "source": "Arbetsmiljöverket – Belastningsergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP259",
    "category": "arbetsmiljö",
    "question": "Under ett kvällspass: du känner smärta i ryggen efter upprepade lyft. Vad bör du göra?",
    "options": [
      "Fortsätta lyfta på samma sätt tills smärtan går över",
      "Dölja problemet för arbetsgivaren",
      "Rapportera besvären och se över arbetsmetod, hjälpmedel och belastning"
    ],
    "answer": 2,
    "explanation": "Tidiga åtgärder och riskbedömning kan förebygga långvariga belastningsbesvär.",
    "source": "Arbetsmiljöverket – Belastningsergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP260",
    "category": "arbetsmiljö",
    "question": "När du kör i Stockholm: du känner smärta i ryggen efter upprepade lyft. Vad bör du göra?",
    "options": [
      "Rapportera besvären och se över arbetsmetod, hjälpmedel och belastning",
      "Fortsätta lyfta på samma sätt tills smärtan går över",
      "Dölja problemet för arbetsgivaren"
    ],
    "answer": 0,
    "explanation": "Tidiga åtgärder och riskbedömning kan förebygga långvariga belastningsbesvär.",
    "source": "Arbetsmiljöverket – Belastningsergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP261",
    "category": "arbetsmiljö",
    "question": "I rollen som taxiförare: du känner smärta i ryggen efter upprepade lyft. Vad bör du göra?",
    "options": [
      "Dölja problemet för arbetsgivaren",
      "Rapportera besvären och se över arbetsmetod, hjälpmedel och belastning",
      "Fortsätta lyfta på samma sätt tills smärtan går över"
    ],
    "answer": 1,
    "explanation": "Tidiga åtgärder och riskbedömning kan förebygga långvariga belastningsbesvär.",
    "source": "Arbetsmiljöverket – Belastningsergonomi",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP262",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Scenario: en kund använder ledarhund. Vad är ett respektfullt bemötande?",
    "options": [
      "Ta hundens sele utan att fråga",
      "Avvisa automatiskt kunden utan att kontrollera reglerna",
      "Fråga om hjälp behövs och följa regler och rutiner för ledarhundar"
    ],
    "answer": 2,
    "explanation": "Personer med ledarhund behöver tillgänglig service och respektfullt bemötande; följ gällande regler.",
    "source": "Diskrimineringsombudsmannen – Tillgänglighet",
    "sourceUrl": "https://www.do.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP263",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Under ett kvällspass: en kund använder ledarhund. Vad är ett respektfullt bemötande?",
    "options": [
      "Fråga om hjälp behövs och följa regler och rutiner för ledarhundar",
      "Ta hundens sele utan att fråga",
      "Avvisa automatiskt kunden utan att kontrollera reglerna"
    ],
    "answer": 0,
    "explanation": "Personer med ledarhund behöver tillgänglig service och respektfullt bemötande; följ gällande regler.",
    "source": "Diskrimineringsombudsmannen – Tillgänglighet",
    "sourceUrl": "https://www.do.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP264",
    "category": "sjukdom_funktionsnedsättning",
    "question": "När du kör i Stockholm: en kund använder ledarhund. Vad är ett respektfullt bemötande?",
    "options": [
      "Avvisa automatiskt kunden utan att kontrollera reglerna",
      "Fråga om hjälp behövs och följa regler och rutiner för ledarhundar",
      "Ta hundens sele utan att fråga"
    ],
    "answer": 1,
    "explanation": "Personer med ledarhund behöver tillgänglig service och respektfullt bemötande; följ gällande regler.",
    "source": "Diskrimineringsombudsmannen – Tillgänglighet",
    "sourceUrl": "https://www.do.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP265",
    "category": "sjukdom_funktionsnedsättning",
    "question": "I rollen som taxiförare: en kund använder ledarhund. Vad är ett respektfullt bemötande?",
    "options": [
      "Ta hundens sele utan att fråga",
      "Avvisa automatiskt kunden utan att kontrollera reglerna",
      "Fråga om hjälp behövs och följa regler och rutiner för ledarhundar"
    ],
    "answer": 2,
    "explanation": "Personer med ledarhund behöver tillgänglig service och respektfullt bemötande; följ gällande regler.",
    "source": "Diskrimineringsombudsmannen – Tillgänglighet",
    "sourceUrl": "https://www.do.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP266",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll"
    ],
    "answer": 0,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP267",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning"
    ],
    "answer": 1,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP268",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs"
    ],
    "answer": 2,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP269",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten"
    ],
    "answer": 0,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP270",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen"
    ],
    "answer": 1,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP271",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid"
    ],
    "answer": 2,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP272",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP273",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet"
    ],
    "answer": 1,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP274",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "skynda på personen",
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar"
    ],
    "answer": 2,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP275",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 1)?",
    "options": [
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter"
    ],
    "answer": 0,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP276",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant"
    ],
    "answer": 1,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP277",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan"
    ],
    "answer": 2,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP278",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten"
    ],
    "answer": 0,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP279",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden"
    ],
    "answer": 1,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP280",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg"
    ],
    "answer": 2,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP281",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara"
    ],
    "answer": 0,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP282",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen"
    ],
    "answer": 1,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP283",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation"
    ],
    "answer": 2,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP284",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen",
      "ta tag i personen utan förvarning"
    ],
    "answer": 0,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP285",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 2)?",
    "options": [
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt"
    ],
    "answer": 1,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP286",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet"
    ],
    "answer": 2,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP287",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen"
    ],
    "answer": 0,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP288",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga"
    ],
    "answer": 1,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP289",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar"
    ],
    "answer": 2,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP290",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen"
    ],
    "answer": 0,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP291",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna"
    ],
    "answer": 1,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP292",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning"
    ],
    "answer": 2,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP293",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt"
    ],
    "answer": 0,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP294",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen"
    ],
    "answer": 1,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP295",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 3)?",
    "options": [
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan"
    ],
    "answer": 2,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP296",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll"
    ],
    "answer": 0,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP297",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning"
    ],
    "answer": 1,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP298",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs"
    ],
    "answer": 2,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP299",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten"
    ],
    "answer": 0,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP300",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen"
    ],
    "answer": 1,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP301",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid"
    ],
    "answer": 2,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP302",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP303",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet"
    ],
    "answer": 1,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP304",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "skynda på personen",
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar"
    ],
    "answer": 2,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP305",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 4)?",
    "options": [
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter"
    ],
    "answer": 0,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP306",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant"
    ],
    "answer": 1,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP307",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan"
    ],
    "answer": 2,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP308",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten"
    ],
    "answer": 0,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP309",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden"
    ],
    "answer": 1,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP310",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg"
    ],
    "answer": 2,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP311",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara"
    ],
    "answer": 0,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP312",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen"
    ],
    "answer": 1,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP313",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation"
    ],
    "answer": 2,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP314",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen",
      "ta tag i personen utan förvarning"
    ],
    "answer": 0,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP315",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 5)?",
    "options": [
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt"
    ],
    "answer": 1,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP316",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet"
    ],
    "answer": 2,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP317",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen"
    ],
    "answer": 0,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP318",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga"
    ],
    "answer": 1,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP319",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar"
    ],
    "answer": 2,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP320",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen"
    ],
    "answer": 0,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP321",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna"
    ],
    "answer": 1,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP322",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning"
    ],
    "answer": 2,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP323",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt"
    ],
    "answer": 0,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP324",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen"
    ],
    "answer": 1,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP325",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 6)?",
    "options": [
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan"
    ],
    "answer": 2,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP326",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll"
    ],
    "answer": 0,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP327",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning"
    ],
    "answer": 1,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP328",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs"
    ],
    "answer": 2,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP329",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten"
    ],
    "answer": 0,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP330",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen"
    ],
    "answer": 1,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP331",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid"
    ],
    "answer": 2,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP332",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP333",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet"
    ],
    "answer": 1,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP334",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "skynda på personen",
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar"
    ],
    "answer": 2,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP335",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 7)?",
    "options": [
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter"
    ],
    "answer": 0,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP336",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant"
    ],
    "answer": 1,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP337",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan"
    ],
    "answer": 2,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP338",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten"
    ],
    "answer": 0,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP339",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden"
    ],
    "answer": 1,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP340",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg"
    ],
    "answer": 2,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP341",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara"
    ],
    "answer": 0,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP342",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen"
    ],
    "answer": 1,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP343",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation"
    ],
    "answer": 2,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP344",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen",
      "ta tag i personen utan förvarning"
    ],
    "answer": 0,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP345",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 8)?",
    "options": [
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt"
    ],
    "answer": 1,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP346",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet"
    ],
    "answer": 2,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP347",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen"
    ],
    "answer": 0,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP348",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga"
    ],
    "answer": 1,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP349",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar"
    ],
    "answer": 2,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP350",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen"
    ],
    "answer": 0,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP351",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna"
    ],
    "answer": 1,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP352",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning"
    ],
    "answer": 2,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP353",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt"
    ],
    "answer": 0,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP354",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen"
    ],
    "answer": 1,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP355",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 9)?",
    "options": [
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan"
    ],
    "answer": 2,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP356",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll"
    ],
    "answer": 0,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP357",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning"
    ],
    "answer": 1,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP358",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs"
    ],
    "answer": 2,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP359",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten"
    ],
    "answer": 0,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP360",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen"
    ],
    "answer": 1,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP361",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid"
    ],
    "answer": 2,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP362",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP363",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet"
    ],
    "answer": 1,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP364",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "skynda på personen",
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar"
    ],
    "answer": 2,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP365",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 10)?",
    "options": [
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter"
    ],
    "answer": 0,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP366",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant"
    ],
    "answer": 1,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP367",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan"
    ],
    "answer": 2,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP368",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten"
    ],
    "answer": 0,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP369",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden"
    ],
    "answer": 1,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP370",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg"
    ],
    "answer": 2,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP371",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara"
    ],
    "answer": 0,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP372",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen"
    ],
    "answer": 1,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP373",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation"
    ],
    "answer": 2,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP374",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen",
      "ta tag i personen utan förvarning"
    ],
    "answer": 0,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP375",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 11)?",
    "options": [
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt"
    ],
    "answer": 1,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP376",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet"
    ],
    "answer": 2,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP377",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen"
    ],
    "answer": 0,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP378",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga"
    ],
    "answer": 1,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP379",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar"
    ],
    "answer": 2,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP380",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen"
    ],
    "answer": 0,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP381",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna"
    ],
    "answer": 1,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP382",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning"
    ],
    "answer": 2,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP383",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt"
    ],
    "answer": 0,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP384",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen"
    ],
    "answer": 1,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP385",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 12)?",
    "options": [
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan"
    ],
    "answer": 2,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP386",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll"
    ],
    "answer": 0,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP387",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning"
    ],
    "answer": 1,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP388",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs"
    ],
    "answer": 2,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP389",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten"
    ],
    "answer": 0,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP390",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen"
    ],
    "answer": 1,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP391",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid"
    ],
    "answer": 2,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP392",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP393",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet"
    ],
    "answer": 1,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP394",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "skynda på personen",
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar"
    ],
    "answer": 2,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP395",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 13)?",
    "options": [
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter"
    ],
    "answer": 0,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP396",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant"
    ],
    "answer": 1,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP397",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan"
    ],
    "answer": 2,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP398",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten"
    ],
    "answer": 0,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP399",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden"
    ],
    "answer": 1,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP400",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg"
    ],
    "answer": 2,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP401",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara"
    ],
    "answer": 0,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP402",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen"
    ],
    "answer": 1,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP403",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation"
    ],
    "answer": 2,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP404",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen",
      "ta tag i personen utan förvarning"
    ],
    "answer": 0,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP405",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 14)?",
    "options": [
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt"
    ],
    "answer": 1,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP406",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet"
    ],
    "answer": 2,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP407",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen"
    ],
    "answer": 0,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP408",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga"
    ],
    "answer": 1,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP409",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar"
    ],
    "answer": 2,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP410",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen"
    ],
    "answer": 0,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP411",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna"
    ],
    "answer": 1,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP412",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning"
    ],
    "answer": 2,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP413",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt"
    ],
    "answer": 0,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP414",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen"
    ],
    "answer": 1,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP415",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 15)?",
    "options": [
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan"
    ],
    "answer": 2,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP416",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll"
    ],
    "answer": 0,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP417",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning"
    ],
    "answer": 1,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP418",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs"
    ],
    "answer": 2,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP419",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten"
    ],
    "answer": 0,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP420",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen"
    ],
    "answer": 1,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP421",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid"
    ],
    "answer": 2,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP422",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP423",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet"
    ],
    "answer": 1,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP424",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "skynda på personen",
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar"
    ],
    "answer": 2,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP425",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 16)?",
    "options": [
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter"
    ],
    "answer": 0,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP426",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant"
    ],
    "answer": 1,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP427",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan"
    ],
    "answer": 2,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP428",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten"
    ],
    "answer": 0,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP429",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden"
    ],
    "answer": 1,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP430",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg"
    ],
    "answer": 2,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP431",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara"
    ],
    "answer": 0,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP432",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen"
    ],
    "answer": 1,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP433",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation"
    ],
    "answer": 2,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP434",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen",
      "ta tag i personen utan förvarning"
    ],
    "answer": 0,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP435",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 17)?",
    "options": [
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt"
    ],
    "answer": 1,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP436",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet"
    ],
    "answer": 2,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP437",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen"
    ],
    "answer": 0,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP438",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga"
    ],
    "answer": 1,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP439",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar"
    ],
    "answer": 2,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP440",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen"
    ],
    "answer": 0,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP441",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna"
    ],
    "answer": 1,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP442",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning"
    ],
    "answer": 2,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP443",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt"
    ],
    "answer": 0,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP444",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen"
    ],
    "answer": 1,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP445",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 18)?",
    "options": [
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan"
    ],
    "answer": 2,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP446",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll"
    ],
    "answer": 0,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP447",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning"
    ],
    "answer": 1,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP448",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs"
    ],
    "answer": 2,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP449",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten"
    ],
    "answer": 0,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP450",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen"
    ],
    "answer": 1,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP451",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid"
    ],
    "answer": 2,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP452",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp"
    ],
    "answer": 0,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP453",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation",
      "sitta orörlig hela passet"
    ],
    "answer": 1,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP454",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "skynda på personen",
      "ta tag i personen utan förvarning",
      "ge tid och fråga vilken hjälp personen önskar"
    ],
    "answer": 2,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP455",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 19)?",
    "options": [
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt",
      "undvika att lämna prisuppgifter"
    ],
    "answer": 0,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP456",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet",
      "hålla samma fart eftersom vägen är bekant"
    ],
    "answer": 1,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP457",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen",
      "anpassa hastigheten efter den korta siktsträckan"
    ],
    "answer": 2,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP458",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga",
      "lämna personen ensam vid vägkanten"
    ],
    "answer": 0,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP459",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar",
      "kompensera genom att hålla ratten snett hela tiden"
    ],
    "answer": 1,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP460",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen",
      "följa avstängningen och välja en laglig omväg"
    ],
    "answer": 2,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP461",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna",
      "undvika att svara"
    ],
    "answer": 0,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP462",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning",
      "gasa kraftigt mellan stoppen"
    ],
    "answer": 1,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP463",
    "category": "arbetsmiljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: ett arbetspass med få möjligheter att sträcka på kroppen. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "sitta orörlig hela passet",
      "justera sätet under körning utan uppsikt",
      "planera in lämpliga pauser och variation"
    ],
    "answer": 2,
    "explanation": "Variation, pauser och ergonomisk inställning minskar belastning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP464",
    "category": "sjukdom_funktionsnedsättning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som behöver extra tid att sätta sig. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "ge tid och fråga vilken hjälp personen önskar",
      "skynda på personen",
      "ta tag i personen utan förvarning"
    ],
    "answer": 0,
    "explanation": "Individanpassad hjälp ska ges med respekt för självbestämmande och säkerhet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP465",
    "category": "taxilagstiftning",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som vill få priset förklarat före resan. Vilket agerande är mest lämpligt (övningsfall 20)?",
    "options": [
      "undvika att lämna prisuppgifter",
      "förklara prisinformation och villkor tydligt innan resan",
      "säga att priset bestäms först efteråt"
    ],
    "answer": 1,
    "explanation": "Kunden ska få tydlig prisinformation enligt reglerna för taxiresor.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP466",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: regn och bländande reflexer. Vilket agerande är mest lämpligt (övningsfall 21)?",
    "options": [
      "hålla samma fart eftersom vägen är bekant",
      "följa bilen framför på nära håll",
      "sänka hastigheten och öka avståndet"
    ],
    "answer": 2,
    "explanation": "Regn och bländning försämrar sikt och väggrepp. Anpassa hastigheten och avståndet.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP467",
    "category": "trafikregler",
    "question": "Du arbetar som taxiförare och hamnar i situationen: dimma på en landsväg. Vilket agerande är mest lämpligt (övningsfall 21)?",
    "options": [
      "anpassa hastigheten efter den korta siktsträckan",
      "använda helljus hela tiden oavsett bländning",
      "köra nära mittlinjen"
    ],
    "answer": 0,
    "explanation": "Vid dimma behöver du anpassa hastigheten och använda belysning på ett sätt som inte försämrar sikten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP468",
    "category": "säkerhet",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en passagerare som verkar svimfärdig. Vilket agerande är mest lämpligt (övningsfall 21)?",
    "options": [
      "lämna personen ensam vid vägkanten",
      "stanna säkert och bedöma om akut hjälp behövs",
      "fortsätta köra utan att fråga"
    ],
    "answer": 1,
    "explanation": "Vid akut sjukdom ska säkerheten prioriteras och 112 kontaktas vid livshotande tillstånd.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.sosalarm.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP469",
    "category": "fordonskunskap",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en bil som drar åt sidan. Vilket agerande är mest lämpligt (övningsfall 21)?",
    "options": [
      "kompensera genom att hålla ratten snett hela tiden",
      "öka hastigheten",
      "låta kontrollera däck, hjulinställning eller bromsar"
    ],
    "answer": 2,
    "explanation": "Att bilen drar åt sidan kan tyda på fel som behöver kontrolleras innan fortsatt yrkeskörning.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP470",
    "category": "navigation",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en adress med tillfällig avstängning. Vilket agerande är mest lämpligt (övningsfall 21)?",
    "options": [
      "följa avstängningen och välja en laglig omväg",
      "köra förbi konerna om GPS visar vägen",
      "låta kunden välja att bryta mot avstängningen"
    ],
    "answer": 0,
    "explanation": "Tillfälliga anvisningar och avstängningar gäller även om digitala kartor är inaktuella.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP471",
    "category": "bemötande",
    "question": "Du arbetar som taxiförare och hamnar i situationen: en kund som är orolig för att komma för sent. Vilket agerande är mest lämpligt (övningsfall 21)?",
    "options": [
      "undvika att svara",
      "ge lugn och realistisk information utan att lova en omöjlig ankomsttid",
      "lova att du kan bryta mot trafikreglerna"
    ],
    "answer": 1,
    "explanation": "Professionell service innebär tydlig information utan löften som äventyrar säkerheten.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP472",
    "category": "miljö",
    "question": "Du arbetar som taxiförare och hamnar i situationen: många korta resor i tätort. Vilket agerande är mest lämpligt (övningsfall 21)?",
    "options": [
      "gasa kraftigt mellan stoppen",
      "låta motorn gå på tomgång vid varje stopp",
      "planera körningen och köra mjukt med framförhållning"
    ],
    "answer": 2,
    "explanation": "Jämn körning och minskad tomgång kan minska energiförbrukningen.",
    "source": "Övningsfråga baserad på myndighetsvägledning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP473",
    "category": "trafikregler",
    "question": "Du kommer till en korsning där trafikljusen är släckta. Vad gör du (situation 1)?",
    "options": [
      "Kör som om du alltid har grönt",
      "Följer bilen framför utan egen kontroll",
      "Behandlar korsningen försiktigt och följer tillämpliga väjningsregler och skyltar"
    ],
    "answer": 2,
    "explanation": "När signalerna inte reglerar trafiken måste du följa övriga regler och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP474",
    "category": "säkerhet",
    "question": "En kund ber dig att köra trots att du känner dig för trött för att köra säkert. Vad gör du (situation 2)?",
    "options": [
      "Öppnar fönstret och ignorerar tröttheten",
      "Avstår från fortsatt körning och ordnar en säker lösning",
      "Kör vidare eftersom kunden betalar"
    ],
    "answer": 1,
    "explanation": "Föraren ska inte köra när tröttheten gör körningen osäker.",
    "source": "Trafikverket – Trötthet",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP475",
    "category": "taxilagstiftning",
    "question": "Du får en beställning som kräver att du använder ett fordon som inte får användas i taxitrafik. Vad gör du (situation 3)?",
    "options": [
      "Kontrollerar fordonets behörighet och använder inte ett otillåtet fordon",
      "Kör ändå om kunden väntar",
      "Använder en kollegas tillstånd"
    ],
    "answer": 0,
    "explanation": "Taxitrafik omfattas av krav på tillstånd och fordon. Kontrollera att förutsättningarna är uppfyllda.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP476",
    "category": "bemötande",
    "question": "En kund vill veta om du kan ta emot betalning på ett visst sätt. Vad gör du (situation 4)?",
    "options": [
      "Säger ja även om du inte vet",
      "Väntar tills resan är avslutad",
      "Ger korrekt information om vilka betalningssätt som accepteras innan resan"
    ],
    "answer": 2,
    "explanation": "Tydlig information före och under köpet minskar risken för missförstånd.",
    "source": "Konsumentverket – Information till konsumenter",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP477",
    "category": "navigation",
    "question": "Du kör mot en kunds adress men märker att GPS:en placerat bilen på fel sida av en motorväg. Vad gör du (situation 5)?",
    "options": [
      "Korsar mittbarriären där det ser möjligt ut",
      "Planerar en säker och laglig väg till rätt sida utan att göra en farlig U-sväng",
      "Stannar på motorvägen och backar"
    ],
    "answer": 1,
    "explanation": "Följ vägnätet och skyltningen. Gör aldrig en otillåten eller farlig manöver för att korrigera en GPS-position.",
    "source": "Trafikverket – Trafiksäkerhet",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP478",
    "category": "fordonskunskap",
    "question": "Du upptäcker att en backspegel är lös. Vad är rätt (situation 6)?",
    "options": [
      "Säkerställer att sikten är tillräcklig och åtgärdar felet innan körning om den påverkas",
      "Tejpar fast spegeln provisoriskt utan kontroll",
      "Kör vidare och använder bara innerbackspegeln"
    ],
    "answer": 0,
    "explanation": "Föraren måste ha tillräcklig sikt runt fordonet. Brister ska åtgärdas innan säker körning.",
    "source": "Transportstyrelsen – Fordonskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP479",
    "category": "miljö",
    "question": "Du behöver välja mellan två likvärdiga rutter. Den ena innebär många stopp och starter. Vad kan vara bäst (situation 7)?",
    "options": [
      "Välja rutten med flest accelerationer",
      "Köra en omväg för att hålla motorn på högt varvtal",
      "Välja den jämnare och lämpliga rutten om den inte innebär onödig omväg"
    ],
    "answer": 2,
    "explanation": "Jämn körning och framförhållning kan minska energiförbrukningen.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP480",
    "category": "arbetsmiljö",
    "question": "Du behöver rengöra bilen efter en resa med spill. Vad bör du tänka på (situation 8)?",
    "options": [
      "Använda kemikalier utan att läsa märkningen",
      "Använda lämpliga skydd och följa produktens instruktioner och arbetsplatsens rutiner",
      "Blanda rengöringsmedel för starkare effekt"
    ],
    "answer": 1,
    "explanation": "Kemiska produkter ska hanteras enligt märkning, säkerhetsinformation och arbetsplatsens rutiner.",
    "source": "Arbetsmiljöverket – Kemiska risker",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP481",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare har en kognitiv funktionsnedsättning och verkar osäker på destinationen. Vad gör du (situation 9)?",
    "options": [
      "Använder lugn och enkel kommunikation och bekräftar resmålet med passageraren",
      "Gissar destination utifrån tidigare resor",
      "Låter en annan passagerare bestämma utan samtycke"
    ],
    "answer": 0,
    "explanation": "Tydlig, respektfull kommunikation och bekräftelse av resmålet minskar risken för fel.",
    "source": "1177 – Stöd och kommunikation",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP482",
    "category": "trafikregler",
    "question": "Du kommer till en korsning där trafikljusen är släckta. Vad gör du (situation 10)?",
    "options": [
      "Kör som om du alltid har grönt",
      "Följer bilen framför utan egen kontroll",
      "Behandlar korsningen försiktigt och följer tillämpliga väjningsregler och skyltar"
    ],
    "answer": 2,
    "explanation": "När signalerna inte reglerar trafiken måste du följa övriga regler och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP483",
    "category": "säkerhet",
    "question": "En kund ber dig att köra trots att du känner dig för trött för att köra säkert. Vad gör du (situation 11)?",
    "options": [
      "Öppnar fönstret och ignorerar tröttheten",
      "Avstår från fortsatt körning och ordnar en säker lösning",
      "Kör vidare eftersom kunden betalar"
    ],
    "answer": 1,
    "explanation": "Föraren ska inte köra när tröttheten gör körningen osäker.",
    "source": "Trafikverket – Trötthet",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP484",
    "category": "taxilagstiftning",
    "question": "Du får en beställning som kräver att du använder ett fordon som inte får användas i taxitrafik. Vad gör du (situation 12)?",
    "options": [
      "Kontrollerar fordonets behörighet och använder inte ett otillåtet fordon",
      "Kör ändå om kunden väntar",
      "Använder en kollegas tillstånd"
    ],
    "answer": 0,
    "explanation": "Taxitrafik omfattas av krav på tillstånd och fordon. Kontrollera att förutsättningarna är uppfyllda.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP485",
    "category": "bemötande",
    "question": "En kund vill veta om du kan ta emot betalning på ett visst sätt. Vad gör du (situation 13)?",
    "options": [
      "Säger ja även om du inte vet",
      "Väntar tills resan är avslutad",
      "Ger korrekt information om vilka betalningssätt som accepteras innan resan"
    ],
    "answer": 2,
    "explanation": "Tydlig information före och under köpet minskar risken för missförstånd.",
    "source": "Konsumentverket – Information till konsumenter",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP486",
    "category": "navigation",
    "question": "Du kör mot en kunds adress men märker att GPS:en placerat bilen på fel sida av en motorväg. Vad gör du (situation 14)?",
    "options": [
      "Korsar mittbarriären där det ser möjligt ut",
      "Planerar en säker och laglig väg till rätt sida utan att göra en farlig U-sväng",
      "Stannar på motorvägen och backar"
    ],
    "answer": 1,
    "explanation": "Följ vägnätet och skyltningen. Gör aldrig en otillåten eller farlig manöver för att korrigera en GPS-position.",
    "source": "Trafikverket – Trafiksäkerhet",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP487",
    "category": "fordonskunskap",
    "question": "Du upptäcker att en backspegel är lös. Vad är rätt (situation 15)?",
    "options": [
      "Säkerställer att sikten är tillräcklig och åtgärdar felet innan körning om den påverkas",
      "Tejpar fast spegeln provisoriskt utan kontroll",
      "Kör vidare och använder bara innerbackspegeln"
    ],
    "answer": 0,
    "explanation": "Föraren måste ha tillräcklig sikt runt fordonet. Brister ska åtgärdas innan säker körning.",
    "source": "Transportstyrelsen – Fordonskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP488",
    "category": "miljö",
    "question": "Du behöver välja mellan två likvärdiga rutter. Den ena innebär många stopp och starter. Vad kan vara bäst (situation 16)?",
    "options": [
      "Välja rutten med flest accelerationer",
      "Köra en omväg för att hålla motorn på högt varvtal",
      "Välja den jämnare och lämpliga rutten om den inte innebär onödig omväg"
    ],
    "answer": 2,
    "explanation": "Jämn körning och framförhållning kan minska energiförbrukningen.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP489",
    "category": "arbetsmiljö",
    "question": "Du behöver rengöra bilen efter en resa med spill. Vad bör du tänka på (situation 17)?",
    "options": [
      "Använda kemikalier utan att läsa märkningen",
      "Använda lämpliga skydd och följa produktens instruktioner och arbetsplatsens rutiner",
      "Blanda rengöringsmedel för starkare effekt"
    ],
    "answer": 1,
    "explanation": "Kemiska produkter ska hanteras enligt märkning, säkerhetsinformation och arbetsplatsens rutiner.",
    "source": "Arbetsmiljöverket – Kemiska risker",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP490",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare har en kognitiv funktionsnedsättning och verkar osäker på destinationen. Vad gör du (situation 18)?",
    "options": [
      "Använder lugn och enkel kommunikation och bekräftar resmålet med passageraren",
      "Gissar destination utifrån tidigare resor",
      "Låter en annan passagerare bestämma utan samtycke"
    ],
    "answer": 0,
    "explanation": "Tydlig, respektfull kommunikation och bekräftelse av resmålet minskar risken för fel.",
    "source": "1177 – Stöd och kommunikation",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP491",
    "category": "trafikregler",
    "question": "Du kommer till en korsning där trafikljusen är släckta. Vad gör du (situation 19)?",
    "options": [
      "Kör som om du alltid har grönt",
      "Följer bilen framför utan egen kontroll",
      "Behandlar korsningen försiktigt och följer tillämpliga väjningsregler och skyltar"
    ],
    "answer": 2,
    "explanation": "När signalerna inte reglerar trafiken måste du följa övriga regler och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP492",
    "category": "säkerhet",
    "question": "En kund ber dig att köra trots att du känner dig för trött för att köra säkert. Vad gör du (situation 20)?",
    "options": [
      "Öppnar fönstret och ignorerar tröttheten",
      "Avstår från fortsatt körning och ordnar en säker lösning",
      "Kör vidare eftersom kunden betalar"
    ],
    "answer": 1,
    "explanation": "Föraren ska inte köra när tröttheten gör körningen osäker.",
    "source": "Trafikverket – Trötthet",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP493",
    "category": "taxilagstiftning",
    "question": "Du får en beställning som kräver att du använder ett fordon som inte får användas i taxitrafik. Vad gör du (situation 21)?",
    "options": [
      "Kontrollerar fordonets behörighet och använder inte ett otillåtet fordon",
      "Kör ändå om kunden väntar",
      "Använder en kollegas tillstånd"
    ],
    "answer": 0,
    "explanation": "Taxitrafik omfattas av krav på tillstånd och fordon. Kontrollera att förutsättningarna är uppfyllda.",
    "source": "Transportstyrelsen – Taxitrafik",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP494",
    "category": "bemötande",
    "question": "En kund vill veta om du kan ta emot betalning på ett visst sätt. Vad gör du (situation 22)?",
    "options": [
      "Säger ja även om du inte vet",
      "Väntar tills resan är avslutad",
      "Ger korrekt information om vilka betalningssätt som accepteras innan resan"
    ],
    "answer": 2,
    "explanation": "Tydlig information före och under köpet minskar risken för missförstånd.",
    "source": "Konsumentverket – Information till konsumenter",
    "sourceUrl": "https://www.konsumentverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP495",
    "category": "navigation",
    "question": "Du kör mot en kunds adress men märker att GPS:en placerat bilen på fel sida av en motorväg. Vad gör du (situation 23)?",
    "options": [
      "Korsar mittbarriären där det ser möjligt ut",
      "Planerar en säker och laglig väg till rätt sida utan att göra en farlig U-sväng",
      "Stannar på motorvägen och backar"
    ],
    "answer": 1,
    "explanation": "Följ vägnätet och skyltningen. Gör aldrig en otillåten eller farlig manöver för att korrigera en GPS-position.",
    "source": "Trafikverket – Trafiksäkerhet",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP496",
    "category": "fordonskunskap",
    "question": "Du upptäcker att en backspegel är lös. Vad är rätt (situation 24)?",
    "options": [
      "Säkerställer att sikten är tillräcklig och åtgärdar felet innan körning om den påverkas",
      "Tejpar fast spegeln provisoriskt utan kontroll",
      "Kör vidare och använder bara innerbackspegeln"
    ],
    "answer": 0,
    "explanation": "Föraren måste ha tillräcklig sikt runt fordonet. Brister ska åtgärdas innan säker körning.",
    "source": "Transportstyrelsen – Fordonskrav",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP497",
    "category": "miljö",
    "question": "Du behöver välja mellan två likvärdiga rutter. Den ena innebär många stopp och starter. Vad kan vara bäst (situation 25)?",
    "options": [
      "Välja rutten med flest accelerationer",
      "Köra en omväg för att hålla motorn på högt varvtal",
      "Välja den jämnare och lämpliga rutten om den inte innebär onödig omväg"
    ],
    "answer": 2,
    "explanation": "Jämn körning och framförhållning kan minska energiförbrukningen.",
    "source": "Trafikverket – Sparsam körning",
    "sourceUrl": "https://www.trafikverket.se/",
    "difficulty": "medel"
  },
  {
    "id": "TP498",
    "category": "arbetsmiljö",
    "question": "Du behöver rengöra bilen efter en resa med spill. Vad bör du tänka på (situation 26)?",
    "options": [
      "Använda kemikalier utan att läsa märkningen",
      "Använda lämpliga skydd och följa produktens instruktioner och arbetsplatsens rutiner",
      "Blanda rengöringsmedel för starkare effekt"
    ],
    "answer": 1,
    "explanation": "Kemiska produkter ska hanteras enligt märkning, säkerhetsinformation och arbetsplatsens rutiner.",
    "source": "Arbetsmiljöverket – Kemiska risker",
    "sourceUrl": "https://www.av.se/",
    "difficulty": "svår"
  },
  {
    "id": "TP499",
    "category": "sjukdom_funktionsnedsättning",
    "question": "En passagerare har en kognitiv funktionsnedsättning och verkar osäker på destinationen. Vad gör du (situation 27)?",
    "options": [
      "Använder lugn och enkel kommunikation och bekräftar resmålet med passageraren",
      "Gissar destination utifrån tidigare resor",
      "Låter en annan passagerare bestämma utan samtycke"
    ],
    "answer": 0,
    "explanation": "Tydlig, respektfull kommunikation och bekräftelse av resmålet minskar risken för fel.",
    "source": "1177 – Stöd och kommunikation",
    "sourceUrl": "https://www.1177.se/",
    "difficulty": "lätt"
  },
  {
    "id": "TP500",
    "category": "trafikregler",
    "question": "Du kommer till en korsning där trafikljusen är släckta. Vad gör du (situation 28)?",
    "options": [
      "Kör som om du alltid har grönt",
      "Följer bilen framför utan egen kontroll",
      "Behandlar korsningen försiktigt och följer tillämpliga väjningsregler och skyltar"
    ],
    "answer": 2,
    "explanation": "När signalerna inte reglerar trafiken måste du följa övriga regler och visa särskild försiktighet.",
    "source": "Transportstyrelsen – Trafiksignaler",
    "sourceUrl": "https://www.transportstyrelsen.se/",
    "difficulty": "medel"
  }
];
