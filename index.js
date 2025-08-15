const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 29
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▒' +
      '░'.repeat(progressBarCapacity - passedProgressBarIndex)
    return ` ${progressBar} `
}

const readme = `\
## Hi there 👋

- 👧 Bro, coding will drain your wallet, but a rich woman will fill your heart.🎯
- 🤔 Always questioning: "How can this be better?"
- 🌱 Growing skills daily, learning for life.
- 💻 Full Stack Developer passionate about clean code and innovation.
- 🚀 Always exploring new technologies and best practices.
- 🐞 Professional bug creator (and occasional fixer).
- 👨🏻‍🍼 When not coding, I’m debugging life with my wife and kids.

### This Year

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

⏰ Updated on ${new Date().toUTCString()}

### My Github Contributions

![](https://raw.githubusercontent.com/cuilan/cuilan/output/github-contribution-grid-snake.svg#gh-dark-mode-only)
![](https://raw.githubusercontent.com/cuilan/cuilan/output/github-contribution-grid-snake.svg#gh-light-mode-only)

### Stats

[![cuilan's GitHub stats](https://github-readme-stats.vercel.app/api?username=cuilan&show_icons=true)](https://github.com/cuilan)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=cuilan&layout=compact&hide_border=true&langs_count=10)](https://github.com/cuilan)


\
`

console.log(readme)
