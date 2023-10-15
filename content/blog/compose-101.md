---
path: compose-101
date: 2023-10-15T14:56:45.578Z
title: Compose 101
description: Jetpack Compose a declarative UI development toolkit for Android.
---


Jetpack Compose is a declarative UI development toolkit designed specifically for Android. It uses a modern approach to building user interfaces, allowing developers to create beautiful and responsive apps quickly and easily. With Jetpack Compose, developers can write their UI code in a more intuitive and concise way, making it easier to read and maintain. Some of its key features include state management, theming, and animation support. If you're looking to build modern, high-quality Android apps, Jetpack Compose is definitely worth exploring.

```kotlin
@Composable
fun OnboardingScreen(
    onContinueClicked: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Welcome to the Basics Codelab!")
        Button(
            modifier = Modifier.padding(vertical = 24.dp),
            onClick = onContinueClicked
        ) {
            Text("Continue")
        }
    }
}

```