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

const headerContainer = document.querySelector('#header')
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')

let score = 0
let questionIndex = 0

clearPage()
showQuestion()
submitBtn.onclick = checkAnswer

function clearPage() {
	headerContainer.innerHTML = ''
	listContainer.innerHTML = ''
}

function showQuestion() {
	questions[questionIndex]['question']
	questions[questionIndex]['answers']

	const headerTemplate = `<h2 class="title">%title%</h2>`

	const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])

	headerContainer.innerHTML = title

	let answerNumber = 1

	for (answerText of questions[questionIndex]['answers']) {
		const questionTemplate = `
					<li>
						<label>
							<input value="%number%" type="radio" class="answer" name="answer" />
							<span>%answer%</span>
						</label>
					</li>`

		let answerHTML = questionTemplate
			.replace('%answer%', answerText)
			.replace('%number%', answerNumber)

		listContainer.innerHTML += answerHTML
		answerNumber++
	}
}

function checkAnswer() {
	let checkedRadio = listContainer.querySelector('input:checked')

	if (!checkedRadio) {
		submitBtn.blur()
		return
	}
	const userAnswer = parseInt(checkedRadio.value)

	if (userAnswer === questions[questionIndex]['correct']) {
		score++
	}

	if (questionIndex !== questions.length - 1) {
		questionIndex++
		clearPage()
		showQuestion()
		return
	} else {
		clearPage()
		showResults()
	}
}

function showResults() {
	console.log('result')

	const resultsTemplate = `
		<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>
		<p class="result">%result%</p>
	`

	let title, message

	if (score === questions.length) {
		title = 'Tabriklaymiz'
		message = `Siz hamma savolga tog'ri javob berdingiz`
	} else if ((score * 100) / questions.length >= 50) {
		title = 'Yaxshi natiyja'
		message = `Siz savollarning yarmidan kopiga tog'ri javob berdingiz`
	} else {
		title = 'Yaxshi emas'
		message = `Siz savollarning yarmidan kamiga tog'ri javob berdingiz`
	}

	let result = `${questions.length} dan ${score} tog'ri`

	const finalMEssage = resultsTemplate
		.replace('%title%', title)
		.replace('%message%', message)
		.replace('%result%', result)

	headerContainer.innerHTML = finalMEssage

	submitBtn.blur()
	submitBtn.innerText = 'Yana test topshirish'
	submitBtn.onclick = () => {
		history.go()
	}
}
