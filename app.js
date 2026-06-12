const albums = [
  {
    id: "taylor-swift",
    title: "Taylor Swift",
    cn: "同名专辑",
    year: "2006",
    color: "#4d7f3a",
    genre: "乡村流行",
    length: "少年日记",
    thesis: "第一章的她不是在证明自己懂爱情，而是在证明一个十几岁的女孩也可以把自己的生活写成歌。",
    context:
      "从 Pennsylvania 到 Nashville 的移动，决定了这张专辑的核心气质：校车、吉他、暗恋、误会、想离开又想被看见。她还没有后来复杂的叙事机关，却已经会把具体物件变成情绪的坐标。",
    life:
      "公开资料显示，她很早开始在 Nashville 寻找机会，并在青少年时期签约 Big Machine。这个时期的现实压力并不浪漫：要让成人行业相信一个少女能写自己的歌，也要把普通高中生活压缩成可以被电台理解的故事。",
    hits: [
      {
        title: "Tim McGraw",
        analysis:
          "这首歌把“一个人”外包给“另一个人的歌声”：记忆不是直接说我想你，而是希望对方在听到某位歌手时想起我。它已经有后来 Swift 叙事的雏形：情感被放进一个可触摸的外部物件。",
        life:
          "从宾夕法尼亚搬到纳什维尔的少女，把乡村电台当作通往梦想的密码本。她的出道单曲不是在炫耀爱情，而是递交写作者的名片——告诉这个成人世界，我能把普通日子里的告别，写成你们听得懂的乡村民谣。"
      },
      {
        title: "Teardrops on My Guitar",
        analysis:
          "他在你面前讲另一个女孩。你笑着听，心却在滴血。泰勒用吉他接住那些眼泪，没有戏剧化的控诉，只有克制到令人心碎的旁观。喜欢的人就在眼前，可他的目光永远不会落在你身上。这种残酷，不需要复杂的隐喻。",
        life:
          "这类“被忽略”的视角来自校园生活本身。它让早期 Taylor 的情感不是公主叙事，而是一个不敢说出口的人在练习如何把难堪变成作品。"
      },
      {
        title: "Our Song",
        analysis:
          "这首歌把没有仪式感的恋爱写成自制仪式：没有电影配乐，就把车门声、电话低语和日常小动作当成两个人的歌。它是早期最明亮的“我可以把生活变成音乐”。",
        life:
          "十几岁的泰勒最大的天赋，就是把小事当大事写。不靠宏大，靠密度。那时她还住在普通生活里，所以歌词像从日记本里直接长出来，新鲜、具体、闪闪发光。"
      }
    ],
    deeps: [
      {
        title: "Cold As You",
        analysis:
          "这首歌冷得像结冰的湖面。她写的不是一次分手，而是一个人在关系里慢慢学会卑微的过程。你冷漠的样子，最后变成了我看自己的方式。这是十几岁的她，已经能写出的成人疼痛。",
        life:
          "很多人以为出道专辑只有甜美暗恋。但泰勒很早就懂得权力的不平等——不是年龄，不是地位，而是情感天平上那个永远低头的人。少女的声音，可以唱出很深的伤口。"
      },
      {
        title: "Tied Together with a Smile",
        analysis:
          "它把“看起来很好”的女孩写成正在裂开的女孩。美丽、被喜欢、外界评价都不能自动解决自我价值感，这个主题后来会在《mirrorball》《Anti-Hero》里反复出现。",
        life:
          "这不是写给男孩的情歌，而是写给身边女孩的注视。出道专辑里藏着这样的同理心，让她的早期写作不只围绕爱情，也围绕人性里那些微小的崩塌时刻。"
      },
      {
        title: "A Place in This World",
        analysis:
          "标题听起来像青春片，唱的却是职业赌注。我不知道终点在哪里，但我知道我不能停下来。这是十四岁的她离开家乡时，许下的野心和恐惧。地图还没画完，但脚步已经动了。",
        life:
          "从宾州搬到田纳西，从卧室搬进录音室，从高中生变成签约歌手——这首歌和她的真实轨迹重叠。她把不确定写得如此清澈，因为那时她真的不知道世界会不会接住她。"
      }
    ],
    timeline: [
      ["2005", "签约 Big Machine，进入第一张专辑制作期"],
      ["2006.10", "同名专辑发行"],
      ["2007", "乡村电台与巡演打开早期听众"],
      ["2025.05", "首六张母带回归，早期作品的所有权故事收束"]
    ]
  },
  {
    id: "fearless",
    title: "Fearless",
    cn: "无畏（重录版）",
    year: "2008",
    color: "#d2a038",
    genre: "乡村流行 / 青春史诗",
    length: "金色童话",
    thesis: "它相信童话，但并不天真；真正的无畏，是在知道童话会碎以后，仍然敢把心交出去。",
    context:
      "《Fearless》把校园、舞会、窗边等待和电影式私奔推向主流。它让 Taylor 从乡村新人变成跨界流行现象，也在格莱美舞台上确认她的“专辑作者”地位。",
    life:
      "这个时期的现实是爆炸式成名：一边仍写青春恋爱，一边突然承受全国媒体和颁奖礼镜头。2009 年 VMA 风波后来也成为她公众叙事里的关键拐点。",
    hits: [
      {
        title: "Love Story",
        analysis:
          "她把罗密欧与朱丽叶的结局改写了。悲剧不必永远是悲剧，只要我愿意重新讲述。阳台还是那个阳台，爱情还是被反对，但这次，他跪下了，我们逃走了，童话赢了。这是少女对命运的第一次改写权。",
        life:
          "这首歌强化了金色时代的童话外壳，也暴露了她早期对“被认可的爱情”的执念：不只要相爱，还要得到世界许可。"
      },
      {
        title: "You Belong With Me",
        analysis:
          "它是邻家女孩神话的巅峰：亲密来自理解，而不是耀眼。副歌的流行爆发力背后，是青春期很真实的比较心理和“我更懂你”的自我安慰。",
        life:
          "这首歌让她跨出了乡村，走进全球青少年的心。但它也成了标签。后来她花了十年证明自己不只是这些，可那时，她还需要这首歌的光。"
      },
      {
        title: "Fifteen",
        analysis:
          "《Fifteen》像给过去的自己写信。它最动人的地方不是怀旧，而是成年人回望少女时，终于能分清“被喜欢”和“被珍惜”的差别。",
        life:
          "泰勒写给朋友 Abigail，也写给自己的高中时光。那些被匆忙告别的年纪，后来在歌里慢慢重逢。她用成年人的嗓音，唱出了少女时代学不会的那一课。"
      }
    ],
    deeps: [
      {
        title: "White Horse",
        analysis:
          "如果 Love Story 是改写的童话，White Horse 就是童话的退场。没有白马，没有王子，只有一个女孩站在现实里，终于承认自己被虚构的期待伤害了。她不等了。",
        life:
          "金色时代真正的复杂性，藏在这首歌里。泰勒不只会写胜利的童话，也会写童话破碎的瞬间。这让 Fearless 免于天真，也让她的叙事开始有了重量。"
      },
      {
        title: "The Way I Loved You",
        analysis:
          "稳定的男孩对我很好，准时、体贴、尊重。可我想念的是那个让我失控的人。雨夜、争吵、和好、心跳失序——那才是我以为的爱情。她不赞美混乱，但承认年轻时会把强烈误认为命中注定。",
        life:
          "这是通往 Red 的入口。她开始写情绪强度和真正幸福的区别。不是所有激烈的感觉都值得被怀念，但那时她还在学习这件事。"
      },
      {
        title: "Breathe",
        analysis:
          "有些告别没有坏人。两个人都尽力了，可还是走不下去。呼吸变成最难的事，不是因为恨，而是因为失去了一个曾经懂你的人。这首歌写的是关系的安静坍塌。",
        life:
          "早期 Taylor 已经会写非黑即白之外的损失。这种“没有反派”的告别后来会在《happiness》《peace》中成熟。"
      }
    ],
    timeline: [
      ["2008.11", "《Fearless》发行"],
      ["2009", "《Love Story》《You Belong With Me》扩大跨界影响"],
      ["2009.09", "VMA 事件让她被卷入更大的公众叙事"],
      ["2010", "获得格莱美年度专辑"]
    ]
  },
  {
    id: "speak-now",
    title: "Speak Now",
    cn: "爱的告白（重录版）",
    year: "2010",
    color: "#6c3c8d",
    genre: "乡村摇滚 / 独立书写",
    length: "紫色自证",
    thesis: "这张专辑最锋利的地方是署名：她独自写下所有歌，把质疑变成了作品的结构。",
    context:
      "《Speak Now》像一场没有嘉宾的法庭陈词：道歉、报复、心动、羞耻、长大，全由她自己作证。紫色不是公主色，而是舞台幕布拉开后独自站定的颜色。",
    life:
      "在上一轮成名和质疑之后，她面对的是“她到底会不会自己写”的行业审视。全专辑独立创作因此成为现实层面的回应，也让文本更像私人信件合集。",
    hits: [
      {
        title: "Mine",
        analysis:
          "你说我们永远不会像你父母那样。这句承诺，是对家庭阴影的反抗。她写的不是盲目的乐观，而是带着创伤预防机制的爱情——我怕重复我见过的破裂，所以我要死死抓住你。",
        life:
          "这首歌把家庭经验、未来恐惧和恋爱放进同一个句子里。她的爱情从此不再只是当下，而是和过去的伤口、未来的担忧纠缠在一起。"
      },
      {
        title: "Back to December",
        analysis:
          "如果我能回到那个十二月。这是她少见的道歉歌，没有把自己放在受害者位置，而是承认：我伤害了一个对的人。冬天的冷，是后悔的温度。",
        life:
          "紫色时代的她，学会让叙述者承担责任。这拓宽了她的情感角色——不只写被辜负，也写辜负了别人之后的清醒。"
      },
      {
        title: "Mean",
        analysis:
          "你可以现在贬低我，用你的评论、你的轻蔑、你的优越感。但总有一天，我会站在更大的地方，而你还在原地刻薄。她把受伤变成预言：故事不会停在你定义我的这一刻。",
        life:
          "这是对评论体系的嘲讽，也是后来 reputation 式反击的早期版本。只是那时她还用乡村小调的温柔，唱出了未来的宣战。"
      }
    ],
    deeps: [
      {
        title: "Dear John",
        analysis:
          "这是一封终于寄出的控诉信。你比我年长、经验更多、话语权更重。你用这些优势让我以为，是我不够好。她用六分半的时间，慢慢拆解这段关系里的不对等，一个字一个字地拿回尊严。",
        life:
          "即使不对号入座，这首歌也清楚写出了年轻女性回望一段关系时的清醒和愤怒。紫色时代的她，开始用作品划清界限。"
      },
      {
        title: "Enchanted",
        analysis:
          "它把初见写成悬浮时刻：不是恋爱已经发生，而是可能性本身令人眩晕。歌曲的美感来自“还没有被现实弄脏”。",
        life:
          "这是紫色时代最纯粹的浪漫残影。她一边用整张专辑自证写作能力，一边仍然保留对魔法时刻的信念。"
      },
      {
        title: "Never Grow Up",
        analysis:
          "不要长大。可我们已经在长大了。她像大姐姐，也像未来的自己，回头对着童年低语：珍惜家里的灯光、妈妈的拥抱、那些还没有被野心偷走的夜晚。成长是不可逆的搬离。",
        life:
          "在成名速度加快时写“不要长大”，有额外重量：她的私人青春正在被职业进度吞掉。"
      }
    ],
    timeline: [
      ["2010.10", "《Speak Now》发行"],
      ["2010-2012", "巡演规模扩大，舞台叙事更戏剧化"],
      ["2012", "《Speak Now》时代收束，转向更锋利的流行制作"],
      ["2023.07", "《Speak Now (Taylor's Version)》发行，重写所有权支线"]
    ]
  },
  {
    id: "red",
    title: "Red",
    cn: "红（重录版）",
    year: "2012",
    color: "#b3192f",
    genre: "乡村 / 流行 / 摇滚交界",
    length: "红色断裂",
    thesis: "《Red》不是一张分手专辑，而是一张关于情绪无法保持同一种颜色的专辑。",
    context:
      "它在声音上左右摇摆，在情绪上也左右摇摆：兴奋、羞耻、愤怒、怀念、重生同时存在。红色不是爱情的颜色，而是所有强烈情绪混在一起之后的颜色。",
    life:
      "这个时期的她被媒体越来越多地简化成“写前任的人”。《Red》一方面加深了这种公众标签，另一方面也证明她能把私密失恋写成几乎电影级的时间感。",
    hits: [
      {
        title: "We Are Never Ever Getting Back Together",
        analysis:
          "她终于受够了。那些反复的纠缠、模糊的暧昧、你来我往的拉扯——她用最口语的方式关上了门。这次是真的，再也不会了。重复不是啰嗦，而是宣誓。",
        life:
          "这首歌让她向流行制作迈出更大的步伐。她不只在写关系结束，也在学习如何用副歌控制大众叙事。有时候，最有力的武器就是一句简单得不能再简单的话。"
      },
      {
        title: "I Knew You Were Trouble",
        analysis:
          "我知道你是麻烦，可我还是飞蛾扑火。副歌像坠落，是自责也是责怪。她写出了二十出头的混乱诚实：明知不好却仍被牵引，明知会痛却还要靠近。吸引力本身就是一种原罪。",
        life:
          "这首歌把她的爱情叙事从童话推进欲望和代价。她开始写身体的失控，写理智的失效，写那些光鲜亮丽的错误选择。"
      },
      {
        title: "All Too Well",
        analysis:
          "围巾、厨房、秋天、你妹妹的家。记忆比关系本身更长寿。她用十分钟把一段感情拆成一帧帧画面，每一帧都是证据，证明它曾经真实，证明它如何碎裂，证明我记得太清楚。",
        life:
          "公开讨论常把它与一段年龄差关系相连。更关键的是，她把被轻描淡写的痛苦写成史诗，后来十分钟版本又把“被删掉的情绪”带回现场。"
      }
    ],
    deeps: [
      {
        title: "State of Grace",
        analysis:
          "开场就是高速公路。爱情不是温柔降临，而是撞进生活。她用摇滚质感宣告：这一章会更大、更乱、更成人。红色不是一种颜色，是所有强烈情绪混在一起之后的温度。",
        life:
          "这是 Red 的开场宣言。她不再只写可爱的爱情，要写让人失去平衡的爱情。写那种明知危险还要踩下去的油门。"
      },
      {
        title: "Treacherous",
        analysis:
          "这条路很危险。可我还要走。她把风险写成选择：我知道路滑，我知道会摔，但我的脚已经抬起来了。危险在这里不是外部威胁，而是叙述者自己的意志。",
        life:
          "这首歌比许多热门曲更能解释红色时代：Taylor 在辨认自我责任，也在承认理智并不总能战胜身体。"
      },
      {
        title: "Holy Ground",
        analysis:
          "它把过去关系写成值得感恩的废墟。不是复合，也不是仇恨，而是承认某段时间确实让自己活过。",
        life:
          "这首歌为《Begin Again》铺路：红色时代的成熟，不是忘记，而是允许好记忆不再成为绊脚石。"
      }
    ],
    timeline: [
      ["2012.10", "《Red》发行"],
      ["2013", "Red Tour 展开，现场叙事更接近流行巨星"],
      ["2014", "未获年度专辑后，她转向更完整的流行专辑构想"],
      ["2021.11", "《Red (Taylor's Version)》重启围巾与记忆的公共讨论"]
    ]
  },
  {
    id: "1989",
    title: "1989",
    cn: "一九八九（重录版）",
    year: "2014",
    color: "#8ec8d8",
    genre: "合成器流行",
    length: "蓝色重生",
    thesis: "《1989》是她第一次完全把自己交给流行音乐，也是第一次把媒体凝视变成角色扮演。",
    context:
      "搬到 New York、剪短发、结交新朋友圈、抛开乡村标签：这张专辑像一场主动改名。蓝色既是清爽，也是冷静的品牌管理。",
    life:
      "她不再只是被媒体写的人，而是开始反写媒体眼中的自己。这个时代的成功巨大，也埋下了“完美形象越高，坠落叙事越诱人”的后续。",
    hits: [
      {
        title: "Shake It Off",
        analysis:
          "他们说我约会太多，说我善变，说我做作。那我就跳舞。她不逐条反驳，而是把批评者的声音变成节奏背景。最聪明的防御，是让攻击变成你的舞步。",
        life:
          "这是公众人物泰勒的生存策略。当解释无效，当澄清被淹没，就把所有噪音变成一首可以摇摆的歌。蓝色时代的轻盈，是用力建造出来的。"
      },
      {
        title: "Blank Space",
        analysis:
          "她扮演了媒体妖魔化的自己：危险、善变、爱列名单、随时准备疯掉。这不是否认标签，而是把标签表演到荒谬。你们觉得我是什么样？好，我演给你们看，演到你们分不清真假。",
        life:
          "这首歌直接回应“serial dater”式叙事。她把被消费的形象反过来出售，暂时夺回控制权。"
      },
      {
        title: "Style",
        analysis:
          "我们像某种永不过时的风格。分开了又回来，回来了又分开，循环往复却不显陈旧。她写的不是稳定爱情，而是两个人之间那种明知不对却戒不掉的吸引力。",
        life:
          "这首歌有 1989 时代的酷感——情绪被打磨得很光滑，可底下仍是无法完全斩断的牵扯。她开始把爱情写成美学问题：有些人就是和你的生命搭配。"
      }
    ],
    deeps: [
      {
        title: "Out of the Woods",
        analysis:
          "我们走出树林了吗？还没有，还没有。重复像焦虑的循环。这段关系从未安全过，每一刻都像在等警报响起。她写的不是是否相爱，而是恋爱本身的持续惊险状态。",
        life:
          "这首歌和高曝光恋情、事故传闻相连，但它更普遍的主题是：当关系被外界和内在不安包围，爱会变成一种持续的警惕。你永远在问，我们安全了吗？"
      },
      {
        title: "I Know Places",
        analysis:
          "我知道可以躲的地方。狗仔在追，镁光灯在闪，八卦在传播。她把恋人写成被猎捕的动物，把爱情写成隐蔽行动。亲密关系不再只属于两个人，而是需要安保的秘密。",
        life:
          "这是 1989 光鲜背后的阴影。名气越大，私人空间越小。她开始意识到，有些爱需要逃跑才能保存。"
      },
      {
        title: "Clean",
        analysis:
          "雨下了十个月。终于，我走出来了，干净了。她把走出一段关系写成戒断——不是轻松，而是痛苦的、反复的、最终成功的戒除。雨水洗掉的是依赖，留下的是新生的皮肤。",
        life:
          "这首歌给蓝色时代一个真正的结尾。她没有赢回某个人，她赢回的是不再被过去牵着走的自由。Clean 是关于重生，不是关于忘记。"
      }
    ],
    timeline: [
      ["2014.10", "《1989》发行"],
      ["2015", "巡演与大规模流行文化影响达到高峰"],
      ["2016", "公众形象争议升级，社交媒体围剿成为下一章背景"],
      ["2023.10", "《1989 (Taylor's Version)》发行"]
    ]
  },
  {
    id: "reputation",
    title: "reputation",
    cn: "名誉",
    year: "2017",
    color: "#111111",
    genre: "电子流行 / 暗色流行",
    length: "黑银盔甲",
    thesis: "这张专辑外壳是复仇，内核却是：当全世界只看见你的名声，还有谁能看见你本人？",
    context:
      "《reputation》以蛇、报纸、低音和黑银色建立防御系统。它故意不讨好，故意把“坏名声”穿成盔甲。",
    life:
      "在 2016 年社交媒体和名誉危机之后，她长期减少公开露面。专辑里最私密的线不是怒气，而是在噪音中发展出的低调爱情和自我保护。",
    hits: [
      {
        title: "Look What You Made Me Do",
        analysis:
          "旧的泰勒已经死了。电话铃声、蛇的意象、报纸头条——她把这些武器重组成盔甲。这不是传统的旋律胜利，而是戏剧宣告：我不再是你们定义的那个人，我是我选择成为的样子。",
        life:
          "2016 年的名誉危机之后，她学会了先发制人。不解释清白，而是先控制叙事的音量。这首歌是她的重启按钮，冷酷、机械、故意不讨好。"
      },
      {
        title: "...Ready For It?",
        analysis:
          "她把爱情和危险关进同一个地下室。重低音、电子噪音、反派口吻——这不是甜蜜的心动，而是两个逃亡者的同盟。你准备好和我一起承担这些了吗？",
        life:
          "黑色盔甲下，她真正关心的是：在全世界的吵闹里，还有没有私密空间可以存在？这首歌写的是在噪音中寻找共谋者。"
      },
      {
        title: "Delicate",
        analysis:
          "我的名声已经很糟了，但这让我想问你的事变得更难。这首歌是黑色盔甲上的裂缝——在复仇和强硬之外，她仍然脆弱，仍然想被一个具体的人理解。名声是包袱，也是测试。",
        life:
          "这解释了整张专辑的核心矛盾：她害怕被定义，却仍然渴望被看见。Delicate 比 Look What You Made Me Do 更真实，因为它承认了恐惧。"
      }
    ],
    deeps: [
      {
        title: "Getaway Car",
        analysis:
          "我们开着逃亡车离开，可这辆车从一开始就没打算开向家。她把一段关系写成逃离另一段关系的工具——速度感很爽，可叙述者心里清楚，这是一次注定失败的出逃。",
        life:
          "这是泰勒少见的自我审判。她承认自己也会把别人变成过渡的交通工具。不是所有歌都要把自己写得无辜，有时诚实就是最好的救赎。"
      },
      {
        title: "Call It What You Want",
        analysis:
          "你们可以随便叫我什么，我不在乎了。因为在他身边，我知道我是谁。当外界所有名字都失效，她只保留亲密关系里的命名权。这是放弃公关后的宣言。",
        life:
          "名誉危机后的避难所：世界可以喧哗，可是在一个人面前，我可以安静。这首歌写的是私人领地的建立，和公共形象的告别。"
      },
      {
        title: "New Year's Day",
        analysis:
          "派对结束了，满地都是彩色纸屑和空瓶子。她放下黑色盔甲，只剩钢琴和现实。爱情不是午夜的烟火，而是第二天早晨愿意留下来收拾残局的人。",
        life:
          "这首歌让 reputation 从复仇叙事落回长期关系。真正的结尾不是报复成功，而是有人愿意在光芒散去后，和你一起打扫房间。"
      }
    ],
    timeline: [
      ["2016", "公众形象危机与社交媒体沉默成为背景"],
      ["2017.11", "《reputation》发行"],
      ["2018", "Reputation Stadium Tour 展开"],
      ["2025.05", "母带回购后，未发布的重录计划不再是唯一结局"]
    ]
  },
  {
    id: "lover",
    title: "Lover",
    cn: "恋人",
    year: "2019",
    color: "#f29ac0",
    genre: "流行 / 彩色日记",
    length: "粉色日光",
    thesis: "《Lover》看似从黑夜走到粉色，其实是在问：被爱之后，我能不能停止害怕失去？",
    context:
      "这是她离开 Big Machine 后的第一张原创专辑，颜色明亮，主题却不轻。爱情、政治表达、家庭疾病、焦虑和所有权危机同时出现。",
    life:
      "2019 年既有稳定关系和更开放的公共表达，也有母带争议爆发。粉色不是单纯幸福，而是她试图用爱和创作抵抗失控。",
    hits: [
      {
        title: "Cruel Summer",
        analysis:
          "夏天像高烧。秘密的、滚烫的、危险的夏天。她写的不是明媚的恋爱，而是明知脆弱还要靠近的那种上瘾感。越甜越危险，越藏越想喊出来。这首歌是粉色外壳下的高温预警。",
        life:
          "这对应关系初期的不稳定——还不能公开，还没有确定，可身体已经失控了。多年后它在巡演中爆发，证明有些歌的生命力会反向改写流行史。"
      },
      {
        title: "Lover",
        analysis:
          "它像一首私人婚礼舞曲，把长期关系写成日常空间的共享。重点不是宏大誓言，而是“这个地方属于我们”。",
        life:
          "在 reputation 的黑夜之后，这首歌是她对安定的想象。不是被全世界爱，而是在一个属于我们的地方，脱下盔甲，只做我自己。"
      },
      {
        title: "The Man",
        analysis:
          "如果我是男人，这些就会被叫做策略、野心、魅力。可我是女性，所以它们是心机、控制欲、疯狂。她把性别双标写进流行副歌，让每个人都听见那个问题：同样的行为，换个性别，会得到什么评价？",
        life:
          "这是她更公开进入女性主义讨论的阶段。她的约会史、事业野心、公众形象，全都被性别化的标准审判过。这首歌不只是控诉，也是宣言。"
      }
    ],
    deeps: [
      {
        title: "The Archer",
        analysis:
          "我同时是射手和靶心。攻击别人，也伤害自己。她写出了名气造成的防御人格：我怕你离开，所以我先举起弓；可我举起弓，你就更想离开。这是粉色专辑里最不粉的黑洞。",
        life:
          "被爱没有治好焦虑，只是让焦虑有了更害怕失去的对象。这首歌把她的内在机制写得残酷而诚实——我是问题，我也是受害者。"
      },
      {
        title: "Cornelia Street",
        analysis:
          "如果我们分开，我就再也不能走这条街了。她把一条街变成关系的存档——不只失去你，还会失去这座城市里的某条路线、某家咖啡店、某个转角。地址成为情感的容器。",
        life:
          "这和纽约生活、低调恋情的空间记忆紧密相连。泰勒很擅长让地理承担情感证据：Cornelia Street 不只是地址，是她曾经相信未来的证明。"
      },
      {
        title: "Soon You'll Get Better",
        analysis:
          "这首歌几乎不像流行曲，更像病房里的祈祷。她对着母亲的病床低语：你会好起来的。可她不敢唱太大声，因为害怕把脆弱说破。这是 Lover 里最真实、也最难装饰的恐惧。",
        life:
          "这和母亲健康危机相连，是她最直接的家庭软肋。粉色专辑的明亮外壳，在这首歌里被现实击穿——有些痛不能粉饰，有些话只能轻声说。"
      }
    ],
    timeline: [
      ["2019.06", "母带争议爆发"],
      ["2019.08", "《Lover》发行"],
      ["2019", "更公开表达政治与行业立场"],
      ["2025.05", "母带回购使所有权支线迎来现实转折"]
    ]
  },
  {
    id: "folklore",
    title: "folklore",
    cn: "民间故事",
    year: "2020",
    color: "#8c8f88",
    genre: "独立民谣 / 室内叙事",
    length: "灰色森林",
    thesis: "当真实世界停摆，她把第一人称藏进别人的故事里，反而写出了更深的自己。",
    context:
      "疫情隔离中远程完成的《folklore》放弃大规模流行外壳，转向钢琴、吉他、森林和虚构人物。它不是逃离现实，而是换一种方式处理现实。",
    life:
      "公开资料显示，她与 Aaron Dessner、Jack Antonoff 等远程合作。这个阶段的真实经历是巡演被取消、世界静止、公共生活收缩，写作变成重新呼吸的方法。",
    hits: [
      {
        title: "cardigan",
        analysis:
          "你像一件被遗忘又被重新穿上的旧毛衣。年轻时你让我觉得自己重要，后来你离开了，再后来你回来说我仍是你的最爱。她写的不是初恋的纯真，而是被选择、被丢弃、又被记起的复杂重量。",
        life:
          "“青少年三角”让她从自传式写法转向多视角叙事，但被选择、被丢下、被记住这些主题仍与她长期创作母题相连。"
      },
      {
        title: "exile",
        analysis:
          "男女声像两个人站在同一片废墟前，却说着不同的语言。你以为我们早就结束了，我还以为我们在努力。悲剧不在于不爱，而在于两个人对关系死亡时间的理解永远错位。",
        life:
          "疫情时期的远程合唱，强化了距离感。这首歌展示她在 folklore 中让叙事不再只围绕单一视角——有时候，两个真相可以同时成立，而爱情仍然死去。"
      },
      {
        title: "the 1",
        analysis:
          "如果你是那个人就好了。她把错过写成一种轻巧的哀悼——不求复合，不问如果，只是承认在某个平行世界里，我们本可以是彼此的答案。成年人的遗憾，是知道有些门关上了就不会再开。",
        life:
          "这是疫情静止期的回望姿态。当外部生活暂停，人会重新盘点那些没有发生的版本——the 1 是写给平行宇宙里那个自己的明信片。"
      }
    ],
    deeps: [
      {
        title: "my tears ricochet",
        analysis:
          "你站在我的葬礼上，假装悲伤。可是杀死我的人是你。她把背叛写成葬礼，把眼泪写成回旋镖——你以为关系死了就结束了，可它的回声会一直击中你。",
        life:
          "这首歌被读作私人关系和音乐所有权争议的双重隐喻。在母带战争之后，它的每一句歌词都像控诉：被夺走的东西不会安静消失，它会一直 haunted 你。"
      },
      {
        title: "mirrorball",
        analysis:
          "我是一颗旋转的镜球，反射所有人的期待。她把表演者的职业写成存在方式——我闪闪发光，可那些光都是借来的；我变化多端，可哪一面才是真正的我？美丽和疲惫都来自碎片。",
        life:
          "这几乎是泰勒对自己职业人格的解剖。为了被看见而变化，变化久了也会忘记镜子后面是谁。Folklore 的森林里，她终于说出了这个秘密。"
      },
      {
        title: "peace",
        analysis:
          "我可以给你很多东西，但我永远给不了你平静。名气、狗仔、头条、风暴——这些是我生命的底色，也会是你生活的代价。她写的不是不够爱，而是爱到了仍然无法给予的那个东西。",
        life:
          "这首歌把稳定爱情与超级名声的矛盾写到骨髓里。被爱不等于能给对方正常生活。Peace 是她能给的最诚实的承诺：我爱你，但我不能让你安宁。"
      }
    ],
    timeline: [
      ["2020.03", "疫情改变全球巡演和创作方式"],
      ["2020.07", "《folklore》惊喜发行"],
      ["2021.03", "获得格莱美年度专辑"],
      ["2021", "木屋式舞台与长池录音进一步强化森林叙事"]
    ]
  },
  {
    id: "evermore",
    title: "evermore",
    cn: "恒久传说",
    year: "2020",
    color: "#a8672d",
    genre: "民谣 / 另类乡村",
    length: "琥珀余温",
    thesis: "如果《folklore》是走进森林，《evermore》就是在森林里学会和结局同住。",
    context:
      "姐妹专辑《evermore》更像短篇小说集：婚礼拒绝、谋杀叙事、祖母记忆、成年婚姻、历史禁恋和长期悲伤。它不再急着解释自己，而是观察人如何带着故事活下去。",
    life:
      "疫情创作没有停止，她反而继续向外扩展角色。现实中的停滞使她在文本里建造更多人生：不是每首歌都等同自传，但每首都暴露她关心的情感问题。",
    hits: [
      {
        title: "willow",
        analysis:
          "它像咒语，写一种被吸引力牵引的柔软顺从。声音轻盈，但“跟随”背后其实有很强的命运感。",
        life:
          "作为开场，它把 evermore 从灰色森林带到更温暖的民间传说区域。她仍然想让爱情保有魔法，即使经过所有的破碎和寒冬。"
      },
      {
        title: "champagne problems",
        analysis:
          "你跪下了，我跑掉了。一个人的完美夜晚，是另一个人的窒息现场。她把拒绝求婚写成两个人生叙事的彻底错位——不是不够好，而是我们想要的人生根本不是一条路。",
        life:
          "这首歌的力量在于不把拒绝者写成反派。Taylor 开始更成熟地书写“不能答应”本身也是痛苦。"
      },
      {
        title: "no body, no crime",
        analysis:
          "她的丈夫出轨，她消失了，我知道是他干的。泰勒用乡村犯罪小说的轻快节奏，把背叛、复仇和女性同盟编进三幕剧。这是 evermore 里最接近黑色幽默的时刻。",
        life:
          "和早期乡村根源有暗线连接——同样是讲故事，但这次不是校园日记，而是成年人的寓言，带着女性之间守望相助的凶猛。"
      }
    ],
    deeps: [
      {
        title: "tolerate it",
        analysis:
          "我把爱摆成宴席，你只是礼貌地吃了几口。她写的不是被恨的关系，而是比恨更冷的东西：被容忍。我的努力在你眼里只是背景音，我的存在对你来说是可有可无的装饰。",
        life:
          "这把 Dear John 式的权力不对等推进到婚姻层面。成熟到让人不舒服——有些关系里，最残忍的不是伤害，而是无感。"
      },
      {
        title: "marjorie",
        analysis:
          "外婆的声音还在我耳边。她教我的话，我当时不懂，现在终于听见了。泰勒把哀悼写成延续——失去的人不再说话，可她留下的智慧、习惯和声音，继续在我身体里活着。",
        life:
          "这是祖母记忆的祭坛，也是家族代际的传承。Folklore/Evermore 时代的虚构写作，在这首歌里回到真实血缘——有些故事不需要虚构。"
      },
      {
        title: "cowboy like me",
        analysis:
          "两个骗子在舞池相遇，假装自己不是来行骗的。可我们爱上了。最危险的不是骗局败露，而是两个职业骗子竟然想认真。她把爱情写成职业防御的失灵。",
        life:
          "这可以读作名利场隐喻——当每个人都在表演，真心反而是最冒险的赌注。两个习惯伪装的人，终于在彼此面前卸下面具。"
      }
    ],
    timeline: [
      ["2020.12", "《evermore》惊喜发行"],
      ["2021", "作为《folklore》的姐妹篇被持续讨论"],
      ["2021-2023", "重录项目启动，旧时代与森林时代并行"],
      ["2023", "Eras Tour 让 folklore/evermore 成为现场章节"]
    ]
  },
  {
    id: "midnights",
    title: "Midnights",
    cn: "午夜",
    year: "2022",
    color: "#0b2e59",
    genre: "合成器流行 / 午夜自白",
    length: "深蓝失眠",
    thesis: "《Midnights》不是新角色，而是所有旧角色在凌晨三点一起醒来。",
    context:
      "官方介绍将它定位为散落在人生中的失眠夜。于是它不像线性自传，更像把过去十几年未解决的问题重新摆上桌：自厌、野心、报复、旧伤、命运感。",
    life:
      "发行后不久，Eras Tour 时代启动。现实中的她一边回望人生，一边即将把所有时代放进同一场超大型巡演。",
    hits: [
      {
        title: "Anti-Hero",
        analysis:
          "问题是我。她把自我厌恶写成流行喜剧——我是怪物，我会毁掉好东西，我最怕的是镜子里的自己。可最尖锐的是：我知道我有问题，而这种自知也可能是另一种表演。",
        life:
          "这是超级名声下的自我审判。她不再只反击外界，也把镜头对准自己最难看的部分。午夜三点的诚实，是知道自己是问题却还要活下去。"
      },
      {
        title: "Lavender Haze",
        analysis:
          "我们在薰衣草色的迷雾里，外面的人都在喊：你们什么时候结婚？她把外界对关系进度的审问挡在雾外——爱情不是被公开定义的制度，而是两个人想保留的、朦胧的、暂时的状态。",
        life:
          "这对应长期关系在公众视野中的压力。粉丝想要童话结局，媒体要写婚礼新闻，可她只想说：我们还在薰衣草色的雾里，别催。"
      },
      {
        title: "Bejeweled",
        analysis:
          "如果你忘了我会发光，我就走到房间中央，重新闪耀给你看。她把自我价值回收写成宣战——我可以黯淡，但那是我的选择；我也可以随时重新变成钻石。",
        life:
          "这和职业野心、被低估后的复位感相连。午夜不只有忏悔和自我怀疑，也有我他妈还可以的重新上场。Bejeweled 是她给自己的强心针。"
      }
    ],
    deeps: [
      {
        title: "Maroon",
        analysis:
          "我们不是红色，是栗色。更深、更暗、更像红酒渍和旧伤疤。她把年轻时的激情重新染色——时间让红色沉积成褐红，让羞耻和怀念的比例重新调配。",
        life:
          "这是 Red 的成年回声。她回访旧主题而不重复旧自己——同样的故事，十年后的颜色已经不同了。Maroon 证明她还在和过去对话。"
      },
      {
        title: "You're On Your Own, Kid",
        analysis:
          "从头到尾，你都只能靠自己。她把少女野心写成孤独成本——想被某个人看见，可最后发现一路都是自己走过来的。没有骑士，没有救援，只有你和你的梦想。",
        life:
          "这几乎是全职业生涯缩影。后来在 Eras Tour 语境里，它变成了她和粉丝之间的共同宣言：我们都是靠自己长大的孩子。"
      },
      {
        title: "Would've, Could've, Should've",
        analysis:
          "如果我没有遇见你，我现在会是谁？她用虚拟语气审判一段关系——你偷走了我本该自然长大的那部分。愤怒不是因为被伤害，而是因为意识到某些成长被提前剥夺了。",
        life:
          "这和 Dear John 形成深层呼应，说明旧伤不会因为事业成功就消失。午夜三点，那些没有被好好处理的疼痛会准时醒来。"
      }
    ],
    timeline: [
      ["2022.10", "《Midnights》发行"],
      ["2022", "官方叙事为十三个失眠夜"],
      ["2023.03", "Eras Tour 开始"],
      ["2024", "《Midnights》余波进入 TTPD 的情绪背景"]
    ]
  },
  {
    id: "ttpd",
    title: "The Tortured Poets Department",
    cn: "折磨诗人俱乐部",
    year: "2024",
    color: "#d8d0c2",
    genre: "室内流行 / 长篇自白",
    length: "象牙与墨",
    thesis: "这张专辑像一份情绪案卷：她不再努力让每段痛苦优雅，而是把凌乱本身提交上来。",
    context:
      "《TTPD》出现在 Eras Tour 顶峰之后，也出现在长期关系结束和高度公众化新恋情的讨论之后。它的文本密度、怨气、幽默和自嘲都很重。",
    life:
      "公开报道和时间线显示，2023-2024 是她职业巅峰与私人关系巨变重叠的阶段。专辑里的“诗人俱乐部”不是高雅沙龙，而像情绪过载后的档案室。",
    hits: [
      {
        title: "Fortnight",
        analysis:
          "只有两周，却像过了一生。她把短暂时间写成长期后遗症——那十四天改变了我的精神秩序，让我用余生回想和消化。声音冷静，可内容像压低音量的崩溃。",
        life:
          "作为开场单曲，它没有用爆炸式副歌宣告时代，而是用麻木感告诉你：这一章的痛已经过了尖叫阶段，现在是漫长的整理。"
      },
      {
        title: "So Long, London",
        analysis:
          "再见了，伦敦。不只是一座城市，而是长期关系、共同生活、曾经相信的未来。她不是在一场争吵后离开，而是在多年希望耗尽后，终于收拾行李撤离。",
        life:
          "公开语境把它放在长期关系结束后阅读。她写的不是戏剧化分手，而是慢性死亡——我们试过了，用尽了，最后只剩告别。"
      },
      {
        title: "I Can Do It With a Broken Heart",
        analysis:
          "我可以带着一颗碎掉的心继续跳舞。台上要笑、要唱、要准时，台下的崩溃没有请假权。她把职业功能和私人灾难放在同一节拍里——表演成功不代表人没碎。",
        life:
          "这和 Eras Tour 的现实强烈相连。她在巡演史上最成功的时刻，同时经历私人关系的最大崩塌。这首歌让巨星劳动的残酷变得清晰可见。"
      }
    ],
    deeps: [
      {
        title: "But Daddy I Love Him",
        analysis:
          "所有人都说他不好，可是爸爸我爱他。她把公众审判写成小镇围观——每个人都自称关心你，却都想替你选择。她要的不是建议，而是成年人犯错的权利。",
        life:
          "它回应粉丝文化里“爱她所以管她”的复杂边界。Taylor 在这里要求成年人犯错的权利。"
      },
      {
        title: "The Black Dog",
        analysis:
          "我看见你的定位出现在那家酒吧。现代分手的残酷：你不在我身边，但你的坐标还在伤害我。她把位置分享、社交媒体和突然涌来的想象，写成技术时代的后遗症。",
        life:
          "这把她最擅长的地理记忆更新到手机时代。不只是 Cornelia Street，而是实时显示的蓝点、陌生的地址、和你不再需要我知道你在哪里的事实。"
      },
      {
        title: "The Prophecy",
        analysis:
          "我可以有成功、声望、故事，但能不能换一个不孤独的结局？她像在和命运讨价还价——我付出了这么多，为什么换不来一个简单的幸福？这是 TTPD 最赤裸的祈祷。",
        life:
          "这是 TTPD 最赤裸的核心之一。超级成功没有取消普通人的愿望，反而让“为什么还是得不到”更刺痛。"
      }
    ],
    timeline: [
      ["2023", "Eras Tour 与私人关系变化重叠"],
      ["2024.02", "格莱美舞台宣布新专辑"],
      ["2024.04", "《The Tortured Poets Department》发行"],
      ["2024", "TTPD 被加入 Eras Tour 表演章节"]
    ]
  },
  {
    id: "showgirl",
    title: "The Life of a Showgirl",
    cn: "歌舞女郎的人生",
    year: "2025",
    color: "#e66f22",
    genre: "流行 / 舞台自画像",
    length: "橙色灯光",
    thesis: "巡演之后，她没有退回幕后，而是把“表演者如何生活”本身写成了新的舞台。",
    context:
      "截至 2026-06-04，这张专辑是她最新的原创录音室专辑。AP 报道其 2025 年 10 月 3 日发行，并以现代唱片统计时代罕见的首周成绩继续扩大她的商业纪录。",
    life:
      "它处在 Eras Tour 之后、母带回购之后，也处在她与 Travis Kelce 公开关系和订婚之后。现实里的关键词从“夺回”转向“拥有”：拥有作品、拥有舞台，也更公开地拥有私人幸福。",
    hits: [
      {
        title: "The Fate of Ophelia",
        analysis:
          "以 Ophelia 意象开场，天然指向“被故事淹没的女性”。如果说早年她常被别人讲述，这里更像重新安排一个经典女性角色的命运。",
        life:
          "在母带回归和 Eras Tour 之后，这首歌像总纲：我不再只是别人故事里的女孩，我来写女孩落水之后怎么爬上岸。"
      },
      {
        title: "Opalite",
        analysis:
          "Opalite 是人造宝石，不是天生钻石，却同样能折射光。她把自我制造的能力写成骄傲——我的光不是与生俱来，而是经历压力后学会的闪耀方式。",
        life:
          "这和她职业后期的自我认知相连。泰勒的成功不是神话，是计算、努力、碎裂后重组的结果。Opalite 是她给自我打造的颂歌。"
      },
      {
        title: "The Life of a Showgirl",
        analysis:
          "歌舞女郎的人生不是只有掌声和镁光灯，还有汗水、纪律、孤独和那些在后台才会流下的眼泪。她把表演者身份写成一种生存方式——舞台即人生，人生即舞台。",
        life:
          "同名曲是整张专辑的核心。和 Sabrina Carpenter 的合作也带来代际对话——一个走过完整帝国的流行巨星，邀请下一代进入她的终章灯光。"
      }
    ],
    deeps: [
      {
        title: "Elizabeth Taylor",
        analysis:
          "她借好莱坞传奇的名字，谈美丽如何成为诅咒和祝福。被拍、被爱、被误读、被记住——女性明星的命运，是在镜头里被永恒定格，也在八卦里被反复消费。",
        life:
          "这不是简单致敬，而是她把自己的公众人生放进更长的女性明星谱系。从 Elizabeth Taylor 到 Taylor Swift，被凝视的女性如何在凝视中夺回叙事权？"
      },
      {
        title: "Ruin the Friendship",
        analysis:
          "跨过朋友的边界，可能毁掉一种安全，也可能打开一直被压住的真实。她写的是那个决定性的瞬间——要不要冒险把话说出口，即使这意味着失去现在拥有的。",
        life:
          "在更成熟的关系阶段，这类歌不再是青春暧昧，而是成年人在问：亲密关系的重新命名，会如何改变两个人的生活结构？"
      },
      {
        title: "Actually Romantic",
        analysis:
          "也许被过度关注、被反复解读、被记住每个细节，本身也构成一种荒诞的浪漫。她把外部噪音翻译成自己的戏剧语言——你们以为在消费我，可我在用你们的视线建造传奇。",
        life:
          "这是她后期最熟练的姿态：不被噪音吞掉，而是让它服务于舞台。Actually Romantic 写的是如何在被观看中，仍然保持自己的叙事主权。"
      }
    ],
    timeline: [
      ["2025.05", "AP 与 NPR 等报道她购回首六张专辑母带"],
      ["2025.08", "AP 报道她宣布第 12 张专辑，并公开发行日期"],
      ["2025.08", "AP 报道 Taylor Swift 与 Travis Kelce 订婚"],
      ["2025.10", "《The Life of a Showgirl》发行并刷新首周商业纪录"]
    ]
  }
];

