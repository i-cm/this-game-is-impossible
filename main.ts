input.onButtonPressed(Button.A, function () {
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    if (!(game.isGameOver())) {
        basic.showString("You win!")
    }
})
control.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_A,
EventBusValue.MICROBIT_BUTTON_EVT_CLICK
)
