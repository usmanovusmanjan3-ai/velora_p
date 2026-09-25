// =====================================================
// 6-SINF QADIMGI DUNYO TARIXI
// 100 TA SAVOLLIK INTERAKTIV QUIZ
// =====================================================


// =====================================================
// SAVOLLAR
// =====================================================

const questions = [

    {
        question: "Qadimgi tarixni o‘rganishda moddiy manbalarni tadqiq qiladigan mutaxassislar kimlar?",
        answers: ["Arxeologlar", "Antropologlar", "Etnograflar", "Filologlar"],
        correct: 0
    },

    {
        question: "Qadimgi odamlarning suyak qoldiqlari va tashqi ko‘rinishini o‘rganuvchi fan qaysi?",
        answers: ["Arxeologiya", "Antropologiya", "Etnografiya", "Geografiya"],
        correct: 1
    },

    {
        question: "Xalqlarning urf-odatlari, an’analari va turmush tarzini o‘rganuvchi fan qaysi?",
        answers: ["Antropologiya", "Arxeologiya", "Etnografiya", "Paleontologiya"],
        correct: 2
    },

    {
        question: "Qadimgi odamlar dastlab mehnat qurollarini asosan nimadan yasagan?",
        answers: ["Toshdan", "Temirdan", "Bronzadan", "Shishadan"],
        correct: 0
    },

    {
        question: "Eng qadimgi odamlar hayotida ovchilik va termachilik qanday ahamiyatga ega bo‘lgan?",
        answers: ["Asosiy tirikchilik manbai bo‘lgan", "Faqat marosim uchun xizmat qilgan", "Faqat savdo uchun kerak bo‘lgan", "Faqat uy qurishda ishlatilgan"],
        correct: 0
    },

    {
        question: "O‘zbekiston hududidagi qadimgi odamlar manzilgohlaridan biri qaysi?",
        answers: ["Selungur", "Afrosiyob", "Mingtepa", "Poykent"],
        correct: 0
    },

    {
        question: "Selungur g‘ori qaysi hududda joylashgan?",
        answers: ["Farg‘ona vodiysida", "Xorazmda", "Buxoroda", "Qashqadaryoda"],
        correct: 0
    },

    {
        question: "Ko‘lbuloq qadimgi manzilgohi qaysi hudud bilan bog‘liq?",
        answers: ["Toshkent viloyati", "Surxondaryo viloyati", "Xorazm viloyati", "Farg‘ona viloyati"],
        correct: 0
    },

    {
        question: "Teshik-Tosh g‘ori qaysi hududda joylashgan?",
        answers: ["Surxondaryo", "Toshkent", "Farg‘ona", "Buxoro"],
        correct: 0
    },

    {
        question: "Teshik-Tosh g‘oridan topilgan bola qoldiqlari qaysi qadimgi odam turiga mansub?",
        answers: ["Neandertal", "Homo sapiens", "Kromanyon", "Australopitek"],
        correct: 0
    },

    {
        question: "Qadimgi odamlarning tabiatga bog‘liqligi eng avvalo nimada ko‘ringan?",
        answers: ["Oziq-ovqatni tabiatdan olishida", "Yozuvdan foydalanishida", "Pul ishlatishida", "Shaharlar qurishida"],
        correct: 0
    },

    {
        question: "Olovning kashf etilishi qadimgi odamlarga qanday imkoniyat yaratdi?",
        answers: ["Ovqat pishirish va isinish", "Pul yasash", "Yozuv yaratish", "Kema qurish"],
        correct: 0
    },

    {
        question: "Urug‘ jamoasi nima asosida shakllangan?",
        answers: ["Qarindoshlik asosida", "Pul asosida", "Harbiy xizmat asosida", "Savdo asosida"],
        correct: 0
    },

    {
        question: "Qadimgi odamlarning asosiy mashg‘ulotlaridan biri qaysi?",
        answers: ["Ovchilik", "Bank ishi", "Dengiz savdosi", "Tangachilik"],
        correct: 0
    },

    {
        question: "Dehqonchilikning vujudga kelishi insoniyat hayotida qanday o‘zgarish yasadi?",
        answers: ["Oziq-ovqatni yetishtirish imkoniyati paydo bo‘ldi", "Yozuv yo‘qoldi", "Ovchilik butunlay tugadi", "Shaharlar darhol yo‘qoldi"],
        correct: 0
    },

    {
        question: "Chorvachilikning paydo bo‘lishi nimani anglatadi?",
        answers: ["Hayvonlarni xonakilashtirish va boqish", "Faqat yovvoyi hayvonlarni ovlash", "Faqat baliq tutish", "Faqat o‘simlik yig‘ish"],
        correct: 0
    },

    {
        question: "Bronza qanday metallarning qotishmasidan hosil bo‘ladi?",
        answers: ["Mis va qalay", "Temir va oltin", "Kumush va temir", "Oltin va mis"],
        correct: 0
    },

    {
        question: "Temirdan foydalanishning asosiy afzalliklaridan biri nima edi?",
        answers: ["Mustahkam mehnat qurollari tayyorlash", "Yozuvni yaratish", "Pulni bekor qilish", "Olovni o‘chirish"],
        correct: 0
    },

    {
        question: "Qadimgi odamlarning g‘or devorlariga chizgan tasvirlari nimani o‘rganishda muhim manba hisoblanadi?",
        answers: ["Ularning hayoti va dunyoqarashini", "Faqat ob-havoni", "Faqat savdo narxlarini", "Faqat shaharlar sonini"],
        correct: 0
    },

    {
        question: "Qadimgi odamlar jamoa bo‘lib yashash orqali nimani yaxshiroq uddalay olgan?",
        answers: ["Birgalikda ov qilish va mehnat qilishni", "Pul bosishni", "Kitob chop etishni", "Temir yo‘l qurishni"],
        correct: 0
    },

    {
        question: "Qadimgi Misr sivilizatsiyasi qaysi daryo vodiysida vujudga kelgan?",
        answers: ["Nil", "Dajla", "Frot", "Hind"],
        correct: 0
    },

    {
        question: "Qadimgi Misr hukmdori qanday atalgan?",
        answers: ["Fir’avn", "Podsho", "Satrap", "Strateg"],
        correct: 0
    },

    {
        question: "Misr yozuvi qanday atalgan?",
        answers: ["Iyeroglif", "Mixxat", "Alifbo", "Runik yozuv"],
        correct: 0
    },

    {
        question: "Misrliklar yozuv uchun ko‘pincha nimadan foydalanganlar?",
        answers: ["Papirusdan", "Pergamentdan", "Ipakdan", "Temir taxtachalardan"],
        correct: 0
    },

    {
        question: "Misr ehromlari asosan nima maqsadda qurilgan?",
        answers: ["Fir’avnlar maqbarasi sifatida", "Bozor sifatida", "Harbiy qal’a sifatida", "Maktab sifatida"],
        correct: 0
    },

    {
        question: "Eng mashhur Misr ehromlari qaysi joyda joylashgan?",
        answers: ["Giza", "Bobil", "Afina", "Rim"],
        correct: 0
    },

    {
        question: "Xufu ehromi yana qanday nom bilan mashhur?",
        answers: ["Xeops ehromi", "Doro ehromi", "Ramses ehromi", "Tutmos ehromi"],
        correct: 0
    },

    {
        question: "Qadimgi misrliklar vafot etgan kishining jasadini maxsus usulda saqlab qolish uchun nima tayyorlaganlar?",
        answers: ["Mumiyo", "Papirus", "Sarkofag yozuvi", "Iyeroglif"],
        correct: 0
    },

    {
        question: "Qadimgi Misrda Nil daryosining toshishi nimaga katta ta’sir ko‘rsatgan?",
        answers: ["Dehqonchilikka", "Temirchilikka", "Dengizchilikka", "Tangachilikka"],
        correct: 0
    },

    {
        question: "Misrliklar Quyosh xudosi sifatida qaysi xudoga sig‘inganlar?",
        answers: ["Ra", "Amon", "Osiris", "Anubis"],
        correct: 0
    },

    {
        question: "Mesopotamiya so‘zi qanday ma’noni anglatadi?",
        answers: ["Ikki daryo oralig‘i", "Quyosh mamlakati", "Tog‘lar mamlakati", "Cho‘l mamlakati"],
        correct: 0
    },

    {
        question: "Mesopotamiyadagi ikki asosiy daryo qaysilar?",
        answers: ["Dajla va Frot", "Nil va Hind", "Amudaryo va Sirdaryo", "Gang va Yanszi"],
        correct: 0
    },

    {
        question: "Mesopotamiyada qadimgi yozuvning keng tarqalgan turi qaysi?",
        answers: ["Mixxat", "Iyeroglif", "Lotin yozuvi", "Kirill yozuvi"],
        correct: 0
    },

    {
        question: "Shumer shaharlari qaysi hududda vujudga kelgan?",
        answers: ["Janubiy Mesopotamiyada", "Shimoliy Misrda", "Yunonistonda", "Hind vodiysida"],
        correct: 0
    },

    {
        question: "Xammurapi kim bo‘lgan?",
        answers: ["Bobil podshosi", "Misr fir’avni", "Rim imperatori", "Yunon faylasufi"],
        correct: 0
    },

    {
        question: "Xammurapi nomi eng avvalo nima bilan mashhur?",
        answers: ["Qonunlar to‘plami bilan", "Ehromlar bilan", "Olimpiya o‘yinlari bilan", "Kolizey bilan"],
        correct: 0
    },

    {
        question: "Qadimgi Bobil shahri qaysi daryo havzasida joylashgan edi?",
        answers: ["Frot", "Nil", "Hind", "Gang"],
        correct: 0
    },

    {
        question: "Zikkuratlar qadimgi Mesopotamiyada qanday inshootlar edi?",
        answers: ["Pog‘onali ibodatxonalar", "Harbiy kemalar", "Saroy bog‘lari", "Bozorlar"],
        correct: 0
    },

    {
        question: "Ossuriya davlatining kuchli tomonlaridan biri nima edi?",
        answers: ["Kuchli qo‘shin", "Faqat dehqonchilik", "Faqat baliqchilik", "Faqat hunarmandchilik"],
        correct: 0
    },

    {
        question: "Mixxat yozuvi asosan nimaga yozilgan?",
        answers: ["Loy taxtachalarga", "Papirusga", "Ipakka", "Yog‘och kitoblarga"],
        correct: 0
    },

    {
        question: "Qadimgi Hindiston sivilizatsiyasi dastlab qaysi daryo vodiysida rivojlangan?",
        answers: ["Hind", "Nil", "Frot", "Dajla"],
        correct: 0
    },

    {
        question: "Qadimgi Hindistondagi mashhur shaharlardan biri qaysi?",
        answers: ["Moxenjo-Daro", "Afina", "Bobil", "Sparta"],
        correct: 0
    },

    {
        question: "Hindistonda jamiyatning tabaqalarga bo‘linishi qanday tizim bilan bog‘liq edi?",
        answers: ["Kastalar", "Polislar", "Satrapliklar", "Legionlar"],
        correct: 0
    },

    {
        question: "Qadimgi Hindistonda buddaviylik dini kimning ta’limoti asosida shakllangan?",
        answers: ["Siddhartha Gautama", "Konfutsiy", "Zardusht", "Suqrot"],
        correct: 0
    },

    {
        question: "Qadimgi Xitoy sivilizatsiyasi asosan qaysi daryolar havzasida rivojlangan?",
        answers: ["Xuanxe va Yanszi", "Nil va Frot", "Hind va Gang", "Dajla va Frot"],
        correct: 0
    },

    {
        question: "Buyuk Xitoy devori asosan nima maqsadda qurilgan?",
        answers: ["Himoya uchun", "Sug‘orish uchun", "Savdo uchun", "Ibodat uchun"],
        correct: 0
    },

    {
        question: "Konfutsiy kim bo‘lgan?",
        answers: ["Xitoy mutafakkiri", "Misr fir’avni", "Rim imperatori", "Bobil podshosi"],
        correct: 0
    },

    {
        question: "Qadimgi xitoyliklar ipak ishlab chiqarish bilan mashhur bo‘lganmi?",
        answers: ["Ha", "Yo‘q", "Faqat Rim davrida", "Faqat Misrda"],
        correct: 0
    },

    {
        question: "Qog‘ozning dastlabki ko‘rinishlari qaysi qadimgi sivilizatsiya bilan bog‘liq?",
        answers: ["Xitoy", "Rim", "Misr", "Yunoniston"],
        correct: 0
    },

    {
        question: "Qadimgi Yunoniston qaysi yarimorolda joylashgan?",
        answers: ["Bolqon yarimorolida", "Arabiston yarimorolida", "Hindiston yarimorolida", "Skandinaviya yarimorolida"],
        correct: 0
    },

    {
        question: "Qadimgi Yunonistondagi shahar-davlat qanday atalgan?",
        answers: ["Polis", "Satraplik", "Viloyat", "Legion"],
        correct: 0
    },

    {
        question: "Afina qaysi qadimgi yunon shahri edi?",
        answers: ["Polis", "Satraplik", "Imperiya", "Legion"],
        correct: 0
    },

    {
        question: "Sparta nimasi bilan mashhur bo‘lgan?",
        answers: ["Harbiy tarbiya va kuchli qo‘shini bilan", "Ehromlari bilan", "Mixxati bilan", "Buyuk devori bilan"],
        correct: 0
    },

    {
        question: "Olimpiya o‘yinlari qadimgi Yunonistonda qaysi xudo sharafiga o‘tkazilgan?",
        answers: ["Zevs", "Ares", "Apollon", "Poseydon"],
        correct: 0
    },

    {
        question: "Afina demokratiyasining rivojlanishida qaysi davlat arbobi mashhur?",
        answers: ["Perikl", "Xammurapi", "Doro I", "Sezar"],
        correct: 0
    },

    {
        question: "Marafon jangi kimlar o‘rtasida bo‘lib o‘tgan?",
        answers: ["Yunonlar va forslar", "Rimliklar va misrliklar", "Xitoyliklar va hindlar", "Shumerlar va bobilliklar"],
        correct: 0
    },

    {
        question: "Aleksandr Makedonskiy qaysi davlatdan chiqqan?",
        answers: ["Makedoniya", "Misr", "Rim", "Bobil"],
        correct: 0
    },

    {
        question: "Aleksandr Makedonskiy Sharqqa yurishlari davomida qaysi hududga ham kirib kelgan?",
        answers: ["O‘rta Osiyoga", "Amerikaga", "Avstraliyaga", "Skandinaviyaga"],
        correct: 0
    },

    {
        question: "Qadimgi yunon teatrlarida niqoblar nima uchun ishlatilgan?",
        answers: ["Obrazni ifodalash va ovozni kuchaytirish uchun", "Faqat himoya uchun", "Yozuv yozish uchun", "Pul saqlash uchun"],
        correct: 0
    },

    {
        question: "Qadimgi O‘rta Osiyo tarixini o‘rganishda arxeologik topilmalar nima uchun muhim?",
        answers: ["Qadimgi aholi hayoti haqida ma’lumot beradi", "Faqat ob-havoni ko‘rsatadi", "Faqat zamonaviy tarixni tushuntiradi", "Faqat savdo narxlarini bildiradi"],
        correct: 0
    },

    {
        question: "Ahamoniylar davlati asoschisi kim edi?",
        answers: ["Kir II", "Doro III", "Kserks", "Aleksandr"],
        correct: 0
    },

    {
        question: "Doro I Ahamoniylar davlatida nimani mustahkamlagan?",
        answers: ["Davlat boshqaruvi va satraplik tizimini", "Rim imperiyasini", "Olimpiya o‘yinlarini", "Misr ehromlarini"],
        correct: 0
    },

    {
        question: "Ahamoniylar davlatida viloyat hokimlari qanday atalgan?",
        answers: ["Satraplar", "Strateglar", "Konsullar", "Legionerlar"],
        correct: 0
    },

    {
        question: "Zardushtiylik dini bilan bog‘liq muqaddas kitob qaysi?",
        answers: ["Avesto", "Tavrot", "Bibliya", "Iliada"],
        correct: 0
    },

    {
        question: "Zardusht kimning nomi bilan bog‘liq?",
        answers: ["Zardushtiylik dini", "Buddaviylik", "Xristianlik", "Konfutsiychilik"],
        correct: 0
    },

    {
        question: "Shiroq haqidagi rivoyatda u kimlarga qarshi kurashgan?",
        answers: ["Fors qo‘shinlariga", "Rim qo‘shinlariga", "Yunon qo‘shinlariga", "Xitoy qo‘shinlariga"],
        correct: 0
    },

    {
        question: "Salavkiylar davlati kimning istilolari natijasida yuzaga kelgan hududlarning bir qismida tashkil topgan?",
        answers: ["Aleksandr Makedonskiy", "Xammurapi", "Perikl", "Sezar"],
        correct: 0
    },

    {
        question: "Yunon-Baqtriya podsholigi qaysi hudud bilan bog‘liq?",
        answers: ["Baqtriya", "Misr", "Italiya", "Xitoy"],
        correct: 0
    },

    {
        question: "Qadimgi Xorazm qaysi hudud bilan bog‘liq qadimgi davlatlardan biri?",
        answers: ["O‘rta Osiyo", "Yunoniston", "Italiya", "Hindiston janubi"],
        correct: 0
    },

    {
        question: "Qadimgi Qang‘ davlati qaysi hududlarda shakllangan?",
        answers: ["O‘rta Osiyoning markaziy va shimoliy hududlarida", "Faqat Misrda", "Faqat Yunonistonda", "Faqat Xitoy janubida"],
        correct: 0
    },

    {
        question: "Davan davlati qadimgi manbalarda qaysi hudud bilan bog‘lanadi?",
        answers: ["Farg‘ona vodiysi", "Nil vodiysi", "Italiya", "Mesopotamiya"],
        correct: 0
    },

    {
        question: "Davan otlari qadimda qaysi davlatda ayniqsa mashhur bo‘lgan?",
        answers: ["Xitoyda", "Misrda", "Rimda", "Yunonistonda"],
        correct: 0
    },

    {
        question: "Kushon davlatining yuksalishi qaysi hukmdor nomi bilan ko‘proq bog‘lanadi?",
        answers: ["Kanishka", "Xammurapi", "Perikl", "Ramses II"],
        correct: 0
    },

    {
        question: "Kushon davlati hududida qaysi din keng tarqalgan?",
        answers: ["Buddaviylik", "Faqat zardushtiylik", "Faqat xristianlik", "Faqat yahudiylik"],
        correct: 0
    },

    {
        question: "Buyuk Ipak yo‘li nima edi?",
        answers: ["Sharq va G‘arbni bog‘lagan savdo yo‘llari tizimi", "Faqat Rim ichidagi yo‘l", "Faqat harbiy yo‘l", "Faqat Misr kanali"],
        correct: 0
    },

    {
        question: "Buyuk Ipak yo‘li orqali nimalar almashilgan?",
        answers: ["Tovarlar, madaniyat va g‘oyalar", "Faqat qurol", "Faqat oltin", "Faqat oziq-ovqat"],
        correct: 0
    },

    {
        question: "Kushonlar davrida savdo va madaniy aloqalarning rivojlanishiga nima yordam bergan?",
        answers: ["Buyuk Ipak yo‘li", "Faqat Nil daryosi", "Faqat Olimpiya o‘yinlari", "Faqat Rim senati"],
        correct: 0
    },

    {
        question: "Qadimgi O‘rta Osiyo davlatlaridan qaysi biri Farg‘ona vodiysi bilan bog‘liq?",
        answers: ["Davan", "Misr", "Bobil", "Sparta"],
        correct: 0
    },

    {
        question: "Qadimgi O‘rta Osiyo tarixida Baqtriya qaysi hudud bilan bog‘liq?",
        answers: ["Amudaryoning yuqori va o‘rta oqimlari atrofi", "Nil deltasi", "Italiya yarimoroli", "Yunoniston orollari"],
        correct: 0
    },

    {
        question: "Qadimgi Rim qaysi yarimorolda joylashgan?",
        answers: ["Apennin yarimorolida", "Bolqon yarimorolida", "Arabiston yarimorolida", "Hindiston yarimorolida"],
        correct: 0
    },

    {
        question: "Rim shahri qaysi daryo bo‘yida vujudga kelgan?",
        answers: ["Tibr", "Nil", "Frot", "Gang"],
        correct: 0
    },

    {
        question: "Qadimgi Rim respublikasida muhim davlat organlaridan biri nima edi?",
        answers: ["Senat", "Satraplik", "Polis", "Zikkurat"],
        correct: 0
    },

    {
        question: "Rim qo‘shinidagi asosiy harbiy bo‘linmalardan biri qanday atalgan?",
        answers: ["Legion", "Polis", "Satrap", "Kasta"],
        correct: 0
    },

    {
        question: "Rim jamiyatida qullar qanday mavqega ega bo‘lgan?",
        answers: ["Erkin fuqarolar huquqlariga ega bo‘lmagan", "Senator bo‘lgan", "Imperator bo‘lgan", "Faqat savdogar bo‘lgan"],
        correct: 0
    },

    {
        question: "Gladiatorlar kimlar edi?",
        answers: ["Janglarda ishtirok etuvchi jangchilar", "Rim senatorlari", "Misr ruhoniylari", "Yunon faylasuflari"],
        correct: 0
    },

    {
        question: "Kolizey qadimgi Rimda nima uchun foydalanilgan?",
        answers: ["Tomosha va gladiator janglari uchun", "Faqat kutubxona sifatida", "Faqat ibodatxona sifatida", "Faqat saroy sifatida"],
        correct: 0
    },

    {
        question: "Yuliy Sezar kim bo‘lgan?",
        answers: ["Rim davlat arbobi va sarkardasi", "Misr fir’avni", "Bobil podshosi", "Yunon faylasufi"],
        correct: 0
    },

    {
        question: "G‘arbiy Rim imperiyasi qaysi yilda qulagan?",
        answers: ["Milodiy 476-yilda", "Miloddan avvalgi 476-yilda", "Milodiy 100-yilda", "Milodiy 1453-yilda"],
        correct: 0
    },

    {
        question: "Rim imperiyasining ikki qismga bo‘linishi qaysi hukmdor davri bilan bog‘liq?",
        answers: ["Feodosiy I", "Sezar", "Avgust", "Neron"],
        correct: 0
    },

    {
        question: "Qadimgi yunon faylasuflaridan biri kim?",
        answers: ["Suqrot", "Xammurapi", "Kanishka", "Doro I"],
        correct: 0
    },

    {
        question: "Aristotel kim bo‘lgan?",
        answers: ["Qadimgi yunon faylasufi va olimi", "Misr fir’avni", "Rim gladiatori", "Bobil podshosi"],
        correct: 0
    },

    {
        question: "Gippokrat qaysi fan bilan mashhur?",
        answers: ["Tibbiyot", "Astronomiya", "Geometriya", "Harbiy san’at"],
        correct: 0
    },

    {
        question: "Evklid qaysi fan rivojiga katta hissa qo‘shgan?",
        answers: ["Geometriya", "Tibbiyot", "Tarix", "Musiqa"],
        correct: 0
    },

    {
        question: "Arximed qaysi qadimgi yunon olimi edi?",
        answers: ["Matematik va fizik", "Tarixchi", "Fir’avn", "Rim senatori"],
        correct: 0
    },

    {
        question: "Qadimgi yunon mifologiyasida Zevs kim?",
        answers: ["Xudolar hukmdori", "Dengiz xudosi", "Urush xudosi", "Temirchilik xudosi"],
        correct: 0
    },

    {
        question: "Qadimgi Rim madaniyatiga qaysi til katta ta’sir ko‘rsatgan?",
        answers: ["Lotin tili", "Xitoy tili", "Sanskrit", "Misr tili"],
        correct: 0
    },

    {
        question: "Qadimgi tarixni o‘rganishda yozma manbalar nimani beradi?",
        answers: ["O‘tmish haqida yozilgan ma’lumotlarni", "Faqat suyaklarni", "Faqat tangalarni", "Faqat qurollarni"],
        correct: 0
    },

    {
        question: "Tarix fanining asosiy vazifalaridan biri nima?",
        answers: ["O‘tmish voqealarini o‘rganish va tushuntirish", "Faqat kelajakni bashorat qilish", "Faqat xarita chizish", "Faqat arxeologik qazishma qilish"],
        correct: 0
    },

    {
        question: "Qadimgi dunyo tarixi nimani o‘rganadi?",
        answers: ["Qadimgi davr xalqlari va davlatlari tarixini", "Faqat O‘zbekistonning XX asr tarixini", "Faqat zamonaviy siyosatni", "Faqat geografiyani"],
        correct: 0
    }

];


