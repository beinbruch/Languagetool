import type { PlacementQuestion } from './types';

/** Six questions per level; the test climbs a level as long as 5 of 6 are right. */
export const PLACEMENT: PlacementQuestion[] = [
  // A1
  { level: 'A1', prompt: 'Was bedeutet …', fr: 'merci', answer: 'danke', wrong: ['bitte', 'hallo', 'nein'] },
  { level: 'A1', prompt: 'Ergänze:', fr: 'Je ___ allemand.', answer: 'suis', wrong: ['es', 'est', 'sommes'] },
  { level: 'A1', prompt: 'Ergänze:', fr: "Nous ___ deux enfants.", answer: 'avons', wrong: ['sommes', 'avez', 'ont'] },
  { level: 'A1', prompt: 'Was bedeutet …', fr: 'la sœur', answer: 'die Schwester', wrong: ['die Mutter', 'die Tochter', 'die Freundin'] },
  { level: 'A1', prompt: 'Ergänze:', fr: 'Je ne bois pas ___ café.', answer: 'de', wrong: ['du', 'le', 'des'] },
  { level: 'A1', prompt: 'Wie sagt man „Ich heiße Anna“?', answer: "Je m'appelle Anna.", wrong: ['Je suis appelle Anna.', "J'ai Anna.", "Je m'appelles Anna."] },
  // A2
  { level: 'A2', prompt: 'Ergänze:', fr: 'Hier, nous ___ allés au cinéma.', answer: 'sommes', wrong: ['avons', 'étions', 'allons'] },
  { level: 'A2', prompt: 'Ergänze:', fr: 'Je vais ___ gare.', answer: 'à la', wrong: ['au', 'aux', 'en'] },
  { level: 'A2', prompt: 'Ergänze:', fr: 'Elle ___ lève à sept heures.', answer: 'se', wrong: ['me', 'le', 'te'] },
  { level: 'A2', prompt: 'Ergänze:', fr: 'Ce gâteau est ___ que l’autre.', answer: 'meilleur', wrong: ['plus bon', 'mieux', 'bonne'] },
  { level: 'A2', prompt: 'Was bedeutet …', fr: 'Il va pleuvoir.', answer: 'Es wird regnen.', wrong: ['Es hat geregnet.', 'Es regnet nicht.', 'Er geht im Regen.'] },
  { level: 'A2', prompt: 'Ergänze:', fr: "Tu as ___ ce film?", answer: 'vu', wrong: ['voir', 'vois', 'vue'] },
  // B1
  { level: 'B1', prompt: 'Ergänze:', fr: 'Quand j’étais petit, je ___ au foot.', answer: 'jouais', wrong: ['ai joué', 'jouerai', 'joue'] },
  { level: 'B1', prompt: 'Ergänze:', fr: "C'est la ville ___ je suis né.", answer: 'où', wrong: ['que', 'dont', 'qui'] },
  { level: 'B1', prompt: 'Ergänze:', fr: "Si j'avais le temps, je ___ avec toi.", answer: 'viendrais', wrong: ['viendrai', 'viens', 'venais'] },
  { level: 'B1', prompt: 'Ergänze:', fr: 'Tu vas à Paris? Oui, j’___ vais demain.', answer: 'y', wrong: ['en', 'le', 'lui'] },
  { level: 'B1', prompt: 'Ergänze:', fr: 'Quand tu ___ grand, tu comprendras.', answer: 'seras', wrong: ['es', 'serais', 'étais'] },
  { level: 'B1', prompt: 'Ergänze:', fr: 'Voici le livre ___ je t’ai parlé.', answer: 'dont', wrong: ['que', 'qui', 'où'] },
  // B2
  { level: 'B2', prompt: 'Ergänze:', fr: 'Il faut que tu ___ attention.', answer: 'fasses', wrong: ['fais', 'feras', 'faisais'] },
  { level: 'B2', prompt: 'Ergänze:', fr: 'Bien qu’elle ___ malade, elle travaille.', answer: 'soit', wrong: ['est', 'était', 'sera'] },
  { level: 'B2', prompt: 'Ergänze:', fr: "Il m'a dit qu'il ___ le lendemain.", answer: 'partirait', wrong: ['partira', 'part', 'partit'] },
  { level: 'B2', prompt: 'Ergänze:', fr: 'Ces clés, je te ___ rends demain.', answer: 'les', wrong: ['leur', 'en', 'lui'] },
  { level: 'B2', prompt: 'Ergänze:', fr: 'Le match est annulé ___ la pluie.', answer: 'à cause de', wrong: ['grâce à', 'puisque', 'pourtant'] },
  { level: 'B2', prompt: 'Ergänze:', fr: 'Ce château a ___ construit au XVe siècle.', answer: 'été', wrong: ['est', 'était', 'eu'] },
  // C1
  { level: 'C1', prompt: 'Was bedeutet …', fr: 'poser un lapin à quelqu’un', answer: 'jemanden versetzen', wrong: ['jemandem ein Geschenk machen', 'jemanden necken', 'jemanden hereinlegen'] },
  { level: 'C1', prompt: 'Ergänze:', fr: 'Je suis heureux que vous ___ venus.', answer: 'soyez', wrong: ['êtes', 'serez', 'seriez'] },
  { level: 'C1', prompt: 'Ergänze (gehobene Sprache):', fr: "Je n'ai pas ___ le sens de votre question.", answer: 'saisi', wrong: ['capté', 'pigé', 'chopé'] },
  { level: 'C1', prompt: 'Welche Form ist passé simple von „venir“ (ils)?', answer: 'ils vinrent', wrong: ['ils venirent', 'ils vinent', 'ils venaient'] },
  { level: 'C1', prompt: 'Ergänze:', fr: "Après qu'il ___ sorti, on a fermé.", answer: 'est', wrong: ['soit', 'serait', 'fût'] },
  { level: 'C1', prompt: 'Was bedeutet …', fr: 'la hausse des prix', answer: 'der Preisanstieg', wrong: ['die Preissenkung', 'der Höchstpreis', 'der Preisvergleich'] },
  // C2
  { level: 'C2', prompt: 'Was bedeutet …', fr: 'chelou', answer: 'seltsam', wrong: ['lässig', 'teuer', 'müde'] },
  { level: 'C2', prompt: 'Ergänze:', fr: 'Tu es ___ être là à huit heures.', answer: 'censé', wrong: ['sensé', 'sensible', 'sensibilisé'] },
  { level: 'C2', prompt: 'Ergänze:', fr: 'Je crains qu’il ___ se trompe.', answer: 'ne', wrong: ['pas', 'en', 'y'] },
  { level: 'C2', prompt: 'Was bedeutet …', fr: 'la notice', answer: 'die Gebrauchsanweisung', wrong: ['die Notiz', 'die Nachricht', 'die Rechnung'] },
  { level: 'C2', prompt: 'Ergänze:', fr: "Il était épuisé, aussi ___ refusé.", answer: 'a-t-il', wrong: ['il a', 'a-il', 'il a-t'] },
  { level: 'C2', prompt: 'Was bedeutet …', fr: "l'habit ne fait pas le moine", answer: 'Der Schein trügt.', wrong: ['Kleider machen Leute.', 'Mönche tragen keine Kleider.', 'Wer rastet, der rostet.'] },
];