function renderRail() {
  const rail = document.querySelector("#albumRail");
  const map = document.querySelector("#heroMap");

  albums.forEach((album, index) => {
    const railLink = document.createElement("a");
    railLink.className = "rail-item";
    railLink.href = `#album-${album.id}`;
    railLink.style.setProperty("--era", album.color);
    railLink.innerHTML = `
      <span class="chip"></span>
      <span class="num">${String(index + 1).padStart(2, "0")}</span>
      <span><strong>${album.title}</strong><small>${album.year} · ${album.cn}</small></span>
    `;
    rail.appendChild(railLink);

    const mapLink = document.createElement("a");
    mapLink.className = "map-item";
    mapLink.href = `#album-${album.id}`;
    mapLink.style.setProperty("--era", album.color);
    mapLink.innerHTML = `<strong>${album.title}</strong>`;
    map.appendChild(mapLink);
  });
}

function songCard(song, album, kind) {
  return `
    <article class="${kind === "hit" ? "song-card" : "deep-card"}" id="${slug(album.id + "-" + song.title)}">
      <header>
        <h4>${song.title}</h4>
        <span class="tag">${kind === "hit" ? "热门" : "深藏"}</span>
      </header>
      <p>${song.analysis}</p>
      <div class="life"><strong>真实与情感：</strong>${song.life}</div>
    </article>
  `;
}

