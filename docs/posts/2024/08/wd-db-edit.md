---
post: true
title: 某道手游数据库逆向记录
date: 2024-08-22
description:
categories:
  - 某道技术研究
tags:
  - 某道
---

ceshi4 `66A77AA3B6346C0001F9`

黑土 `66A7C117A9D7D90001F9`

## 修改了等级

92级

```txt
9: 92,
44: 364,
45: 92,
```

93级别

```txt
9: 93,
44: 368,
45: 93,
```

94级别

```txt
9: 94,
44: 372,
45: 94,
```

得出结论 44 = 4 \* (9 - 1)

## 修改了性别

女

```txt
56: 2,
```

男

```txt
56: 1,
```

得出结论 1: 男 2: 女

## 修改门派

金

```txt
19: 1,
```

木

```txt
19: 2,
```

水

```txt
19: 3,
```

得出结论 1: 金 2: 木 3: 水 4: 火 5: 土

## 修改了道行

899年

```txt
49: 323640,
```

1000年

```txt
49: 360000,
```

得出结论 一年 = 360天 该值存储的是天数

## 发送首饰

![1724340453819.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724340453819.png)

```txt
41: "游火灵焰: ([
    243: 130,
    240: 8,
    244: 5,
    231: ([
        65: 5,
        2: 12,
        14: 13,
        68: 9,
    ]),
    232: 41,
    226: 0,
    229: ([
        10: 14,
        5: 15,
    ]),
    233: : LYNMNDVZKQ1724340487: ,
    55: \\"金色\\",
    49: 3230000,
    47: 1,
    274: 1,
    262: 8571,
    267: ([
        10: 3,
        14: 5,
    ]),
    266: ([
        68: 6,
        65: 1,
        10: 2,
        14: 4,
    ]),
])",
```

注意 `55: \\"金色\\"`, 这种 双\ 转义符会导致转json错误，需修复

![1724340699315.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724340699315.png)

```txt
42: "游火灵焰: ([
    243: 130,
    240: 8,
    244: 5,
    231: ([
        67: 5,
        200: 12,
        90: 13,// 忽视目标抗遗忘
        66: 9,// 所有抗性
    ]),
    232: 41,
    226: 0,
    229: ([
        30: 14,// 金相性
        32: 15,// 水相性
    ]),
    233: : ZQDDWPOUMR1724340743: ,
    55: \\"金色\\",
    49: 3230000,
    47: 1,
    274: 1,
    262: 8571,
    267: ([
        10: 3,
        14: 5,
    ]),
    266: ([
        68: 6,
        65: 1,
        10: 2,
        14: 4,
    ]),
])",
```

Ting

| 属性名 | 值类型   | 属性讲解                               |
| ------ | -------- | -------------------------------------- |
| 47     | number   | 未知 默认值1                           |
| 49     | number   | 未知 首饰可设置成 320000               |
| 55     | string   | 装备品阶 "金色"                        |
| 226    | number   | 限时时间 示例: -1725461197 unix时间戳  |
| 229    | Attr     | 物品属性                               |
| 231    | Attr     | 物品属性                               |
| 232    | number   | 物品存储位置                           |
| 233    | :string: | 物品 ID 例如: ':66A9987B019AB5000101:' |
| 240    | 8        | 未知                                   |
| 243    | number   | 物品等级                               |
| 244    | EquType  | 装备类型                               |
| 274    | EquType  | 未知 发送首饰时都传了                  |

EquType

| 值  | 说明   |
| --- | ------ |
| 1   | 武器   |
| 2   | 帽子   |
| 3   | 衣服   |
| 4   | 项链   |
| 5   | 玉佩   |
| 6   | 手镯   |
| 8   | 魂器   |
| 9   | 法宝   |
| 10  | 鞋子   |
| 21  | 飞行器 |

Attr

