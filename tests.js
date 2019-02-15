const keys = [-5000, -11, -2, 0, 2, 11, 5000]
const messages = ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz".toUpperCase(), "0123456789 áéçãôÁÉÇÃÔ#@!?.%$&*", "Não há saber mais ou saber menos. Há saberes diferentes."]
const messagesEncoded = [
    ["stuvwxyzabcdefghijklmnopqr", "stuvwxyzabcdefghijklmnopqr".toUpperCase(), "0123456789 áéçãôÁÉÇÃÔ#@!?.%$&*", "Fãg zá kstwj esak gm kstwj ewfgk. Zá kstwjwk vaxwjwflwk."],
    ["pqrstuvwxyzabcdefghijklmno", "pqrstuvwxyzabcdefghijklmno".toUpperCase(), "0123456789 áéçãôÁÉÇÃÔ#@!?.%$&*", "Cãd wá hpqtg bpxh dj hpqtg btcdh. Wá hpqtgth sxutgtcith."],
    ["yzabcdefghijklmnopqrstuvwx", "yzabcdefghijklmnopqrstuvwx".toUpperCase(), "0123456789 áéçãôÁÉÇÃÔ#@!?.%$&*", "Lãm fá qyzcp kygq ms qyzcp kclmq. Fá qyzcpcq bgdcpclrcq."],
    ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz".toUpperCase(), "0123456789 áéçãôÁÉÇÃÔ#@!?.%$&*", "Não há saber mais ou saber menos. Há saberes diferentes."],
    ["cdefghijklmnopqrstuvwxyzab", "cdefghijklmnopqrstuvwxyzab".toUpperCase(), "0123456789 áéçãôÁÉÇÃÔ#@!?.%$&*", "Pãq já ucdgt ocku qw ucdgt ogpqu. Já ucdgtgu fkhgtgpvgu."],
    ["lmnopqrstuvwxyzabcdefghijk", "lmnopqrstuvwxyzabcdefghijk".toUpperCase(), "0123456789 áéçãôÁÉÇÃÔ#@!?.%$&*", "Yãz sá dlmpc xltd zf dlmpc xpyzd. Sá dlmpcpd otqpcpyepd."],
    ["ijklmnopqrstuvwxyzabcdefgh", "ijklmnopqrstuvwxyzabcdefgh".toUpperCase(), "0123456789 áéçãôÁÉÇÃÔ#@!?.%$&*", "Vãw pá aijmz uiqa wc aijmz umvwa. Pá aijmzma lqnmzmvbma."]
]

function validate(messages, messagesExpected) {
    if (messages === messagesExpected) {
        return true
    } else {
        return false
    }
}

for (j = 0; j < keys.length; j++) {
    let key = keys[j]
    console.log(`Chave = ${key}`)
    for (i = 0; i < messages.length; i++) {
        if (validate(encode(key, messages[i]), messagesEncoded[j][i])) {
            console.log(`Teste Encode ${(i + 1)}: OK`)
        } else {
            console.log(`Teste Encode ${(i + 1)}: FALHOU`)
        }
        if (validate(decode(key, messagesEncoded[j][i]), messages[i])) {
            console.log(`Teste Decode ${(i + 1)}: OK`)
        } else {
            console.log(`Teste Decode ${(i + 1)}: FALHOU`)
        }
    }
}