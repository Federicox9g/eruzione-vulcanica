def on_item_interacted_iron_axe():
    blocks.fill(STONE,
        pos_camera(-3, 3, -3),
        pos_camera(3, 3, 3),
        FillOperation.REPLACE)
player.on_item_interacted(IRON_AXE, on_item_interacted_iron_axe)

def on_on_chat():
    mobs.give(mobs.target(NEAREST_PLAYER), IRON_AXE, 1)
    mobs.give(mobs.target(NEAREST_PLAYER), GOLDEN_AXE, 1)
    mobs.give(mobs.target(NEAREST_PLAYER), DIAMOND_AXE, 1)
    mobs.give(mobs.target(NEAREST_PLAYER), STONE_AXE, 1)
    mobs.give(mobs.target(NEAREST_PLAYER), ENCHANTED_APPLE, 5)
    mobs.give(mobs.target(NEAREST_PLAYER), BUCKET, 5)
    mobs.give(mobs.target(NEAREST_PLAYER), ENDER_PEARL, 16)
    mobs.give(mobs.target(NEAREST_PLAYER), SAND, 64)
    mobs.give(mobs.target(NEAREST_PLAYER), STONE, 64)
    mobs.give(mobs.target(NEAREST_PLAYER), NETHERITE_SWORD, 1)
player.on_chat("E", on_on_chat)

def on_item_interacted_golden_axe():
    mobs.apply_effect(LEVITATION, mobs.target(NEAREST_PLAYER), 10, 1)
player.on_item_interacted(GOLDEN_AXE, on_item_interacted_golden_axe)

def on_item_interacted_stone_axe():
    blocks.fill(STONE,
        pos_camera(-3, 3, 3),
        pos_camera(3, 0, 3),
        FillOperation.REPLACE)
player.on_item_interacted(STONE_AXE, on_item_interacted_stone_axe)
