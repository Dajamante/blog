---
title: Turtles och Snöflingor
date: "2019-10-27"
description: "Nu ska vi lära oss att använda grafiker med Python. Lilla Cheetah ska hjälpa oss att fira jul igenom att skappa fina snö flingor till oss!"
tags: ["python", "shapes", "random"]
category: "Tellus"
---

### Hus

Först ska vi träna på att skapa ett hus, och försöka förstå alla funktioner som används!

```python
import turtle

# vi skapar en sköldpadda som heter cheetah och en skärm som heter...skarm.
cheetah = turtle.Turtle()
skarm = turtle.Screen()

# här bestämmer vi hur "pennan" ska se ut, hur snabb animationer
# ska gå, färg på pennan, bakgrund färg, och storlek på pennan.

cheetah.shape("turtle")
cheetah.speed(2)
cheetah.pencolor("orange")
skarm.bgcolor("darkblue")
cheetah.pensize(2)

# Vår eget funktion som ska rita en kvadrat
def kvadrat():
    for i in range(4):
        cheetah.right(90)
        cheetah.forward(100)

# Vår eget funktion som ska rita en triangel
def triangel():
    for i in range(3):
        cheetah.left(120)
        cheetah.forward(100)


# Nu använder vi våra funktioner. Vi gör först en tak...
cheetah.begin_fill()
cheetah.fillcolor("purple")
triangel()
cheetah.end_fill()

# vi ritar "huset"...
cheetah.begin_fill()
cheetah.fillcolor("green")
kvadrat()
cheetah.end_fill()

# vi lyfter pennan
cheetah.penup()
cheetah.forward(200)
cheetah.left(90)
cheetah.forward(200)

# lägg ner pennan
cheetah.pendown()

# Nu ritar vi gör månen!
cheetah.begin_fill()
cheetah.fillcolor("lightblue")
# varför finns det ingen egen funktion för cirkeln tror ni?
cheetah.circle(20)
cheetah.end_fill()

# ska vi göma sköldpaddan ?
cheetah.hideturtle()

```

### Snöflingor

```python
import turtle
import random

# vi skapar en sköldpadda som heter cheetah, men ni väljer själva
cheetah = turtle.Turtle()

# vi skapar en skärm som heter skarm
skarm = turtle.Screen()

# vi skapar en lista med olika färger
farger = ["blue","white","cyan","yellow","goldenrod","green", "aquamarine",
          "pink","crimson", "dark violet","springgreen"]

# testa också arrow, circle, square....
cheetah.shape("turtle")
cheetah.speed(10)
cheetah.pencolor("white")
cheetah.pensize(1)
skarm.bgcolor("black")


def vform(storlek):
    cheetah.right(25)
    cheetah.forward(storlek)
    cheetah.backward(storlek)
    cheetah.left(50)
    cheetah.forward(storlek)
    cheetah.backward(storlek)
    cheetah.right(25)

def snoflingarm(storlek):
    for i in range(0,4):
        cheetah.forward(storlek)
        vform(storlek)
    cheetah.backward(storlek*4)


def snoflinga(storlek):
    for i in range(0,6):
        snoflingarm(storlek)
        cheetah.right(60)


rita = True

while(rita):
    svar = input("Vill du att jag ritar en snöflinga åt dig? Svara ja eller nej!\n").lower().strip()

    if(svar == "ja"):
        storlek = random.randint(1,40)
        # väljer en slump färg från vår lista. Hur?
        cheetah.color(random.choice(farger))
        x = random.randint(-300,300)
        y = random.randint(-300,300)

        cheetah.penup()
        cheetah.goto(x,y)
        cheetah.pendown()
        snoflinga(storlek)

    elif(svar=="nej"):
        print("Tack så mycket för att du har ritat med mig! Hej då!\n")
        rita = False

    else:
        print("Jag förstår inte vad du menar. Svara gärna ja eller nej.\n")

```