// =====================================================
// TEKSHIRUV
// =====================================================

// Brauzer konsolida savollar sonini tekshiradi.
// 100 bo‘lmasa, xabar chiqaradi.

console.log("Jami savollar:", questions.length);

if (questions.length !== 100) {
    console.warn(
        "DIQQAT: Savollar soni 100 emas!",
        questions.length
    );
}


// =====================================================
// O'ZGARUVCHILAR
// =====================================================

let currentQuestion = 0;

let score = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let answered = false;


// =====================================================
// ELEMENTLAR
// =====================================================

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const startBtn =
    document.getElementById("start-btn");

const nextBtn =
    document.getElementById("next-btn");

const restartBtn =
    document.getElementById("restart-btn");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const questionNumber =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const progressBar =
    document.getElementById("progress-bar");

const finalScore =
    document.getElementById("final-score");

const correctCount =
    document.getElementById("correct-count");

const wrongCount =
    document.getElementById("wrong-count");

const resultMessage =
    document.getElementById("result-message");

const totalQuestionInfo =
    document.getElementById("total-question-info");


// =====================================================
// SAVOLLAR SONINI HTMLGA YOZISH
// =====================================================

totalQuestionInfo.textContent =
    questions.length;


// =====================================================
// START
// =====================================================

startBtn.addEventListener(
    "click",
    startQuiz
);


