---
path: Python Mastery with Mosh
date: 2020-09-07T19:20:36.287Z
title: 'Exercise: Most repeating character in a sentence.'
description: >-
  Write a function that's returns the first most repeating character in a
  sentence in Python. For ex.: "aabcddds" -> ("d", 3)
---
```python
def most_char_frequency(sentence):
    char_frequency = {}
    for char in sentence:
        if(char in char_frequency):
            char_frequency[char] += 1
        else:
            char_frequency[char] = 1

    char_frequency_sorted = sorted(
        char_frequency.items(),
        key=lambda kv: kv[1],
        reverse=True)
    return char_frequency_sorted[0]
```

```python
sentence = "This is a common interview questions"
print(most_char_frequency(sentence))
```

<iframe src="https://trinket.io/embed/python/6373f48958?start=result" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>