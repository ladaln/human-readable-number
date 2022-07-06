module.exports = function toReadable (number) {
    const words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    const n = Math.trunc(Math.abs(number))
    const antwort = n > 20 && n < 100 ? words[Math.trunc(n / 10) + 18] + ' ' + words[Math.trunc(n % 10)] :
      n >= 100 ? words[Math.trunc(n / 100)] + ' hundred ' + ( Math.trunc(n % 100) <= 20 ? words[Math.trunc(n % 100)] :
      words[Math.trunc((n % 100) / 10) + 18] + ' ' + words[Math.trunc(n % 100 % 10)] ) : words[n];     
  return antwort == 'zero' ? antwort : antwort.replace(' zero', '');
}

