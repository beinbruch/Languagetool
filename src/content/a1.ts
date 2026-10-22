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
];
