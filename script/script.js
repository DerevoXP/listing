let imgStock = [
    'img/Part1.jpg',
    'img/Part2.jpg',
    'img/Part3.jpg',
    'img/Part4.jpg',
    'img/Part5.jpg',
    'img/Part6.jpg',
    'img/Part7.jpg',
    'img/Part8.jpg',
    'img/Part9.jpg',
    'img/Part10.jpg',
];

let doughterStock = [

    {
        "h3":    `ЧАСТЬ ПЕРВАЯ . ИГРУШКИ`,
        "p": `Комната была переполнена игрушками, но детишки никогда не играли в игрушки. И очень любили играть старыми, а которые были в ящике — это были новые, а дети любили играть в старые. Но вот пришла Мама и сказала: «Какой беспорядок!». А мы в ответ: «Мы играли…», а Мама отвечает: «В новые?» — Нет, в старые. — А почему они вам нравятся? Ах, а я думала, в новые. — Не-а, — опять повторили дети. А Мама сказала: «Спать!». — Почему спать? — а Мама отвечает: «Уже девять часов!». И дети начали спать. Очень хороший сон им снился, а снилось: первому Сыну про Божию Коровку, а второму снилось про Собаку, а самому последнему снилась Ноченька.`,
    },
    {
        "h3":   `ЧАСТЬ ВТОРАЯ . ВОЛШЕБНАЯ КОРОБКА`,
        "p":    `Мы спали. И проснулись. — А-а-а-а-а! — Что? — перепуганная Мама сказала. Третий Сын отвечает: мне показалось, что ящик живой. — АААА!! — кричит второй Сын. Мама отвечает: «Что опять?», а второй Сын отвечает: мне показалось, ящик живой. — ААА!!! — Мама не выдержала и сказала: «Где он?!» И проснулась. И сказала про себя: «Это сон…»`,
    },
    {
        "h3":   `ЧАСТЬ ТРЕТЬЯ . У НАС КОТЁНОК`,
        "p":    `Мама проснулась из-за говорящей коробки, а оказалось, что это сон. И задындякал звонок, а Мама отвечает звонку: «Не разбуди моих сынков!» — Простите! — сказал Звонок. А я в ответ: «Что вы звените?» — Вам котёнка привезли! А Мама так закричала, что сынков разбудила, а сыночки Маме отвечают: «Почему так орут?» А Мама отвечает: «У нас котёнок!»`,
    },
    {
        "h3":   `ЧАСТЬ ЧЕТВЁРТАЯ . КОТЁНОК УХОДИТ`,
        "p":    `Мы поели и воскликнули: «Мы будем с котенком играть!», но котенка не было. Мы перепугались и позвали маму. — Мама, котёнка нету! — А где он? Первый брат сказал: «Может, он в прятки играет?» Мама сказала: «Может быть.» Стали его искать, но нигде не нашли. Второй брат отвечает: «Пойдём его на кухне искать?» — Да-да, пойдём! — Его тут тоже нет! Мы обыскали весь дом. — Да вон он, на потолке!`,
    },
    {
        "h3":   `ЧАСТЬ ПЯТАЯ . ДЛИННАЯ ДОРОГА`,
        "p":    `Мы пошли гулять по большой дороге, потому что по-маленькому (пути) были собаки и туман, а по большой (дороге) — фонарики. Мы шли и шли, пыхтели, и пришли, а позади нас бежала большая собака. Мама сказала: «Не бойтесь и не бегите, а стойте на месте.» А мы не удержались и побежали. Мама сказала: «Стой!», и мы остановились, а собака понюхала и убежала. А мы пошли домой.`,
    },
    {
        "h3":   `ЧАСТЬ ШЕСТАЯ . БОЛЬШОЙ ЦВЕТОК`,
        "p":    `Мама посадила зёрнышко в горшочек, и мы стали есть, а потом спать. День настал, и мы пошли есть, а когда поели, пошли гулять и видим, зёрнышко подросло маленькой травкой, а на травке бутончик. Мы позвали Маму, а Мама удивилась, а потом пошли гулянки. Поели и спать легли, а цветок рос и вырос огромный. Мы проснулись, поели и гулять пошли, видим, он большой-большой. Пошли Маму звать, Мама пришла и обрадовалась, и мы побежали к нему.`,
    },
    {
        "h3":   `ЧАСТЬ СЕДЬМАЯ . МЯГКАЯ ИГРУШКА`,
        "p":    `У первого брата был день рожденья, а Мама припрятала мягкую игрушку Деда Мороза, потому что Сын его просил на День Рождения, и его Мама купила и купила торт, а Сыну было семь, а исполнилось восемь. Он задул восемь свечей на торте и сказал желание, чтобы были все счастливые, и Мама из-под стула вынула мягкого Деда Мороза, и так закончился праздник, и все были счастливые как его заклинание.`,
    },
    {
        "h3":   `ЧАСТЬ ВОСЬМАЯ . ЛЯГУШОНОК`,
        "p":    `Когда мы ходили в Храм, мы пошли после Храма купаться в реке. Тогда было солнце и много лягушек и жаб. Мы пошли купаться, я ловил рыб, но вот увидел жабу и стал её ловить, но никак не получалось. Я прибавил шагу, я уже был готов поймать её и наконец поймал. Мы пошли домой, и я посадил её в аквариум, и у нас она стала жить у нас.`,
    },
    {
        "h3":   `ЧАСТЬ ДЕВЯТАЯ . ПЕТУШОК`,
        "p":    `Мы пошли в магазин, чтобы купить продукты, и я увидел петуха. — Ах, Мама, купи мне петуха! А Мама говорит: «А чем мы его кормить будем?» — Что-нибудь придумаем! — А сколько он стоит? — 100 рублей. — Ну, если хочешь, купи. — Мама, давай купим для него корм? — А где он будет жить? — Я ему дом из дерева сделаю. — А где ты его сделаешь? — На улице — отвечаю я.  —  Ладно, куплю. И Мама купила ему петуха, и они жили с петухом, и жили, и поживали, и добра приносил петух.`,
    },
    {
        "h3":   `ЧАСТЬ ДЕСЯТАЯ . РАДУГА`,
        "p":    `Наша книга подходит к концу, и сказка про радугу будет такая длинная, что вы не увидите картинку. И сказка начинается! </p><p> Мы проснулись, и побежали гулять, и увидели солнце с дождём. А дождь так сильно лил, с солнцем.  Когда дождь закончился, мы пошли гулять и увидели радугу с солнцем, и бабочками, и пчёлками, и стрекозами, и мы стали ловить кузнечиков и сажать в ладошку. Посмотрим — отпустим. И бабочек ловить в сачок, и посмотрим - отпустим. И так весь день смотрели — отпускали, пока радуга не исчезла и пошли домой. </p><p> И сказке конец, кто слушал — молодец!`,
    },

];

