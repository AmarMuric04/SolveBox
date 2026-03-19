module.exports = [
    {
      name: "Рубиков куб",
      main_image:
        "https://images.pexels.com/photos/6254929/pexels-photo-6254929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "3D комбинациони слагалица где је свако лице куба различите боје. Циљ је да се боје поређају тако да свако лице постане униформна боја. Различите варијације укључују различите величине и облике, као што су Пираминкс и Мирор куб. Популарне варијације укључују 2x2x2 (Мини куб), 4x4x4 (Рубиково осветљење), и 5x5x5 (Професорски куб).",
      variations: [
        {
          name: "2x2x2 (Мини куб)",
          description:
            "Једноставнија верзија Рубиковог куба без средњих делова, идеална за почетнике.",
          difficulty: "Почетник",
          popularity: 4.5,
          image:
            "https://cdn.prod.website-files.com/6595ca03bcd68f311fd41872/65b129cad7f1ec360b69df99_659edd5970304acf99d9fd25_product__MINI_main.png",
          video: "https://www.youtube.com/watch?v=GANnG5a19kg&ab_channel=JPerm",
        },
        {
          name: "4x4x4 (Рубиково осветљење)",
          description:
            "Додаје више комплексности са центрима који могу да се крећу независно и паритетним грешкама.",
          difficulty: "Интермедијар",
          popularity: 4.0,
          image:
            "https://cdn.prod.website-files.com/6595ca03bcd68f311fd41872/673cc25c8154cdc74cf26fae_product__MASTER_main-p-500.jpg",
          video: "https://www.youtube.com/watch?v=KWOZHbDdOeo&ab_channel=JPerm",
        },
        {
          name: "5x5x5 (Професорски куб)",
          description:
            "Још сложеније са додатним ивичним и централним деловима, пружа прави тест стрпљења и вештине.",
          difficulty: "Напредни",
          popularity: 3.8,
          image: "https://www.grubiks.com/images/puzzles/19/small.png",
          video: "https://www.youtube.com/watch?v=d1I-jJlVwB4&ab_channel=JPerm",
        },
        {
          name: "Пираминкс",
          description: "Куб у облику пирамиде који је лакши него што изгледа.",
          difficulty: "Почетник",
          popularity: 4.3,
          image:
            "https://cdn.prod.website-files.com/6595ca03bcd68f311fd41872/65b129cbd4a1a1cd96e12422_659ee0ea0a2f977cbd4f737d_product__PYRAMID_main.png",
          video:
            "https://www.youtube.com/watch?v=pHBj8hixTfE&ab_channel=NOBLECUBES",
        },
        {
          name: "Мирор куб",
          description:
            "Куб чији се делови разликују по облику уместо по боји, пружајући визуелни и просторни изазов.",
          difficulty: "Напредни",
          popularity: 4.7,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_HLHvxmxguBjmAtdXqKAS-JzX2vjc5suIg&s",
          video:
            "https://www.youtube.com/watch?v=asaVCDvLfRE&ab_channel=TheSimonShi",
        },
      ],
      main_video: "https://www.youtube.com/embed/F-zMjsRgJws",
      fun_fact:
        "Свetsки рекорд за решавање Рубиковог куба 3x3x3 је испод 3,5 секунде од 2023. године!",
      history: {
        inventor: "Ерно Рубик",
        year_invented: 1974,
        original_name: "Магични куб",
        milestone: "Постала глобална појава 1980-их.",
      },
      historical_fact:
        "Рубиков куб је изумео 1974. године Ерно Рубик, мађарски архитекта, као наставни алат за објашњавање тродимензионалне геометрије.",
      advanced_strategies: [
        "CFOP метод: Комбинује Cross, F2L (Прва два слоја), OLL (Оријентација последњег слоја) и PLL (Пермутација последњег слоја).",
        "Роук метод: Фокусира се на прављење блокова и решавање ивица на минималистички начин.",
        "ZZ метод: Оптимизује оријентацију ивица рано у решењу ради ефикасности.",
        "FMC (Изазов са најмање потеза): Решава куб са што мање потеза.",
      ],
      content: {
        tutorials: [
          {
            type: "text",
            content:
              "Стандардни Рубиков куб може да се реши у шест корака: решавање белог крста, решавање белих углова, решавање ивица средњег слоја, решавање жутог крста, оријентација жутих углова и на крају пермутација последњег слоја. Варијације као што је 4x4x4 захтевају додатне кораке за решавање центара и паритетних грешака.",
          },
          {
            type: "video",
            title: "Како решити Рубиков куб",
            url: "https://www.youtube.com/embed/R-R0KrXvWbc",
          },
          {
            type: "link",
            title: "Упутство за решавање Рубиковог куба корак по корак",
            url: "https://www.rubiks.com/solution-guides",
          },
          {
            type: "article",
            title: "Спидкубинг: Напредне технике и такмичења",
            url: "https://www.worldcubeassociation.org/",
          },
        ],
        tips: [
          "Почните са учењем нотације: U (горе), D (доле), L (лево), R (десно), F (предње), B (задње).",
          "Практикујте решавање једне површине пре него што решавате цео куб.",
          "Учење основних алгоритама за честа патерна као што су T-перм и Y-перм.",
          "За веће кубове решите центре и ивице прво пре него што их комбинујете да бисте решили 3x3x3 куб.",
          "Истражите технике за брзо решавање као што су F2L (Прва два слоја), OLL (Оријентација последњег слоја) и PLL (Пермутација последњег слоја).",
          "Користите апликације за тајмере како бисте пратили свој напредак и побољшали брзину решавања.",
        ],
        related_facts: [
          "Постоји преко 43 квинтилиона могућих конфигурација стандардног Рубиковог куба 3x3.",
          "Свetsки рекорд за решавање Рубиковог куба 3x3 је испод 4 секунде.",
          "Рубикови кубови су коришћени у терапији за побољшање когнитивних и моторичких вештина.",
          "Највећи функционални Рубиков куб икада направљен био је 17x17x17 куб.",
        ],
        resources: {
          apps: [
            {
              name: "Cube Solver",
              url: "https://www.cube-solver.com/",
              description: "Интерактивни решавач за разне кубове.",
            },
            {
              name: "Рубиков куб тајмер",
              url: "https://cubetimer.com/",
              description:
                "Пратите своје време решавања и такмичите се са пријатељима.",
            },
          ],
          communities: [
            {
              name: "SpeedSolving Форум",
              url: "https://www.speedsolving.com/",
              description:
                "Придружите се глобалној заједници кубера и размењујте савете и технике.",
            },
            {
              name: "Реддит Рубиков куб",
              url: "https://www.reddit.com/r/Cubers/",
              description:
                "Разговарајте о слагалицама, делите решења и учествујте у изазовима.",
            },
          ],
        },
      },
    },
    {
      name: "Судоку",
      main_image:
        "https://images.pexels.com/photos/25596343/pexels-photo-25596343/free-photo-of-person-playing-sudoku-on-the-train.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Логичка игра са распоређивањем бројева у којој попуњавате 9x9 мрежу тако да сваки ред, колона и 3x3 подмрежа садрже цифре од 1 до 9. Варијације укључују Мини Судоку (6x6), Килер Судоку и Самурај Судоку, које нуде јединствене изазове за играче свих нивоа вештина.",
      variations: [
        {
          name: "Мини Судоку",
          description:
            "Мале мреже као што су 6x6 или 4x4 за брже изазове, идеално за почетнике или кратку менталну вежбу.",
          difficulty: "Почетник",
          popularity: 4.2,
          image:
            "https://ecdn.teacherspayteachers.com/thumbitem/480-Mini-Sudoku-Puzzles-for-Printing-4x4-and-6x6-grids-7079523-1656584443/original-7079523-4.jpg",
          video:
            "https://www.youtube.com/watch?v=qZOQHMGXaz4&ab_channel=SimpleTeachingbyHarry",
        },
        {
          name: "Килер Судоку",
          description:
            "Комбинује Судоку са аритметским ограничењима у кавезима, додајући слој математике класичној загонетци.",
          difficulty: "Средњи",
          popularity: 4.5,
          image:
            "https://sarahrubinbooks.com/wp-content/uploads/2016/05/killer-sudoku-2.jpg?w=584",
          video:
            "https://www.youtube.com/watch?v=COsAC5y9gS4&ab_channel=dkmgames",
        },
        {
          name: "Самурај Судоку",
          description:
            "Међусобно повезане Судоку мреже које захтевају решавање више загонетки истовремено, нудећи заиста комплексни изазов.",
          difficulty: "Напредни",
          popularity: 3.9,
          image:
            "https://www.researchgate.net/publication/264572734/figure/fig4/AS:669536953065484@1536641457567/Samurai-Sudoku-Example-135.jpg",
          video:
            "https://www.youtube.com/watch?v=EbZQizycDzM&ab_channel=MindDefiner",
        },
        {
          name: "Хипер Судоку",
          description:
            "Обрт где додатне преклапајуће области такође морају да прате правила Судоку.",
          difficulty: "Средњи",
          popularity: 4.3,
          image:
            "https://d3p4ev2sxj7kns.cloudfront.net/assets/images/help/hyper1.png",
          video:
            "https://www.youtube.com/watch?v=GPbdSaFkMfo&ab_channel=SudokuSolver",
        },
      ],
      main_video: "https://www.youtube.com/embed/kvU9_MVAiE0",
      historical_fact:
        "Судоку је инспирисан математичким концептом из 18. века познатим као Латински квадрат, а постао је глобално популаран након што је објављен у јапанским часописима за загонетке 1980-их.",
      advanced_strategies: [
        "X-Wing: Идентификује обрасце који ограничавају распоред бројева преко више редова и колона.",
        "Swordfish: Слично као X-Wing, али укључује три реда или колоне.",
        "XYZ-Wing: Тактика која се користи за елиминисање могућности на основу заједничких кандидата бројева.",
        "Јеллифиш: Продужује технику Swordfish на четири реда или колоне.",
      ],
      history: {
        Inventor: "Хауард Гарнс",
        "Year Invented": "1979",
        "Original Name": "Бројно место",
        Milestone: "Постала глобални феномен 2000-их.",
      },
      fun_fact:
        "Највећа Судоку загонетка икада створена имала је 666 повезаних мрежа и играчима је било потребно месецима да је реше!",
      content: {
        tutorials: [
          {
            type: "text",
            content:
              "Почните са најлакшим бројевима, обично онима који се најчешће појављују у мрежи. Користите процес елиминације да бисте закључили где бројеvi иду. У Килер Судоку користите збир индикација кавеза да сужавате могућности. Самурај Судоку захтева да свака мрежа буде третирана као део целе загонетке.",
          },
          {
            type: "video",
            title: "Технике решавања Судоку за почетнике",
            url: "https://www.youtube.com/embed/0-lMea8hF9s",
          },
          {
            type: "video",
            title: "Мајсторско решавање Килер Судоку",
            url: "https://www.youtube.com/embed/G4rRUtPx7Yg",
          },
          {
            type: "link",
            title: "Онлајн Судоку решавалац и савети",
            url: "https://www.sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/",
          },
          {
            type: "link",
            title: "Напредне Судоку технике",
            url: "https://www.sudokuwiki.org/sudoku.htm",
          },
        ],
        tips: [
          "Фокусирајте се на редове, колоне или кутије које имају највише попуњених бројева.",
          "Користите оловне ознаке да бисте пратили могуће бројеве за сваку ћелију.",
          "Тражите скривене јединице, где број може да стане само на једно место у реду, колони или кутији.",
          "У Килер Судоку, дајте приоритет решавању кавеза са најмањим или највећим збиром.",
          "Самурај Судоку захтева решавање преклапајућих мрежа систематски, третирајући их као повезане загонетке.",
          "За Хипер Судоку, рано идентификујте преклапајуће области и осигуравајте да се придржавају правила Судоку.",
        ],
        related_facts: [
          "Модерну Судоку загонетку је популаризовао јапански издавач Николи 1986. године.",
          "Назив 'Судоку' је скраћеница од јапанске фразе која значи 'један број.'",
          "Судоку загонетке нису математички проблеми; оне захтевају логичко размишљање и препознавање образаца.",
          "Највећа Судоку загонетка, која се састојала од 667 повезаних мрежа, створена је 2010. године.",
        ],
        resources: {
          apps: [
            {
              name: "Sudoku.com",
              url: "https://www.sudoku.com/",
              description:
                "Играјте Судоку онлајн са различитим нивоима тежине и разним изазовима.",
            },
            {
              name: "Килер Судоку од Судоку",
              url: "https://sudoku.com/killer/",
              description:
                "Апликација посвећена решавању Килер Судоку загонетки.",
            },
          ],
          communities: [
            {
              name: "Реддит Судоку",
              url: "https://www.reddit.com/r/Sudoku/",
              description:
                "Дискусујте стратегије за Судоку, делите загонетке и добијте савете од глобалне заједнице.",
            },
            {
              name: "Форуми за Судоку решавање",
              url: "http://forum.enjoysudoku.com/",
              description:
                "Проучите напредне технике решавања уз друге ентузијасте.",
            },
          ],
        },
      },
    },
    {
      name: "Кросворд Пазл",
      main_image:
        "https://images.pexels.com/photos/6939467/pexels-photo-6939467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Речни загонетка у којој попуњавате празнине на основу датих траговима. Варијације укључују криптичне кросвордове, тематске загонетке и кросбројне загонетке, свака од њих нуди јединствене изазове за љубитеље речи.",
      variations: [
        {
          name: "Криптични Кросворд",
          description:
            "Трагови укључују игру са речима, анаграме и двојна значења која захтевају латерално размишљање.",
          difficulty: "Напредно",
          popularity: 4.5,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/British_crossword.svg/1200px-British_crossword.svg.png",
          video:
            "https://www.youtube.com/watch?v=c9ZtJMAVqqY&ab_channel=DoctorAzmain",
        },
        {
          name: "Тематски Кросворд",
          description:
            "Сви трагови или одговори се односе на централну тему, што га чини идеалним за обожаваоце специфичних тема.",
          difficulty: "Средње",
          popularity: 4.3,
          image:
            "https://alexbajcz.wordpress.com/wp-content/uploads/2018/04/puzzle.png?w=676",
          video:
            "https://www.puzzlesociety.com/the-solutionist/what-are-crossword-themes",
        },
        {
          name: "Кросбројна Загонетка",
          description:
            "Коришћење бројева уместо речи у решавању, ствара математички обрт.",
          difficulty: "Средње",
          popularity: 3.8,
          image:
            "https://www.rfcafe.com/references/popular-electronics/images7/crossnumber-puzzle-popular-electronics-august-1958-1.jpg",
          video:
            "https://www.youtube.com/watch?v=9MbYtaA76rk&pp=ygUOI3B1enpsZV9jbGFzczI%3D",
        },
        {
          name: "Мини Кросворд",
          description:
            "Мања решавачка мрежа за брзо и лака решавања, обично са једноставнијим траговима.",
          difficulty: "Почетник",
          popularity: 4.7,
          image:
            "https://images.squarespace-cdn.com/content/v1/52711462e4b0932c24aa05ae/1562237345181-1JDQ1ZEA8N14MZPNFGZL/MiniCryptics1.png",
          video: "https://www.youtube.com/watch?v=wW4-zhPzDPY",
        },
        {
          name: "Дијаграмски Кросворд",
          description:
            "Играчима је потребно да открију изглед мреже док решавају, што додаје додатни ниво изазова.",
          difficulty: "Стручњак",
          popularity: 3.9,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/CrosswordUSA.svg/640px-CrosswordUSA.svg.png",
          video: "https://www.puzzazz.com/how-to/diagramless-crosswords",
        },
      ],
      main_video: "https://www.youtube.com/embed/edgpOYJKxfw",
      historical_fact:
        "Први савремени кросворд је створио новинар Артур Вин и објављен је у Њујорк Ворлду 21. децембра 1913. године.",
      advanced_strategies: [
        "Препознавање Шема: Користите познате слова да изведете речи и попуните пресекне просторе.",
        "Тематски Трагови: Препознајте свеобухватне теме у загонетки како бисте усмерили претпоставке.",
        "Корени Речи: Размотрите уобичајене префиксе, суфиксе и корене.",
        "Решавање уназад: Радите уназад од потврђених одговора да бисте извели друге.",
      ],
      tips: [
        "Започните са кратким или често пресеченим речима како бисте започели решавање.",
        "За криптичне трагове, размишљајте латерално; често укључују игре са речима или анаграме.",
        "Користите речник или тезаурус како бисте проширили свој вокабулар током решавања.",
        "У тематским загонеткама, усмерите се на трагове који се повезују са централном темом.",
        "Кросбројне загонетке користе основну аритметику и бројне секвенце.",
      ],
      fun_fact:
        "Њујорк Тајмс кросворд се сматра 'златним стандардом' загонетки, са понеделком као најлакшим и недељом као најтежим.",
      history: {
        Inventor: "Артур Вин",
        "Year Invented": "1913",
        "Original Name": "Word-Cross",
        Milestone: "Постао популаран дневни додатак у новинама широм света.",
      },
      content: {
        tutorials: [
          {
            type: "text",
            content:
              "Започните са најкраћим речима и попуните празнине на основу трагова. Користите слова која се пресекују да сузите могућности. Криптични кросвордови захтевају тумачење трагова са двојним значењима, као што су анаграми или игре са речима.",
          },
          {
            type: "video",
            title: "Стратегије за Решевање Кросворда",
            url: "https://www.youtube.com/embed/dF2HkE6NxUo",
          },
          {
            type: "link",
            title: "Како Савладати Криптичне Кросвордове",
            url: "https://www.theguardian.com/lifeandstyle/series/learn-how-to-solve-cryptic-crosswords",
          },
          {
            type: "link",
            title: "Печатељни Кросвордови за Све Нивое",
            url: "https://www.crosswordpuzzles.com/",
          },
        ],
        tips: [
          "Погледајте трагове који су у множини и видите да ли се уклапају у мрежу.",
          "Попуните најлакше трагове прво и градите на њима.",
          "Размотрите уобичајене префиксе или суфиксе при погодбама за речи.",
          "У криптичним кросвордовима, потражите анаграме, скривене речи или игре са речима у траговима.",
          "Користите тематске загонетке као забаван начин да проширите свој вокабулар о специфичним темама.",
        ],
        related_facts: [
          "Кросвордови су први пут објављени у Њујорк новинама 1913. године и одмах постали хит.",
          "Највећа кросворд загонетка икада направљена имала је преко 91.000 квадратних метара!",
          "Кросвордови су научно доказани као средство за одржавање когнитивног здравља и одлагање појаве деменције.",
        ],
        resources: {
          apps: [
            {
              name: "NYT Кросворд Апликација",
              url: "https://www.nytimes.com/crosswords",
              description:
                "Решавајте дневне кросвордове са нивоима тежине од лаког до стручног.",
            },
            {
              name: "Кросворд Решевац од AppyNation",
              url: "https://apps.apple.com/crossword-solver",
              description:
                "Апликација за решавање и прављење кросвордова за ентузијасте.",
            },
          ],
          communities: [
            {
              name: "Реддит Кросворд",
              url: "https://www.reddit.com/r/crossword/",
              description:
                "Придружите се дискусијама, делите загонетке и нађите помоћ са тешким траговима.",
            },
            {
              name: "Форум за Кросворд Пазле",
              url: "https://www.crosswordsolver.org/forum/",
              description:
                "Разговарајте о техникама решавања, делите прилагођене мреже и истражите напредне савете.",
            },
          ],
        },
      },
    },
    {
      name: "Слагалица",
      main_image:
        "https://images.pexels.com/photos/7417514/pexels-photo-7417514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Слагалица у којој састављате међусобно уклапајуће делове како бисте формирали потпуну слику. Варијације укључују 3D слагалице, двостране слагалице и градијентне слагалице, које свака нуде јединствене изазове и искуства.",
      variations: [
        {
          name: "3D Слагалица",
          description:
            "Делови формирају тродимензионалне структуре попут познатих знаменитости или скулптура.",
          difficulty: "Средњи",
          popularity: 4.7,
          image:
            "https://jokomisiada.pl/eng_pl_30-piece-3D-puzzle-London-Big-Ben-ZA3802-16991_7.jpg",
          video: "https://www.youtube.com/watch?v=0WYmoX6RKko",
        },
        {
          name: "Двострана Слагалица",
          description:
            "Поседује две различите слагалице на свакој страни делова, удвостручујући изазов.",
          difficulty: "Напредно",
          popularity: 4.3,
          image:
            "https://i5.walmartimages.com/seo/Keith-Haring-2-Sided-500-Piece-Puzzle-Other_a4eadfd7-3969-40a9-a04d-cdaf3ba969e3.1b2732cbe5ce0530596d731af0fd6d00.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
          video:
            "https://www.youtube.com/watch?v=xwzuimWUh6s&ab_channel=KarenPuzzles",
        },
        {
          name: "Градијентна Слагалица",
          description:
            "Слагалица са суptилним градијентима боја, која захтева велику пажњу на нијансе.",
          difficulty: "Стручњак",
          popularity: 4.0,
          image:
            "https://puzzlemania-154aa.kxcdn.com/products/2024/puzzle-clementoni-2000-pieces-gradient-puzzle-2000.webp",
          video: "https://www.youtube.com/watch?app=desktop&v=Zay0ndBMVGU&t=0s",
        },
        {
          name: "Тајна Слагалица",
          description: "Решите слагалицу без да знате коначну слику унапред.",
          difficulty: "Средњи",
          popularity: 4.2,
          image:
            "https://www.holdson.com/images/thumbs/0013738_holdson-puzzle-wasgij-retro-mystery-4-500xl-pc-live-entertainment_625.jpeg",
          video:
            "https://www.youtube.com/watch?v=XRHglREeX20&ab_channel=PuzzleWithEmilia",
        },
        {
          name: "Прилагођена Фото Слагалица",
          description:
            "Направите слагалицу користећи своју омиљену фотографију, додајући лични печат.",
          difficulty: "Различито",
          popularity: 4.8,
          image:
            "https://assets.cdn-shop.com/picanova2-com/assets/img/products/photo-gifts/puzzle/custom-puzzle-complete-view-2ad8c7cb92.webp",
        },
      ],
      main_video: "https://www.youtube.com/embed/oRlCNXdcMc0",
      historical_fact:
        "Слагалице су изумљене око 1760. године од стране Џона Спилсберија, лондонског картографа, који их је користио за подучавање географије.",
      advanced_strategies: [
        "Сортирање ивица: Прво саставите делове који чине ивицу како бисте успоставили оквир слагалице.",
        "Сортирање по бојама: Групишите делове по бојама или узорцима ради бржег састављања.",
        "Препознавање узорака: Фокусирајте се на поновљене облике или дизајне унутар слагалице.",
        "Изградња сегмената: Радите на мањим деловима, а затим их спојите.",
      ],
      fun_fact:
        "Највећа слагалица икада направљена има преко 551.000 делова и дуга је 48 метара!",
      history: {
        Inventor: "Џон Спилсбери",
        "Year Invented": "1767",
        "Original Name": "Исечена карта",
        Milestone: "Постала популарна као забава у 20. веку.",
      },
      content: {
        tutorials: [
          {
            type: "text",
            content:
              "Сортирајте делове по ивици, боји или узорку. Прво саставите ивицу како бисте дефинисали структуру слагалице. За 3D слагалице, израдите базу пре додавања вертикалних слојева.",
          },
          {
            type: "video",
            title: "Савети за слагање слагалица за почетнике",
            url: "https://www.youtube.com/embed/SV12puKJCQw",
          },
          {
            type: "link",
            title: "Напредне стратегије за решавање слагалица",
            url: "https://www.jigsawjunkies.com/advanced-tips/",
          },
        ],
        tips: [
          "Сортирајте делове у ивичне, угловне и средишње делове ради боље организације.",
          "Фокусирајте се на јединствене узорке или одређене делове слике како бисте напредовали брже.",
          "Користите подлошке, плоче или подлоге за сортирање и лакше померање делова.",
          "Радите под добрим осветљењем како бисте разликовали суптилне разлике у бојама.",
          "За велике слагалице, саставите делове одвојено, а затим их повежите.",
        ],
        related_facts: [
          "Слагалице су настале у 18. веку када су карте сечене на делове у образовне сврхе.",
          "Термин 'слагалица' потиче од тестере која је коришћена за сечење раних слагалица.",
          "Решавање слагалица побољшава когнитивне вештине и познато је да смањује стрес.",
        ],
        resources: {
          online_stores: [
            {
              name: "Пазл Вarehouse",
              url: "https://www.puzzlewarehouse.com/",
              description:
                "Широк избор слагалица за све нивое вештина и интересовања.",
            },
            {
              name: "Равенсбургер Пазлс",
              url: "https://www.ravensburger.com/",
              description:
                "Висококвалитетне слагалице са лепим дизајном, укључујући 3D слагалице.",
            },
          ],
          communities: [
            {
              name: "Реддит заједница слагалица",
              url: "https://www.reddit.com/r/Jigsawpuzzles/",
              description:
                "Разговарајте о слагалицама, делите савете и показујте завршене радове.",
            },
            {
              name: "Пазл Хоби",
              url: "https://en.tripadvisor.com.hk/ShowTopic-g1-i49577-k14218347-o10-Jigsaw_puzzles-The_Layover_Lounge.html",
              description: "Блог и форум посвећен ентузијастима слагалица.",
            },
          ],
        },
      },
    },
    {
      name: "Торањ Ханоја",
      main_image:
        "https://media.hackerearth.com/blog/wp-content/uploads/2016/12/Cover_v2.png",
      description:
        "Математичка слагалица у којој померате стек дискова са једне шипке на другу, пратећи одређена правила. Циљ је пренос свих дискова на циљну шипку у минималном броју потеза. Варијације укључују подешавања са више шипки, обрнута правила и изазове са временским ограничењем.",
      variations: [
        {
          name: "Класични Торањ Ханоја",
          description:
            "Стандардна верзија са 3 шипке са повећањем броја дискова.",
          difficulty: "Почетник до Средњи",
          popularity: 4.8,
          image:
            "https://m.media-amazon.com/images/I/71YBCoqpvLL._AC_UF1000,1000_QL80_.jpg",
          video:
            "https://www.youtube.com/watch?v=LgxihOe9ObI&ab_channel=LockPickingCuber",
        },
        {
          name: "Торањ са више шипки",
          description:
            "Додаје додатне шипке, повећавајући сложеност и стратегију.",
          difficulty: "Напредно",
          popularity: 4.5,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSto8sfJglJzEOdXhmgw_SOO2bhr8Z-y7mDNL-AMTO0XDTYNm1UktX-BlYTvWpV9krquP4&usqp=CAU",
          video:
            "https://www.tandfonline.com/doi/pdf/10.4169/college.math.j.44.2.110",
        },
        {
          name: "Торањ са обрнутим правилима",
          description:
            "Окрените процес тако што ћете почети од коначне конфигурације и планирати уназад.",
          difficulty: "Средњи",
          popularity: 4.2,
          image:
            "https://brownliving.in/cdn/shop/products/wooden-9-rings-tower-of-hanoi-puzzle-game-handmade-036-01947-1090-learning-educational-toys-brown-living-272053.jpg?v=1682969919",
        },
        {
          name: "Торањ са временским ограничењем",
          description:
            "Решите слагалицу у задааном временском ограничењу, додајући хитност.",
          difficulty: "Различито",
          popularity: 4.3,
          image:
            "https://cruxpuzzles.co.uk/cdn/shop/files/CCH-Hanoi-Tower-9R-3.jpg?v=1708610760&width=2048",
        },
      ],
      main_video: "https://www.youtube.com/embed/_bWLwz_PquI",
      historical_fact:
        "Слагалицу Торањ Ханоја је изумео француски математичар Едвард Лукас 1883. године и заснована је на древној легенди о монасима који померају златне дискове.",
      advanced_strategies: [
        "Рекурзивна декомпозиција: Решите мање под-проблеме премештањем n-1 дискова.",
        "Бинарна репрезентација: Мапирајте решење на бинарне бројеве за ефикасно планирање.",
        "Итеративно решење: Користите алгоритам да систематски померате дискове без рекурзије.",
        "Препознавање узорака: Идентификујте понављајуће секвенце померања у зависности од величине дискова.",
      ],
      fun_fact:
        "Слагалица Торањ Ханоја је изумљена 1883. године од стране француског математичара Едварда Лукаса и била је инспирисана легендом о храму са великом верзијом слагалице.",
      history: {
        Inventor: "Едвард Лукас",
        "Year Invented": "1883",
        "Original Name": "Торањ Брахма",
        Milestone:
          "Постала популарна математичка слагалица и симбол рекурзивних алгоритама.",
      },
      content: {
        tutorials: [
          {
            type: "text",
            content:
              "Померите дискове један по један, осигуравајући да никада већи диск не буде стављен на мањи. Стратегијски користите помоћну шипку да привремено држите дискове. За варијације са више шипки, пажљиво планирајте потезе како бисте оптимизовали употребу додатних шипки.",
          },
          {
            type: "video",
            title: "Како решити Торањ Ханоја",
            url: "https://www.youtube.com/embed/2SUvWfNJSsM",
          },
          {
            type: "link",
            title: "Интерактивни решавач Торања Ханоја",
            url: "https://www.mathsisfun.com/games/towerofhanoi.html",
          },
        ],
        tips: [
          "Почните тако што ћете померити најмањи диск на циљну шипку и изградити решење корак по корак.",
          "Минимални број потеза који је потребан је 2^n - 1, где је n број дискова.",
          "Разбијте проблем на под-проблеме: решите за n-1 дискова, затим померите највећи диск и на крају решите за преостале дискове.",
          "У варијацијама са више шипки, истражите алгоритме као што је Фрејм-Стјуарт алгоритам за оптимизоване потезе.",
          "Практикујте визуализацију потеза унапред како бисте развили јасну стратегију.",
        ],
        related_facts: [
          "Слагалица се често користи за учење рекурзије у рачунарским наукама.",
          "Ако би слагалица Торањ Ханоја са 64 диска била решавана по један потез у секунди, требало би 585 милијарди година да се заврши!",
        ],
        resources: {
          online_simulators: [
            {
              name: "Интерактивни решавач Торања Ханоја",
              url: "https://www.cut-the-knot.org/recurrence/hanoi.shtml",
              description:
                "Симулирајте и решите слагалицу Торањ Ханоја интерактивно.",
            },
          ],
          related_games: [
            {
              name: "Ханој Редукс",
              url: "https://www.igdb.com/games/tower-of-hanoi-puzzle/similar",
              description:
                "Модернији приступ класичној слагалици Торањ Ханоја са додатним функцијама.",
            },
          ],
        },
      },
    },
    {
      name: "15 Пазл",
      main_image:
        "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Пазл са клизањем који се састоји од 4x4 решетке са 15 нумерисаних плочица и једним празним местом. Циљ је да се плочице преместе у бројчаном редоследу померањем. Варијације укључују 3x3, 5x5, па чак и веће решетке за изазовније слагалице.",
      variations: [
        {
          name: "Класични 15 Пазл",
          description: "Стандардна 4x4 решетка са 15 нумерисаних плочица.",
          difficulty: "Средњи",
          popularity: 4.7,
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/10/b4/53/10b45351-990e-a1b4-7944-b201fb486368/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
          video:
            "https://www.google.com/search?q=how+to+solve+15+puzzle&rlz=1C1SQJL_enRS1047RS1047&oq=how+to+solve+15+puzzle&gs_lcrp=EgZjaHJvbWUqCwgAEAAYDRgTGIAEMgsIABAAGA0YExiABDILCAEQABgNGBMYgAQyCggCEAAYExgWGB4yCggDEAAYExgWGB4yCggEEAAYExgWGB4yCggFEAAYExgWGB4yCggGEAAYExgWGB4yCggHEAAYExgWGB4yCggIEAAYExgWGB4yCggJEAAYgAQYogTSAQg0NDI5ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:b298a005,vid:6uBl7WDVIic,st:0",
        },
        {
          name: "3x3 Пазл",
          description:
            "Мала варијанта 3x3 са 8 плочица и једним празним местом за брже изазове.",
          difficulty: "Почетник",
          popularity: 4.5,
          image:
            "https://www.galliardgames.com/cdn/shop/products/3193774192006.GalliardGamesSlidePuzzle-6_1024x1024@2x.jpg?v=1648792434",
          video: "https://www.youtube.com/watch?v=kF5fT7Um5bE",
        },
        {
          name: "5x5 Пазл",
          description:
            "Већа варијанта 5x5 са 24 плочице, која нуди већу сложеност и стратегијску дубину.",
          difficulty: "Напредно",
          popularity: 4.8,
          image: "https://m.media-amazon.com/images/I/91pXaae2QvL.jpg",
          video:
            "https://www.youtube.com/watch?v=vKxenJMHurM&ab_channel=Quakelord1991",
        },
        {
          name: "Хексагонални Пазл",
          description:
            "Варијанта 15 Пазла са хексагоналним плочицама уместо квадратних.",
          difficulty: "Експерт",
          popularity: 4.2,
          image:
            "https://m.media-amazon.com/images/I/713pvxAE4xL._AC_UF894,1000_QL80_.jpg",
          video: "https://devpost.com/software/the-hexagonal-puzzle",
        },
        {
          name: "Пазл са не-правоугаоним решеткама",
          description:
            "Пазл се заснива на неправилним решеткама, нудећи јединствен изазов у уређивању плочица.",
          difficulty: "Експерт",
          popularity: 4.3,
          image: "https://m.media-amazon.com/images/I/61oiez2MMoL.jpg",
        },
      ],
      main_video: "https://www.youtube.com/embed/NWt0wd8hPUE",
      historical_fact:
        "15 Пазл је изумео Нојес Чапман 1874. године и постао је глобални феномен крајем 19. века.",
      advanced_strategies: [
        "Решавање ред по ред: Почните са решавањем горњих редова и премештањем према доље.",
        "Стратегије за углове: Позиционирајте угловне плочице рано како бисте смањили сложеност.",
        "Анализа образаца: Препознајте кључне образце како бисте минимизирали непотребне потезе.",
        "Корекција паритета: Планирајте потезе како бисте решили ситуације са недостижним стањима.",
      ],
      fun_fact:
        "15 Пазл је оригинално продавао као играчку крајем 19. века и био је популаран у Сједињеним Државама и Европи. Такође је познат по томе што је изазовна слагалица која је помогла у инспирисању алгоритама у рачунарским наукама.",
      history: {
        Inventor: "Нојес Чапман",
        "Year Invented": "1874",
        "Original Name": "Гем Пазл",
        Milestone:
          "Постала популарна слагалица након што је представљена у Њујорк Тајмсу у 20. веку.",
      },
      content: {
        tutorials: [
          {
            type: "text",
            content:
              "Почните решавањем првог реда и прве колоне, затим радите на преосталим деловима. Фокусирајте се на мале области као што су углови и ивице како бисте поједноставили процес. За веће решетке као што је 5x5 пазл, раздвајање у мање под-решетке може помоћи.",
          },
          {
            type: "video",
            title: "Технике решавања 15 Пазла",
            url: "https://www.youtube.com/embed/aZvu2aTcn5s",
          },
          {
            type: "link",
            title: "Интерактивни решавач 15 Пазла",
            url: "https://www.puzzle-solver.com/15-puzzle/",
          },
        ],
        tips: [
          "Радите на позиционирању плочица у малим секцијама, уместо да померате сваку плочицу појединачно.",
          "Користите празно место стратегијски да померате плочице и направите простора за померање.",
          "Увек се фокусирајте на први ред и колону пре него што решите средњи део.",
          "У већим варијацијама, дајте приоритет решавању углова и ивица пре него што се позабавите унутрашњим плочицама.",
          "Запамтите уобичајене обрасце (нпр. конфигурације углова и ивица) како бисте смањили покушаје и грешке приликом решавања.",
        ],
        related_facts: [
          "Пазл је математички проучаван, и познато је да нису све насумице конфигурације плочица решиве.",
          "15 Пазл је постао популаран кроз промотивну игру из 1878. године у којој су играчи покушавали да реше пазл у трци против времена.",
        ],
        resources: {
          online_simulators: [
            {
              name: "Интерактивни решавач 15 Пазла",
              url: "https://alternativeto.net/software/fifteen-puzzle-x/",
              description:
                "Решите 15 Пазл интерактивно са прилагодљивом величином решетке.",
            },
          ],
          related_games: [
            {
              name: "Сладећи Пазл",
              url: "https://www.puzzle-games.com/sliding-puzzle/",
              description:
                "Неколико пазлова који су слични класичном 15 Пазлу.",
            },
            {
              name: "Супер Сладећи Пазл",
              url: "https://play.google.com/store/apps/details?id=com.supradendev.a15puzzle",
              description: "Преузмите неке од ових игара са Apple Store-а.",
            },
          ],
        },
      },
    },
    {
      name: "Логички матрични пазли",
      main_image:
        "https://images.pexels.com/photos/7296627/pexels-photo-7296627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Логички матрични пазли изазивају вас да користите наговештаје како бисте попунили матрицу и изведели односе између различитих категорија. Варисације укључују тематске матрице, вишеслојне логичке изазове и пазле са различитим нивоима сложености.",
      variations: [
        {
          name: "Класични логички матрични пазл",
          description:
            "Стандардна верзија где попуњавате матрицу користећи логичко закључивање из сета наговештаја.",
          difficulty: "Средњи",
          popularity: 4.6,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePmfrjnletGbq5ZY0B3ykb6dgWDeDCmLibg&s",
          video:
            "https://www.google.com/search?q=how+to+solve+logic+grid+puzzles&rlz=1C1SQJL_enRS1047RS1047&oq=how+to+solve+glogic+grid+puz&gs_lcrp=EgZjaHJvbWUqCwgBEAAYDRgTGIAEMgYIABBFGDkyCwgBEAAYDRgTGIAEMgoIAhAAGBMYFhgeMgcIAxAAGO8FMgoIBBAAGIAEGKIEMgcIBRAAGO8FMgcIBhAAGO8FMgcIBxAAGO8F0gEINDg4MGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:9db97b2c,vid:CNxfZwvaQ-k,st:0",
        },
        {
          name: "Тематски логички матрични пазл",
          description:
            "Варијација у којој матрица укључује специфичну тему (нпр. животиње, професије, земље) која пружа додатне наговештаје.",
          difficulty: "Напредни",
          popularity: 4.7,
          image:
            "https://i.etsystatic.com/17614238/r/il/32ec82/4085984585/il_570xN.4085984585_9oez.jpg",
        },
        {
          name: "Вишеслојна логичка загонетка",
          description:
            "Вишеструке повезане логичке матрице које захтевају решавање мањих загонетки и комбиновати њихове резултате.",
          difficulty: "Експерт",
          popularity: 4.8,
          image: "https://logic.puzzlebaron.com/images/example.gif",
        },
        {
          name: "Нумерички логички матрични пазл",
          description:
            "Варијација која укључује бројеве уместо речи, захтевајући математичко разматрање за извођење односа.",
          difficulty: "Напредни",
          popularity: 4.5,
          image:
            "https://images.squarespace-cdn.com/content/v1/52711462e4b0932c24aa05ae/1591610275834-4KJC93MLPRVGB1D26E8X/GCShikaku001grid.png?format=1500w",
        },
      ],
      main_video: "https://www.youtube.com/embed/cUL9aLBeAuc",
      historical_fact:
        "Логички матрични пазли су постали популарни током 20. века и често се повезују са радовима Ремонда Смолијана, логичара и аутора загонетки.",
      advanced_strategies: [
        "Метода елиминације: Систематски искључите немогуће опције у матрици.",
        "Дедуктивни ланци: Користите серију логичких дедукција да попуните празнине.",
        "Интеграција наговештаја: Прекрижите више наговештаја ради доследности.",
        "Технике груписања: Организујте сличне наговештаје за брже решавање.",
      ],
      fun_fact:
        "Логички матрични пазли су настали 1980-их као начин да се комбинује дедуктивно разматрање са вештинама решавања загонетки. Често се називају 'Ајнштајнове загонетке' због своје изазовне природе.",
      history: {
        Inventor: "Непознато",
        "Year Invented": "Крај 20. века",
        "Original Name": "Логичке загонетке",
        Milestone: "Постале популарне у новинама и књигама загонетки 2000-их.",
      },
      content: {
        tutorials: [
          {
            type: "text",
            content:
              "Пажљиво прочитајте све наговештаје и започните попуњавање матрице са дефинитивним информацијама. Користите процес елиминације да попуните остатак. У вишеслојним загонеткама решите мање матрице прве и комбинујте резултате за коначна решења.",
          },
          {
            type: "video",
            title: "Како решити логичке матричне загонетке",
            url: "https://www.youtube.com/embed/UDnyduf4YTM",
          },
          {
            type: "link",
            title: "Интерактивни логички матрични решавач загонетки",
            url: "https://www.logicgridpuzzles.com/solver/",
          },
        ],
        tips: [
          "Користите матрицу да организујете могуће и немогуће односе. Ознака немогућих веза сужава опције.",
          "Тражите наговештаје који утврђују директне односе између ставки. Ови наговештаји су често лакши за обраду.",
          "Дедукција је кључ—започните са најсигурнијим информацијама и радите путем загонетке.",
          "У тематским матрицама, примените своје знање о теми да брже решите наговештаје. На пример, познавање имена популарних животиња може вам помоћи са тематским пазлом.",
          "За вишеслојне загонетке решите сваку појединачну матрицу прво. Када имате одговоре за све нивое, логички их комбинујте за коначни резултат.",
        ],
        related_facts: [
          "Тврди се да је Алберт Ајнштајн створио једну од првих логичких матричних загонетки почетком 20. века, коју је само 2% становништва могло да реши.",
          "Многе савремене логичке матричне загонетке су сада доступне у апликацијама, што их чини лакшим за приступ и решавање у покрету.",
        ],
        resources: {
          online_simulators: [
            {
              name: "Логички матрични пазл на мрежи",
              url: "https://logic.puzzlebaron.com/",
              description:
                "Веб сајт који нуди интерактивне логичке матричне загонетке са различитим нивоима сложености.",
            },
          ],
          related_games: [
            {
              name: "Сличне загонетке",
              url: "https://steampeek.hu/?appid=3192940",
              description: "Форум на Редиту који разговара о сличним играма.",
            },
            {
              name: "Brainzilla",
              url: "https://www.brainzilla.com/logic/",
              description: "Веб сајт који се бави логичким загонеткама.",
            },
          ],
        },
      },
    },
];
