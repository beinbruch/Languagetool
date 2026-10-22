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
];
