let Tempo = 0
player.onChat("Ripara", function () {
    blocks.replace(
    AIR,
    MAGMA_BLOCK,
    pos(-10, 10, -10),
    pos(10, 0, 10)
    )
    blocks.replace(
    AIR,
    SAND,
    pos(-10, 10, -10),
    pos(10, 0, 10)
    )
})
player.onChat("start", function () {
    player.execute(
    "/clear"
    )
    gameplay.timeSet(gameplay.time(DAWN))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(NEAREST_PLAYER)
    )
    player.runChatCommand("e")
    gameplay.title(mobs.target(NEAREST_PLAYER), "Eruzione Tra 30 Secondi", "Salva Il Villaggio")
    player.runChatCommand("Tempo")
})
player.onItemInteracted(IRON_AXE, function () {
    blocks.fill(
    STONE,
    posCamera(-3, 3, -3),
    posCamera(3, 3, 3),
    FillOperation.Replace
    )
})
player.onChat("E", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    IRON_AXE,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    GOLDEN_AXE,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_AXE,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    STONE_AXE,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    ENCHANTED_APPLE,
    5
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    BUCKET,
    5
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    ENDER_PEARL,
    16
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    SAND,
    64
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    STONE,
    64
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    NETHERITE_SWORD,
    1
    )
})
player.onItemInteracted(GOLDEN_AXE, function () {
    mobs.applyEffect(LEVITATION, mobs.target(NEAREST_PLAYER), 10, 1)
})
player.onItemInteracted(STONE_AXE, function () {
    blocks.fill(
    STONE,
    posCamera(-3, 3, 3),
    posCamera(3, 0, 3),
    FillOperation.Replace
    )
})
player.onChat("Tempo", function () {
    Tempo = 30
    while (Tempo > 0) {
        player.say(Tempo)
        Tempo += -1
        loops.pause(1000)
    }
    player.runChatCommand("Lava")
    player.runChatCommand("Fuoco")
    player.runChatCommand("Fiamme")
})
player.onChat("Lava", function () {
    blocks.fill(
    LAVA,
    world(336, 121, 103),
    pos(340, 121, 107),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(336, 121, 103),
    pos(340, 121, 107),
    FillOperation.Replace
    )
})
player.onChat("Fuoco", function () {
    for (let index = 0; index < 120; index++) {
        blocks.place(MAGMA_BLOCK, randpos(
        pos(-20, 0, -20),
        pos(20, 5, 20)
        ))
        mobs.spawn(LIGHTNING_BOLT, randpos(
        pos(-20, 2, -20),
        pos(20, 5, 20)
        ))
    }
})
player.onChat("Fiamme", function () {
    mobs.spawn(mobs.monster(BLAZE), randpos(
    pos(-20, 2, -20),
    pos(20, 5, 20)
    ))
})
