document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted');
    var form = e.target;
    var formData = new FormData(form);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Received response from server:', data);

            var resultContainer = document.getElementById('result-container');
            var resultDiv = document.getElementById('result');

            if (data.error) {
                console.error('Server returned an error:', data.error);
                resultContainer.style.display = 'none'; // Hide the result container
            } else {
                console.log('Displaying result:', data.alzheimers_prediction);

                // Display the result container
                resultContainer.style.display = 'block';
                resultContainer.style.border = '2px solid red';

                // Reset styles for resultDiv
                resultDiv.style.display = 'block';
                resultDiv.style.color = 'black'; // Add a red border for visibility


                // Find the category with the highest probability
                var maxCategory = Object.keys(data.alzheimers_prediction).reduce(function (a, b) {
                    return data.alzheimers_prediction[a] > data.alzheimers_prediction[b] ? a : b
                });

                // Log the innerHTML before setting it
                console.log('Current innerHTML:', resultDiv.innerHTML);

                // Update the result content
                resultDiv.innerHTML = `
                <p>Result: ${maxCategory}</p>
                <p>Probability: ${data.alzheimers_prediction[maxCategory]}</p>
            `;

                // Log the innerHTML after setting it
                console.log('Updated innerHTML:', resultDiv.innerHTML);
            }
        })
        .catch(error => console.error('Error during fetch:', error));
});
