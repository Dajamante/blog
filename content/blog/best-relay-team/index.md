---
title: Best Relay Team
date: "2019-09-06"
description: "Best Relay Team"
tags: ["python", "dictionnaries", "sorting"]
category: "Kattis"
---

### Best Relay Team problem

Welcome! and let's kick off the blog with [Best Relay Team](https://open.kattis.com/problems/bestrelayteam) from Kattis!

As a trainer, you have to choose a relay team. But careful! Some runners are better on the first leg and some are better when warm!

After thinking about this problem in my insanely long commute, I realised that: while each first-leg runner has to be paired with 3 others "warm runners", you actually do not need to look at all the runners in the team! **The warm snails will never make it to the best relay team**, so kick them out and keep them for the kitchen instead :snail: 🇫🇷!

Then, you can (politely) ignore the front runner and select the three fastest warm runners: either the first-leg runner is one of those (and you will need to look at the four fastest warm runners), or the first-leg runner is not one of those, so just take the three best.

### Solution based on hashtables

That solution is made with Python dictionaries (hashtables). That code has a face only a mother can love, but the idea is simple.

One method makes two dictionnaries: one for the "start-time" performance, one for the "warm time" performance.

#### Method to create two dictionaries

```python
def get_start_and_warm_performance_dictionnaries(runners):

    # ex: "BOLT 9.58 8.43"
    # Bolt's start time lies at [i+1]
    # and his warm time is at [i+2]
    for i in range(0, len(runners_array), 3):
        start_times[runners_array[i]] = float(runners_array[i+1])
        warm_times[runners_array[i]] = float(runners_array[i+2])

```

#### Method to match each first-leg with the three best second-leg

Second method where the French cooking happens. For each runner, we take the best team mates _while excluding the current runner_ and compare all possible times.

- we start with infinite time
- select everyone _except_ the current runner
- sort them with `sorted()`method
- and add the three best times to the variable team's time `teams_time`

```python
def find_best_team(start, warm):

    # ... code omitted

    for key in start:
        # selecting everyone while ignoring the current runner
        others = {k: v for k, v in warm.items() if k is not key}
        # sort warm times by best performance
        srtd_others = sorted(others.items(), key=lambda x: x[1])
        # and add their times
        teams_time = start[key] + srtd_others[0][1] + srtd_others[1][1]
         + srtd_others[2][1]
```

And we make a team if the time is the best we've seen so far!

```python
        if teams_time < ideal_time:
            ideal_time = teams_time
            best_first_leg = key
            best_team = [srtd_others[0][0], srtd_others[1][0],
             srtd_others[2][0]]

   # ... code omitted
```

### Time complexity and Big-Oh notation

It's still a blog on algorithms, so I should probably write something about the time complexity. This solution creates two dictionnaries, then sort and copies one of them. **All of this is Big-nOh-nOh, so don't do it at home !**

#### Better solution:

A better solution would be:

- sort the runners based on their warm times `runners.sort(key=lambda x: float(x[2]))`
- add front runner and her/his time to the team
- for each runner, append the next three best based on warm times, as long as it is not the same person `front_runner != next_runner` and as long as the team is less than four people `len(team) < 4`
- check if we have the best time and build the dream team!

```python
def get_best_team(sorted_runners):
    best_time = float("inf")
    best_team = []

    for front_runner, start, warm in sorted_runners:
        running_time = float(start)
        team = [front_runner]

        for next_runner, start2, warm2 in sorted_runners:
            if (front_runner != next_runner) and len(team) < 4:
                running_time += float(warm2)
                team.append(next_runner)

        if running_time < best_time:
            best_time = running_time
            dream_team = team
```

We have two loops so the solution is (probably?) _O_(n<sup>2</sup>), but we have a max of 500 runners, so it is (probably?) acceptable.

### Final solution:

Here is the whole solution. Do not hesitate to tweak it!

```python
def get_best_team(sorted_runners):
    best_time = float("inf")
    dream_team = []

    for front_runner, start, warm in sorted_runners:

        running_time = float(start)
        team = [front_runner]

        for next_runner, start2, warm2 in sorted_runners:
            if (front_runner != next_runner) and len(team) < 4:
                running_time += float(warm2)
                team.append(next_runner)

        if running_time < best_time:
            best_time = running_time
            dream_team = team

    print(best_time)
    print('\n'.join(dream_team))


number_of_lines = int(input())
runners = []

for i in range(number_of_lines):
    runners.append(input().split())

runners.sort(key=lambda x: float(x[2]))

get_best_team(runners)
```