let fatherStock = [
    {
        "h3":   `ИГРЫ С ЭНТРОПИЕЙ`,
        "p":    `Комната была переполнена новыми игрушками. Мозаики и пазлы, пластмассовые крокодилы и меховые зайчики, железные дороги и деревянные кубики — они занимали все доступные в доме поверхности, а некоторые из них каким-то образом свисали даже с потолка. Строго говоря, новых игрушек было столько, что все они были уже так или иначе тронуты энтропией, а то и вообще безнадёжно устаревали в моральном плане к тому времени, когда у детей доходили руки до чего-то конкретного. Смирившись с бессмысленностью попыток изменить текущее положение вещей, дети теперь всё чаще забивались в свободный от игрушек уголок и с обречённым видом тыкались в старенький Мамин планшет, пока новый, почти не использованный Бабушкин проектор для диафильмов весело пылился в коробке на антресолях и грезил о светлом будущем.
        </p><p>Зайдёт, бывало, Мама к детям в комнату, и говорит так, тихонечко, как бы в пустоту: «Боже, какой же у вас тут свинарник!» — А мы играли! — отрываются от планшета невинные лица. — Наверное, вы играли с новым конструктором? — с надеждой уточняет Мама, хотя прекрасно понимает, что это было не так. — Нет, мы играли в твой старый планшет — отвечают не чувствующие по малолетству подвоха наивные голоса. — Это понятно, а конструктор-то новый почему разбросан, если вы в него не играли? А мозаика? А пазлы? Ну-ка быстро всё убираем и марш спать! И планшет мне сюда отдайте, — сурово завершает аудиенцию Королева-мать и грациозно удаляется с девайсом под мышкой в сторону своего Тронного Зала.
        </p><p>И всё. Спать — так спать. Потому что уже девять часов, если верить тому, что сказала Мама. А дети в планшет умеют, а время определять ещё нет, им что девять, что пол седьмого — всё одно верят на слово. Впрочем, пока сны снятся хорошие, то чего бы и жаловаться? 
        </p><p>И был вечер, и было утро, и приснилась среднему сыну собачка: черная, неестественной величины! Пришла, понюхала и пошла прочь. Старший сын, видимо, скушал с вечера что-то не то, так как ему явилась во сне Божия Коровка и обличила его во грехе чревоугодия, а так, собственно, больше с ним ничего такого сверхъестественного не происходило. А ко младшему, Ванечке, пришла сама Ноченька, и укрыла его тёплым обсидиановым одеяльцем с инкрустированными в него золотыми звёздочками. И кому какая разница, сколько эта конструкция весила — это же сказка! Тоже, знаете ли, непросто оно, в семь лет Настоящие Книжки писать без посторонней помощи.`,
    },
    {
        "h3":   `УПРАВЛЯЕМЫЕ СНОВИДЕНИЯ`,
        "p":    `Ночь, благословенное время, когда во всём доме до самого утра умолкает Детский Смех, и только падающие за гипсокартоном под лапками крыс обломки кирпичей напоминают о несовершенстве и хрупкости мироздания. — А-а-а-а-а-а! — доносится вдруг из детской после грохота особо крупного куска дореволюционной недвижимости. Всего через пол часика уже отмытый от слёз и завёрнутый в одеялко Ванечка по секрету расскажет Маме, как полка с одеждой превратилась в Глокую Куздру и хотела его, Ванечку, зохавать, а дальше он, мол, подробностей не помнит, поэтому верните его теперь, пожалуйста, обратно в кроватку. Так, мало-помалу, вокруг снова воцарится она...
        </p><p>...Ночь, бархатная темнота, искажающая шаги и скрадывающая вздохи, сознательнейшее время нашей жизни, которое серая толпа бездумно тратит на то, чтобы тупо выспаться. Время, когда можно практически бесконечно мечтать, как бы оно было здорово, если бы Важные Мысли не мешали тебе наконец-то примкнуть к этой серой тупой биомассе... а тут ещё опять... — А-а-а!!! — то полусонного Федю вдруг тоже насторожили эти вездесущие тряпки. Наскоро запихав Ненавистные Шмотки в недра ящика и ласково шипя себе под нос что-то убаюкивающее, Мама вновь в который раз пытается принять горизонтальное положение. 
        — А-а-а-а!!! – раздаётся на сей раз под самым ухом.
        </p><p>Боже, когда же у нас уже легализуют огнестрельное оружие для гражданских? Сейчас бы оно пришлось как нельзя кстати: истекающие слизью и хлещущие по стенам щупальца становится просто невозможно игнорировать. Минутное любопытство (как оно ей, Ктулхе, вот так с размаху ложноножкой об угол комода?) уступает место боевому азарту, и тёмная ночь оглашается рыком защищающей своих детёнышей медведицы под вспышки зелёных молний и хлюпающий аккомпанемент растаптываемой тапочками чужеродной плоти.
        </p><p>И только потом, когда уже ничто не будет напоминать о былой битве, мама отмоет земляничным мылом свои тонкие руки, откроет нараспашку окна, и с первым рассветным лучом на первом же розовом единороге улетит высоко-высоко, над деревьями, выше солнышка, где, блаженно откинувшись на спину своей Плотвы и пуская на подушку безмятежные слюни, спокойно обдумает всё произошедшее с ней за последние сутки. Не будем же ей мешать в этом благословенном третьем часу самой обычной Многодетной Ночи.`,
    },
    {
        "h3":   `ВЫКИНЬ ВАСЮ НА МОРОЗ!`,
        "p":    `В некотором смысле котёнок подобен сотовому телефону. От юности своея каждый человек инстинктивно умиляется этому непостижимому, сотворённому самими богами созданию и во что бы то ни стало стремится заиметь его в своё личное пользование. Он же как Тринадцатый Айфон, такой замечательный, ну просто мимими! 
        </p><p>Но котёнок растёт, подобно списку контактов в адресной книге, и однажды вы с ужасом замечаете, что ваше Личное Время больше не является Вашей Собственностью. Теперь кто-нибудь всегда будет проситься к вам на ручки и настойчиво требовать свою долю Внимания. Отныне ваши гости больше не будут вашими гостями – их волю и разум полностью поглотит это пушистое чудовище, пока вы от нечего делать будете с умным видом заниматься глупостями, лайкая со своего старенького смартфона их новые фотографии.
        </p><p>Бабушка рассказывала, что в прежние времена иным кошкам поклонялись как Богиням, а их котят в тростниковых корзинах отправляли по водам тогда ещё судоходной Баланды облагораживать быт живущих вниз по течению диких африканских народов. Как поступали с котятами в семьях попроще Бабушка, однако, предпочитала многозначительно умалчивать, стараясь незаметно сменить тему разговора на Крещение Руси, после которого человечество раскаялось в своих языческих заблуждениях и топить котят стало неприлично даже в самых отсталых субъектах федерации. Таким образом, теперь никто уже точно и не вспомнит, в каком конкретно году и в наказание за какие конкретно грехи в жизнь людей стремительным домкратом ворвалось это беспардонное тарахтение под ухом. Что мы сделали с собой, что котята перестали являться в нашей жизни важным событием? Общество, не благоговеющее перед котятами, подобно обществу, делающему вид, что ваш Важный Звонок позорно оказался в списке пропущенных исключительно по причине Слабой Вибрации. В самом деле, кому охота мурлыкать по расписанию? 
        </p><p>Жаль, что сотовый телефон, подобно обнаглевшему котяре, нельзя вот так же запросто отвезти на деревню Дедушке трепать нервы мышам сразу после того, как станет понятно, что вы безумно утомились от взаимного общения. Потому что с котом — оно в некотором смысле даже приятнее. Особенно, в тот момент, когда в доме все уже спят и вы меньше всего ожидаете, что кто-то непрошенный заберётся к вам на ручки за своей долей давно уже превратившегося из удовольствия в повинность Внимания.`,
    },
    {
        "h3":   `ЭТО ЕНОТ. А ЧЕГО ДОБИЛИСЬ ВЫ?`,
        "p":    `Говорят, у загнивающих буржуев есть такая услуга: прокат енота. После вашей добровольной подписи внизу соответствующего контракта, ранним утром в вашу буржуйскую дверь постучится специально обученный человек, вручит вам вашего собственного енота, а потом, заговорщически подмигнув, сообщит, что вернётся за ним сразу после захода солнца. 
        </p><p>Таким нехитрым образом вы станете самым настоящим пещерным человеком, впервые столкнувшимся с представителем инопланетного разума, в то время пока енот, искренне полагая, что жизнь удалась, полощет в унитазе Бабушкины занавески, ищет вкусных земляных червяков в горшке с Папиным кактусом и вообще методично разрушает ваше жилище, превращая его из фешенебельной хрущёвки в первобытную стоянку охотников-собирателей времён Верхнего Неолита. Детям нравится. Детям, говорят, вообще нравится, когда кто-то безумнее них. Они не хотят расставаться с енотом даже после захода солнца, когда специально обученный человек, стараясь не встречаться глазами с рыдающими от счастья родителями, забирает довольное животное из их исцарапанных рук. 
        </p><p>Говорят, когда-то наш Дедушка даже был знаком с одной умной собакой. Она знала команды Нельзя и Абырвалг, заслышав которые автоматически отменяла последнее действие в пространстве и сломя голову бежала к своей миске с перловой кашей. Умная собака помогала тогда ещё молодому Деду отстреливать с вертолёта Фашистских Шпионов на секретной границе где-то между Владивостоком и Финляндией, тем и жила. 
        </p><p>Наслушавшись Дедушкиных рассказов, мы отчаянно пытались завести друзей среди других млекопитающих. Пробовали договориться и с кошками, и с собаками, а как-то раз даже согрешили содержанием в доме однополой пары морских свиней, но все эти животные на поверку почему-то оказывались своенравными кусками самобытных рефлексов и если на что-то и реагировали, то исключительно на треск открываемого пакета с кормом и свист реактивного тапка над ухом.
        </p><p>Несмотря на очевидное слабоумие, они всегда учили нас только хорошему. Например, тому, что в жизни приходится убирать не только за собой. Что поклейка новых обоев — это блажь, а на сэкономленные деньги вполне можно купить своим ближним ещё чего-нибудь вкусненького. Купили? Ну вот и мур-р-р, не мешайте трапезничать. Кстати, я снова беременна. Так что нет ничего удивительного в том, что дети не хотят расставаться со своими енотами после захода солнца. Но скучным взрослым почему-то по-прежнему намного спокойней, когда занавески висят на окнах, обои на стенах, а эти милые котята сосут свою мамку далеко-далеко, роняя шерсть и песок на диваны анонимных кошатниц где-то на границе Финляндии и Фейсбука.`,
    },
    {
        "h3":   `ЖУЧКА.txt`,
        "p":    `Как правило, новый текстовый документ ещё не имеет права на то, чтобы иметь особенное название, сначала он должен доказать, что его содержимое будет иметь смысл не только для самого себя. На нашей планете живёт более полумиллиарда собак — по пол собаки на каждых восьмерых человек, но только некоторые из них имеют право на то, чтобы иметь Собственное Имя. 
        </p><p>В этом конкретном случае, размахивая в воздухе ушами и лапами, из подворотни вылетела совершенно очевидно безымянная шавка. Интересно, про то, что в пасть овчарки с размаху запросто помещается кулак взрослого мужчины - это байка, или так действительно можно остановить агрессию взрослой собаки за неимением вменяемых альтернатив? Они же и нападают-то, говорят, не по-людски, а как будто под электричеством, конвульсивно стискивая челюсти. Страшно так, по-звериному. 
        </p><p>— Хорошо, Мам, что она не кусается, да? 
        </p><p>— Мам, а можно я её тоже поглажу?
        </p><p>Ну да, действительно, хорошо, что она не кусается, — утирая ледяной пот со лба, молчаливо соглашается Мама. Устами младенца глаголет истина. 
        </p><p>—Не трогай её, где ты будешь мыть потом руки! 
        </p><p>Обязательно дать хлебушка. Только полный дебил будет кусать при новой встрече того, кто его кормит. Ты же не дебил, Жучка? Вот и славно. Кстати, не в курсе, кто на прошлой неделе мужику штаны на Советской порвал? Да знаем, знаем, что не ты. Мы видели.
        </p><p>Хорошо, что тебя всё из-за той же излишней доверчивости собьют ещё до того, как ты успеешь ощениться в той самой подворотне, где выросла сама. Это так тяжело, когда дети остаются без матери. Согласись, с таким беспечным отношением к жизни у тебя почти не было шансов оставить после себя какую бы то ни было информацию? Но тебе повезло. Светлая тебе память, Жучка.txt!`,
    },
    {
        "h3":   `ЦВЕТЫ ЖИЗНИ`,
        "p":    `О своих цветах Папа способен рассказывать часами, правда, проверить это утверждение до сих пор никто не удосужился за неимением настолько отмороженных слушателей. Бывает, ходит целый день туча тучей, то за сердце схватится, то за лейку. Видно, тяжело человеку. Потом вроде бы как даже чего-то такое поймёт, что простому смертному недоступно, на мгновение оживится, схватит горшок с какой-нибудь Мадагаскарской Редькой и об сарай его, аж брызги во все стороны. Но — видно, что отпустило. Даже как-то с лица розовее стал. Значит — определился.
        </p><p>Потому что цветы должны приносить радость, говорит Папа. Есть в этом что-то неправильное с его точки зрения, когда взрослый мужик вокруг горшка с вялым Хреном по полгода кругами бегает. Или кто там у него в том горшке в очередной раз завял.
        </p><p>Впрочем, цветы — Бог с ними, им за безропотное произрастание на подоконниках средней полосы вообще удобрения должны бесплатные выдавать за вредность. Другое дело — дети. Вроде бы, и родственники все одинаковые, и обстановка в стране которое десятилетие стабильная, а дети, поди ж ты, всё равно растут разные! Кому из знакомых скажи — засмеют. К этому на козе подъезжать надо, к тому на верблюде, третий вообще уверен, что его в семью пьющие инопланетяне подбросили. Об сарай у нас нельзя, не по-христиански оно как-то, так что хочешь не хочешь — ищи точки соприкосновения. 
        </p><p>— Папа, а ты нас всех одинаково любишь?
        </p><p>Любишь... Применимо ли это слово к кому-то вообще, кроме Мамы? Любовь без сухого остатка, без лишних условностей, когда наизнанку вывернешься, в порошок изотрёшься, до искр, до жгучей радости от осознания того, что между двумя абсолютно чуждыми генетически друг другу людьми нет совершенно никакой разницы. Рассудочная, и при этом звериная нежность, которую никогда не выставляют напоказ... А дети — что? Выросли — улетели, кто об сарай, кто к звёздам, дело хозяйское. А Мама и Папа останутся. Наблюдать. В сущности, они научились этому задолго до того, как рядом с ними, непрерывно голося, появились ещё четыре совершенно новых Наблюдателя за Вселенной. 
        </p><p>Хорошо бы, конечно, если бы жизнь этих новых Наблюдателей была более счастливой, чем у их Мамы и Папы. Да только есть опасения, что не сможет нормальный человек ещё больше счастья в себя вместить. Физически.  Лопнет нормальный человек с такой радости, одни только брызги на сарае останутся. Ну, может, ещё блаженная улыбка на какой-нибудь сливовой ветке жёваным целлофаном повиснет, и всё. Не будет больше человека. Это, конечно, нормальным людям тоже обязательно надо учитывать.`,
    },
    {
        "h3":   `ДЕД МОРОЗ, КАК ИЛЛЮЗИЯ`,
        "p":    `Новогодние письма в Великий Устюг чем-то напоминают записочки о здравии на молебне — никогда не знаешь заранее, кто именно их прочтёт: лично Дедушка Мороз, Снегурочка на ресепшене, или вообще какой-нибудь олень из упряжки. Ещё по дороге на почту Мама не раз удивилась невыносимой тяжести детского слога – письма с заказами существенно оттягивали карман и поневоле настраивали на задумчивый лад.
        </p><p>Дедушка Мороз, если ты действительно сейчас это читаешь, имей ввиду, что про пони — это был просто речевой оборот, не бери в голову. Обрати внимание на своего буржуйского кузена – его щедрость жёстко детерминирована габаритами каминного дымохода и никогда не выходит за рамки экономических приличий. Так что пони не надо, мы пошутили. Ограничимся, как в прошлый раз, коробочкой чего-нибудь сладкого или, на худой конец, полусухого.
        </p><p>Вот и как тут быть бедному старику? Дети просят одно, а курс доллара и квартирный вопрос который раз в принудительном порядке спускают Волшебные Сани с небес на землю. А ведь даже сказочному персонажу хочется, чтобы его подарки пришлись по душе тем, кто в него верит. И кто только первый придумал, что дорог не подарок, а внимание? Он цены наши, вообще, видел? С другой стороны, если кроме материальных благ вы не способны дать своим детям ничего другого, не стоит удивляться, что они растут предприимчивыми материалистами. Давным-давно свою первую зарплату Папа потратил на приобретение абсолютно неубиваемых Наручных Часов, но до сих пор он на всякий случай хранит в ящике своего стола эксклюзивный мануфактурный хронометр, изготовленный в одном экземпляре в личной мастерской старшего Ярослава. Просто удивительно, как сильна в этом умном, вроде бы, человеке страсть к глупым и бренным вещам!
        </p><p>Так что никуда ты не денешься, старик. Назвался Дедом — полезай под ёлку. Тем более, что тебе ещё долго будут благодарны даже просто за то, что в Новом году ты как всегда будешь рядом. А если ты обещаешь себя хорошо вести, то в следующий раз вместо живой лошади мы попросим маленькую красноухую черепашку. Федя уже почти придумал, где она будет жить, о чём он, кстати, очень прозрачно намекнул тебе в том письме, которое задумчивая Мама уже почти что донесла до Почтового Ящика.`,
    },
    {
        "h3":   `ПИПА СУРИНАМСКАЯ`,
        "p":    `Природа близко, да идти склизко, — посетовала Мама после очередного поворота размытой глины, по какой-то причине служащей местным жителям заместо проезжей части. Правда, ездили здесь в основном трактора да редкие Нивы, от чего колея вдоль болотца время от времени принимала совсем уже неприличные изгибы. По лужайке шлось значительно веселее. 
        </p><p>— Пить хочется. Мам, как первые люди пили такую грязную воду?
        </p><p>Руки нестерпимо пахнут ужом. Бедное животное обильно худеет во время поимки, от чего и без того терпкий запах змеиной кожи смешивается с чем-то и вовсе для нас, горожан, экзотическим. Сегодня мы больше не будем трогать ужей. А на воду в речке зря наговаривают, кстати. Лицо сполоснуть — самое то.
        </p><p>— И этот человек мне будет утверждать, что наши дети не умеют аккуратно гулять?
        </p><p>Пока потомки, по колено в иле, шуршат зарослями камыша, Папа и Мама могут полежать друг у друга на коленях, вычёсывая из волос песок и размышляя о том, почему много лет тому назад они не делали этого чаще. Как без прикосновения ты узнаешь, что стекло острое, жаба бугристая, дохлый карась мыльный, а кожа любимого человека может быть одновременно похожа и на тёплый бархат, и на холодный шелк? 
        </p><p>— Не реви, сейчас заклеим. Где ты только нашёл её в этой тине… 
        </p><p>Как ты узнаешь, что такое порез, пока не порежешься? Да, чаще всего житейский опыт впервые появляется именно тогда, когда от него уже нет никакого проку. Такой вот баг в матрице мироздания. Мы привыкли, привыкай и ты. В следующий раз будешь аккуратнее — этот опыт достался тебе не бесплатно.
        </p><p>— Мама, можно, мы возьмём её домой и посадим в аквариум? Нет, не как в тот раз. Мы будем за ней ухаживать!
        </p><p>Так работает животный рефлекс «Что такое?», преломляясь через наше человеческое сознание. Главное отловить, а нужна нам эта пипа суринамская, не нужна — потом решим. Её всё равно съедят если не ежи, так цапли, а непойманные ею комары отомстят сразу всем, не разбирая, кто прав и кто виноват в этом зелёном царстве реакций, рефлексов, пищевых цепочек и поведенческих игр, которые мы для простоты повествования иногда именуем жизнью.
        </p><p>— А потом настал вечер, и мы пошли есть, а когда поели, пошли спать?
        </p><p>— Да, точно, так всё оно и было, как же иначе. Спи уже! )`,
    },
    {
        "h3":   `ТЫ МЕНЯ ПРИРУЧИЛ, ТЫ МЕНЯ И ЭКЗЮПЕРИ`,
        "p":    `Без петуха в доме всегда было немного пустовато и рано или поздно с этим всё равно пришлось бы что-то делать. Нам нужен петух! — решила Мама и тут же перешла от слов к делу. Так Ванечка очутился на птичьем базаре перед коробкой жёлтых, пушистых, непрерывно пищащих и нестерпимо воняющих куриных личинок, а Мама старательно делала вид, что всё это вышло совершенно случайно и она здесь абсолютно ни при чём. 
        </p><p>— Хочешь подержать цыплёночка? – пряча хитрую ухмылку в усы пробасила дородная тётя-продавец. – Ы! – только что и смог вымолвить ошалевший от нежности Ванечка, стискивая протянутого курёнка в горячих объятиях. И Мамин Здравый Смысл, видя, что такие ослепительные брызги позитива сейчас просто выжгут ему глаза, крепко зажмурился…
        </p><p>На следующий день в картонной коробке вместо бравого кочета неуклюже лежал комочек свалявшегося желтого пуха и, беспомощно косясь из-под полуприкрытых век на своих растерянных хозяев, совершенно определённо не собирался залёживаться здесь до очередного рассвета. 
        </p><p>— Может быть, ему плохо без своей мамы-курицы? Давай попросим Папу отнести его обратно? 
        </p><p>Мы оставили ему на память нашу коробку от утюга. Наверное, теперь он часто сидит в ней, пока мама-курица заботится о новых детях. Папа сказал, что она очень благодарила нас за отдельную жилплощадь для своего сына. Тяжело ей, наверное, со своими куриными мозгами уследить за всеми цыплятами сразу.
        </p><p>— Мам, а тебе было бы легче, если бы меня не было?
        </p><p>Очередной Глупый Вопрос... Впрочем, разве дети умеют задавать другие? Или дело вообще не в вопросах, а в том, что иногда даже взрослые не умеют вовремя давать Нужных Ответов?
        </p><p>— Конечно было бы. Больше спать, меньше готовить, ммм!... романтика! Но нам очень хотелось, чтобы ты был, поэтому мы сознательно пошли на столкновение с определёнными трудностями. Должны же цветы не бояться гусениц, если хотят однажды познакомиться с бабочками?
        </p><p>- Мам, а мы купим ещё одного петушка? — Сынок, ты же сам видел, для цыплят у нас в доме нет подходящих условий. Давай не будем мучить ещё одно живое существо? — А хорька? Мам, давай купим хорька? Он будет мышей ловить! 
        </p><p>— Ага, обязательно...
        </p><p>И ведь купим же. Только попозже. Эта дурь — она в генах, сынок. В генах.`,
    },
    {
        "h3":   `БЕСКОНЕЧНЫЙ АПРЕЛЬ`,
        "p":    `Для кого звучит музыка, когда её никто не слышит? Может быть, она звучит для Бога, спрятавшегося от надоедливых учёных в середине самой большой Чёрной Дыры? А зачем стрекочут кузнечики, если они не хотят, чтобы их ловили? 
        </p><p>— Мама, где кончается радуга? 
        </p><p>— Вот здесь. Мы пришли. Отпустите сейчас же животину, вы же знаете, я терпеть не могу эту прыгучую гадость!
        </p><p>Лесной воздух после дождя... Давным-давно, щедро обделённые благами городской цивилизации люди могли позволять себе его намного чаще, и пока он наполняет всё вокруг, им хочется наслаждаться, как запахом тёплого хлеба, смаковать каждый глоток этой травяной свежести, земных ароматов, испаряющейся росы. На лугу с грацией шаровых молний рассекают зелёные волны антрацитовые стрижи. Для кого они выделывают свои пируэты, когда их никто не видит?
        </p><p>— А если вы не будете крутиться и все посмотрите в камеру, то может статься, что на фотографии у всех совершенно случайно получатся приличные лица! 
        </p><p>— Папа, почему ты никогда не фотографируешься сам? 
        </p><p>— Такая уж у меня забота. За кадром всегда должен оставаться хотя бы один Наблюдатель. — отвечает Папа, хотя на самом деле он просто стесняется появляться в кадре и поэтому как всегда на ходу сочиняет какую-то заумную чушь вместо ответа.
        </p><p>Вполне возможно, что сидящий в траве кузнечик тоже стеснялся и совершенно не планировал тогда с нами фотографироваться. 
        </p><p>Видите его? 
        </p><p>И я не вижу. 
        </p><p>А он есть. `,
    },
];

