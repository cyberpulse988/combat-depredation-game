fightext_character.basicSet(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    `, "Stickman", function (player2) {
    fightext_skill.defaultSkill(player2)
})
fightext_character.basicSet(img`
    f f f . . . . . . . . f f f . . 
    c b b c f . . . . . . c c f f . 
    . c b b c f . . . . . . c c f f 
    . c c c b f . . . . . . c f c f 
    . c c b b c f . c c . c c f f f 
    . c b b c b f c c 3 c c 3 c f f 
    . c b c c b f c b 3 c b 3 b f f 
    . . c c c b b c b b b b b b c . 
    . . . c c c c b b 1 b b b 1 c . 
    . . . . c c b b b b b b b b b c 
    . . . . f b b b b c b b b c b c 
    . . . c f b b b b 1 f f f 1 b f 
    . . c c f b b b b b b b b b b f 
    . . . . f c b b b b b b b b f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `, "Cave Bat", function (player2) {
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c c f 
        . c c c b b f c f 3 c b 3 c f c 
        . c c b c b f c b f b b b f c c 
        . c b b c b b c b 2 b b b 2 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `], 100)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        ....................
        ....................
        ....................
        .............fff....
        ................f...
        ............fff.f...
        ...............f....
        ...........ffff.....
        ...............f....
        .............ffff...
        ................f...
        .............fff....
        ....................
        ....................
        ....................
        ....................
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        ................................................................
        ..fff........fff................................................
        ..cbbcf.......cff...............................................
        ...cbbcf......ccf...............................................
        ...cccbf.......fc...............................................
        ...ccbbff.....ffc...............................................
        ...cbbcbfcc.ccfff...............................................
        ...cbccbfcccccfff...............................................
        ....cccbcb3cc3cf................................................
        ....ccccbb3cb3bc................................................
        .....ccbbbbbbbbcc...............................................
        ....cfbbb11bbb11c...............................................
        ...ccfbbbbbbbbbbf...............................................
        .....fbbbbcbbbcbf...............................................
        .....fcbbb1fff1f................................................
        ......fcbbbbbbf.................................................
        .......fffffff..................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageA, 2)
    fightext_character.setAbility(player2, fightext_character.abilityKind.downtime, 5)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        c c c c . . . . . . . . . . . . 
        . c c c c c f f f f f f f . . . 
        . . c b b c c f f b 2 2 2 f . . 
        . . . c b b c c b 2 2 2 2 2 f . 
        . . c c c b b f b f 2 2 2 2 f f 
        . . . c c c c f b f f f f f f f 
        . . . b b b c c b f 1 f f 1 f f 
        . . . f f f f b b c 1 f f 1 b c 
        . . . f f f c b b b b b b b b c 
        . . . . f f b b b 1 b b b 1 c c 
        . . . . f f b b b b b b b b c f 
        . . . . . c c c b 3 c b 3 c f . 
        . . . . . . c c c 3 c c 3 f . . 
        . . . . . . . . c c . c c . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Stand, img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b b 1 b b b 1 b c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.hitrecA, 1)
    fightext_character.setAbility(player2, fightext_character.abilityKind.jumpspeed, 200)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b b b b b b c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c b b b c b c 
        . . . c f b b b b 1 f f f 1 b f 
        . . c c f b b b b b b b b b b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . . c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 b f f 
        . c c b c b f c b b b b b b c . 
        . c b b c b b c b b b b b b c . 
        . c b c c c b b b 1 b b b 1 b c 
        . . c c c c c b b b b b b b b c 
        . . . c f b b b b c b b b c b f 
        . . c c f b b b b 1 f f f 1 b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . c c . . 
        . . . . . . c c c 3 c c 3 c . . 
        . . . . . c c c b 3 c b 3 b c . 
        . . . . f f b b b b b b b b c . 
        . . . . f f b b b b b b b b c c 
        . . . f f f c b b 1 b b b 1 b c 
        . . . f f f f b b b b b b b b c 
        . . . b b b c c b c b b b c b f 
        . . . c c c c f b 1 f f f 1 b f 
        . . . c c b b f b b b b b b f . 
        . . . c b b c c b b b b b f c c 
        . . c b b c c f f f f f f c c c 
        . c c c c c . . . . . . c c c . 
        c c c c . . . . . . . c c c . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b b 1 b b b 1 b c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `], 100)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand2, img`
        .ff......ffff..fff..
        ....fff........ccfff
        fff.cbbcf...cc.cccff
        .....cbbbffcc3cc3cff
        .....cccbbfcb3cb3cff
        ffff.ccbcbfcbbbbbbcf
        .....cbbcbbcb1bbb1cc
        .....cbcccbbbbbbbbbc
        .fff..cccccbbc1ff1bc
        .......cfbbbbf1ff1fc
        ....ff.cfbbbbfffffff
        ......ccfbbbbf2222ff
        ffff..fffcbbb22222f.
        .........fcbbb222f..
        ....fffff.fffffff...
        ....................
        ....................
        ..fff...............
        ....................
        ....................
        `, img`
        ..................................................
        ....................................ff..4444444...
        ..............................ff..f....455555554..
        ......................................45555555554.
        ..............................fffffff.45555555554.
        ......................................45555555554.
        ................................fffff.45555555554.
        ......................................45555555554.
        ..........................ffff........45555555554.
        ..................................fff.45555555554.
        .......................................455555554..
        ...........................ffffffffffff.4444444...
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `)
})
fightext_character.basicSet(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, "Tyler", function (player2) {
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Hurt, [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 2 e b f 4 4 2 e f . . 
        . f e e 2 d 2 1 f d 2 e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d 2 e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `], 500)
    fightext_character.setAbility(player2, fightext_character.abilityKind.rushspeed, 19)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Defence, img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Lie, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . f f d d f f . . . . . . 
        . . f f d d d d d d f f . . . . 
        f f d d d d d d d d d d f f . . 
        f d d d d d d d d d d d d d f f 
        f d f f d d f f f d f f d d d f 
        f d f f d d d f d d f f d d d f 
        f d f d f d f f f d f d d d d f 
        f d d d d d d d d d d d d d d f 
        f d d d f d d d d f d d d d d f 
        f d d d f d d f d f d d d d d f 
        f d d d f f d f d f f d d d d f 
        f d d d d d d d d d d d d d d f 
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.damageA, 11)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.hand1, img`
        .......ff...............
        ....ffff2ff.............
        ..ffeeeef2ff............
        .ffeeeeef22ff...........
        .feeeeffeeeef...........
        .fffffee2222ef..........
        fffe222ffffe2f..........
        ffffffffeeefff..........
        fefe44ebf44eef..........
        .fee4d4bfddef...........
        ..feee4dddee.c..........
        ...f2222eeddeccccccc....
        ...f444e44ddecddddddc...
        ...fffffeeee.ccccccc....
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . . . f . . . 
        . . . . . . . . . . . . f . . . 
        . . . . . . . . . . . . f . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . f . . f . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    fightext_character.setWalkImage(player2, fightext_character.aniKind.Walk, [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `], 199)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Hitover, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e 2 f e f . . . f f . 
        . . f 2 e 2 e f e e f f f f f f 
        . f 2 2 e 2 f e 4 d d e 2 5 f f 
        . f f 2 e 2 f e 4 d d 4 2 5 f f 
        . f e f e 2 f e f f d e e f f . 
        . f e e f e f f b 1 e d d e f . 
        . f e e f e 2 f e 4 e d d e f . 
        . f e e e f 2 f 4 d e 4 e f f f 
        . . f e e f 2 f 4 4 e f f f f f 
        . . f f e f e f e e e . . f f . 
        . . . f f f f f f e f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    fightext_character.setStImage(player2, fightext_character.stimgKind.Stand, img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    fightext_character.setAbility(player2, fightext_character.abilityKind.jumpspeed, 40)
    fightext_character.setAtkImage(player2, fightext_character.atkimgKind.leg1, img`
        ........................
        ....ffffff..............
        ..ffeeeef2f.............
        .ffeeeef222f............
        .feeeffeeeef...cc.......
        .ffffee2222ef.cdc.......
        .fe222ffffe2fcddc.......
        fffffffeeeffcddc........
        ffe44ebf44ecddc.........
        fee4d41fddecdc..........
        .feee4dddedccc..........
        ..ffee44e4dde...........
        ...f222244ee............
        ...f2222e2f.............
        ...f444455f.............
        ....ffffff..............
        .....fff................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 2 . . . 
        2 2 2 2 . . . . 2 2 2 2 . . . . 
        2 2 2 2 2 . . . . . . . . . . . 
        2 2 2 2 . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 . . . . . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . . . 2 2 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
playGame.characterMenus()
fightext_skill.skillSet("Cave Bat", function (player2) {
    fightext_skill.setSkill(player2, fightext_skill.SkillKind.A3, 19, function (tempVar, undefined) {
        fightext_skill.immune(player2, 10)
    })
})
