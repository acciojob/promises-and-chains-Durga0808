//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form inputs
    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;

    // Check if inputs are not empty
    if (age === '' || name === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Convert age to a number
    const ageNum = Number(age);

    // Create a promise that resolves or rejects based on the age
    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageNum > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Handle the promise resolution or rejection
    agePromise
        .then(message => {
            alert(message);
        })
        .catch(errorMessage => {
            alert(errorMessage);
        });
});