| 属性名 | 值类型 | 属性讲解             |
| ------ | ------ | -------------------- |
| 2      | number | 力量                 |
| 3      | number | 物伤                 |
| 4      | number | 准确                 |
| 5      | number | 体质                 |
| 7      | number | 气血                 |
| 8      | number | 防御                 |
| 9      | number | 破防                 |
| 10     | number | 灵力                 |
| 11     | number | 法伤                 |
| 13     | number | 法力                 |
| 14     | number | 敏捷                 |
| 15     | number | 速度                 |
| 30     | number | 金相性               |
| 31     | number | 木相性               |
| 32     | number | 水相性               |
| 33     | number | 火相性               |
| 34     | number | 土相性               |
| 36     | number | 金抗性               |
| 37     | number | 水抗性               |
| 42     | number | 抗中毒               |
| 43     | number | 抗冰冻               |
| 45     | number | 抗遗忘               |
| 51     | number | 物理连击次数         |
| 53     | number | 反击次数             |
| 56     | number | 反击率               |
| 57     | number | 物理连击率           |
| 58     | number | 物理必杀率           |
| 59     | number | 反震度               |
| 60     | number | 反震率               |
| 64     | number | 所有属性             |
| 65     | number | 所有相性             |
| 66     | number | 所有抗性             |
| 67     | number | 所有抗异常           |
| 68     | number | 所有技能上升         |
| 73     | number | 破防率               |
| 85     | number | 忽视目标抗金         |
| 86     | number | 忽视目标抗木         |
| 87     | number | 忽视目标抗水         |
| 88     | number | 忽视目标抗火         |
| 89     | number | 忽视目标抗土         |
| 90     | number | 忽视目标抗遗忘       |
| 91     | number | 忽视目标抗中毒       |
| 92     | number | 忽视目标抗冰冻       |
| 93     | number | 忽视目标抗昏睡       |
| 94     | number | 忽视目标抗混乱       |
| 95     | number | 强力克金             |
| 96     | number | 强力克木             |
| 97     | number | 强力克水             |
| 98     | number | 强力克火             |
| 99     | number | 强力克土             |
| 100    | number | 师门攻击技能消耗降低 |
| 101    | number | 师门障碍技能消耗降低 |
| 102    | number | 师门辅助技能消耗降低 |
| 103    | number | 强力中毒             |
| 105    | number | 强力遗忘             |
| 107    | number | 强力冰冻             |
| 108    | number | 强金法伤害           |
| 109    | number | 强木法伤害           |
| 110    | number | 强水法伤害           |
| 111    | number | 强火法伤害           |
| 112    | number | 强土法伤害           |
| 113    | number | 几率躲避攻击         |
| 119    | number | 忽视所有抗性         |
| 200    | number | 忽视所有抗异常       |
| 201    | number | 几率解除遗忘状态     |
| 202    | number | 几率解除中毒状态     |
| 203    | number | 几率解除冰冻状态     |
| 204    | number | 几率解除昏睡状态     |
| 205    | number | 几率解除混乱状态     |
| 252    | number | 强物理伤害           |
| 297    | number | 伤害                 |
| 348    | number | 忽视躲避攻击         |

## 首饰备注

基本格式

```txt
([
    243: 110,
    240: 8,
    244: 5,
    232: 41,
    229: ([
        65: 5,
        68: 10,
        64: 22,
    ]),
    231: ([
        68: 10,
    ]),
    233: : 6ERGERGERG: ,
    49: 320000,
    47: 1,
    274: 1,
])
```

物品存储位置说明

1~41 角色正在装备的物品
41~165 角色包裹里的物品

