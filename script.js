const backButton = document.querySelector('[data-back]')

backButton.addEventListener('click', () => {
	history.back()
})

const questions = [
	{
		question: 'Какой язык работает в браузере?',
		answers: ['Java', 'C', 'Python', 'JavaScript'],
		correct: 4,
	},
	{
		question: 'Что означает CSS?',
		answers: [
			'Central Style Sheets',
			'Cascading Style Sheets',
			'Cascading Simple Sheets',
			'Cars SUVs Sailboats',
		],
		correct: 2,
	},
	{
		question: 'Что означает HTML?',
		answers: [
			'Hypertext Markup Language',
			'Hypertext Markdown Language',
			'Hyperloop Machine Language',
			'Helicopters Terminals Motorboats Lamborginis',
		],
		correct: 1,
	},
	{
		question: 'В каком году был создан JavaScript?',
		answers: ['1996', '1995', '1994', 'все ответы неверные'],
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
