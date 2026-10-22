import type { Unit } from './types';

export const B1: Unit[] = [
  {
    id: 'b1-imparfait',
    level: 'B1',
    title: 'Imparfait oder passé composé',
    tips:
      'Imparfait = Hintergrund, Gewohnheit, Beschreibung („il faisait beau“, „je jouais souvent“). ' +
      'Passé composé = abgeschlossenes Ereignis („soudain, le téléphone a sonné“). Bildung: nous-Stamm + -ais, -ais, -ait, -ions, -iez, -aient.',
    vocab: [
      ['autrefois', 'früher|einst'],
      ['souvent', 'oft'],
      ['soudain', 'plötzlich'],
      ["d'habitude", 'normalerweise|gewöhnlich'],
      ['pendant', 'während'],
      ["l'enfance", 'die Kindheit'],
      ['sonner', 'klingeln|läuten'],
      ['le souvenir', 'die Erinnerung'],
    ],
    sentences: [
      ["Quand j'étais petit, je jouais souvent dehors.|Quand j'étais petite, je jouais souvent dehors.", 'Als ich klein war, spielte ich oft draußen.|Als ich klein war, habe ich oft draußen gespielt.'],
      ['Il faisait beau quand nous sommes arrivés.|Il faisait beau quand nous sommes arrivées.', 'Das Wetter war schön, als wir angekommen sind.|Es war schön, als wir ankamen.'],
      ['Je lisais quand le téléphone a sonné.', 'Ich las gerade, als das Telefon klingelte.|Ich habe gelesen, als das Telefon geklingelt hat.'],
      ["D'habitude, elle prenait le bus.", 'Normalerweise nahm sie den Bus.|Normalerweise hat sie den Bus genommen.'],
      ['Soudain, tout le monde a crié.', 'Plötzlich haben alle geschrien.|Plötzlich schrien alle.'],
      ['Autrefois, ce village était très calme.', 'Früher war dieses Dorf sehr ruhig.'],
    ],
    cloze: [
      { fr: 'Quand j’étais petit, je ___ souvent dehors.', answer: 'jouais', wrong: ['ai joué', 'jouerai'], de: 'Als ich klein war, spielte ich oft draußen.' },
      { fr: 'Je lisais quand le téléphone ___.', answer: 'a sonné', wrong: ['sonnait', 'sonne'], de: 'Ich las, als das Telefon klingelte.' },
      { fr: 'Il ___ beau ce jour-là.', answer: 'faisait', wrong: ['a fait', 'fera'], de: 'An jenem Tag war schönes Wetter.' },
      { fr: 'Nous ___ à la campagne chaque été.', answer: 'allions', wrong: ['sommes allés', 'irons'], de: 'Wir fuhren jeden Sommer aufs Land.' },
    ],
  },
  {
    id: 'b1-future',
    level: 'B1',
    title: 'Futur simple',
    tips:
      'Futur simple: Infinitiv + -ai, -as, -a, -ons, -ez, -ont (je parlerai). Unregelmäßige Stämme: ' +
      'être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-, pouvoir → pourr-, voir → verr-. ' +
      'Nach „quand“ steht im Französischen Futur: „Quand je serai riche …“.',
    vocab: [
      ["l'avenir", 'die Zukunft'],
      ['un jour', 'eines Tages'],
      ["l'année prochaine", 'nächstes Jahr'],
      ['dans dix ans', 'in zehn Jahren'],
      ['peut-être', 'vielleicht'],
      ['réussir', 'schaffen|Erfolg haben'],
      ['devenir', 'werden'],
      ['le projet', 'das Projekt|der Plan'],
    ],
    sentences: [
      ["L'année prochaine, j'apprendrai le piano.", 'Nächstes Jahr werde ich Klavier lernen.'],
      ['Quand tu seras grand, tu comprendras.', 'Wenn du groß bist, wirst du es verstehen.'],
      ['Nous ferons ce projet ensemble.', 'Wir werden dieses Projekt zusammen machen.'],
      ['Il viendra peut-être demain.', 'Er kommt vielleicht morgen.|Vielleicht wird er morgen kommen.'],
      ['Dans dix ans, elle sera médecin.', 'In zehn Jahren wird sie Ärztin sein.'],
      ['Vous pourrez venir avec nous.', 'Ihr werdet mit uns kommen können.|Sie werden mit uns kommen können.'],
    ],
    cloze: [
      { fr: 'Quand tu ___ grand, tu comprendras.', answer: 'seras', wrong: ['es', 'serais'], de: 'Wenn du groß bist, wirst du es verstehen.' },
      { fr: 'Nous ___ ce projet ensemble.', answer: 'ferons', wrong: ['faisons', 'faisions'], de: 'Wir werden dieses Projekt zusammen machen.' },
      { fr: 'Il ___ peut-être demain.', answer: 'viendra', wrong: ['venira', 'viendrait'], de: 'Er kommt vielleicht morgen.' },
      { fr: 'Elles ___ à Rome en mai.', answer: 'iront', wrong: ['alleront', 'allaient'], de: 'Sie werden im Mai nach Rom fahren.' },
    ],
  },
  {
    id: 'b1-y-en',
    level: 'B1',
    title: 'Pronomen y und en',
    tips:
      '„y“ ersetzt Orte und Ergänzungen mit „à“: „Tu vas à Paris ? – Oui, j’y vais.“ ' +
      '„en“ ersetzt Ergänzungen mit „de“ und Mengen: „Tu veux du café ? – Oui, j’en veux. J’en prends deux.“',
    vocab: [
      ['y', 'dort|dorthin|daran'],
      ['en', 'davon|welche'],
      ['penser à', 'denken an'],
      ['parler de', 'sprechen über|sprechen von'],
      ['avoir besoin de', 'brauchen'],
      ['plusieurs', 'mehrere'],
      ['assez', 'genug'],
      ['revenir', 'zurückkommen'],
    ],
    sentences: [
      ["Tu vas à Paris? Oui, j'y vais demain.", 'Fährst du nach Paris? Ja, ich fahre morgen hin.'],
      ["Tu as des frères? Oui, j'en ai deux.", 'Hast du Brüder? Ja, ich habe zwei.'],
      ["J'y pense souvent.", 'Ich denke oft daran.'],
      ["Nous en avons besoin.", 'Wir brauchen das.|Wir brauchen es.|Wir brauchen sie.'],
      ["Il n'y a plus de lait, il faut en acheter.", 'Es gibt keine Milch mehr, wir müssen welche kaufen.|Es ist keine Milch mehr da, man muss welche kaufen.'],
      ["Elle en revient à l'instant.", 'Sie kommt gerade von dort zurück.'],
    ],
    cloze: [
      { fr: 'Tu vas à Lyon? Oui, j’___ vais.', answer: 'y', wrong: ['en', 'le'], de: 'Fährst du nach Lyon? Ja, ich fahre hin.' },
      { fr: 'Du café? Oui, j’___ veux bien.', answer: 'en', wrong: ['y', 'le'], de: 'Kaffee? Ja, gern.' },
      { fr: 'Tu penses à ton examen? Oui, j’___ pense.', answer: 'y', wrong: ['en', 'lui'], de: 'Denkst du an deine Prüfung? Ja, ich denke daran.' },
      { fr: 'Il parle de son voyage? Oui, il ___ parle beaucoup.', answer: 'en', wrong: ['y', 'le'], de: 'Spricht er über seine Reise? Ja, er spricht viel darüber.' },
    ],
  },
  {
    id: 'b1-relative',
    level: 'B1',
    title: 'Relativsätze',
    tips:
      '„qui“ = Subjekt („la femme qui chante“), „que“ = Objekt („le livre que je lis“), „où“ = Ort/Zeit („la ville où j’habite“), ' +
      '„dont“ ersetzt eine Ergänzung mit „de“ („le film dont je parle“).',
    vocab: [
      ['qui', 'der/die/das (Subjekt)|wer'],
      ['que', 'den/die/das (Objekt)|dass'],
      ['où', 'wo'],
      ['dont', 'dessen|von dem|worüber'],
      ['le voisin', 'der Nachbar'],
      ['raconter', 'erzählen'],
      ['le quartier', 'das Viertel|der Stadtteil'],
      ['rencontrer', 'treffen|kennenlernen'],
    ],
    sentences: [
      ['La femme qui chante est ma voisine.', 'Die Frau, die singt, ist meine Nachbarin.'],
      ['Le livre que je lis est passionnant.', 'Das Buch, das ich lese, ist spannend.'],
      ["C'est le quartier où j'ai grandi.", 'Das ist das Viertel, in dem ich aufgewachsen bin.|Das ist das Viertel, wo ich aufgewachsen bin.'],
      ["Voici le film dont je t'ai parlé.", 'Hier ist der Film, von dem ich dir erzählt habe.'],
      ["L'homme que nous avons rencontré est italien.", 'Der Mann, den wir getroffen haben, ist Italiener.'],
      ["C'est une histoire dont tout le monde se souvient.", 'Das ist eine Geschichte, an die sich alle erinnern.'],
    ],
    cloze: [
      { fr: 'La femme ___ chante est ma voisine.', answer: 'qui', wrong: ['que', 'dont'], de: 'Die Frau, die singt, ist meine Nachbarin.' },
      { fr: 'Le livre ___ je lis est passionnant.', answer: 'que', wrong: ['qui', 'où'], de: 'Das Buch, das ich lese, ist spannend.' },
      { fr: "C'est la ville ___ j'habite.", answer: 'où', wrong: ['que', 'dont'], de: 'Das ist die Stadt, in der ich wohne.' },
      { fr: 'Voici le film ___ je parle.', answer: 'dont', wrong: ['que', 'qui'], de: 'Hier ist der Film, von dem ich spreche.' },
    ],
  },
  {
    id: 'b1-conditional',
    level: 'B1',
    title: 'Höflichkeit & Wünsche',
    tips:
      'Konditional: Futur-Stamm + Imparfait-Endungen (je voudrais, tu pourrais, il serait). ' +
      'Damit klingt man höflich („Pourriez-vous m’aider ?“) oder drückt Wünsche aus. ' +
      'Irreale Bedingung: si + imparfait, Konditional: „Si j’avais le temps, je viendrais.“',
    vocab: [
      ['vouloir', 'wollen'],
      ['pouvoir', 'können'],
      ['devoir', 'müssen|sollen'],
      ['aider', 'helfen'],
      ['le temps', 'die Zeit|das Wetter'],
      ['à ta place', 'an deiner Stelle'],
      ['volontiers', 'gern'],
      ['un conseil', 'ein Rat|ein Ratschlag'],
    ],
    sentences: [
      ["Je voudrais un café, s'il vous plaît.", 'Ich hätte gern einen Kaffee, bitte.|Ich möchte einen Kaffee, bitte.'],
      ["Pourriez-vous m'aider?", 'Könnten Sie mir helfen?'],
      ['À ta place, je partirais.', 'An deiner Stelle würde ich gehen.|An deiner Stelle würde ich abfahren.'],
      ["Si j'avais le temps, je viendrais.", 'Wenn ich Zeit hätte, würde ich kommen.'],
      ['Tu devrais dormir plus.', 'Du solltest mehr schlafen.'],
      ['Nous aimerions visiter le musée.', 'Wir würden gern das Museum besuchen.|Wir würden das Museum gern besichtigen.'],
    ],
    cloze: [
      { fr: "Si j'avais le temps, je ___.", answer: 'viendrais', wrong: ['viendrai', 'venais'], de: 'Wenn ich Zeit hätte, würde ich kommen.' },
      { fr: 'Tu ___ dormir plus.', answer: 'devrais', wrong: ['devras', 'dois'], de: 'Du solltest mehr schlafen.' },
      { fr: "___-vous m'aider?", answer: 'Pourriez', wrong: ['Pourrez', 'Pouvez'], de: 'Könnten Sie mir helfen?' },
      { fr: "Si j'___ riche, j'achèterais une maison.", answer: 'étais', wrong: ['serais', 'suis'], de: 'Wenn ich reich wäre, würde ich ein Haus kaufen.' },
    ],
  },
  {
    id: 'b1-opinion',
    level: 'B1',
    title: 'Meinung äußern',
    tips:
      'Meinung: „Je pense que …“, „À mon avis, …“, „Je trouve que …“ (mit Indikativ). ' +
      'Widerspruch: „Je ne suis pas d’accord“, „Au contraire …“. „D’un côté … de l’autre …“ wägt ab.',
    vocab: [
      ['à mon avis', 'meiner Meinung nach'],
      ["être d'accord", 'einverstanden sein|zustimmen'],
      ['au contraire', 'im Gegenteil'],
      ['cependant', 'jedoch|allerdings'],
      ["d'un côté", 'einerseits'],
      ["de l'autre côté", 'andererseits'],
      ['un avantage', 'ein Vorteil'],
      ['un inconvénient', 'ein Nachteil'],
    ],
    sentences: [
      ['À mon avis, ce film est trop long.', 'Meiner Meinung nach ist dieser Film zu lang.'],
      ["Je ne suis pas d'accord avec toi.", 'Ich bin nicht deiner Meinung.|Ich stimme dir nicht zu.'],
      ['Je trouve que la ville est trop bruyante.', 'Ich finde, dass die Stadt zu laut ist.|Ich finde die Stadt zu laut.'],
      ["Le télétravail a des avantages, cependant il y a aussi des inconvénients.", 'Homeoffice hat Vorteile, allerdings gibt es auch Nachteile.|Homeoffice hat Vorteile, jedoch gibt es auch Nachteile.'],
      ["Au contraire, c'est une excellente idée.", 'Im Gegenteil, das ist eine ausgezeichnete Idee.'],
      ['Je pense que tu as raison.', 'Ich denke, dass du recht hast.|Ich glaube, du hast recht.'],
    ],
    cloze: [
      { fr: "Je ne suis pas d'___ avec toi.", answer: 'accord', wrong: ['avis', 'raison'], de: 'Ich bin nicht deiner Meinung.' },
      { fr: '___ mon avis, ce film est trop long.', answer: 'À', wrong: ['De', 'Pour'], de: 'Meiner Meinung nach ist dieser Film zu lang.' },
      { fr: 'Je pense que tu ___ raison.', answer: 'as', wrong: ['es', 'aies'], de: 'Ich denke, dass du recht hast.' },
      { fr: "C'est cher; ___, c'est de bonne qualité.", answer: 'cependant', wrong: ['donc', 'parce que'], de: 'Es ist teuer; allerdings ist es von guter Qualität.' },
    ],
  },
];
