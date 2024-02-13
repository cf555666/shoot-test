scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(test, tiles.getTileLocation(14, 8))
})
let test: Sprite = null
test = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . 8 1 8 8 1 8 . . . . . 
    . . . . 8 1 8 8 8 8 1 8 . . . . 
    . . . 8 8 8 8 1 1 8 8 8 8 . . . 
    . . . 8 8 8 8 1 1 8 8 8 8 . . . 
    . . . . 8 1 8 8 8 8 1 8 . . . . 
    . . . . . 8 1 8 8 1 8 . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(test)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(test)
