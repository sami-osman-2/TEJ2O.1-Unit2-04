/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sami Osman
 * Created on: Sep 2025
 * This program shows the temperature when button A is pressed.
*/

// variable for temperature
let Temperature: number

// shows a happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// when button A is pressed the temperature is shown
input.onButtonPressed(Button.A, function () {
    Temperature = input.temperature()
    basic.clearScreen()
    basic.showString('The temperature is' + Temperature)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
})
