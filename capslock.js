function capsLock(str) {
    return str
        .split(' ')
        .map(function (word) {
            let upWord = word.toUpperCase()

            if (word === upWord) {
                return word.toLowerCase()
            } else if (word === upWord[0].toLowerCase() + upWord.slice(1)) {
                return word[0].toUpperCase() + word.slice(1).toLowerCase()
            }
            return word
        })
        .join(' ')
}