function renderAlbums() {
  const stage = document.querySelector("#albums");
  stage.innerHTML = albums
    .map((album, index) => {
      const next = albums[index + 1];
      return `
        <article class="album" id="album-${album.id}" style="--era:${album.color}">
          <div class="album-header">
            <div>
              <div class="album-kicker">${String(index + 1).padStart(2, "0")} · ${album.year}</div>
              <h2>${album.title}<span class="cn">${album.cn}</span></h2>
              <div class="album-meta">
                <span>${album.genre}</span>
                <span>${album.length}</span>
                <span>时代色 ${album.color}</span>
              </div>
            </div>
            <div>
              <p class="era-thesis">${album.thesis}</p>
              <div class="album-copy">
                <section class="context-card">
                  <h3>专辑背景</h3>
                  <p>${album.context}</p>
                </section>
                <section class="context-card">
                  <h3>真实生活与情感</h3>
                  <p>${album.life}</p>
                </section>
              </div>
            </div>
          </div>
          <div class="tracks">
            <section class="track-group">
              <h3>热门歌曲深读</h3>
              <div class="song-grid">
                ${album.hits.map((song) => songCard(song, album, "hit")).join("")}
              </div>
            </section>
            <section class="track-group">
              <h3>被低估的宝藏</h3>
              <div class="song-grid">
                ${album.deeps.map((song) => songCard(song, album, "deep")).join("")}
              </div>
            </section>
          </div>
          <div class="timeline">
            ${album.timeline
              .map(([date, text]) => `<div><strong>${date}</strong><span>${text}</span></div>`)
              .join("")}
          </div>
          ${
            next
              ? `<a class="button secondary" style="margin-top:32px" href="#album-${next.id}">下一章：${next.title}</a>`
              : `<a class="button primary" style="margin-top:32px" href="#sources">抵达资料来源</a>`
          }
        </article>
      `;
    })
    .join("");
}

