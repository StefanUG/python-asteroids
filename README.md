# Asteroids Game Tutorial 🚀

Build your own Asteroids game in Python using Turtle Graphics!

## 📚 View the Tutorial

**The complete tutorial is now available on GitHub Pages:**

👉 **[https://StefanUG.github.io/CodingPirates_Asteroids](https://StefanUG.github.io/CodingPirates_Asteroids)**

The website includes:
- 20+ step-by-step lessons
- Interactive code examples
- Beautiful space-themed design
- Easy navigation between lessons
- Customization guide

---

## 🎮 About This Project

This repository contains guided lessons to build your own Asteroids game in Python using Turtle Graphics built into the Python library - no external libraries needed!

Perfect for learning:
- Python programming basics
- Game development concepts
- Object-oriented programming
- Event handling and game loops
- Collision detection

---

## 🚀 Quick Start

1. **Install Python 3.x** if you haven't already
2. **Install PyCharm Community Edition** (recommended) or any Python IDE
3. **Clone this repository** or download the files
4. **Follow the lessons** on the GitHub Pages site
5. **Run the example files** numbered `01_` through `20_` to see each stage

---

## 📖 Course Structure

| Uge | 1. time                                                      | 2. time                                                                              |
|:---:|--------------------------------------------------------------|--------------------------------------------------------------------------------------|
|  1  | Workshop præsentation                                        | Install PyCharm, start på projekt, create screen and a player (1), simple events (2) |
|  2  | Intro til Game Loop, move better (3)                         | Wrap player (4), function with parameters                                            |
|  3  | Intro til classes, create a bullet, make spaceship shoot (5) | Wrap the bullet (6), add more bullets (7)                                            |
|  4  | Refactor to Player class and shoot less rapidly (8)          | Add asteroids (9) and shoot them (10) but not the invisible ones (11)                |
|  5  | Game over when hitting asteroid (12) and keep a score (13)   | Make the asteroids move (14) and respawn (15)                                        |
|  -  | Let's have more than one life (16)                           | Let's add a grace period (17), Flash when hit (18)                                   |
|  6  | Move with thrust like in space (19)                          | Thrust animation (20)                                                                |
|  7  | Make it yours                                                | Demo to the others                                                                   |

---

## 📝 Lesson Overview

### Part 1: Getting Started (Lessons 1-4)
1. Create Screen and Player
2. Make the spaceship move with events
3. Make it move better with keypress and keyrelease
4. Prevent player from exiting the screen (or appearing in the other side)

### Part 2: Shooting Mechanics (Lessons 5-8)
5. Make the spaceship shoot one bullet
6. Add a lifetime to bullets and make them wrap screens
7. Add more bullets (but oops, they fire too rapidly!)
8. Add a Player class and cooldown/reload time

### Part 3: Asteroids (Lessons 9-11)
9. Add asteroids
10. Shoot the asteroids
11. Fix bullets not passing through (invisible asteroid issue)

### Part 4: Game Features (Lessons 12-15)
12. Game over if hitting asteroids
13. Add score and display it
14. Make the asteroids move
15. Respawn asteroids

### Part 5: Advanced Features (Lessons 16-20)
16. Add health system with multiple lives
17. Add a grace period after being hit
18. Flash during grace period for visual feedback
19. Move like in space (realistic physics)
20. Add thrust animation

### Make It Your Own!
- Change background color
- Change player shape or color
- Change asteroid shape or color
- Change keys that control the spaceship
- Add your own features!

---

## 🌟 Advanced Ideas

Want to take your game further? Try these challenges:

- Break down asteroids when they are shot
- Make the ship follow the mouse pointer and click to shoot
- Make explosion animations
- Make custom shapes for asteroids
- Make random shapes for asteroids
- Make the asteroids rotate as they move
- Don't spawn asteroids on top of player
- Handle getting hit by your own shots

---

## 🛠️ Repository Structure

```
├── lessons/               # Jekyll lesson pages (view on GitHub Pages)
├── docs/                  # Original Trinket markdown files
├── 01_*.py through 20_*.py # Example code for each lesson
├── MIY_*.py              # Make It Yours examples
├── _config.yml           # Jekyll configuration
├── index.md              # GitHub Pages homepage
└── README.md             # This file
```

---

## 🌐 GitHub Pages Setup

This repository uses GitHub Pages with Jekyll and the "Just the Docs" theme.

### Viewing Locally

To run the site locally:

```bash
# Install dependencies
bundle install

# Run Jekyll server
bundle exec jekyll serve

# Visit http://localhost:4000/CodingPirates_Asteroids
```

### Publishing Updates

The site automatically deploys when you push to the `main` branch. GitHub Actions will build and publish the site.

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

This tutorial was created for CodingPirates workshops to teach Python game development in a fun and engaging way!

---

## 📚 Original Course Notes

# Step by step

- 1 Create Screen and Player
- 2 Make the spaceship move  with events
- 3 Make it move better with keypress and keyrelease
- 4 Make the spaceship shoot with one bullet
- 5 Prevent player from exiting the screen (or appearing in the other side)
- 6 Add a lifetime to the bullets, and make them move across screens too
- 7 Add more bullets, but oops, they are too rapidly firing
- 8 Let's add a Player class and a cooldown/reload time
- 9 Add asteroids
- 10 shoot the asteroids
- 11 why are the bullets not passing on?
- 12 game over if hitting the asteroids
- 13 add score and display it
- 14 Make the asteroids move
- 15 Respawn asteroids
- 16 add health and a grace period after being hit
- 17 add a grace period after being hit
- 18 flash during grace period
- 19 move like in space
- 20 add thrust animation

---

## 📚 Additional Resources & Inspiration

- break down asteroids when they are shot
- make the ship follow the mouse pointer and click to shoot
- make explosion animations
- make custom shapes for asteroids
- make random shapes for asteroids
- make the asteroids rotate as they move
- don't spawn asteroids on top of player
- get hit by one's own shots

---

## 👨‍🏫 Instructor Notes

Følg-selv med materialet for lesson 2 var lidt for svært. Bør rettes til, så det bliver lidt lettere.

Skip move player og gå direkte til move better for at få mere tid til mere spændende ting.


"indsæt efter en funktion" instruktionerne sætter børnene bare ind efter et kald til en funktion. Ikke efter definitionen på den. 
Gennemgå på et passende tidspunkt hvad der menes med sådan en sætning.

---

## 🔧 Technical Notes

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

---

## 🎨 Inspiration & References

The best implementation of the game so far:

[Asteroid_Turtles by BL-Lee](https://github.com/BL-Lee/Asteroid_Turtles/blob/master/Asteroids.py)

Though the resulting game is not great, there are some great ideas in it, like random asteroid shapes adn explosions.

https://github.com/HaimingXu679/Asteroids
