const headerContainer = document.querySelector('#header')
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')

const allQuizzesData = {
	1: [
		{
			question: 'Operatsion tizim nima?',
			answers: [
				'Foydalanuvchi yaratgan hujjat turi ',
				'Kompyuterning tashqi qurilmasi ',
				"Kompyuter resurslarini boshqaruvchi dasturiy ta'minot",
				'Kompyuterning apparat qismi ',
			],
			correct: 3,
		},
		{
			question: 'Operatsion tizimlarning asosiy vazifasi nima?',
			answers: [
				'Faqat dasturlarni o‘rnatish ',
				'Faqat foydalanuvchi interfeysini taqdim etish',
				'Kompyuter resurslarini boshqarish va dasturlarni bajarish ',
				'Internetga ulanishni ta’minlash ',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri operatsion tizim emas?',
			answers: ['Windows ', 'Linux ', 'Android ', 'Microsoft Office '],
			correct: 4,
		},
		{
			question: 'Operatsion tizimlarning turlari qaysilar?',
			answers: [
				'Tikuv mashinasi, printer, skaner',
				'Windows, Linux, MacOS, Android ',
				'Word, Excel, PowerPoint ',
				'BIOS, POST, CMOS ',
			],
			correct: 2,
		},
		{
			question: 'Ko‘p vazifali (multitasking) operatsion tizim nimani anglatadi?',
			answers: [
				'Bitta dastur ishlaydi',
				'Faqat bitta foydalanuvchi ishlaydi',
				'Bir vaqtning o‘zida bir nechta dasturlar bajarilishi mumkin ',
				'Tizimda hech qanday dastur ishlamaydi ',
			],
			correct: 3,
		},
		{
			question: 'Windows operatsion tizimi kim tomonidan ishlab chiqilgan?',
			answers: ['Apple ', 'IBM ', 'Microsoft', 'Google '],
			correct: 3,
		},
		{
			question: "Qanday interfeyslar operatsion tizimda mavjud bo'lishi mumkin?",
			answers: ['Faqat matnli ', 'Faqat grafik ', 'Matnli va grafik ', 'Faqat tovushli '],
			correct: 3,
		},
		{
			question: 'Operatsion tizimning yadrosi (kernel) nima?',
			answers: [
				'Klaviatura tarkibi ',
				'Foydalanuvchi interfeysi ',
				'Tizimning eng asosiy va markaziy qismi',
				'Fayllarni saqlovchi dastur',
			],
			correct: 3,
		},
		{
			question: 'Kompyuter yoqilganda operatsion tizim qayerdan yuklanadi?',
			answers: ['Monitor ', 'RAM', 'Qattiq disk (HDD yoki SSD)', 'Protsessor '],
			correct: 3,
		},
		{
			question: 'Android qanday operatsion tizim turiga kiradi?',
			answers: [
				'Mobil operatsion tizim',
				'Server operatsion tizim',
				'Tarmoq operatsion tizim ',
				'Ish stoli operatsion tizim ',
			],
			correct: 1,
		},
	],
	2: [
		{
			question: 'Operatsion tizim arxitekturasi nima?',
			answers: [
				'Kompyuterning elektr sxemalari majmuasi ',
				'Operatsion tizimda qo‘llaniladigan grafik dizayn ',
				'OTning ichki tuzilmasi va komponentlarining o‘zaro ishlash usuli ',
				'Foydalanuvchi yaratgan papkalar tuzilmasi ',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri monolitik arxitektura xususiyatidir?',
			answers: [
				'Modullar alohida ishlaydi ',
				'Har bir modul o‘z yadrosiga ega ',
				'Barcha tizim funksiyalari bitta katta modulda birlashtirilgan ',
				'Foydalanuvchi interfeysi yo‘q ',
			],
			correct: 3,
		},
		{
			question: 'Mikroyadro (Microkernel) arxitekturasining asosiy afzalligi nima?',
			answers: [
				'Katta hajmda bo‘ladi',
				'Faqat grafik interfeysda ishlaydi ',
				'Tizimning barqarorligi va xavfsizligi yuqori bo‘ladi',
				'Faqat Windowsda qo‘llaniladi ',
			],
			correct: 3,
		},
		{
			question:
				'Qanday arxitektura yadro va foydalanuvchi darajasidagi xizmatlarni qat’iy ajratadi?',
			answers: ['Monolitik ', 'Mikroyadro ', 'Gibrid ', 'Foydalanuvchi interfeysi '],
			correct: 2,
		},
		{
			question: 'Gibrid arxitektura qanday arxitekturalar elementlarini birlashtiradi?',
			answers: [
				'Tarmoq va grafik interfeys ',
				'BIOS va POST ',
				'Monolitik va mikroyadro ',
				'Klaviatura va sichqoncha ',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri modulli arxitektura afzalligidir?',
			answers: [
				'Tizimni o‘zgartirish yoki kengaytirish oson ',
				'Barcha komponentlar bitta faylda bo‘ladi ',
				'Foydalanuvchi komponentlarni ko‘ra olmaydi ',
				'Har doim onlayn ishlaydi ',
			],
			correct: 1,
		},
		{
			question: 'Monolitik yadroda tizim chaqiriqlari qanday bajariladi?',
			answers: [
				'Tizim tashqarisidagi kutubxonalar orqali',
				'Faqat tarmoq orqali ',
				'Yadro ichidagi kod orqali to‘g‘ridan-to‘g‘ri',
				'Fayl tizimi orqali ',
			],
			correct: 3,
		},
		{
			question:
				'Mikroyadro arxitekturasi odatda qanday komponentlarni tashqi xizmatlarga chiqaradi?',
			answers: [
				'Qurilmalar drayverlari, fayl tizimi, tarmoq protokollari ',
				'Ekran o‘lchami va fon rasmi ',
				'Faqat RAM va CPU boshqaruvi ',
				'BIOS funksiyalari ',
			],
			correct: 1,
		},
		{
			question: 'Quyidagilardan qaysi biri operatsion tizim arxitekturalariga kirmaydi?',
			answers: ['Monolitik', 'Mikroyadro ', 'Gibrid', 'Elektromexanik '],
			correct: 4,
		},
		{
			question: 'Linux operatsion tizimi qaysi arxitektura asosida qurilgan?',
			answers: ['Mikroyadro ', 'Gibrid ', 'Monolitik (modulli yadroga ega)', 'Virtual mashina '],
			correct: 3,
		},
	],
	3: [
		{
			question: 'Operatsion tizimning qurilmalarni boshqarishdagi asosiy vazifasi nima?',
			answers: [
				'Qurilmalarning o‘zaro grafik aloqasini ta’minlash',
				'Har bir qurilmaga to‘g‘ridan-to‘g‘ri foydalanuvchi murojaatini ta’minlash',
				'Qurilmalar va dasturlar o‘rtasida vositachilik qilish, qurilmalarga kirish huquqini boshqarish',
				'Qurilmalarni faqat o‘chirib-yoqish uchun xizmat qilish',
			],
			correct: 3,
		},
		{
			question:
				'Quyidagi qurilmalardan qaysi biri operatsion tizim tomonidan kiritish qurilmasi sifatida boshqariladi?',
			answers: ['Printer', 'Klaviatura', 'Monitor', 'Kvitansiya'],
			correct: 2,
		},
		{
			question:
				'Qurilmalarga murojaat qilishda operatsion tizim qanday dasturiy interfeysdan foydalanadi?',
			answers: ['BIOS', 'Antivirus', 'Drayverlar (moslamalar dasturi)', 'Word dasturi'],
			correct: 3,
		},
		{
			question:
				'Operatsion tizimlar kompyuter qurilmalarini boshqarishda qanday usuldan foydalanadi?',
			answers: [
				'Foydalanuvchidan ruxsat so‘rash orqali',
				'Qurilmani doimiy ravishda yoqib-o‘chirish orqali',
				'Har bir qurilma uchun drayverlar yordamida',
				'Faqatgina Internet orqali',
			],
			correct: 3,
		},
		{
			question:
				'Quyidagilardan qaysi biri operatsion tizim tomonidan chiqish qurilmasi sifatida boshqariladi?',
			answers: ['Sichqoncha', 'Mikrafon', 'Monitor', 'Klaviatura'],
			correct: 3,
		},
		{
			question: 'Operatsion tizim drayver dasturlaridan qanday maqsadda foydalanadi?',
			answers: [
				'Qurilmani buzish uchun',
				'Qurilmaning dasturiy ta’minotini yangilash uchun',
				'Qurilmalar bilan to‘g‘ri aloqa qilish va ularni boshqarish uchun',
				'Foydalanuvchini ro‘yxatdan o‘tkazish uchun',
			],
			correct: 3,
		},
		{
			question: 'Qaysi qatlam orqali foydalanuvchi qurilma bilan bilvosita aloqa qiladi?',
			answers: ['Internet', 'Dasturiy ta’minot', 'Operatsion tizim', 'Apparat darajasi'],
			correct: 3,
		},
		{
			question: 'Operatsion tizim printerga ma’lumot yuborishda qanday vazifani bajaradi?',
			answers: [
				'Tasodifiy fayllarni chiqaradi',
				'Ma’lumotlarni navbatga (queue) qo‘yib, uzluksiz chop etishni ta’minlaydi',
				'Faqatgina chop etishni to‘xtatadi',
				'Printerni faqat yoqib-o‘chiradi',
			],
			correct: 2,
		},
		{
			question:
				'Operatsion tizim qurilmalarga tezlik, holat va ishlash darajasiga qarab qanday xizmat ko‘rsatadi?',
			answers: [
				'Tasodifiy tanlash orqali',
				'Protsessor orqali ulanish',
				'Resurslarni taqsimlab, mos ravishda boshqarish',
				'Diskni formatlash orqali',
			],
			correct: 3,
		},
		{
			question:
				'Agar kompyuterda drayver o‘rnatilmagan bo‘lsa, operatsion tizimning holati qanday bo‘ladi?',
			answers: [
				'Qurilma avtomatik ishlayveradi',
				'Qurilma tanilmaydi yoki noto‘g‘ri ishlaydi',
				'Qurilma virusli bo‘ladi',
				'Operatsion tizim o‘chadi',
			],
			correct: 2,
		},
	],
	4: [
		{
			question:
				'Quyidagilardan qaysi biri bir foydalanuvchili operatsion tizimga misol bo‘la oladi?',
			answers: ['UNIX', 'Windows 10', 'MS-DOS', 'Linux'],
			correct: 3,
		},
		{
			question:
				'Bir vaqtning o‘zida bir nechta vazifalarni bajara oladigan operatsion tizim qanday nomlanadi?',
			answers: [
				'Bir foydalanuvchili tizim',
				'Ko‘p foydalanuvchili tizim',
				'Ko‘p vazifali tizim',
				'Real vaqtli tizim',
			],
			correct: 3,
		},
		{
			question: 'Real vaqtli operatsion tizimlar (RTOS) qayerda qo‘llaniladi?',
			answers: [
				'Ofis kompyuterlarida',
				'Mobil telefonlarda',
				'Dasturlash o‘quv kurslarida',
				'Avtomatlashtirilgan sanoat va tibbiy qurilmalarda',
			],
			correct: 4,
		},
		{
			question: 'Ko‘p foydalanuvchili operatsion tizimning asosiy afzalligi nimada?',
			answers: [
				'Tez yuklanadi',
				'Bitta foydalanuvchiga mo‘ljallangan',
				'Bir nechta foydalanuvchi bir vaqtning o‘zida tizimdan foydalanishi mumkin',
				'Grafik interfeysga ega emas',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri ko‘p vazifali operatsion tizim hisoblanadi?',
			answers: ['MS-DOS', 'Windows 10', 'BIOS', 'Norton Commander'],
			correct: 2,
		},
		{
			question: 'Mobil qurilmalarda ishlatiladigan operatsion tizimni aniqlang:',
			answers: ['Ubuntu', 'Android', 'Windows XP', 'MacOS'],
			correct: 2,
		},
		{
			question: 'Ko‘p foydalanuvchili tizimlarda foydalanuvchilarning ishini qanday boshqaradi?',
			answers: [
				'Faqat bitta foydalanuvchiga xizmat ko‘rsatadi',
				'Navbat asosida resurslarni taqsimlaydi',
				'Hech qanday boshqaruvsiz ishlaydi',
				'Tizimni o‘chiradi',
			],
			correct: 2,
		},
		{
			question: 'Quyidagi operatsion tizimlardan qaysi biri serverlar uchun moslashtirilgan?',
			answers: ['Windows XP', 'Android', 'Windows Server', 'MacOS'],
			correct: 3,
		},
		{
			question: 'Tarmoq operatsion tizimi qanday vazifani bajaradi?',
			answers: [
				'Faqat printer bilan ishlaydi',
				'Kompyuter o‘yinlarini ishga tushiradi',
				'Kompyuterlar o‘rtasidagi tarmoqni boshqaradi va ma’lumotlar almashinuvini ta’minlaydi',
				'Antivirus dasturini ishga tushiradi',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri ochiq kodli (open source) operatsion tizim hisoblanadi?',
			answers: ['Windows 11', 'Linux', 'macOS', 'iOS'],
			correct: 2,
		},
	],
	5: [
		{
			question: 'O‘rnatilgan tizim (embedded system) nima?',
			answers: [
				'Faqat Internetda ishlaydigan tizim',
				'Kompyuter o‘yinlariga mo‘ljallangan tizim',
				'Maxsus vazifani bajaradigan, apparat va dasturiy ta’minotdan tashkil topgan tizim',
				'Foydalanuvchiga interfeys beradigan ko‘p funksiyali kompyuter',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri o‘rnatilgan tizimga misol bo‘la oladi?',
			answers: ['Laptop', 'Server', 'Mikroto‘lqinli pechdagi nazorat moduli', 'Smartfon'],
			correct: 3,
		},
		{
			question: 'O‘rnatilgan tizimlar uchun operatsion tizimlar qanday bo‘ladi?',
			answers: [
				'Odatda umumiy maqsadli va murakkab',
				'Juda katta xotiraga ega',
				'Engil, real vaqtli va optimallashtirilgan',
				'Faqatgina Windows asosida ishlaydi',
			],
			correct: 3,
		},
		{
			question: 'Quyidagi tizimlardan qaysi biri real vaqtli o‘rnatilgan tizim hisoblanadi?',
			answers: [
				'Word muharriri',
				'Avtomobilning ABS tormoz tizimi',
				'Kompyuterda video o‘yin',
				'Tarmoq printeri',
			],
			correct: 2,
		},
		{
			question: 'O‘rnatilgan tizimlar quyidagilardan qaysi sohalarda keng qo‘llaniladi?',
			answers: [
				'Faqat axborot texnologiyalarida',
				'Faqat o‘yin sanoatida',
				'Sanoat, tibbiyot, transport, uy jihozlarida',
				'Faqat maktablarda',
			],
			correct: 3,
		},
		{
			question: 'O‘rnatilgan tizimlar asosan qanday vazifani bajaradi?',
			answers: [
				'Har xil vazifalarni umumiy holda bajaradi',
				'Maxsus, oldindan belgilangan bitta yoki bir nechta aniq vazifani bajaradi',
				'Dastur o‘rnatish uchun xizmat qiladi',
				'Matn muharririda ishlash uchun',
			],
			correct: 2,
		},
		{
			question: 'O‘rnatilgan tizimning asosiy tarkibiy qismlariga nimalar kiradi?',
			answers: [
				'Faqat sensor',
				'Asosiy kompyuter va printer',
				'Mikrokontroller yoki mikroprotsessor, xotira, dasturiy ta’minot',
				'Internet va telefon aloqasi',
			],
			correct: 3,
		},
		{
			question: 'Qanday o‘rnatilgan tizimlar real vaqtli deb ataladi?',
			answers: [
				'O‘zgarishga javob bermaydigan tizimlar',
				'Faoliyatini istalgan vaqtda o‘zgartiradigan tizimlar',
				'Vaqtga sezgir bo‘lib, natijani aniq vaqtda taqdim etishi kerak bo‘lgan tizimlar',
				'Ko‘p foydalanuvchili tizimlar',
			],
			correct: 3,
		},
		{
			question: 'O‘rnatilgan tizimlarning afzalliklaridan biri nima?',
			answers: [
				'Narxi yuqori bo‘ladi',
				'Har doim umumiy operatsion tizimdan foydalanadi',
				'Tez ishlashi va energiya tejamkorligi',
				'Har doim alohida monitor bilan ishlaydi',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri o‘rnatilgan operatsion tizimga misol bo‘la oladi?',
			answers: ['Android', 'Windows 11', 'FreeRTOS', 'Ubuntu'],
			correct: 3,
		},
	],
	6: [
		{
			question: 'O‘rnatilgan dasturiy ta’minot nima?',
			answers: [
				'Kompyuter o‘yinlarining kodi',
				'Mobil ilovalarni ishlab chiqish muhiti',
				'Maxsus qurilmalarda ishlaydigan, apparatni boshqarishga mo‘ljallangan dasturiy ta’minot',
				'Internetda ishlaydigan veb-saytlar kodi',
			],
			correct: 3,
		},
		{
			question: 'O‘rnatilgan dasturiy ta’minot qayerda saqlanadi?',
			answers: [
				'Qattiq diskda',
				'Bulutli xotirada',
				'Mikrokontrollerning ichki xotirasida (ROM yoki Flash)',
				'SSD diskda',
			],
			correct: 3,
		},
		{
			question: 'O‘rnatilgan dasturiy ta’minot qanday dasturlash tillarida yoziladi?',
			answers: ['HTML va CSS', 'JavaScript va PHP', 'C, C++, Assembly', 'Python va Ruby'],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri o‘rnatilgan dasturiy ta’minotga misol bo‘la oladi?',
			answers: ['MS Word', 'Mikrodatchikni boshqaruvchi mikrokod', 'Photoshop', 'Google Chrome'],
			correct: 2,
		},
		{
			question: 'O‘rnatilgan dasturiy ta’minot qanday tizimlarda ishlaydi?',
			answers: [
				'Faqat noutbuklarda',
				'O‘yin kompyuterlarida',
				'O‘rnatilgan apparat qurilmalarida (masalan, datchiklar, mashinalar, uy jihozlari)',
				'Faqat internet orqali ishlaydigan qurilmalarda',
			],
			correct: 3,
		},
		{
			question: 'O‘rnatilgan dasturiy ta’minotning asosiy vazifasi nima?',
			answers: [
				'Foydalanuvchiga interfeys berish',
				'Qurilmani grafik jihatdan sozlash',
				'Qurilmaning apparat qismlarini boshqarish',
				'Internet orqali aloqa qilish',
			],
			correct: 3,
		},
		{
			question:
				'O‘rnatilgan dasturiy ta’minot bilan ishlashda odatda qanday muhitlardan foydalaniladi?',
			answers: [
				'Web-brauzerlar',
				'IDE va kompilyatorlar (masalan, MPLAB, Keil, Arduino IDE)',
				'Veb-serverlar',
				'Matn muharrirlari (WordPad)',
			],
			correct: 2,
		},
		{
			question:
				'O‘rnatilgan tizimlarda ishlatiladigan kod qanday xususiyatlarga ega bo‘lishi kerak?',
			answers: [
				'Grafikali va hajmli bo‘lishi',
				'Juda ko‘p xotira talab qilishi',
				'Ixcham, tezkor va resursni kam ishlatadigan bo‘lishi',
				'Har doim foydalanuvchi interfeysiga ega bo‘lishi',
			],
			correct: 3,
		},
		{
			question: 'O‘rnatilgan dasturiy ta’minot qanday operatsion tizimsiz ishlashi mumkin?',
			answers: [
				'Tarmoq orqali',
				'Asosiy kompyuter orqali',
				'Bare-metal rejimda, ya’ni to‘g‘ridan-to‘g‘ri apparat bilan ishlovchi holatda',
				'Virtual mashinada',
			],
			correct: 3,
		},
		{
			question:
				'Quyidagilardan qaysi biri o‘rnatilgan dasturiy ta’minotga ega qurilma hisoblanadi?',
			answers: [
				'Mikrokontrollerli kir yuvish mashinasi',
				'Faqat monitor',
				'Qog‘oz daftar',
				'CD-disk',
			],
			correct: 1,
		},
	],
	7: [
		{
			question: 'Buyruqli terminal interfeysining asosiy vazifasi nima?',
			answers: [
				'Grafikali oynalar yaratish',
				'Kompyuter o‘yinlarini ishga tushirish',
				'Matnli buyruqlar orqali operatsion tizimni boshqarish',
				'Faqat tarmoq sozlamalarini o‘zgartirish',
			],
			correct: 3,
		},
		{
			question: 'Linux tizimida ishlatiladigan mashhur buyruqli terminal qanday nomlanadi?',
			answers: ['CMD', 'Bash', 'Finder', 'Explorer'],
			correct: 2,
		},
		{
			question: 'Windows operatsion tizimida standart buyruqli terminal nima?',
			answers: ['Linux shell', 'Terminal', 'CMD (Command Prompt)', 'Notepad'],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri terminalga yoziladigan buyruq emas?',
			answers: ['cd', 'dir', 'paint', 'ls'],
			correct: 3,
		},
		{
			question: '"cd" buyrug‘i nimani anglatadi?',
			answers: [
				'Fayl nusxasini olish',
				'Katalog yaratish',
				'Joriy ishchi katalogni o‘zgartirish',
				'Kompyuterni o‘chirish',
			],
			correct: 3,
		},
		{
			question: '"mkdir" buyrug‘i nima uchun ishlatiladi?',
			answers: [
				'Faylni o‘chirish',
				'Yangi papka (katalog) yaratish',
				'Kompyuterni ishga tushurish',
				'Internetga ulanish',
			],
			correct: 2,
		},
		{
			question: 'Terminalda “dir” buyrug‘i nima qiladi? (Windows)',
			answers: [
				'Dastur o‘rnatadi',
				'Foydalanuvchini o‘zgartiradi',
				'Joriy katalogdagi fayl va papkalarni ko‘rsatadi',
				'Tizimni tiklaydi',
			],
			correct: 3,
		},
		{
			question: 'Linuxda faylni o‘chirish buyrug‘i qanday yoziladi?',
			answers: ['delete', 'erase', 'del', 'rm'],
			correct: 4,
		},
		{
			question: 'Buyruqli terminal interfeysining afzalligi nimada?',
			answers: [
				'Har doim grafik interfeys talab qiladi',
				'Oddiy foydalanuvchilar uchun mo‘ljallangan',
				'Resursni kam iste’mol qiladi va tez ishlaydi',
				'Faqat matn tahriri uchun ishlatiladi',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri buyruqli terminal orqali bajarilmaydi?',
			answers: [
				'Fayllarni ko‘rish',
				'Papka yaratish',
				'Internet sahifani vizual ko‘rish',
				'Tizim resurslarini boshqarish',
			],
			correct: 3,
		},
	],
	8: [
		{
			question: 'Jarayon (Process) deganda nima tushuniladi?',
			answers: [
				'Operatsion tizimning grafik interfeysi',
				'Operatsion tizimda fon rasmi',
				'Ishlayotgan dastur yoki uning nusxasi',
				'Kompyuterning energiya manbai',
			],
			correct: 3,
		},
		{
			question: 'Oqim (Threanima?',
			answers: [
				'Internetga ulanish yo‘li',
				'Jarayon ichida mustaqil ishlovchi bajariluvchi kod bo‘lagi',
				'Monitorning ishlash tartibi',
				'Faylning joylashuvi',
			],
			correct: 2,
		},
		{
			question: 'Bir jarayonda nechta oqim bo‘lishi mumkin?',
			answers: [
				'Faqat bitta',
				'Ikkita',
				'Chegaralangan son',
				'Bir nechta (ko‘p oqimli bo‘lishi mumkin)',
			],
			correct: 4,
		},
		{
			question: 'Quyidagilardan qaysi biri ko‘p oqimli ishlashning afzalligi hisoblanadi?',
			answers: [
				'Resurslardan ko‘proq foydalanish',
				'Xotirani ko‘proq egallash',
				'Parallel ishlov berish imkoniyati va samaradorlik oshishi',
				'Kompyuter isishini kamaytirish',
			],
			correct: 3,
		},
		{
			question: 'Jarayonlar orasidagi asosiy farqlovchi belgi nima?',
			answers: [
				'Ular umumiy interfeysga ega',
				'Har biri o‘zining xotira hududiga ega',
				'Faqat grafik interfeysga ega',
				'Barchasi bir xotiradan foydalanadi',
			],
			correct: 2,
		},
		{
			question: 'Oqimlar qanday xotiralarni bo‘lishadi?',
			answers: [
				'Faqat registrlar',
				'Har biri alohida xotiraga ega',
				'Umumiy kod, ma’lumotlar, ochiq fayllar va stekdan foydalanadi', // Original answer had a typo, corrected "stakedan" to "stekdan" based on common CS terminology. If the typo was intentional, please let me know.
				'Faqat ko‘rish huquqiga ega',
			],
			correct: 3,
		},
		{
			question: 'Ko‘p jarayonli tizimning kamchiligi nima bo‘lishi mumkin?',
			answers: [
				'Kompyuter sovuq ishlaydi',
				'Ma’lumotlar xavfsizligi ortadi',
				'Resurslar taqsimotida to‘qnashuvlar va ortiqcha yuklanish',
				'Oqimlar soni ortadi',
			],
			correct: 3,
		},
		{
			question: 'Bir jarayon ichidagi oqimlar o‘zaro qanday aloqa qiladi?',
			answers: [
				'Faqat elektron pochta orqali',
				'Faqat operatsion tizim ruxsati bilan',
				'Ular umumiy resurslar orqali tez va samarali muloqotda bo‘ladi',
				'Muloqot qilmaydi',
			],
			correct: 3,
		},
		{
			question: '"Multithreading" deganda nima tushuniladi?',
			answers: [
				'Bitta dasturda faqat bitta vazifani bajarish',
				'Bir nechta kompyuterda bir xil dasturni ishlatish',
				'Bir jarayonda bir nechta oqimni bir vaqtda ishlatish',
				'Operatsion tizimni o‘rnatish',
			],
			correct: 3,
		},
		{
			question:
				'Quyidagilardan qaysi biri oqimlarni yaratish uchun kerak bo‘ladigan misol vosita hisoblanadi?',
			answers: [
				'HTML',
				'Microsoft Paint',
				'C++ va Java tilidagi threading kutubxonalari',
				'Microsoft Excel',
			],
			correct: 3,
		},
	],
	9: [
		{
			question: 'Jarayon nima?',
			answers: [
				'Matn muharriri',
				'Kompyuterning apparat qurilmasi',
				'Ishlayotgan dastur holati (faoliyatdagi dastur)',
				'Faqat diskda saqlanadigan fayl',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri jarayon holatlari sirasiga kirmaydi?',
			answers: ['Ready', 'Printing', 'Running', 'Waiting'],
			correct: 2,
		},
		{
			question: '“Ready” holatidagi jarayon nimani bildiradi?',
			answers: [
				'Yangi yaratilgan',
				'Ishlayotgan',
				'Ishlashga tayyor, lekin protsessorga hali o‘tmagan',
				'Yakunlangan',
			],
			correct: 3,
		},
		{
			question: 'Jarayon qachon “Waiting” holatiga o‘tadi?',
			answers: [
				'Protsessor bo‘sh bo‘lganda',
				'Tizimdan chiqmoqchi bo‘lganda',
				'Resurs (masalan, fayl yoki qurilmkutayotganida',
				'Operativ xotira to‘ldirilganida',
			],
			correct: 3,
		},
		{
			question: '“Running” holatidagi jarayon qanday holatga o‘tishi mumkin?',
			answers: ['Faqat “Terminated”', 'Faqat “Ready”', '“Waiting” yoki “Ready” holatiga', '“New”'],
			correct: 3,
		},
		{
			question: 'Operatsion tizim jarayonlar holatini qayerda saqlaydi?',
			answers: [
				'RAMda tasodifiy',
				'Jarayon jadvalida (Process Control Block – PCB)',
				'Faqat registrlarda',
				'Diskda saqlanadigan log fayllarda',
			],
			correct: 2,
		},
		{
			question: 'CPU scheduling (jarayonlarni navbatga qo‘yish) asosiy vazifasi nima?',
			answers: [
				'Operativ xotirani formatlash',
				'Faqat grafik interfeysni boshqarish',
				'Har bir jarayonga protsessor vaqtini ajratish',
				'Faqat qattiq diskni tozalash',
			],
			correct: 3,
		},
		{
			question: 'Jarayonni boshqa jarayonga o‘tishida qanday signal ishlatiladi?',
			answers: ['GUI', 'Timer interrupt (vaqt signal uzilishi)', 'File transfer', 'Keyboard input'],
			correct: 2,
		},
		{
			question:
				'Bir nechta jarayonlar bir vaqtning o‘zida protsessorda ishlayotgandek ko‘rinadi. Bu qanday holat?',
			answers: [
				'Sekin ish rejimi',
				'Multiprocessing (ko‘p protsessorli)',
				'Multitasking (ko‘p vazifali ishlash)',
				'Single-user rejimi',
			],
			correct: 3,
		},
		{
			question: 'Jarayonning yakunlanishi qanday holat bilan belgilanadi?',
			answers: ['Ready', 'Running', 'Waiting', 'Terminated'],
			correct: 4,
		},
	],
	10: [
		{
			question: 'Operatsion tizimda xotirani boshqarishning asosiy vazifasi nima?',
			answers: [
				'Foydalanuvchi interfeysini ta’minlash',
				'Fayllarni saqlash',
				'Protsessorni boshqarish',
				'Xotira resurslarini samarali taqsimlash',
			],
			correct: 4,
		},
		{
			question: 'Quyidagilardan qaysi biri xotirani boshqarish usullaridan biri hisoblanadi?',
			answers: ['Virtual xotira', 'Multitasking', 'Kernel rejimi', 'Boot sektori'],
			correct: 1,
		},
		{
			question: 'Segmentlash usulining asosiy afzalligi nima?',
			answers: [
				'Fayl tizimini tezlashtiradi',
				'Dasturlarni modul tarzida tashkil etishga imkon beradi',
				'CPU ishlashini tezlashtiradi',
				'Diskni formatlaydi',
			],
			correct: 2,
		},
		{
			question: 'Paging (sahifalash) texnologiyasida sahifa o‘lchami odatda qancha bo‘ladi?',
			answers: ['1 bit', '1 KB', '4 KB', '1 MB'],
			correct: 3,
		},
		{
			question: 'Virtual xotiraning vazifasi nimadan iborat?',
			answers: [
				'Faqatgina diskni tozalash',
				'Fizik xotira hajmini oshirish',
				'Dasturlarni zaxiralash',
				'Qo‘shimcha protsessor ishini ta’minlash',
			],
			correct: 2,
		},
		{
			question: 'Tashqi fragmentatsiya qaysi usulda ko‘proq uchraydi?',
			answers: ['Sahifalashda', 'Segmentlashda', 'Virtual xotirada', 'Multitaskingda'],
			correct: 2,
		},
		{
			question: 'Xotira ajratishning birinchi mos (First Fit) usulida nima qilinadi?',
			answers: [
				'Eng kichik bo‘sh joyga joylashtiriladi',
				'Eng katta bo‘sh joyga joylashtiriladi',
				'Eng birinchi mos keladigan bo‘sh joyga joylashtiriladi',
				'Faqatgina yangi xotira yaratiladi',
			],
			correct: 3,
		},
		{
			question: 'Swap faylining asosiy vazifasi nima?',
			answers: [
				'Diskni zaxiralash',
				'Fayllarni arxivlash',
				"Xotira ortiqcha yuklanganida ma'lumotni vaqtincha diskda saqlash",
				'Operatsion tizimni yangilash',
			],
			correct: 3,
		},
		{
			question: 'Fizik xotira nima?',
			answers: [
				'Vaqtincha saqlovchi disk',
				'Kompyuterning doimiy saqlovchi qismi',
				'Operativ tezkor xotira (RAM)',
				'BIOS dasturining qismi',
			],
			correct: 3,
		},
		{
			question: 'Xotirani ajratish va qayta birlashtirish jarayoniga nima deyiladi?',
			answers: ['Segmentatsiya', 'Fragmentatsiya', 'Kompaktlash', 'Konsolidatsiya'],
			correct: 4,
		},
	],
	11: [
		{
			question: 'Fayl tizimining asosiy vazifasi nima?',
			answers: [
				'Protsessorni boshqarish',
				'Operativ xotirani boshqarish',
				'Ma’lumotlarni diskda saqlash va ularga kirishni ta’minlash',
				'Tarmoq aloqalarini o‘rnatish',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri fayl tizimi turi hisoblanadi?',
			answers: ['HTTP', 'FAT32', 'XML', 'DNS'],
			correct: 2,
		},
		{
			question: 'NTFS fayl tizimining FAT32 ga nisbatan asosiy ustunligi nima?',
			answers: [
				'Unda fayllar kichik hajmda bo‘ladi',
				'U Linuxda ishlaydi',
				'Katta hajmdagi fayllarni qo‘llab-quvvatlaydi va xavfsizlik mexanizmlariga ega',
				'Faqat SSD disklarda ishlaydi',
			],
			correct: 3,
		},
		{
			question: 'Faylga oid atributlar nimani ifodalaydi?',
			answers: [
				'Faylning joylashgan joyini',
				'Faylning o‘lchamini',
				'Faylga oid qo‘shimcha ma’lumotlarni (masalan, faollik, faqat o‘qish, yashirin)',
				'Fayl tarkibini',
			],
			correct: 3,
		},
		{
			question: 'Fayl tizimida katalog (directory) nima vazifani bajaradi?',
			answers: [
				'Fayllarni siqib saqlaydi',
				'Fayllarni tarmoq orqali yuboradi',
				'Fayllarni tartibga soladi va guruhlaydi',
				'Fayllarni avtomatik ishga tushiradi',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri fayl tizimi ishonchliligini oshirish usuli hisoblanadi?',
			answers: [
				'Fayl nomlarini qisqartirish',
				'Formatlashni tez-tez amalga oshirish',
				'Zaxira nusxa olish (backup)',
				'Fayl o‘lchamini kamaytirish',
			],
			correct: 3,
		},
		{
			question: 'Ext4 fayl tizimi qaysi operatsion tizimda keng qo‘llaniladi?',
			answers: ['Windows', 'Linux', 'macOS', 'Android'],
			correct: 2,
		},
		{
			question: 'Fayl tizimidagi fragmentatsiya nimani anglatadi?',
			answers: [
				'Fayllarning bir joyda saqlanishi',
				'Fayllarning diskda bo‘laklarga ajrab, tarqoq joylashuvi',
				'Fayllarning o‘chirilishi',
				'Fayllarni siqish',
			],
			correct: 2,
		},
		{
			question: 'Quyidagilardan qaysi biri fayl xavfsizligini ta’minlashga yordam beradi?',
			answers: [
				'Formatlash',
				'Foydalanuvchi ruxsatlarini belgilash',
				'Fayl nomlarini o‘zgartirish',
				'Fayllarni yashirish',
			],
			correct: 2,
		},
		{
			question: 'Fayl tizimining strukturasi qanday tarkibiy qismlardan iborat bo‘ladi?',
			answers: [
				'Kernel, shell, GUI',
				'Boot sector, FAT jadvali, kataloglar, fayllar',
				'RAM, ROM, CPU',
				'Protokollar, portlar, socketlar',
			],
			correct: 2,
		},
	],
	12: [
		{
			question: 'Bulutli hisoblash (Cloud Computing) deganda nimani tushunasiz?',
			answers: [
				'Faqat tarmoq qurilmalarini sozlash',
				'Foydalanuvchining kompyuterida ishlaydigan ilovalar',
				'Internet orqali IT resurslaridan xizmat ko‘rinishida foydalanish',
				'Operatsion tizimni yangilash usuli',
			],
			correct: 3,
		},
		{
			question: 'Bulutli hisoblashda ishlatiladigan operatsion tizimlar uchun asosiy talab nima?',
			answers: [
				'Faol foydalanuvchi interfeysi',
				'Ko‘p sonli o‘yinlarni qo‘llab-quvvatlash',
				'Tarqatilgan tizimlar bilan ishlash imkoniyati',
				'Faqat mahalliy fayl tizimi bilan ishlash',
			],
			correct: 3,
		},
		{
			question: 'Qaysi operatsion tizimlar bulutli serverlarda keng qo‘llaniladi?',
			answers: [
				'Windows XP va DOS',
				'Android va iOS',
				'Linux distributivlari (masalan, Ubuntu Server, CentOS)',
				'MS-DOS va FreeBSD',
			],
			correct: 3,
		},
		{
			question: 'Virtualizatsiya nima uchun kerak?',
			answers: [
				'Internet tezligini oshirish uchun',
				'Kompyuter ish stolini bezatish uchun',
				'Bir nechta operatsion tizimlarni bir serverda mustaqil ishlatish uchun',
				'Fayllarni avtomatik o‘chirish uchun',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri bulutli operatsion tizimga misol bo‘la oladi?',
			answers: ['Microsoft Word', 'Chrome OS', 'Paint', 'WinRAR'],
			correct: 2,
		},
		{
			question: 'IaaS (Infrastructure as a Service) modeli nimani anglatadi?',
			answers: [
				'Dasturiy ilovalarning bulut orqali yetkazilishi',
				'Foydalanuvchiga to‘liq infrastrukturani (server, tarmoq, disk) xizmat sifatida taklif etish',
				'Elektron pochta xizmatlarini taklif etish',
				'Faqat xotira ajratish',
			],
			correct: 2,
		},
		{
			question: 'Bulutli hisoblashda resurslar qanday boshqariladi?',
			answers: [
				'Avtomatik va dinamik ravishda',
				'Qo‘lda faqat administrator orqali',
				'Har bir foydalanuvchi o‘zi sozlaydi',
				'Hech qanday boshqaruv bo‘lmaydi',
			],
			correct: 1,
		},
		{
			question: 'Operatsion tizimlarda konteyner texnologiyasi nima?',
			answers: [
				'Fayl siqish texnologiyasi',
				'Virtual mashinani almashtiruvchi, yengil izolyatsiyalash texnologiyasi',
				'Tarmoq xavfsizligini pasaytiruvchi texnologiya',
				'Grafik interfeysni boshqaruvchi dastur',
			],
			correct: 2,
		},
		{
			question: 'Docker nima?',
			answers: [
				'Bulutli o‘yin platformasi',
				'Ma’lumotlarni uzatish protokoli',
				'Konteyner asosidagi ilova joylashtirish va boshqarish vositasi',
				'Tarmoq skaneri',
			],
			correct: 3,
		},
		{
			question: 'Bulutli operatsion tizimlar nima uchun xavfsizlikni alohida nazorat qiladi?',
			answers: [
				'Foydalanuvchilarga grafik interfeys taqdim etish uchun',
				'Xavfsizlik kamroq ahamiyatga ega bo‘lgani uchun',
				'Resurslar ko‘p foydalanuvchi o‘rtasida bo‘linadi, hujum ehtimoli yuqori bo‘ladi',
				'Bu tizimlar offlayn ishlaydi',
			],
			correct: 3,
		},
	],
	13: [
		{
			question: 'Operatsion tizimda xavfsizlikning asosiy maqsadi nima?',
			answers: [
				'Internet tezligini oshirish',
				'Grafik interfeysni chiroyli qilish',
				'Tizim resurslariga ruxsatsiz kirishni oldini olish',
				'Kompyuterni yangilash',
			],
			correct: 3,
		},
		{
			question:
				'Quyidagilardan qaysi biri operatsion tizimda foydalanuvchi autentifikatsiyasining vositasidir?',
			answers: ['IP manzillar', 'Parollar', 'Fayl kengaytmalari', 'Kataloglar'],
			correct: 2,
		},
		{
			question:
				'Foydalanuvchiga tizimdagi resurslarga kirish huquqini taqdim etuvchi mexanizm nima deb ataladi?',
			answers: ['Fragmentatsiya', 'Ruxsat (permissions)', 'Formatlash', 'Virtualizatsiya'],
			correct: 2,
		},
		{
			question:
				'Quyidagilardan qaysi biri foydalanuvchi huquqlari bilan ishlovchi xavfsizlik komponenti hisoblanadi?',
			answers: ['Bootloader', 'Kernel', 'Access Control List (ACL)', 'Task Manager'],
			correct: 3,
		},
		{
			question: 'Operatsion tizimda zararli dasturlardan himoya qilish uchun nima zarur?',
			answers: ['Antivirus dasturi', 'Internet brauzeri', 'Grafik drayver', 'Diskni siqish'],
			correct: 1,
		},
		{
			question: 'Quyidagilardan qaysi biri tizimga kirishning biometrik usuliga misol bo‘la oladi?',
			answers: ['Parol kiritish', 'Foydalanuvchi nomi', 'Barmoq izi skaneri', 'Fayl yaratish'],
			correct: 3,
		},
		{
			question: 'Operatsion tizimda “audit” tushunchasi nimani anglatadi?',
			answers: [
				'Fayllarni siqish',
				'Protsessor yuklamasini oshirish',
				'Foydalanuvchi faoliyatini qayd etish va nazorat qilish',
				'Operatsion tizimni yuklash',
			],
			correct: 3,
		},
		{
			question:
				'Quyidagilardan qaysi biri foydalanuvchilarning faqat kerakli resurslarga kirishini ta’minlaydi?',
			answers: [
				'Zaxiralash',
				'Virtual xotira',
				'Minimal huquqlar tamoyili (Principle of Least Privilege)',
				'Boot sektori',
			],
			correct: 3,
		},
		{
			question: 'Operatsion tizimdagi zararli dasturga misol qaysi biri?',
			answers: ['Microsoft Excel', 'Photoshop', 'Trojan', 'Notepad'],
			correct: 3,
		},
		{
			question: '“Firewall” nima uchun ishlatiladi?',
			answers: [
				'Grafik dizayn yaratish uchun',
				'Kompyuter sovutish uchun',
				'Tizimni tarmoq orqali keluvchi xavflardan himoya qilish uchun',
				'Diskni tozalash uchun',
			],
			correct: 3,
		},
	],
	14: [
		{
			question: 'UNIX operatsion tizimi dastlab kim tomonidan ishlab chiqilgan?',
			answers: ['Microsoft', 'Apple', 'AT&T Bell Labs', 'IBM'],
			correct: 3,
		},
		{
			question: 'UNIX oilasiga mansub bo‘lgan operatsion tizim qaysi?',
			answers: ['Windows 10', 'MS-DOS', 'macOS', 'Android'],
			correct: 3,
		},
		{
			question: 'macOS operatsion tizimi asosan qaysi qurilmalarda ishlaydi?',
			answers: [
				'Samsung noutbuklarida',
				'Apple kompyuterlarida',
				'Lenovo telefonlarida',
				'Asus planshetlarida',
			],
			correct: 2,
		},
		{
			question: 'UNIX operatsion tizimining eng muhim xususiyatlaridan biri bu:',
			answers: [
				'Faqat grafik interfeysga ega',
				'Faqat Windows bilan ishlaydi',
				'Ko‘p foydalanuvchilik va ko‘p vazifalik (multi-user, multi-tasking)',
				'Faqat o‘yinlar uchun mo‘ljallangan',
			],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri UNIX asosidagi operatsion tizim hisoblanadi?',
			answers: ['Ubuntu', 'Windows XP', 'MS-DOS', 'ReactOS'],
			correct: 1,
		},
		{
			question: 'UNIX operatsion tizimining asosiy komponentlari qaysilar?',
			answers: ['BIOS va GUI', 'Shell va Kernel', 'Word va Excel', 'RAM va ROM'],
			correct: 2,
		},
		{
			question: 'macOS operatsion tizimi qaysi UNIXga asoslangan yadroni (kernel) ishlatadi?',
			answers: ['NT kernel', 'Mach kernel', 'Linux kernel', 'DOS kernel'],
			correct: 2,
		},
		{
			question: 'UNIX tizimida foydalanuvchilar bilan muloqot qilish uchun nima ishlatiladi?',
			answers: ['Control Panel', 'File Explorer', 'Shell (masalan, Bash)', 'Task Manager'],
			correct: 3,
		},
		{
			question: 'UNIX tizimi qanday huquqlar asosida fayllarga kirishni boshqaradi?',
			answers: [
				'Faqat parol bilan',
				'IP manzil orqali',
				'Egasi, guruh va boshqalar uchun ruxsatlar (read, write, execute) orqali',
				'BIOS sozlamalari orqali',
			],
			correct: 3,
		},
		{
			question: 'macOS operatsion tizimi asosida ishlab chiqilgan grafik interfeys qanday ataladi?',
			answers: ['Windows Explorer', 'GNOME', 'Aqua', 'KDE'],
			correct: 3,
		},
	],
	15: [
		{
			question: 'Bugungi kunda eng keng tarqalgan mobil operatsion tizim qaysi?',
			answers: ['Windows Phone', 'Android', 'Symbian', 'BlackBerry OS'],
			correct: 2,
		},
		{
			question: 'iPhone qurilmalari qaysi operatsion tizimda ishlaydi?',
			answers: ['Android', 'Windows Phone', 'iOS', 'Symbian'],
			correct: 3,
		},
		{
			question: 'Android operatsion tizimi dastlab kim tomonidan ishlab chiqilgan?',
			answers: ['Apple', 'Google', 'Microsoft', 'Nokia'],
			correct: 2,
		},
		{
			question: 'Qaysi mobil operatsion tizim ochiq kodli hisoblanadi?',
			answers: ['iOS', 'Android', 'Windows Phone', 'BlackBerry OS'],
			correct: 2,
		},
		{
			question: 'iOS operatsion tizimi qaysi kompaniyaga tegishli?',
			answers: ['Samsung', 'Apple', 'Google', 'Huawei'],
			correct: 2,
		},
		{
			question: 'Android operatsion tizimi qaysi yadroga (kernel) asoslangan?',
			answers: ['UNIX', 'NT', 'Linux', 'BSD'],
			correct: 3,
		},
		{
			question: 'Quyidagilardan qaysi biri mobil operatsion tizim emas?',
			answers: ['Android', 'iOS', 'Windows', 'HarmonyOS'],
			correct: 3,
		},
		{
			question: 'Symbian operatsion tizimi qaysi qurilmada keng ishlatilgan?',
			answers: ['Apple iPhone', 'Samsung Galaxy', 'Nokia telefonlari', 'Xiaomi planshetlari'],
			correct: 3,
		},
		{
			question: 'Android ilovalari asosan qaysi dasturlash tilida yoziladi?',
			answers: ['Swift', 'Java/Kotlin', 'C++', 'PHP'],
			correct: 2,
		},
		{
			question: 'Mobil operatsion tizimning asosiy vazifasi nima?',
			answers: [
				'Faqat internetga ulanishni ta’minlash',
				'Qurilmadagi apparat resurslarini boshqarish va ilovalarni ishlatish',
				'Telefon dizaynini o‘zgartirish',
				'Kamera sifati uchun javob berish',
			],
			correct: 2,
		},
	],
}

let currentQuizId = null
let questions = []

let score = 0
let questionIndex = 0

// Функция для перемешивания массива (Fisher-Yates shuffle)
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]] // ES6 swap
	}
}

// document.addEventListener('DOMContentLoaded', () => {
// 	const urlParams = new URLSearchParams(window.location.search)
// 	currentQuizId = urlParams.get('id')

// 	if (currentQuizId && allQuizzesData[currentQuizId]) {
// 		// 1. Получаем копию вопросов для текущего ID, чтобы не изменять исходные данные
// 		let originalQuestions = [...allQuizzesData[currentQuizId]]

// 		// 2. Перемешиваем массив вопросов
// 		shuffleArray(originalQuestions)
// 		questions = originalQuestions // Теперь questions содержит перемешанный порядок

// 		clearPage()
// 		showQuestion()
// 		submitBtn.onclick = checkAnswer
// 		submitBtn.style.display = 'inline-block' // Показываем кнопку
// 	} else {
// 		headerContainer.innerHTML = '<h2 class="title">Test topilmadi</h2>'
// 		listContainer.innerHTML = "<p>Noto‘g‘ri ID berildi yoki test ma'lumotlari mavjud emas.</p>"
// 		submitBtn.style.display = 'none' // Скрываем кнопку "Подтвердить"
// 	}
// })

document.addEventListener('DOMContentLoaded', () => {
	const urlParams = new URLSearchParams(window.location.search)
	currentQuizId = urlParams.get('id')

	if (currentQuizId === '16') {
		// Собираем все вопросы из всех тестов в один массив
		let allQuestions = []
		for (const quizId in allQuizzesData) {
			allQuestions = allQuestions.concat(allQuizzesData[quizId])
		}

		// Перемешиваем все вопросы
		shuffleArray(allQuestions)

		// Берем первые 30 вопросов (или меньше, если вопросов меньше 30)
		questions = allQuestions.slice(0, 30)

		clearPage()
		showQuestion()
		submitBtn.onclick = checkAnswer
		submitBtn.style.display = 'inline-block'
	} else if (currentQuizId && allQuizzesData[currentQuizId]) {
		// Оригинальная логика для обычных тестов (id 1-15)
		let originalQuestions = [...allQuizzesData[currentQuizId]]
		shuffleArray(originalQuestions)
		questions = originalQuestions

		clearPage()
		showQuestion()
		submitBtn.onclick = checkAnswer
		submitBtn.style.display = 'inline-block'
	} else {
		headerContainer.innerHTML = '<h2 class="title">Test topilmadi</h2>'
		listContainer.innerHTML = "<p>Noto‘g‘ri ID berildi yoki test ma'lumotlari mavjud emas.</p>"
		submitBtn.style.display = 'none'
	}
})

// Удаляем эти строки, так как инициализация теперь происходит в DOMContentLoaded
// clearPage();
// showQuestion();
// submitBtn.onclick = checkAnswer;

function clearPage() {
	headerContainer.innerHTML = ''
	listContainer.innerHTML = ''
}

function showQuestion() {
	if (questionIndex < questions.length) {
		const currentQuestion = questions[questionIndex] // Получаем текущий (уже перемешанный) вопрос

		const headerTemplate = `<h2 class="title">%title%</h2>`
		const title = headerTemplate.replace('%title%', currentQuestion.question)
		headerContainer.innerHTML = title

		// 3. Готовим ответы к перемешиванию, сохраняя их оригинальные значения
		let answerOptions = currentQuestion.answers.map((answerText, index) => {
			return {
				text: answerText,
				originalValue: index + 1, // Сохраняем 1-based индекс как значение
			}
		})

		// Перемешиваем варианты ответов
		shuffleArray(answerOptions)

		listContainer.innerHTML = '' // Очищаем предыдущие варианты

		for (const option of answerOptions) {
			const questionTemplate = `
							<li>
									<label>
											<input value="%value%" type="radio" class="answer" name="answer" />
											<span>%answer%</span>
									</label>
							</li>`

			let answerHTML = questionTemplate
				.replace('%answer%', option.text)
				.replace('%value%', option.originalValue) // Используем originalValue для radio

			listContainer.innerHTML += answerHTML
		}
	} else {
		showResults()
	}
}

function checkAnswer() {
	let checkedRadio = listContainer.querySelector('input[name="answer"]:checked') // Более точный селектор

	if (!checkedRadio) {
		submitBtn.blur()
		return
	}
	const userAnswer = parseInt(checkedRadio.value) // Значение radio теперь originalValue
	const correctAnswerValue = questions[questionIndex].correct // Оригинальный правильный 1-based индекс

	if (userAnswer === correctAnswerValue) {
		score++
	}

	if (questionIndex < questions.length - 1) {
		// Исправлено условие
		questionIndex++
		clearPage()
		showQuestion()
	} else {
		clearPage()
		showResults()
	}
}

function showResults() {
	const resultsTemplate = `
	<h2 class="title">%title%</h2>
	<h3 class="summary">%message%</h3>
	<p class="result">%result%</p>
`

	let title, message
	const percentage = (score * 100) / questions.length

	if (score === questions.length) {
		title = 'Tabriklaymiz!' // Добавил ! для выразительности
		message = `Siz hamma savolga to'g'ri javob berdingiz`
	} else if (percentage >= 50) {
		title = 'Yaxshi natija' // Yaxshi natija, не natiyja
		message = `Siz savollarning yarmidan ko'piga to'g'ri javob berdingiz`
	} else {
		title = 'Yaxshi emas'
		message = `Siz savollarning yarmidan kamiga to'g'ri javob berdingiz`
	}

	let result = `${questions.length} tadan ${score} ta to'g'ri` // "ta" для количества

	const finalMessage = resultsTemplate // finalMessage, не finalMEssage
		.replace('%title%', title)
		.replace('%message%', message)
		.replace('%result%', result)

	headerContainer.innerHTML = finalMessage

	submitBtn.blur()
	submitBtn.innerText = 'Yana test topshirish'
	submitBtn.onclick = () => {
		// Для перезапуска теста с тем же ID, но с новой рандомизацией
		history.go()
		// или если хотите вернуться на главную страницу выбора тестов:
		// window.location.href = '/index.html'; // или другой путь к вашей главной странице
	}
}