function renderSongIndex(filter = "all") {
  const list = document.querySelector("#songList");
  const songs = albums.flatMap((album) => [
    ...album.hits.map((song) => ({ ...song, album, kind: "hit" })),
    ...album.deeps.map((song) => ({ ...song, album, kind: "deep" }))
  ]);
  const filtered = filter === "all" ? songs : songs.filter((song) => song.kind === filter);
  list.innerHTML = filtered
    .map(
      (song) => `
      <a class="song-pill" href="#${slug(song.album.id + "-" + song.title)}" style="--era:${song.album.color}; border-left:6px solid ${song.album.color}">
        <strong>${song.title}</strong>
        <small>${song.album.title} · ${song.kind === "hit" ? "热门歌" : "深藏曲"}</small>
      </a>
    `
    )
    .join("");
}

function bindFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderSongIndex(button.dataset.filter);
    });
  });
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

let currentAlbumIndex = 0;
let currentFilter = "all";
let currentReadingIndex = 0;
let activeAlbumSection = "guide";
const readingIndexByAlbum = {};
let applyingHistoryState = false;

const landingCopy = {
  micro: "2006 - 2025 / 原创录音室专辑",
  title: "泰勒的12张专辑",
  lead: "沿着封面里的时间长河点选圆点：每一种颜色对应一个时代，每一张专辑都是一章。",
  primary: "从第一张开始",
  secondary: "点选时间长河"
};

const heroMapPositions = [
  { x: 20, y: 78, mx: 20, my: 78 },
  { x: 32, y: 82, mx: 32, my: 82 },
  { x: 44, y: 76, mx: 44, my: 76 },
  { x: 56, y: 70, mx: 56, my: 70 },
  { x: 68, y: 64, mx: 68, my: 64 },
  { x: 78, y: 56, mx: 78, my: 56 },
  { x: 74, y: 48, mx: 74, my: 48 },
  { x: 62, y: 42, mx: 62, my: 42 },
  { x: 68, y: 34, mx: 68, my: 34 },
  { x: 76, y: 32, mx: 76, my: 32 },
  { x: 78, y: 40, mx: 78, my: 40 },
  { x: 66, y: 56, mx: 66, my: 56 }
];

Object.assign(landingCopy, {
  micro: "FOR THE SWIFTIES",
  title: "The 12 Eras of Taylor Swift",
  titleHtml: 'The <span class="era-title-accent">12 Eras</span> of Taylor Swift',
  lead: "A journey through every era. Twelve chapters of music, memories, and magic.",
  primary: "EXPLORE THE JOURNEY",
  secondary: ""
});

heroMapPositions.splice(
  0,
  heroMapPositions.length,
  { x: 28, y: 78, mx: 15, my: 70 },
  { x: 45, y: 64, mx: 16, my: 65 },
  { x: 53, y: 44, mx: 28, my: 57 },
  { x: 64, y: 34, mx: 44, my: 53 },
  { x: 80, y: 17, mx: 69, my: 46 },
  { x: 78, y: 30, mx: 66, my: 51 },
  { x: 75, y: 45, mx: 61, my: 57 },
  { x: 89, y: 36, mx: 83, my: 54 },
  { x: 88, y: 56, mx: 82, my: 62 },
  { x: 70, y: 72, mx: 54, my: 68 },
  { x: 55, y: 88, mx: 30, my: 75 },
  { x: 88, y: 88, mx: 82, my: 75 }
);

const albumCovers = {
  "taylor-swift": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg",
  fearless: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg",
  "speak-now": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg",
  red: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c6/27/9c/c6279c07-9329-827d-31c4-f5d4c7d99ff4/21UM1IM25046.rgb.jpg/600x600bb.jpg",
  "1989": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg",
  reputation: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg",
  lover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg",
  folklore: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8c/ef/c2/8cefc23a-61b7-05ff-b52a-bb1e4922087c/20UMGIM64216.rgb.jpg/600x600bb.jpg",
  evermore: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/18/93/99/189399a7-95e1-324b-e40a-bd9e3ea22a95/20UM1IM14847.rgb.jpg/600x600bb.jpg",
  midnights: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fb/b7/5d/fbb75d98-3b52-2fa5-ca82-658194f3c498/23UMGIM58157.rgb.jpg/600x600bb.jpg",
  ttpd: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f2/e9/df/f2e9dfd0-6602-1aef-6171-51cd3138df86/24UM1IM07019.rgb.jpg/600x600bb.jpg",
  showgirl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"
};

const albumReadings = {
  "taylor-swift": {
    lenses: [
      { label: "入口", title: "把普通生活写成可回放的记忆", text: "《Tim McGraw》让一段关系寄存在别人的歌声里，《Our Song》则把车门声、电话声变成两个人自造的仪式。她一开始就不是只写“喜欢谁”，而是在练习如何让生活细节承担情绪。" },
      { label: "裂缝", title: "少女口吻里已经有自尊的伤口", text: "《Teardrops on My Guitar》的克制和《Cold As You》的冷峻放在一起看，会发现早期 Taylor 已经会写“我没有赢，但我看清了”。甜美外壳下面，是对被忽视、被轻慢的敏感记录。" },
      { label: "出口", title: "寻找世界位置，也是寻找作者位置", text: "《A Place in This World》不是单纯青春片主题曲，它和她从 Pennsylvania 走向 Nashville 的现实动作重合：不知道终点，但已经决定把写歌当作抵达方式。" }
    ],
    anchors: ["Tim McGraw / Our Song：记忆由物件和声音触发", "Cold As You：早期就出现关系里的权力差", "Tied Together with a Smile：把旁人的脆弱写进自己的观察"]
  },
  fearless: {
    lenses: [
      { label: "童话", title: "相信童话，但开始修正童话", text: "《Love Story》把悲剧改写成被允许的爱情，《White Horse》却把王子和白马撤下舞台。两首歌并排时，这张专辑就不只是金色浪漫，而是少女第一次发现想象和现实并不总能对齐。" },
      { label: "校园", title: "暗恋、比较心与自我安慰", text: "《You Belong With Me》把“我更懂你”的亲密感写得明亮，也暴露青春期常见的比较心理。《Fifteen》则像多年后回头提醒自己：被选择不等于被珍惜。" },
      { label: "余震", title: "无畏不是不痛，而是痛后还愿意相信", text: "《The Way I Loved You》和《Breathe》分别写强烈与告别：前者承认失控的吸引力，后者承认没有坏人的离开也会很疼。它们让《Fearless》的勇敢不再单薄。" }
    ],
    anchors: ["Love Story / White Horse：童话的建立与拆解", "Fifteen：青春经验被成年视角重新照亮", "Breathe：没有反派的失去，也是真实失去"]
  },
  "speak-now": {
    lenses: [
      { label: "自证", title: "整张专辑像一封封署名信", text: "全专独立创作让《Speak Now》的情绪更像直接证词。《Mine》写害怕重复旧伤却仍想承诺，《Mean》把外界轻视转成未来时态的反击，创作本身就是她的回答。" },
      { label: "道歉", title: "不只控诉别人，也审判自己", text: "《Back to December》让叙述者站到亏欠者位置；《Dear John》则写清醒后的控诉。一个向内承担，一个向外划线，让这张紫色专辑有了更复杂的道德重心。" },
      { label: "长大", title: "舞台越大，越怕失去原来的自己", text: "《Never Grow Up》和《Long Live》放在一起，是私人童年与公共胜利的两端：她一边珍惜家里的灯光，一边知道自己和听众已经共同走进更大的舞台。" }
    ],
    anchors: ["Mine：承诺背后带着家庭阴影", "Dear John：年龄与话语权不平等的清醒回看", "Enchanted：尚未被现实弄脏的可能性"]
  },
  red: {
    lenses: [
      { label: "强度", title: "红色不是爱情，是所有高温情绪混在一起", text: "《State of Grace》把相遇写成开阔的命运感，《Treacherous》马上提醒这种吸引也危险。专辑从一开始就不稳定，所以后面的心碎并不是意外，而是这段关系本身的速度。" },
      { label: "断裂", title: "流行爆点和私人痛感互相拉扯", text: "《We Are Never Ever Getting Back Together》像把门摔上，《All Too Well》却把门后的房间、围巾、秋天和回忆全部留下。一个负责切断，一个负责证明切断为什么这么难。" },
      { label: "余温", title: "失去之后，仍然保留爱的证据", text: "《Holy Ground》《Begin Again》和《Sad Beautiful Tragic》让《Red》不只是愤怒。她承认有些关系结束了，但曾经的光、身体记忆和重新开始的可能都还存在。" }
    ],
    anchors: ["All Too Well：时间、物件和创伤记忆被拉长", "22：把断裂后的年轻自由写成集体出口", "Treacherous / Holy Ground：危险和怀念可以同时成立"]
  },
  "1989": {
    lenses: [
      { label: "迁移", title: "纽约不是背景，是重写身份的开关", text: "《Welcome to New York》打开的是城市门，也是声音上的新门。离开乡村框架后，她用合成器、鼓点和更锋利的流行结构，主动把自己放进全球主流中心。" },
      { label: "凝视", title: "她开始把媒体眼光写进歌曲内部", text: "《Blank Space》不是承认标签，而是扮演标签；《I Know Places》把恋爱写成被追捕。私人关系从此不再只发生在两个人之间，还发生在镜头和标题之下。" },
      { label: "洗净", title: "酷感之后，真正的结尾是松手", text: "《Style》《Out of the Woods》保留高压关系的漂亮危险，《Clean》才是这张专辑最安静的胜利：不是赢回谁，而是终于能从循环里出来。" }
    ],
    anchors: ["Blank Space：把外界讽刺改造成角色表演", "Out of the Woods：焦虑感被写进重复结构", "Clean：结束不是爆炸，而是重新呼吸"]
  },
  reputation: {
    lenses: [
      { label: "外壳", title: "蛇、报纸和黑色，只是防御系统", text: "《Look What You Made Me Do》和《...Ready For It?》把名声危机变成硬壳：她先抢回叙事音量，让所有人听见“旧形象已经死亡”。但这不是专辑最深处。" },
      { label: "内核", title: "真正的主线是低声建立信任", text: "《Delicate》《Call It What You Want》《New Year's Day》都很轻：它们写的不是复仇，而是在全世界吵闹时，有一个人仍愿意看见她本人。黑色时代最柔软的部分藏在后半张。" },
      { label: "逃亡", title: "浪漫在这里常常带着犯罪片语法", text: "《Getaway Car》把错误关系写成逃车，《Dancing with Our Hands Tied》把相爱写成随时会被发现。她不是单纯沉迷戏剧，而是在写名声如何改变亲密关系的安全感。" }
    ],
    anchors: ["Delicate：名声破损后，亲密要重新试探", "Getaway Car：自知错误仍被速度推着走", "New Year's Day：喧嚣散场后留下的人才是答案"]
  },
  lover: {
    lenses: [
      { label: "日光", title: "它不是没有阴影，而是选择走向光", text: "《Lover》《Paper Rings》《Daylight》让爱从灾难叙事转向日常承诺。她不再只写心动爆炸，也开始写愿意反复选择同一个人的安定。" },
      { label: "焦虑", title: "幸福越具体，失去的恐惧越具体", text: "《The Archer》《Cornelia Street》《Afterglow》说明这张粉色专辑并不轻。她在爱里反复检查自己：会不会逃跑，会不会搞砸，会不会把好东西也弄坏。" },
      { label: "公共", title: "私人幸福旁边，是她对世界的发声", text: "《The Man》《Miss Americana & the Heartbreak Prince》《You Need to Calm Down》把性别、政治和公共身份放入流行语境。她开始更明确地让作品承担立场。" }
    ],
    anchors: ["Cruel Summer：快乐外壳下的高压秘密", "Cornelia Street：地点成为失去恐惧的容器", "Soon You'll Get Better：专辑里最真实、也最难装饰的脆弱"]
  },
  folklore: {
    lenses: [
      { label: "虚构", title: "换成第三人称，不等于离开自己", text: "《cardigan》《august》《betty》让她用角色讲故事，但情绪仍然是她熟悉的：被选择、被错过、被回忆改写。虚构只是让私人经验获得更宽的出口。" },
      { label: "幽灵", title: "很多歌都在写已经无法修复的关系", text: "《my tears ricochet》像葬礼，也是背叛后的回声；《exile》写两个人终于听懂彼此时已经太晚。整张专辑的安静感，其实来自关系废墟。" },
      { label: "表演", title: "她也把自己的职业人格放进森林里审视", text: "《mirrorball》和《this is me trying》把讨好、努力、崩溃和自救写得很近。疫情时期的低声写作，让她暂时从巨型舞台退回到内心房间。" }
    ],
    anchors: ["cardigan / august / betty：三角叙事让同一段伤害拥有多个视角", "mirrorball：表演型自我与被爱需求重合", "peace：爱到最后仍然担心自己给不了安宁"]
  },
  evermore: {
    lenses: [
      { label: "余波", title: "它像 folklore 之后继续燃着的灰烬", text: "《willow》还有命运式牵引，但《champagne problems》《tolerate it》马上把爱写成不合时宜、不被接住和不被珍惜。这里的浪漫更冷，也更成年。" },
      { label: "人物", title: "她把自己藏进更多故事人物里", text: "《no body, no crime》像短篇犯罪小说，《dorothea》《cowboy like me》像旧友和骗子的侧影。角色越多，专辑越像一座冬天的小镇。" },
      { label: "哀悼", title: "真正重的歌，是关于时间不可逆", text: "《marjorie》把亲人记忆写成还在耳边的声音，《happiness》承认一段关系既真实幸福过，也真的结束了。它的成熟在于不急着把任何人写成坏人。" }
    ],
    anchors: ["champagne problems：拒绝不是戏剧化反转，而是人生方向不一致", "tolerate it：被容忍比被抛弃更慢性", "right where you left me：时间停滞成为创伤形态"]
  },
  midnights: {
    lenses: [
      { label: "午夜", title: "这不是派对时间，是清算时间", text: "《Lavender Haze》表面轻盈，背后是拒绝被婚恋脚本定义；《Anti-Hero》则把自我厌恶直接放到聚光灯下。午夜让她把白天压住的念头全部放出来。" },
      { label: "回声", title: "旧伤不是过去了，只是换时间出现", text: "《Maroon》《Question...?》《Would've, Could've, Should've》都像半夜被记忆敲门。她不是按时间顺序回忆，而是按创伤仍会刺痛的方式回忆。" },
      { label: "自造", title: "孤独之后，她承认自己也参与了命运设计", text: "《You're On Your Own, Kid》从缺席感写到自我建造，《Mastermind》则坦白控制欲和渴望被爱的关系。它让成功不只是荣耀，也带着代价。" }
    ],
    anchors: ["Anti-Hero：把自我怀疑做成流行中心", "You're On Your Own, Kid：孤独被转化成成长账本", "Bejeweled：重新夺回被低估后的闪耀权"]
  },
  ttpd: {
    lenses: [
      { label: "失序", title: "它不像精修回忆，更像情绪档案直接倒出来", text: "《Fortnight》开场就把日常、幻想和崩溃混在一起；《Down Bad》《Fresh Out the Slammer》让爱像戒断。它的凌乱不是缺陷，而是失恋急性期的形式。" },
      { label: "舞台", title: "最痛的地方，是她还必须继续表演", text: "《I Can Do It With a Broken Heart》把职业纪律写得几乎残酷：心碎不是停工理由，而是被灯光吞掉的私事。这首歌把 Eras Tour 的巨大成功和私人崩塌并置起来。" },
      { label: "审判", title: "她同时审判恋人、观众，也审判自己的幻觉", text: "《So Long, London》是告别长期关系的低温哀伤，《But Daddy I Love Him》反击旁观者干预，《The Prophecy》则把问题收回到命运感：为什么我总像在求一个不会来的答案。" }
    ],
    anchors: ["So Long, London：长期关系结束时的耗尽感", "The Smallest Man Who Ever Lived：愤怒终于不再修辞化", "The Prophecy：把渴望写成近乎祈祷的孤独"]
  },
  showgirl: {
    lenses: [
      { label: "谢幕", title: "巡演之后，她把舞台生活写成生活本身", text: "《The Fate of Ophelia》和标题曲都在处理“被观看的人如何活下去”。她不再只写后台伤口，也写一个长期表演者如何把掌声、疲惫和私人幸福放进同一张脸。" },
      { label: "光泽", title: "亮片感不是轻浮，是现代流行的防水层", text: "《Opalite》《Elizabeth Taylor》借珠宝、电影明星和光泽意象，把被凝视的女性写成主动经营形象的人。漂亮在这里不是被动装饰，而是一种控制场面的方式。" },
      { label: "私人", title: "越公开，越需要保护真正的亲密", text: "《Ruin the Friendship》《Actually Romantic》《Honey》让专辑从大舞台落回关系细节。它关心的不是“她是不是幸福”这个八卦问题，而是幸福如何在巨大的公众叙事里保持具体。" }
    ],
    anchors: ["The Fate of Ophelia：把被观看的悲剧女性改写成主动叙事", "Opalite：新光泽替代旧阴影", "The Life of a Showgirl：表演者终于把人生和舞台合并"]
  }
};

