import type { Unit } from './types';

export const B2: Unit[] = [
  {
    id: 'b2-subjonctif',
    level: 'B2',
    title: 'Subjonctif',
    tips:
      'Der subjonctif steht nach Ausdrücken von Wunsch, Notwendigkeit, Gefühl und Zweifel: ' +
      '„il faut que“, „je veux que“, „bien que“, „pour que“, „avant que“. Unregelmäßig: être → que je sois, avoir → que j’aie, ' +
      'faire → que je fasse, aller → que j’aille, pouvoir → que je puisse, savoir → que je sache.',
    vocab: [
      ['il faut que', 'es ist nötig, dass|man muss'],
      ['bien que', 'obwohl'],
      ['pour que', 'damit'],
      ['avant que', 'bevor'],
      ['à condition que', 'unter der Bedingung, dass|vorausgesetzt, dass'],
      ['douter', 'zweifeln|bezweifeln'],
      ['craindre', 'befürchten|fürchten'],
      ['exiger', 'verlangen|fordern'],
    ],
    sentences: [
      ['Il faut que tu fasses tes devoirs.', 'Du musst deine Hausaufgaben machen.|Es ist nötig, dass du deine Hausaufgaben machst.'],
      ["Je veux que vous soyez à l'heure.", 'Ich will, dass ihr pünktlich seid.|Ich möchte, dass Sie pünktlich sind.'],
      ['Bien qu’il soit fatigué, il continue.', 'Obwohl er müde ist, macht er weiter.'],
      ["Je doute qu'elle puisse venir.", 'Ich bezweifle, dass sie kommen kann.'],
      ['Parle plus fort pour que tout le monde entende.', 'Sprich lauter, damit alle es hören.|Sprich lauter, damit alle hören.'],
      ['Rentrons avant qu’il ne pleuve.', 'Lass uns nach Hause gehen, bevor es regnet.|Gehen wir nach Hause, bevor es regnet.'],
    ],
    cloze: [
      { fr: 'Il faut que tu ___ tes devoirs.', answer: 'fasses', wrong: ['fais', 'feras'], de: 'Du musst deine Hausaufgaben machen.' },
      { fr: 'Bien qu’il ___ fatigué, il continue.', answer: 'soit', wrong: ['est', 'sera'], de: 'Obwohl er müde ist, macht er weiter.' },
      { fr: "Je doute qu'elle ___ venir.", answer: 'puisse', wrong: ['peut', 'pourra'], de: 'Ich bezweifle, dass sie kommen kann.' },
      { fr: 'Je pense qu’il ___ raison.', answer: 'a', wrong: ['ait', 'aie'], de: 'Ich denke, dass er recht hat. (Kein Zweifel → Indikativ)' },
    ],
  },
  {
    id: 'b2-reported',
    level: 'B2',
    title: 'Indirekte Rede & Plusquamperfekt',
    tips:
      'Plus-que-parfait: imparfait von avoir/être + Partizip („j’avais fini“, „elle était partie“). ' +
      'In der indirekten Rede in der Vergangenheit verschieben sich die Zeiten: Präsens → imparfait, passé composé → plus-que-parfait, ' +
      'Futur → Konditional. „Il a dit : « Je viendrai »“ → „Il a dit qu’il viendrait.“',
    vocab: [
      ['affirmer', 'behaupten|versichern'],
      ['expliquer', 'erklären'],
      ['prétendre', 'vorgeben|behaupten'],
      ['demander si', 'fragen, ob'],
      ['la veille', 'am Vortag|der Vorabend'],
      ['le lendemain', 'am nächsten Tag|der nächste Tag'],
      ['oublier', 'vergessen'],
      ['avouer', 'gestehen|zugeben'],
    ],
    sentences: [
      ["Il a dit qu'il viendrait le lendemain.", 'Er sagte, er würde am nächsten Tag kommen.|Er hat gesagt, dass er am nächsten Tag kommen würde.'],
      ["Elle m'a demandé si j'avais faim.", 'Sie hat mich gefragt, ob ich Hunger habe.|Sie fragte mich, ob ich Hunger hätte.'],
      ["Quand je suis arrivé, le train était déjà parti.|Quand je suis arrivée, le train était déjà parti.", 'Als ich ankam, war der Zug schon abgefahren.'],
      ["Il a avoué qu'il avait oublié la réunion.", 'Er hat zugegeben, dass er das Meeting vergessen hatte.|Er gab zu, dass er die Besprechung vergessen hatte.'],
      ["Ils ont expliqué qu'ils étaient en retard.", 'Sie haben erklärt, dass sie zu spät waren.|Sie erklärten, dass sie sich verspätet hatten.'],
      ["Nous avions mangé avant de partir.", 'Wir hatten gegessen, bevor wir losgingen.|Wir hatten vor der Abfahrt gegessen.'],
    ],
    cloze: [
      { fr: "Il a dit qu'il ___ le lendemain.", answer: 'viendrait', wrong: ['viendra', 'vient'], de: 'Er sagte, er würde am nächsten Tag kommen.' },
      { fr: 'Quand je suis arrivé, le train ___ déjà parti.', answer: 'était', wrong: ['a', 'avait'], de: 'Als ich ankam, war der Zug schon abgefahren.' },
      { fr: "Elle m'a demandé ___ j'avais faim.", answer: 'si', wrong: ['que', 'quoi'], de: 'Sie hat mich gefragt, ob ich Hunger hatte.' },
      { fr: "Il a avoué qu'il ___ oublié la réunion.", answer: 'avait', wrong: ['a', 'aurait'], de: 'Er gab zu, dass er das Meeting vergessen hatte.' },
    ],
  },
  {
    id: 'b2-passive',
    level: 'B2',
    title: 'Passiv & unpersönliche Formen',
    tips:
      'Passiv: être + Partizip, der Handelnde mit „par“: „Le pont a été construit par les Romains.“ ' +
      'Im Alltag weicht man oft auf „on“ aus („On a volé mon vélo“) oder auf reflexive Formen („Ça se mange froid“).',
    vocab: [
      ['construire', 'bauen'],
      ['voler', 'stehlen|fliegen'],
      ['publier', 'veröffentlichen'],
      ['élire', 'wählen (in ein Amt)'],
      ['interdire', 'verbieten'],
      ['le règlement', 'die Vorschrift|die Regelung'],
      ['la loi', 'das Gesetz'],
      ['traduire', 'übersetzen'],
    ],
    sentences: [
      ['Ce pont a été construit au Moyen Âge.', 'Diese Brücke wurde im Mittelalter gebaut.'],
      ['Le livre sera traduit en allemand.', 'Das Buch wird ins Deutsche übersetzt werden.|Das Buch wird ins Deutsche übersetzt.'],
      ['On a volé mon vélo.', 'Mein Fahrrad wurde gestohlen.|Man hat mein Fahrrad gestohlen.'],
      ['Il est interdit de fumer ici.', 'Rauchen ist hier verboten.|Es ist verboten, hier zu rauchen.'],
      ['La maire a été élue en 2020.', 'Die Bürgermeisterin wurde 2020 gewählt.'],
      ['Ce plat se mange froid.', 'Dieses Gericht isst man kalt.|Dieses Gericht wird kalt gegessen.'],
    ],
    cloze: [
      { fr: 'Ce pont a ___ construit au Moyen Âge.', answer: 'été', wrong: ['est', 'était'], de: 'Diese Brücke wurde im Mittelalter gebaut.' },
      { fr: 'Le livre a été écrit ___ une jeune autrice.', answer: 'par', wrong: ['de', 'pour'], de: 'Das Buch wurde von einer jungen Autorin geschrieben.' },
      { fr: 'La maire a été ___ en 2020.', answer: 'élue', wrong: ['élu', 'élire'], de: 'Die Bürgermeisterin wurde 2020 gewählt.' },
      { fr: 'Ce plat ___ mange froid.', answer: 'se', wrong: ['on', 'il'], de: 'Dieses Gericht isst man kalt.' },
    ],
  },
  {
    id: 'b2-pronouns',
    level: 'B2',
    title: 'Doppelte Pronomen',
    tips:
      'Reihenfolge vor dem Verb: me/te/se/nous/vous → le/la/les → lui/leur → y → en. ' +
      '„Je te le donne“, „Je le lui donne“, „Il y en a“. Im bejahten Imperativ steht es dahinter: „Donne-le-moi !“',
    vocab: [
      ['prêter', 'leihen|verleihen'],
      ['rendre', 'zurückgeben'],
      ['envoyer', 'schicken|senden'],
      ['montrer', 'zeigen'],
      ['promettre', 'versprechen'],
      ['les clés', 'die Schlüssel'],
      ['la lettre', 'der Brief'],
      ['emprunter', 'ausleihen|borgen'],
    ],
    sentences: [
      ['Je te le prête volontiers.', 'Ich leihe es dir gern.|Ich leihe ihn dir gern.'],
      ['Elle le lui a envoyé hier.', 'Sie hat es ihm gestern geschickt.|Sie hat es ihr gestern geschickt.'],
      ['Rends-les-moi demain.', 'Gib sie mir morgen zurück.'],
      ['Il y en a encore trois.', 'Es gibt noch drei davon.|Es sind noch drei da.'],
      ['Nous vous la montrerons.', 'Wir werden sie Ihnen zeigen.|Wir werden sie euch zeigen.'],
      ['Ne me le dis pas!', 'Sag es mir nicht!'],
    ],
    cloze: [
      { fr: 'Je ___ le prête volontiers.', answer: 'te', wrong: ['lui', 'leur'], de: 'Ich leihe es dir gern.' },
      { fr: 'Elle ___ lui a envoyé hier.', answer: 'le', wrong: ['lui', 'en'], de: 'Sie hat es ihm gestern geschickt.' },
      { fr: 'Il y ___ a encore trois.', answer: 'en', wrong: ['y', 'les'], de: 'Es gibt noch drei davon.' },
      { fr: 'Rends-les-___ demain.', answer: 'moi', wrong: ['me', 'je'], de: 'Gib sie mir morgen zurück.' },
    ],
  },
  {
    id: 'b2-connectors',
    level: 'B2',
    title: 'Argumentieren',
    tips:
      'Gegensatz: pourtant, néanmoins, alors que. Grund: puisque, étant donné que, grâce à (positiv), à cause de (negativ). ' +
      'Folge: donc, par conséquent, si bien que. Gérondif („en travaillant“) drückt Gleichzeitigkeit oder Mittel aus.',
    vocab: [
      ['pourtant', 'dennoch|trotzdem'],
      ['néanmoins', 'nichtsdestotrotz|dennoch'],
      ['puisque', 'da ja|weil ja'],
      ['grâce à', 'dank'],
      ['à cause de', 'wegen'],
      ['par conséquent', 'folglich|daher'],
      ['alors que', 'während|obwohl'],
      ['en effet', 'tatsächlich|denn'],
    ],
    sentences: [
      ["Il a beaucoup travaillé, pourtant il n'a pas réussi.", 'Er hat viel gearbeitet, dennoch hat er es nicht geschafft.|Er hat viel gearbeitet und trotzdem nicht bestanden.'],
      ["Grâce à ton aide, j'ai fini à temps.", 'Dank deiner Hilfe bin ich rechtzeitig fertig geworden.'],
      ['Le vol est annulé à cause de la grève.', 'Der Flug ist wegen des Streiks gestrichen.|Der Flug wurde wegen des Streiks annulliert.'],
      ['Puisque tu es là, aide-moi.', 'Da du ja hier bist, hilf mir.|Wo du schon da bist, hilf mir.'],
      ['En lisant chaque jour, on progresse vite.', 'Wenn man jeden Tag liest, macht man schnell Fortschritte.|Durch tägliches Lesen kommt man schnell voran.'],
      ['Les prix augmentent, par conséquent les gens consomment moins.', 'Die Preise steigen, folglich konsumieren die Leute weniger.'],
    ],
    cloze: [
      { fr: "___ ton aide, j'ai fini à temps.", answer: 'Grâce à', wrong: ['À cause de', 'Malgré'], de: 'Dank deiner Hilfe bin ich rechtzeitig fertig geworden.' },
      { fr: 'Le vol est annulé ___ la grève.', answer: 'à cause de', wrong: ['grâce à', 'puisque'], de: 'Der Flug ist wegen des Streiks gestrichen.' },
      { fr: "Il a travaillé, ___ il n'a pas réussi.", answer: 'pourtant', wrong: ['donc', 'puisque'], de: 'Er hat gearbeitet, dennoch hat er es nicht geschafft.' },
      { fr: 'En ___ chaque jour, on progresse.', answer: 'lisant', wrong: ['lire', 'lu'], de: 'Wenn man jeden Tag liest, macht man Fortschritte.' },
    ],
  },
  {
    id: 'b2-past-conditional',
    level: 'B2',
    title: 'Hätte, wäre, würde',
    tips:
      'Irreale Vergangenheit: si + plus-que-parfait, dann conditionnel passé (Konditional von avoir/être + Partizip). ' +
      '„Si j’avais su, je serais venu.“ = Wenn ich es gewusst hätte, wäre ich gekommen. Auch Bedauern: „J’aurais dû …“ (Ich hätte … sollen).',
    vocab: [
      ["j'aurais dû", 'ich hätte … sollen|ich hätte … müssen'],
      ["j'aurais pu", 'ich hätte … können'],
      ['regretter', 'bereuen|bedauern'],
      ['si seulement', 'wenn doch nur'],
      ['à temps', 'rechtzeitig'],
      ['prévenir', 'Bescheid geben|warnen'],
      ['manquer', 'verpassen|fehlen'],
      ['la chance', 'das Glück|die Chance'],
    ],
    sentences: [
      ["Si j'avais su, je serais venu.|Si j'avais su, je serais venue.", 'Wenn ich es gewusst hätte, wäre ich gekommen.'],
      ["Tu aurais dû me prévenir.", 'Du hättest mir Bescheid geben sollen.'],
      ["S'il était parti à temps, il n'aurait pas manqué le train.", 'Wenn er rechtzeitig losgefahren wäre, hätte er den Zug nicht verpasst.'],
      ["Nous aurions pu gagner.", 'Wir hätten gewinnen können.'],
      ["Si seulement j'avais écouté tes conseils!", 'Wenn ich doch nur auf deine Ratschläge gehört hätte!'],
      ["Elle aurait aimé voyager davantage.", 'Sie wäre gern mehr gereist.|Sie hätte gern mehr Reisen gemacht.'],
    ],
    cloze: [
      { fr: "Si j'avais su, je ___ venu.", answer: 'serais', wrong: ['aurais', 'suis'], de: 'Wenn ich es gewusst hätte, wäre ich gekommen.' },
      { fr: 'Tu ___ dû me prévenir.', answer: 'aurais', wrong: ['avais', 'aurai'], de: 'Du hättest mir Bescheid geben sollen.' },
      { fr: "S'il ___ parti à temps, il n'aurait pas manqué le train.", answer: 'était', wrong: ['serait', 'est'], de: 'Wenn er rechtzeitig losgefahren wäre, hätte er den Zug nicht verpasst.' },
      { fr: 'Nous aurions ___ gagner.', answer: 'pu', wrong: ['pouvoir', 'pourrions'], de: 'Wir hätten gewinnen können.' },
    ],
  },
  {
    id: 'b2-concession',
    level: 'B2',
    title: 'Einräumen & Abwägen',
    tips:
      'Einräumung mit Nomen: „malgré“ (trotz) – „malgré la pluie“. Mit Satz: „bien que“ / „quoique“ + subjonctif, „même si“ + Indikativ. ' +
      '„Avoir beau“ + Infinitiv: „J’ai beau essayer, je n’y arrive pas“ = So sehr ich es auch versuche …',
    vocab: [
      ['malgré', 'trotz'],
      ['même si', 'selbst wenn|auch wenn'],
      ['avoir beau', 'noch so sehr …|vergeblich …'],
      ['quand même', 'trotzdem|dennoch'],
      ['en revanche', 'dagegen|hingegen'],
      ['certes', 'zwar|gewiss'],
      ["y arriver", 'es schaffen'],
      ['tout de même', 'immerhin|trotz allem'],
    ],
    sentences: [
      ['Malgré la pluie, nous sommes sortis.', 'Trotz des Regens sind wir hinausgegangen.|Trotz des Regens gingen wir raus.'],
      ["Même s'il fait froid, je vais nager.", 'Selbst wenn es kalt ist, gehe ich schwimmen.|Auch wenn es kalt ist, gehe ich schwimmen.'],
      ["J'ai beau essayer, je n'y arrive pas.", 'So sehr ich es auch versuche, ich schaffe es nicht.|Ich versuche es vergeblich, ich schaffe es nicht.'],
      ["C'est cher, mais je l'achète quand même.", 'Es ist teuer, aber ich kaufe es trotzdem.'],
      ['Certes, le projet est ambitieux, mais il est réaliste.', 'Zwar ist das Projekt ehrgeizig, aber es ist realistisch.|Das Projekt ist zwar ambitioniert, aber realistisch.'],
      ['Paris est cher; en revanche, la province est abordable.', 'Paris ist teuer; die Provinz dagegen ist erschwinglich.'],
    ],
    cloze: [
      { fr: '___ la pluie, nous sommes sortis.', answer: 'Malgré', wrong: ['Bien que', 'Même si'], de: 'Trotz des Regens sind wir hinausgegangen.' },
      { fr: "Même s'il ___ froid, je vais nager.", answer: 'fait', wrong: ['fasse', 'ferait'], de: 'Selbst wenn es kalt ist, gehe ich schwimmen.' },
      { fr: "J'ai ___ essayer, je n'y arrive pas.", answer: 'beau', wrong: ['bien', 'bon'], de: 'So sehr ich es auch versuche, ich schaffe es nicht.' },
      { fr: 'Bien qu’il ___ tard, ils continuent.', answer: 'soit', wrong: ['est', 'était'], de: 'Obwohl es spät ist, machen sie weiter.' },
    ],
  },
  {
    id: 'b2-society',
    level: 'B2',
    title: 'Politik & Gesellschaft',
    tips:
      'In Debatten: „Il est indispensable que“ + subjonctif, „On ne peut pas nier que …“, „Force est de constater que …“ (Man muss feststellen, dass …). ' +
      'Achtung: „la politique“ ist die Politik, „le politique“ der Politiker/das Politische.',
    vocab: [
      ['le gouvernement', 'die Regierung'],
      ["l'élection", 'die Wahl'],
      ['le citoyen', 'der Bürger'],
      ['la manifestation', 'die Demonstration'],
      ['la loi', 'das Gesetz'],
      ["l'inégalité", 'die Ungleichheit'],
      ['voter', 'wählen|abstimmen'],
      ['le débat', 'die Debatte'],
    ],
    sentences: [
      ['Les citoyens ont le droit de voter à partir de dix-huit ans.', 'Die Bürger haben ab achtzehn Jahren das Wahlrecht.|Bürger dürfen ab achtzehn wählen.'],
      ['Des milliers de personnes ont participé à la manifestation.', 'Tausende Menschen haben an der Demonstration teilgenommen.'],
      ['Le gouvernement a présenté une nouvelle loi.', 'Die Regierung hat ein neues Gesetz vorgestellt.'],
      ["Force est de constater que les inégalités augmentent.", 'Man muss feststellen, dass die Ungleichheiten zunehmen.'],
      ["Il est indispensable que chacun puisse s'exprimer.", 'Es ist unerlässlich, dass jeder sich äußern kann.'],
      ['Le débat a duré plus de trois heures.', 'Die Debatte dauerte über drei Stunden.|Die Debatte hat mehr als drei Stunden gedauert.'],
    ],
    cloze: [
      { fr: 'Ils ont participé ___ la manifestation.', answer: 'à', wrong: ['de', 'dans'], de: 'Sie haben an der Demonstration teilgenommen.' },
      { fr: "Il est indispensable que chacun ___ s'exprimer.", answer: 'puisse', wrong: ['peut', 'pourra'], de: 'Es ist unerlässlich, dass jeder sich äußern kann.' },
      { fr: '___ est de constater que les inégalités augmentent.', answer: 'Force', wrong: ['Fort', 'Faute'], de: 'Man muss feststellen, dass die Ungleichheiten zunehmen.' },
      { fr: 'Le droit de voter ___ partir de dix-huit ans.', answer: 'à', wrong: ['dès', 'depuis'], de: 'Das Wahlrecht ab achtzehn Jahren.' },
    ],
  },
  {
    id: 'b2-economy',
    level: 'B2',
    title: 'Wirtschaft & Geld',
    tips:
      'Zahlen und Tendenzen: „augmenter de 5 %“ (um 5 % steigen), „passer de … à …“ (von … auf …). ' +
      'Prozent spricht man „pour cent“; große Zahlen: un million, un milliard (Milliarde!).',
    vocab: [
      ['le chômage', 'die Arbeitslosigkeit'],
      ["l'impôt", 'die Steuer'],
      ['la croissance', 'das Wachstum'],
      ['le prix', 'der Preis'],
      ['emprunter', 'leihen (von jmdm.)|einen Kredit aufnehmen'],
      ['le crédit', 'der Kredit'],
      ['un milliard', 'eine Milliarde'],
      ["le pouvoir d'achat", 'die Kaufkraft'],
    ],
    sentences: [
      ['Le chômage a baissé de deux pour cent.', 'Die Arbeitslosigkeit ist um zwei Prozent gesunken.'],
      ['Les prix sont passés de dix à quinze euros.', 'Die Preise sind von zehn auf fünfzehn Euro gestiegen.'],
      ["Ils ont emprunté de l'argent pour acheter une maison.", 'Sie haben Geld geliehen, um ein Haus zu kaufen.|Sie haben einen Kredit aufgenommen, um ein Haus zu kaufen.'],
      ['La croissance reste faible cette année.', 'Das Wachstum bleibt dieses Jahr schwach.'],
      ["Le pouvoir d'achat des ménages diminue.", 'Die Kaufkraft der Haushalte sinkt.'],
      ["L'entreprise a investi un milliard d'euros.", 'Das Unternehmen hat eine Milliarde Euro investiert.'],
    ],
    cloze: [
      { fr: 'Le chômage a baissé ___ deux pour cent.', answer: 'de', wrong: ['à', 'par'], de: 'Die Arbeitslosigkeit ist um zwei Prozent gesunken.' },
      { fr: 'Les prix sont passés de dix ___ quinze euros.', answer: 'à', wrong: ['en', 'jusque'], de: 'Die Preise sind von zehn auf fünfzehn Euro gestiegen.' },
      { fr: "Un milliard ___ euros.", answer: "d'", wrong: ['des', 'en'], de: 'Eine Milliarde Euro.' },
      { fr: 'La croissance ___ faible cette année.', answer: 'reste', wrong: ['restes', 'resté'], de: 'Das Wachstum bleibt dieses Jahr schwach.' },
    ],
  },
  {
    id: 'b2-science',
    level: 'B2',
    title: 'Wissenschaft & Technik',
    tips:
      'Wissenschaftliche Texte nutzen Passiv und unpersönliche Formen: „Il a été démontré que …“, „On estime que …“, „Selon une étude …“. ' +
      'Vorsicht beim Vermuten: Konditional für unbestätigte Angaben („Le virus serait apparu en …“ = soll aufgetreten sein).',
    vocab: [
      ['la recherche', 'die Forschung'],
      ['le chercheur', 'der Forscher'],
      ['une étude', 'eine Studie'],
      ['démontrer', 'nachweisen|beweisen'],
      ['une découverte', 'eine Entdeckung'],
      ["l'intelligence artificielle", 'die künstliche Intelligenz'],
      ['estimer', 'schätzen'],
      ['selon', 'laut|gemäß'],
    ],
    sentences: [
      ['Selon une étude récente, le sommeil améliore la mémoire.', 'Laut einer neuen Studie verbessert Schlaf das Gedächtnis.'],
      ['Il a été démontré que cette méthode fonctionne.', 'Es wurde nachgewiesen, dass diese Methode funktioniert.'],
      ["On estime que la population mondiale atteindra dix milliards.", 'Man schätzt, dass die Weltbevölkerung zehn Milliarden erreichen wird.'],
      ['Les chercheurs auraient trouvé une nouvelle espèce.', 'Die Forscher sollen eine neue Art gefunden haben.'],
      ["L'intelligence artificielle transforme de nombreux métiers.", 'Künstliche Intelligenz verändert viele Berufe.'],
      ['Cette découverte a changé la médecine.', 'Diese Entdeckung hat die Medizin verändert.'],
    ],
    cloze: [
      { fr: '___ une étude récente, le sommeil améliore la mémoire.', answer: 'Selon', wrong: ['Après', 'Pour'], de: 'Laut einer neuen Studie verbessert Schlaf das Gedächtnis.' },
      { fr: 'Il a été ___ que cette méthode fonctionne.', answer: 'démontré', wrong: ['démontrer', 'démontre'], de: 'Es wurde nachgewiesen, dass diese Methode funktioniert.' },
      { fr: 'Les chercheurs ___ trouvé une nouvelle espèce.', answer: 'auraient', wrong: ['ont eu', 'avaient eu'], de: 'Die Forscher sollen eine neue Art gefunden haben.' },
      { fr: 'On estime que la population ___ dix milliards.', answer: 'atteindra', wrong: ['atteigne', 'atteint-elle'], de: 'Man schätzt, dass die Bevölkerung zehn Milliarden erreichen wird.' },
    ],
  },
];
