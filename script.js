const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('form')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const passwordDisplay = document.getElementById('password-Display')
const UpperCase_Char_codes = fromLowToHigh(65, 90)
const LowerCase_Char_codes = fromLowToHigh(97, 122)
const Number_Char_codes = fromLowToHigh(48, 57)
const Symbols_Char_codes = fromLowToHigh(33, 47).concat(fromLowToHigh(58, 64)).concat(fromLowToHigh(91, 96)).concat(fromLowToHigh(123, 126))



characterAmountNumber.addEventListener('input', synchCharacterAmount)
characterAmountRange.addEventListener('input', synchCharacterAmount)

function synchCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LowerCase_Char_codes
    if (includeUppercase) charCodes = charCodes.concat(UpperCase_Char_codes)
    if (includeNumbers) charCodes = charCodes.concat(Number_Char_codes)
    if (includeSymbols) charCodes = charCodes.concat(Symbols_Char_codes)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}



function fromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}