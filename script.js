function checkAnagram() {
    var firstw = document.getElementById("firstw").value.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    var secondw = document.getElementById("secondw").value.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    if (firstw === secondw) {
        document.getElementById("result").innerText = "THAT'S AN ANAGRAM";
    } else {
        document.getElementById("result").innerText = "THAT'S NOT AN ANAGRAM";
    }

 }