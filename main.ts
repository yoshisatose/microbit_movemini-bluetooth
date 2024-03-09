bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        `)
    ServoLite.stop()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showString("F")
        ServoLite.forward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        ServoLite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showString("B")
        ServoLite.backward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        ServoLite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showString("V")
        ServoLite.left()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        ServoLite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showString("H")
        ServoLite.right()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        ServoLite.stop()
    }
})