let pageCounter = 0;
let handbreak = false;

contentGenerator();
doughterShower();
fatherShower();

$(document).delegate('#maskRight', 'click', goForward);
$(document).delegate('#maskLeft', 'click', goBackward);

function goForward() { // SIC!!! Видит клики на свежедобавленных через скрипт элементах!!!
    if (!handbreak) {
        if (pageCounter == 9) { return }
        $('#doughter').fadeOut(300);
        $('#father').fadeOut(300);
        handbreak = true;
        pageCounter += 1;
        if ($('#book').width() == 600) {
            $('#root4').css('transform',     'matrix(0.001, 0, 0, 1, -150, 0)');
            $('#maskRight').css('transform', 'matrix(0.001, 0, 0, 1, -150, 0)');
        } else if ($('#book').width() == 800) {
            $('#root4').css('transform',     'matrix(0.001, 0, 0, 1, -200, 0)');
            $('#maskRight').css('transform', 'matrix(0.001, 0, 0, 1, -200, 0)');
        } else if ($('#book').width() == 400) {
            $('#root4').css('transform',     'matrix(1, 0, 0, 0.001, 0, -250)');
            $('#maskRight').css('transform', 'matrix(1, 0, 0, 0.001, 0, -250)');
        } else if ($('#book').width() == 300) {
            $('#root4').css('transform',     'matrix(1, 0, 0, 0.001, 0, -200)');
            $('#maskRight').css('transform', 'matrix(1, 0, 0, 0.001, 0, -200)');
        };
        $('#maskRight').css('background-color', 'dimgray');
        $('#maskRight').css('opacity', '1');
        setTimeout(rightToLeftSecond, 350);
    } else {
        return
    };
};

