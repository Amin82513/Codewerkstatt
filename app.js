const LESSON_SOLUTIONS = {
  html: [
    "<p>Willkommen auf meiner Website.</p>",
    "<!doctype html>\n<html>\n<head>\n  <title>Meine Seite</title>\n</head>\n<body>\n  <p>Willkommen.</p>\n</body>\n</html>",
    "<h1>Mein Thema</h1>",
    "<p>Ich lerne <strong>Webentwicklung</strong>. Das mache ich <em>gerne</em>.</p>",
    "<h1>Meine Schritte</h1>\n<ol>\n  <li>Idee sammeln</li>\n  <li>Plan erstellen</li>\n  <li>Umsetzen</li>\n  <li>Ergebnis prüfen</li>\n</ol>",
    '<a href="https://example.com">Mein Lieblingslink</a>',
    '<img src="https://picsum.photos/280/120" alt="Ein rotes Fahrrad">',
    '<form>\n  <label for="name">Name</label>\n  <input id="name" type="text">\n  <button>Senden</button>\n</form>',
    '<nav>\n  <a href="#start">Start</a>\n</nav>\n<main>\n  <section>\n    <h1>Inhalt</h1>\n  </section>\n</main>\n<footer>Ende</footer>',
  ],
  css: [
    "p.demo {\n  color: green;\n  font-weight: 600;\n}",
    ".note {\n  color: red;\n}",
    ".color-title {\n  color: orange;\n}",
    ".box {\n  padding: 20px;\n  border: 2px solid #64748b;\n  margin: 16px;\n}",
    ".menu {\n  display: flex;\n  gap: 24px;\n}",
    ".grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}",
    ".responsive-card {\n  max-width: 32rem;\n  padding: 20px;\n}\n\n@media (max-width: 500px) {\n  .responsive-card {\n    padding: 10px;\n  }\n}",
    ".animated {\n  transition: transform 0.2s ease;\n}\n\n.animated:hover {\n  transform: translateY(-4px);\n}",
  ],
  javascript: [
    'document.getElementById("btn").addEventListener("click", () => {\n  document.getElementById("title").textContent = "Du hast geklickt!";\n});',
    'const name = "Mia";\ndocument.getElementById("out").textContent = `Hallo ${name}`;',
    'const age = 15;\nconst isLearning = true;\ndocument.getElementById("out").textContent = `Alter: ${age}, lernt: ${isLearning}`;',
    'const points = 8;\n\nif (points >= 10) {\n  document.getElementById("out").textContent = "Ziel erreicht";\n} else {\n  document.getElementById("out").textContent = "Noch ein Versuch";\n}',
    'const list = document.getElementById("list");\n\nfor (let i = 1; i <= 5; i++) {\n  const item = document.createElement("li");\n  item.textContent = i;\n  list.appendChild(item);\n}',
    'function greet(name) {\n  return `Hallo ${name}`;\n}\n\ndocument.getElementById("out").textContent = greet("Mia");',
    'const numbers = [2, 3, 4];\nconst doubled = numbers.map(number => number * 2);\ndocument.getElementById("out").textContent = doubled;',
    'const user = {\n  name: "Alex",\n  favorite: "HTML",\n};\n\ndocument.getElementById("out").textContent = JSON.stringify(user, null, 2);',
    'const heading = document.querySelector("h1");\nheading.textContent = "DOM geändert";',
    'document.getElementById("eventBtn").addEventListener("click", () => {\n  document.getElementById("eventOut").textContent = "Klick registriert";\n});',
    'document.getElementById("apiBtn").addEventListener("click", () => {\n  const now = new Date();\n  document.getElementById("apiOut").textContent = now.toLocaleTimeString("de-DE");\n});',
  ],
};
const COURSES = {
  html: {
    title: "HTML",
    desc: "Struktur und Aufbau moderner Websites.",
    time: "ca. 2 Std.",
    lessons: [
      "Einführung",
      "Dokumentstruktur",
      "Überschriften",
      "Texte",
      "Listen",
      "Links",
      "Bilder",
      "Formulare",
      "Semantisches HTML",
    ],
  },
  css: {
    title: "CSS",
    desc: "Gestaltung, Layout und Responsive Design.",
    time: "ca. 2,5 Std.",
    lessons: [
      "Einführung",
      "Selektoren",
      "Farben",
      "Box Model",
      "Flexbox",
      "Grid",
      "Responsive Design",
      "Animationen",
    ],
  },
  javascript: {
    title: "JavaScript",
    desc: "Logik, Interaktion und Verhalten im Browser.",
    time: "ca. 3 Std.",
    lessons: [
      "Einführung",
      "Variablen",
      "Datentypen",
      "Bedingungen",
      "Schleifen",
      "Funktionen",
      "Arrays",
      "Objekte",
      "DOM",
      "Events",
      "APIs",
    ],
  },
};
const EX = [
  [
    "HTML",
    "Anfänger",
    "Meine Website",
    "Baue eine kleine Startseite mit h1-Überschrift, kurzem Absatz und einem Link zu einem weiteren Bereich.",
    "html",
  ],
  [
    "HTML",
    "Anfänger",
    "Ein Link nach Hause",
    "Erstelle eine Navigation mit drei aussagekräftigen Links und ergänze darunter einen passenden Begrüßungstext.",
    "html",
  ],
  [
    "HTML",
    "Anfänger",
    "Meine Liste",
    "Erstelle einen Abschnitt mit Überschrift, Einleitung und einer ungeordneten Liste mit mindestens drei Einträgen.",
    "html",
  ],
  [
    "HTML",
    "Fortgeschritten",
    "Semantische Struktur",
    "Gliedere eine Seite mit header, nav, main, mehreren section-Elementen und footer. Verknüpfe die Navigation mit passenden Abschnitts-IDs.",
    "html",
  ],
  [
    "CSS",
    "Anfänger",
    "Textfarbe ändern",
    "Gestalte einen Hinweis mit eigener Text- und Hintergrundfarbe und passe zusätzlich Schriftgröße und Zeilenhöhe an.",
    "css",
  ],
  [
    "CSS",
    "Anfänger",
    "Abstand geben",
    "Gestalte .card als lesbare Karte mit Innenabstand, Außenabstand, Rahmen und leicht abgerundeten Ecken.",
    "css",
  ],
  [
    "CSS",
    "Fortgeschritten",
    "Flexbox aktivieren",
    "Baue .menu als flexible Navigation: ordne Links mit Flexbox an, setze Abstände und richte sie sauber aus. Ergänze einen Hover-Zustand.",
    "css",
  ],
  [
    "CSS",
    "Fortgeschritten",
    "Maximale Breite",
    "Baue .page mit maximal 900px Breite und zentriere sie. Ordne die enthaltenen Karten in einem Grid mit Abstand und responsiven Spalten an.",
    "css",
  ],
  [
    "JavaScript",
    "Anfänger",
    "Hallo Welt per Klick",
    "Erstelle einen Button und ein Ausgabeelement. Reagiere mit einem Click-Event und ändere den Begrüßungstext über textContent.",
    "javascript",
  ],
  [
    "JavaScript",
    "Anfänger",
    "Zähler",
    "Baue eine Anzeige mit Plus- und Minus-Button. Speichere den Zählerstand in einer Variable und aktualisiere die Anzeige nach jedem Klick.",
    "javascript",
  ],
  [
    "JavaScript",
    "Fortgeschritten",
    "Klasse umschalten",
    "Lass einen Button per classList.toggle einen hervorgehobenen Zustand umschalten und passe den angezeigten Status passend dazu an.",
    "javascript",
  ],
  [
    "JavaScript",
    "Fortgeschritten",
    "Liste filtern",
    "Filtere eine Datenliste passend zur Texteingabe mit Array.filter() und rendere die Treffer bei jeder Eingabe neu im DOM.",
    "javascript",
  ],
  [
    "JavaScript",
    "Fortgeschritten",
    "Datenobjekt",
    "Lege ein Profilobjekt mit Name, Alter und Interessen an. Zeige die Eigenschaften und die Interessenliste dynamisch auf der Seite an.",
    "javascript",
  ],
  [
    "JavaScript",
    "Profi",
    "Daten holen",
    "Lade mit async/await Daten über fetch(), zeige einen Ladezustand und behandle Fehler. Rendere mehrere Felder der Antwort als Karten im DOM.",
    "javascript",
  ],
  [
    "HTML",
    "Fortgeschritten",
    "Ein Formular",
    "Erstelle ein Kontaktformular mit beschrifteten Namens- und E-Mail-Feldern, Pflichtfeldprüfung und einem Absende-Button.",
    "html",
  ],
];
const QUIZZES = [
  {
    tech: "HTML",
    difficulty: "Anfänger",
    questions: [
      {
        question: "Welches Element ist die größte Überschrift?",
        options: ["<h1>", "<head>", "<title>"],
        answer: 0,
        explanation: "<h1> kennzeichnet die wichtigste Überschrift im Inhalt.",
      },
      {
        question: "Welches Element erstellt einen Link?",
        options: ["<link>", "<a>", "<href>"],
        answer: 1,
        explanation: 'Ein Link wird mit <a href="…"> erstellt.',
      },
      {
        question: "Welches Element erzeugt einen Absatz?",
        options: ["<p>", "<text>", "<paragraph>"],
        answer: 0,
        explanation: "<p> steht für einen Absatz.",
      },
    ],
  },
  {
    tech: "HTML",
    difficulty: "Fortgeschritten",
    questions: [
      {
        question: "Wofür ist das alt-Attribut bei Bildern wichtig?",
        options: [
          "Für Alternativtext und Barrierefreiheit",
          "Für die Bildgröße",
          "Für den Bildpfad",
        ],
        answer: 0,
        explanation:
          "alt beschreibt den Bildinhalt, wenn das Bild nicht sichtbar ist oder vorgelesen wird.",
      },
      {
        question: "Welches Element gruppiert eine ungeordnete Liste?",
        options: ["<ol>", "<ul>", "<li>"],
        answer: 1,
        explanation:
          "<ul> bildet die Liste; <li> enthält jeweils einen Listeneintrag.",
      },
      {
        question: "Wozu dient <label> in einem Formular?",
        options: [
          "Es verbindet eine Beschriftung mit einem Eingabefeld",
          "Es sendet das Formular ab",
          "Es prüft die Eingabe",
        ],
        answer: 0,
        explanation:
          "Ein label mit passendem for-Attribut ist mit der ID des Eingabefelds verknüpft.",
      },
    ],
  },
  {
    tech: "HTML",
    difficulty: "Profi",
    questions: [
      {
        question:
          "Welches Element sollte den zentralen, einzigartigen Seiteninhalt umschließen?",
        options: ["<main>", "<section>", "<div>"],
        answer: 0,
        explanation: "<main> markiert den Hauptinhalt der Seite.",
      },
      {
        question:
          "Welches Attribut sorgt bei einem Pflichtfeld für eine Browserprüfung?",
        options: ["required", "validate", "mandatory"],
        answer: 0,
        explanation:
          "Das boolesche required-Attribut macht eine Eingabe verpflichtend.",
      },
      {
        question:
          "Welches Element lädt ein Skript erst nach dem Parsen des HTML?",
        options: ["<script defer>", "<script async>", "<script delay>"],
        answer: 0,
        explanation:
          "defer führt das externe Skript nach dem Parsen aus und bewahrt die Dokumentreihenfolge.",
      },
    ],
  },
  {
    tech: "CSS",
    difficulty: "Anfänger",
    questions: [
      {
        question: "Welche CSS-Eigenschaft ändert die Textfarbe?",
        options: ["font-color", "color", "text-style"],
        answer: 1,
        explanation:
          "Die Eigenschaft color legt die Vordergrund- beziehungsweise Textfarbe fest.",
      },
      {
        question: 'Wie wählst du ein Element mit class="karte" aus?',
        options: ["#karte", ".karte", "karte"],
        answer: 1,
        explanation: "Ein Punkt vor dem Namen wählt eine CSS-Klasse aus.",
      },
      {
        question: "Welche Eigenschaft legt den Außenabstand fest?",
        options: ["padding", "margin", "border"],
        answer: 1,
        explanation: "margin ist der Abstand außerhalb des Elements.",
      },
    ],
  },
  {
    tech: "CSS",
    difficulty: "Fortgeschritten",
    questions: [
      {
        question: "Welche Deklaration aktiviert Flexbox?",
        options: ["position: flex", "display: flex", "layout: flex"],
        answer: 1,
        explanation: "display: flex macht ein Element zum Flex-Container.",
      },
      {
        question: "Was bewirkt box-sizing: border-box?",
        options: [
          "Padding und Border zählen in die angegebene Breite",
          "Der Rand wird ausgeblendet",
          "Die Breite gilt nur für den Inhalt",
        ],
        answer: 0,
        explanation:
          "Bei border-box enthält die festgelegte Größe Inhalt, Padding und Border.",
      },
      {
        question: "Wofür wird eine Media Query verwendet?",
        options: [
          "Für responsive Regeln abhängig von Geräteeigenschaften",
          "Zum Laden von Bildern",
          "Zum Erstellen einer Animation",
        ],
        answer: 0,
        explanation:
          "Media Queries wenden CSS abhängig etwa von der Viewport-Breite an.",
      },
    ],
  },
  {
    tech: "CSS",
    difficulty: "Profi",
    questions: [
      {
        question: "Was bedeutet 1fr in einem CSS-Grid?",
        options: [
          "Ein Anteil des verfügbaren freien Platzes",
          "Ein fester Pixelwert",
          "Eine Schriftgröße",
        ],
        answer: 0,
        explanation:
          "fr verteilt den verfügbaren Platz anteilig auf Grid-Tracks.",
      },
      {
        question: "Welcher Selektor ist spezifischer?",
        options: [".nav a", "#navigation a", "nav a"],
        answer: 1,
        explanation:
          "Ein ID-Selektor hat eine höhere Spezifität als Klassen- und Elementselektoren.",
      },
      {
        question: "Was bewirkt minmax(200px, 1fr) in einem Grid-Track?",
        options: [
          "Mindestens 200px, höchstens ein freier Anteil",
          "Immer genau 200px",
          "Mindestens einen Pixel, höchstens 200px",
        ],
        answer: 0,
        explanation:
          "minmax definiert eine Unter- und Obergrenze für die Track-Größe.",
      },
    ],
  },
  {
    tech: "JavaScript",
    difficulty: "Anfänger",
    questions: [
      {
        question:
          "Mit welchem Schlüsselwort deklarierst du eine Variable, die nicht neu zugewiesen wird?",
        options: ["const", "fixed", "static"],
        answer: 0,
        explanation: "const verhindert eine erneute Zuweisung der Variablen.",
      },
      {
        question: "Welcher Operator vergleicht Wert und Datentyp?",
        options: ["=", "==", "==="],
        answer: 2,
        explanation: "=== prüft auf strikte Gleichheit von Wert und Typ.",
      },
      {
        question: "Wie rufst du die Funktion greet auf?",
        options: ["greet[]", "greet()", "call greet"],
        answer: 1,
        explanation:
          "Ein Funktionsaufruf verwendet den Namen gefolgt von Klammern.",
      },
    ],
  },
  {
    tech: "JavaScript",
    difficulty: "Fortgeschritten",
    questions: [
      {
        question: "Was gibt [1, 2, 3].map(n => n * 2) zurück?",
        options: ["[2, 4, 6]", "[1, 2, 3, 2]", "6"],
        answer: 0,
        explanation:
          "map erstellt ein neues Array mit dem Ergebnis für jedes Element.",
      },
      {
        question: "Wie reagierst du auf einen Klick auf einen Button?",
        options: [
          "button.addEventListener('click', handler)",
          "button.on('click', handler)",
          "button.listen('click', handler)",
        ],
        answer: 0,
        explanation:
          "addEventListener registriert einen Event-Handler am Element.",
      },
      {
        question: "Was passiert bei if (punkte >= 10)?",
        options: [
          "Der Block läuft, wenn punkte mindestens 10 ist",
          "Der Wert punkte wird auf 10 gesetzt",
          "Der Block läuft nur bei punkte gleich 10",
        ],
        answer: 0,
        explanation: ">= bedeutet größer oder gleich.",
      },
    ],
  },
  {
    tech: "JavaScript",
    difficulty: "Profi",
    questions: [
      {
        question: "Was macht Array.filter()?",
        options: [
          "Es erstellt ein Array mit Elementen, die den Test bestehen",
          "Es verändert jedes Element",
          "Es sortiert das Array alphabetisch",
        ],
        answer: 0,
        explanation:
          "filter behält nur Elemente, für die der Callback true zurückgibt.",
      },
      {
        question: "Was liefert eine async-Funktion immer zurück?",
        options: ["Ein Promise", "Ein Array", "Immer undefined"],
        answer: 0,
        explanation:
          "Der Rückgabewert einer async-Funktion wird in ein Promise verpackt.",
      },
      {
        question: "Wozu dient finally() bei einer Promise-Kette?",
        options: [
          "Für Code, der unabhängig vom Erfolg oder Fehler ausgeführt wird",
          "Nur zum Behandeln von Fehlern",
          "Zum Umwandeln des Promise in ein Array",
        ],
        answer: 0,
        explanation:
          "finally wird nach erfülltem oder abgelehntem Promise ausgeführt.",
      },
    ],
  },
];
const PROJECTS = [
  [
    "Portfolio-Website",
    "Persönliche Website mit Profil, Projekten und Kontakt.",
    "Anfänger",
    "HTML · CSS",
    "45 Min",
  ],
  [
    "Landingpage",
    "Produkt-Landingpage mit responsivem Layout.",
    "Anfänger",
    "HTML · CSS",
    "60 Min",
  ],
  [
    "To-do-App",
    "To-do-App mit Hinzufügen, Abhaken und Löschen.",
    "Fortgeschritten",
    "HTML · CSS · JavaScript",
    "60 Min",
  ],
  [
    "Taschenrechner",
    "Grundrechenarten und Bedienfeld.",
    "Fortgeschritten",
    "HTML · CSS · JavaScript",
    "75 Min",
  ],
  [
    "Quiz-App",
    "Fragen, Antworten und Auswertung.",
    "Fortgeschritten",
    "HTML · CSS · JavaScript",
    "75 Min",
  ],
  [
    "Wetter-App",
    "Wetterdaten aus einer API anzeigen.",
    "Profi",
    "HTML · CSS · JavaScript",
    "90 Min",
  ],
  [
    "Digitaler Timer",
    "Countdown mit Start, Pause und Reset.",
    "Fortgeschritten",
    "HTML · CSS · JavaScript",
    "45 Min",
  ],
  [
    "Kleines Browser-Spiel",
    "DOM, Events und Zustand in einem kleinen Spiel.",
    "Profi",
    "HTML · CSS · JavaScript",
    "120 Min",
  ],
];
const PROJECT_TIPS = {
  "Portfolio-Website": [
    "Starte mit Header, Profil und Projekt-Grid.",
    "Baue die Struktur erst in HTML und danach das Styling in CSS.",
    "Achte auf übersichtliche Abstände und klare Überschriften.",
  ],
  Landingpage: [
    "Plane zuerst Hero, Features und Call-to-Action.",
    "Nutze Flexbox oder CSS Grid für das Layout.",
    "Teste die Seite auf mobile und desktop.",
  ],
  "To-do-App": [
    "Speichere Einträge in einem Array und rendere sie mit JavaScript.",
    "Füge eine Check-Funktion für erledigte Aufgaben hinzu.",
    "Lösche Elemente sowohl im DOM als auch im Datenmodell.",
  ],
  Taschenrechner: [
    "Erstelle zunächst Buttons für Zahlen und Operatoren.",
    "Speichere aktuellen Wert und Operator separat.",
    "Teste einfache Rechenbeispiele nach jedem Schritt.",
  ],
  "Quiz-App": [
    "Definiere Fragen als Array von Objekten.",
    "Zeige pro Runde nur eine Frage an.",
    "Berechne die Punktzahl am Ende und zeige sie an.",
  ],
  "Wetter-App": [
    "Lade die Daten mit fetch() aus einer API.",
    "Zeige Ladezustand und Fehler separat an.",
    "Prüfe, ob deine API-Antwort Felder wie temp oder city enthält.",
  ],
  "Digitaler Timer": [
    "Teile Start, Pause und Reset sauber auf.",
    "Nutze setInterval für die Zeitberechnung.",
    "Formatiere die Anzeige immer als Minuten und Sekunden.",
  ],
  "Kleines Browser-Spiel": [
    "Baue zuerst den Spielzustand als Objekt oder Array auf.",
    "Fange mit einem kleinen Klick- oder Tastatur-Event an.",
    "Teste die Regeln mit kleinen Schritten statt alles auf einmal.",
  ],
};
const slugifyProject = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const LESSON_CONTENT = {
  html: [
    [
      "Willkommen in der Werkstatt",
      "HTML beschreibt die Struktur einer Website. Du lernst zuerst, wie Elemente und Inhalte zusammengehören.",
      "<p>Willkommen auf meiner Website.</p>",
      "HTML",
      "html",
    ],
    [
      "Die Dokumentstruktur",
      "Ein HTML-Dokument beginnt mit einer Grundstruktur aus doctype, html, head und body.",
      "<!doctype html>\n<html>\n  <head><title>Meine Seite</title></head>\n  <body><p>Inhalt</p></body>\n</html>",
      "HTML",
      "html",
    ],
    [
      "Deine erste Überschrift",
      "Mit dem h1-Element definierst du die wichtigste Überschrift einer HTML-Seite. Überschriften gliedern Inhalte und helfen beim Orientieren.",
      "<h1>Meine erste Website</h1>",
      "HTML",
      "html",
    ],
    [
      "Texte strukturieren",
      "Absätze, starke Hervorhebungen und Zeilenumbrüche helfen dir, Text sinnvoll zu strukturieren.",
      "<h1>Über mich</h1>\n<p>Ich lerne HTML und baue meine erste Website.</p>",
      "HTML",
      "html",
    ],
    [
      "Listen bauen",
      "ul erzeugt eine ungeordnete Liste, li einzelne Listeneinträge. Für nummerierte Listen gibt es ol.",
      "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
      "HTML",
      "html",
    ],
    [
      "Links erstellen",
      "Mit dem a-Element verlinkst du andere Seiten oder Bereiche deiner Website. Das href-Attribut enthält das Ziel.",
      '<a href="https://example.com">Meine Startseite</a>',
      "HTML",
      "html",
    ],
    [
      "Bilder einbinden",
      "Bilder werden mit img eingebunden. Ein verständlicher alt-Text beschreibt das Bild, falls es nicht geladen werden kann.",
      '<img src="https://picsum.photos/280/120" alt="Beispielbild">',
      "HTML",
      "html",
    ],
    [
      "Formulare verstehen",
      "Formulare sammeln Eingaben. label und input sollten semantisch miteinander verbunden sein.",
      '<form>\n  <label for="name">Name</label>\n  <input id="name" type="text">\n  <button>Absenden</button>\n</form>',
      "HTML",
      "html",
    ],
    [
      "Semantisches HTML",
      "Elemente wie main, nav, section und footer beschreiben die Bedeutung eines Inhaltsbereichs.",
      "<main>\n  <section>\n    <h1>Über das Projekt</h1>\n    <p>Semantisches HTML macht Strukturen verständlicher.</p>\n  </section>\n</main>",
      "HTML",
      "html",
    ],
  ],
  css: [
    [
      "CSS für klare Gestaltung",
      "CSS bestimmt Aussehen und Anordnung von HTML-Inhalten. Eine Regel besteht aus Selektor, Eigenschaft und Wert.",
      '<p class="demo">Hallo CSS</p>',
      "p.demo { color: blue; font-weight: 600; }",
      "",
      "css",
    ],
    [
      "Selektoren",
      "Mit Selektoren wählst du die Elemente aus, die gestaltet werden sollen. Klassen eignen sich gut für wiederverwendbare Regeln.",
      '<p class="note">Ein Absatz</p>\n<p>Ein zweiter Absatz</p>',
      ".note { color: blue; }",
      "",
      "css",
    ],
    [
      "Farben",
      "Farben können über Namen, Hex-Werte oder andere CSS-Farbformate gesetzt werden.",
      '<h2 class="color-title">Farbe im Text</h2>',
      ".color-title { color: #3b82f6; }",
      "",
      "css",
    ],
    [
      "Box Model",
      "Jedes Element besteht aus Inhalt, Padding, Border und Margin. Mit diesen Bereichen steuerst du Abstände.",
      '<div class="box">Inhalt</div>',
      ".box { padding: 16px; border: 1px solid #64748b; margin: 12px; }",
      "",
      "css",
    ],
    [
      "Flexbox",
      "Flexbox ordnet Elemente entlang einer Hauptachse an und eignet sich besonders für Navigationen und kleinere Layouts.",
      '<div class="menu"><span>Start</span><span>Kurs</span><span>Kontakt</span></div>',
      ".menu { display: flex; gap: 16px; }",
      "",
      "css",
    ],
    [
      "Grid",
      "CSS Grid teilt einen Bereich in Spalten und Zeilen und eignet sich für komplexere Seitenlayouts.",
      '<div class="grid"><span>A</span><span>B</span><span>C</span></div>',
      ".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }",
      "",
      "css",
    ],
    [
      "Responsive Design",
      "Mit relativen Einheiten und Media Queries passt du eine Website an unterschiedliche Bildschirmgrößen an.",
      '<div class="responsive-card">Auf Desktop und Mobile lesbar</div>',
      ".responsive-card { max-width: 40rem; padding: 16px; }\n@media (max-width: 600px) { .responsive-card { padding: 10px; } }",
      "",
      "css",
    ],
    [
      "Animationen",
      "Animationen sollten Zustandswechsel verständlich unterstützen. Eine kleine Transition reicht oft völlig.",
      '<button class="animated">Hover mich</button>',
      ".animated { transition: transform .15s ease; }\n.animated:hover { transform: translateY(-2px); }",
      "",
      "css",
    ],
  ],
  javascript: [
    [
      "JavaScript im Browser",
      "JavaScript ergänzt HTML und CSS um Verhalten. Du kannst auf Elemente zugreifen und auf Ereignisse reagieren.",
      '<h1 id="title">Hallo</h1>\n<button id="btn">Klick mich</button>',
      "",
      'document.getElementById("btn").addEventListener("click",()=>{ document.getElementById("title").textContent="Hallo!"; });',
      "javascript",
    ],
    [
      "Variablen",
      "Mit let und const speicherst du Werte. const sollte verwendet werden, wenn eine Variable nicht neu zugewiesen wird.",
      '<p id="out"></p>',
      "",
      'const name = "Mia";\ndocument.getElementById("out").textContent = `Hallo ${name}`;',
      "javascript",
    ],
    [
      "Datentypen",
      "Typische Werte sind Strings, Numbers, Booleans, Arrays und Objekte. Der Datentyp beeinflusst, wie du mit einem Wert arbeitest.",
      '<p id="out"></p>',
      "",
      'const age = 14;\nconst isLearning = true;\ndocument.getElementById("out").textContent = `${age} · ${isLearning}`;',
      "javascript",
    ],
    [
      "Bedingungen",
      "Mit if und else reagiert dein Programm abhängig von einer Bedingung.",
      '<p id="out"></p>',
      "",
      'const points = 8;\nif (points >= 10) {\n  document.getElementById("out").textContent = "Ziel erreicht";\n} else {\n  document.getElementById("out").textContent = "Noch ein Versuch";\n}',
      "javascript",
    ],
    [
      "Schleifen",
      "Schleifen wiederholen Arbeit. for eignet sich, wenn du eine bekannte Anzahl von Durchläufen hast.",
      '<ul id="list"></ul>',
      "",
      'const list = document.getElementById("list");\nfor (let i = 1; i <= 3; i++) { const li = document.createElement("li"); li.textContent = `Eintrag ${i}`; list.appendChild(li); }',
      "javascript",
    ],
    [
      "Funktionen",
      "Funktionen bündeln wiederverwendbare Logik und können Parameter annehmen sowie Werte zurückgeben.",
      '<p id="out"></p>',
      "",
      'function add(a,b){ return a+b; }\ndocument.getElementById("out").textContent = add(2,3);',
      "javascript",
    ],
    [
      "Arrays",
      "Arrays speichern mehrere Werte in einer Reihenfolge. Mit Methoden wie map und filter kannst du daraus neue Daten gewinnen.",
      '<p id="out"></p>',
      "",
      'const numbers = [1, 2, 3];\nconst doubled = numbers.map(number => number * 2);\ndocument.getElementById("out").textContent = doubled;',
      "javascript",
    ],
    [
      "Objekte",
      "Objekte gruppieren zusammengehörige Eigenschaften unter sprechenden Schlüsselwörtern.",
      '<pre id="out"></pre>',
      "",
      'const user = { name: "Alex", level: 1 };\ndocument.getElementById("out").textContent = JSON.stringify(user,null,2);',
      "javascript",
    ],
    [
      "DOM",
      "Das Document Object Model bildet HTML als Baum ab. Mit querySelector kannst du Elemente auswählen und verändern.",
      '<button class="btn">Noch nichts</button>',
      "",
      'const button = document.querySelector(".btn");\nbutton.textContent = "Über JavaScript geändert";',
      "javascript",
    ],
    [
      "Events",
      "Events melden Aktionen wie Klicks. Mit addEventListener registrierst du eine Funktion, die darauf reagiert.",
      '<button id="eventBtn">Klick mich</button>\n<p id="eventOut">Warte auf einen Klick.</p>',
      "",
      'document.getElementById("eventBtn").addEventListener("click",()=>{ document.getElementById("eventOut").textContent="Event empfangen"; });',
      "javascript",
    ],
    [
      "APIs",
      "Browser-APIs stellen Funktionen für Aufgaben wie Fetch, Storage oder Zeitgeber bereit. Sie verbinden deine Anwendung mit ihrer Umgebung.",
      '<button id="apiBtn">Zeit anzeigen</button>\n<p id="apiOut"></p>',
      "",
      'document.getElementById("apiBtn").addEventListener("click",()=>{ document.getElementById("apiOut").textContent = new Date().toLocaleTimeString("de-DE"); });',
      "javascript",
    ],
  ],
};
const LESSON_TASKS = {
  html: [
    "Erstelle einen Absatz mit dem Text „Willkommen auf meiner Website.“.",
    "Nutze doctype, html, head und body. Setze den Seitentitel „Meine Seite“ und ergänze im body den Absatz „Willkommen.“.",
    "Erstelle eine h1-Überschrift mit dem Text „Mein Thema“.",
    "Schreibe einen Absatz „Ich lerne Webentwicklung.“. Hebe „Webentwicklung“ mit strong hervor und verwende em für „gerne“ in einem zweiten Satz.",
    "Erstelle eine h1-Überschrift „Meine Schritte“ und eine geordnete Liste mit genau vier li-Einträgen.",
    "Erstelle einen Link zu https://example.com mit dem sichtbaren Text „Mein Lieblingslink“.",
    "Nutze das Beispielbild und ändere den alt-Text zu „Ein rotes Fahrrad“.",
    'Erstelle ein Formular mit Label „Name“, verbundenem Textfeld id="name" und einem Button „Senden“.',
    "Erstelle nav mit einem Link „Start“, main mit section und h1 „Inhalt“ sowie footer mit „Ende“.",
  ],
  css: [
    "Ändere die Textfarbe in p.demo zu grün und übernimm die fette Schriftstärke aus dem Beispiel.",
    "Färbe nur .note rot. Der zweite Absatz ohne diese Klasse bleibt unverändert.",
    "Setze die Textfarbe von .color-title auf orange.",
    "Gib .box 20px Innenabstand, einen 2px durchgezogenen Rahmen und 16px Außenabstand.",
    "Ordne .menu mit display:flex an und setze den Abstand auf 24px.",
    "Ordne .grid in zwei gleich breite Spalten mit 12px Abstand an.",
    "Gib .responsive-card max-width:32rem und 20px Innenabstand. Unter 500px soll der Innenabstand 10px sein.",
    "Lass .animated beim Darüberfahren 4px nach oben rücken. Nutze dafür transform und eine Transition von 0.2s.",
  ],
  javascript: [
    "Wenn der Button geklickt wird, ändere die Überschrift zu „Du hast geklickt!“.",
    'Lege const name = "Mia" an und zeige „Hallo Mia“ mit einem Template-String in id="out" an.',
    'Lege const age = 15 und const isLearning = true an. Gib beide Werte mit einem Template-String in id="out" aus.',
    'Lege points = 8 an. Nutze if/else: ab 10 Punkten „Ziel erreicht“, sonst „Noch ein Versuch“ in id="out".',
    "Erzeuge mit einer for-Schleife fünf li-Elemente mit den Texten 1 bis 5 und füge sie in die Liste list ein.",
    'Schreibe greet(name), die mit einem Template-String „Hallo “ plus den Namen zurückgibt. Zeige greet("Mia") in id="out" an.',
    'Lege das Array [2, 3, 4] an. Nutze map(), um jeden Wert zu verdoppeln, und gib das Ergebnis in id="out" aus.',
    'Erstelle user mit name "Alex" und favorite "HTML". Gib das Objekt mit JSON.stringify in id="out" aus.',
    'Wähle h1 mit querySelector("h1") und ändere den Text zu „DOM geändert“.',
    "Wenn eventBtn geklickt wird, soll in eventOut „Klick registriert“ erscheinen.",
    'Wenn apiBtn geklickt wird, zeige die Uhrzeit mit toLocaleTimeString("de-DE") in apiOut an.',
  ],
};
const LESSON_TASK_CHECKS = {
  html: [
    [
      {
        language: "html",
        pattern: /<p\b[^>]*>\s*Willkommen auf meiner Website\.\s*<\/p>/i,
        label: "Absatz Willkommen auf meiner Website.",
      },
    ],
    [
      {
        language: "html",
        pattern: /<!doctype\s+html>/i,
        label: "DOCTYPE-Deklaration",
      },
      {
        language: "html",
        pattern: /<title>\s*Meine Seite\s*<\/title>/i,
        label: "Seitentitel Meine Seite",
      },
      {
        language: "html",
        pattern: /<body\b[^>]*>[\s\S]*<\/body>/i,
        label: "body-Bereich",
      },
      {
        language: "html",
        pattern: /<p\b[^>]*>\s*Willkommen\.\s*<\/p>/i,
        label: "Absatz Willkommen.",
      },
    ],
    [
      {
        language: "html",
        pattern: /<h1\b[^>]*>\s*Mein Thema\s*<\/h1>/i,
        label: "h1 Mein Thema",
      },
    ],
    [
      {
        language: "html",
        pattern:
          /<p\b[^>]*>[\s\S]*Ich lerne[\s\S]*<strong\b[^>]*>\s*Webentwicklung\s*<\/strong>[\s\S]*<\/p>/i,
        label: "Webentwicklung in strong",
      },
      {
        language: "html",
        pattern: /<em\b[^>]*>\s*gerne\s*<\/em>/i,
        label: "gerne in em",
      },
    ],
    [
      {
        language: "html",
        pattern: /<h[1-6]\b[^>]*>\s*Meine Schritte\s*<\/h[1-6]>/i,
        label: "Überschrift Meine Schritte",
      },
      {
        language: "html",
        pattern: /<ol\b[^>]*>(?:\s*<li\b[^>]*>[\s\S]*?<\/li>\s*){4}<\/ol>/i,
        label: "geordnete Liste mit vier Einträgen",
      },
    ],
    [
      {
        language: "html",
        pattern:
          /<a\b(?=[^>]*href\s*=\s*["']https:\/\/example\.com["'])[^>]*>\s*Mein Lieblingslink\s*<\/a>/i,
        label: "Link Mein Lieblingslink zu example.com",
      },
    ],
    [
      {
        language: "html",
        pattern:
          /<img\b(?=[^>]*src\s*=\s*["']https:\/\/picsum\.photos\/280\/120["'])(?=[^>]*alt\s*=\s*["']Ein rotes Fahrrad["'])[^>]*>/i,
        label: "Bild mit Beispielquelle und passendem alt-Text",
      },
    ],
    [
      {
        language: "html",
        pattern:
          /<form\b[^>]*>[\s\S]*<label\b(?=[^>]*for\s*=\s*["']name["'])[^>]*>\s*Name\s*<\/label>[\s\S]*<input\b(?=[^>]*id\s*=\s*["']name["'])(?=[^>]*type\s*=\s*["']text["'])[^>]*>[\s\S]*<button\b[^>]*>\s*Senden\s*<\/button>[\s\S]*<\/form>/i,
        label: "Formular mit verbundenem Name-Feld und Senden-Button",
      },
      {
        language: "html",
        pattern:
          /<label\b(?=[^>]*for\s*=\s*["']name["'])[^>]*>\s*Name\s*<\/label>/i,
        label: "Label Name mit for=name",
      },
      {
        language: "html",
        pattern:
          /<input\b(?=[^>]*id\s*=\s*["']name["'])(?=[^>]*type\s*=\s*["']text["'])[^>]*>/i,
        label: "Textfeld mit id=name",
      },
      {
        language: "html",
        pattern: /<button\b[^>]*>\s*Senden\s*<\/button>/i,
        label: "Button Senden",
      },
    ],
    [
      {
        language: "html",
        pattern:
          /<nav\b[^>]*>[\s\S]*<a\b(?=[^>]*href)[^>]*>\s*Start\s*<\/a>[\s\S]*<\/nav>/i,
        label: "nav-Bereich",
      },
      {
        language: "html",
        pattern:
          /<main\b[^>]*>[\s\S]*<section\b[^>]*>[\s\S]*<h1\b[^>]*>\s*Inhalt\s*<\/h1>[\s\S]*<\/section>[\s\S]*<\/main>/i,
        label: "section mit h1 Inhalt innerhalb von main",
      },
      {
        language: "html",
        pattern: /<footer\b[^>]*>[\s\S]*Ende[\s\S]*<\/footer>/i,
        label: "footer-Bereich",
      },
    ],
  ],
  css: [
    [
      {
        language: "css",
        pattern: /p\.demo\s*\{[^}]*color\s*:\s*green\s*;?[^}]*\}/i,
        label: "p.demo mit color: green",
      },
      {
        language: "css",
        pattern:
          /p\.demo\s*\{[^}]*font-weight\s*:\s*(bold|700|600)\s*;?[^}]*\}/i,
        label: "p.demo mit fetter Schrift",
      },
    ],
    [
      {
        language: "css",
        pattern: /\.note\s*\{[^}]*color\s*:\s*red\s*;?[^}]*\}/i,
        label: ".note mit color: red",
      },
    ],
    [
      {
        language: "css",
        pattern: /\.color-title\s*\{[^}]*color\s*:\s*orange\s*;?[^}]*\}/i,
        label: ".color-title mit color: orange",
      },
    ],
    [
      {
        language: "css",
        pattern: /\.box\s*\{[^}]*padding\s*:\s*20px\s*;?[^}]*\}/i,
        label: ".box mit 20px padding",
      },
      {
        language: "css",
        pattern: /\.box\s*\{[^}]*border\s*:\s*2px\s+solid\b[^}]*\}/i,
        label: ".box mit 2px solid border",
      },
      {
        language: "css",
        pattern: /\.box\s*\{[^}]*margin\s*:\s*16px\s*;?[^}]*\}/i,
        label: ".box mit 16px margin",
      },
    ],
    [
      {
        language: "css",
        pattern: /\.menu\s*\{[^}]*display\s*:\s*flex\s*;?[^}]*\}/i,
        label: ".menu mit display:flex",
      },
      {
        language: "css",
        pattern: /\.menu\s*\{[^}]*gap\s*:\s*24px\s*;?[^}]*\}/i,
        label: ".menu mit gap:24px",
      },
    ],
    [
      {
        language: "css",
        pattern: /\.grid\s*\{[^}]*display\s*:\s*grid\s*;?[^}]*\}/i,
        label: ".grid mit display:grid",
      },
      {
        language: "css",
        pattern:
          /\.grid\s*\{[^}]*grid-template-columns\s*:\s*repeat\(\s*2\s*,\s*1fr\s*\)\s*;?[^}]*\}/i,
        label: ".grid mit zwei gleichen Spalten",
      },
      {
        language: "css",
        pattern: /\.grid\s*\{[^}]*gap\s*:\s*12px\s*;?[^}]*\}/i,
        label: ".grid mit gap:12px",
      },
    ],
    [
      {
        language: "css",
        pattern:
          /\.responsive-card\s*\{[^}]*max-width\s*:\s*32rem\s*;?[^}]*\}/i,
        label: ".responsive-card mit max-width:32rem",
      },
      {
        language: "css",
        pattern: /\.responsive-card\s*\{[^}]*padding\s*:\s*20px\s*;?[^}]*\}/i,
        label: ".responsive-card mit padding:20px",
      },
      {
        language: "css",
        pattern:
          /@media\s*\(\s*max-width\s*:\s*500px\s*\)\s*\{[\s\S]*?\.responsive-card\s*\{[^}]*padding\s*:\s*10px/i,
        label: "padding:10px unter 500px",
      },
    ],
    [
      {
        language: "css",
        pattern:
          /\.animated\s*\{[^}]*transition\s*:\s*transform\s+0?\.2s\s+ease\s*;?[^}]*\}/i,
        label: ".animated mit transform-Transition von 0.2s",
      },
      {
        language: "css",
        pattern:
          /\.animated:hover\s*\{[^}]*transform\s*:\s*translateY\(\s*-4px\s*\)\s*;?[^}]*\}/i,
        label: "Hover-Bewegung um 4px nach oben",
      },
    ],
  ],
  javascript: [
    [
      {
        language: "javascript",
        pattern: /addEventListener\(\s*["']click["']/i,
        label: "Click-Event",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']btn["']\s*\)\.addEventListener\(/i,
        label: "Click-Event am Button btn",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']btn["']\s*\)\.addEventListener\(/i,
        label: "Click-Event am Button btn",
      },
      {
        language: "javascript",
        pattern:
          /getElementById\(\s*["']title["']\s*\)\.textContent\s*=\s*["']Du hast geklickt!["']/i,
        label: "Überschrift wird auf den geforderten Text gesetzt",
      },
    ],
    [
      {
        language: "javascript",
        pattern: /const\s+name\s*=\s*["']Mia["']/i,
        label: "const name mit dem Wert Mia",
      },
      {
        language: "javascript",
        pattern:
          /getElementById\(\s*["']out["']\s*\)\.textContent\s*=\s*`Hallo\s+\$\{name\}`/i,
        label: "Template-String Hallo Mia im Element out",
      },
    ],
    [
      {
        language: "javascript",
        pattern: /const\s+age\s*=\s*15\s*;/i,
        label: "const age = 15",
      },
      {
        language: "javascript",
        pattern: /const\s+isLearning\s*=\s*true\s*;/i,
        label: "const isLearning = true",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']out["']\s*\)\.textContent\s*=/i,
        label: "Ausgabe im Element out",
      },
      {
        language: "javascript",
        pattern: /\$\{\s*age\s*\}/i,
        label: "Ausgabe des Alters per Template-String",
      },
      {
        language: "javascript",
        pattern: /\$\{\s*isLearning\s*\}/i,
        label: "Ausgabe des Wahrheitswerts per Template-String",
      },
      {
        language: "javascript",
        pattern: /\$\{\s*age\s*\}/i,
        label: "Ausgabe des Alters",
      },
      {
        language: "javascript",
        pattern: /\$\{\s*isLearning\s*\}/i,
        label: "Ausgabe des Wahrheitswerts",
      },
    ],
    [
      {
        language: "javascript",
        pattern: /const\s+points\s*=\s*8\s*;/i,
        label: "const points = 8",
      },
      {
        language: "javascript",
        pattern: /if\s*\(\s*points\s*>=\s*10\s*\)/i,
        label: "if-Prüfung auf mindestens 10 Punkte",
      },
      { language: "javascript", pattern: /\belse\b/i, label: "else-Zweig" },
      {
        language: "javascript",
        pattern: /Ziel erreicht/i,
        label: "Meldung Ziel erreicht",
      },
      {
        language: "javascript",
        pattern: /Noch ein Versuch/i,
        label: "Meldung Noch ein Versuch",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']out["']\s*\)\.textContent\s*=/i,
        label: "Ausgabe im Element out",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']out["']\s*\)\.textContent\s*=/i,
        label: "Ausgabe im Element out",
      },
    ],
    [
      {
        language: "javascript",
        pattern:
          /for\s*\(\s*let\s+i\s*=\s*1\s*;\s*i\s*<=\s*5\s*;\s*i\+\+\s*\)/i,
        label: "for-Schleife von 1 bis 5",
      },
      {
        language: "javascript",
        pattern: /createElement\(\s*["']li["']\s*\)/i,
        label: "Erzeugung von li-Elementen",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']list["']\s*\)\.appendChild\(/i,
        label: "Hinzufügen zur Liste",
      },
    ],
    [
      {
        language: "javascript",
        pattern: /function\s+greet\s*\(\s*name\s*\)/i,
        label: "Funktion greet mit Parameter name",
      },
      {
        language: "javascript",
        pattern: /return\s+`Hallo\s+\$\{name\}`/i,
        label: "Rückgabe der persönlichen Begrüßung",
      },
      {
        language: "javascript",
        pattern: /greet\(\s*["']Mia["']\s*\)/i,
        label: "Aufruf mit Mia",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']out["']\s*\)\.textContent\s*=/i,
        label: "Ausgabe im Element out",
      },
    ],
    [
      {
        language: "javascript",
        pattern: /const\s+numbers\s*=\s*\[\s*2\s*,\s*3\s*,\s*4\s*\]/i,
        label: "Array mit den Zahlen 2, 3 und 4",
      },
      {
        language: "javascript",
        pattern: /\.map\(\s*number\s*=>\s*number\s*\*\s*2\s*\)/i,
        label: "map verdoppelt jeden Wert",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']out["']\s*\)\.textContent\s*=/i,
        label: "Ausgabe im Element out",
      },
    ],
    [
      {
        language: "javascript",
        pattern:
          /const\s+user\s*=\s*\{[^}]*name\s*:\s*["']Alex["'][^}]*favorite\s*:\s*["']HTML["']/i,
        label: "Objekt user mit name Alex und favorite HTML",
      },
      {
        language: "javascript",
        pattern: /JSON\.stringify\(\s*user\b/i,
        label: "Ausgabe mit JSON.stringify",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']out["']\s*\)\.textContent\s*=/i,
        label: "Ausgabe im Element out",
      },
    ],
    [
      {
        language: "javascript",
        pattern: /querySelector\(\s*["']h1["']\s*\)/i,
        label: "Auswahl der h1 mit querySelector",
      },
      {
        language: "javascript",
        pattern: /\.textContent\s*=\s*["']DOM geändert["']/i,
        label: "Änderung des Überschriftentextes",
      },
    ],
    [
      {
        language: "javascript",
        pattern:
          /getElementById\(\s*["']eventBtn["']\s*\)\.addEventListener\(\s*["']click["']/i,
        label: "Click-Event an eventBtn",
      },
      {
        language: "javascript",
        pattern:
          /getElementById\(\s*["']eventOut["']\s*\)\.textContent\s*=\s*["']Klick registriert["']/i,
        label: "Ausgabe Klick registriert",
      },
    ],
    [
      {
        language: "javascript",
        pattern:
          /getElementById\(\s*["']apiBtn["']\s*\)\.addEventListener\(\s*["']click["']/i,
        label: "Click-Event an apiBtn",
      },
      {
        language: "javascript",
        pattern: /toLocaleTimeString\(\s*["']de-DE["']\s*\)/i,
        label: "Formatierung mit de-DE",
      },
      {
        language: "javascript",
        pattern: /getElementById\(\s*["']apiOut["']\s*\)\.textContent\s*=/i,
        label: "Ausgabe im Element apiOut",
      },
    ],
  ],
};
const SLUGS = {
  einführung: "einfuehrung",
  dokumentstruktur: "dokumentstruktur",
  überschriften: "ueberschriften",
  texte: "texte",
  links: "links",
  bilder: "bilder",
  listen: "listen",
  formulare: "formulare",
  "semantisches-html": "semantisches-html",
  selektoren: "selektoren",
  farben: "farben",
  "box-model": "box-model",
  flexbox: "flexbox",
  grid: "grid",
  "responsive-design": "responsive-design",
  animationen: "animationen",
  variablen: "variablen",
  datentypen: "datentypen",
  bedingungen: "bedingungen",
  schleifen: "schleifen",
  funktionen: "funktionen",
  arrays: "arrays",
  objekte: "objekte",
  dom: "dom",
  events: "events",
  apis: "apis",
  javascript: "javascript",
};
const slugify = (name) =>
  SLUGS[name.toLowerCase()] ||
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const BADGES = [
  ["first-lesson", "Erste Lektion"],
  ["html", "HTML-Grundlagen"],
  ["css", "CSS geschafft"],
  ["js", "JavaScript gestartet"],
  ["ten", "Erste 10 Aufgaben"],
  ["streak", "7 Tage Lernserie"],
];
const defaults = {
  html: 0,
  css: 0,
  javascript: 0,
  completedLessons: [],
  completedExercises: [],
  completedProjects: [],
  startedProjects: [],
  streak: 0,
  lastLesson: "",
};

let state =
  JSON.parse(localStorage.getItem("codewerkstatt-progress") || "null") ||
  JSON.parse(JSON.stringify(defaults));

state.completedLessons = Array.isArray(state.completedLessons)
  ? [...new Set(state.completedLessons.filter(Boolean))]
  : [];
state.completedExercises = Array.isArray(state.completedExercises)
  ? [...new Set(state.completedExercises.filter(Boolean))]
  : [];
state.completedProjects = Array.isArray(state.completedProjects)
  ? [...new Set(state.completedProjects.filter(Boolean))]
  : [];
state.startedProjects = Array.isArray(state.startedProjects)
  ? [...new Set(state.startedProjects.filter(Boolean))]
  : [];
state.html = Number.isFinite(Number(state.html)) ? Number(state.html) : 0;
state.css = Number.isFinite(Number(state.css)) ? Number(state.css) : 0;
state.javascript = Number.isFinite(Number(state.javascript))
  ? Number(state.javascript)
  : 0;
state.streak = Number.isFinite(Number(state.streak)) ? Number(state.streak) : 0;

save();

function save() {
  localStorage.setItem("codewerkstatt-progress", JSON.stringify(state));
}

let darkMode = localStorage.getItem("codewerkstatt-theme") !== "light";
function applyTheme() {
  document.documentElement.dataset.theme = darkMode ? "dark" : "light";
}
applyTheme();

function link(name, path) {
  const hash = String(path).startsWith("#") ? String(path) : `#${path}`;
  return `<a class="btn small" href="${hash}">${name} →</a>`;
}

function bars(value) {
  return `<div class="bar"><span style="width:${value}%"></span></div>`;
}

function shell(html) {
  document.getElementById("app").innerHTML = html;

  document.querySelectorAll(".sidebar a").forEach((anchor) => {
    anchor.addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("open");
    });
  });
}
function home() {
  shell(
    `<section class="hero"><div><div class="eyebrow">CODEWERKSTATT · HTML · CSS · JAVASCRIPT</div><h1>Lerne Webentwicklung.<br><span>Baue echte Websites.</span></h1><p>Lerne HTML, CSS und JavaScript Schritt für Schritt – mit Erklärungen, Übungen und echten Projekten.</p><div class="actions">${link("Jetzt anfangen", "#/lernen")}${link("Kurse ansehen", "#/lernen")}</div></div><div class="code-hero"><div class="filebar">index.html <span>● ● ●</span></div><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n  &lt;title&gt;Meine Website&lt;/title&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;h1&gt;Hello World!&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><div class="status">main · UTF-8 · HTML</div></div></section><section class="section"><div class="section-head"><div><div class="eyebrow">DEIN LERNWEG</div><h2>Wähle deinen nächsten Schritt.</h2></div><a class="text" href="#/lernen">Alle Lernbereiche →</a></div><div class="courses">${Object.entries(
      COURSES,
    )
      .map(([k, c]) => courseCard(k, c))
      .join("")}</div></section>`,
  );
}
function courseCard(k, c) {
  return `<article class="card"><div class="row"><div><div class="course-kicker">${c.title}</div><h3>${c.desc}</h3></div><span>${c.lessons.length} Lektionen</span></div><div class="meta"><span>◷ ${c.time}</span><strong>${state[k]}%</strong></div>${bars(state[k])}${link("Fortsetzen", "#/lernen/" + k)}</article>`;
}
function learn(k = "html") {
  const c = COURSES[k] || COURSES.html;
  shell(
    `<div class="learn-layout"><aside class="lesson-list"><div class="course-kicker">${c.title}</div><h3>${c.desc}</h3>${bars(state[k] || 0)}${c.lessons.map((x, i) => `<a href="#/lernen/${k}/${i}" class="lesson ${state.completedLessons.includes(k + "/" + x) ? "done" : ""}"><span>${state.completedLessons.includes(k + "/" + x) ? "✓" : "○"}</span>${x}</a>`).join("")}</aside><section class="content"><div class="eyebrow">${c.title} · LERNEN</div><h1>Schritt für Schritt zur ersten eigenen Seite.</h1><p class="lead">Kurze Lektionen, direkt ausprobieren und anschließend testen.</p><div class="panel next"><div><div class="eyebrow">WEITERLERNEN</div><h2>${c.lessons[0]}</h2><p>${c.desc}</p></div>${link("Lektion öffnen", "#/lernen/" + k + "/0")}</div></section></div>`,
  );
}
function lesson(k = "html", i = 0) {
  const c = COURSES[k];
  if (!c) return notfound();
  if (!Number.isInteger(i) || i < 0 || i >= c.lessons.length) return notfound();
  const content = (LESSON_CONTENT[k] || [])[i];
  if (!content) return notfound();
  const [title, explanation, htmlCode, cssCode, jsCode] = content;
  const task = LESSON_TASKS[k][i];
  const example = {
    html: htmlCode,
    css: k === "html" ? "" : cssCode || "",
    javascript: k === "html" ? "" : jsCode || "",
  };
  const exampleLanguages = ["html", "css", "javascript"].filter((language) =>
    example[language].trim(),
  );
  const code = {
    html: k === "html" ? "" : htmlCode,
    css: "",
    javascript: "",
  };
  shell(
    `<section class="content lesson-page"><div class="crumb"><a href="#/lernen/${k}">${c.title}</a> / ${escape(c.lessons[i])}</div><div class="eyebrow">${c.title} · ${String(i + 1).padStart(2, "0")}</div><h1>${escape(title)}</h1><p class="lead">${escape(explanation)}</p><section class="example-code" aria-label="Beispielcode"><div class="tabs"><span class="example-code-label">BEISPIELCODE</span>${exampleLanguages
      .map(
        (language, index) =>
          `<button type="button" data-example-tab="${language}" class="${index === 0 ? "active" : ""}">${language.toUpperCase()}</button>`,
      )
      .join("")}</div>${exampleLanguages
      .map(
        (language, index) =>
          `<pre data-example-panel="${language}" class="${index === 0 ? "" : "hidden"}"><code>${escape(example[language])}</code></pre>`,
      )
      .join(
        "",
      )}</section><section class="lesson-task panel"><div class="eyebrow">DEIN AUFTRAG</div><p>${escape(task)}</p></section><section class="lesson-coding"><div class="eyebrow">DEIN CODE</div><div class="play"><div class="editor-preview"><div class="editor"><div class="tabs"><button data-tab="html">HTML</button><button data-tab="css">CSS</button><button data-tab="javascript">JavaScript</button></div><textarea id="code-html" aria-label="Dein HTML-Code">${escape(code.html)}</textarea><textarea id="code-css" class="hidden" aria-label="Dein CSS-Code">${escape(code.css)}</textarea><textarea id="code-javascript" class="hidden" aria-label="Dein JavaScript-Code">${escape(code.javascript)}</textarea></div><div><div class="panel-head">Vorschau <span>●</span></div><iframe id="preview" sandbox="allow-scripts"></iframe><div id="run-error"></div></div></div><div class="actions"><button class="btn primary" id="run">▶ Ausführen</button><button class="btn" id="reset">↻ Zurücksetzen</button><button class="btn" id="show-solution" type="button">Lösung</button></div><div id="task-result" class="hidden" aria-live="polite"></div></div></section><div class="finish"><button class="btn primary large" id="complete">Lektion abschließen · ${i < c.lessons.length - 1 ? "Nächste Lektion →" : "Fertig ✓"}</button></div></section>`,
  );
  document.querySelectorAll("[data-example-tab]").forEach((button) => {
    button.onclick = () => {
      const language = button.dataset.exampleTab;
      document.querySelectorAll("[data-example-tab]").forEach((tab) => {
        tab.classList.toggle("active", tab === button);
      });
      document.querySelectorAll("[data-example-panel]").forEach((panel) => {
        panel.classList.toggle(
          "hidden",
          panel.dataset.examplePanel !== language,
        );
      });
    };
  });
  bindLesson(code, k, i);
}
function bindLesson(code, k, i) {
  const get = (lang) => document.getElementById("code-" + lang).value;
  const render = () => {
    const err = document.getElementById("run-error");
    if (err) err.innerHTML = "";
    const safeJS = `try{${get("javascript")}}catch(e){parent.postMessage({source:'codewerkstatt',error:String(e.message||e)},'*')}`;
    const doc = `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;padding:24px}button{cursor:pointer}${get("css")}</style></head><body>${get("html")}<script>${safeJS}<\/script></body></html>`;
    const frame = document.getElementById("preview");
    frame.srcdoc = doc;
  };
  const resetTabs = () =>
    document.querySelectorAll("[data-tab]").forEach((b, n) => {
      b.classList.toggle("active", n === 0);
    });
  document.querySelectorAll("[data-tab]").forEach(
    (b) =>
      (b.onclick = () => {
        ["html", "css", "javascript"].forEach((t) =>
          document
            .getElementById("code-" + t)
            .classList.toggle("hidden", t !== b.dataset.tab),
        );
        document
          .querySelectorAll("[data-tab]")
          .forEach((x) => x.classList.toggle("active", x === b));
      }),
  );
  resetTabs();
  document.getElementById("run").onclick = render;
  document.getElementById("reset").onclick = () => {
    document.getElementById("code-html").value = code.html;
    document.getElementById("code-css").value = code.css;
    document.getElementById("code-javascript").value = code.javascript;
    document.getElementById("task-result").classList.add("hidden");
    document.getElementById("task-result").innerHTML = "";
    document.getElementById("show-solution").textContent = "Lösung";
    render();
  };
  document.getElementById("show-solution").onclick = () => {
    const result = document.getElementById("task-result");
    const button = document.getElementById("show-solution");
    if (!result.classList.contains("hidden")) {
      result.classList.add("hidden");
      result.innerHTML = "";
      button.textContent = "Lösung";
      return;
    }
    const language = k === "html" ? "HTML" : k.toUpperCase();
    result.innerHTML = `<section class="task-solution"><div class="eyebrow">MUSTERLÖSUNG · ${language}</div><pre><code>${escape(LESSON_SOLUTIONS[k][i])}</code></pre></section>`;
    result.classList.remove("hidden");
    button.textContent = "Lösung ausblenden";
  };
  window.addEventListener("message", (e) => {
    if (e.data?.source === "codewerkstatt") {
      const box = document.getElementById("run-error");
      if (box)
        box.innerHTML = `<div class="result bad"><strong>JavaScript-Fehler</strong><span>Dein Code konnte nicht ausgeführt werden: ${escape(e.data.error)}</span></div>`;
    }
  });
  document.getElementById("complete").onclick = () => {
    const key = k + "/" + COURSES[k].lessons[i];
    if (!state.completedLessons.includes(key)) {
      state.completedLessons.push(key);
      state[k] = Math.min(
        100,
        (state[k] || 0) + Math.round(100 / COURSES[k].lessons.length),
      );
      state.lastLesson = key;
      save();
    }
    if (i < COURSES[k].lessons.length - 1)
      location.hash = `#/lernen/${k}/${slugify(COURSES[k].lessons[i + 1])}`;
    else location.hash = `#/lernen/${k}`;
  };
  render();
}
function exercises() {
  let tech = "Alle";
  let diff = "Alle";
  let view = "tasks";
  let activeQuiz = null;
  let questionIndex = 0;
  let selectedAnswer = null;
  let answered = false;
  let score = 0;

  const renderQuiz = () => {
    const quiz = QUIZZES[activeQuiz];
    if (questionIndex >= quiz.questions.length) {
      return `<div class="quiz-panel panel"><div class="eyebrow">QUIZ BEENDET</div><h2>${escape(quiz.tech)} · ${escape(quiz.difficulty)}</h2><p class="quiz-score">${score} <span>von ${quiz.questions.length} richtig</span></p><p>${score === quiz.questions.length ? "Perfekt, alle Antworten richtig." : score >= 2 ? "Gut gemacht, du hast das meiste gewusst." : "Wiederhole die Themen und probiere es noch einmal."}</p><div class="quiz-actions"><button class="btn" id="quiz-retry" type="button">Nochmal spielen</button><button class="btn primary" id="quiz-back" type="button">Zur Quiz-Auswahl</button></div></div>`;
    }
    const question = quiz.questions[questionIndex];
    return `<div class="quiz-panel panel"><div class="quiz-heading"><div><div class="eyebrow">${escape(quiz.tech)} · ${escape(quiz.difficulty)}</div><h2>Frage ${questionIndex + 1} von ${quiz.questions.length}</h2></div><button class="btn small" id="quiz-back" type="button">Zurück</button></div><div class="bar quiz-progress"><span style="width:${((questionIndex + 1) / quiz.questions.length) * 100}%"></span></div><h3 class="quiz-question">${escape(question.question)}</h3><div class="quiz-options">${question.options
      .map(
        (option, index) =>
          `<button class="quiz-option ${selectedAnswer === index ? "selected" : ""} ${answered && index === question.answer ? "correct" : ""} ${answered && selectedAnswer === index && index !== question.answer ? "incorrect" : ""}" type="button" data-answer="${index}" ${answered ? "disabled" : ""}><span>${String.fromCharCode(65 + index)}</span>${escape(option)}</button>`,
      )
      .join(
        "",
      )}</div>${answered ? `<div class="result ${selectedAnswer === question.answer ? "ok" : "bad"}"><strong>${selectedAnswer === question.answer ? "Richtig!" : "Noch nicht richtig."}</strong><span>${escape(question.explanation)}</span></div>` : ""}<div class="quiz-actions"><button class="btn primary" id="quiz-submit" type="button" ${!answered && selectedAnswer === null ? "disabled" : ""}>${answered ? (questionIndex === quiz.questions.length - 1 ? "Ergebnis ansehen" : "Nächste Frage") : "Antwort prüfen"}</button></div></div>`;
  };

  const render = () => {
    const tasks = EX.filter(
      (exercise) =>
        (tech === "Alle" || exercise[0] === tech) &&
        (diff === "Alle" || exercise[1] === diff),
    );
    const quizzes = QUIZZES.map((quiz, index) => ({ ...quiz, index })).filter(
      (quiz) =>
        (tech === "Alle" || quiz.tech === tech) &&
        (diff === "Alle" || quiz.difficulty === diff),
    );
    let content;
    if (activeQuiz !== null) {
      content = renderQuiz();
    } else if (view === "tasks") {
      content = `<div class="list">${
        tasks
          .map(
            (exercise) =>
              `<article class="card ex"><div><span class="tag">${escape(exercise[0])}</span><span class="tag">${escape(exercise[1])}</span><h3>${escape(exercise[2])}</h3><p>${escape(exercise[3])}</p></div><div>${state.completedExercises.includes(exercise[2]) ? '<span class="success">✓ Gelöst</span>' : ""}<a class="btn small" href="#/aufgabe/${EX.indexOf(exercise)}">Aufgabe öffnen →</a></div></article>`,
          )
          .join("") ||
        '<p class="empty-list">Keine Aufgaben für diese Auswahl.</p>'
      }</div>`;
    } else {
      content = `<div class="quiz-grid">${
        quizzes
          .map(
            (quiz) =>
              `<article class="card quiz-card"><div><span class="tag">${escape(quiz.tech)}</span><span class="tag">${escape(quiz.difficulty)}</span><h3>${escape(quiz.tech)}-Quiz</h3><p>${quiz.questions.length} Fragen · Multiple Choice</p></div><button class="btn small" type="button" data-start-quiz="${quiz.index}">Quiz starten →</button></article>`,
          )
          .join("") ||
        '<p class="empty-list">Keine Quizze für diese Auswahl.</p>'
      }</div>`;
    }

    shell(
      `<section class="content"><div class="eyebrow">WERKSTATT · 15 AUFGABEN · 9 QUIZZE</div><h1>Übe und teste dein Wissen.</h1><p class="lead">Löse praktische Aufgaben oder prüfe dein Wissen mit Quizzen zu HTML, CSS und JavaScript.</p><div class="exercise-tabs" role="tablist" aria-label="Übungsmodus"><button class="exercise-tab ${view === "tasks" && activeQuiz === null ? "active" : ""}" type="button" data-view="tasks" role="tab" aria-selected="${view === "tasks" && activeQuiz === null}">Aufgaben</button><button class="exercise-tab ${view === "quizzes" ? "active" : ""}" type="button" data-view="quizzes" role="tab" aria-selected="${view === "quizzes"}">Quizze</button></div><div class="filters"><select id="tech" aria-label="Technologie filtern">${["Alle", "HTML", "CSS", "JavaScript"].map((option) => `<option ${tech === option ? "selected" : ""}>${option}</option>`).join("")}</select><select id="diff" aria-label="Schwierigkeit filtern">${["Alle", "Anfänger", "Fortgeschritten", "Profi"].map((option) => `<option ${diff === option ? "selected" : ""}>${option}</option>`).join("")}</select></div>${content}</section>`,
    );

    document.getElementById("tech").onchange = (event) => {
      tech = event.target.value;
      render();
    };
    document.getElementById("diff").onchange = (event) => {
      diff = event.target.value;
      render();
    };
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.onclick = () => {
        view = button.dataset.view;
        activeQuiz = null;
        render();
      };
    });
    document.querySelectorAll("[data-start-quiz]").forEach((button) => {
      button.onclick = () => {
        activeQuiz = Number(button.dataset.startQuiz);
        questionIndex = 0;
        selectedAnswer = null;
        answered = false;
        score = 0;
        render();
      };
    });
    document.querySelectorAll("[data-answer]").forEach((button) => {
      button.onclick = () => {
        selectedAnswer = Number(button.dataset.answer);
        render();
      };
    });
    document.getElementById("quiz-back")?.addEventListener("click", () => {
      activeQuiz = null;
      view = "quizzes";
      render();
    });
    document.getElementById("quiz-retry")?.addEventListener("click", () => {
      questionIndex = 0;
      selectedAnswer = null;
      answered = false;
      score = 0;
      render();
    });
    document.getElementById("quiz-submit")?.addEventListener("click", () => {
      const question = QUIZZES[activeQuiz].questions[questionIndex];
      if (!answered) {
        answered = true;
        if (selectedAnswer === question.answer) score += 1;
      } else {
        questionIndex += 1;
        selectedAnswer = null;
        answered = false;
      }
      render();
    });
  };

  render();
}
function exerciseTask(index) {
  const exercise = EX[index];
  if (!exercise) return notfound();

  const [tech, difficulty, title, description] = exercise;
  let code;
  if (tech === "HTML") {
    code = {
      html: '<!doctype html>\n<html lang="de">\n<head>\n  <meta charset="utf-8">\n  <title>Meine Seite</title>\n</head>\n<body>\n  <main>\n    \n  </main>\n</body>\n</html>',
      css: "",
      javascript: "",
    };
  } else if (tech === "CSS") {
    code = {
      html: '<nav class="menu"><a href="#start">Start</a><a href="#themen">Themen</a><a href="#kontakt">Kontakt</a></nav>\n<main class="page">\n  <section class="card notice">\n    <h1>Willkommen</h1>\n    <p>Gestalte diesen Bereich passend zur Aufgabe.</p>\n  </section>\n</main>',
      css: "",
      javascript: "",
    };
  } else {
    code = {
      html: '<main>\n  <h1 id="title">Interaktive Seite</h1>\n  <button id="action">Aktion</button>\n  <p id="output"></p>\n  <input id="search" type="search" placeholder="Suchen">\n  <ul id="items"><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n</main>',
      css: "",
      javascript: "",
    };
  }
  const completed = state.completedExercises.includes(title);

  shell(
    `<section class="content lesson-page"><div class="crumb"><a href="#/uebungen">Aufgaben</a> / ${escape(tech)}</div><div class="eyebrow">${escape(tech)} · ${escape(difficulty)}</div><h1>${escape(title)}</h1><div class="panel exercise"><div class="eyebrow">DEIN AUFTRAG</div><p>${escape(description)}</p></div><div class="play"><div class="editor-preview"><div class="editor"><div class="tabs"><button data-task-tab="html">HTML</button><button data-task-tab="css">CSS</button><button data-task-tab="javascript">JavaScript</button></div><textarea id="task-code-html" aria-label="HTML-Code">${escape(code.html)}</textarea><textarea id="task-code-css" class="hidden" aria-label="CSS-Code">${escape(code.css)}</textarea><textarea id="task-code-javascript" class="hidden" aria-label="JavaScript-Code">${escape(code.javascript)}</textarea></div><div><div class="panel-head">Vorschau <span>●</span></div><iframe id="task-preview" sandbox="allow-scripts" title="Aufgabenvorschau"></iframe><div id="task-run-error"></div></div></div><div class="actions"><button class="btn primary" id="task-run" type="button">▶ Ausführen</button><button class="btn" id="task-reset" type="button">↻ Zurücksetzen</button><button class="btn" id="task-complete" type="button" ${completed ? "disabled" : ""}>${completed ? "✓ Aufgabe erledigt" : "Als erledigt markieren"}</button></div></div></section>`,
  );

  const getCode = (language) =>
    document.getElementById(`task-code-${language}`).value;
  const run = () => {
    document.getElementById("task-run-error").innerHTML = "";
    const safeJS = `try{${getCode("javascript")}}catch(e){parent.postMessage({source:'codewerkstatt-task',error:String(e.message||e)},'*')}`;
    const source = `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;padding:24px}button{cursor:pointer}${getCode("css")}</style></head><body>${getCode("html")}<script>${safeJS}<\/script></body></html>`;
    document.getElementById("task-preview").srcdoc = source;
  };

  document.querySelectorAll("[data-task-tab]").forEach((button) => {
    button.onclick = () => {
      ["html", "css", "javascript"].forEach((language) => {
        document
          .getElementById(`task-code-${language}`)
          .classList.toggle("hidden", language !== button.dataset.taskTab);
      });
      document.querySelectorAll("[data-task-tab]").forEach((tab) => {
        tab.classList.toggle("active", tab === button);
      });
    };
  });
  document.getElementById("task-run").onclick = run;
  document.getElementById("task-reset").onclick = () => {
    ["html", "css", "javascript"].forEach((language) => {
      document.getElementById(`task-code-${language}`).value = code[language];
    });
    run();
  };
  document.getElementById("task-complete").onclick = () => {
    if (!state.completedExercises.includes(title)) {
      state.completedExercises.push(title);
      save();
    }
    const completeButton = document.getElementById("task-complete");
    completeButton.disabled = true;
    completeButton.textContent = "✓ Aufgabe erledigt";
  };
  window.addEventListener("message", (event) => {
    if (event.data?.source !== "codewerkstatt-task") return;
    const errorBox = document.getElementById("task-run-error");
    if (errorBox)
      errorBox.innerHTML = `<div class="result bad"><strong>JavaScript-Fehler</strong><span>${escape(event.data.error)}</span></div>`;
  });
  run();
}
function projectDetail(slug) {
  const project = PROJECTS.find(([name]) => slugifyProject(name) === slug);

  if (!project) return notfound();

  const [name, description, difficulty, tech, time] = project;
  const started = state.startedProjects.includes(name);

  shell(
    `<section class="content"><div class="crumb"><a href="#/projekte">Projekte</a> / ${escape(name)}</div><div class="eyebrow">PROJEKT · ${difficulty}</div><h1>${escape(name)}</h1><p class="lead">${escape(description)}</p><div class="meta"><span>${escape(tech)}</span><span>${escape(time)}</span></div><div class="actions"><button class="btn primary start-project" data-name="${escape(name)}">${started ? "Projekt geöffnet" : "Projekt starten"} →</button><a class="btn" href="#/projekte">Zurück zur Übersicht</a></div><div class="panel explanation"><div class="eyebrow">TIPS</div><ul>${(
      PROJECT_TIPS[name] || [
        "Baue zuerst die Struktur auf und ergänze danach Styling und Interaktion.",
        "Teste dein Projekt nach jedem größeren Schritt mit kleinen Beispielen.",
      ]
    )
      .map((tip) => `<li>${escape(tip)}</li>`)
      .join(
        "",
      )}</ul></div><div class="panel explanation"><div class="eyebrow">ARBEITSPLAN</div><ol><li>Struktur in HTML aufbauen.</li><li>Layout mit CSS gestalten.</li><li>Interaktion mit JavaScript ergänzen.</li><li>Ergebnis testen und Fehler korrigieren.</li></ol></div></section>`,
  );

  document.querySelector(".start-project").onclick = () => {
    if (!state.startedProjects.includes(name)) {
      state.startedProjects = [...new Set([...state.startedProjects, name])];
      save();
    }
    document.querySelector(".start-project").textContent = "Projekt geöffnet →";
  };
}
function projects() {
  shell(
    `<section class="content"><div class="eyebrow">PROJEKTE · 08 BAUPLÄTZE</div><h1>Baue etwas, das über die Übung hinausgeht.</h1><p class="lead">Jedes Projekt verbindet mehrere Werkzeuge aus HTML, CSS und JavaScript.</p><div class="projects">${PROJECTS.map((p) => `<article class="card"><div class="project-num">${String(PROJECTS.indexOf(p) + 1).padStart(2, "0")}</div><span class="tag">${p[2]}</span><h3>${p[0]}</h3><p>${p[1]}</p><div class="meta"><span>${p[3]}</span><span>${p[4]}</span></div><button class="btn small start-project" data-name="${p[0]}" data-slug="${slugifyProject(p[0])}">${state.startedProjects.includes(p[0]) ? "Projekt geöffnet" : "Projekt starten"} →</button></article>`).join("")}</div></section>`,
  );
  document.querySelectorAll(".start-project").forEach((b) => {
    const name = String(b.dataset.name || "").trim();
    const started = !!name && state.startedProjects.includes(name);

    if (started) b.textContent = "Projekt geöffnet →";

    b.onclick = () => {
      if (!name) return;
      if (!state.startedProjects.includes(name)) {
        state.startedProjects = [...new Set([...state.startedProjects, name])];
        save();
      }
      const slug = b.dataset.slug || slugifyProject(name);
      location.hash = `#/projekte/${slug}`;
    };
  });
}
function progress() {
  shell(
    `<section class="content progress-page"><div class="eyebrow">FORTSCHRITT</div><h1>Dein Fortschritt</h1><p class="lead">Lernstand und Aktivitäten werden lokal auf diesem Gerät gespeichert.</p><div class="panel"><h2>DEIN LERNSTAND</h2>${Object.entries(
      COURSES,
    )
      .map(
        ([k, c]) =>
          `<div class="p-row"><div><span>${c.title}</span><strong>${state[k]}%</strong></div>${bars(state[k])}</div>`,
      )
      .join("")}</div><div class="stats">${[
      [state.completedLessons.length, "Abgeschlossene Lektionen"],
      [state.completedExercises.length, "Gelöste Aufgaben"],
      [state.completedProjects.length, "Projekte"],
      [state.streak, "Tage Lernserie"],
    ]
      .map(
        (s) =>
          `<div class="card stat"><strong>${s[0]}</strong><span>${s[1]}</span></div>`,
      )
      .join(
        "",
      )}</div><div class="panel"><div class="eyebrow">BADGES</div><div class="badges">${BADGES.map(([id, n]) => `<span class="badge ${unlocked(id) ? "unlocked" : ""}">${unlocked(id) ? "✓" : "○"} ${n}</span>`).join("")}</div></div><div class="panel"><div class="eyebrow">ZULETZT BEARBEITET</div><h3>${state.lastLesson || "Noch nicht gestartet"}</h3></div></section>`,
  );
}
function unlocked(id) {
  return (
    (id === "first-lesson" && state.completedLessons.length >= 1) ||
    (id === "html" && state.html >= 100) ||
    (id === "css" && state.css >= 100) ||
    (id === "js" && state.javascript > 0) ||
    (id === "ten" && state.completedExercises.length >= 10) ||
    (id === "streak" && state.streak >= 7)
  );
}
function settings() {
  shell(
    `<section class="content"><div class="eyebrow">EINSTELLUNGEN</div><h1>Arbeitsumgebung</h1><p class="lead">Passe deine Werkstatt an.</p><div class="settings"><div class="setting"><div><b>Dark Mode</b><p>${darkMode ? "Das dunkle Erscheinungsbild ist aktiv." : "Das helle Erscheinungsbild ist aktiv."}</p></div><button class="theme-toggle" id="theme-toggle" type="button" role="switch" aria-checked="${darkMode}" aria-label="Dark Mode"><span class="theme-toggle-thumb"></span><span>${darkMode ? "AN" : "AUS"}</span></button></div><div class="setting"><div><b>Schriftgröße</b><p>Normale Oberfläche.</p></div><select><option>16px</option><option>14px</option><option>18px</option></select></div><div class="setting"><div><b>Editor-Schriftgröße</b><p>Lesbarkeit des Codes.</p></div><select><option>14px</option><option>12px</option><option>16px</option></select></div><div class="setting"><div><b>Tab-Größe</b><p>Leerzeichen pro Tab.</p></div><select><option>2</option><option>4</option></select></div><div class="setting"><div><b>Automatisches Speichern</b><p>Fortschritt wird lokal gespeichert.</p></div><span class="success">AN</span></div><div class="setting"><div><b>Fortschritt zurücksetzen</b><p>Demo-Status wiederherstellen.</p></div><button class="btn danger" id="reset-progress">Zurücksetzen</button></div></div></section>`,
  );
  document.getElementById("theme-toggle").onclick = () => {
    darkMode = !darkMode;
    localStorage.setItem("codewerkstatt-theme", darkMode ? "dark" : "light");
    applyTheme();
    settings();
  };
  document.getElementById("reset-progress").onclick = () => {
    const resetButton = document.getElementById("reset-progress");
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="confirm-backdrop" id="reset-dialog-backdrop"><section class="confirm-dialog panel" role="dialog" aria-modal="true" aria-labelledby="reset-dialog-title" aria-describedby="reset-dialog-description"><div class="eyebrow">FORTSCHRITT</div><h2 id="reset-dialog-title">Lernstand zurücksetzen?</h2><p id="reset-dialog-description">Deine abgeschlossenen Lektionen, Aufgaben und Projekte werden gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.</p><div class="confirm-actions"><button class="btn" id="cancel-reset" type="button">Abbrechen</button><button class="btn danger" id="confirm-reset" type="button">Fortschritt löschen</button></div></section></div>`,
    );
    const backdrop = document.getElementById("reset-dialog-backdrop");
    const cancelButton = document.getElementById("cancel-reset");
    const closeDialog = () => {
      backdrop.remove();
      document.removeEventListener("keydown", onDialogKeydown);
      resetButton.focus();
    };
    const onDialogKeydown = (event) => {
      if (event.key === "Escape") closeDialog();
    };
    cancelButton.focus();
    cancelButton.onclick = closeDialog;
    backdrop.onclick = (event) => {
      if (event.target === backdrop) closeDialog();
    };
    document.addEventListener("keydown", onDialogKeydown);
    document.getElementById("confirm-reset").onclick = () => {
      closeDialog();
      state = JSON.parse(JSON.stringify(defaults));
      save();
      settings();
    };
  };
}
function notfound() {
  shell(
    `<section class="content empty"><div class="eyebrow">404</div><h1>Diese Seite gibt es hier nicht.</h1><a class="btn primary" href="#/">Zur Startseite</a></section>`,
  );
}
function escape(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function route() {
  const p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (!p.length) return home();
  if (p[0] === "lernen") {
    if (p.length === 1) return learn();
    const k = p[1];
    if (!COURSES[k]) return notfound();
    if (p.length === 2) return learn(k);
    const raw = p.slice(2).join("/");
    let i = /^\d+$/.test(raw) ? Number(raw) : -1;
    if (i < 0)
      i = COURSES[k].lessons.findIndex((name) => slugify(name) === raw);
    return lesson(k, i);
  }
  if (p[0] === "uebungen") return exercises();
  if (p[0] === "aufgabe") return exerciseTask(Number(p[1]));
  if (p[0] === "projekte") {
    if (p.length === 1) return projects();
    const slug = p[1];
    return projectDetail(slug);
  }
  if (p[0] === "fortschritt") return progress();
  if (p[0] === "einstellungen") return settings();
  notfound();
}
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href]");
  if (!a) return;
  const href = a.getAttribute("href");
  if (!href || !href.startsWith("#/")) return;
  e.preventDefault();
  if (location.hash === href) {
    route();
  } else {
    location.hash = href.slice(1);
  }
  const sb = document.getElementById("sidebar");
  if (sb) sb.classList.remove("open");
});
window.addEventListener("hashchange", route);
document.getElementById("menu").onclick = () =>
  document.getElementById("sidebar").classList.toggle("open");
route();