renderRail = function () {
  const rail = document.querySelector("#albumRail");
  const map = document.querySelector("#heroMap");
  rail.innerHTML = "";
  if (map) map.innerHTML = "";

  const homeLink = document.createElement("a");
  homeLink.className = "palette-home";
  homeLink.href = "#top";
  homeLink.setAttribute("aria-label", "回到目录页");
  homeLink.title = "回到目录页";
  homeLink.innerHTML = "<span></span>";
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    closePalette();
    showLanding({ pushHistory: true });
  });
  rail.appendChild(homeLink);

  albums.forEach((album, index) => {
    const railLink = document.createElement("a");
    railLink.className = "rail-item";
    railLink.href = `#album-${album.id}`;
    railLink.dataset.album = album.id;
    railLink.dataset.label = album.title;
    railLink.title = `${album.title} · ${album.cn}`;
    const angle = -90 + index * 30;
    const radius = 124;
    railLink.style.setProperty("--x", `${Math.round(Math.cos((angle * Math.PI) / 180) * radius)}px`);
    railLink.style.setProperty("--y", `${Math.round(Math.sin((angle * Math.PI) / 180) * radius)}px`);
    railLink.style.setProperty("--era", album.color);
    railLink.innerHTML = `
      <span class="chip"></span>
      <span class="num">${String(index + 1).padStart(2, "0")}</span>
      <span><strong>${album.title}</strong><small>${album.year} · ${album.cn}</small></span>
    `;
    railLink.addEventListener("click", (event) => {
      event.preventDefault();
      if (isTouchPalette() && railLink.dataset.preview !== "true") {
        document.querySelectorAll(".rail-item").forEach((item) => {
          item.dataset.preview = "false";
          item.classList.remove("preview");
        });
        railLink.dataset.preview = "true";
        railLink.classList.add("preview");
        document.querySelector(".rail")?.classList.add("open");
        return;
      }
      selectAlbum(index);
      closePalette();
    });
    rail.appendChild(railLink);

    if (map) {
      const mapLink = document.createElement("a");
      const position = heroMapPositions[index] || { x: 50, y: 50, mx: 50, my: 50 };
      mapLink.className = "map-item";
      mapLink.href = `#album-${album.id}`;
      mapLink.dataset.album = album.id;
      mapLink.dataset.label = album.title;
      mapLink.style.setProperty("--era", album.color);
      mapLink.style.setProperty("--map-x", `${position.x}%`);
      mapLink.style.setProperty("--map-y", `${position.y}%`);
      mapLink.style.setProperty("--map-mobile-x", `${position.mx}%`);
      mapLink.style.setProperty("--map-mobile-y", `${position.my}%`);
      mapLink.setAttribute("aria-label", album.title);
      mapLink.innerHTML = `<strong>${album.title}</strong>`;
      mapLink.addEventListener("click", (event) => {
        event.preventDefault();
        selectAlbum(index);
      });
      map.appendChild(mapLink);
    }
  });
};

songCard = function (song, album, kind) {
  return `
    <article class="${kind === "hit" ? "song-card" : "deep-card"} song-open-card" id="${slug(album.id + "-" + song.title)}" data-song-title="${escapeHtml(song.title)}" role="button" tabindex="0">
      <header>
        <h4>${song.title}</h4>
        <span class="tag">${kind === "hit" ? "热门" : "深藏"}</span>
      </header>
      <p>${song.analysis}</p>
      <div class="life">${song.life}</div>
      ${renderNeteasePlay(album, song.title, "card")}
    </article>
  `;
};

renderAlbums = function () {
  if (window.location.hash.startsWith("#album-")) {
    selectAlbum(getAlbumIndexFromHash(), { fromHash: true, skipScroll: true });
    return;
  }
  showLanding();
};

function applyLandingCopy() {
  const micro = document.querySelector(".hero .micro");
  const title = document.querySelector("#hero-title");
  const lead = document.querySelector(".hero .lead");
  const primary = document.querySelector(".hero-actions .button.primary");
  const secondaryButtons = document.querySelectorAll(".hero-actions .button.secondary");

  if (micro) micro.textContent = landingCopy.micro;
  if (title) title.innerHTML = landingCopy.titleHtml || landingCopy.title;
  if (lead) lead.textContent = landingCopy.lead;
  if (primary) primary.textContent = landingCopy.primary;
  secondaryButtons.forEach((secondary) => {
    if (landingCopy.secondary) {
      secondary.textContent = landingCopy.secondary;
      secondary.hidden = false;
    } else {
      secondary.hidden = true;
    }
  });
}

function appHistoryState(view = "landing", albumIndex = currentAlbumIndex, section = activeAlbumSection) {
  const album = albums[albumIndex] || albums[0];
  return {
    swiftStory: true,
    view,
    album: album?.id || albums[0].id,
    section: section || "guide"
  };
}

function replaceAppHistory(state, url) {
  if (window.history?.replaceState) {
    history.replaceState(state, "", url);
  }
}

function pushAppHistory(state, url) {
  if (!applyingHistoryState && window.history?.pushState) {
    history.pushState(state, "", url);
  }
}

function applyRouteState(state) {
  applyingHistoryState = true;
  if (state?.view === "album") {
    const index = albums.findIndex((album) => album.id === state.album);
    currentAlbumIndex = index >= 0 ? index : 0;
    activeAlbumSection = state.section || "guide";
    currentFilter = "all";
    renderCurrentAlbum();
    requestAnimationFrame(() => {
      const target = document.querySelector("#albums");
      if (target) window.scrollTo({ top: target.offsetTop, behavior: "auto" });
    });
  } else {
    showLanding({ preserveHistory: true });
  }
  applyingHistoryState = false;
}

function initializeHistoryState() {
  const hash = window.location.hash;
  if (hash.startsWith("#album-")) {
    const index = getAlbumIndexFromHash();
    replaceAppHistory(appHistoryState("album", index, activeAlbumSection), `#album-${albums[index].id}`);
  } else {
    replaceAppHistory(appHistoryState("landing"), window.location.pathname + window.location.search);
  }
}

function showLanding(options = {}) {
  applyLandingCopy();
  const stage = document.querySelector("#albums");
  document.body.classList.add("landing-mode");
  document.body.classList.remove("album-mode", "album-hub-mode", "album-section-mode", "modal-open", "reading-open");
  document.body.style.removeProperty("--era");
  delete document.body.dataset.album;
  if (stage) {
    stage.innerHTML = "";
    stage.style.removeProperty("--era");
  }
  document.querySelectorAll("[data-album]").forEach((item) => {
    item.classList.remove("active", "preview");
    item.dataset.preview = "false";
  });
  if (!options.preserveHistory) {
    const landingUrl = window.location.pathname + window.location.search;
    if (options.pushHistory) {
      pushAppHistory(appHistoryState("landing"), landingUrl);
    } else if (window.location.hash.startsWith("#album-")) {
      replaceAppHistory(appHistoryState("landing"), landingUrl);
    }
  }
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

const albumDirectorySections = [
  { key: "reading", title: "专辑讲解", subtitle: "走进专辑的故事", icon: "book" },
  { key: "timeline", title: "时间线", subtitle: "重要时刻与旅程", icon: "hourglass" },
  { key: "tracklist", title: "全部曲目", subtitle: "全部收录与试听", icon: "disc" }
];

function sectionByKey(key) {
  return albumDirectorySections.find((section) => section.key === key) || albumDirectorySections[0];
}

function renderDirectoryIcon(icon) {
  const paths = {
    back: `<path d="m15 5-7 7 7 7"/>`,
    book: `<path d="M5 5.5c3.4-.6 5.7.2 7 2.1v13.2c-1.3-1.5-3.6-2.1-7-1.6z"/><path d="M19 5.5c-3.4-.6-5.7.2-7 2.1v13.2c1.3-1.5 3.6-2.1 7-1.6z"/><path d="M12 7.6v13.2"/>`,
    note: `<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>`,
    disc: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4"/><path d="M12 4a8 8 0 0 1 8 8"/>`,
    feather: `<path d="M20 4c-7.5.4-12.2 3.5-14 9.3-.8 2.5-1 4.7-.7 6.7 1.8.2 4-.3 6.5-1.5 5.6-2.8 8.4-7.6 8.2-14.5z"/><path d="M5.4 19.8 14 11"/><path d="M9.5 16.1H6.2"/><path d="M12.2 13.3H8.8"/>`,
    heart: `<path d="M20.2 5.9c-1.8-2-4.7-2-6.5-.1L12 7.5l-1.7-1.7c-1.8-1.9-4.7-1.9-6.5.1-1.9 2.1-1.7 5.3.4 7.3l7.8 7.1 7.8-7.1c2.1-2 2.3-5.2.4-7.3z"/>`,
    hourglass: `<path d="M6 3h12"/><path d="M6 21h12"/><path d="M8 3c0 4 2.5 5.8 4 8 1.5-2.2 4-4 4-8"/><path d="M8 21c0-4 2.5-5.8 4-8 1.5 2.2 4 4 4 8"/>`
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[icon] || paths.book}</svg>`;
}

function renderAlbumSwitchDock(prev, album, next) {
  return `
    <nav class="album-switch-dock" style="--era:${album.color}" aria-label="专辑切换">
      <button type="button" data-switch="-1">
        <span class="switch-thumb"><img src="${albumCovers[prev.id] || ""}" alt="" loading="lazy" /></span>
        <span class="switch-copy"><small>上一张</small><strong>${prev.title}</strong></span>
      </button>
      <button class="album-switch-dock__current" type="button" data-open-palette>
        <span class="switch-thumb"><img src="${albumCovers[album.id] || ""}" alt="" loading="lazy" /></span>
        <span class="switch-copy"><small>当前专辑</small><strong>${String(currentAlbumIndex + 1).padStart(2, "0")} / ${albums.length}</strong></span>
      </button>
      <button type="button" data-switch="1">
        <span class="switch-copy"><small>下一张</small><strong>${next.title}</strong></span>
        <span class="switch-thumb"><img src="${albumCovers[next.id] || ""}" alt="" loading="lazy" /></span>
      </button>
    </nav>
  `;
}

function renderAlbumGuide(album, prev, next) {
  const directorySections = albumDirectorySections.map((section) =>
    section.key === "reading" ? { ...section, subtitle: `走进《${album.title}》的故事` } : section
  );
  return `
    <article class="album album-guide" id="album-${album.id}" style="--era:${album.color}; --cover:url('${albumCovers[album.id] || ""}')">
      <div class="album-atmosphere" aria-hidden="true"></div>
      <div class="album-guide__wash" aria-hidden="true"></div>
      <div class="album-guide__top">
        <div class="album-guide__nav">
          <button class="album-guide__back" type="button" data-home-page aria-label="回到首页">${renderDirectoryIcon("back")}</button>
          <button class="album-guide__heart" type="button" data-open-palette aria-label="打开专辑导航">${renderDirectoryIcon("heart")}</button>
        </div>
        <p class="album-guide__label">Taylor Swift</p>
        <h2>${album.title}</h2>
        <p class="album-guide__meta">${album.year} · ${album.genre}</p>
        <div class="album-guide__cover-wrap">
          <figure class="album-guide__cover">
            <img src="${albumCovers[album.id] || ""}" alt="${album.title} 专辑封面" loading="eager" fetchpriority="high" decoding="async" />
          </figure>
          <div class="album-guide__vinyl" aria-hidden="true"></div>
        </div>
        <blockquote>${album.thesis}</blockquote>
      </div>
      <section class="album-directory" aria-label="${escapeHtml(album.title)} 专辑导览">
        <div class="album-directory__title">
          <span></span>
          <strong>专辑导览</strong>
        </div>
        <div class="album-directory__cards">
          ${directorySections
            .map(
              (section) => `
                <button class="directory-card directory-card--${section.key}" type="button" data-album-section="${section.key}">
                  <span class="directory-card__icon">${renderDirectoryIcon(section.icon)}</span>
                  <span class="directory-card__copy">
                    <strong>${section.title}</strong>
                    <small>${section.subtitle}</small>
                  </span>
                  <span class="directory-card__arrow">→</span>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
      ${renderAlbumSwitchDock(prev, album, next)}
    </article>
  `;
}

function getTrackTitlesWithGroups(album) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  return [
    ...list.core.map((title, index) => ({ title, index: index + 1, group: "主线" })),
    ...list.expanded.map((title, index) => ({ title, index: list.core.length + index + 1, group: "加值 / Vault" }))
  ];
}

function renderLyricsRoom(album) {
  const tracks = getTrackTitlesWithGroups(album);
  return `
    <section class="lyrics-room">
      <div class="tracklist-heading">
        <h3>歌词房间</h3>
        <p>从任意一首歌进入独立阅读窗，先看歌词，再切到解读。</p>
      </div>
      <div class="lyrics-room__grid">
        ${tracks
          .map(
            (row) => `
              <button class="lyrics-room__song song-open-row" type="button" data-song-title="${escapeHtml(row.title)}">
                <span>${String(row.index).padStart(2, "0")}</span>
                <strong>${escapeHtml(row.title)}</strong>
                <small>${row.group} · ${trackStatus(album, row.title)}</small>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderReadingPortal(album) {
  const reading = albumReadings[album.id];
  if (!reading) return "";
  return `
    <section class="reading-portal">
      <div class="reading-portal__intro">
        <p class="era-thesis">${album.thesis}</p>
        <div class="era-narrative">
          <p>${album.context}</p>
          <p>${album.life}</p>
        </div>
      </div>
      <div class="reading-portal__grid" aria-label="${escapeHtml(album.title)} 专辑解读章节">
        ${reading.lenses
          .map(
            (item, index) => `
              <button class="reading-entry" type="button" data-reading-card="${index}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <small>${escapeHtml(item.label)}</small>
                <strong>${escapeHtml(item.title)}</strong>
                <em>进入阅读</em>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function buildTimelineMoments(album) {
  const reading = albumReadings[album.id];
  const stages = ["起点", "转折", "成形", "回声", "余波"];
  return album.timeline.map(([date, text], index) => {
    const lens = reading?.lenses[index % reading.lenses.length];
    const hit = album.hits[index % album.hits.length];
    const deep = album.deeps[index % album.deeps.length];
    const isFirst = index === 0;
    const isLast = index === album.timeline.length - 1;
    let reflection = lens?.text || album.thesis;
    if (isFirst) {
      reflection = `这个节点解释了《${album.title}》为什么会以这种颜色开始：${album.context}`;
    }
    if (isLast) {
      reflection = `这一刻把时代的结果留了下来。再回听《${hit.title}》和《${deep.title}》，能听见它怎样把私人经验变成长期回声。`;
    }
    return {
      date,
      text,
      stage: stages[index % stages.length],
      anchor: hit?.title || deep?.title,
      reflection
    };
  });
}

function renderExpandedTimeline(album) {
  const moments = buildTimelineMoments(album);
  return `
    <section class="timeline-panel timeline-panel--deep">
      <div class="tracklist-heading timeline-heading">
        <h3>时间线</h3>
        <p>不只记录日期，也把每个节点放回创作、公众叙事和歌曲文本之间看。</p>
      </div>
      <div class="timeline-story">
        ${moments
          .map(
            (moment, index) => `
              <article class="timeline-moment">
                <div class="timeline-moment__date">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <strong>${escapeHtml(moment.date)}</strong>
                </div>
                <div class="timeline-moment__body">
                  <small>${escapeHtml(moment.stage)}</small>
                  <h4>${escapeHtml(moment.text)}</h4>
                  <p>${escapeHtml(moment.reflection)}</p>
                  ${
                    moment.anchor
                      ? `<button class="timeline-song-link song-open-row" type="button" data-song-title="${escapeHtml(moment.anchor)}">关联歌曲：${escapeHtml(moment.anchor)}</button>`
                      : ""
                  }
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <aside class="timeline-coda">
        <strong>这条线怎么读</strong>
        <p>${album.thesis} 时间线不是背景补充，而是帮助你判断：哪些歌是在回应处境，哪些歌是在重写处境。</p>
      </aside>
    </section>
  `;
}

function renderAlbumSection(album) {
  const section = sectionByKey(activeAlbumSection);
  const content =
    section.key === "reading"
      ? renderReadingPortal(album)
      : section.key === "tracklist"
        ? renderCompleteTracklist(album)
        : renderExpandedTimeline(album);
  const isCompactSection = section.key === "tracklist" || section.key === "timeline";
  const compactNav =
    isCompactSection
      ? `<div class="album-section__compact-nav">
          <button class="album-section__back" type="button" data-back-to-guide>${renderDirectoryIcon("back")}<span>返回导览</span></button>
          <p>${album.title}</p>
        </div>`
      : "";
  const header =
    isCompactSection
      ? ""
      : `<header class="album-section__header">
          <button class="album-section__back" type="button" data-back-to-guide>${renderDirectoryIcon("book")}<span>返回导览</span></button>
          <div>
            <p>${album.title}</p>
            <h2>${section.title}</h2>
            <small>${section.subtitle}</small>
          </div>
          <figure>
            <img src="${albumCovers[album.id] || ""}" alt="${album.title} 专辑封面" loading="lazy" />
          </figure>
        </header>`;

  return `
    <article class="album album-section album-section--${section.key}" id="album-${album.id}" style="--era:${album.color}; --cover:url('${albumCovers[album.id] || ""}')">
      <div class="album-atmosphere" aria-hidden="true"></div>
      ${header}
      <div class="album-section__body">
        ${compactNav}
        ${content}
      </div>
    </article>
  `;
}

function renderCurrentAlbum() {
  const stage = document.querySelector("#albums");
  const album = albums[currentAlbumIndex];
  const prev = albums[(currentAlbumIndex - 1 + albums.length) % albums.length];
  const next = albums[(currentAlbumIndex + 1) % albums.length];

  document.body.style.setProperty("--era", album.color);
  document.body.dataset.album = album.id;
  document.body.classList.remove("landing-mode");
  document.body.classList.remove("reading-open");
  document.body.classList.add("album-mode");
  stage.style.setProperty("--era", album.color);
  document.querySelector("#songIndex").style.setProperty("--era", album.color);

  stage.innerHTML = `
    <article class="album" id="album-${album.id}" style="--era:${album.color}; --cover:url('${albumCovers[album.id] || ""}')">
      <div class="album-atmosphere" aria-hidden="true"></div>
      <div class="album-header">
        <div class="album-identity">
          <div class="album-kicker">${String(currentAlbumIndex + 1).padStart(2, "0")} · ${album.year}</div>
          <h2>${album.title}<span class="cn">${album.cn}</span></h2>
          <div class="album-meta">
            <span>${album.genre}</span>
            <span>${album.length}</span>
          </div>
          <div class="album-swatch" aria-hidden="true"></div>
          ${renderEraRituals(album)}
          <figure class="album-cover-card">
            <img src="${albumCovers[album.id] || ""}" alt="${album.title} 专辑封面" loading="eager" fetchpriority="high" decoding="async" onerror="this.closest('.album-cover-card').classList.add('cover-fallback'); this.remove();" />
          </figure>
          ${renderAlbumReadingNav(album)}
        </div>
        <div>
          <p class="era-thesis">${album.thesis}</p>
          <div class="era-narrative">
            <p>${album.context}</p>
            <p>${album.life}</p>
          </div>
          ${renderAlbumReading(album)}
        </div>
      </div>
      ${renderCompleteTracklist(album)}
      <div class="tracks">
        <section class="track-group">
          <h3>被很多人先听见的歌</h3>
          <div class="song-grid">
            ${album.hits.map((song) => songCard(song, album, "hit")).join("")}
          </div>
        </section>
        <section class="track-group">
          <h3>藏在专辑深处的线索</h3>
          <div class="song-grid">
            ${album.deeps.map((song) => songCard(song, album, "deep")).join("")}
          </div>
        </section>
      </div>
      <div class="timeline">
        ${album.timeline.map(([date, text]) => `<div><strong>${date}</strong><span>${text}</span></div>`).join("")}
      </div>
    </article>
    <nav class="mobile-era-dock" style="--era:${album.color}" aria-label="手机端专辑切换">
      <button type="button" data-switch="-1">
        <span>上一张</span>
        <strong>${prev.title}</strong>
      </button>
      <button class="mobile-era-dock__current" type="button" data-open-palette>
        <span>${String(currentAlbumIndex + 1).padStart(2, "0")} / ${albums.length}</span>
        <strong>${album.title}</strong>
      </button>
      <button type="button" data-switch="1">
        <span>下一张</span>
        <strong>${next.title}</strong>
      </button>
    </nav>
  `;

  stage.querySelectorAll("[data-switch]").forEach((button) => {
    button.addEventListener("click", () => selectAlbum(currentAlbumIndex + Number(button.dataset.switch)));
  });
  stage.querySelectorAll("[data-open-palette]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openPalette();
    });
  });

  document.querySelectorAll("[data-album]").forEach((item) => {
    item.classList.toggle("active", item.dataset.album === album.id);
  });

  renderSongIndex(currentFilter);
  bindSongOpeners(stage);
  bindEraRituals(stage, album);
  bindReadingOpeners(stage, album);
}

renderCurrentAlbum = function () {
  const stage = document.querySelector("#albums");
  const album = albums[currentAlbumIndex];
  const prev = albums[(currentAlbumIndex - 1 + albums.length) % albums.length];
  const next = albums[(currentAlbumIndex + 1) % albums.length];

  document.body.style.setProperty("--era", album.color);
  document.body.dataset.album = album.id;
  document.body.classList.remove("landing-mode", "reading-open");
  document.body.classList.add("album-mode");
  document.body.classList.toggle("album-hub-mode", activeAlbumSection === "guide");
  document.body.classList.toggle("album-section-mode", activeAlbumSection !== "guide");
  stage.style.setProperty("--era", album.color);
  document.querySelector("#songIndex")?.style.setProperty("--era", album.color);

  stage.innerHTML = activeAlbumSection === "guide" ? renderAlbumGuide(album, prev, next) : renderAlbumSection(album);

  stage.querySelectorAll("[data-album-section]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlbumSection = button.dataset.albumSection;
      renderCurrentAlbum();
      pushAppHistory(appHistoryState("album", currentAlbumIndex, activeAlbumSection), `#album-${albums[currentAlbumIndex].id}`);
      requestAnimationFrame(() => window.scrollTo({ top: stage.offsetTop, behavior: "auto" }));
    });
  });

  stage.querySelectorAll("[data-back-to-guide]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlbumSection = "guide";
      renderCurrentAlbum();
      replaceAppHistory(appHistoryState("album", currentAlbumIndex, activeAlbumSection), `#album-${albums[currentAlbumIndex].id}`);
      requestAnimationFrame(() => window.scrollTo({ top: stage.offsetTop, behavior: "auto" }));
    });
  });

  stage.querySelectorAll("[data-home-page]").forEach((button) => {
    button.addEventListener("click", () => showLanding({ pushHistory: true }));
  });

  stage.querySelectorAll("[data-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlbumSection = "guide";
      selectAlbum(currentAlbumIndex + Number(button.dataset.switch));
    });
  });

  stage.querySelectorAll("[data-open-palette]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openPalette();
    });
  });

  document.querySelectorAll("[data-album]").forEach((item) => {
    item.classList.toggle("active", item.dataset.album === album.id);
  });

  renderSongIndex(currentFilter);
  bindSongOpeners(stage);
  bindEraRituals(stage, album);
  bindReadingPortal(stage, album);
  bindReadingOpeners(stage, album);
};

