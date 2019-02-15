function encodeLetter(letter, offset) {
    const letterASCII = letter.charCodeAt()
    if (65 <= letterASCII && letterASCII <= 90) {
        return String.fromCharCode((letterASCII + (offset % 26) - 65 + 26) % 26 + 65)
    } else if (97 <= letterASCII && letterASCII <= 122) {
        return String.fromCharCode((letterASCII + (offset % 26) - 97 + 26) % 26 + 97)
    } else {
        return String.fromCharCode(letterASCII)
    }
}

function encode(offset, string) {
    let encodedString = ""
    for (letter of string) {
        encodedString = encodedString + encodeLetter(letter, offset)
    }
    return encodedString
}

decode = (offset, string) => encode(-offset, string)

function encodeHtml() {
    const string = document.getElementById("encode-msg").value
    const offset = parseInt(document.getElementById("key").value)
    document.getElementById("decode-msg").value = encode(offset, string)
}

function decodeHtml() {
    const string = document.getElementById("decode-msg").value
    const offset = parseInt(document.getElementById("key").value)
    document.getElementById("encode-msg").value = decode(offset, string)
}

function keyUp() {
    const newKey = parseInt(document.getElementById("key").value) + 1
    document.getElementById("key").value = newKey
}

function keyDown() {
    const newKey = parseInt(document.getElementById("key").value) - 1
    document.getElementById("key").value = newKey
}