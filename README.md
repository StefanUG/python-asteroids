# Asteroids med Python – kursusforløb

Kursusside for Coding Pirates: børn (10–14 år), der har gået på intro-holdet, bygger et Asteroids-spil i Python med turtle over 7 gange.

Siden: https://stefanug.github.io/python-asteroids/

## Struktur

| Sti | Indhold |
|---|---|
| `python/NN_*.py` | Færdig kode efter hvert niveau (1–19). `MIY_*.py` er "gør det til dit eget"-eksempler til lektion 7. |
| `src/content/docs/` | Lektionssider (MDX, Starlight). Én mappe per lektion. |
| `src/pages/slides/` | Én reveal.js-præsentation per lektion (`lektion-N.astro`) og `pitch.astro` (salgspitch fra forsiden). |
| `src/layouts/SlideDeck.astro`, `src/styles/slides.css`, `src/components/slides/` | Rum-tema til præsentationerne. |
| `src/components/` | `PythonRun` (Skulpt-kodeboks), `Solution`, `CatchUp` ("Jeg var her ikke sidst"), `Footer` (klikbare tjekbokse). |
| `src/data/catchup.ts` | Kodeord og startfil per lektion. |
| `public/images/` | Billeder til sider og slides. |

## Kom i gang (udvikling)

```sh
npm install
npm run dev      # udviklingsserver
npm run build    # bygger til dist/
npm run preview  # vis det byggede site lokalt
```

Siden bliver udgivet til GitHub Pages ved push til `main` (`.github/workflows/deploy.yml`). Under *Settings → Pages* skal kilden være **GitHub Actions**.

## Lektioner og niveauer

| Lektion | Længde | Niveauer | Startfil ("Jeg var her ikke sidst") |
|:---:|---|---|---|
| 1 – Rumskibet | 45 min | Installation, 1 skærm og rumskib, 2 styr rumskibet (events + game loop) | – |
| 2 – Skyd! | 30 + pause + 45 | 3 ud over kanten, 4 skyd én kugle, 5 kuglen flyver rundt, 6 flere kugler | `02_move_better.py` |
| 3 – Asteroider | 30 + pause + 45 | 7 genladetid, 8 asteroider, 9 skyd asteroiderne, 10 ikke de usynlige | `06_more_bullets.py` |
| 4 – Game over og point | 30 + pause + 45 | 11 game over, 12 point, 13 asteroiderne flytter sig, 14 nye asteroider | `10_not_invisible_ones.py` |
| 5 – Liv og skjold | 30 + pause + 45 | 15 flere liv, 16 skjold efter et hit, 17 blink | `14_respawn_asteroids.py` |
| 6 – Rumfysik | 30 + pause + 45 | 18 flyv som i rummet, 19 raketflamme | `17_flash_upon_hit.py` |
| 7 – Gør det til dit eget | 45 min | Farver, skrifttype, taster, former, del asteroiderne, bonus-spil, demo | `19_thrust_animation.py` |

Det gamle niveau 2 (`onkey`) er droppet; dets indhold er flettet ind i niveau 2.

## Til underviseren

### Kodeord til "Jeg var her ikke sidst"

På hver lektions oversigt kan elever, der var væk, låse et link til startfilen op med et kodeord. Kodeordene står med vilje i klartekst i [`src/data/catchup.ts`](src/data/catchup.ts), så andre undervisere kan finde dem. Finder en elev dem selv, har de fortjent det. Store og små bogstaver og mellemrum omkring kodeordet er ligegyldige.

| Lektion | Kodeord |
|:---:|---|
| 2 | `raket` |
| 3 | `komet` |
| 4 | `meteor` |
| 5 | `galakse` |
| 6 | `nebula` |
| 7 | `supernova` |

Kodeordet står også i speaker notes på lektionens første slide. Ret tabellen her, hvis du ændrer et kodeord.

### Præsentationer

Åbn fra knappen på lektionens oversigt (eller `/python-asteroids/slides/lektion-N/`). Piletaster bladrer, `F` giver fuld skærm, `S` åbner speaker view med noter, `Esc` giver overblik.

### Løsninger

Løsningsbokse på siderne er skjulte. Skriv `iddqd` et sted på siden for at vise/skjule dem.

### Demo-video

Læg videoen i `public/videos/asteroids-demo.mp4` og sæt `hasVideo = true` i [`src/pages/slides/pitch.astro`](src/pages/slides/pitch.astro).

# Idéer

More advanced

- break down asteroids when they are shot
- make the ship follow the mouse pointer and click to shoot
- make explosion animations
- make custom shapes for asteroids
- make random shapes for asteroids
- make the asteroids rotate as they move
- don't spawn asteroids on top of player
- get hit by one's own shots

Make it yours!

- Change background color
- Change player shape or color
- Change asteroid shape or color
- Change keys that control the spaceship


## Noter om materialet

- Følg-selv-materialet til den gamle lektion 2 var for svært. "Move player" er droppet, og niveau 2 går direkte til "move better" i mindre trin.
- Børnene satte kode ind efter et *kald* til en funktion i stedet for efter *definitionen*. Det gennemgås nu på siden "Sådan er koden bygget op" i lektion 1.


## Acceleration

Track vs. Heading

![track vs heading](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprod-cms.scouts.org.uk%2Fmedia%2F10408%2Ftrackcourseheading.png%3Fwidth%3D1800&f=1&nofb=1&ipt=961372850de22f7162679f4f5ba38d1e8d03468da51617a97e30d140af6b70be&ipo=images)

```python
def thrust():
    if s1.alive:
        s1.thrustlife = 0.5
        thrust_direction = s1.direction + math.pi/2
        s1.speedx, s1.speedy = s1.speedx + 5 * math.cos(thrust_direction), s1.speedy + 5 * math.sin(thrust_direction)
        speed = (s1.speedx ** 2 + s1.speedy ** 2) ** 0.5
        if speed > Spaceship.maxspeed:
            s1.speedx, s1.speedy = (s1.speedx * Spaceship.maxspeed) / speed, (s1.speedy * Spaceship.maxspeed)/speed
```

## Inspiration

The best implementation of the game so far:

[Asteroid_Turtles by BL-Lee](https://github.com/BL-Lee/Asteroid_Turtles/blob/master/Asteroids.py)

Though the resulting game is not great, there are some great ideas in it, like random asteroid shapes adn explosions.

https://github.com/HaimingXu679/Asteroids