renderSongIndex = function (filter = "all") {
  currentFilter = filter;
  const list = document.querySelector("#songList");
  const album = albums[currentAlbumIndex];
  const heading = document.querySelector("#songIndex .section-heading");
  const songs = [
    ...album.hits.map((song) => ({ ...song, album, kind: "hit" })),
    ...album.deeps.map((song) => ({ ...song, album, kind: "deep" }))
  ];
  const filtered = filter === "all" ? songs : songs.filter((song) => song.kind === filter);

  heading.innerHTML = `
    <h2>${album.title} 曲目索引</h2>
    <p>这里只显示当前专辑的歌曲入口；切换专辑后，索引也会随主题一起更换。</p>
  `;
  list.innerHTML = filtered
    .map(
      (song) => `
      <a class="song-pill" href="#${slug(song.album.id + "-" + song.title)}" style="--era:${song.album.color}; border-left:6px solid ${song.album.color}">
        <strong>${song.title}</strong>
        <small>${song.album.title} · ${song.kind === "hit" ? "热门歌" : "深藏曲"}</small>
      </a>
    `
    )
    .join("");
};

bindFilters = function () {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderSongIndex(button.dataset.filter);
    });
  });
};

function selectAlbum(index, options = {}) {
  currentAlbumIndex = (index + albums.length) % albums.length;
  const album = albums[currentAlbumIndex];
  currentFilter = "all";
  activeAlbumSection = "guide";
  currentReadingIndex = readingIndexByAlbum[album.id] ?? 0;
  document.querySelectorAll(".filter").forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === "all");
  });
  renderCurrentAlbum();
  if (!options.fromHash && !options.skipHistory) {
    pushAppHistory(appHistoryState("album", currentAlbumIndex, activeAlbumSection), `#album-${album.id}`);
  }
  if (!options.skipScroll) {
    requestAnimationFrame(() => {
      const target = document.querySelector("#albums");
      if (!target) return;
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    });
  }
}

function getAlbumIndexFromHash() {
  const hash = decodeURIComponent(window.location.hash.replace(/^#album-/, ""));
  const index = albums.findIndex((album) => album.id === hash);
  return index >= 0 ? index : 0;
}

function getReadingIndex(album) {
  const reading = albumReadings[album.id];
  const saved = readingIndexByAlbum[album.id] ?? currentReadingIndex;
  if (!reading) return 0;
  return Math.min(Math.max(saved, 0), reading.lenses.length - 1);
}

function getAlbumTrackTitles(album) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  return [...list.core, ...list.expanded];
}

function hasTrack13(album) {
  return getAlbumTrackTitles(album).length >= 13;
}

function renderEraRituals(album) {
  const tracks = getAlbumTrackTitles(album);
  return `
    <section class="era-rituals" aria-label="${escapeHtml(album.title)} 互动入口">
      <div class="ritual-actions">
        <button type="button" data-surprise-song>惊喜曲</button>
        ${hasTrack13(album) ? `<button type="button" data-lucky-track>13th</button>` : ""}
      </div>
      <div class="bracelet-track" aria-label="手链曲目">
        ${tracks
          .map(
            (title, index) => `
              <button class="bracelet-bead song-open-row" type="button" data-song-title="${escapeHtml(title)}" title="${escapeHtml(title)}" aria-label="${escapeHtml(title)}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <em>${escapeHtml(title)}</em>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function bindEraRituals(scope, album) {
  const tracks = getAlbumTrackTitles(album);
  scope.querySelectorAll("[data-surprise-song]").forEach((button) => {
    button.addEventListener("click", () => {
      const title = tracks[Math.floor(Math.random() * tracks.length)];
      if (title) openSongModal(title);
    });
  });
  scope.querySelectorAll("[data-lucky-track]").forEach((button) => {
    button.addEventListener("click", () => {
      const title = tracks[12] || tracks[tracks.length - 1] || tracks[0];
      if (title) openSongModal(title);
    });
  });
}

function renderAlbumReadingNav(album) {
  const reading = albumReadings[album.id];
  if (!reading) return "";
  const activeIndex = getReadingIndex(album);
  return `
    <div class="reading-console" aria-label="${escapeHtml(album.title)} 专辑解读章节">
      <div class="reading-console-head">
        <span>专辑解读</span>
      </div>
      <div class="reading-tabs" role="tablist">
        ${reading.lenses
          .map(
            (item, index) => `
              <button class="reading-tab ${index === activeIndex ? "active" : ""}" type="button" role="tab" aria-selected="${index === activeIndex}" data-reading-index="${index}">
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(item.title)}</strong>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderAlbumReading(album) {
  const reading = albumReadings[album.id];
  if (!reading) return "";
  const activeIndex = getReadingIndex(album);
  return `<div class="era-reading">${renderReadingDetail(album, activeIndex)}</div>`;
}

function renderReadingDetail(album, activeIndex) {
  const reading = albumReadings[album.id];
  const item = reading.lenses[activeIndex];
  const hit = album.hits[activeIndex % album.hits.length];
  const deep = album.deeps[activeIndex % album.deeps.length];
  const anchor = reading.anchors[activeIndex] || reading.anchors[0];
  return `
    <article class="reading-detail" data-active-reading="${activeIndex}">
      <button class="reading-close" type="button" data-close-reading aria-label="关闭专辑解读">×</button>
      <div class="reading-detail-kicker">
        <span>${String(activeIndex + 1).padStart(2, "0")}</span>
        <small>${escapeHtml(item.label)}</small>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      <div class="reading-song-pair">
        <section>
          <span>热门歌</span>
          <h4>${escapeHtml(hit.title)}</h4>
          <p>${escapeHtml(hit.analysis)}</p>
          <small>${escapeHtml(hit.life)}</small>
        </section>
        <section>
          <span>深藏曲</span>
          <h4>${escapeHtml(deep.title)}</h4>
          <p>${escapeHtml(deep.analysis)}</p>
          <small>${escapeHtml(deep.life)}</small>
        </section>
      </div>
      <div class="song-anchors" aria-label="当前章节歌曲线索">
        <span>${escapeHtml(anchor)}</span>
        <span>${escapeHtml(album.title)} 的这一页不是背景资料，而是把歌曲、公众经历和她的叙事选择放在同一条线上读。</span>
      </div>
    </article>
  `;
}

function ensureAlbumReadingModal() {
  let modal = document.querySelector("#albumReadingModal");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.id = "albumReadingModal";
  modal.className = "album-reading-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="album-reading-modal__backdrop" data-close-album-reading></div>
    <section class="album-reading-modal__card" role="dialog" aria-modal="true" aria-labelledby="albumReadingTitle">
      <button class="album-reading-modal__close" type="button" data-close-album-reading aria-label="关闭专辑解读">×</button>
      <div class="album-reading-modal__body"></div>
    </section>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-album-reading]")) closeAlbumReadingModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeAlbumReadingModal();
  });
  return modal;
}

function openAlbumReadingModal(album, index) {
  const modal = ensureAlbumReadingModal();
  currentReadingIndex = index;
  readingIndexByAlbum[album.id] = index;
  modal.style.setProperty("--era", album.color);
  modal.querySelector(".album-reading-modal__body").innerHTML = renderReadingDetail(album, index);
  modal.querySelector(".reading-detail h3")?.setAttribute("id", "albumReadingTitle");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".album-reading-modal__close").focus();
}

