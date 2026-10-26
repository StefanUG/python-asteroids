---
layout: default
title: "Lesson 20: Thrust Animation"
nav_order: 21
parent: Lessons
---

# Lesson 20: Thrust Animation 🔥
{: .no_toc }

Add flames when accelerating to make your spaceship look amazing!
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Create a Better Spaceship Shape

Instead of using the standard "triangle" shape, let's make our own!

```python
SPACESHIP_SHAPE = ( (7,-20), (0,5), (-7,-20) )
```

- ✅ Add this code to the `# CONSTANTS` section, right after `HALF_HEIGHT`

This defines three points that draw a triangle: right corner, top, left corner.

---

## Create a Shape with Fire!

Now we'll create a compound shape with both spaceship AND fire:

```python
SPACESHIP_THRUST_SHAPE = turtle.Shape('compound')
SPACESHIP_THRUST_SHAPE.addcomponent(SPACESHIP_SHAPE, BG_COLOR, 'light grey')
SPACESHIP_THRUST_SHAPE.addcomponent(( (7,-20), (0,-30), (-7,-20) ), BG_COLOR, 'orange')
```

- ✅ Add this code right after `SPACESHIP_SHAPE`

This creates a shape consisting of two parts:
* First part: the spaceship (light grey)
* Second part: the fire (orange triangle behind)

The fire shape `( (7,-20), (0,-30), (-7,-20) )` is a triangle pointing backward, where `(0,-30)` makes the fire extend further down.

---

## Register the Shapes in Turtle System

After creating `screen`, we need to register our new shapes:

```python
screen.register_shape("spaceship", SPACESHIP_SHAPE)
screen.register_shape("spaceship_thrust", SPACESHIP_THRUST_SHAPE)
```

- ✅ Add this code in the `# GAME SETUP` section, right after `screen.tracer(0)`

Now we can use `"spaceship"` and `"spaceship_thrust"` as shapes in our game.

---

## Update `Player.__init__`

The player should now use the new shape instead of "triangle".

Before:
```python
self.shape("triangle")
self.color("light grey", BG_COLOR)
self.shapesize(stretch_wid=0.75, stretch_len=1.5)
self.penup()
```

After:
```python
self.shape("spaceship")
self.color("light grey", BG_COLOR)
self.penup()
```

- ✅ Find these lines in the `Player.__init__` function
- ✅ Change `self.shape("triangle")` to `self.shape("spaceship")`
- ✅ **Delete** the line with `self.shapesize` (we don't need it anymore since our shape already has the right size)

---

## Update `animate_spaceship()` Function

Now we'll switch shapes when pressing the up arrow!

Add this code at the end of the `animate_spaceship()` function:

```python
    if keys_pressed["Up"]:
        player.shape("spaceship_thrust")
    else:
        player.shape("spaceship")
```

- ✅ Find the `animate_spaceship` function in the `# BEHAVIOURS` section
- ✅ Add this code at the end of the function (after `else: player.showturtle()`)

ℹ️ Watch the indentation! The new lines should be at the same level as the `if player.is_invincible():` line.

---

## Test Your Game!

- ✅ Run the game and press the up arrow to see the thrust animation!

You should see orange flames appear behind your spaceship when you accelerate!

---

## Congratulations! 🎉

You've completed all 20 lessons and built a complete Asteroids game with:
- Player movement and controls
- Shooting mechanics
- Asteroids and collision detection
- Health system and grace period
- Realistic space physics
- Visual effects and animations

Now it's time to make it your own!

---

## Next Steps

[Customize Your Game →](make-it-yours){: .btn .btn-purple }
