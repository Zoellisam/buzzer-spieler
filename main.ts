radio.setGroup(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("a", 0)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("b", 0)
        basic.showLeds(`
            # # . . .
            # . # . .
            # # . . .
            # . # . .
            # # . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
    basic.setLedColor(0xff0000)
})