function rightToLeftSecond() {
    contFadeIn();
    if ($('#book').width() > 600) {
        $('#root5').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    } else {
        $('#root5').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    };
    setTimeout(contentGenerator, 500);
};

function goBackward() {
    if (!handbreak) {
        if (pageCounter == 0) { return }
        $('#doughter').fadeOut(300);
        $('#father').fadeOut(300);
        handbreak = true;
        pageCounter -= 1;
        if ($('#book').width() == 600) {
            $('#root3').css('transform', 'matrix(0.001, 0, 0, 1, 150, 0)');
        } else if ($('#book').width() == 800) {
            $('#root3').css('transform', 'matrix(0.001, 0, 0, 1, 200, 0)');
        } else if ($('#book').width() == 400) {
            $('#root3').css('transform', 'matrix(1, 0, 0, 0.001, 0, 250)');
        } else if ($('#book').width() == 300) {
            $('#root3').css('transform', 'matrix(1, 0, 0, 0.001, 0, 200)');
        };       
        setTimeout(leftToRightSecond, 350);
    } else {
        return
    };
};

function leftToRightSecond() {
    contFadeIn();
    if ($('#book').width() > 600) {
    $('#root2').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    } else {
        $('#root2').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    };
    setTimeout(contentGenerator, 500);
};

