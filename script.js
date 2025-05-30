const backButton = document.querySelector('[data-back]')

backButton.addEventListener('click', () => {
	history.back()
})

const questions = [
	{
		question:
			'Kompyuterning apparat va dasturiy taʼminoti oʻrtasidagi aloqani taʼminlovchi va uning ishlashini boshqaruvchi asosiy dasturlar toʻplami nima deb ataladi?',
		answers: ['Antivirus dasturi', 'Operatsion tizim', 'Ofis paketi', 'Grafik muharrir'],
		correct: 2,
	},
	{
		question: 'Quyidagilardan qaysi biri "ochiq kodli" operatsion tizim hisoblanadi?',
		answers: ['Windows', 'macOS', 'Android ', 'Linux'],
		correct: 4,
	},
	{
		question:
			'Fayllar va papkalarni boshqarish, dasturlarni ishga tushirish va tizim sozlamalarini oʻzgartirish uchun operatsion tizimning qaysi qismi javobgar?',
		answers: ['Drayver ', 'Yadro ', 'Foydalanuvchi interfeysi ', 'Bufer'],
		correct: 3,
	},
	{
		question:
			'Bir vaqtning oʻzida bir nechta dasturni ishlatish imkoniyatini beruvchi operatsion tizim xususiyati nima deb ataladi?',
		answers: [
			'Bir vazifalilik (Single-tasking)',
			'Koʻp vazifalilik (Multi-tasking) ',
			'Bir foydalanuvchilik (Single-user) ',
			'Tarmoqlanish (Networking)',
		],
		correct: 2,
	},
]
