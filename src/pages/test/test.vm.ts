import {makeAutoObservable} from "mobx";

interface Question {
    id: number
    question: string
    value: number
    type: number
}

export class TestViewModel {
    set selectedQuestion(value: Question) {
        this._selectedQuestion = value;
    }

    get selectedQuestion(): Question {
        return this._selectedQuestion;
    }

    questions: Question[] = [
        {id: 1, question: "Изучать разнообразие животного и растительного мира.", value: 0, type: 1},
        {id: 2, question: "Проводить физические эксперименты.", value: 0, type: 2},
        {id: 3, question: "Разрабатывать новые технологии химического синтеза.", value: 0, type: 3},
        {id: 4, question: "Изучать месторождения полезных ископаемых.", value: 0, type: 4},
        {id: 5, question: "Разрабатывать новые методы диагностики и лечения различных болезней.", value: 0, type: 5},
        {id: 6, question: "Устанавливать и налаживать работу компьютерных программ.", value: 0, type: 6},
        {id: 7, question: "Следить за последовательностью и технологиями строительных работ.", value: 0, type: 7},
        {
            id: 8,
            question: "Решать задачки из книг типа «Математические игры», «Занимательная математика».",
            value: 0,
            type: 8
        },
        {
            id: 9,
            question: "Планировать финансовую и производственную деятельность предприятия, фирмы.",
            value: 0,
            type: 9
        },
        {id: 10, question: "Помогать делать переводы документации.", value: 0, type: 10},
        {id: 11, question: "Управлять машиной, автобусом, трейлером и т. д.", value: 0, type: 11},
        {
            id: 12,
            question: "Заниматься в секции парашютистов, в авиаклубе или заниматься в секции яхтсменов, аквалангистов.",
            value: 0,
            type: 12
        },
        {id: 13, question: "Заниматься в стрелковой секции.", value: 0, type: 13},
        {
            id: 14,
            question: "Заниматься в историческом клубе, разыгрывать ролевые игры по сюжетам исторических событий.",
            value: 0,
            type: 14
        },
        {id: 15, question: "Изучать устройство и режимы работы станков.", value: 0, type: 15},
        {
            id: 16,
            question: "Писать статьи, фельетоны, очерки в периодические издания и в Интернет.",
            value: 0,
            type: 16
        },
        {
            id: 17,
            question: "Оказывать юридическую помощь людям, консультируя их по вопросам законодательства.",
            value: 0,
            type: 17
        },
        {id: 18, question: "Организовывать для ребят игры и праздники.", value: 0, type: 18},
        {
            id: 19,
            question: "Консультировать людей при крупных покупках (автомобиль, заграничный тур и т. д.).",
            value: 0,
            type: 19
        },
        {id: 20, question: "Тренировать команду спортсменов.", value: 0, type: 20},
        {
            id: 21,
            question: "Работать на музыкальных радиоканалах, составлять списки внесен для звучания в эфире.",
            value: 0,
            type: 21
        },
        {id: 22, question: "Сниматься в кино или играть на сцене.", value: 0, type: 22},
        {id: 23, question: "Делать интернет-сайты, веб-страницы.", value: 0, type: 23},
        {
            id: 24,
            question: "Разрабатывать мероприятия но охране численности редких растений и животных.",
            value: 0,
            type: 24
        },
        {
            id: 25,
            question: "Участвовать в биологических экспедициях, посещать биологические секции.",
            value: 0,
            type: 1
        },
        {id: 26, question: "Изучать законы природы, находить физические закономерности.", value: 0, type: 2},
        {
            id: 27,
            question: "Проводить опыты с различными веществами, следить за ходом химических реакций.",
            value: 0,
            type: 3
        },
        {id: 28, question: "Вести наблюдения за изменениями состояния атмосферы.", value: 0, type: 4},
        {
            id: 29,
            question: "Читать о том, как люди учились бороться с болезнями и изобретали новые лекарства.",
            value: 0,
            type: 5
        },
        {id: 30, question: "Находить и устранять причины сбоя в компьютерах, аппаратуре, приборах.", value: 0, type: 6},
        {id: 31, question: "Набрасывать эскизы или выполнять чертежи различных построек.", value: 0, type: 7},
        {id: 32, question: "Соревноваться в решении математических задач.", value: 0, type: 8},
        {
            id: 33,
            question: "Выступать посредником при заключении торговых сделок (искать покупателям продавцов и наоборот).",
            value: 0,
            type: 9
        },
        {id: 34, question: "Проводить экскурсии на иностранном языке для гостей нашего города.", value: 0, type: 10},
        {id: 35, question: "Управлять пожарной машиной.", value: 0, type: 11},
        {id: 36, question: "Управлять самолетом МЧС или скоростным катером.", value: 0, type: 12},
        {id: 37, question: "Участвовать в военизированных учениях («Зарница», «Разведчик» и др.).", value: 0, type: 13},
        {
            id: 38,
            question: "Посещать исторические музеи, изучать исторические памятники разных народов.",
            value: 0,
            type: 14
        },
        {id: 39, question: "Регулировать механизмы и заменять их в случае неисправности.", value: 0, type: 15},
        {
            id: 40,
            question: "Наблюдать и анализировать события, поступки людей, делать об этом репортажи.",
            value: 0,
            type: 16
        },
        {id: 41, question: "Искать и фиксировать следы на месте преступления.", value: 0, type: 17},
        {id: 42, question: "Заниматься репетиторством и преподавательской деятельностью.", value: 0, type: 18},
        {id: 43, question: "Изучать спрос покупателей на определенный товар.", value: 0, type: 19},
        {id: 44, question: "Читать специальные спортивные новости в газетах и на сайтах.", value: 0, type: 20},
        {
            id: 45,
            question: "Исполнять произведения на музыкальных инструментах с использованием различных техник игры.",
            value: 0,
            type: 21
        },
        {
            id: 46,
            question: "Изучать основы сценического искусства, творчество знаменитых мастеров сцены.",
            value: 0,
            type: 22
        },
        {
            id: 47,
            question: "Искать наиболее рациональное и эстетическое цветовое решение для интерьеров.",
            value: 0,
            type: 23
        },
        {id: 48, question: "Проводить наблюдения и контроль загрязнения окружающей среды.", value: 0, type: 24},
        {id: 49, question: "Изучать анатомию и физиологию животных.", value: 0, type: 1},
        {id: 50, question: "Собирать установки для проведения физических экспериментов.", value: 0, type: 2},
        {
            id: 51,
            question: "В лабораторных условиях определять степень загрязненности почвы химическими веществами.",
            value: 0,
            type: 3
        },
        {
            id: 52,
            question: "Создавать ландшафтные карты с помощью компьютерных геоинформациоппых систем.",
            value: 0,
            type: 4
        },
        {id: 53, question: "Интересоваться причинами и способами лечения болезни.", value: 0, type: 5},
        {id: 54, question: "Прокладывать сетевые кабели и кабели силового питания.", value: 0, type: 6},
        {id: 55, question: "Изучать новые технологии строительства.", value: 0, type: 7},
        {id: 56, question: "Изучать языки программирования па компьютере.", value: 0, type: 8},
        {id: 57, question: "Осуществлять финансовые расчеты между предприятиями.", value: 0, type: 9},
        {
            id: 58,
            question: "Читать литературу на иностранном языке или смотреть фильмы без перевода.",
            value: 0,
            type: 10
        },
        {id: 59, question: "Управлять современным поездом дальнего следования.", value: 0, type: 11},
        {id: 60, question: "Оказывать экстренную помощь людям на терпящих бедствие судах.", value: 0, type: 12},
        {id: 61, question: "Быть военным инженером или командиром.", value: 0, type: 13},
        {
            id: 62,
            question: "Обсуждать исторические и текущие политические события России и других стран.",
            value: 0,
            type: 14
        },
        {id: 63, question: "Подбирать цветовые оттенки, красить дома, расписывать стены.", value: 0, type: 15},
        {id: 64, question: "Добывать эксклюзивную информацию, передавать ее читателям и зрителям.", value: 0, type: 16},
        {
            id: 65,
            question: "Контролировать своевременную уплату налогов фирмами и физическими лицами.",
            value: 0,
            type: 17
        },
        {id: 66, question: "Обучать маленьких детей, играя с ними.", value: 0, type: 18},
        {id: 67, question: "Встречать и размещать пассажиров в салоне самолета.", value: 0, type: 19},
        {id: 68, question: "Тренироваться в профессиональном спортивном клубе.", value: 0, type: 20},
        {
            id: 69,
            question: "Играть в музыкальной группе или в оркестре, следуя указаниям дирижера.",
            value: 0,
            type: 21
        },
        {
            id: 70,
            question: "Вести концертные программы, объявлять зрителям новые номера программы.",
            value: 0,
            type: 22
        },
        {id: 71, question: "Создавать необычные модели одежды.", value: 0, type: 23},
        {
            id: 72,
            question: "Разрабатывать меры по снижению количества вредных производственных выбросов в окружающую среду.",
            value: 0,
            type: 24
        },
        {
            id: 73,
            question: "Разрабатывать средства борьбы с возбудителями заболеваний животных и растений.",
            value: 0,
            type: 1
        },
        {
            id: 74,
            question: "Изучать процессы взаимодействия элементарных частиц в ядерных реакторах.",
            value: 0,
            type: 2
        },
        {id: 75, question: "Брать на анализ химические пробы воды, продуктов питания, почвы и пр.", value: 0, type: 3},
        {
            id: 76,
            question: "Вести разведку месторождений полезных ископаемых: нефти, газа, драгоценных металлов и др.",
            value: 0,
            type: 4
        },
        {id: 77, question: "Тренироваться в навыках первой медицинской помощи.", value: 0, type: 5},
        {
            id: 78,
            question: "Проверять, испытывать, регулировать работу узлов автомобиля, самолета, корабля и т. д.",
            value: 0,
            type: 6
        },
        {id: 79, question: "Готовить растворы, смеси для строительных работ.", value: 0, type: 7},
        {id: 80, question: "Разрабатывать программные алгоритмы для выполнения сложных расчетов.", value: 0, type: 8},
        {id: 81, question: "Вести финансовую документацию фирмы, предприятия.", value: 0, type: 9},
        {id: 82, question: "Изучать иностранные языки.", value: 0, type: 10},
        {id: 83, question: "Регулировать движение транспортных потоков на улицах города.", value: 0, type: 11},
        {
            id: 84,
            question: "Оказывать экстренную помощь людям «с воздуха» (например, управляя вертолетом МЧС).",
            value: 0,
            type: 12
        },
        {id: 85, question: "Изучать устройство оружия, военной техники.", value: 0, type: 13},
        {id: 86, question: "Анализировать по книгам исторические факты.", value: 0, type: 14},
        {id: 87, question: "Обеспечивать в домах систему отопления, исправную работу водопровода.", value: 0, type: 15},
        {
            id: 88,
            question: "Редактировать тексты книг, статей, выступлений высокопоставленных лиц.",
            value: 0,
            type: 16
        },
        {
            id: 89,
            question: "Выдвигать обвинения преступникам, назначать им наказания в соответствии с законом.",
            value: 0,
            type: 17
        },
        {id: 90, question: "Готовить школьников к олимпиадным заданиям, конкурсам.", value: 0, type: 18},
        {
            id: 91,
            question: "Помогать подбирать людям наряды и украшения для торжественных церемоний.",
            value: 0,
            type: 19
        },
        {id: 92, question: "Сдавать спортивные нормативы.", value: 0, type: 20},
        {id: 93, question: "Выступать в качестве солиста перед публикой на концертах, в клубах.", value: 0, type: 21},
        {
            id: 94,
            question: "Подбирать актеров для съемки художественного фильма или рек ламного клипа.",
            value: 0,
            type: 22
        },
        {id: 95, question: "Делать фотоснимки, монтировать фотографии с помощью компьютера.", value: 0, type: 23},
        {
            id: 96,
            question: "Заниматься мониторингом состояния воздуха на оживленных го родских магистралях.",
            value: 0,
            type: 24
        },
        {
            id: 97,
            question: "Отбирать и заготавливать семена для посадки, высаживать растения в зимних садах.",
            value: 0,
            type: 1
        },
        {id: 98, question: "Моделировать на компьютере физические законы природы.", value: 0, type: 2},
        {
            id: 99,
            question: "Создавать новые синтетические вещества из нефтепродуктов и других полезных ископаемых.",
            value: 0,
            type: 3
        },
        {id: 100, question: "Изучать особенности флоры и фауны различных регионов.", value: 0, type: 4},
        {
            id: 101,
            question: "Осуществлять уход за человеком во время его выздоровления после болезни.",
            value: 0,
            type: 5
        },
        {
            id: 102,
            question: "Заниматься в технической или электротехнической секции (на пример, в авиа- или судомоделировании).",
            value: 0,
            type: 6
        },
        {id: 103, question: "Изучать качества и условия применения строительных материалов.", value: 0, type: 7},
        {
            id: 104,
            question: "Писать компьютерные программы на основе анализа математических алгоритмов.",
            value: 0,
            type: 8
        },
        {id: 105, question: "Рассчитывать предполагаемый размер прибыли предприятия.", value: 0, type: 9},
        {id: 106, question: "Осуществлять перевод телепередач на русский язык.", value: 0, type: 10},
        {id: 107, question: "Консультировать людей по соблюдению правил дорожного движения.", value: 0, type: 11},
        {id: 108, question: "Изучать особенности управления яхтой в штормовую погоду.", value: 0, type: 12},
        {
            id: 109,
            question: "Предупреждать незаконное пересечение государственной границы иностранными гражданами.",
            value: 0,
            type: 13
        },
        {
            id: 110,
            question: "Разыскивать и собирать материалы, свидетельствующие о событиях прошлого.",
            value: 0,
            type: 14
        },
        {id: 111, question: "Обрабатывать и изготовлять металлические детали на фрезерном станке.", value: 0, type: 15},
        {id: 112, question: "Работать в средствах массовой информации, вести телепередачи.", value: 0, type: 16},
        {id: 113, question: "Выяснять у людей причины незаконных поступков, которые они скрывают.", value: 0, type: 17},
        {id: 114, question: "Организовывать походы для школьников.", value: 0, type: 18},
        {
            id: 115,
            question: "Разрабатывать рекламные акции для продвижения товара в магазинах города.",
            value: 0,
            type: 19
        },
        {
            id: 116,
            question: "Ездить в качестве участника па спортивные соревнования в другой город.",
            value: 0,
            type: 20
        },
        {
            id: 117,
            question: "Сочинять музыку для кинофильмов, телепередач, для известных исполнителей.",
            value: 0,
            type: 21
        },
        {id: 118, question: "Подготавливать и ставить трюки в кино.", value: 0, type: 22},
        {id: 119, question: "Придумывать оригинальные ювелирные изделия, украшения.", value: 0, type: 23},
        {id: 120, question: "Изучать взаимоотношения живых организмов с их средой обитания.", value: 0, type: 24},
        {id: 121, question: "Заниматься дрессировкой служебных собак или других животных.", value: 0, type: 1},
        {id: 122, question: "Читать книги тина «Занимательная физика», «Физики шутят» и т. п.", value: 0, type: 2},
        {id: 123, question: "Управлять технологическими процессами производства лекарств.", value: 0, type: 3},
        {id: 124, question: "Участвовать в географических экспедициях.", value: 0, type: 4},
        {id: 125, question: "Работать врачом на станции «Скорой помощи».", value: 0, type: 5},
        {id: 126, question: "Ремонтировать радиоприборы и различную аппаратуру.", value: 0, type: 6},
        {
            id: 127,
            question: "Продумывать планировку домов, этажей, квартир. Намечать план строительства.",
            value: 0,
            type: 7
        },
        {
            id: 128,
            question: "Отражать в виде чисел и формул какие-либо события, процессы или явления.",
            value: 0,
            type: 8
        },
        {id: 129, question: "Заключать сделки, договора па выполнение определенных работ.", value: 0, type: 9},
        {
            id: 130,
            question: "Изучать происхождение слов и различных словосочетаний в разных языках.",
            value: 0,
            type: 10
        },
        {id: 131, question: "Тренироваться водить машину или мотоцикл для подготовки к гонке.", value: 0, type: 11},
        {id: 132, question: "Изучать особенности управления легким самолетом в ветреную погоду.", value: 0, type: 12},
        {id: 133, question: "Жить согласно уставу, носить военную форму.", value: 0, type: 13},
        {id: 134, question: "Участвовать в археологических экспедициях, работать на раскопках.", value: 0, type: 14},
        {id: 135, question: "Делать из дерева различные предметы, мебель и пр.", value: 0, type: 15},
        {
            id: 136,
            question: "Осуществлять литературную обработку статей в соответствии с жанровым своеобразием.",
            value: 0,
            type: 16
        },
        {
            id: 137,
            question: "Продумывать новые законы и поправки в кодексы, которые были бы удобны для применения.",
            value: 0,
            type: 17
        },
        {id: 138, question: "Руководить одной из секций в доме детского творчества.", value: 0, type: 18},
        {
            id: 139,
            question: "Помогать человеку улучшить внешность с помощью прически, макияжа, подбора красивой одежды и т. п.",
            value: 0,
            type: 19
        },
        {
            id: 140,
            question: "Осуществлять честное и грамотное судейство на спортивных соревнованиях.",
            value: 0,
            type: 20
        },
        {
            id: 141,
            question: "Изучать творчество выдающихся композиторов, поэтов песен и исполнителей.",
            value: 0,
            type: 21
        },
        {id: 142, question: "Создавать творческие проекты, «раскручивать» исполнителей.", value: 0, type: 22},
        {id: 143, question: "Заниматься дизайном интерьеров.", value: 0, type: 23},
        {
            id: 144,
            question: "Следить за качеством воды, поступающей в городскую водопроводную сеть.",
            value: 0,
            type: 24
        }
    ]
    private _selectedQuestion: Question = this.questions[0]
    isTestEnded = false

