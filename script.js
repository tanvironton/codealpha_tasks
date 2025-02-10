function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    
    if (!birthdate) {
        document.getElementById("result").innerText = "Please select your birth date!";
        return;
    }

    let birthDateObj = new Date(birthdate);
    let today = new Date();

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText = `${years} years ${months} months ${days} days`;
}