function contentGenerator() {

    let root1 = $('<div>');
    root1.attr('id', 'root1');
    let root2 = $('<div>');
    root2.attr('id', 'root2');
    let root3 = $('<div>');
    root3.attr('id', 'root3');
    let root4 = $('<div>');
    root4.attr('id', 'root4');
    let root5 = $('<div>');
    root5.attr('id', 'root5');
    let root6 = $('<div>');
    root6.attr('id', 'root6');

    let page1 = $('<div>');
    page1.attr('id', 'page1');
    let page2 = $('<div>');
    page2.attr('id', 'page2');
    let page3 = $('<div>');
    page3.attr('id', 'page3');
    let page4 = $('<div>');
    page4.attr('id', 'page4');
    let page5 = $('<div>');
    page5.attr('id', 'page5');
    let page6 = $('<div>');
    page6.attr('id', 'page6');

    let mask = $('<div>');
    mask.attr('id', 'mask');
    let maskLeft = $('<div>');
    maskLeft.attr('id', 'maskLeft');
    let maskRight = $('<div>');
    maskRight.attr('id', 'maskRight');

    mask.append(maskLeft);
    mask.append(maskRight);

    $('#book').html('');

    // $('#mask').html('');

    page1.append($('<img>', { src: `img/Part${pageCounter}cover.jpg` }));    
    page2.append($('<img>', { src: `img/Part${pageCounter}.jpg` }));
    page3.append($('<img>', { src: `img/Part${pageCounter + 1}cover.jpg` }));
    page4.append($('<img>', { src: `img/Part${pageCounter + 1}.jpg` }));
    page5.append($('<img>', { src: `img/Part${pageCounter + 2}cover.jpg` }));
    page6.append($('<img>', { src: `img/Part${pageCounter + 2}.jpg` }));

    root1.append(page1);
    root2.append(page2);
    root3.append(page3);
    root4.append(page4);
    root5.append(page5);
    root6.append(page6);

    $('#book').append(mask);
    $('#book').append(root1);
    $('#book').append(root2);
    $('#book').append(root3);
    $('#book').append(root4);
    $('#book').append(root5);
    $('#book').append(root6);

    $('#indicator').text(`Глава ${pageCounter + 1}`);

    handbreak = false;

};

