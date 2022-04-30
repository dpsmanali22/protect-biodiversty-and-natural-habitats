namespace SpriteKind {
    export const biodiversty = SpriteKind.create()
}
let biodiversity = sprites.create(assets.image`tree`, SpriteKind.biodiversty)
biodiversity.changeScale(1.5, ScaleAnchor.Middle)
scene.setBackgroundColor(15)