```txt
80级相五玉佩=\"七龙珠:([243:80,240:8,244:5,232:%d,229:([65:5,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五技能玉佩=\"金蝉宝囊:([243:90,240:8,244:5,232:%d,229:([65:5,68:10,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五力玉佩=\"金蝉宝囊:([243:90,240:8,244:5,232:%d,229:([65:5,2:22,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五法玉佩=\"金蝉宝囊:([243:90,240:8,244:5,232:%d,229:([65:5,10:22,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五敏玉佩=\"金蝉宝囊:([243:90,240:8,244:5,232:%d,229:([65:5,14:22,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五技能玉佩=\"通灵宝玉:([243:100,240:8,244:5,232:%d,229:([65:5,68:10,]),231:([68:10,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五力玉佩=\"通灵宝玉:([243:100,240:8,244:5,232:%d,229:([65:5,2:25,]),231:([2:25,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五法玉佩=\"通灵宝玉:([243:100,240:8,244:5,232:%d,229:([65:5,10:25,]),231:([10:25,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五敏玉佩=\"通灵宝玉:([243:100,240:8,244:5,232:%d,229:([65:5,14:25,]),231:([14:25,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五技能玉佩=\"寒玉龙勾:([243:110,240:8,244:5,232:%d,229:([65:5,68:10,64:22,]),231:([68:10,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五力玉佩=\"寒玉龙勾:([243:110,240:8,244:5,232:%d,229:([65:5,2:27,64:22,]),231:([2:27,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五法玉佩=\"寒玉龙勾:([243:110,240:8,244:5,232:%d,229:([65:5,10:27,64:22,]),231:([10:27,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五敏玉佩=\"寒玉龙勾:([243:110,240:8,244:5,232:%d,229:([65:5,14:27,64:22,]),231:([14:27,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五技能玉佩=\"八宝如意:([243:120,240:8,244:5,232:%d,229:([65:5,68:10,64:24,]),231:([68:10,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五力玉佩=\"八宝如意:([243:120,240:8,244:5,232:%d,229:([65:5,2:30,64:24,]),231:([2:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五法玉佩=\"八宝如意:([243:120,240:8,244:5,232:%d,229:([65:5,10:30,64:24,]),231:([10:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五敏玉佩=\"八宝如意:([243:120,240:8,244:5,232:%d,229:([65:5,14:30,64:24,]),231:([14:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五技能玉佩=\"游火灵焰:([243:130,240:8,244:5,232:%d,229:([65:5,68:10,64:26,67:15,]),231:([68:10,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五力玉佩=\"游火灵焰:([243:130,240:8,244:5,232:%d,229:([65:5,2:32,64:26,67:15,]),231:([2:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五法玉佩=\"游火灵焰:([243:130,240:8,244:5,232:%d,229:([65:5,10:32,64:26,67:15,]),231:([10:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五敏玉佩=\"游火灵焰:([243:130,240:8,244:5,232:%d,229:([65:5,14:32,64:26,67:15,]),231:([14:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",

80级相五项链=\"天机锁链:([243:80,240:8,244:4,232:%d,229:([65:5,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五技能项链=\"秘魔灵珠:([243:90,240:8,244:4,232:%d,229:([65:5,68:10,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五力项链=\"秘魔灵珠:([243:90,240:8,244:4,232:%d,229:([65:5,2:22,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五法项链=\"秘魔灵珠:([243:90,240:8,244:4,232:%d,229:([65:5,10:22,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五敏项链=\"秘魔灵珠:([243:90,240:8,244:4,232:%d,229:([65:5,14:22,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五技能项链=\"金碧莲花:([243:100,240:8,244:4,232:%d,229:([65:5,68:10,]),231:([68:10,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五力项链=\"金碧莲花:([243:100,240:8,244:4,232:%d,229:([65:5,2:25,]),231:([2:25,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五法项链=\"金碧莲花:([243:100,240:8,244:4,232:%d,229:([65:5,10:25,]),231:([10:25,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五敏项链=\"金碧莲花:([243:100,240:8,244:4,232:%d,229:([65:5,14:25,]),231:([14:25,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五技能项链=\"流光绝影:([243:110,240:8,244:4,232:%d,229:([65:5,68:10,64:22,]),231:([68:10,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五力项链=\"流光绝影:([243:110,240:8,244:4,232:%d,229:([65:5,2:27,64:22,]),231:([2:27,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五法项链=\"流光绝影:([243:110,240:8,244:4,232:%d,229:([65:5,10:27,64:22,]),231:([10:27,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五敏项链=\"流光绝影:([243:110,240:8,244:4,232:%d,229:([65:5,14:27,64:22,]),231:([14:27,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五技能项链=\"五蕴悯光:([243:120,240:8,244:4,232:%d,229:([65:5,68:10,64:24,]),231:([68:10,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五力项链=\"五蕴悯光:([243:120,240:8,244:4,232:%d,229:([65:5,2:30,64:24,]),231:([2:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五法项链=\"五蕴悯光:([243:120,240:8,244:4,232:%d,229:([65:5,10:30,64:24,]),231:([10:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五敏项链=\"五蕴悯光:([243:120,240:8,244:4,232:%d,229:([65:5,14:30,64:24,]),231:([14:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五技能项链=\"千彩流光:([243:130,240:8,244:4,232:%d,229:([65:5,68:10,64:26,67:15,]),231:([68:10,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五力项链=\"千彩流光:([243:130,240:8,244:4,232:%d,229:([65:5,2:32,64:26,67:15,]),231:([2:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五法项链=\"千彩流光:([243:130,240:8,244:4,232:%d,229:([65:5,10:32,64:26,67:15,]),231:([10:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五敏项链=\"千彩流光:([243:130,240:8,244:4,232:%d,229:([65:5,14:32,64:26,67:15,]),231:([14:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",

80级相五手镯=\"闭月双环:([243:80,240:8,244:6,232:%d,229:([65:5,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五技能手镯=\"三清手镯:([243:90,240:8,244:6,232:%d,229:([65:5,68:10,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五力手镯=\"三清手镯:([243:90,240:8,244:6,232:%d,229:([65:5,2:22,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五法手镯=\"三清手镯:([243:90,240:8,244:6,232:%d,229:([65:5,10:22,]),233::%s:,49:320000,47:1,274:1,])\",
90级相五敏手镯=\"三清手镯:([243:90,240:8,244:6,232:%d,229:([65:5,14:22,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五技能手镯=\"天星奇光:([243:100,240:8,244:6,232:%d,229:([65:5,68:10,]),231:([68:10,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五力手镯=\"天星奇光:([243:100,240:8,244:6,232:%d,229:([65:5,2:25,]),231:([2:25,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五法手镯=\"天星奇光:([243:100,240:8,244:6,232:%d,229:([65:5,10:25,]),231:([10:25,]),233::%s:,49:320000,47:1,274:1,])\",
100级相五敏手镯=\"天星奇光:([243:100,240:8,244:6,232:%d,229:([65:5,14:25,]),231:([14:25,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五技能手镯=\"碎梦涵光:([243:110,240:8,244:6,232:%d,229:([65:5,68:10,64:22,]),231:([68:10,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五力手镯=\"碎梦涵光:([243:110,240:8,244:6,232:%d,229:([65:5,2:27,64:22,]),231:([2:27,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五法手镯=\"碎梦涵光:([243:110,240:8,244:6,232:%d,229:([65:5,10:27,64:22,]),231:([10:27,]),233::%s:,49:320000,47:1,274:1,])\",
110级相五敏手镯=\"碎梦涵光:([243:110,240:8,244:6,232:%d,229:([65:5,14:27,64:22,]),231:([14:27,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五技能手镯=\"九天霜华:([243:120,240:8,244:6,232:%d,229:([65:5,68:10,64:24,]),231:([68:10,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五力手镯=\"九天霜华:([243:120,240:8,244:6,232:%d,229:([65:5,2:30,64:24,]),231:([2:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五法手镯=\"九天霜华:([243:120,240:8,244:6,232:%d,229:([65:5,10:30,64:24,]),231:([10:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
120级相五敏手镯=\"九天霜华:([243:120,240:8,244:6,232:%d,229:([65:5,14:30,64:24,]),231:([14:30,64:24,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五技能手镯=\"岚金火链:([243:130,240:8,244:6,232:%d,229:([65:5,68:10,64:26,67:15,]),231:([68:10,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五力手镯=\"岚金火链:([243:130,240:8,244:6,232:%d,229:([65:5,2:32,64:26,67:15,]),231:([2:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五法手镯=\"岚金火链:([243:130,240:8,244:6,232:%d,229:([65:5,10:32,64:26,67:15,]),231:([10:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
130级相五敏手镯=\"岚金火链:([243:130,240:8,244:6,232:%d,229:([65:5,14:32,64:26,67:15,]),231:([14:32,64:26,]),233::%s:,49:320000,47:1,274:1,])\",
```