function contFadeIn() {
    $('#doughter').fadeIn(200);
    $('#father').fadeIn(200);
    doughterShower();
    fatherShower();
    tableOfContentHidden();
};

function doughterShower() {
    $('#doughter').html('');
    let doughterH3 = $('<h2>');
    let doughterP = $('<p>');
    doughterH3.append(doughterStock[`${pageCounter}`].h3);
    doughterP.append(doughterStock[`${pageCounter}`].p);
    $('#doughter').append(doughterH3);
    $('#doughter').append(doughterP);
};

function fatherShower() {
    $('#father').html('');
    let fatherH3 = $('<h2>');
    let fatherP = $('<p>');
    fatherH3.append(fatherStock[`${pageCounter}`].h3);
    fatherP.append(fatherStock[`${pageCounter}`].p);
    $('#father').append(fatherH3);
    $('#father').append(fatherP);
};

$(document).delegate('#tableOfContent', 'click', tableOfContentShower);
$(document).delegate('#hovvver', 'click', tableOfContentHidden);
$(document).delegate('#hovvver div', 'click', tableOfContentPicker);
$(document).delegate('#buttonLeft', 'click', goBackward);
$(document).delegate('#buttonRight', 'click', goForward);

function tableOfContentShower(){
    $('#hovvver').css('top', '45px');
    setTimeout(tableOfContentHidden, 5000);
};

function tableOfContentHidden(){
    $('#hovvver').css('top', '-200px');
};

function tableOfContentPicker(){
    pageCounter = parseInt(this.id.replace('pag', '') - 1);
    contentGenerator();
    contFadeIn();
    console.log(pageCounter);
};

