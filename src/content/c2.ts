import type { Unit } from './types';

export const C2: Unit[] = [
  {
    id: 'c2-false-friends',
    level: 'C2',
    title: 'Falsche Freunde',
    tips:
      'Viele Wörter sehen deutsch aus und bedeuten etwas anderes. „la blague“ ist ein Witz, kein Blag; ' +
      '„le régal“ ist ein Genuss, kein Regal; „la notice“ ist eine Gebrauchsanweisung, keine Notiz; „la caution“ ist eine Kaution – das passt ausnahmsweise.',
    vocab: [
      ['la blague', 'der Witz'],
      ['le régal', 'der Hochgenuss|der Genuss'],
      ['la notice', 'die Gebrauchsanweisung|die Packungsbeilage'],
      ['le parfum', 'der Duft|das Parfüm|die Geschmacksrichtung'],
      ['la marmelade', 'das Kompott|das Mus'],
      ['le chef', 'der Chef|der Küchenchef|der Anführer'],
      ['sensible', 'empfindlich|sensibel'],
      ['sensé', 'vernünftig|sinnvoll'],
    ],
    sentences: [
      ['Lis la notice avant de prendre ce médicament.', 'Lies die Packungsbeilage, bevor du dieses Medikament nimmst.'],
      ['Ce dessert est un vrai régal.', 'Dieses Dessert ist ein echter Genuss.|Dieses Dessert ist ein Hochgenuss.'],
      ['Tu connais une bonne blague?', 'Kennst du einen guten Witz?'],
      ['Quel parfum de glace veux-tu?', 'Welche Eissorte möchtest du?|Welche Geschmacksrichtung möchtest du beim Eis?'],
      ["C'est une proposition tout à fait sensée.", 'Das ist ein durchaus vernünftiger Vorschlag.'],
      ['Elle a la peau très sensible.', 'Sie hat sehr empfindliche Haut.'],
    ],
    cloze: [
      { fr: 'Lis la ___ avant de prendre ce médicament.', answer: 'notice', wrong: ['note', 'recette'], de: 'Lies die Packungsbeilage, bevor du dieses Medikament nimmst.' },
      { fr: "C'est une proposition tout à fait ___.", answer: 'sensée', wrong: ['sensible', 'sensuelle'], de: 'Das ist ein durchaus vernünftiger Vorschlag.' },
      { fr: 'Ce dessert est un vrai ___.', answer: 'régal', wrong: ['rayon', 'étagère'], de: 'Dieses Dessert ist ein echter Genuss.' },
      { fr: 'Quel ___ de glace veux-tu?', answer: 'parfum', wrong: ['odeur', 'goûter'], de: 'Welche Eissorte möchtest du?' },
    ],
  },
  {
    id: 'c2-slang',
    level: 'C2',
    title: 'Argot & Verlan',
    tips:
      'Im Verlan werden Silben vertauscht: „louche“ → „chelou“, „fou“ → „ouf“, „femme“ → „meuf“, „mère“ → „reum“. ' +
      'Solche Wörter hörst du in Filmen, Musik und auf der Straße. Aktiv nur unter Freunden verwenden!',
    vocab: [
      ['chelou', 'komisch|seltsam|merkwürdig'],
      ['ouf', 'verrückt|krass'],
      ['une meuf', 'eine Frau|ein Mädel'],
      ['un keum', 'ein Typ|ein Kerl'],
      ['relou', 'nervig|lästig'],
      ['kiffer', 'gut finden|abfeiern|mögen'],
      ['grave', 'voll|total|krass'],
      ['la thune', 'die Kohle|das Geld'],
    ],
    sentences: [
      ['Ce mec est trop chelou.', 'Dieser Typ ist total seltsam.|Der Typ ist echt komisch.'],
      ["C'est ouf, ce que tu racontes!", 'Das ist ja verrückt, was du da erzählst!|Krass, was du erzählst!'],
      ["Il est relou, il m'appelle tout le temps.", 'Er nervt, er ruft mich ständig an.|Er ist nervig, er ruft mich die ganze Zeit an.'],
      ["J'ai grave kiffé ce concert.", 'Ich habe das Konzert voll abgefeiert.|Ich fand das Konzert total gut.'],
      ["J'ai plus de thune.", 'Ich habe keine Kohle mehr.|Ich habe kein Geld mehr.'],
      ['Sa meuf bosse dans la com.', 'Seine Freundin arbeitet in der Kommunikationsbranche.|Seine Freundin arbeitet in der PR.'],
    ],
    cloze: [
      { fr: 'Ce mec est trop ___.', answer: 'chelou', wrong: ['louchon', 'chéli'], de: 'Dieser Typ ist total seltsam.' },
      { fr: "J'ai ___ kiffé ce concert.", answer: 'grave', wrong: ['gravement', 'grosse'], de: 'Ich habe das Konzert voll abgefeiert.' },
      { fr: "C'est ___, ce que tu racontes!", answer: 'ouf', wrong: ['fou-fou', 'oufé'], de: 'Das ist ja verrückt, was du erzählst!' },
      { fr: "J'ai plus de ___.", answer: 'thune', wrong: ['thé', 'tune'], de: 'Ich habe keine Kohle mehr.' },
    ],
  },
  {
    id: 'c2-nuance',
    level: 'C2',
    title: 'Feine Bedeutungsunterschiede',
    tips:
      'Auf C2-Niveau zählt das treffende Wort: „un an“ (Zeitpunkt, Zählung) vs. „une année“ (Dauer, Inhalt); ' +
      '„amener“ (Person hinbringen) vs. „apporter“ (Sache mitbringen); „davantage“ (mehr) vs. „d’avantage“ (an Vorteil); ' +
      '„censé“ (angeblich, soll) vs. „sensé“ (vernünftig).',
    vocab: [
      ['amener', 'mitbringen (Person)|hinbringen'],
      ['apporter', 'mitbringen (Sache)'],
      ['davantage', 'mehr|noch mehr'],
      ['être censé', 'sollen|angeblich müssen'],
      ['une année', 'ein Jahr (Dauer)'],
      ['la matinée', 'der Vormittag'],
      ['éminent', 'herausragend|bedeutend'],
      ['imminent', 'unmittelbar bevorstehend'],
    ],
    sentences: [
      ["J'apporte le dessert et j'amène ma sœur.", 'Ich bringe den Nachtisch mit und bringe meine Schwester mit.'],
      ['Tu es censé être au bureau.', 'Du solltest eigentlich im Büro sein.|Du sollst im Büro sein.'],
      ["J'ai passé toute la matinée à lire.", 'Ich habe den ganzen Vormittag mit Lesen verbracht.'],
      ['Il faudrait travailler davantage.', 'Man müsste mehr arbeiten.|Man sollte mehr arbeiten.'],
      ['Le départ est imminent.', 'Die Abfahrt steht unmittelbar bevor.'],
      ['Ce fut une année difficile.', 'Es war ein schwieriges Jahr.'],
    ],
    cloze: [
      { fr: "J'___ le dessert ce soir.", answer: 'apporte', wrong: ['amène', 'emmène'], de: 'Ich bringe heute Abend den Nachtisch mit.' },
      { fr: 'Tu es ___ être au bureau.', answer: 'censé', wrong: ['sensé', 'sensible'], de: 'Du solltest eigentlich im Büro sein.' },
      { fr: 'Le départ est ___.', answer: 'imminent', wrong: ['éminent', 'immanent'], de: 'Die Abfahrt steht unmittelbar bevor.' },
      { fr: "J'ai passé toute la ___ à lire.", answer: 'matinée', wrong: ['matin', 'matine'], de: 'Ich habe den ganzen Vormittag mit Lesen verbracht.' },
    ],
  },
  {
    id: 'c2-literary',
    level: 'C2',
    title: 'Gehobener Stil',
    tips:
      'In gehobener Sprache findest du das „ne explétif“ ohne Verneinungssinn („Je crains qu’il ne pleuve“), ' +
      'Inversion („Peut-être viendra-t-il“, „Aussi a-t-il refusé“) und den subjonctif imparfait, den man vor allem erkennen muss: ' +
      '„qu’il fût“, „qu’il eût“, „qu’il fît“.',
    vocab: [
      ['aussi (+ Inversion)', 'deshalb|daher'],
      ['à peine … que', 'kaum … als'],
      ['nul', 'kein|niemand'],
      ['naguère', 'vor kurzem|einst'],
      ['jadis', 'einst|ehemals'],
      ['sans doute', 'wahrscheinlich|vermutlich'],
      ['quand bien même', 'selbst wenn'],
      ['fût-ce', 'und sei es|wenn auch nur'],
    ],
    sentences: [
      ['Je crains qu’il ne soit trop tard.', 'Ich fürchte, dass es zu spät ist.|Ich fürchte, es ist zu spät.'],
      ['Peut-être viendra-t-il ce soir.', 'Vielleicht kommt er heute Abend.'],
      ["Il était épuisé, aussi a-t-il refusé l'invitation.", 'Er war erschöpft, deshalb lehnte er die Einladung ab.|Er war erschöpft, daher hat er die Einladung abgelehnt.'],
      ['À peine était-elle sortie qu’il se mit à pleuvoir.', 'Kaum war sie hinausgegangen, als es zu regnen begann.|Kaum war sie draußen, fing es an zu regnen.'],
      ['Quand bien même il insisterait, je refuserais.', 'Selbst wenn er darauf bestehen würde, würde ich ablehnen.'],
      ['Nul ne peut ignorer la loi.', 'Niemand darf das Gesetz missachten.|Niemand kann sich auf Unkenntnis des Gesetzes berufen.'],
    ],
    cloze: [
      { fr: 'Je crains qu’il ___ soit trop tard.', answer: 'ne', wrong: ['pas', 'en'], de: 'Ich fürchte, dass es zu spät ist.' },
      { fr: 'Peut-être viendra-___-il ce soir.', answer: 't', wrong: ['l', 's'], de: 'Vielleicht kommt er heute Abend.' },
      { fr: 'À peine était-elle sortie ___ il se mit à pleuvoir.', answer: "qu'", wrong: ['quand', 'lorsqu'], de: 'Kaum war sie hinausgegangen, als es zu regnen begann.' },
      { fr: '___ ne peut ignorer la loi.', answer: 'Nul', wrong: ['Aucun de', 'Rien'], de: 'Niemand darf das Gesetz missachten.' },
    ],
  },
  {
    id: 'c2-proverbs',
    level: 'C2',
    title: 'Sprichwörter',
    tips:
      'Sprichwörter tauchen in Gesprächen oft nur halb auf – Muttersprachler ergänzen den Rest im Kopf. ' +
      'Wer sie kennt, versteht Anspielungen in Presse und Alltag.',
    vocab: [
      ['petit à petit, l’oiseau fait son nid', 'Gut Ding will Weile haben|Steter Tropfen höhlt den Stein'],
      ['qui vivra verra', 'Kommt Zeit, kommt Rat|Abwarten und Tee trinken'],
      ["l'habit ne fait pas le moine", 'Kleider machen keine Leute|Der Schein trügt'],
      ['mieux vaut tard que jamais', 'Besser spät als nie'],
      ['quand le chat n’est pas là, les souris dansent', 'Wenn die Katze aus dem Haus ist, tanzen die Mäuse'],
      ['il ne faut pas vendre la peau de l’ours avant de l’avoir tué', 'Man soll den Tag nicht vor dem Abend loben'],
      ['les murs ont des oreilles', 'Die Wände haben Ohren'],
      ['après la pluie, le beau temps', 'Auf Regen folgt Sonnenschein'],
    ],
    sentences: [
      ["Tu as enfin fini? Mieux vaut tard que jamais!", 'Du bist endlich fertig? Besser spät als nie!'],
      ['Parle moins fort, les murs ont des oreilles.', 'Sprich leiser, die Wände haben Ohren.'],
      ["Ne te fie pas à son costume: l'habit ne fait pas le moine.", 'Verlass dich nicht auf seinen Anzug: Der Schein trügt.'],
      ["Le patron est en vacances et tout le monde arrive en retard.", 'Der Chef ist im Urlaub und alle kommen zu spät.'],
      ["On verra bien, qui vivra verra.", 'Wir werden sehen, kommt Zeit, kommt Rat.'],
      ["Courage, après la pluie, le beau temps.", 'Kopf hoch, auf Regen folgt Sonnenschein.'],
    ],
    cloze: [
      { fr: "L'habit ne fait pas le ___.", answer: 'moine', wrong: ['moineau', 'monde'], de: 'Der Schein trügt.' },
      { fr: 'Mieux vaut tard que ___.', answer: 'jamais', wrong: ['toujours', 'demain'], de: 'Besser spät als nie.' },
      { fr: 'Quand le chat n’est pas là, les ___ dansent.', answer: 'souris', wrong: ['chiens', 'oiseaux'], de: 'Wenn die Katze aus dem Haus ist, tanzen die Mäuse.' },
      { fr: 'Après la pluie, le beau ___.', answer: 'temps', wrong: ['soleil', 'jour'], de: 'Auf Regen folgt Sonnenschein.' },
    ],
  },
];
