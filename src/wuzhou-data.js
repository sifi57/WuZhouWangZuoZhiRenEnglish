export var GameData = {
  officials: [
    { id:'gaoyin',   name:'Gao Yin',   title:'Protagonist',     atk:4, hp:28, shield:0, faction:'none',
      deck:['yanLun','yanLun','qiangHua','dieJia','zhongShang'] },
    { id:'liuzhi',   name:'Liu Zhi',   title:'Strategist',     atk:3, hp:22, shield:2, faction:'taiping',
      deck:['yanLun','yanLun','dieJia','dieJia','dunFan'] },
    { id:'wangling', name:'Wang Ling',   title:'General',     atk:6, hp:32, shield:0, faction:'longji',
      deck:['yanLun','yanLun','yanLun','qiangHua','qiangHua'] },
    { id:'zhaoer',   name:'Zhao Er',   title:'Swordsman',     atk:5, hp:20, shield:0, faction:'none',
      deck:['yanLun','yanLun','yanLun','zhongShang','zhongShang'] },
    { id:'chenwei',  name:'Chen Wei',   title:'Lady Official',     atk:3, hp:24, shield:3, faction:'wuzetian',
      deck:['yanLun','yanLun','dieJia','dieJia','dunFan'] },
    { id:'fangan',   name:'Fang An',   title:'Civil Official',     atk:4, hp:26, shield:1, faction:'lidan',
      deck:['yanLun','yanLun','qiangHua','dieJia','zhuanYi'] },
    { id:'xushi',    name:'Xu Shi',   title:'Spy',     atk:5, hp:18, shield:0, faction:'wushi',
      deck:['yanLun','yanLun','yanLun','zhongShang','qiangHua'] },
    { id:'liniang',  name:'Lady Li',   title:'Talented Lady',     atk:3, hp:20, shield:4, faction:'taiping',
      deck:['yanLun','dieJia','dieJia','dunFan','dunFan'] },
  ],
  enemySets: [
    { chapter:1, name:'Censorate Officials', officials:[
      { id:'e_c1_1', name:'Deputy Censor-in-Chief', atk:3, hp:16, shield:0, deck:['yanLun','yanLun','zhongShang'] },
      { id:'e_c1_2', name:'Attending Censor', atk:2, hp:14, shield:1, deck:['yanLun','yanLun','dieJia'] }
    ]},
    { chapter:2, name:'Wu Clan Cronies', officials:[
      { id:'e_c2_1', name:'Wu Chengsi', title:'Prince of Wei', atk:4, hp:22, shield:2, deck:['yanLun','yanLun','qiangHua','dieJia'] },
      { id:'e_c2_2', name:'Lai Junchen', title:'Cruel Official', atk:5, hp:18, shield:0, deck:['yanLun','yanLun','yanLun','zhongShang'] },
      { id:'e_c2_3', name:'Zhou Xing', title:'Cruel Official', atk:3, hp:16, shield:0, deck:['yanLun','yanLun','zhongShang'] }
    ]},
    { chapter:3, name:'The Two Zhangs and Cronies', officials:[
      { id:'e_c3_1', name:'Zhang Yizhi', title:'Male Favorite', atk:4, hp:24, shield:1, deck:['yanLun','yanLun','qiangHua','dieJia'] },
      { id:'e_c3_2', name:'Zhang Changzong', title:'Male Favorite', atk:5, hp:20, shield:0, deck:['yanLun','yanLun','yanLun','qiangHua'] },
      { id:'e_c3_3', name:'Wei Chengqing', title:'Crony', atk:3, hp:18, shield:2, deck:['yanLun','dieJia','dieJia','dunFan'] }
    ]},
    { chapter:4, name:'Empress Wei\'s Faction', officials:[
      { id:'e_c4_1', name:'Empress Wei', title:'Empress', atk:5, hp:26, shield:2, deck:['yanLun','yanLun','qiangHua','dieJia','dunFan'] },
      { id:'e_c4_2', name:'Wu Sansi', title:'Prince of Liang', atk:4, hp:24, shield:1, deck:['yanLun','yanLun','zhongShang','dieJia'] },
      { id:'e_c4_3', name:'Princess Anle', title:'Princess', atk:4, hp:20, shield:0, deck:['yanLun','yanLun','yanLun','qiangHua'] },
      { id:'e_c4_4', name:'Zong Chuke', title:'Chancellor', atk:3, hp:18, shield:1, deck:['yanLun','dieJia','zhongShang'] }
    ]},
    { chapter:5, name:'Coup Defenders', officials:[
      { id:'e_c5_1', name:'Wei Bo', title:'Guard Commander', atk:6, hp:28, shield:2, deck:['yanLun','yanLun','qiangHua','qiangHua','dunFan'] },
      { id:'e_c5_2', name:'Gao Song', title:'Wei Confidant', atk:5, hp:24, shield:0, deck:['yanLun','yanLun','yanLun','zhongShang','qiangHua'] },
      { id:'e_c5_3', name:'Empress Wei\'s Assassin', atk:4, hp:20, shield:1, deck:['yanLun','yanLun','dieJia','dunFan'] },
      { id:'e_c5_4', name:'Palace Guard', atk:3, hp:16, shield:0, deck:['yanLun','yanLun','zhongShang'] }
    ]},
    { chapter:6, name:'Final Showdown', officials:[
      { id:'e_c6_1', name:'???', title:'Mastermind', atk:7, hp:36, shield:4, deck:['yanLun','yanLun','yanLun','qiangHua','qiangHua','dunFan','dunFan'] },
      { id:'e_c6_2', name:'Deputy Guard Commander', atk:6, hp:30, shield:2, deck:['yanLun','yanLun','yanLun','qiangHua','dieJia'] },
      { id:'e_c6_3', name:'Shadow Assassin', atk:8, hp:20, shield:0, deck:['yanLun','yanLun','yanLun','yanLun','zhongShang'] }
    ]}
  ],
  chapters: [
    { num:1, title:'Chapter 1: End of Deep Grace',
      opening:[
        { speaker:'Narrator', text:'670 AD. Early years of Emperor Gaozong\'s Xianheng era. Gaozong is weakening day by day, while Heavenly Empress Wu Zetian\'s power grows.' },
        { speaker:'Narrator', text:'A young scholar enters Chang\'an. His name is Gao Yin—born into a declining noble family, barred from the imperial exams due to his ancestors\' crimes, he was summoned to the palace to be the study companion of the Prince of Zhou.' },
        { speaker:'Empress Wu', text:'Today there is a great drought in the empire, the Tibetan Empire has captured eighteen prefectures in the Western Regions, and rumors are flying in the court...' },
        { speaker:'Li Xian', text:'(Childish voice) Mother, I see that nowadays farmers do not tend to their fields...' },
        { speaker:'Empress Wu', text:'(Smiles) Zhe\'er has read quite a few books of the sages lately...' },
        { speaker:'Li Xian', text:'My study companion has taught me a lot recently...' },
        { speaker:'Empress Wu', text:'Study companion? Let me have a look at him.' },
        { speaker:'Gao Yin', text:'Greetings, Your Majesty. I am Gao Yin, from Wugong, Yongzhou.' },
        { speaker:'Empress Wu', text:'(Smiles) I see you have some literary talent, why not enter the civil service through the imperial exams?' },
        { speaker:'Gao Yin', text:'To reply to Your Majesty, my ancestors committed a crime and were imprisoned...' },
        { speaker:'Empress Wu', text:'(Smiles meaningfully) I see. Then you shall stay by Zhe\'er\'s side and teach him well from now on.' },
        { speaker:'Li Xian', text:'(Innocent and ignorant) Companion, what is Mother talking about?' },
        { speaker:'Gao Yin', text:'(Smiling slightly bitterly) It\'s nothing, nothing at all.' },
        { speaker:'Su Liangsi', text:'Young friend, since you have entered these palace walls, you must remember—every step in the court is fraught with danger. But as long as you walk a righteous path, you need not fear ghosts knocking at your door.' },
        { speaker:'Narrator', text:'From then on, under the guidance of Su Liangsi, Gao Yin began his magnificent political career.' }
      ],
      ending:'Gao Yin has just entered the court, carefully navigating between Empress Wu and the Crown Prince. His mentor Su Liangsi\'s teachings still ring in his ears. Though the road ahead is dangerous, the first step has been taken.'
    },
    { num:2, title:'Chapter 2: Betrayal of the Heart',
      opening:[
        { speaker:'Narrator', text:'684 AD. Zhongzong Li Xian was punished for his words and deposed to the Prince of Luling by Empress Wu. Ruizong Li Dan ascended the throne, becoming a mere puppet.' },
        { speaker:'Narrator', text:'Li Jingye rebelled in Yangzhou, and Luo Binwang wrote a manifesto denouncing Empress Wu. However, under the weight of the massive army, the rebellion was crushed within a hundred days.' },
        { speaker:'Gao Yin', text:'(Looking at the moon alone) I too have wandered for a long time. Over the past decade, I have exhausted deep grace, betwixt life, death, teachers, and friends. I have witnessed Empress Wu\'s favors and methods. How should I walk this path?' },
        { speaker:'Narrator', text:'Cruel officials run rampant, the imperial clan is withering. Empress Wu proceeds step by step, and the world is about to change hands.' }
      ],
      ending:'Empress Wu ascends the throne, and the world belongs to the Zhou dynasty. Gao Yin struggles to survive in the shadow of cruel officials, hating their tyranny but forced to ride the tide. The death of his old friend Xue Shao has strengthened a certain conviction in him.'
    },
    { num:3, title:'Chapter 3: Distant Mountains',
      opening:[
        { speaker:'Narrator', text:'690 AD. Wu Zetian formally takes the title of Emperor and names her dynasty Zhou. Gao Yin is now a veteran official in the court, having weathered many storms.' },
        { speaker:'Narrator', text:'Su Liangsi died of fright, and Gao Yin lost his mentor. Cruel officials hold sway, and everyone fears for their lives. Yet under the Empress\'s rule, there are signs of a prosperous era.' },
        { speaker:'Gao Yin', text:'Ruler and minister in a dream, past and present empty names. But distant mountains stretch, cloudy mountains tangle, morning mountains are green... It is time to make a choice.' },
        { speaker:'Narrator', text:'The Prince of Luling returns to the capital, and the undercurrents of the Shenlong Coup are already surging. Various factions extend olive branches to Gao Yin.' },
        { speaker:'Narrator', text:'Seeing the white-haired Wu Zetian on her bed, Gao Yin wept bitterly. The era of a generation\'s Empress is finally drawing to a close.' }
      ],
      ending:'The death of Su Liangsi, the return of the Prince of Luling, the outbreak of the Shenlong Coup... Gao Yin finally made a choice concerning his entire life. From then on, there is no turning back.'
    },
    { num:4, title:'Chapter 4: Winds of Change',
      opening:[
        { speaker:'Narrator', text:'705 AD. The Shenlong Coup succeeds, and Zhongzong is restored. However, the court is far from peaceful. The situation changes suddenly, and factions reshuffle.' },
        { speaker:'Narrator', text:'Empress Wei interferes in politics, Wu Sansi regains power, and Princess Taiping hides her capabilities. Crown Prince Li Chongjun can bear it no longer.' },
        { speaker:'Gao Yin', text:'Though Zhongzong is restored, he is as incompetent as ever. This world must ultimately be fought for by oneself.' },
        { speaker:'Narrator', text:'In July of the first year of Jinglong, Crown Prince Li Chongjun launches a coup and kills Wu Sansi. However, the outcome is unexpected...' }
      ],
      ending:'The smoke of the Jinglong Coup clears, and the political structure of the court is completely broken. The secret war between Princess Taiping and Li Longji surfaces; the real contest has just begun.'
    },
    { num:5, title:'Chapter 5: Dawn of the Long Night',
      opening:[
        { speaker:'Narrator', text:'710 AD. Zhongzong dies suddenly. Empress Wei wishes to emulate Empress Wu and usurp the Tang empire.' },
        { speaker:'Shangguan Wan\'er', text:'Your Highness, this is the edict I drafted, please review it.' },
        { speaker:'Narrator', text:'However, the chaos is out of control. Prince of Linzi Li Longji and Princess Taiping join forces to launch the Tanglong Coup.' },
        { speaker:'Li Longji', text:'Kill her.' },
        { speaker:'Gao Yin', text:'My Lord, should we wait... Lady Shangguan has outstanding literary talent, and as a woman, it is even more rare.' },
        { speaker:'Gao Yin', text:'Life and death depend on this single action. The plans of my entire life will be settled tonight.' },
        { speaker:'Narrator', text:'The long night in Chang\'an is destined to be sleepless. After dawn, everything will be different.' }
      ],
      ending:'The dust settles on the Tanglong Coup, and Empress Wei is executed. But the survivors must face a new gamble. Ruizong ascends the throne, and Princess Taiping holds supreme power.'
    },
    { num:6, title:'Chapter 6: Return of the Mandate of Heaven',
      opening:[
        { speaker:'Narrator', text:'712 AD. Ruizong abdicates to Li Longji. Princess Taiping\'s power is at its peak. The mandate of heaven ultimately has its destination.' },
        { speaker:'Narrator', text:'Of the seven chancellors, five are from Princess Taiping\'s faction. The final showdown is imminent.' },
        { speaker:'Gao Yin', text:'Talent of a king\'s advisor, strategy in a chaotic world. Over forty years of ups and downs in officialdom, it is time to write the ending.' },
        { speaker:'Narrator', text:'In July of the second year of Xiantian, Li Longji strikes first. The destiny of the Tang dynasty turns here—the Kaiyuan era of prosperity is approaching.' }
      ],
      ending:'The Xiantian Coup seals the situation. Your choices shaped this history. The King\'s Advisor—a meritorious minister, a pawn, or a tide-rider? The answer is in your heart.'
    }
  ],
  commonPool: [
    { id:'cp_qh1',  name:'Words of Encouragement',  type:'qiangHua', value:2, desc:'+2 Words (1 ally)' },
    { id:'cp_dj1',  name:'Iron Wall',  type:'dieJia',   value:4, desc:'+4 Shield (1 ally)' },
    { id:'cp_zs1',  name:'Rumors',  type:'zhongShang',value:2, desc:'-2 Words (1 enemy)' },
    { id:'cp_df1',  name:'Tooth for a Tooth',  type:'dunFan',    value:0, desc:'Counter with shield value' },
    { id:'cp_yl1',  name:'Impassioned Speech',  type:'yanLun',    value:0, desc:'Deal Word damage' },
    { id:'cp_qh2',  name:'Boost Morale',  type:'qiangHua',  value:3, desc:'+3 Words (1 ally)' },
    { id:'cp_heal', name:'Gather Strength',  type:'heal',      value:6, desc:'Restore 6 Will (1 ally)' },
    { id:'cp_aoe',  name:'Debate Scholars',  type:'aoe',       value:0, desc:'Deal 2 damage to all enemies' },
    { id:'cp_heal2',name:'Gather Strength',  type:'heal',      value:6, desc:'Restore 6 Will' },
    { id:'cp_aoe2', name:'Debate Scholars',  type:'aoe',       value:0, desc:'Deal 2 damage to all enemies' },
    { id:'cp_df2',  name:'Tooth for a Tooth',  type:'dunFan',    value:0, desc:'Counter with shield value' },
    { id:'cp_dj22', name:'Iron Wall',  type:'dieJia',    value:4, desc:'Shield +4' }
  ],
  events: [
    { id:'ev_1', chapter:1, type:'main', title:'Young Study Companion', cost:0,
      text:'You are young, intelligent, and quite talented in literature. Summoned to the palace, you become the study companion of the Prince of Zhou, Li Xian. Within the palace walls, you witness the majesty and undercurrents of the Tang royal family for the first time. Although the Prince of Zhou has a gentle disposition, he cannot hide his mediocrity. You vaguely feel that the true wielder of power in this palace is someone else.',
      choices:[
        {text:'Focus on studies, fulfill the duty of a study companion', effects:{wenCai:2, zhiMou:0}, result:'Focus on studies, fulfill the duty of a study companion', unlock:null, flag:null},
        {text:'Carefully observe the situation in the palace, keeping it in mind', effects:{wenCai:1, zhiMou:1}, result:'Carefully observe the situation in the palace, keeping it in mind', unlock:null, flag:null}
      ]},
    { id:'ev_2', chapter:1, type:'main', title:'Empress Wu\'s Favor', cost:0,
      text:'Empress Wu visits the Prince of Zhou\'s residence to examine everyone\'s learning. She mentions the "Twelve Matters of Counsel" being drafted and asks for opinions. Everyone is silent out of fear, but you speak eloquently, from the drawbacks of the equal-field system to border defense, with clear logic.\n\nEmpress Wu (smiling): I see you have some literary talent, why not enter the civil service through the imperial exams?\nGao Yin: To reply to Your Majesty, my ancestors committed a crime and were imprisoned...\nEmpress Wu (smiling meaningfully): I see... This child has the talent of a chancellor.\n\nFrom then on, you entered the Heavenly Empress\'s view.',
      choices:[
        {text:'Strike while the iron is hot, actively present your policy essays', effects:{wenCai:2, zhiMou:1, wuzetian:2}, result:'Strike while the iron is hot, actively present your policy essays', unlock:null, flag:null},
        {text:'Modestly decline, expressing that your talent is shallow', effects:{wenCai:1, wuzetian:1}, result:'Modestly decline, expressing that your talent is shallow', unlock:null, flag:null},
        {text:'Secretly observe Empress Wu\'s true intentions', effects:{zhiMou:2}, result:'Secretly observe Empress Wu\'s true intentions', unlock:null, flag:null}
      ]},
    { id:'ev_3', chapter:1, type:'main', title:'Su Liangsi\'s Teachings', cost:0,
      text:'Su Liangsi is ordered to teach you the Six Arts of a gentleman—Rites, Music, Archery, Charioteering, Calligraphy, and Mathematics.\n\nSu Liangsi: "Young friend, are you ready for today\'s examination?"\n\nThis upright and unyielding veteran official is strict in his scholarship, often saying: "The way of an official begins with rectifying oneself." Under his training, you cultivate both literary and martial skills, and learn a principle: in the court, strength is the foundation of standing, but moral character is the way to longevity.\n\nEmpress Wu (privately to a lady official): I see he has some literary talent, but lacks courage and strategy, and is a descendant of a criminal... If he can enter the Hanlin Academy in the future, he wouldn\'t be a bad chess piece.\nLady Official: I will have the servants keep an eye on him. If he has no disloyal intentions, we will properly guide him.',
      choices:[
        {text:'Focus on literary talent, delve into classics and history', effects:{wenCai:3}, result:'Focus on literary talent, delve into classics and history', unlock:null, flag:null},
        {text:'Also practice martial arts, strengthen the physique', effects:{wenCai:1, wuLi:2}, result:'Also practice martial arts, strengthen the physique', unlock:null, flag:null},
        {text:'Learn the art of power and strategy, try to figure out human nature', effects:{zhiMou:2, lengKu:1}, result:'Learn the art of power and strategy, try to figure out human nature', unlock:null, flag:null}
      ]},
    { id:'ev_4', chapter:1, type:'main', title:'Entering Civil Service', cost:0,
      text:'The court holds a special examination to recruit talents from all over the world. You recommend yourself to participate and stand out with an essay on border defense, being appointed as a Hanlin Academy Wait-诏 (Attendant). Although the Hanlin Academy is not an agency with real power, they are close subjects of the Emperor and can access the most core decrees and documents.\n\nGao Yin: "Your Majesty, I know that I am able to have such a change all thanks to you. I wonder if Your Majesty could grant me an official position, so that I can repay your grace."\n\nYour official career officially begins from this point.',
      choices:[
        {text:'Devote yourself to learning government affairs in the Hanlin Academy', effects:{wenCai:2}, result:'Devote yourself to learning government affairs in the Hanlin Academy', unlock:null, flag:null},
        {text:'Take the opportunity to make friends with important ministers in the court', effects:{zhiMou:2, wuzetian:1}, result:'Take the opportunity to make friends with important ministers in the court', unlock:null, flag:null}
      ]},
    { id:'ev_5', chapter:1, type:'main', title:'Twelve Matters of Counsel', cost:0,
      text:'As a North Gate Scholar, you participate in the drafting of Empress Wu\'s Twelve Matters of Counsel. These twelve suggestions cover agriculture, military affairs, criminal law, employment, and other aspects. It is essentially Empress Wu\'s declaration of her governance philosophy to the world. You are responsible for the part concerning the selection of talents.\n\n[Subtitle] I\'ve heard that Lady Shangguan is famous for her talent, it\'s a pity she\'s a woman... Now that I\'m fortunate enough to be appreciated by Empress Wu, I will not fail her trust.\n\nAlthough Gaozong approved it nominally, everyone in the court knows that it is the Heavenly Empress\'s work.',
      choices:[
        {text:'Draft it wholeheartedly, offering counsel to Empress Wu', effects:{wenCai:2, zhiMou:1, wuzetian:3}, result:'Draft it wholeheartedly, offering counsel to Empress Wu', unlock:null, flag:null},
        {text:'Secretly add content restricting the Empress\'s power', effects:{zhiMou:2, lengKu:1, wuzetian:-1, lidan:1}, result:'Secretly add content restricting the Empress\'s power', unlock:null, flag:null}
      ]},
    { id:'ev_6', chapter:1, type:'main', title:'Book Compilation', cost:0,
      text:'Empress Wu orders the compilation of books such as "Rules for Ministers" and "New Admonitions for the Hundred Officials", and you are selected into the compilation team. In your spare time from compiling, you are able to read through the secret collections of classics in the palace, and your learning greatly improves. More importantly, during the compilation process, you get to know many like-minded North Gate Scholars. These connections will play an important role in the future.',
      choices:[
        {text:'Focus on compiling books, improve learning', effects:{wenCai:3, wuzetian:1}, result:'Focus on compiling books, improve learning', unlock:null, flag:null},
        {text:'Secretly plant thoughts of loyalty to Tang in the compilation', effects:{wenCai:1, zhiMou:2, wuzetian:-1, lidan:2}, result:'Secretly plant thoughts of loyalty to Tang in the compilation', unlock:null, flag:null}
      ]},
    { id:'ev_9', chapter:1, type:'main', title:'Case of Crown Prince Li Xian', cost:0,
      text:'Crown Prince Li Xian is accused of treason. Empress Wu orders a search of the Eastern Palace, and hundreds of armors are found. The court is in an uproar. You are ordered to participate in the investigation, but various signs indicate that the case is full of doubts—the number of armors does not match the establishment of the Eastern Palace guards, and key witnesses contradict themselves. The Crown Prince cries tearfully: "I am wronged!" Empress Wu\'s face is like iron.',
      choices:[
        {text:'Report the doubts truthfully, defending the Crown Prince', effects:{zhiMou:1, wenCai:1, wuzetian:-3, lidan:2}, result:'Report the doubts truthfully, defending the Crown Prince', unlock:null, flag:null},
        {text:'Play safe, close the case according to Empress Wu\'s intentions', effects:{lengKu:2, wuzetian:2}, result:'Play safe, close the case according to Empress Wu\'s intentions', unlock:null, flag:null},
        {text:'Secretly keep evidence for the future', effects:{zhiMou:3}, result:'Secretly keep evidence for the future', unlock:null, flag:null}
      ]},
    { id:'ev_11', chapter:1, type:'main', title:'Gaozong\'s Demise', cost:0,
      text:'In the first year of Hongdao, Emperor Gaozong Li Zhi passes away in the Zhenguan Hall in Luoyang. You participate in drafting the aftermath measures—the phrase in the testamentary edict, "If there are military and state affairs that cannot be decided, take the Heavenly Empress\'s disposition," is like a thunderclap. Crown Prince Li Xian ascends the throne as Zhongzong. But everyone knows that the true master is the one behind the curtain. In the court, one era has ended, and another is beginning.',
      choices:[
        {text:'Increase the wording of Empress Wu\'s authority when drafting the edict', effects:{zhiMou:1, lengKu:1, wuzetian:3}, result:'Increase the wording of Empress Wu\'s authority when drafting the edict', unlock:null, flag:null},
        {text:'Draft it truthfully, without bias', effects:{wenCai:2}, result:'Draft it truthfully, without bias', unlock:null, flag:null},
        {text:'Secretly contact the Li imperial clan, expressing loyalty', effects:{zhiMou:2, lidan:2, wuzetian:-1}, result:'Secretly contact the Li imperial clan, expressing loyalty', unlock:null, flag:null}
      ]},
    { id:'ev_14', chapter:2, type:'main', title:'Li Jingye\'s Rebellion', cost:0,
      text:'Xu Jingye raises troops in Yangzhou against Empress Wu, and Luo Binwang writes the "Declaration of War against Wu Zhao" to the world. The declaration\'s wording is sharp like a knife: "Upon entering the door she was jealous, her moth-eyebrows unwilling to yield; she hides her sleeves and skillfully slanders, her fox-charm can bewitch the master." Empress Wu reads it and laughs instead of getting angry: "For such a talent to be like this, it is the fault of the chancellors." You are ordered to assist in quelling the rebellion and show extraordinary strategic wisdom.',
      choices:[
        {text:'Fully assist Empress Wu in quelling the rebellion, offering strategies to capture the rebels', effects:{zhiMou:2, wuLi:1, wuzetian:3}, result:'Fully assist Empress Wu in quelling the rebellion, offering strategies to capture the rebels', unlock:null, flag:null},
        {text:'Secretly contact the rebel army, watching the situation', effects:{zhiMou:1, lengKu:2, wuzetian:-2}, result:'Secretly contact the rebel army, watching the situation', unlock:null, flag:null},
        {text:'Take the opportunity to expand your own power during the rebellion', effects:{zhiMou:2, lengKu:1}, result:'Take the opportunity to expand your own power during the rebellion', unlock:null, flag:null}
      ]},
    { id:'ev_18', chapter:2, type:'main', title:'Birth of Li Longji', cost:0,
      text:'In the first year of Chuigong, Prince of Xiang Li Dan\'s third son is born and named Longji. You go to the Prince\'s residence to congratulate him and see the extraordinary appearance of the infant in swaddling clothes. Li Dan\'s expression is plain, as if he has grown accustomed to living under Empress Wu\'s shadow. No one knows that this infant will change the destiny of the Tang Dynasty in twenty-five years.',
      choices:[
        {text:'Express sincere congratulations to Li Dan, maintaining goodwill', effects:{lidan:1, longji:1}, result:'Express sincere congratulations to Li Dan, maintaining goodwill', unlock:null, flag:null},
        {text:'Calmly probe Li Dan\'s attitude towards the situation', effects:{zhiMou:1, lidan:1}, result:'Calmly probe Li Dan\'s attitude towards the situation', unlock:null, flag:null}
      ]},
    { id:'ev_19', chapter:2, type:'main', title:'Cruel Officials Run Rampant', cost:0,
      text:'Empress Wu uses cruel officials like Lai Junchen and Zhou Xing to eliminate dissidents, and everyone in the court is in danger. "The Classic of Fabricating Charges" authored by Lai Junchen becomes a textbook for informing and framing. The idiom "Please step into the urn" comes from this time—Lai Junchen deals with Zhou Xing using Zhou Xing\'s own methods. You know deeply that in this era, silence is the best protection. But you also see the blood and tears of the innocent.',
      choices:[
        {text:'Try every means to strike Lai Junchen and Zhou Xing', effects:{zhiMou:2, wuLi:1, wuzetian:-2, lidan:2}, result:'Try every means to strike Lai Junchen and Zhou Xing', unlock:null, flag:null},
        {text:'Hide one\'s capacities and bide one\'s time, avoiding their edge', effects:{zhiMou:1}, result:'Hide one\'s capacities and bide one\'s time, avoiding their edge', unlock:null, flag:null},
        {text:'Use the cruel officials to strike political enemies', effects:{lengKu:3, wuzetian:2}, result:'Use the cruel officials to strike political enemies', unlock:null, flag:null}
      ]},
    { id:'ev_22', chapter:2, type:'main', title:'Imperial Clan Rebellion', cost:0,
      text:'Prince of Yue Li Zhen and Prince of Langya Li Chong raise troops against Empress Wu, but are quickly defeated. Empress Wu takes the opportunity to heavily purge the Li imperial clan. Princess Taiping\'s husband Xue Shao is implicated by his brother Xue Yi\'s participation in the rebellion, and is imprisoned and starved to death. Princess Taiping is deeply grieved but powerless to reverse the situation. For the first time, you see the hatred in Princess Taiping\'s eyes—not towards anyone, but towards fate itself.',
      choices:[
        {text:'Secretly comfort Princess Taiping, expressing sympathy', effects:{zhiMou:1, taiping:3}, result:'Secretly comfort Princess Taiping, expressing sympathy', unlock:null, flag:null},
        {text:'Keep a distance, not intervening in royal family affairs', effects:{zhiMou:1}, result:'Keep a distance, not intervening in royal family affairs', unlock:null, flag:null},
        {text:'Submit a memorial pleading for Xue Shao', effects:{wenCai:1, wuzetian:-2, taiping:2}, result:'Submit a memorial pleading for Xue Shao', unlock:null, flag:null}
      ]},
    { id:'ev_23', chapter:2, type:'main', title:'Death of Su Liangsi', cost:0,
      text:'Your mentor Su Liangsi dies suddenly of fright in the court. Upright all his life, he once slapped Empress Wu\'s favorite Xue Huaiyi in public, but ultimately died from fear of the current situation. You kneel for a long time before his bier. His last words to you were: "No matter what surname the empire takes, what the people want is peace." You remember this sentence for a lifetime.',
      choices:[
        {text:'Inherit the mentor\'s will, be an upright minister', effects:{wenCai:1, zhiMou:1, lidan:1}, result:'Inherit the mentor\'s will, be an upright minister', unlock:null, flag:null},
        {text:'Turn grief and indignation into strength, secretly gathering power', effects:{zhiMou:2, lengKu:1}, result:'Turn grief and indignation into strength, secretly gathering power', unlock:null, flag:null}
      ]},
    { id:'ev_25', chapter:2, type:'main', title:'Framing Li Shangjin and Li Sujie', cost:0,
      text:'Wu Zetian instructs cruel officials to falsely accuse Emperor Gaozong\'s sons Li Shangjin and Li Sujie of treason. Li Sujie is strangled, and Li Shangjin hangs himself. By this point, Gaozong\'s sons are almost completely withered. You witness the cruelty of power in this purge—for the throne, even the closest kin can become discarded pawns.',
      choices:[
        {text:'Secretly collect evidence, recording this history', effects:{wenCai:1, zhiMou:1, lidan:1}, result:'Secretly collect evidence, recording this history', unlock:null, flag:null},
        {text:'Participate in the trial, showing loyalty', effects:{lengKu:2, wuzetian:2, lidan:-2}, result:'Participate in the trial, showing loyalty', unlock:null, flag:null},
        {text:'Watch in silence, protecting oneself', effects:{zhiMou:1}, result:'Watch in silence, protecting oneself', unlock:null, flag:null}
      ]},
    { id:'ev_31', chapter:3, type:'main', title:'Li Zhaode Beats Wang Qingzhi', cost:0,
      text:'Wu Chengsi instigates the Luoyang man Wang Qingzhi to lead hundreds of people to submit a petition, asking to establish Wu Chengsi as Crown Prince. Chancellor Li Zhaode is furious and has Wang Qingzhi beaten to death with sticks in court. He sternly says to Empress Wu: "I believe Your Majesty has sons, there is no need to make a nephew the heir." The whole hall is silent. Empress Wu ponders for a long time and unexpectedly does not burst out. You witness this bloody political game in the court—sometimes, violence is also a form of advice.',
      choices:[
        {text:'Voice support for Li Zhaode, supporting the Li clan as Crown Prince', effects:{wuLi:1, zhiMou:1, lidan:3, wushi:-2}, result:'Voice support for Li Zhaode, supporting the Li clan as Crown Prince', unlock:null, flag:null},
        {text:'Keep silent, not showing a stance', effects:{zhiMou:1}, result:'Keep silent, not showing a stance', unlock:null, flag:null},
        {text:'Secretly show goodwill to Wu Chengsi', effects:{lengKu:1, wushi:2, lidan:-1}, result:'Secretly show goodwill to Wu Chengsi', unlock:null, flag:null}
      ]},
    { id:'ev_32', chapter:3, type:'main', title:'An Jincang\'s Hara-kiri', cost:0,
      text:'Someone accuses Li Dan of treason, and Empress Wu orders Lai Junchen to interrogate him. Taichang worker An Jincang steps forward, cuts open his own abdomen in public, his organs exposed, using his life to prove innocence: "Please cut my abdomen to prove the imperial heir is not rebelling!" Empress Wu is greatly shocked and orders Li Dan to be spared. With his single life, An Jincang bought the safety of Li Dan\'s family. You witness this scene nearby, tears streaming down your face.',
      choices:[
        {text:'Submit a memorial asking for a reward for An Jincang, praising his loyalty', effects:{wenCai:1, lidan:3}, result:'Submit a memorial asking for a reward for An Jincang, praising his loyalty', unlock:null, flag:null},
        {text:'Secretly take care of An Jincang\'s family', effects:{zhiMou:1, lidan:2}, result:'Secretly take care of An Jincang\'s family', unlock:null, flag:null}
      ]},
    { id:'ev_35', chapter:3, type:'main', title:'Fengshan Sacrifices at Mount Song', cost:0,
      text:'Wu Zetian leads the ministers to perform the Fengshan sacrifices at Mount Song, and the whole nation celebrates. This is the peak moment of the Empress\'s power—she replaced Tang with Zhou, changed the era name to Wansui, and the world submits. At the top of Mount Song, surrounded by clouds and mist, Wu Zetian overlooks the world, her expression composed. Accompanying her, you suddenly realize: when a person\'s power reaches its peak, decline is not far away.',
      choices:[
        {text:'Take the opportunity of Fengshan to present an eulogy, striving for appreciation', effects:{wenCai:2, wuzetian:2}, result:'Take the opportunity of Fengshan to present an eulogy, striving for appreciation', unlock:null, flag:null},
        {text:'Observe the movements of courtiers, secretly noting various factions', effects:{zhiMou:2}, result:'Observe the movements of courtiers, secretly noting various factions', unlock:null, flag:null}
      ]},
    { id:'ev_36', chapter:3, type:'main', title:'Prince of Luling Returns', cost:0,
      text:'Wu Zetian had a dream of a large parrot with broken wings. Di Renjie takes the opportunity to advise: "The parrot represents Your Majesty\'s son. The broken wings mean the deposed Crown Prince. If Your Majesty establishes the Prince of Luling, it will last forever." Empress Wu thinks for a few days, and finally issues an edict to recall the Prince of Luling, Li Xian, who has been exiled for 14 years. When Li Xian returns to Luoyang, his hair is white and he is trembling. Looking from afar in the crowd, you feel mixed emotions.',
      choices:[
        {text:'Welcome the Prince of Luling, expressing respect', effects:{lidan:2}, result:'Welcome the Prince of Luling, expressing respect', unlock:null, flag:null},
        {text:'Wait and see, waiting for the situation to clear', effects:{zhiMou:1}, result:'Wait and see, waiting for the situation to clear', unlock:null, flag:null},
        {text:'Express support for this decision to Empress Wu', effects:{zhiMou:1, wuzetian:2}, result:'Express support for this decision to Empress Wu', unlock:null, flag:null}
      ]},
    { id:'ev_38', chapter:3, type:'main', title:'Zhang Yizhi Forces Death on Li Xian\'s Children', cost:0,
      text:'The two Zhangs rely on favor to act arrogantly and unbridled. Zhang Yizhi falsely accuses Crown Prince Li Xian\'s son Li Chongrun, daughter Princess Yongtai, and son-in-law Wu Yanji of discussing the two Zhangs. Empress Wu is furious and orders the three to commit suicide. Princess Yongtai was only seventeen, rumored to be pregnant when she died. Zhongzong Li Xian dares not speak out upon hearing the news, only weeping secretly. You witness a father\'s powerlessness in the face of power.',
      choices:[
        {text:'Secretly contact ministers opposing the two Zhangs', effects:{zhiMou:2, lidan:2, wuzetian:-1}, result:'Secretly contact ministers opposing the two Zhangs', unlock:null, flag:null},
        {text:'Endure silently, waiting for the opportunity', effects:{zhiMou:1, lengKu:1}, result:'Endure silently, waiting for the opportunity', unlock:null, flag:null}
      ]},
    { id:'ev_39', chapter:3, type:'main', title:'Zhang Changzong Frames Wei Yuanzhong', cost:0,
      text:'Chancellor Wei Yuanzhong impeaches Zhang Changzong out of dissatisfaction with the two Zhangs\' autocracy. Zhang Changzong counter-accuses Wei Yuanzhong of treason and instigates Zhang Yue to bear false witness. At the critical moment, Zhang Yue\'s conscience discovers itself in the imperial presence, and he refuses to bear false witness. Although Wei Yuanzhong is demoted, the arrogance of the Zhang brothers sparks more dissatisfaction among courtiers. The seed of the Shenlong Coup is thus planted.',
      choices:[
        {text:'Secretly support Wei Yuanzhong, passing intelligence', effects:{zhiMou:2, lidan:2, longji:1}, result:'Secretly support Wei Yuanzhong, passing intelligence', unlock:null, flag:null},
        {text:'Persuade Zhang Yue to refuse to bear false witness', effects:{zhiMou:1, wenCai:1, longji:2}, result:'Persuade Zhang Yue to refuse to bear false witness', unlock:null, flag:null},
        {text:'Do not intervene, protecting oneself', effects:{lengKu:1}, result:'Do not intervene, protecting oneself', unlock:null, flag:null}
      ]},
    { id:'ev_40', chapter:3, type:'main', title:'Shenlong Coup', cost:0,
      text:'In the first month of the first year of Shenlong, Wu Zetian is seriously ill, and the two Zhangs control the palace. Chancellors Zhang Jianzhi, Cui Xuanwei, and three others lead the Yulin Army to launch a coup, executing Zhang Yizhi and Zhang Changzong, and forcing Wu Zetian to abdicate. Zhongzong Li Xian is restored. The elderly Empress is moved to Shangyang Palace, and passes away in November of that year. Her testamentary edict removes the title of Emperor and calls her Zetian Dasheng Empress. An era finally comes to an end.',
      choices:[
        {text:'Actively participate in the coup, assisting Zhang Jianzhi', effects:{zhiMou:2, wuLi:1, lidan:3, wuzetian:-3}, result:'Actively participate in the coup, assisting Zhang Jianzhi', unlock:null, flag:null},
        {text:'Protect Wu Zetian\'s safety during the coup', effects:{lengKu:-1, wuzetian:2, taiping:1}, result:'Protect Wu Zetian\'s safety during the coup', unlock:null, flag:null},
        {text:'Help neither side, watching the situation calmly', effects:{zhiMou:1}, result:'Help neither side, watching the situation calmly', unlock:null, flag:null}
      ]},
    { id:'ev_43', chapter:4, type:'main', title:'Wives\' Diplomacy', cost:0,
      text:'After Zhongzong\'s restoration, Empress Wei and Princess Anle blatantly sell official positions. Court politics become corrupt, and "Xiefeng officials" (officials appointed irregularly) are everywhere. Empress Wei intends to emulate Wu Zetian, colluding with Wu Sansi. Princess Taiping and Shangguan Wan\'er secretly weave their own networks. As a veteran official who has experienced three reigns, you become the target of various factions\' wooing.',
      choices:[
        {text:'Cooperate with Princess Taiping\'s faction', effects:{zhiMou:1, taiping:3}, result:'Cooperate with Princess Taiping\'s faction', unlock:null, flag:null},
        {text:'Express goodwill to Li Longji', effects:{zhiMou:1, longji:2}, result:'Express goodwill to Li Longji', unlock:null, flag:null},
        {text:'Maintain neutrality, not forming cliques', effects:{zhiMou:2}, result:'Maintain neutrality, not forming cliques', unlock:null, flag:null}
      ]},
    { id:'ev_44', chapter:4, type:'main', title:'Purge of Meritorious Ministers', cost:0,
      text:'Encouraged by Empress Wei and Wu Sansi, Zhongzong begins to purge the meritorious ministers of the Shenlong Coup. Zhang Jianzhi, Jing Hui, and the other five princes are successively demoted and ultimately all murdered. You sigh deeply seeing the loyal ministers who risked their lives to launch the coup fall one by one. Wu Sansi is triumphant: "They were just a bunch of chess pieces."',
      choices:[
        {text:'Secretly help the demoted meritorious ministers', effects:{zhiMou:1, lidan:2, wushi:-2}, result:'Secretly help the demoted meritorious ministers', unlock:null, flag:null},
        {text:'Show cooperative intention to Wu Sansi', effects:{lengKu:2, wushi:3}, result:'Show cooperative intention to Wu Sansi', unlock:null, flag:null},
        {text:'Keep silent, remembering this debt', effects:{zhiMou:1, lengKu:1}, result:'Keep silent, remembering this debt', unlock:null, flag:null}
      ]},
    { id:'ev_45', chapter:4, type:'main', title:'Princess Taiping Bides Her Time', cost:0,
      text:'Under the dual pressure of Wu Sansi and Empress Wei, Princess Taiping chooses to hide her capacities and bide her time. She stays behind closed doors, secretly accumulating power. You visit her residence and see her playing chess. She looks at you and smiles faintly: "The chess game is not over, and victory or defeat is undecided. What\'s the rush?" You understand that this princess is waiting for an opportunity.',
      choices:[
        {text:'Express willingness to serve the Princess', effects:{zhiMou:1, taiping:3}, result:'Express willingness to serve the Princess', unlock:null, flag:null},
        {text:'Exchange intelligence, maintaining a cooperative relationship', effects:{zhiMou:2, taiping:2}, result:'Exchange intelligence, maintaining a cooperative relationship', unlock:null, flag:null}
      ]},
    { id:'ev_46', chapter:4, type:'main', title:'Jinglong Coup', cost:0,
      text:'Crown Prince Li Chongjun, unable to endure the humiliation of Wu Sansi and his son, leads the Yulin Army to launch a mutiny. The rebel army kills Wu Sansi and his son Wu Chongxun, but fails in attacking the imperial palace. Li Chongjun is killed by his subordinates while fleeing. Although this coup failed, it eliminated the great threat of Wu Sansi. Empress Wei\'s power greatly increases as a result, and the court situation is turbulent again.',
      choices:[
        {text:'Secretly assist Crown Prince Li Chongjun', effects:{wuLi:1, zhiMou:1, wushi:-3}, result:'Secretly assist Crown Prince Li Chongjun', unlock:null, flag:null},
        {text:'Help neither side, wait quietly for the result', effects:{zhiMou:1}, result:'Help neither side, wait quietly for the result', unlock:null, flag:null},
        {text:'Take advantage of the chaos to collect intelligence on all parties', effects:{zhiMou:2}, result:'Take advantage of the chaos to collect intelligence on all parties', unlock:null, flag:null}
      ]},
    { id:'ev_47', chapter:4, type:'main', title:'Pleading for Princess Taiping', cost:0,
      text:'After the Jinglong Coup, Empress Wei takes the opportunity to suppress Princess Taiping. You use your connections and influence to speak for Princess Taiping in the court, saving her from demotion. Princess Taiping is deeply grateful: "Gao Qing, I will never forget this favor." In her eyes, there is sincere emotion, but also a politician\'s calculation.',
      choices:[
        {text:'Continue to run errands for Princess Taiping', effects:{zhiMou:1, taiping:3}, result:'Continue to run errands for Princess Taiping', unlock:null, flag:null},
        {text:'Take this opportunity to propose conditions', effects:{zhiMou:2, lengKu:1, taiping:1}, result:'Take this opportunity to propose conditions', unlock:null, flag:null}
      ]},
    { id:'ev_48', chapter:4, type:'main', title:'Empress Wei Woos Shangguan Wan\'er', cost:0,
      text:'Empress Wei woos Shangguan Wan\'er for her own use. Although Shangguan Wan\'er seemingly complies, she secretly keeps in touch with Princess Taiping. From Shangguan Wan\'er, you learn about Empress Wei\'s various plans—she wants to emulate Empress Wu, first grasping military power, then acting as regent. The situation no longer allows you to continue watching.',
      choices:[
        {text:'Pass the intelligence to Princess Taiping', effects:{zhiMou:2, taiping:2}, result:'Pass the intelligence to Princess Taiping', unlock:null, flag:null},
        {text:'Pass the intelligence to Li Longji', effects:{zhiMou:2, longji:3}, result:'Pass the intelligence to Li Longji', unlock:null, flag:null},
        {text:'Inform both sides, profiting from both', effects:{zhiMou:1, lengKu:1, taiping:1, longji:1}, result:'Inform both sides, profiting from both', unlock:null, flag:null}
      ]},
    { id:'ev_50', chapter:5, type:'main', title:'Tanglong Coup', cost:0,
      text:'In June of the fourth year of Jinglong, Tang Zhongzong Li Xian dies suddenly—rumored to have been poisoned by Empress Wei and Princess Anle. Empress Wei establishes Prince of Wen Li Chongmao as Emperor, acts as regent herself, and wants to repeat Empress Wu\'s story. Li Longji unites with Princess Taiping, leading the Wanqi camp to launch a mutiny late at night. Ge Fushun first takes Xuanwu Gate, and Chen Xuanli controls the imperial guards. Empress Wei is killed in the chaotic army, and Princess Anle dies a violent death. This night changed everything.',
      choices:[
        {text:'Fully support Li Longji, personally go to the battlefield', effects:{wuLi:2, zhiMou:1, longji:4}, result:'Fully support Li Longji, personally go to the battlefield', unlock:null, flag:null},
        {text:'Coordinate all parties for Princess Taiping in the rear', effects:{zhiMou:2, taiping:3}, result:'Coordinate all parties for Princess Taiping in the rear', unlock:null, flag:null},
        {text:'Bet on both sides, ensuring no loss regardless of who wins', effects:{zhiMou:1, lengKu:2, taiping:1, longji:1}, result:'Bet on both sides, ensuring no loss regardless of who wins', unlock:null, flag:null}
      ]},
    { id:'ev_51', chapter:5, type:'main', title:'Choice: Support Li Longji', cost:0,
      text:'After the success of the Tanglong Coup, Princess Taiping and Li Longji jointly establish Prince of Xiang Li Dan as Emperor. But differences quickly emerge—Princess Taiping wants to be the second Wu Zetian, while Li Longji wants to be the true Son of Heaven. You stand at a crossroads and must make a choice. This choice will determine your final destiny.',
      choices:[
        {text:'Firmly support Li Longji, helping him become Crown Prince', effects:{zhiMou:2, longji:4, taiping:-2}, result:'Firmly support Li Longji, helping him become Crown Prince', unlock:null, flag:null},
        {text:'Stand on Princess Taiping\'s side', effects:{zhiMou:1, taiping:4, longji:-2}, result:'Stand on Princess Taiping\'s side', unlock:null, flag:null},
        {text:'Support Li Dan, taking the middle path', effects:{zhiMou:2, lidan:3}, result:'Support Li Dan, taking the middle path', unlock:null, flag:null}
      ]},
    { id:'ev_52', chapter:5, type:'main', title:'Li Dan Suppresses Li Longji', cost:0,
      text:'After Li Dan ascends the throne, Princess Taiping\'s power is overwhelming, planting partisans all over the court. Five of the seven chancellors come from Taiping\'s faction. She constantly slanders in front of Li Dan, trying to shake Li Longji\'s position as Crown Prince. Li Dan is indecisive, and his attitude towards the Crown Prince runs hot and cold. Li Longji\'s situation is so similar to Li Dan\'s back then.',
      choices:[
        {text:'Secretly pass intelligence for Li Longji', effects:{zhiMou:2, longji:3, taiping:-1}, result:'Secretly pass intelligence for Li Longji', unlock:null, flag:null},
        {text:'Advise Li Dan to balance the two factions\' power', effects:{zhiMou:1, wenCai:1, lidan:2}, result:'Advise Li Dan to balance the two factions\' power', unlock:null, flag:null},
        {text:'Help Princess Taiping apply pressure', effects:{lengKu:1, taiping:3, longji:-2}, result:'Help Princess Taiping apply pressure', unlock:null, flag:null}
      ]},
    { id:'ev_55', chapter:6, type:'main', title:'Countering Rumors', cost:0,
      text:'Princess Taiping spreads rumors claiming Li Longji is not the eldest legitimate son and should not be established as Crown Prince. She also secretly buys off sorcerers to fabricate the rhetoric that "celestial phenomena have changed, unfavorable to the Crown Prince." You help Li Longji refute these rumors one by one, and even find evidence of Princess Taiping buying off sorcerers. Li Longji holds your hand: "Gao Qing, this favor will surely be repaid in the future."',
      choices:[
        {text:'Publicly expose Princess Taiping\'s conspiracy', effects:{zhiMou:1, wuLi:1, longji:3, taiping:-3}, result:'Publicly expose Princess Taiping\'s conspiracy', unlock:null, flag:null},
        {text:'Privately present evidence to Li Dan', effects:{zhiMou:2, longji:2, lidan:1, taiping:-1}, result:'Privately present evidence to Li Dan', unlock:null, flag:null}
      ]},
    { id:'ev_56', chapter:6, type:'main', title:'Crown Prince Supervises the State', cost:0,
      text:'Driven by you, Yao Chong, Song Jing, and others, Li Dan finally agrees to let Crown Prince Li Longji supervise the state. Princess Taiping is furious and smashes her favorite jade bowl in her residence. She knows this is her last chance. If she cannot bring down Li Longji before his formal accession to the throne, everything will be too late.',
      choices:[
        {text:'Assist Li Longji in handling state affairs, consolidating his position', effects:{zhiMou:2, wenCai:1, longji:3}, result:'Assist Li Longji in handling state affairs, consolidating his position', unlock:null, flag:null},
        {text:'Make a final mediation between Princess Taiping and Li Longji', effects:{zhiMou:2, taiping:1, longji:1}, result:'Make a final mediation between Princess Taiping and Li Longji', unlock:null, flag:null}
      ]},
    { id:'ev_57', chapter:6, type:'main', title:'Taiping Panics', cost:0,
      text:'In the first year of Xiantian, Li Dan abdicates to Li Longji. Princess Taiping realizes the situation is hopeless and begins to take desperate risks. She contacts General of the Left Yulin Army Chang Yuankai, Right Yulin Army Commander Li Ci, and others to plot a mutiny, even planning to poison Li Longji\'s food. However, her plan is leaked—the news comes precisely from her most trusted people.',
      choices:[
        {text:'Inform Li Longji of Princess Taiping\'s plan', effects:{zhiMou:2, longji:4, taiping:-4}, result:'Inform Li Longji of Princess Taiping\'s plan', unlock:null, flag:null},
        {text:'Try to persuade Princess Taiping to give up', effects:{wenCai:1, zhiMou:1, taiping:1}, result:'Try to persuade Princess Taiping to give up', unlock:null, flag:null},
        {text:'Help neither side, wait quietly for the ending', effects:{zhiMou:1}, result:'Help neither side, wait quietly for the ending', unlock:null, flag:null}
      ]},
    { id:'ev_58', chapter:6, type:'main', title:'Xiantian Coup', cost:0,
      text:'In July of the second year of Xiantian, Li Longji strikes first. He leads his trusted followers to execute Princess Taiping\'s partisans Dou Huaizhen, Cen Xi, Xiao Zhizhong, and others; Chang Yuankai and Li Ci are killed in the court. Princess Taiping flees to a Buddhist temple in the Southern Mountains and is granted death three days later. Before dying, she says one sentence: "I lost after all, but I have no regrets." Li Dan completely hands over power, and Li Longji changes the era name to Kaiyuan. A prosperous age finally arrives. And your story has also reached its final chapter.',
      choices:[
        {text:'Assist Li Longji in launching the coup, personally ending Taiping\'s power', effects:{zhiMou:2, wuLi:2, longji:5, taiping:-5}, result:'Assist Li Longji in launching the coup, personally ending Taiping\'s power', unlock:null, flag:null},
        {text:'Protect Princess Taiping\'s family during the coup', effects:{zhiMou:1, lengKu:-1, longji:2, taiping:1}, result:'Protect Princess Taiping\'s family during the coup', unlock:null, flag:null},
        {text:'Retire after success, not participating in the final purge', effects:{zhiMou:2, longji:2}, result:'Retire after success, not participating in the final purge', unlock:null, flag:null}
      ]},
    /* SIDE EVENTS */
    { id:'ev_ch1_market', chapter:1, type:'side', title:'Encounter in the East Market', cost:2,
      text:'While strolling in the East Market, you meet a simply dressed middle-aged man being pestered by ruffians.',
      choices:[
        { text:'Lend a helping hand', effects:{ wuLi:1, taiping:5 }, result:'You repel the ruffians. The middle-aged man says gratefully: "I am Liu Zhi, I will definitely repay you in the future."', unlock:'liuzhi', flag:null },
        { text:'Look on coldly', effects:{ lengKu:1 }, result:'You leave silently. Sometimes, playing it safe is also a kind of wisdom.', unlock:null, flag:null },
        { text:'Speak out to mediate', effects:{ wenCai:1, zhiMou:1 }, result:'You skillfully resolve the conflict with your eloquent tongue. The middle-aged man is deeply impressed by you.', unlock:null, flag:null },
      ]},
    { id:'ev_ch1_tavern', chapter:1, type:'side', title:'Tavern News', cost:1,
      text:'In the tavern, you hear people talking about recent court affairs. The open and secret struggles between Wu Chengsi and Princess Taiping are an open secret.',
      choices:[
        { text:'Listen carefully', effects:{ zhiMou:1, taiping:3, longji:3 }, result:'You noted down a lot of useful intelligence. Know the enemy and know yourself, and you can fight a hundred battles with no danger of defeat.', unlock:null, flag:null },
        { text:'Join the discussion', effects:{ wenCai:1 }, result:'Your insights make everyone look at you with new eyes. But perhaps, talking too much is not necessarily a good thing.', unlock:null, flag:null },
      ]},
    { id:'ev_ch1_temple', chapter:1, type:'side', title:'Zen at White Horse Temple', cost:2,
      text:'The old monk of the White Horse Temple invites you to taste tea and discuss the Dao. The temple is quiet, allowing a temporary escape from the hubbub.',
      choices:[
        { text:'Humbly ask for advice', effects:{ wenCai:1, zhiMou:1, wuzetian:3 }, result:'The old monk says: "Almsgiver has the talent to assist a king, but needs to guard against arrogance and rashness." You seem to realize something.', unlock:null, flag:null },
        { text:'Politely decline', effects:{}, result:'You have no heart for Zen, the court is your battlefield.', unlock:null, flag:null },
      ]},
    { id:'ev_ch1_recruit_zhao', chapter:1, type:'side', title:'Swordsman Zhao Er', cost:3,
      text:'A wandering swordsman is performing on the street. His swordsmanship is fierce, not ordinary.',
      choices:[
        { text:'Step forward to befriend', effects:{ wuLi:1 }, result:'"I am Zhao Er. You are interesting, I\'ll follow you."', unlock:'zhaoer', flag:null },
        { text:'Ignore', effects:{}, result:'You continue on your way.', unlock:null, flag:null },
      ]},
    { id:'ev_ch2_spy', chapter:2, type:'side', title:'Spy Visits', cost:2,
      text:'A person calling himself Xu Shi approaches you, claiming to have a batch of secret reports about the Wu clan.',
      choices:[
        { text:'Accept the secret reports', effects:{ zhiMou:2, wushi:-5, wuzetian:-5 }, result:'The secret reports reveal many of Wu Chengsi\'s conspiracies. This information is worth its weight in gold.', unlock:'xushi', flag:null },
        { text:'Refuse and report', effects:{ wuzetian:10, lengKu:1 }, result:'You report this matter. Empress Wu is quite satisfied with your loyalty.', unlock:null, flag:null },
      ]},
    { id:'ev_ch2_chen', chapter:2, type:'side', title:'Female Official Chen Wei', cost:2,
      text:'Female official before the emperor, Chen Wei, comes on Empress Wu\'s orders to pass a message: "The Sage wants to see you."',
      choices:[
        { text:'Gladly go', effects:{ wuzetian:10, wenCai:1 }, result:'Empress Wu scrutinizes you for a long time, nodding slightly. Chen Wei whispers beside you: "You passed."', unlock:'chenwei', flag:null },
        { text:'Excuse oneself by claiming illness', effects:{ wuzetian:-5 }, result:'You temporarily dodge it. But the price of refusing the Sage will be discussed later.', unlock:null, flag:null },
      ]},
    { id:'ev_ch2_fang', chapter:2, type:'side', title:'Civil Official Fang An', cost:1,
      text:'Fang An is a staff member at Li Dan\'s residence, and he invites you to drink and chat.',
      choices:[
        { text:'Keep the appointment', effects:{ lidan:8, zhiMou:1 }, result:'Fang An is cautious and steady. He reveals some of Prince of Xiang Li Dan\'s thoughts.', unlock:'fangan', flag:null },
        { text:'Politely decline', effects:{}, result:'You did not go.', unlock:null, flag:null },
      ]},
    { id:'ev_ch2_li', chapter:2, type:'side', title:'Talented Woman Li Niang', cost:2,
      text:'At a poetry gathering, you meet the talented woman Li Niang from Princess Taiping\'s residence. Her literary talent impresses you.',
      choices:[
        { text:'Make friends through poetry', effects:{ wenCai:2, taiping:8 }, result:'Li Niang praises: "The young master\'s literary talent is brilliant. If Princess Taiping knew, she would surely invite you."', unlock:'liniang', flag:null },
        { text:'Keep a distance', effects:{ zhiMou:1 }, result:'You know Princess Taiping\'s power is huge, and getting close too early may not be wise.', unlock:null, flag:null },
      ]},
    { id:'ev_ch3_faction', chapter:3, type:'main', title:'Moment of Choice', cost:0,
      text:'The situation has reached a point where you must choose a side. Which side will you support?',
      choices:[
        { text:'Princess Taiping', effects:{ taiping:30 }, result:'You decide to join Princess Taiping\'s command. Her ambition coincides with your aspirations.', flag:'faction_taiping', unlock:null },
        { text:'Prince of Xiang Li Dan', effects:{ lidan:30 }, result:'You choose to support Prince of Xiang Li Dan. The legitimate imperial heir, perfectly justifiable.', flag:'faction_lidan', unlock:null },
        { text:'Wu Clan', effects:{ wushi:30 }, result:'You choose to stand on the side of the Wu clan. Although risky, the return is also the greatest.', flag:'faction_wushi', unlock:null },
        { text:'Loyal to Empress Wu', effects:{ wuzetian:30 }, result:'You decide to be loyal only to Empress Wu. This is the most dangerous and lonely path.', flag:'faction_wuzetian', unlock:null },
      ]},
    { id:'ev_ch3_ambush', chapter:3, type:'side', title:'Night Attack', cost:3,
      text:'Late at night, someone breaks into your residence. It\'s an assassin!',
      choices:[
        { text:'Fight hard to resist', effects:{ wuLi:2 }, result:'You repel the assassin. It seems your choice has angered some people.', unlock:null, flag:null },
        { text:'Escape through the window', effects:{ zhiMou:1 }, result:'Where there is life, there is hope. You escape from the back window, saving your life.', unlock:null, flag:null },
      ]},
    { id:'ev_ch4_scheme', chapter:4, type:'side', title:'Conspiracy', cost:2,
      text:'Your faction is planning a major operation. You need to decide your role.',
      choices:[
        { text:'Act as the vanguard', effects:{ wuLi:2, wenCai:1 }, result:'You will charge forward at the critical moment. High risk, high reward.', unlock:null, flag:null },
        { text:'Devise strategies', effects:{ zhiMou:3 }, result:'You choose to command behind the scenes. The value of a strategist can only be reflected at a critical moment.', unlock:null, flag:null },
      ]},
    { id:'ev_ch5_betrayal', chapter:5, type:'side', title:'Price of Betrayal', cost:2,
      text:'An old friend unexpectedly appears in the enemy camp. He reaches out to you: "It\'s not too late to turn back now."',
      choices:[
        { text:'Flatly refuse', effects:{ zhiMou:1, lengKu:2 }, result:'"Since the choice is made, there is no turning back." You turn and leave.', unlock:null, flag:null },
        { text:'Pretend to agree', effects:{ zhiMou:2, lengKu:3 }, result:'You decide to beat them at their own game. But walking in lies, there is always a time to slip.', unlock:null, flag:null },
      ]}
  ]
};
