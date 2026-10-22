import type { Unit } from './types';

export const A1: Unit[] = [
  {
    id: 'a1-hello',
    level: 'A1',
    title: 'Begrüßung',
    tips:
      '„Bonjour“ sagt man tagsüber, „Bonsoir“ ab dem Abend. „Salut“ ist locker unter Freunden. ' +
      'Mit „tu“ duzt man, mit „vous“ siezt man – oder spricht mehrere Personen an.',
    vocab: [
      ['bonjour', 'guten Tag|hallo'],
      ['bonsoir', 'guten Abend'],
      ['salut', 'hallo|tschüss'],
      ['merci', 'danke'],
      ['au revoir', 'auf Wiedersehen'],
      ['oui', 'ja'],
      ['non', 'nein'],
      ["s'il vous plaît", 'bitte'],
    ],
    sentences: [
      ['Bonjour, je suis Marie.', 'Guten Tag, ich bin Marie.|Hallo, ich bin Marie.'],
      ['Comment tu vas?|Comment vas-tu?|Ça va?', 'Wie geht es dir?'],
      ['Je vais bien, merci.|Ça va bien, merci.', 'Mir geht es gut, danke.|Es geht mir gut, danke.'],
      ["Je m'appelle Paul.", 'Ich heiße Paul.'],
      ['Enchanté, madame.|Enchantée, madame.', 'Freut mich, meine Dame.|Sehr erfreut, meine Dame.'],
      ['Au revoir et à demain.', 'Auf Wiedersehen und bis morgen.|Tschüss und bis morgen.'],
    ],
    cloze: [
      { fr: 'Je ___ Marie.', answer: 'suis', wrong: ['es', 'est'], de: 'Ich bin Marie.' },
      { fr: "Je m'___ Paul.", answer: 'appelle', wrong: ['appelles', 'appelons'], de: 'Ich heiße Paul.' },
      { fr: '___, je vais bien.', answer: 'Merci', wrong: ['Bonsoir', 'Non'], de: 'Danke, mir geht es gut.' },
      { fr: 'Au revoir et à ___.', answer: 'demain', wrong: ['bonjour', 'merci'], de: 'Auf Wiedersehen und bis morgen.' },
    ],
  },
  {
    id: 'a1-people',
    level: 'A1',
    title: 'Personen & être',
    tips:
      '„être“ (sein): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. ' +
      'Adjektive richten sich nach dem Geschlecht: „il est grand“, „elle est grande“.',
    vocab: [
      ['un homme', 'ein Mann'],
      ['une femme', 'eine Frau'],
      ['un enfant', 'ein Kind'],
      ['un ami', 'ein Freund'],
      ['une amie', 'eine Freundin'],
      ['grand', 'groß'],
      ['petit', 'klein'],
      ['content', 'zufrieden|froh'],
    ],
    sentences: [
      ['Il est grand.', 'Er ist groß.'],
      ['Elle est petite.', 'Sie ist klein.'],
      ['Nous sommes amis.', 'Wir sind Freunde.'],
      ['Vous êtes français?', 'Sind Sie Franzose?|Seid ihr Franzosen?|Sind Sie Französin?'],
      ['Ils sont contents.', 'Sie sind zufrieden.|Sie sind froh.'],
      ["C'est un enfant.", 'Das ist ein Kind.|Es ist ein Kind.'],
    ],
    cloze: [
      { fr: 'Nous ___ amis.', answer: 'sommes', wrong: ['sont', 'êtes'], de: 'Wir sind Freunde.' },
      { fr: 'Tu ___ content?', answer: 'es', wrong: ['est', 'suis'], de: 'Bist du zufrieden?' },
      { fr: 'Elle est ___.', answer: 'petite', wrong: ['petit', 'petits'], de: 'Sie ist klein.' },
      { fr: "C'est ___ femme.", answer: 'une', wrong: ['un', 'des'], de: 'Das ist eine Frau.' },
    ],
  },
  {
    id: 'a1-numbers',
    level: 'A1',
    title: 'Zahlen & avoir',
    tips:
      '„avoir“ (haben): j’ai, tu as, il a, nous avons, vous avez, ils ont. ' +
      'Das Alter sagt man mit „avoir“: „J’ai vingt ans“ – wörtlich „Ich habe zwanzig Jahre“.',
    vocab: [
      ['un', 'eins'],
      ['deux', 'zwei'],
      ['trois', 'drei'],
      ['quatre', 'vier'],
      ['cinq', 'fünf'],
      ['dix', 'zehn'],
      ['vingt', 'zwanzig'],
      ['un an', 'ein Jahr'],
    ],
    sentences: [
      ["J'ai vingt ans.", 'Ich bin zwanzig Jahre alt.|Ich bin zwanzig.'],
      ['Tu as deux frères?', 'Hast du zwei Brüder?'],
      ['Elle a trois chats.', 'Sie hat drei Katzen.'],
      ['Nous avons cinq minutes.', 'Wir haben fünf Minuten.'],
      ['Vous avez un stylo?', 'Haben Sie einen Stift?|Habt ihr einen Stift?'],
      ['Ils ont dix euros.', 'Sie haben zehn Euro.'],
    ],
    cloze: [
      { fr: "J'___ vingt ans.", answer: 'ai', wrong: ['suis', 'as'], de: 'Ich bin zwanzig Jahre alt.' },
      { fr: 'Nous ___ cinq minutes.', answer: 'avons', wrong: ['avez', 'ont'], de: 'Wir haben fünf Minuten.' },
      { fr: 'Ils ___ dix euros.', answer: 'ont', wrong: ['sont', 'a'], de: 'Sie haben zehn Euro.' },
      { fr: 'Elle a ___ chats.', answer: 'trois', wrong: ['un', 'une'], de: 'Sie hat drei Katzen.' },
    ],
  },
  {
    id: 'a1-food',
    level: 'A1',
    title: 'Essen & Trinken',
    tips:
      'Für „etwas von“ nutzt man den Teilungsartikel: du pain (Brot), de la soupe, de l’eau. ' +
      'Nach einer Verneinung wird er zu „de“: „Je ne mange pas de pain.“',
    vocab: [
      ['le pain', 'das Brot'],
      ["l'eau", 'das Wasser'],
      ['le café', 'der Kaffee'],
      ['le fromage', 'der Käse'],
      ['la pomme', 'der Apfel'],
      ['le vin', 'der Wein'],
      ['manger', 'essen'],
      ['boire', 'trinken'],
    ],
    sentences: [
      ['Je mange du pain.', 'Ich esse Brot.'],
      ["Tu bois de l'eau?", 'Trinkst du Wasser?'],
      ['Elle aime le fromage.', 'Sie mag Käse.|Sie liebt Käse.'],
      ['Nous mangeons une pomme.', 'Wir essen einen Apfel.'],
      ["Un café, s'il vous plaît.", 'Einen Kaffee, bitte.'],
      ['Je ne bois pas de vin.', 'Ich trinke keinen Wein.'],
    ],
    cloze: [
      { fr: 'Je mange ___ pain.', answer: 'du', wrong: ['de la', 'des'], de: 'Ich esse Brot.' },
      { fr: 'Tu bois ___ eau?', answer: "de l'", wrong: ['du', 'des'], de: 'Trinkst du Wasser?' },
      { fr: 'Je ne bois pas ___ vin.', answer: 'de', wrong: ['du', 'le'], de: 'Ich trinke keinen Wein.' },
      { fr: 'Nous ___ une pomme.', answer: 'mangeons', wrong: ['mangez', 'mange'], de: 'Wir essen einen Apfel.' },
    ],
  },
  {
    id: 'a1-family',
    level: 'A1',
    title: 'Familie',
    tips:
      'Besitzwörter richten sich nach dem Besitz, nicht nach dem Besitzer: mon père, ma mère, mes parents. ' +
      'Vor Vokal steht „mon“ auch bei weiblichen Wörtern: „mon amie“.',
    vocab: [
      ['le père', 'der Vater'],
      ['la mère', 'die Mutter'],
      ['le frère', 'der Bruder'],
      ['la sœur', 'die Schwester'],
      ['les parents', 'die Eltern'],
      ['le fils', 'der Sohn'],
      ['la fille', 'die Tochter|das Mädchen'],
      ['la famille', 'die Familie'],
    ],
    sentences: [
      ["Mon père s'appelle Jean.", 'Mein Vater heißt Jean.'],
      ['Ma sœur est petite.', 'Meine Schwester ist klein.'],
      ['Mes parents sont à Paris.', 'Meine Eltern sind in Paris.'],
      ['Ton frère a quel âge?|Quel âge a ton frère?', 'Wie alt ist dein Bruder?'],
      ['Sa fille est médecin.', 'Seine Tochter ist Ärztin.|Ihre Tochter ist Ärztin.'],
      ['Nous avons une grande famille.', 'Wir haben eine große Familie.'],
    ],
    cloze: [
      { fr: '___ sœur est petite.', answer: 'Ma', wrong: ['Mon', 'Mes'], de: 'Meine Schwester ist klein.' },
      { fr: '___ parents sont à Paris.', answer: 'Mes', wrong: ['Ma', 'Mon'], de: 'Meine Eltern sind in Paris.' },
      { fr: "C'est ___ amie Léa.", answer: 'mon', wrong: ['ma', 'mes'], de: 'Das ist meine Freundin Léa.' },
      { fr: 'Nous avons une ___ famille.', answer: 'grande', wrong: ['grand', 'grands'], de: 'Wir haben eine große Familie.' },
    ],
  },
  {
    id: 'a1-daily',
    level: 'A1',
    title: 'Alltag: Verben auf -er',
    tips:
      'Regelmäßige Verben auf -er: parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent. ' +
      'Verneinung umschließt das Verb: „je ne parle pas“.',
    vocab: [
      ['parler', 'sprechen'],
      ['habiter', 'wohnen'],
      ['travailler', 'arbeiten'],
      ['aimer', 'mögen|lieben'],
      ['regarder', 'anschauen|ansehen'],
      ['écouter', 'zuhören|hören'],
      ['la maison', 'das Haus'],
      ["aujourd'hui", 'heute'],
    ],
    sentences: [
      ['Je parle français.', 'Ich spreche Französisch.'],
      ['Tu habites à Berlin?', 'Wohnst du in Berlin?'],
      ["Il travaille aujourd'hui.", 'Er arbeitet heute.'],
      ['Nous regardons un film.', 'Wir schauen einen Film.|Wir sehen einen Film.'],
      ['Vous écoutez la radio.', 'Sie hören Radio.|Ihr hört Radio.'],
      ['Elles ne parlent pas anglais.', 'Sie sprechen kein Englisch.'],
    ],
    cloze: [
      { fr: 'Nous ___ un film.', answer: 'regardons', wrong: ['regardez', 'regardent'], de: 'Wir schauen einen Film.' },
      { fr: 'Tu ___ à Berlin?', answer: 'habites', wrong: ['habite', 'habitez'], de: 'Wohnst du in Berlin?' },
      { fr: 'Elles ne parlent ___ anglais.', answer: 'pas', wrong: ['ne', 'non'], de: 'Sie sprechen kein Englisch.' },
      { fr: 'Ils ___ à la maison.', answer: 'travaillent', wrong: ['travaille', 'travaillons'], de: 'Sie arbeiten zu Hause.' },
    ],
  },
  {
    id: 'a1-time',
    level: 'A1',
    title: 'Uhrzeit & Wochentage',
    tips:
      'Die Uhrzeit sagt man mit „il est“: „Il est trois heures.“ Halbe Stunden: „et demie“, Viertel: „et quart“ / „moins le quart“. ' +
      'Wochentage schreibt man klein und ohne Artikel für „am“: „lundi“ = am Montag, „le lundi“ = montags.',
    vocab: [
      ['lundi', 'Montag'],
      ['mardi', 'Dienstag'],
      ['mercredi', 'Mittwoch'],
      ['jeudi', 'Donnerstag'],
      ['vendredi', 'Freitag'],
      ['le samedi', 'samstags|der Samstag'],
      ["l'heure", 'die Uhrzeit|die Stunde'],
      ['midi', 'Mittag|zwölf Uhr mittags'],
    ],
    sentences: [
      ['Quelle heure est-il?|Il est quelle heure?', 'Wie spät ist es?'],
      ['Il est huit heures et demie.', 'Es ist halb neun.|Es ist acht Uhr dreißig.'],
      ['Le cours commence à neuf heures.', 'Der Kurs beginnt um neun Uhr.'],
      ['Lundi, je travaille à la maison.', 'Am Montag arbeite ich zu Hause.'],
      ['Le samedi, nous allons au marché.', 'Samstags gehen wir auf den Markt.'],
      ['On mange à midi.', 'Wir essen um zwölf Uhr.|Wir essen mittags.'],
    ],
    cloze: [
      { fr: 'Il ___ huit heures.', answer: 'est', wrong: ['a', 'sont'], de: 'Es ist acht Uhr.' },
      { fr: 'Il est huit heures et ___.', answer: 'demie', wrong: ['moitié', 'demi-heure'], de: 'Es ist halb neun.' },
      { fr: 'Le cours commence ___ neuf heures.', answer: 'à', wrong: ['en', 'dans'], de: 'Der Kurs beginnt um neun Uhr.' },
      { fr: '___ samedi, nous allons au marché.', answer: 'Le', wrong: ['Au', 'En'], de: 'Samstags gehen wir auf den Markt.' },
    ],
  },
  {
    id: 'a1-weather',
    level: 'A1',
    title: 'Wetter & Jahreszeiten',
    tips:
      'Beim Wetter benutzt man oft „il fait“: il fait beau, il fait chaud, il fait froid. Aber: „il pleut“ (es regnet), „il neige“ (es schneit). ' +
      'Jahreszeiten: en été, en automne, en hiver – aber „au printemps“.',
    vocab: [
      ['beau', 'schön'],
      ['chaud', 'warm|heiß'],
      ['froid', 'kalt'],
      ['il pleut', 'es regnet'],
      ['il neige', 'es schneit'],
      ['le soleil', 'die Sonne'],
      ["l'hiver", 'der Winter'],
      ['le printemps', 'der Frühling'],
    ],
    sentences: [
      ["Il fait beau aujourd'hui.", 'Heute ist schönes Wetter.|Das Wetter ist heute schön.'],
      ['En hiver, il fait froid.', 'Im Winter ist es kalt.'],
      ['Il pleut depuis ce matin.', 'Es regnet seit heute Morgen.'],
      ['Au printemps, les arbres sont verts.', 'Im Frühling sind die Bäume grün.'],
      ["J'ai chaud, j'ouvre la fenêtre.", 'Mir ist warm, ich öffne das Fenster.'],
      ['Il neige à la montagne.', 'In den Bergen schneit es.|Es schneit in den Bergen.'],
    ],
    cloze: [
      { fr: 'Il ___ beau aujourd’hui.', answer: 'fait', wrong: ['est', 'a'], de: 'Heute ist schönes Wetter.' },
      { fr: '___ printemps, les arbres sont verts.', answer: 'Au', wrong: ['En', 'Le'], de: 'Im Frühling sind die Bäume grün.' },
      { fr: '___ hiver, il fait froid.', answer: 'En', wrong: ['Au', 'À'], de: 'Im Winter ist es kalt.' },
      { fr: "J'___ chaud.", answer: 'ai', wrong: ['suis', 'fais'], de: 'Mir ist warm.' },
    ],
  },
  {
    id: 'a1-home',
    level: 'A1',
    title: 'Wohnung & il y a',
    tips:
      '„Il y a“ heißt „es gibt“ oder „da ist/sind“: „Il y a deux chambres.“ Verneint: „Il n’y a pas de jardin.“ ' +
      'Ortsangaben: dans (in), sur (auf), sous (unter), à côté de (neben).',
    vocab: [
      ["l'appartement", 'die Wohnung'],
      ['la chambre', 'das Schlafzimmer|das Zimmer'],
      ['la cuisine', 'die Küche'],
      ['la salle de bains', 'das Badezimmer'],
      ['la table', 'der Tisch'],
      ['le lit', 'das Bett'],
      ['sur', 'auf'],
      ['sous', 'unter'],
    ],
    sentences: [
      ["Il y a deux chambres dans l'appartement.", 'Es gibt zwei Schlafzimmer in der Wohnung.|In der Wohnung gibt es zwei Zimmer.'],
      ["Il n'y a pas de jardin.", 'Es gibt keinen Garten.'],
      ['Le chat dort sous le lit.', 'Die Katze schläft unter dem Bett.|Der Kater schläft unter dem Bett.'],
      ['Les clés sont sur la table.', 'Die Schlüssel liegen auf dem Tisch.|Die Schlüssel sind auf dem Tisch.'],
      ['La cuisine est petite mais jolie.', 'Die Küche ist klein, aber hübsch.'],
      ["La salle de bains est à côté de la chambre.", 'Das Badezimmer ist neben dem Schlafzimmer.'],
    ],
    cloze: [
      { fr: "Il ___ a deux chambres.", answer: 'y', wrong: ['en', 'le'], de: 'Es gibt zwei Schlafzimmer.' },
      { fr: "Il n'y a pas ___ jardin.", answer: 'de', wrong: ['du', 'un'], de: 'Es gibt keinen Garten.' },
      { fr: 'Le chat dort ___ le lit.', answer: 'sous', wrong: ['sur', 'dans'], de: 'Die Katze schläft unter dem Bett.' },
      { fr: 'La salle de bains est à côté ___ la chambre.', answer: 'de', wrong: ['à', 'en'], de: 'Das Badezimmer ist neben dem Schlafzimmer.' },
    ],
  },
  {
    id: 'a1-questions',
    level: 'A1',
    title: 'Fragen stellen',
    tips:
      'Drei Arten zu fragen: Intonation („Tu viens ?“), „est-ce que“ („Est-ce que tu viens ?“) und Inversion („Viens-tu ?“). ' +
      'Fragewörter: où (wo), quand (wann), comment (wie), pourquoi (warum), qui (wer), combien (wie viel).',
    vocab: [
      ['où', 'wo|wohin'],
      ['quand', 'wann'],
      ['comment', 'wie'],
      ['pourquoi', 'warum'],
      ['qui', 'wer'],
      ['combien', 'wie viel|wie viele'],
      ["qu'est-ce que", 'was'],
      ['parce que', 'weil'],
    ],
    sentences: [
      ['Où habites-tu?|Où est-ce que tu habites?|Tu habites où?', 'Wo wohnst du?'],
      ['Quand est-ce que tu arrives?|Quand arrives-tu?', 'Wann kommst du an?'],
      ["Qu'est-ce que tu fais?", 'Was machst du?'],
      ["Pourquoi tu ris? Parce que c'est drôle.", 'Warum lachst du? Weil es lustig ist.'],
      ['Qui est cette femme?', 'Wer ist diese Frau?'],
      ['Combien de frères as-tu?|Tu as combien de frères?', 'Wie viele Brüder hast du?'],
    ],
    cloze: [
      { fr: '___ habites-tu? À Lyon.', answer: 'Où', wrong: ['Quand', 'Qui'], de: 'Wo wohnst du? In Lyon.' },
      { fr: '___ est-ce que tu arrives? Demain.', answer: 'Quand', wrong: ['Où', 'Combien'], de: 'Wann kommst du an? Morgen.' },
      { fr: "Qu'___-ce que tu fais?", answer: 'est', wrong: ['es', 'et'], de: 'Was machst du?' },
      { fr: 'Pourquoi? ___ que c’est drôle.', answer: 'Parce', wrong: ['Pour', 'Car'], de: 'Warum? Weil es lustig ist.' },
    ],
  },
];