function startQuiz() {

    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    answered = false;


    startScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );


    showQuestion();
}


// =====================================================
// SAVOLNI CHIQARISH
// =====================================================

function showQuestion() {

    answered = false;


    nextBtn.classList.add(
        "hidden"
    );


    const q =
        questions[currentQuestion];


    // SAVOL

    questionElement.textContent =
        q.question;


    // SAVOL RAQAMI

    questionNumber.textContent =
        `Savol ${currentQuestion + 1} / ${questions.length}`;


    // BALL

    scoreElement.textContent =
        `Ball: ${score}`;


    // PROGRESS

    const progress =
        ((currentQuestion + 1) /
        questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    // ESKI VARIANTLARNI O'CHIRISH

    answersElement.innerHTML = "";


    // YANGI VARIANTLAR

    q.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.innerHTML = `
                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span>
                    ${answer}
                </span>
            `;


            button.addEventListener(
                "click",
                () => {
                    selectAnswer(
                        index,
                        button
                    );
                }
            );


            answersElement.appendChild(
                button
            );
        }
    );
}


// =====================================================
// JAVOBNI TEKSHIRISH
// =====================================================

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    // Bir savolga ikki marta javob berishni bloklaydi

    if (answered) {
        return;
    }


    answered = true;


    const q =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    // TO'G'RI

    if (
        selectedIndex ===
        q.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );


        score++;

        correctAnswers++;

    }


    // NOTO'G'RI

    else {

        selectedButton.classList.add(
            "wrong"
        );


        wrongAnswers++;


        // To'g'ri javobni ko'rsatish

        buttons[
            q.correct
        ].classList.add(
            "correct"
        );
    }


    scoreElement.textContent =
        `Ball: ${score}`;


    nextBtn.classList.remove(
        "hidden"
    );
}


