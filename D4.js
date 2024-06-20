/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2
}
console.log(area(5,3))
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1===num2) {
        return(num1 + num2)*3
    } else return num1+ num2
}
console.log(crazySum(3,5))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
    if (num > 19) {
        return (num-19)*3
    }else return Math.abs(num - 19)
}
console.log(crazyDiff(15))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if (n>20 && n<=100 || n===400) {
        return true
    } else return "il valore non è compreso tra 20 e 100 e non è 400"
}
console.log(boundary(20))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string) {
    if (string.startsWith("EPICODE")) {
        return string
    } else return "EPICODE" + string
}
console.log(epify(" ciao sono marco"))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
    if (num%3===0 || num%7===0) {
        return "il numero ha superato i controlli"
    } else return "errore in fase di controllo"
}
console.log(check3and7(14))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString5", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString5(string) {
    let stringSplit= string.split("")
    let stringReverse= stringSplit.reverse()
    let stringJoin= stringReverse.join("")
    return stringJoin
}
console.log(reverseString5("EPICODE"))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// 
function upperFirst(string) {
    const newArray=[]
    const newString= string.split(" ")
    for (let index = 0; index < newString.length; index++) {
       const element = newString[index].charAt(0);
       const carattereMaiuscolo= element.toUpperCase()
       const taglio= newString[index].slice(1)
       const finale= carattereMaiuscolo+taglio
       newArray.push(finale)
    }
    console.log(newArray.join(" "))
}
upperFirst("ciao sono marco zagaria")
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string) {
    let newstring= string.slice(1,-1)
    return newstring
}
console.log(cutString("epicode"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
SE POSSIBILE SENZA FAR RIPETERE LO STESSO NUMERO PIU VOLTE*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    const newArray=[]
    for (let index = 0; index < n; index++) {
        newArray.push(Math.floor(Math.random()*10)+1)
    }
    return newArray
}
console.log(giveMeRandom(5))