function closeAlbumReadingModal() {
  const modal = document.querySelector("#albumReadingModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function bindReadingPortal(scope, album) {
  scope.querySelectorAll("[data-reading-card]").forEach((button) => {
    button.addEventListener("click", () => openAlbumReadingModal(album, Number(button.dataset.readingCard)));
  });
}

function bindReadingOpeners(scope, album) {
  const reading = scope.querySelector(".era-reading");
  const closeReading = () => {
    reading?.classList.remove("open");
    document.body.classList.remove("reading-open");
  };

  scope.querySelectorAll("[data-reading-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.dataset.readingIndex);
      currentReadingIndex = nextIndex;
      readingIndexByAlbum[album.id] = nextIndex;
      if (reading) reading.innerHTML = renderReadingDetail(album, nextIndex);
      scope.querySelectorAll("[data-reading-index]").forEach((item) => {
        const active = Number(item.dataset.readingIndex) === nextIndex;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      if (window.matchMedia("(max-width: 720px)").matches) {
        reading?.classList.add("open");
        document.body.classList.add("reading-open");
      }
    });
  });

  reading?.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-reading]")) closeReading();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeReading();
  });
}

function bindPalette() {
  const rail = document.querySelector(".rail");
  const toggle = document.querySelector(".palette-toggle");
  if (!rail || !toggle) return;
  toggle.addEventListener("click", () => {
    const open = rail.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  rail.addEventListener("mouseenter", () => rail.classList.add("hover-open"));
  rail.addEventListener("mouseleave", () => rail.classList.remove("hover-open"));
  document.addEventListener("click", (event) => {
    if (!rail.contains(event.target)) closePalette();
  });
}

function closePalette() {
  const rail = document.querySelector(".rail");
  const toggle = document.querySelector(".palette-toggle");
  if (!rail || !toggle) return;
  rail.classList.remove("open", "hover-open");
  document.querySelectorAll(".rail-item").forEach((item) => {
    item.dataset.preview = "false";
    item.classList.remove("preview");
  });
  toggle.setAttribute("aria-expanded", "false");
}

function openPalette() {
  const rail = document.querySelector(".rail");
  const toggle = document.querySelector(".palette-toggle");
  if (!rail || !toggle) return;
  rail.classList.add("open");
  toggle.setAttribute("aria-expanded", "true");
}

function isTouchPalette() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

const completeTracklists = {};

Object.assign(completeTracklists, {
  "taylor-swift": {
    core: ["Tim McGraw", "Picture to Burn", "Teardrops on My Guitar", "A Place in This World", "Cold As You", "The Outside", "Tied Together with a Smile", "Stay Beautiful", "Should've Said No", "Mary's Song (Oh My My My)", "Our Song"],
    expanded: ["I'm Only Me When I'm with You", "Invisible", "A Perfectly Good Heart"]
  },
  fearless: {
    core: ["Fearless", "Fifteen", "Love Story", "Hey Stephen", "White Horse", "You Belong with Me", "Breathe", "Tell Me Why", "You're Not Sorry", "The Way I Loved You", "Forever & Always", "The Best Day", "Change"],
    expanded: ["Jump Then Fall", "Untouchable", "Forever & Always (Piano Version)", "Come In with the Rain", "Superstar", "The Other Side of the Door", "Today Was a Fairytale", "You All Over Me", "Mr. Perfectly Fine", "We Were Happy", "That's When", "Don't You", "Bye Bye Baby"]
  },
  "speak-now": {
    core: ["Mine", "Sparks Fly", "Back to December", "Speak Now", "Dear John", "Mean", "The Story of Us", "Never Grow Up", "Enchanted", "Better than Revenge", "Innocent", "Haunted", "Last Kiss", "Long Live"],
    expanded: ["Ours", "Superman", "Electric Touch", "When Emma Falls in Love", "I Can See You", "Castles Crumbling", "Foolish One", "Timeless"]
  },
  red: {
    core: ["State of Grace", "Red", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22", "I Almost Do", "We Are Never Ever Getting Back Together", "Stay Stay Stay", "The Last Time", "Holy Ground", "Sad Beautiful Tragic", "The Lucky One", "Everything Has Changed", "Starlight", "Begin Again"],
    expanded: ["The Moment I Knew", "Come Back... Be Here", "Girl at Home", "State of Grace (Acoustic Version)", "Ronan", "Better Man", "Nothing New", "Babe", "Message in a Bottle", "I Bet You Think About Me", "Forever Winter", "Run", "The Very First Night", "All Too Well (10 Minute Version)"]
  }
});

completeTracklists["1989"] = { core: ["Welcome to New York", "Blank Space", "Style", "Out of the Woods"], expanded: [] };
completeTracklists["1989"].core.push("All You Had to Do Was Stay", "Shake It Off", "I Wish You Would", "Bad Blood", "Wildest Dreams");
completeTracklists["1989"].core.push("How You Get the Girl", "This Love", "I Know Places", "Clean");
completeTracklists["1989"].expanded.push("Wonderland", "You Are in Love", "New Romantics");
completeTracklists["1989"].expanded.push("\"Slut!\"", "Say Don't Go", "Now That We Don't Talk", "Suburban Legends", "Is It Over Now?", "Bad Blood (feat. Kendrick Lamar)");
completeTracklists.reputation = { core: ["...Ready for It?", "End Game", "I Did Something Bad", "Don't Blame Me", "Delicate", "Look What You Made Me Do", "So It Goes...", "Gorgeous", "Getaway Car", "King of My Heart", "Dancing with Our Hands Tied", "Dress", "This Is Why We Can't Have Nice Things", "Call It What You Want", "New Year's Day"], expanded: [] };
completeTracklists.lover = { core: ["I Forgot That You Existed", "Cruel Summer", "Lover", "The Man", "The Archer", "I Think He Knows", "Miss Americana & the Heartbreak Prince", "Paper Rings"], expanded: [] };
completeTracklists.lover.core.push("Cornelia Street", "Death by a Thousand Cuts", "London Boy", "Soon You'll Get Better");
completeTracklists.lover.core.push("False God", "You Need to Calm Down", "Afterglow", "ME!", "It's Nice to Have a Friend", "Daylight");
completeTracklists.folklore = { core: ["the 1", "cardigan", "the last great american dynasty", "exile", "my tears ricochet", "mirrorball", "seven", "august"], expanded: [] };
completeTracklists.folklore.core.push("this is me trying", "illicit affairs", "invisible string", "mad woman", "epiphany", "betty", "peace", "hoax");
completeTracklists.folklore.expanded.push("the lakes");
completeTracklists.evermore = { core: ["willow", "champagne problems", "gold rush", "'tis the damn season", "tolerate it", "no body, no crime", "happiness", "dorothea"], expanded: [] };
completeTracklists.evermore.core.push("coney island", "ivy", "cowboy like me", "long story short", "marjorie", "closure", "evermore");
completeTracklists.evermore.expanded.push("right where you left me", "it's time to go");
completeTracklists.midnights = { core: ["Lavender Haze", "Maroon", "Anti-Hero", "Snow on the Beach", "You're on Your Own, Kid", "Midnight Rain", "Question...?", "Vigilante Shit"], expanded: [] };
completeTracklists.midnights.core.push("Bejeweled", "Labyrinth", "Karma", "Sweet Nothing", "Mastermind");
completeTracklists.midnights.expanded.push("The Great War", "Bigger Than the Whole Sky", "Paris", "High Infidelity", "Glitch", "Would've, Could've, Should've", "Dear Reader", "Hits Different", "Snow on the Beach (More Lana Del Rey)", "Karma (feat. Ice Spice)");
completeTracklists.ttpd = { core: ["Fortnight"], expanded: [] };
completeTracklists.ttpd.core.push("The Tortured Poets Department", "My Boy Only Breaks His Favorite Toys", "Down Bad", "So Long, London");
completeTracklists.ttpd.core.push("But Daddy I Love Him", "Fresh Out the Slammer", "Florida!!!", "Guilty as Sin?", "Who's Afraid of Little Old Me?");
completeTracklists.ttpd.core.push("I Can Fix Him (No Really I Can)", "loml", "I Can Do It with a Broken Heart", "The Smallest Man Who Ever Lived", "The Alchemy", "Clara Bow");
completeTracklists.ttpd.expanded.push("The Black Dog", "imgonnagetyouback", "The Albatross", "Chloe or Sam or Sophia or Marcus", "How Did It End?");
completeTracklists.ttpd.expanded.push("So High School", "I Hate It Here", "thanK you aIMee", "I Look in People's Windows", "The Prophecy", "Cassandra");
completeTracklists.ttpd.expanded.push("Peter", "The Bolter", "Robin", "The Manuscript");
completeTracklists.showgirl = { core: ["The Fate of Ophelia", "Elizabeth Taylor", "Opalite", "Father Figure", "Eldest Daughter", "Ruin the Friendship"], expanded: [] };
completeTracklists.showgirl.core.push("Actually Romantic", "Wi$h Li$t", "Wood", "CANCELLED!", "Honey", "The Life of a Showgirl");

const neteaseTrackIds = {
  "taylor-swift": [2002411, 2002416, 2002422, 2002426, 2002431, 2002436, 2002442, 2002445, 2002449, 2002452, 2002455, 2002459, 2002464, 2002469],
  fearless: [1832431765, 1832419318, 1819857342, 1832431769, 1832428071, 1832431773, 1832431780, 1832431782, 1832428075, 1832428078, 1832428089, 1832428096, 1832428099, 1832431810, 1832431813, 1832431815, 1832428107, 1832431828, 1832431829, 1832428122, 1832581492, 1832428129, 1832431862, 1832428134, 1832431870, 1832431882],
  "speak-now": [2059790268, 2059790297, 2059790317, 2059793928, 2059793938, 2059790508, 2059793961, 2059790519, 2059790521, 2059790524, 2059790531, 2059790533, 2059790558, 2059790562, 2059790563, 2059790567, 2059790576, 2059794021, 2059790586, 2059790595, 2059790597, 2059790598],
  red: [1891454307, 1891454308, 1891454314, 1891454316, 1891454317, 1891454320, 1891456099, 1891456102, 1891454326, 1891454328, 1891456109, 1891454332, 1891454347, 1891456123, 1891454351, 1891454353, 1891456126, 1891454354, 1891454356, 1891454357, 1891454371, 1891456136, 1891456138, 1891454375, 1891456141, 1891454393, 1891454385, 1891456145, 1891454388, 1891456146],
  "1989": [2094488206, 2094488214, 2094490746, 2094488215, 2094488207, 2094488216, 2094488208, 2094490749, 2094490747, 2094488217, 2094488209, 2094490750, 2094488210, 2094490751, 2094488211, 2094488218, 2094490748, 2094490752, 2094488212, 2092285325, 2094488213, 2094488219],
  reputation: [503207093, 516823324, 516827355, 516823325, 516818336, 501133611, 516827356, 514235010, 516818337, 516818338, 516823326, 516827357, 516819321, 516776413, 516823327],
  lover: [1382572453, 1382576173, 1382778514, 1382781100, 1382778829, 1382781397, 1382781399, 1382781417, 1382778878, 1382781434, 1382781444, 1382781478, 1382781502, 1382778973, 1382781546, 1382781549, 1382790037, 1382781566],
  folklore: [1465111714, 1465114419, 1465114457, 1465114465, 1465114469, 1465111904, 1465114488, 1465111917, 1465114509, 1465114515, 1465114561, 1465111966, 1465114564, 1465111971, 1465111983, 1465111994, 1471998613],
  evermore: [1803546869, 1803546393, 1803546394, 1803546395, 1803546870, 1803546871, 1803546872, 1803546873, 1803546396, 1803546874, 1803546397, 1803546875, 1803546398, 1803546399, 1803546400, 1810009762, 1810009779],
  midnights: [1990192689, 1990192692, 1990192694, 1990192705, 1990191997, 1990192000, 1990192006, 1990192720, 1990192722, 1990192724, 1990192725, 1990192728, 1990192019, 1991240680, 1991239979, 1991240681, 1991239980, 1991240682, 1991239981, 1991239982, 2050561748, 2050561749, 2050560270],
  ttpd: [2147408164, 2147408165, 2147407554, 2147408166, 2147408167, 2147408168, 2147408169, 2147407555, 2147408170, 2147407556, 2147407557, 2147408171, 2147407558, 2147407559, 2147408172, 2147407560, 2147407561, 2147408173, 2147407562, 2147407563, 2147408174, 2147407564, 2147408175, 2147408176, 2147408177, 2147408178, 2147408179, 2147407565, 2147407566, 2147408180, 2147407567],
  showgirl: [2744403174, 2744399122, 2744403189, 2744399145, 2744399152, 2744403230, 2744404187, 2744403405, 2744404374, 2744403423, 2744404393, 2744403471]
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTrackPosition(album, title) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  const rows = [...list.core, ...list.expanded];
  return rows.findIndex((track) => track.toLowerCase() === title.toLowerCase());
}

function getNeteaseId(album, title) {
  const position = getTrackPosition(album, title);
  return position >= 0 ? neteaseTrackIds[album.id]?.[position] : null;
}

function neteaseSongUrl(album, title) {
  const id = getNeteaseId(album, title);
  if (id) return `https://music.163.com/#/song?id=${id}`;
  return `https://music.163.com/#/search/m/?s=${encodeURIComponent(`Taylor Swift ${title}`)}&type=1`;
}

function renderNeteasePlay(album, title, variant = "inline") {
  const id = getNeteaseId(album, title);
  const label = id ? "网易云播放" : "网易云搜索";
  return `
    <a class="netease-play netease-play--${variant}" href="${neteaseSongUrl(album, title)}" target="_blank" rel="noreferrer" aria-label="在网易云音乐播放 ${escapeHtml(title)}">
      <span class="netease-play__icon" aria-hidden="true"></span>
      <span class="netease-play__text">
        <strong>${label}</strong>
      </span>
    </a>
  `;
}

function normalizeLyricTitle(value) {
  return String(value)
    .replace(/\([^)]*Taylor's Version[^)]*\)/gi, "")
    .replace(/\([^)]*From The Vault[^)]*\)/gi, "")
    .replace(/\([^)]*\bfeat(?:uring)?\.?[^)]*\)/gi, "")
    .replace(/\bfeat(?:uring)?\.?\s*/gi, "")
    .replace(/\bft\.?\s*/gi, "")
    .replace(/&/g, "and")
    .replace(/\$/g, "s")
    .replace(/[’‘]/g, "'")
    .replace(/^\.*|\.*$/g, "")
    .replace(/[^a-z0-9]+/gi, "")
    .toLowerCase();
}

function getProvidedLyrics(album, title) {
  const albumLyrics = window.taylorLyrics?.[album.id];
  if (!albumLyrics) return null;
  return albumLyrics[normalizeLyricTitle(title)] || null;
}

function renderLyricReader(detail) {
  const lyricEntry = detail.lyrics;
  if (!lyricEntry) {
    return `
      <div class="lyric-reader lyric-reader--empty" aria-label="英文原版歌词阅读区">
        <p class="lyric-kicker">Lyrics coming soon</p>
        <p class="active">${escapeHtml(detail.title)}</p>
        <p>先读右侧这首歌的情绪。</p>
      </div>
    `;
  }

  const lines = lyricEntry.lyrics.split("\n");
  return `
    <div class="lyric-reader" aria-label="英文原版歌词阅读区">
      <p class="lyric-kicker">Original English Lyrics</p>
      ${lines
        .map((line) => {
          const trimmed = line.trim();
          if (!trimmed) return `<p class="lyric-blank" aria-hidden="true"></p>`;
          const cue = /^\[[^\]]+\]$/.test(trimmed);
          return `<p class="${cue ? "lyric-cue" : ""}">${escapeHtml(trimmed)}</p>`;
        })
        .join("")}
    </div>
  `;
}