// =====================================================
// KEYINGI SAVOL
// =====================================================

nextBtn.addEventListener(
    "click",
    nextQuestion
);


function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        showQuestion();

    }

    else {

        showResult();

    }
}


// =====================================================
// NATIJA
// =====================================================

function showResult() {

    quizScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );


    progressBar.style.width =
        "100%";


    finalScore.textContent =
        score;


    correctCount.textContent =
        correctAnswers;


    wrongCount.textContent =
        wrongAnswers;


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    if (percentage === 100) {

        resultMessage.textContent =
            "🔥 Ajoyib! Barcha 100 ta savolga to‘g‘ri javob berdingiz!";

    }

    else if (percentage >= 90) {

        resultMessage.textContent =
            "🏆 Juda ajoyib natija! Tarix bilimlaringiz kuchli.";

    }

    else if (percentage >= 80) {

        resultMessage.textContent =
            "👏 Juda yaxshi! Bilimlaringiz yaxshi shakllangan.";

    }

    else if (percentage >= 70) {

        resultMessage.textContent =
            "👍 Yaxshi natija! Yana biroz takrorlash foydali.";

    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "📚 Yaxshi harakat! Ayrim mavzularni qayta ko‘rib chiqing.";

    }

    else if (percentage >= 50) {

        resultMessage.textContent =
            "💪 Yana bir marta urinib ko‘ring!";

    }

    else {

        resultMessage.textContent =
            "📖 Darslikni takrorlab, yana quizni ishlab ko‘ring!";
    }
}


// =====================================================
// QAYTA BOSHLASH
// =====================================================

restartBtn.addEventListener(
    "click",
    startQuiz
);