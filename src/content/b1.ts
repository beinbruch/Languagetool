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
  {
    id: 'b1-work',
    level: 'B1',
    title: 'Arbeit & Bewerbung',
    tips:
      'Im Berufsleben siezt man zunächst. Nützlich: „postuler à un poste“ (sich auf eine Stelle bewerben), „un entretien d’embauche“ (Vorstellungsgespräch). ' +
      '„Depuis“ + Präsens drückt aus, dass etwas noch andauert: „Je travaille ici depuis trois ans.“',
    vocab: [
      ['le poste', 'die Stelle|der Posten'],
      ['postuler', 'sich bewerben'],
      ["l'entretien d'embauche", 'das Vorstellungsgespräch'],
      ['le salaire', 'das Gehalt|der Lohn'],
      ['le collègue', 'der Kollege'],
      ["l'entreprise", 'das Unternehmen|die Firma'],
      ['embaucher', 'einstellen'],
      ['démissionner', 'kündigen'],
    ],
    sentences: [
      ["J'ai postulé à un poste de comptable.", 'Ich habe mich auf eine Stelle als Buchhalter beworben.|Ich habe mich auf eine Buchhalterstelle beworben.'],
      ['Je travaille dans cette entreprise depuis trois ans.', 'Ich arbeite seit drei Jahren in diesem Unternehmen.|Ich arbeite seit drei Jahren in dieser Firma.'],
      ["Mon entretien d'embauche est lundi prochain.", 'Mein Vorstellungsgespräch ist nächsten Montag.'],
      ['Ils ont embauché deux nouveaux collègues.', 'Sie haben zwei neue Kollegen eingestellt.'],
      ['Elle a démissionné pour créer sa propre entreprise.', 'Sie hat gekündigt, um ihre eigene Firma zu gründen.|Sie hat gekündigt, um ihr eigenes Unternehmen zu gründen.'],
      ['Quelles sont vos qualités principales?', 'Was sind Ihre wichtigsten Stärken?|Was sind Ihre Hauptqualitäten?'],
    ],
    cloze: [
      { fr: 'Je travaille ici ___ trois ans.', answer: 'depuis', wrong: ['pendant', 'il y a'], de: 'Ich arbeite seit drei Jahren hier.' },
      { fr: "J'ai postulé ___ un poste de comptable.", answer: 'à', wrong: ['pour', 'sur'], de: 'Ich habe mich auf eine Stelle als Buchhalter beworben.' },
      { fr: 'Elle a démissionné ___ créer son entreprise.', answer: 'pour', wrong: ['à', 'de'], de: 'Sie hat gekündigt, um ihre Firma zu gründen.' },
      { fr: 'Ils ont ___ deux nouveaux collègues.', answer: 'embauché', wrong: ['embaucher', 'embauchent'], de: 'Sie haben zwei neue Kollegen eingestellt.' },
    ],
  },
  {
    id: 'b1-feelings',
    level: 'B1',
    title: 'Gefühle',
    tips:
      'Gefühle mit „être“ + Adjektiv: „Je suis déçu“. Mit „avoir“: „avoir peur“, „avoir honte“, „avoir envie de“. ' +
      'Reflexive Verben: „s’inquiéter“ (sich Sorgen machen), „s’énerver“ (sich aufregen), „se sentir“ (sich fühlen).',
    vocab: [
      ['déçu', 'enttäuscht'],
      ['fier', 'stolz'],
      ['avoir peur', 'Angst haben'],
      ['avoir honte', 'sich schämen'],
      ["s'inquiéter", 'sich Sorgen machen'],
      ["s'énerver", 'sich aufregen|wütend werden'],
      ['se sentir', 'sich fühlen'],
      ['avoir envie de', 'Lust haben auf|Lust haben zu'],
    ],
    sentences: [
      ['Je suis très fier de toi.|Je suis très fière de toi.', 'Ich bin sehr stolz auf dich.'],
      ["Ne t'inquiète pas, tout va bien.", 'Mach dir keine Sorgen, alles ist gut.'],
      ['Elle a peur des chiens.', 'Sie hat Angst vor Hunden.'],
      ["Il s'énerve pour un rien.", 'Er regt sich wegen jeder Kleinigkeit auf.|Er regt sich über nichts auf.'],
      ["Je me sens seul depuis qu'il est parti.|Je me sens seule depuis qu'il est parti.", 'Ich fühle mich einsam, seit er weg ist.|Ich fühle mich allein, seit er gegangen ist.'],
      ["J'ai envie d'aller à la mer.", 'Ich habe Lust, ans Meer zu fahren.'],
    ],
    cloze: [
      { fr: 'Je suis très fier ___ toi.', answer: 'de', wrong: ['sur', 'pour'], de: 'Ich bin sehr stolz auf dich.' },
      { fr: 'Elle a peur ___ chiens.', answer: 'des', wrong: ['de les', 'aux'], de: 'Sie hat Angst vor Hunden.' },
      { fr: 'Ne t’___ pas, tout va bien.', answer: 'inquiète', wrong: ['inquiètes', 'inquiéter'], de: 'Mach dir keine Sorgen, alles ist gut.' },
      { fr: "J'ai ___ d'aller à la mer.", answer: 'envie', wrong: ['besoin', 'désir'], de: 'Ich habe Lust, ans Meer zu fahren.' },
    ],
  },
  {
    id: 'b1-media',
    level: 'B1',
    title: 'Medien & Internet',
    tips:
      'Viele Internetwörter sind englisch, aber offiziell gibt es französische Formen: „le courriel“ (E-Mail), „télécharger“ (herunterladen). ' +
      'Im Alltag sagt man trotzdem oft „un mail“.',
    vocab: [
      ['les actualités', 'die Nachrichten'],
      ['le journal', 'die Zeitung|die Nachrichtensendung'],
      ['télécharger', 'herunterladen'],
      ['le réseau social', 'das soziale Netzwerk'],
      ["l'écran", 'der Bildschirm'],
      ['le mot de passe', 'das Passwort'],
      ['partager', 'teilen'],
      ['une émission', 'eine Sendung'],
    ],
    sentences: [
      ['Je regarde les actualités tous les soirs.', 'Ich schaue jeden Abend die Nachrichten.'],
      ["J'ai oublié mon mot de passe.", 'Ich habe mein Passwort vergessen.'],
      ["Elle passe trop de temps devant l'écran.", 'Sie verbringt zu viel Zeit vor dem Bildschirm.'],
      ['Il a partagé la vidéo sur les réseaux sociaux.', 'Er hat das Video in den sozialen Netzwerken geteilt.'],
      ['Tu peux télécharger le document ici.', 'Du kannst das Dokument hier herunterladen.'],
      ["Cette émission parle de cuisine.", 'Diese Sendung handelt vom Kochen.|In dieser Sendung geht es ums Kochen.'],
    ],
    cloze: [
      { fr: 'Il a partagé la vidéo ___ les réseaux sociaux.', answer: 'sur', wrong: ['dans', 'en'], de: 'Er hat das Video in den sozialen Netzwerken geteilt.' },
      { fr: 'Elle passe trop de temps ___ l’écran.', answer: 'devant', wrong: ['avant', 'sur'], de: 'Sie verbringt zu viel Zeit vor dem Bildschirm.' },
      { fr: "J'ai oublié mon mot de ___.", answer: 'passe', wrong: ['clé', 'code'], de: 'Ich habe mein Passwort vergessen.' },
      { fr: 'Je regarde les actualités ___ les soirs.', answer: 'tous', wrong: ['toutes', 'chaque'], de: 'Ich schaue jeden Abend die Nachrichten.' },
    ],
  },
  {
    id: 'b1-environment',
    level: 'B1',
    title: 'Umwelt',
    tips:
      'Für Vorschläge und Ratschläge: „On devrait …“, „Il vaudrait mieux …“, „Il est important de …“ + Infinitiv. ' +
      '„Moins de“ / „plus de“ + Nomen: „moins de plastique“, „plus de vélos“.',
    vocab: [
      ["l'environnement", 'die Umwelt'],
      ['les déchets', 'der Müll|die Abfälle'],
      ['recycler', 'recyceln|wiederverwerten'],
      ['la pollution', 'die Verschmutzung'],
      ['le réchauffement climatique', 'die Erderwärmung|der Klimawandel'],
      ['économiser', 'sparen'],
      ["l'énergie", 'die Energie'],
      ['protéger', 'schützen'],
    ],
    sentences: [
      ["Il faut protéger l'environnement.", 'Man muss die Umwelt schützen.|Wir müssen die Umwelt schützen.'],
      ['Nous recyclons le verre et le papier.', 'Wir recyceln Glas und Papier.'],
      ['On devrait utiliser moins de plastique.', 'Man sollte weniger Plastik verwenden.'],
      ["La pollution de l'air est un grand problème.", 'Die Luftverschmutzung ist ein großes Problem.'],
      ["Éteins la lumière pour économiser de l'énergie.", 'Mach das Licht aus, um Energie zu sparen.'],
      ['Le réchauffement climatique inquiète les jeunes.', 'Die Erderwärmung beunruhigt die Jugendlichen.|Der Klimawandel macht den jungen Leuten Sorgen.'],
    ],
    cloze: [
      { fr: 'On devrait utiliser ___ plastique.', answer: 'moins de', wrong: ['moins du', 'moins le'], de: 'Man sollte weniger Plastik verwenden.' },
      { fr: 'Il ___ protéger l’environnement.', answer: 'faut', wrong: ['doit', 'fait'], de: 'Man muss die Umwelt schützen.' },
      { fr: 'Éteins la lumière ___ économiser de l’énergie.', answer: 'pour', wrong: ['afin', 'de'], de: 'Mach das Licht aus, um Energie zu sparen.' },
      { fr: 'Il vaudrait ___ prendre le train.', answer: 'mieux', wrong: ['meilleur', 'bien'], de: 'Es wäre besser, den Zug zu nehmen.' },
    ],
  },
];