function getSongDetail(album, title) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  const coreIndex = list.core.findIndex((track) => track.toLowerCase() === title.toLowerCase());
  const expandedIndex = list.expanded.findIndex((track) => track.toLowerCase() === title.toLowerCase());
  const analyzedHit = album.hits.find((song) => song.title.toLowerCase() === title.toLowerCase());
  const analyzedDeep = album.deeps.find((song) => song.title.toLowerCase() === title.toLowerCase());
  const analyzed = analyzedHit || analyzedDeep;
  const trackNumber = coreIndex >= 0 ? coreIndex + 1 : list.core.length + expandedIndex + 1;
  const group = coreIndex >= 0 ? "标准/主线曲目" : "豪华/扩展曲目";
  const status = analyzedHit ? "热门深读" : analyzedDeep ? "深藏深读" : "完整曲目";
  const fallbackAnalysis = `把《${title}》放回《${album.title}》里读，可以先从歌名本身进入：它像一枚放在章节边缘的注脚，不急着替时代喊出口号，却把这张专辑里那些反复出现的姿态、地点和情绪余温留了下来。它让主线之外的空气也有重量。`;
  const fallbackLife = `从真实语境看，它共享《${album.title}》时期的创作背景：${album.life} 这些完整曲目不一定都站在聚光灯中央，却常常保存着更松弛、更私密的呼吸；它们让一个时代不只由主打歌定义，也由那些被反复回听的小角落组成。`;
  const analysisText = analyzed?.analysis || fallbackAnalysis;
  const lifeText = analyzed?.life || fallbackLife;
  return {
    title,
    album,
    trackNumber,
    group,
    status,
    geniusUrl: geniusLyricsUrl(title),
    lyrics: getProvidedLyrics(album, title),
    analysis: analysisText,
    life: lifeText,
    lyricGuide: buildLyricGuide(album, title, trackNumber, analysisText, lifeText),
    insightCards: buildSongInsights(album, title, trackNumber, group, status, analysisText, lifeText)
  };
}

function buildLyricGuide(album, title, trackNumber, analysis, life) {
  return [
    "Original English Lyrics",
    `${title}`,
    `Track ${String(trackNumber).padStart(2, "0")} · ${album.title}`,
    "Open the authorized lyric page.",
    "Read Verse 1.",
    "Then come back for the image map.",
    "Read the chorus.",
    "Notice what repeats, what disappears.",
    "Read the bridge.",
    "Genius keeps the full licensed text."
  ];
}

function splitPoemLines(value) {
  const text = String(value).trim();
  if (!text) return [];
  const punctuationSplit = text
    .split(/(?<=[。！？；;])\s*|(?<=[，、：:])\s*/u)
    .map((line) => line.trim())
    .filter(Boolean);

  return punctuationSplit.flatMap((line) => {
    const chars = Array.from(line);
    if (chars.length <= 24) return [line];
    if (/[a-zA-Z]{3,}/.test(line)) return [line];
    const chunks = [];
    for (let index = 0; index < chars.length; index += 22) {
      chunks.push(chars.slice(index, index + 22).join(""));
    }
    return chunks;
  });
}

function buildSongInsights(album, title, trackNumber, group, status, analysis, life) {
  return [
    {
      lines: [
        `《${title}》走到《${album.title}》的第 ${trackNumber} 个位置，属于${group}。`,
        `它不是曲目表里冷冷的一行，而像这一章里忽然亮起的一盏灯，把整张专辑的颜色推向一个更具体的房间：${album.thesis}`
      ]
    },
    {
      lines: [
        `${analysis}`,
        "真正起作用的地方，常常不在一句被单独摘出来的金句里，而在代词的松动、时间的回头、空间意象的一次次换场。",
        "她把不能直说的东西交给门、车、雨、房间、舞台、城市和童话；听众先看见画面，再慢慢听见画面后面的失落、倔强和自我保护。"
      ]
    },
    {
      lines: [
        `${life}`,
        "把它放回那个时期，就会发现这首歌并不是在寻找一个八卦答案。",
        "它更像一次转译：把公众身份、亲密关系、舆论压力或自我想象，折成可以反复吟唱的私人叙事。"
      ]
    },
    {
      lines: [
        `${status}的价值，是让你听见这张专辑不那么直白的一面。`,
        "读左侧英文歌词时，可以先顺着故事走一遍，再回头看副歌怎样重复、桥段怎样变暗或变亮。",
        "最后再看结尾：它有没有把开头的情绪轻轻翻过去，或者故意让那道伤口停在原处。"
      ]
    }
  ];
}

function geniusLyricsUrl(title) {
  const clean = title
    .replace(/\([^)]*\)/g, "")
    .replace(/feat\..*/i, "")
    .replace(/\$/g, "s")
    .replace(/&/g, "and")
    .replace(/\.\.\./g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return `https://genius.com/Taylor-swift-${clean}-lyrics`;
}

function ensureSongModal() {
  let modal = document.querySelector("#songModal");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.id = "songModal";
  modal.className = "song-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="song-modal__backdrop" data-close-song></div>
    <section class="song-modal__card" role="dialog" aria-modal="true" aria-labelledby="songModalTitle">
      <button class="song-modal__close" type="button" data-close-song aria-label="关闭歌曲详情">×</button>
      <div class="song-modal__body"></div>
    </section>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-song-view]");
    if (viewButton) {
      setSongModalView(viewButton.dataset.songView, modal);
      return;
    }
    if (event.target.closest("[data-close-song]")) closeSongModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeSongModal();
  });
  return modal;
}

function setSongModalView(view, modal = document.querySelector("#songModal")) {
  if (!modal) return;
  const nextView = view === "lyrics" ? "lyrics" : "analysis";
  const body = modal.querySelector(".song-modal__body");
  if (!body) return;
  body.classList.toggle("view-lyrics", nextView === "lyrics");
  body.classList.toggle("view-analysis", nextView === "analysis");
  modal.querySelectorAll("[data-song-view]").forEach((button) => {
    const active = button.dataset.songView === nextView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  const targetPane = nextView === "lyrics" ? modal.querySelector(".song-modal__cover") : modal.querySelector(".song-modal__content");
  if (targetPane) targetPane.scrollTop = 0;
}

function openSongModal(title) {
  const album = albums[currentAlbumIndex];
  const detail = getSongDetail(album, title);
  const modal = ensureSongModal();
  modal.style.setProperty("--era", album.color);
  modal.querySelector(".song-modal__body").innerHTML = `
    <div class="song-modal__view-tabs" role="tablist" aria-label="歌曲阅读入口">
      <span>${escapeHtml(detail.title)}</span>
      <div>
        <button class="active" type="button" data-song-view="lyrics" role="tab" aria-selected="true">看歌词</button>
        <button type="button" data-song-view="analysis" role="tab" aria-selected="false">读解读</button>
      </div>
    </div>
    <div class="song-modal__cover song-pane--lyrics">
      ${renderLyricReader(detail)}
    </div>
    <div class="song-modal__content song-pane--analysis">
      <p class="song-modal__eyebrow">${album.title} · ${detail.group} · ${detail.status}</p>
      <h2 id="songModalTitle">${escapeHtml(detail.title)}</h2>
      <div class="song-modal__meta">
        <span>${album.year}</span>
        <span>${album.cn}</span>
        <span>Track ${String(detail.trackNumber).padStart(2, "0")}</span>
      </div>
      <section class="netease-panel">
        ${renderNeteasePlay(album, detail.title, "modal")}
      </section>
      <div class="song-insights">
        <p class="song-poem__intro">这首歌可以这样读</p>
        ${detail.insightCards
          .map(
            (card, index) => `
              <article class="song-poem__stanza" aria-label="第 ${index + 1} 节歌曲解读">
                <span>${String(index + 1).padStart(2, "0")}</span>
                ${card.lines.flatMap(splitPoemLines).map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
  setSongModalView("lyrics", modal);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".song-modal__close").focus();
}

function closeSongModal() {
  const modal = document.querySelector("#songModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function bindSongOpeners(scope = document) {
  scope.querySelectorAll(".netease-play").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  scope.querySelectorAll(".song-open-card, .song-open-row").forEach((item) => {
    item.addEventListener("click", () => openSongModal(item.dataset.songTitle));
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSongModal(item.dataset.songTitle);
      }
    });
  });
}

function trackStatus(album, title) {
  const hit = album.hits.some((song) => song.title.toLowerCase() === title.toLowerCase());
  const deep = album.deeps.some((song) => song.title.toLowerCase() === title.toLowerCase());
  return hit ? "热门 · 已深读" : deep ? "深藏 · 已深读" : "待你探索";
}

function renderCompleteTracklist(album) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  const rows = [
    ...list.core.map((title, index) => ({ title, index: index + 1, group: "主线" })),
    ...list.expanded.map((title, index) => ({ title, index: list.core.length + index + 1, group: "加值 / Vault" }))
  ];
  return `
    <section class="complete-tracklist">
      <div class="tracklist-heading">
        <h3>全部曲目</h3>
        <p>每一首歌都可以打开独立窗口，在同一个入口里读歌词、看解读、去试听。</p>
      </div>
      <div class="tracklist-grid">
        ${rows
          .map(
            (row) => `
          <div class="track-row">
            <button class="track-main song-open-row" type="button" data-song-title="${escapeHtml(row.title)}">
              <span>${String(row.index).padStart(2, "0")}</span>
              <strong>${row.title}</strong>
              <small>${row.group} · ${trackStatus(album, row.title)}</small>
            </button>
            ${renderNeteasePlay(album, row.title, "row")}
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

renderSongIndex = function (filter = "all") {
  currentFilter = filter;
  const list = document.querySelector("#songList");
  const album = albums[currentAlbumIndex];
  const heading = document.querySelector("#songIndex .section-heading");
  const tracklist = completeTracklists[album.id] || { core: [], expanded: [] };
  const analyzed = [
    ...album.hits.map((song) => ({ title: song.title, album, kind: "热门歌" })),
    ...album.deeps.map((song) => ({ title: song.title, album, kind: "深藏曲" }))
  ];
  const full = [
    ...tracklist.core.map((title) => ({ title, album, kind: trackStatus(album, title) })),
    ...tracklist.expanded.map((title) => ({ title, album, kind: `扩展曲目 · ${trackStatus(album, title)}` }))
  ];
  const rows = filter === "hit" ? analyzed.filter((song) => song.kind === "热门歌") : filter === "deep" ? analyzed.filter((song) => song.kind === "深藏曲") : full;

  heading.innerHTML = `
    <h2>${album.title} 完整曲目索引</h2>
  `;
  list.innerHTML = rows
    .map(
      (song) => `
      <div class="song-pill-row" style="--era:${song.album.color}">
        <button class="song-pill song-open-row" type="button" data-song-title="${escapeHtml(song.title)}">
          <strong>${song.title}</strong>
          <small>${song.album.title} · ${song.kind}</small>
        </button>
        ${renderNeteasePlay(song.album, song.title, "pill")}
      </div>
    `
    )
    .join("");
  bindSongOpeners(list);
};
renderRail();
renderAlbums();
initializeHistoryState();
renderSongIndex();
bindFilters();
bindPalette();

function bindMobileDockAutoHide() {
  const mobileQuery = window.matchMedia("(max-width: 720px)");
  let lastY = window.scrollY;
  let ticking = false;

  function updateDock() {
    ticking = false;
    if (!mobileQuery.matches || document.body.classList.contains("modal-open")) {
      document.body.classList.remove("dock-hidden");
      lastY = window.scrollY;
      return;
    }

    const currentY = window.scrollY;
    const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const scrollingDown = currentY > lastY + 10;
    const nearTop = currentY < 220;
    const nearBottom = maxY - currentY < 260;

    document.body.classList.toggle("dock-hidden", scrollingDown && !nearTop && !nearBottom);
    lastY = currentY;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateDock);
      }
    },
    { passive: true }
  );
  mobileQuery.addEventListener?.("change", updateDock);
  updateDock();
}

bindMobileDockAutoHide();

window.addEventListener("popstate", (event) => {
  const state = event.state;
  if (state?.swiftStory) {
    applyRouteState(state);
  } else if (window.location.hash.startsWith("#album-")) {
    selectAlbum(getAlbumIndexFromHash(), { fromHash: true, skipScroll: true, skipHistory: true });
  } else {
    showLanding({ preserveHistory: true });
  }
});

window.addEventListener("hashchange", () => {
  if (window.location.hash.startsWith("#album-")) {
    selectAlbum(getAlbumIndexFromHash(), { fromHash: true, skipHistory: true });
  } else if (!window.location.hash || window.location.hash === "#top") {
    showLanding({ preserveHistory: true });
  }
});

function getTodaySong() {
  const allSongs = albums.flatMap(album => {
    const list = completeTracklists[album.id] || { core: [], expanded: [] };
    return [...list.core, ...list.expanded].map(title => ({ title, album }));
  });
  const daysSinceEpoch = Math.floor(Date.now() / 86400000);
  return allSongs[daysSinceEpoch % allSongs.length];
}

function getReadSongs() {
  try {
    return JSON.parse(localStorage.getItem('taylorSwiftReadSongs') || '[]');
  } catch {
    return [];
  }
}

function markSongAsRead(title) {
  const read = getReadSongs();
  const normalized = title.toLowerCase().trim();
  if (!read.includes(normalized)) {
    read.push(normalized);
    localStorage.setItem('taylorSwiftReadSongs', JSON.stringify(read));
    updateProgressDisplay();
  }
}

function getTotalSongCount() {
  return albums.reduce((sum, album) => {
    const list = completeTracklists[album.id] || { core: [], expanded: [] };
    return sum + list.core.length + list.expanded.length;
  }, 0);
}

function updateProgressDisplay() {
  const btn = document.getElementById('progressBtn');
  if (!btn) return;
  const read = getReadSongs().length;
  const total = getTotalSongCount();
  btn.querySelector('.progress-count').textContent = `${read}/${total}`;
}

function showProgressModal() {
  const read = getReadSongs();
  const allSongs = albums.flatMap(album => {
    const list = completeTracklists[album.id] || { core: [], expanded: [] };
    return [...list.core, ...list.expanded].map(title => ({
      title,
      album,
      isRead: read.includes(title.toLowerCase().trim())
    }));
  });

  const modal = document.createElement('div');
  modal.className = 'progress-modal';
  modal.innerHTML = `
    <div class="progress-modal__backdrop"></div>
    <div class="progress-modal__card">
      <button class="progress-modal__close" type="button" aria-label="关闭">×</button>
      <h2>你的阅读进度</h2>
      <p class="progress-stats">${read.length} / ${allSongs.length} 首歌已探索</p>
      <div class="progress-list">
        ${allSongs.map(song => `
          <div class="progress-item ${song.isRead ? 'read' : ''}">
            <span class="progress-check">${song.isRead ? '✓' : ''}</span>
            <button class="progress-song" type="button" data-song-title="${escapeHtml(song.title)}">
              <strong>${escapeHtml(song.title)}</strong>
              <small>${song.album.title}</small>
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add('modal-open');

  modal.querySelector('.progress-modal__backdrop').addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.classList.remove('modal-open');
  });

  modal.querySelector('.progress-modal__close').addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.classList.remove('modal-open');
  });

  modal.querySelectorAll('[data-song-title]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.songTitle;
      const song = allSongs.find(s => s.title === title);
      if (song) {
        const albumIndex = albums.findIndex(a => a.id === song.album.id);
        if (albumIndex >= 0) {
          currentAlbumIndex = albumIndex;
          document.body.removeChild(modal);
          document.body.classList.remove('modal-open');
          openSongModal(title);
        }
      }
    });
  });
}

const originalOpenSongModal = openSongModal;
openSongModal = function(title) {
  markSongAsRead(title);
  originalOpenSongModal(title);
};

document.addEventListener('DOMContentLoaded', () => {
  updateProgressDisplay();

  const progressBtn = document.getElementById('progressBtn');
  if (progressBtn) {
    progressBtn.addEventListener('click', showProgressModal);
  }

  const todayBtn = document.getElementById('todaySongBtn');
  if (todayBtn) {
    const todaySong = getTodaySong();
    todayBtn.addEventListener('click', () => {
      if (document.body.classList.contains("landing-mode")) {
        selectAlbum(0);
        return;
      }
      const albumIndex = albums.findIndex(a => a.id === todaySong.album.id);
      if (albumIndex >= 0) {
        currentAlbumIndex = albumIndex;
        openSongModal(todaySong.title);
      }
    });
  }
});
