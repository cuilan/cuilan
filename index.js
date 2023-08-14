const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
## Hi there 👋

- 🤔 How to Fuck me?
- 🌱 Give me Green hat！

---

### This Year

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

⏰ Updated on ${new Date().toUTCString()}

---

### My Github Contributions

![](https://raw.githubusercontent.com/cuilan/cuilan/output/github-contribution-grid-snake.svg#gh-dark-mode-only)
![](https://raw.githubusercontent.com/cuilan/cuilan/output/github-contribution-grid-snake.svg#gh-light-mode-only)

\
`

console.log(readme)