## 发送魂器

![1724560707928.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724560707928.png)

```txt
41: "魂器·锋芒: ([
    47: 1,
    49: 50000,
    226: 0,
    232: 41,
    233: :AQTVRVNFQO1724560316:,
    240: 8,
    243: 100,
    244: 8,
    262: 0,
    274: 1,
    324: 2,
    325: ({
        ({
            88,
            89,
            \"phy_power\",
            2,
            \"def\",
            7,
        }),
        ({
            88,
            89,
            \"mag_power\",
            3,
            \"max_life\",
            8,
        }),
        ({
            88,
            89,
            \"speed\",
            4,
            \"max_mana\",
            9,
        }),
        ({
            88,
            89,
            \"str\",
            5,
            \"con\",
            10,
        }),
        ({
            88,
            89,
            \"wiz\",
            6,
            \"damage_sel\",
            11,
        }),
    }),
    345: 3,
])",
```

![1724561374472.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724561374472.png)

```txt
44: "魂器·魂灯: ([
    47: 1,
    49: 50000,
    226: 0,
    232: 41,
    233: :JLMXJONYGR1724561131:,
    240: 8,
    243: 130,
    244: 8,
    262: 0,
    274: 1,
    324: 5,
    325: ({
        ({
            88,
            89,
            \"dex\",  敏捷
            2,
            \"def\",
            7,
        }),
        ({
            88,
            89,
            \"penetrate\",  破防
            3,
            \"max_life\",
            8,
        }),
        ({
            88,
            89,
            \"penetrate_rate\",  破防率
            4,
            \"max_mana\",
            9,
        }),
        ({
            88,
            89,
            \"double_hit\",  物理连击次数
            5,
            \"con\",
            10,
        }),
        ({
            88,
            89,
            \"double_hit_rate\",  物理连击率
            6,
            \"damage_sel\",
            11,
        }),
    }),
    345: 3,
])",
```

阳属性:

阳属性

