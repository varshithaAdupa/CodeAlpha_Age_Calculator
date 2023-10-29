function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();

    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years.`;
}
