input.onButtonPressed(Button.A, function () {
    DLPLmatrix.schreibeText(
    nrMatrix.zentral,
    "ABC",
    0xff0000,
    true
    )
})
input.onButtonPressed(Button.B, function () {
    DLPLmatrix.schreibeText(
    nrMatrix.zentral,
    "Test",
    0xffff00,
    false
    )
})
DLPLmatrix.definitionMatrix(nrMatrix.zentral, HWMatrix.m2, 1)
DLPLmatrix.schreibeText(
nrMatrix.zentral,
"x",
0xff0000,
true
)
basic.forever(function () {
    DLPLmatrix.schreibeText(
    nrMatrix.zentral,
    "DLPL-GROUP *",
    0x00ff00,
    true
    )
    basic.pause(5000)
})