| 属性名                  | 注释           |
| ----------------------- | -------------- |
| phy_power               | 物伤           |
| dex                     | 敏捷           |
| mag_power               | 法伤           |
| penetrate               | 破防           |
| speed                   | 速度           |
| penetrate_rate          | 破防率         |
| str                     | 力量           |
| double_hit              | 物理连击次数   |
| wiz                     | 灵力           |
| double_hit_rate         | 物理连击率     |
| ignore_resist_metal     | 忽视目标抗金   |
| ignore_resist_wood      | 忽视目标抗木   |
| ignore_resist_water     | 忽视目标抗水   |
| ignore_resist_fire      | 忽视目标抗火   |
| ignore_resist_earth     | 忽视目标抗土   |
| ignore_resist_forgotten | 忽视目标抗遗忘 |
| ignore_resist_poison    | 忽视目标抗中毒 |
| ignore_resist_frozen    | 忽视目标抗冰冻 |
| ignore_resist_sleep     | 忽视目标抗昏睡 |
| ignore_resist_confusion | 忽视目标抗混乱 |

阴属性

| 属性名            | 注释       |
| ----------------- | ---------- |
| def               | 防御       |
| max_life          | 气血       |
| max_mana          | 法力       |
| con               | 体质       |
| damage_sel        | 反震度     |
| damage_sel_rate   | 反震率     |
| counter_attack    | 反击次数   |
| all_resist_polar  | 所有抗性   |
| all_resist_except | 所有抗异常 |
| resist_metal      | 金抗性     |
| resist_wood       | 木抗性     |
| resist_water      | 水抗性     |
| resist_fire       | 火抗性     |
| resist_earth      | 土抗性     |
| resist_forgotten  | 抗遗忘     |
| resist_poison     | 抗中毒     |
| resist_frozen     | 抗冰冻     |
| resist_sleep      | 抗昏睡     |
| resist_confusion  | 抗混乱     |

## 装备发放

![1724595927919.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724595927919.png)

![f8a7a8b1a0b3b7df5d79ea363fa72b6.jpg](https://blog-1300390935.cos.ap-beijing.myqcloud.com/f8a7a8b1a0b3b7df5d79ea363fa72b6.jpg)

![1724856278465.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724856278465.png)

![1724856305226.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724856305226.png)

![1724856347661.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724856347661.png)

物伤 / 法伤 = 1.334

```txt
55: "赤眼神龙枪: ([
    // 固定为 1
    47: 1,
    // 固定为 3800000
    49: 3800000,
    // 改造等级
    54: 12,
    // 装备品阶
    55: \"绿色\",
    // 相性
    224: 1,
    // ？？？？？？
    226: 0,
    // 蓝属性
    229: ([
        30: 3,
        65: 2,
        297: 1800,
    ]),
    // 粉属性
    231: ([
        65: 4,
    ]),
    // 物品存储位置
    232: 55,
    // id
    233: :CSNMSEJBAX1724590428:,
    // 黄属性
    234: ([
        297: 3800,
    ]),
    // 暗属性
    235: ([
        11: 984,
    ]),
    // 绿属性
    236: ([
        108: 10,
    ]),
    // 写死8
    240: 8,
    // 物品等级
    243: 130,
    // 装备类型
    244: 1,
    // 改造属性
    246: ([
        3: 13296,
        11: 9972,
        64: 24,
    ]),
    // ？？？？？？
    250: 0,
    // ？？？？？？？
    262: 10000,
    // 固定为 1
    274: 1,
    // 共鸣属性
    282: \"mstunt_rate\",
])",
```

## 清空宠物

```sql
update user_container_data set content='(["pets":([]),"guards":([]),])',checksum='581640212' where name ='66B0D0344295E60001F9'
```

## 全服统一道行

![1724596501101.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724596501101.png)

![1724596471429.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724596471429.png)

## 更新上线邮件

![1724596555433.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724596555433.png)

```sql
update mail_config set mail_title ='新人上线福利',  mail_content ='新人上线福利，请查收', attachment ='#I金元宝|金元宝#r888#I' where id ='1'
```

## 修改角色权限

![1724596699788.png](https://blog-1300390935.cos.ap-beijing.myqcloud.com/1724596699788.png)

```sql
update account set privilege='300',checksum='6DB2C080E03C0B0954D7F0CEE4F12FAE' where account ='110001ceshi001'
```

## 查询聊天记录

release_sldb

```sql
select * from chat_history
```

## 消费积分修改

user_data

```txt
363: ([
    "left_amount": 81819,
    "score": 1036,
    "deadline": 2016266400,
    "last_time": 1724739955,
    "total_score": 1036,
    "used_quota": ([
    ]),
]),
```

## 发放幻宠

上限八只

松鼠 九尾狐 黑熊
