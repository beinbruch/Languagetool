import type { Unit } from './types';

export const C1: Unit[] = [
  {
    id: 'c1-register',
    level: 'C1',
    title: 'Register: familiär bis gehoben',
    tips:
      'Dieselbe Aussage klingt je nach Situation anders. Familiär: „J’ai pas capté“, gehoben: „Je n’ai pas saisi“. ' +
      'Im gesprochenen Französisch fällt das „ne“ oft weg, in Texten nie. Typische Paare: bosser/travailler, bouffer/manger, ' +
      'fric/argent, bagnole/voiture, se planter/échouer.',
    vocab: [
      ['bosser', 'arbeiten (ugs.)|schuften'],
      ['le fric', 'die Kohle (Geld, ugs.)|das Geld'],
      ['la bagnole', 'die Karre|das Auto'],
      ['se planter', 'danebenliegen|scheitern|sich irren'],
      ['capter', 'kapieren|verstehen'],
      ['saisir', 'erfassen|verstehen'],
      ['un mec', 'ein Typ|ein Kerl'],
      ['crevé', 'fix und fertig|todmüde'],
    ],
    sentences: [
      ["J'ai rien capté à ce qu'il a dit.", 'Ich habe nichts von dem kapiert, was er gesagt hat.'],
      ["Je n'ai pas saisi la portée de votre remarque.", 'Ich habe die Tragweite Ihrer Bemerkung nicht erfasst.'],
      ['Je suis crevé, j’ai bossé toute la journée.', 'Ich bin fix und fertig, ich habe den ganzen Tag geschuftet.|Ich bin todmüde, ich habe den ganzen Tag gearbeitet.'],
      ["Il s'est complètement planté à l'examen.", 'Er hat die Prüfung total verhauen.|Er ist in der Prüfung völlig gescheitert.'],
      ["T'as pas un peu de fric à me prêter?", 'Hast du nicht ein bisschen Kohle, die du mir leihen kannst?|Kannst du mir nicht ein bisschen Geld leihen?'],
      ['Je vous saurais gré de bien vouloir me répondre.', 'Ich wäre Ihnen dankbar, wenn Sie mir antworten würden.'],
    ],
    cloze: [
      { fr: 'Je vous saurais ___ de bien vouloir me répondre.', answer: 'gré', wrong: ['merci', 'grâce'], de: 'Ich wäre Ihnen dankbar, wenn Sie mir antworten würden.' },
      { fr: "Je n'ai pas ___ la portée de votre remarque.", answer: 'saisi', wrong: ['capté', 'pigé'], de: 'Ich habe die Tragweite Ihrer Bemerkung nicht erfasst. (gehoben)' },
      { fr: "Il s'est complètement ___ à l'examen.", answer: 'planté', wrong: ['tombé', 'cassé'], de: 'Er hat die Prüfung total verhauen.' },
      { fr: 'Je suis ___, j’ai bossé toute la journée.', answer: 'crevé', wrong: ['crevant', 'crever'], de: 'Ich bin fix und fertig, ich habe den ganzen Tag geschuftet.' },
    ],
  },
  {
    id: 'c1-idioms',
    level: 'C1',
    title: 'Redewendungen',
    tips:
      'Französische Redewendungen lassen sich selten wörtlich übersetzen. Lerne sie als Ganzes – mit ihrer deutschen Entsprechung, ' +
      'nicht mit der wörtlichen Bedeutung.',
    vocab: [
      ['avoir le cafard', 'niedergeschlagen sein|Trübsal blasen'],
      ['coûter les yeux de la tête', 'ein Vermögen kosten|sündhaft teuer sein'],
      ['poser un lapin', 'jemanden versetzen'],
      ['tomber dans les pommes', 'in Ohnmacht fallen|umkippen'],
      ['avoir un poil dans la main', 'stinkfaul sein'],
      ['mettre son grain de sel', 'seinen Senf dazugeben'],
      ['casser les pieds', 'auf die Nerven gehen|nerven'],
      ['ce n’est pas la mer à boire', 'das ist keine Hexerei|das ist halb so wild'],
    ],
    sentences: [
      ["Il m'a posé un lapin hier soir.", 'Er hat mich gestern Abend versetzt.'],
      ['Cette montre coûte les yeux de la tête.', 'Diese Uhr kostet ein Vermögen.|Diese Uhr ist sündhaft teuer.'],
      ["Arrête de me casser les pieds!", 'Hör auf, mir auf die Nerven zu gehen!|Hör auf zu nerven!'],
      ['Il faut toujours qu’elle mette son grain de sel.', 'Sie muss immer ihren Senf dazugeben.'],
      ["Avec ce temps gris, j'ai un peu le cafard.", 'Bei diesem grauen Wetter bin ich etwas niedergeschlagen.'],
      ["Allez, ce n'est pas la mer à boire!", 'Komm schon, das ist keine Hexerei!|Komm, das ist halb so wild!'],
    ],
    cloze: [
      { fr: 'Il m’a posé un ___ hier soir.', answer: 'lapin', wrong: ['chat', 'poisson'], de: 'Er hat mich gestern Abend versetzt.' },
      { fr: 'Cette montre coûte les yeux de la ___.', answer: 'tête', wrong: ['main', 'bouche'], de: 'Diese Uhr kostet ein Vermögen.' },
      { fr: 'Il faut toujours qu’elle mette son grain de ___.', answer: 'sel', wrong: ['poivre', 'sable'], de: 'Sie muss immer ihren Senf dazugeben.' },
      { fr: 'Il a un ___ dans la main.', answer: 'poil', wrong: ['cheveu', 'clou'], de: 'Er ist stinkfaul.' },
    ],
  },
  {
    id: 'c1-subj-past',
    level: 'C1',
    title: 'Subjonctif passé & Zeitenfolge',
    tips:
      'Subjonctif passé = subjonctif von avoir/être + Partizip. Er drückt aus, dass etwas vorher abgeschlossen ist: ' +
      '„Je suis content que tu sois venu.“ Nach „après que“ steht formal der Indikativ, nach „avant que“ der subjonctif – ' +
      'ein Klassiker unter den Fehlern.',
    vocab: [
      ['regretter que', 'bedauern, dass'],
      ['se réjouir que', 'sich freuen, dass'],
      ['il est dommage que', 'es ist schade, dass'],
      ['après que', 'nachdem'],
      ['quoique', 'obgleich|obwohl'],
      ['à moins que', 'es sei denn|außer wenn'],
      ['de crainte que', 'aus Furcht, dass'],
      ['pourvu que', 'hoffentlich|vorausgesetzt, dass'],
    ],
    sentences: [
      ['Je suis ravi que tu sois venu.|Je suis ravie que tu sois venu.|Je suis ravi que tu sois venue.|Je suis ravie que tu sois venue.', 'Ich freue mich sehr, dass du gekommen bist.'],
      ["Il est dommage qu'ils aient manqué le début.", 'Es ist schade, dass sie den Anfang verpasst haben.'],
      ["Je regrette que nous n'ayons pas pu nous voir.", 'Ich bedauere, dass wir uns nicht sehen konnten.'],
      ["Après qu'il est parti, tout le monde s'est tu.", 'Nachdem er gegangen war, schwiegen alle.|Nachdem er gegangen war, verstummten alle.'],
      ['Pourvu qu’il fasse beau demain!', 'Hoffentlich ist morgen schönes Wetter!'],
      ["Nous partirons à huit heures, à moins qu'il ne neige.", 'Wir fahren um acht Uhr los, es sei denn, es schneit.'],
    ],
    cloze: [
      { fr: 'Je suis ravi que tu ___ venu.', answer: 'sois', wrong: ['es', 'serais'], de: 'Ich freue mich sehr, dass du gekommen bist.' },
      { fr: "Il est dommage qu'ils ___ manqué le début.", answer: 'aient', wrong: ['ont', 'auront'], de: 'Es ist schade, dass sie den Anfang verpasst haben.' },
      { fr: "Après qu'il ___ parti, tout le monde s'est tu.", answer: 'est', wrong: ['soit', 'serait'], de: 'Nachdem er gegangen war, schwiegen alle.' },
      { fr: 'Pourvu qu’il ___ beau demain!', answer: 'fasse', wrong: ['fait', 'fera'], de: 'Hoffentlich ist morgen schönes Wetter!' },
    ],
  },
  {
    id: 'c1-emphasis',
    level: 'C1',
    title: 'Hervorhebung & Nominalstil',
    tips:
      'Hervorheben: „C’est … qui/que …“ („C’est lui qui a raison“), Herausstellung mit Pronomen („Moi, je pense que …“, „Ce film, je l’ai adoré“). ' +
      'In Berichten und Nachrichten dominiert der Nominalstil: „la hausse des prix“ statt „les prix augmentent“.',
    vocab: [
      ['la hausse', 'der Anstieg|die Erhöhung'],
      ['la baisse', 'die Senkung|der Rückgang'],
      ["l'essor", 'der Aufschwung|der Aufstieg'],
      ['la mise en œuvre', 'die Umsetzung'],
      ['la prise de conscience', 'die Bewusstwerdung|das Bewusstsein'],
      ['le recul', 'der Rückgang|der Abstand'],
      ['la démarche', 'die Vorgehensweise|der Schritt'],
      ['le bilan', 'die Bilanz'],
    ],
    sentences: [
      ["C'est elle qui a eu l'idée.", 'Sie war es, die die Idee hatte.|Sie hatte die Idee.'],
      ["Ce roman, je l'ai lu deux fois.", 'Diesen Roman habe ich zweimal gelesen.'],
      ['La hausse des loyers inquiète les étudiants.', 'Der Anstieg der Mieten beunruhigt die Studierenden.|Die steigenden Mieten beunruhigen die Studenten.'],
      ['La mise en œuvre du projet a pris du retard.', 'Die Umsetzung des Projekts hat sich verzögert.'],
      ["Ce que je ne comprends pas, c'est son silence.", 'Was ich nicht verstehe, ist sein Schweigen.|Was ich nicht verstehe, ist ihr Schweigen.'],
      ["On observe un recul net du chômage.", 'Man beobachtet einen deutlichen Rückgang der Arbeitslosigkeit.'],
    ],
    cloze: [
      { fr: "C'est elle ___ a eu l'idée.", answer: 'qui', wrong: ['que', 'dont'], de: 'Sie war es, die die Idee hatte.' },
      { fr: "C'est ce film ___ je préfère.", answer: 'que', wrong: ['qui', 'dont'], de: 'Diesen Film mag ich am liebsten.' },
      { fr: "Ce que je ne comprends pas, ___ son silence.", answer: "c'est", wrong: ['il est', 'cela'], de: 'Was ich nicht verstehe, ist sein Schweigen.' },
      { fr: 'La ___ des loyers inquiète les étudiants.', answer: 'hausse', wrong: ['haute', 'hauteur'], de: 'Der Anstieg der Mieten beunruhigt die Studierenden.' },
    ],
  },
  {
    id: 'c1-passe-simple',
    level: 'C1',
    title: 'Passé simple (Literatur)',
    tips:
      'Das passé simple begegnet dir in Romanen, Märchen und Geschichtsbüchern – gesprochen wird es kaum. ' +
      'Vor allem die 3. Person muss man erkennen: il parla, il finit, il prit, il fut, il eut, il fit, il vint, ils allèrent.',
    vocab: [
      ['il fut', 'er war|er wurde'],
      ['il eut', 'er hatte|er bekam'],
      ['il fit', 'er machte|er tat'],
      ['il vint', 'er kam'],
      ['il prit', 'er nahm'],
      ['ils dirent', 'sie sagten'],
      ['elle sut', 'sie wusste|sie erfuhr'],
      ['il mourut', 'er starb'],
    ],
    sentences: [
      ['Il ouvrit la porte et entra sans un mot.', 'Er öffnete die Tür und trat wortlos ein.'],
      ['Elle prit sa valise et partit.', 'Sie nahm ihren Koffer und ging.|Sie nahm ihren Koffer und reiste ab.'],
      ['Ce fut une longue nuit.', 'Es war eine lange Nacht.'],
      ['Ils vinrent nous voir au printemps.', 'Sie kamen uns im Frühling besuchen.'],
      ['Le roi mourut sans héritier.', 'Der König starb ohne Erben.'],
      ['Quand elle sut la vérité, elle se tut.', 'Als sie die Wahrheit erfuhr, schwieg sie.'],
    ],
    cloze: [
      { fr: 'Il ___ la porte et entra sans un mot.', answer: 'ouvrit', wrong: ['ouvrait', 'ouvra'], de: 'Er öffnete die Tür und trat wortlos ein.' },
      { fr: 'Ce ___ une longue nuit.', answer: 'fut', wrong: ['fit', 'eut'], de: 'Es war eine lange Nacht.' },
      { fr: 'Ils ___ nous voir au printemps.', answer: 'vinrent', wrong: ['venirent', 'vinent'], de: 'Sie kamen uns im Frühling besuchen.' },
      { fr: 'Elle ___ sa valise et partit.', answer: 'prit', wrong: ['prenit', 'prisa'], de: 'Sie nahm ihren Koffer und ging.' },
    ],
  },
  {
    id: 'c1-formal-letters',
    level: 'C1',
    title: 'Formelle Briefe & E-Mails',
    tips:
      'Französische Geschäftsbriefe sind deutlich förmlicher als deutsche. Anrede: „Madame, Monsieur,“. ' +
      'Schlussformeln sind lang: „Je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.“ In E-Mails reicht „Bien cordialement“.',
    vocab: [
      ['ci-joint', 'anbei|beigefügt'],
      ['suite à', 'im Anschluss an|bezugnehmend auf'],
      ['je me permets de', 'ich erlaube mir'],
      ["dans l'attente de", 'in Erwartung|in Erwartung Ihrer'],
      ['la candidature', 'die Bewerbung'],
      ['veuillez', 'bitte (förmlich)|wollen Sie bitte'],
      ['bien cordialement', 'mit freundlichen Grüßen|herzliche Grüße'],
      ['la réclamation', 'die Reklamation|die Beschwerde'],
    ],
    sentences: [
      ['Veuillez trouver ci-joint mon curriculum vitae.', 'Anbei finden Sie meinen Lebenslauf.|Anbei erhalten Sie meinen Lebenslauf.'],
      ['Suite à notre entretien téléphonique, je vous confirme ma participation.', 'Im Anschluss an unser Telefonat bestätige ich Ihnen meine Teilnahme.|Bezugnehmend auf unser Telefongespräch bestätige ich meine Teilnahme.'],
      ['Je me permets de vous contacter au sujet de votre annonce.', 'Ich erlaube mir, Sie wegen Ihrer Anzeige zu kontaktieren.'],
      ["Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.", 'In Erwartung Ihrer Antwort verbleibe ich mit freundlichen Grüßen.'],
      ["Je souhaiterais déposer une réclamation concernant ma commande.", 'Ich möchte eine Beschwerde bezüglich meiner Bestellung einreichen.|Ich möchte meine Bestellung reklamieren.'],
      ['Je reste à votre disposition pour tout renseignement complémentaire.', 'Für weitere Auskünfte stehe ich Ihnen gern zur Verfügung.'],
    ],
    cloze: [
      { fr: 'Veuillez trouver ___ mon curriculum vitae.', answer: 'ci-joint', wrong: ['ici joint', 'ci-dessous'], de: 'Anbei finden Sie meinen Lebenslauf.' },
      { fr: '___ à notre entretien, je vous confirme ma participation.', answer: 'Suite', wrong: ['Après', 'Selon'], de: 'Im Anschluss an unser Gespräch bestätige ich meine Teilnahme.' },
      { fr: 'Je reste à votre ___ pour tout renseignement.', answer: 'disposition', wrong: ['service', 'attente'], de: 'Für Auskünfte stehe ich Ihnen zur Verfügung.' },
      { fr: "Je vous prie d'___ mes salutations distinguées.", answer: 'agréer', wrong: ['accepter', 'agréez'], de: 'Mit freundlichen Grüßen.' },
    ],
  },
  {
    id: 'c1-written-connectors',
    level: 'C1',
    title: 'Schriftlich argumentieren',
    tips:
      'Ein guter Aufsatz („dissertation“) gliedert sich klar: „Tout d’abord … Ensuite … Enfin …“. ' +
      'Gehobene Konnektoren: „en outre“ (außerdem), „toutefois“ (jedoch), „ainsi“ (so/somit), „dès lors“ (folglich), „en somme“ (alles in allem).',
    vocab: [
      ['en outre', 'außerdem|darüber hinaus'],
      ['toutefois', 'jedoch|allerdings'],
      ['ainsi', 'so|somit'],
      ['dès lors', 'folglich|von da an'],
      ['en somme', 'alles in allem|kurzum'],
      ["d'une part", 'einerseits|zum einen'],
      ["d'autre part", 'andererseits|zum anderen'],
      ['il convient de', 'es empfiehlt sich|man sollte'],
    ],
    sentences: [
      ["Tout d'abord, il convient de définir les termes du sujet.", 'Zunächst empfiehlt es sich, die Begriffe des Themas zu definieren.|Zuerst sollte man die Begriffe des Themas definieren.'],
      ["Ce projet est coûteux; il est, en outre, difficile à réaliser.", 'Dieses Projekt ist teuer; es ist außerdem schwer umzusetzen.'],
      ["L'idée est séduisante; toutefois, elle soulève plusieurs questions.", 'Die Idee ist verlockend; allerdings wirft sie mehrere Fragen auf.|Die Idee ist reizvoll, jedoch wirft sie einige Fragen auf.'],
      ["D'une part, la ville attire les touristes; d'autre part, elle souffre de la pollution.", 'Einerseits zieht die Stadt Touristen an; andererseits leidet sie unter der Verschmutzung.'],
      ['Dès lors, une réforme semble inévitable.', 'Folglich scheint eine Reform unvermeidlich.'],
      ["En somme, les avantages l'emportent sur les inconvénients.", 'Alles in allem überwiegen die Vorteile die Nachteile.|Kurzum, die Vorteile überwiegen.'],
    ],
    cloze: [
      { fr: "L'idée est séduisante; ___, elle soulève des questions.", answer: 'toutefois', wrong: ['en outre', 'ainsi'], de: 'Die Idee ist verlockend; allerdings wirft sie Fragen auf.' },
      { fr: "Il ___ de définir les termes du sujet.", answer: 'convient', wrong: ['faut', 'doit'], de: 'Es empfiehlt sich, die Begriffe des Themas zu definieren.' },
      { fr: 'Les avantages l’___ sur les inconvénients.', answer: 'emportent', wrong: ['apportent', 'importent'], de: 'Die Vorteile überwiegen die Nachteile.' },
      { fr: "D'une part … d'___ part …", answer: 'autre', wrong: ['une autre', "l'autre"], de: 'Einerseits … andererseits …' },
    ],
  },
  {
    id: 'c1-culture',
    level: 'C1',
    title: 'Kunst & Kultur',
    tips:
      'Über Kunst spricht man gern mit Nuancen: „Ce film m’a laissé de marbre“ (hat mich kalt gelassen), „Il m’a bouleversé“ (hat mich tief bewegt). ' +
      'Kritik: „un chef-d’œuvre“ (Meisterwerk), „un navet“ (ein schlechter Film, wörtlich „eine Rübe“).',
    vocab: [
      ["un chef-d'œuvre", 'ein Meisterwerk'],
      ['un navet', 'ein schlechter Film|ein Flop'],
      ['bouleverser', 'tief bewegen|erschüttern'],
      ['laisser de marbre', 'kalt lassen'],
      ["l'œuvre", 'das Werk'],
      ['la mise en scène', 'die Inszenierung|die Regie'],
      ["l'exposition", 'die Ausstellung'],
      ['le roman', 'der Roman'],
    ],
    sentences: [
      ["Ce roman m'a profondément bouleversé.|Ce roman m'a profondément bouleversée.", 'Dieser Roman hat mich tief bewegt.|Dieser Roman hat mich zutiefst erschüttert.'],
      ["Franchement, ce film est un navet.", 'Ehrlich gesagt ist dieser Film ein Flop.|Ehrlich gesagt ist dieser Film richtig schlecht.'],
      ["La mise en scène était audacieuse.", 'Die Inszenierung war gewagt.|Die Regie war mutig.'],
      ["L'exposition rassemble des œuvres rarement montrées.", 'Die Ausstellung vereint selten gezeigte Werke.'],
      ["Ses tableaux m'ont laissé de marbre.|Ses tableaux m'ont laissée de marbre.", 'Seine Bilder haben mich kalt gelassen.|Ihre Bilder haben mich kalt gelassen.'],
      ["C'est sans doute un chef-d'œuvre du cinéma muet.", 'Das ist zweifellos ein Meisterwerk des Stummfilms.'],
    ],
    cloze: [
      { fr: 'Ses tableaux m’ont laissé de ___.', answer: 'marbre', wrong: ['pierre', 'glace'], de: 'Seine Bilder haben mich kalt gelassen.' },
      { fr: 'Ce film est un ___.', answer: 'navet', wrong: ['chou', 'radis'], de: 'Dieser Film ist ein Flop.' },
      { fr: 'La ___ en scène était audacieuse.', answer: 'mise', wrong: ['mis', 'prise'], de: 'Die Inszenierung war gewagt.' },
      { fr: 'Ce roman m’a profondément ___.', answer: 'bouleversé', wrong: ['bouleverser', 'renversé'], de: 'Dieser Roman hat mich tief bewegt.' },
    ],
  },
];
