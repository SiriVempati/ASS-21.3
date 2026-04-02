function calculate() {
    let m1 = parseFloat(document.getElementById("m1").value);
    let m2 = parseFloat(document.getElementById("m2").value);
    let m3 = parseFloat(document.getElementById("m3").value);

    if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
        alert("Enter all marks correctly!");
        return;
    }

    let total = m1 + m2 + m3;
    let avg = total / 3;
    let percentage = avg;

    let grade = getGrade(percentage);

    document.getElementById("result").innerHTML =
        `Total: ${total} <br> Average: ${avg} <br> Grade: ${grade}`;
}

function getGrade(p) {
    if (p >= 90) return "A";
    else if (p >= 75) return "B";
    else if (p >= 50) return "C";
    else return "Fail";
}