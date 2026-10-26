---
layout: default
title: "Make It Your Own!"
nav_order: 22
parent: Lessons
---

# Make It Your Own!
{: .no_toc }

Customize your Asteroids game with your own style and features!
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Start with the Complete Solution

If you want to start with everything included, you can use the complete solution from lesson 20.

- ✅ Look at the `20_thrust_animation.py` file in the repository
- ✅ Copy the entire code and paste it into a new Python file

---

## Find What You Want to Change

Do you want to change colors, switch fonts or keys? Or do you want to change the shape of the asteroids or the player?

Navigate to what you want to change and try it out!

---

## Change Screen Size

Some people have smaller screen resolutions, so the window size might not fit.
Change it in `# CONSTANTS` if you want:

For example:

```python
SCREEN_WIDTH = 1000
SCREEN_HEIGHT = 600
```

You can also make the window larger if you have more space on your screen.

---

## Change Colors

### Background Color
```python
BG_COLOR = "navy"  # or "dark blue", "purple", etc.
```

### Player Color
```python
player.color("cyan", BG_COLOR)  # or any other color
```

### Asteroid Colors
```python
asteroid.color("brown", "grey")  # first is outline, second is fill
```

### Bullet Color
```python
self.color("yellow")  # or "red", "green", etc.
```

---

## Change Controls

Find the key bindings in the code and change them:

```python
# Original
screen.onkeypress(press_up, "Up")
screen.onkeypress(press_left, "Left")
screen.onkeypress(press_right, "Right")
screen.onkeypress(press_space, "space")

# Changed to WASD
screen.onkeypress(press_up, "w")
screen.onkeypress(press_left, "a")
screen.onkeypress(press_right, "d")
screen.onkeypress(press_space, "space")
```

---

## Change Shapes

### Custom Spaceship Shape

Create your own shape by defining points:

```python
SPACESHIP_SHAPE = ( (0,20), (10,-10), (0,-5), (-10,-10) )
```

The points are `(x, y)` coordinates. Experiment with different values!

### Custom Asteroid Shapes

Make asteroids look more irregular:

```python
def create_asteroid_shape():
    points = []
    for i in range(8):
        angle = i * 45  # 360/8 = 45 degrees apart
        distance = random.randint(15, 25)
        x = distance * math.cos(math.radians(angle))
        y = distance * math.sin(math.radians(angle))
        points.append((x, y))
    return points
```

---

## Add More Features

### Ideas for Extensions

1. **Split Asteroids** - Make large asteroids split into smaller ones when hit
2. **Power-ups** - Add items that increase fire rate or shield
3. **Multiple Asteroid Types** - Different sizes with different point values
4. **Sound Effects** - Add sounds for shooting, hits, and explosions
5. **High Score** - Save and display the best score
6. **Particle Effects** - Create explosion animations
7. **Background Stars** - Add twinkling stars in the background
8. **Shield Power-up** - Temporary invincibility
9. **Boss Battle** - A large, tough asteroid that moves intelligently
10. **Two Player Mode** - Play with a friend!

---

## Change Game Difficulty

### Make it Easier
```python
PLAYER_HEALTH = 5  # More lives
RELOAD_TIME = 10  # Faster shooting
ASTEROID_COUNT = 3  # Fewer asteroids
```

### Make it Harder
```python
PLAYER_HEALTH = 1  # One life only!
RELOAD_TIME = 30  # Slower shooting
ASTEROID_COUNT = 10  # More asteroids!
ASTEROID_SPEED = 3  # Faster asteroids
```

---

## Share Your Creation!

Once you've customized your game:
1. Test it thoroughly
2. Show it to your friends and family
3. Get feedback and keep improving
4. Consider sharing your code with others

---

## Keep Learning!

### Next Steps in Your Programming Journey:
- Learn more Python concepts
- Try other game libraries (Pygame, Arcade)
- Create your own game from scratch
- Join a coding community
- Participate in game jams

---

## Additional Resources

Check out the example files in the repository:
- `MIY_colors.py` - Color customization examples
- `MIY_asteroid_shape.py` - Custom asteroid shapes
- `MIY_split_asteroids.py` - Asteroid splitting mechanics

---

Happy coding! 🚀✨
