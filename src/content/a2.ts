import type { Unit } from './types';

export const A2: Unit[] = [
  {
    id: 'a2-routine',
    level: 'A2',
    title: 'Tagesablauf',
    tips:
      'Reflexive Verben brauchen ein Pronomen: je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent. ' +
      'Vor Vokal wird es verkürzt: „je m’habille“.',
    vocab: [
      ['se lever', 'aufstehen'],
      ['se coucher', 'ins Bett gehen|schlafen gehen'],
      ["s'habiller", 'sich anziehen'],
      ['se laver', 'sich waschen'],
      ['le matin', 'der Morgen|morgens'],
      ['le soir', 'der Abend|abends'],
      ['tôt', 'früh'],
      ['tard', 'spät'],
    ],
    sentences: [
      ['Je me lève à sept heures.', 'Ich stehe um sieben Uhr auf.'],
      ['Tu te couches tard.', 'Du gehst spät ins Bett.|Du gehst spät schlafen.'],
      ["Elle s'habille vite.", 'Sie zieht sich schnell an.'],
      ['Nous nous levons tôt le matin.', 'Wir stehen morgens früh auf.'],
      ['Le soir, je lis un livre.', 'Abends lese ich ein Buch.'],
      ['Vous vous lavez les mains.', 'Sie waschen sich die Hände.|Ihr wascht euch die Hände.'],
    ],
    cloze: [
      { fr: 'Je ___ lève à sept heures.', answer: 'me', wrong: ['te', 'se'], de: 'Ich stehe um sieben Uhr auf.' },
      { fr: 'Ils ___ couchent tard.', answer: 'se', wrong: ['me', 'nous'], de: 'Sie gehen spät ins Bett.' },
      { fr: 'Nous nous ___ tôt.', answer: 'levons', wrong: ['lèvent', 'levez'], de: 'Wir stehen früh auf.' },
      { fr: 'Vous vous ___ les mains.', answer: 'lavez', wrong: ['lavons', 'lavent'], de: 'Ihr wascht euch die Hände.' },
    ],
  },
  {
    id: 'a2-past-avoir',
    level: 'A2',
    title: 'Vergangenheit mit avoir',
    tips:
      'Das passé composé bildet man meist mit „avoir“ + Partizip: j’ai mangé, tu as fini, il a pris. ' +
      '-er wird zu -é, -ir oft zu -i. Unregelmäßig: faire → fait, prendre → pris, voir → vu, boire → bu.',
    vocab: [
      ['hier', 'gestern'],
      ['la semaine dernière', 'letzte Woche'],
      ['déjà', 'schon|bereits'],
      ['fait', 'gemacht'],
      ['pris', 'genommen'],
      ['vu', 'gesehen'],
      ['fini', 'beendet|fertig'],
      ['acheté', 'gekauft'],
    ],
    sentences: [
      ["Hier, j'ai mangé une pizza.|J'ai mangé une pizza hier.", 'Gestern habe ich eine Pizza gegessen.|Ich habe gestern eine Pizza gegessen.'],
      ['Tu as vu ce film?', 'Hast du diesen Film gesehen?'],
      ['Il a pris le train.', 'Er hat den Zug genommen.'],
      ['Nous avons déjà fini.', 'Wir sind schon fertig.|Wir sind bereits fertig.'],
      ["Qu'est-ce que vous avez fait?", 'Was habt ihr gemacht?|Was haben Sie gemacht?'],
      ["Elles ont acheté une voiture la semaine dernière.", 'Sie haben letzte Woche ein Auto gekauft.'],
    ],
    cloze: [
      { fr: 'Il a ___ le train.', answer: 'pris', wrong: ['prendre', 'prend'], de: 'Er hat den Zug genommen.' },
      { fr: 'Tu ___ vu ce film?', answer: 'as', wrong: ['es', 'a'], de: 'Hast du diesen Film gesehen?' },
      { fr: "J'ai ___ une pizza.", answer: 'mangé', wrong: ['manger', 'mange'], de: 'Ich habe eine Pizza gegessen.' },
      { fr: 'Nous avons ___ nos devoirs.', answer: 'fait', wrong: ['faire', 'faisons'], de: 'Wir haben unsere Hausaufgaben gemacht.' },
    ],
  },
  {
    id: 'a2-past-etre',
    level: 'A2',
    title: 'Vergangenheit mit être',
    tips:
      'Verben der Bewegung und Zustandsänderung (aller, venir, partir, arriver, naître, mourir …) und alle reflexiven Verben ' +
      'bilden das passé composé mit „être“. Das Partizip passt sich dann an: „elle est allée“, „ils sont partis“.',
    vocab: [
      ['aller', 'gehen|fahren'],
      ['venir', 'kommen'],
      ['partir', 'abfahren|weggehen'],
      ['arriver', 'ankommen'],
      ['rester', 'bleiben'],
      ['tomber', 'fallen|hinfallen'],
      ['naître', 'geboren werden'],
      ['rentrer', 'nach Hause gehen|zurückkehren'],
    ],
    sentences: [
      ['Je suis allé à Lyon.|Je suis allée à Lyon.', 'Ich bin nach Lyon gefahren.|Ich bin nach Lyon gegangen.'],
      ['Elle est arrivée hier soir.', 'Sie ist gestern Abend angekommen.'],
      ['Nous sommes restés à la maison.|Nous sommes restées à la maison.', 'Wir sind zu Hause geblieben.'],
      ['Ils sont partis tôt.', 'Sie sind früh abgefahren.|Sie sind früh weggegangen.'],
      ['Tu es tombé?|Tu es tombée?', 'Bist du hingefallen?'],
      ['Il est né en 1990.', 'Er ist 1990 geboren.|Er wurde 1990 geboren.'],
    ],
    cloze: [
      { fr: 'Elle est ___ hier soir.', answer: 'arrivée', wrong: ['arrivé', 'arriver'], de: 'Sie ist gestern Abend angekommen.' },
      { fr: 'Ils ___ partis tôt.', answer: 'sont', wrong: ['ont', 'est'], de: 'Sie sind früh abgefahren.' },
      { fr: 'Nous sommes ___ à la maison.', answer: 'restés', wrong: ['resté', 'rester'], de: 'Wir sind zu Hause geblieben.' },
      { fr: 'Il ___ né en 1990.', answer: 'est', wrong: ['a', 'était'], de: 'Er ist 1990 geboren.' },
    ],
  },
  {
    id: 'a2-city',
    level: 'A2',
    title: 'In der Stadt',
    tips:
      '„à“ + le wird zu „au“, „à“ + les zu „aux“: je vais au cinéma, aux toilettes, à la gare. ' +
      'Nach dem Weg fragt man höflich: „Excusez-moi, où est la gare ?“',
    vocab: [
      ['la gare', 'der Bahnhof'],
      ['la rue', 'die Straße'],
      ['à gauche', 'links|nach links'],
      ['à droite', 'rechts|nach rechts'],
      ['tout droit', 'geradeaus'],
      ['près de', 'in der Nähe von|nahe bei'],
      ['loin de', 'weit weg von|weit von'],
      ["l'hôpital", 'das Krankenhaus'],
    ],
    sentences: [
      ['Excusez-moi, où est la gare?', 'Entschuldigung, wo ist der Bahnhof?'],
      ['Tournez à gauche après le pont.', 'Biegen Sie nach der Brücke links ab.'],
      ['Allez tout droit.', 'Gehen Sie geradeaus.|Fahren Sie geradeaus.'],
      ['La banque est près de la poste.', 'Die Bank ist in der Nähe der Post.|Die Bank ist nahe bei der Post.'],
      ['Je vais au cinéma ce soir.', 'Ich gehe heute Abend ins Kino.'],
      ["L'hôtel n'est pas loin d'ici.", 'Das Hotel ist nicht weit von hier.'],
    ],
    cloze: [
      { fr: 'Je vais ___ cinéma.', answer: 'au', wrong: ['à la', 'aux'], de: 'Ich gehe ins Kino.' },
      { fr: 'Elle va ___ gare.', answer: 'à la', wrong: ['au', 'aux'], de: 'Sie geht zum Bahnhof.' },
      { fr: 'Tournez à ___ après le pont.', answer: 'gauche', wrong: ['tout', 'loin'], de: 'Biegen Sie nach der Brücke links ab.' },
      { fr: "L'hôtel n'est pas loin ___ ici.", answer: "d'", wrong: ['à', 'en'], de: 'Das Hotel ist nicht weit von hier.' },
    ],
  },
  {
    id: 'a2-shopping',
    level: 'A2',
    title: 'Einkaufen & Vergleiche',
    tips:
      'Vergleiche: plus … que (mehr/…er als), moins … que (weniger … als), aussi … que (so … wie). ' +
      'Ausnahme: bon → meilleur („besser“). „Combien ça coûte ?“ fragt nach dem Preis.',
    vocab: [
      ['cher', 'teuer'],
      ['bon marché', 'billig|günstig'],
      ['la taille', 'die Größe'],
      ['essayer', 'anprobieren|versuchen'],
      ['le magasin', 'das Geschäft|der Laden'],
      ['payer', 'bezahlen'],
      ['meilleur', 'besser'],
      ['la chemise', 'das Hemd'],
    ],
    sentences: [
      ['Combien coûte cette chemise?|Combien ça coûte?', 'Wie viel kostet dieses Hemd?'],
      ['Je peux essayer ce pantalon?', 'Kann ich diese Hose anprobieren?'],
      ["Ce magasin est plus cher que l'autre.", 'Dieses Geschäft ist teurer als das andere.'],
      ['Ce pain est meilleur.', 'Dieses Brot ist besser.'],
      ['Je paie par carte.|Je paye par carte.', 'Ich zahle mit Karte.'],
      ['Elle est aussi grande que sa mère.', 'Sie ist so groß wie ihre Mutter.'],
    ],
    cloze: [
      { fr: "Ce magasin est plus cher ___ l'autre.", answer: 'que', wrong: ['comme', 'de'], de: 'Dieses Geschäft ist teurer als das andere.' },
      { fr: 'Ce gâteau est ___ que le mien.', answer: 'meilleur', wrong: ['plus bon', 'bien'], de: 'Dieser Kuchen ist besser als meiner.' },
      { fr: 'Elle est ___ grande que sa mère.', answer: 'aussi', wrong: ['autant', 'si'], de: 'Sie ist so groß wie ihre Mutter.' },
      { fr: 'Je peux ___ ce pantalon?', answer: 'essayer', wrong: ['essaie', 'essayé'], de: 'Kann ich diese Hose anprobieren?' },
    ],
  },
  {
    id: 'a2-plans',
    level: 'A2',
    title: 'Pläne & nahe Zukunft',
    tips:
      'Die nahe Zukunft: „aller“ + Infinitiv. „Je vais partir“ = „Ich werde abfahren“. ' +
      'aller: je vais, tu vas, il va, nous allons, vous allez, ils vont.',
    vocab: [
      ['demain', 'morgen'],
      ['le week-end', 'das Wochenende'],
      ['les vacances', 'die Ferien|der Urlaub'],
      ['bientôt', 'bald'],
      ['visiter', 'besichtigen|besuchen'],
      ['voyager', 'reisen'],
      ['la mer', 'das Meer'],
      ["l'été", 'der Sommer'],
    ],
    sentences: [
      ['Je vais voyager en été.', 'Ich werde im Sommer reisen.|Im Sommer werde ich reisen.'],
      ['Nous allons visiter Paris.', 'Wir werden Paris besichtigen.|Wir werden Paris besuchen.'],
      ["Qu'est-ce que tu vas faire ce week-end?", 'Was wirst du dieses Wochenende machen?|Was machst du dieses Wochenende?'],
      ['Ils vont partir à la mer.', 'Sie werden ans Meer fahren.'],
      ['Il va pleuvoir demain.', 'Morgen wird es regnen.|Es wird morgen regnen.'],
      ['On se voit bientôt.', 'Wir sehen uns bald.'],
    ],
    cloze: [
      { fr: 'Nous ___ visiter Paris.', answer: 'allons', wrong: ['allez', 'vont'], de: 'Wir werden Paris besichtigen.' },
      { fr: 'Ils ___ partir à la mer.', answer: 'vont', wrong: ['va', 'allons'], de: 'Sie werden ans Meer fahren.' },
      { fr: 'Il va ___ demain.', answer: 'pleuvoir', wrong: ['pleut', 'plu'], de: 'Morgen wird es regnen.' },
      { fr: 'Je vais voyager ___ été.', answer: 'en', wrong: ['au', 'à'], de: 'Ich werde im Sommer reisen.' },
    ],
  },
  {
    id: 'a2-health',
    level: 'A2',
    title: 'Beim Arzt',
    tips:
      'Schmerzen: „J’ai mal à la tête / au ventre / aux dents“ (à + Artikel!). ' +
      '„Il faut“ + Infinitiv drückt eine Notwendigkeit aus: „Il faut rester au lit.“',
    vocab: [
      ['le médecin', 'der Arzt|die Ärztin'],
      ['avoir mal à', 'Schmerzen haben in|wehtun'],
      ['la tête', 'der Kopf'],
      ['le ventre', 'der Bauch'],
      ['la fièvre', 'das Fieber'],
      ['malade', 'krank'],
      ['le médicament', 'das Medikament'],
      ['la pharmacie', 'die Apotheke'],
    ],
    sentences: [
      ["J'ai mal à la tête.", 'Ich habe Kopfschmerzen.|Mir tut der Kopf weh.'],
      ['Elle a de la fièvre depuis hier.', 'Sie hat seit gestern Fieber.'],
      ['Il faut prendre ce médicament trois fois par jour.', 'Man muss dieses Medikament dreimal täglich nehmen.|Sie müssen dieses Medikament dreimal am Tag nehmen.'],
      ['Je suis malade, je reste au lit.', 'Ich bin krank, ich bleibe im Bett.'],
      ['Où est la pharmacie la plus proche?', 'Wo ist die nächste Apotheke?'],
      ['Tu as mal au ventre?', 'Hast du Bauchschmerzen?|Tut dir der Bauch weh?'],
    ],
    cloze: [
      { fr: "J'ai mal ___ tête.", answer: 'à la', wrong: ['au', 'de la'], de: 'Ich habe Kopfschmerzen.' },
      { fr: 'Tu as mal ___ ventre?', answer: 'au', wrong: ['à la', 'du'], de: 'Hast du Bauchschmerzen?' },
      { fr: 'Il ___ prendre ce médicament.', answer: 'faut', wrong: ['doit', 'faire'], de: 'Man muss dieses Medikament nehmen.' },
      { fr: 'Elle a ___ fièvre.', answer: 'de la', wrong: ['du', 'une'], de: 'Sie hat Fieber.' },
    ],
  },
  {
    id: 'a2-restaurant',
    level: 'A2',
    title: 'Im Restaurant',
    tips:
      'Bestellen: „Je voudrais …“ oder „Je vais prendre …“. Die Rechnung: „L’addition, s’il vous plaît.“ ' +
      'Menü auf Französisch heißt „la carte“; „le menu“ ist ein festes Menü mit mehreren Gängen.',
    vocab: [
      ['la carte', 'die Speisekarte'],
      ["l'addition", 'die Rechnung'],
      ["l'entrée", 'die Vorspeise'],
      ['le plat principal', 'das Hauptgericht'],
      ['le dessert', 'der Nachtisch|das Dessert'],
      ['le serveur', 'der Kellner'],
      ['commander', 'bestellen'],
      ['réserver', 'reservieren'],
    ],
    sentences: [
      ["J'ai réservé une table pour deux.", 'Ich habe einen Tisch für zwei reserviert.'],
      ['Je vais prendre le poisson.', 'Ich nehme den Fisch.|Ich werde den Fisch nehmen.'],
      ["L'addition, s'il vous plaît.", 'Die Rechnung, bitte.'],
      ['Vous avez choisi?', 'Haben Sie gewählt?|Habt ihr gewählt?'],
      ['Comme dessert, je voudrais une tarte aux pommes.', 'Als Nachtisch hätte ich gern einen Apfelkuchen.|Zum Nachtisch möchte ich einen Apfelkuchen.'],
      ['Le serveur apporte la carte.', 'Der Kellner bringt die Speisekarte.'],
    ],
    cloze: [
      { fr: "L'___, s'il vous plaît.", answer: 'addition', wrong: ['carte', 'entrée'], de: 'Die Rechnung, bitte.' },
      { fr: 'Je ___ prendre le poisson.', answer: 'vais', wrong: ['veux de', 'suis'], de: 'Ich nehme den Fisch.' },
      { fr: 'Une tarte ___ pommes.', answer: 'aux', wrong: ['de les', 'à les'], de: 'Ein Apfelkuchen.' },
      { fr: "J'ai ___ une table pour deux.", answer: 'réservé', wrong: ['réserver', 'réserve'], de: 'Ich habe einen Tisch für zwei reserviert.' },
    ],
  },
  {
    id: 'a2-transport',
    level: 'A2',
    title: 'Unterwegs',
    tips:
      'Verkehrsmittel: „en“ für geschlossene Fahrzeuge (en train, en bus, en voiture, en avion), „à“ für alles, worauf man sitzt (à vélo, à pied). ' +
      'Ländernamen: „en France“ (weiblich), „au Canada“ (männlich), „aux États-Unis“ (Plural).',
    vocab: [
      ['le train', 'der Zug'],
      ["l'avion", 'das Flugzeug'],
      ['le vélo', 'das Fahrrad'],
      ['à pied', 'zu Fuß'],
      ['le billet', 'die Fahrkarte|das Ticket'],
      ['le quai', 'der Bahnsteig'],
      ['en retard', 'verspätet|zu spät'],
      ["l'aller-retour", 'die Hin- und Rückfahrt'],
    ],
    sentences: [
      ['Je vais au travail à vélo.', 'Ich fahre mit dem Fahrrad zur Arbeit.'],
      ['Nous partons en Espagne en avion.', 'Wir fliegen nach Spanien.|Wir reisen mit dem Flugzeug nach Spanien.'],
      ["Un aller-retour pour Lyon, s'il vous plaît.", 'Eine Hin- und Rückfahrt nach Lyon, bitte.'],
      ['Le train part du quai numéro trois.', 'Der Zug fährt von Bahnsteig drei ab.|Der Zug fährt vom Bahnsteig Nummer drei ab.'],
      ['Le bus est en retard.', 'Der Bus hat Verspätung.|Der Bus ist verspätet.'],
      ['Elle habite au Canada.', 'Sie wohnt in Kanada.'],
    ],
    cloze: [
      { fr: 'Je vais au travail ___ vélo.', answer: 'à', wrong: ['en', 'par'], de: 'Ich fahre mit dem Fahrrad zur Arbeit.' },
      { fr: 'Nous partons ___ avion.', answer: 'en', wrong: ['à', 'par l'], de: 'Wir fliegen.' },
      { fr: 'Elle habite ___ Canada.', answer: 'au', wrong: ['en', 'à'], de: 'Sie wohnt in Kanada.' },
      { fr: 'Ils voyagent ___ France.', answer: 'en', wrong: ['au', 'à la'], de: 'Sie reisen in Frankreich.' },
    ],
  },
  {
    id: 'a2-object-pronouns',
    level: 'A2',
    title: 'Objektpronomen',
    tips:
      'Direktes Objekt: le, la, les („Je le vois“ = Ich sehe ihn). Indirektes Objekt (mit „à“): lui, leur („Je lui parle“ = Ich spreche mit ihm/ihr). ' +
      'Die Pronomen stehen vor dem konjugierten Verb: „Je ne la connais pas.“',
    vocab: [
      ['le', 'ihn|es'],
      ['la', 'sie (Sg.)|es'],
      ['les', 'sie (Pl.)'],
      ['lui', 'ihm|ihr'],
      ['leur', 'ihnen'],
      ['connaître', 'kennen'],
      ['téléphoner à', 'anrufen'],
      ['donner', 'geben'],
    ],
    sentences: [
      ['Tu connais Marc? Oui, je le connais.', 'Kennst du Marc? Ja, ich kenne ihn.'],
      ['Cette robe, je la trouve belle.', 'Dieses Kleid finde ich schön.'],
      ['Je lui téléphone ce soir.', 'Ich rufe ihn heute Abend an.|Ich rufe sie heute Abend an.'],
      ['Nous leur donnons des bonbons.', 'Wir geben ihnen Bonbons.'],
      ['Je ne les vois pas.', 'Ich sehe sie nicht.'],
      ["Elle m'invite à sa fête.", 'Sie lädt mich zu ihrer Party ein.|Sie lädt mich zu ihrem Fest ein.'],
    ],
    cloze: [
      { fr: 'Marc? Oui, je ___ connais.', answer: 'le', wrong: ['lui', 'la'], de: 'Marc? Ja, ich kenne ihn.' },
      { fr: 'Ma sœur? Je ___ téléphone ce soir.', answer: 'lui', wrong: ['la', 'leur'], de: 'Meine Schwester? Ich rufe sie heute Abend an.' },
      { fr: 'Les enfants? Nous ___ donnons des bonbons.', answer: 'leur', wrong: ['les', 'lui'], de: 'Die Kinder? Wir geben ihnen Bonbons.' },
      { fr: 'Mes clés? Je ne ___ vois pas.', answer: 'les', wrong: ['leur', 'le'], de: 'Meine Schlüssel? Ich sehe sie nicht.' },
    ],
  },
];