    setQuestion(idx: number) {
        this._selectedQuestion = this.questions[idx]
    }
    countResult(){
        this.questions.forEach(q => {
            if (q.type === 1){
                this._results[0].value += q.value
            }
            if (q.type === 2){
                this._results[1].value += q.value
            }
        })
    }
    nextQuestion() {
        // this.setQuestion(this._selectedQuestion.id < 144 ? this._selectedQuestion.id : 143)
        const idx = () => {
            if (this._selectedQuestion.id < 144) {
                if (this._selectedQuestion.id % 2 === 0 && this._selectedQuestion.id + 22 < 144) {
                    return this._selectedQuestion.id + 22
                } else {
                    if (this._selectedQuestion.id === 122) {
                        this.isTestEnded = true
                        this.countResult()
                        return 0
                    }
                    return this._selectedQuestion.id
                }
            }
            return 143
        }
        this.setQuestion(idx())
    }

    previousQuestion() {
        // this.setQuestion(this._selectedQuestion.id > 1 ? this._selectedQuestion.id - 2 : 0)
        if (this._selectedQuestion.id % 2 === 0){
            this.setQuestion(this._selectedQuestion.id - 2)
        } else if (this._selectedQuestion.id - 24 >= 0){
            this.setQuestion(this._selectedQuestion.id-24)
        }
    }

    _results = [
        {
            name: "Биология",
            value: 0
        },
        {
            name: "Физика",
            value: 0
        },
    ]

    getResults() {
        const getRes = (v: number) => {
            if (v <= -6) {
                return "Область деятельности активно отрицается («Что угодно, только не это!»)"
            }
            if (v <= -1) {
                return "Область деятельности интереса не вызывает"
            }
            if (v <= 4) {
                return "Интерес выражен слабо"
            }
            if (v <= 7) {
                return "Выраженный интерес"
            }
            return "Ярко выраженный интерес"
        }
        return this._results.map(r => {
            return {
                name: r.name,
                result: getRes(r.value)
            }
        })

    }

    constructor() {
        makeAutoObservable(this)
    }
}
