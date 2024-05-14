function checkAnagram() {
    const result = document.getElementById("result");

    const firstw = sanitizeString(document.getElementById("firstw").value);
    const secondw = sanitizeString(document.getElementById("secondw").value);

    if (firstw === secondw) {
        result.innerText = "THAT'S AN ANAGRAM";
    } else {
        result.innerText = "THAT'S NOT AN ANAGRAM";
    }
 }

 function sanitizeString($string) {
    return $string.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
 }