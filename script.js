// Função para gerar um número aleatório entre min e max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar um array com 10 números aleatórios
function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomNumber(min, max));
    }
    return arr;
}

// Função de ordenação manual (Bubble Sort)
function bubbleSort(arr, ascending = true) {
    let n = arr.length;
    let sortedArr = [...arr]; // Criar uma cópia do array original
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if ((ascending && sortedArr[j] > sortedArr[j + 1]) ||
                (!ascending && sortedArr[j] < sortedArr[j + 1])) {
                // Troca os elementos
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
    }
    return sortedArr;
}

// Função para verificar se um número é primo
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Função para separar os números pares, ímpares e primos
function categorizeNumbers(arr) {
    let pares = [];
    let impares = [];
    let primos = [];
    
    for (let num of arr) {
        if (num % 2 === 0) {
            pares.push(num);
        } else {
            impares.push(num);
        }
        if (isPrime(num)) {
            primos.push(num);
        }
    }
    
    return { pares, impares, primos };
}

// Função principal para gerar e exibir os resultados
function gerarNumeros() {
    let randomArray = generateRandomArray(10, 1, 100);

    let sortedAscending = bubbleSort(randomArray, true);
    let sortedDescending = bubbleSort(randomArray, false);

    let { pares, impares, primos } = categorizeNumbers(randomArray);

    document.getElementById("arrayOriginal").textContent = randomArray.join(", ");
    document.getElementById("ordenadoCrescente").textContent = sortedAscending.join(", ");
    document.getElementById("ordenadoDecrescente").textContent = sortedDescending.join(", ");
    document.getElementById("numerosPares").textContent = pares.join(", ") || "Nenhum";
    document.getElementById("numerosImpares").textContent = impares.join(", ") || "Nenhum";
    document.getElementById("numerosPrimos").textContent = primos.join(", ") || "Nenhum";
}
