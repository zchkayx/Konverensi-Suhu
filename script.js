document.getElementById('convertButton').addEventListener('click', function() {
    let celsius = document.getElementById('celsius').value.trim();
    let fahrenheitElement = document.getElementById('fahrenheit');
    let calculationElement = document.getElementById('calculation');

    // Validate input temperature
    if (celsius === '') {
        calculationElement.value = 'Silakan masukkan suhu terlebih dahulu.';
        return;
    }

    // Convert input temperature to a number
    celsius = parseFloat(celsius);

    // Check if input is a valid number
    if (isNaN(celsius)) {
        calculationElement.value = 'Masukkan harus berupa angka.';
        return;
    }

    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    fahrenheitElement.value = fahrenheit.toFixed(2);
    calculationElement.value = `${celsius.toFixed(2)}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
});

document.getElementById('reverseButton').addEventListener('click', function() {
    let fahrenheit = document.getElementById('fahrenheit').value.trim();
    let celsiusElement = document.getElementById('celsius');
    let calculationElement = document.getElementById('calculation');

    // Validate input temperature
    if (fahrenheit === '') {
        calculationElement.value = 'Silakan masukkan suhu terlebih dahulu.';
        return;
    }

    // Convert input temperature to a number
    fahrenheit = parseFloat(fahrenheit);

    // Check if input is a valid number
    if (isNaN(fahrenheit)) {
        calculationElement.value = 'Masukkan harus berupa angka.';
        return;
    }

    // Convert Fahrenheit to Celsius
    let celsius = (fahrenheit - 32) * 5/9;
    celsiusElement.value = celsius.toFixed(2);
    calculationElement.value = `${fahrenheit.toFixed(2)}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
});

document.getElementById('reverseLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Change HTML elements
    document.getElementById('tempForm').innerHTML = `
        <label for="fahrenheit">Fahrenheit (°F):</label>
        <textarea id="fahrenheit" name="fahrenheit" rows="2"></textarea>
        <div class="button-group">
            <button type="button" id="convertButton">Konversi</button>
            <button type="button" id="resetButton">Reset</button>
            <button type="button" id="reverseButton">Reverse</button>
            <button type="button" id="backButton">Back</button>
        </div>
        <label for="celsius">Celsius (°C):</label>
        <textarea id="celsius" name="celsius" rows="2" readonly></textarea>
        <label for="calculation">Cara Kalkulasi:</label>
        <textarea id="calculation" name="calculation" rows="4" readonly></textarea>
    `;
    // Change how the calculator works
    document.getElementById('convertButton').addEventListener('click', function() {
        let fahrenheit = document.getElementById('fahrenheit').value.trim();
        let celsiusElement = document.getElementById('celsius');
        let calculationElement = document.getElementById('calculation');

        // Validate input temperature
        if (fahrenheit === '') {
            calculationElement.value = 'Silakan masukkan suhu terlebih dahulu.';
            return;
        }

        // Convert input temperature to a number
        fahrenheit = parseFloat(fahrenheit);

        // Check if input is a valid number
        if (isNaN(fahrenheit)) {
            calculationElement.value = 'Masukkan harus berupa angka.';
            return;
        }

        // Convert Fahrenheit to Celsius
        let celsius = (fahrenheit - 32) * 5/9;
        celsiusElement.value = celsius.toFixed(2);
        calculationElement.value = `${fahrenheit.toFixed(2)}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        document.getElementById('fahrenheit').value = '';
        document.getElementById('celsius').value = '';
        document.getElementById('calculation').value = '';
    });

    document.getElementById('reverseButton').addEventListener('click', function() {
        let celsius = document.getElementById('celsius').value.trim();
        let fahrenheitElement = document.getElementById('fahrenheit');
        let calculationElement = document.getElementById('calculation');
    
        // Validate input temperature
        if (celsius === '') {
            calculationElement.value = 'Silakan masukkan suhu terlebih dahulu.';
            return;
        }
    
        // Convert input temperature to a number
        celsius = parseFloat(celsius);
    
        // Check if input is a valid number
        if (isNaN(celsius)) {
            calculationElement.value = 'Masukkan harus berupa angka.';
            return;
        }
    
        // Convert Celsius to Fahrenheit
        let fahrenheit = (celsius * 9/5) + 32;
        fahrenheitElement.value = fahrenheit.toFixed(2);
        calculationElement.value = `${celsius.toFixed(2)}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    });
    

    document.getElementById('backButton').addEventListener('click', function() {
        document.getElementById('tempForm').innerHTML = `
            <label for="celsius">Celsius (°C):</label>
            <textarea id="celsius" name="celsius" rows="2"></textarea>
            <div class="button-group">
                <button type="button" id="convertButton">Konversi</button>
                <button type="button" id="resetButton">Reset</button>
                <button type="button" id="reverseButton">Reverse</button>
            </div>
            <label for="fahrenheit">Fahrenheit (°F):</label>
            <textarea id="fahrenheit" name="fahrenheit" rows="2" readonly></textarea>
            <label for="calculation">Cara Kalkulasi:</label>
            <textarea id="calculation" name="calculation" rows="4" readonly></textarea>
        `;
        document.getElementById('convertButton').addEventListener('click', function() {
            let celsius = document.getElementById('celsius').value.trim();
            let fahrenheitElement = document.getElementById('fahrenheit');
            let calculationElement = document.getElementById('calculation');

            // Validate input temperature
            if (celsius === '') {
                calculationElement.value = 'Silakan masukkan suhu terlebih dahulu.';
                return;
            }

            // Convert input temperature to a number
            celsius = parseFloat(celsius);

            // Check if input is a valid number
            if (isNaN(celsius)) {
                calculationElement.value = 'Masukkan harus berupa angka.';
                return;
            }

            // Convert Celsius to Fahrenheit
            let fahrenheit = (celsius * 9/5) + 32;
            fahrenheitElement.value = fahrenheit.toFixed(2);
            calculationElement.value = `${celsius.toFixed(2)}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
        });
        document.getElementById('resetButton').addEventListener('click', function() {
            document.getElementById('celsius').value = '';
            document.getElementById('fahrenheit').value = '';
            document.getElementById('calculation').value = '';
        });
        document.getElementById('reverseButton').addEventListener('click', function() {
            let fahrenheit = document.getElementById('fahrenheit').value.trim();
            let celsiusElement = document.getElementById('celsius');
            let calculationElement = document.getElementById('calculation');
        
            // Validate input temperature
            if (fahrenheit === '') {
                calculationElement.value = 'Silakan masukkan suhu terlebih dahulu.';
                return;
            }
        
            // Convert input temperature to a number
            fahrenheit = parseFloat(fahrenheit);
        
            // Check if input is a valid number
            if (isNaN(fahrenheit)) {
                calculationElement.value = 'Masukkan harus berupa angka.';
                return;
            }
        
            // Convert Fahrenheit to Celsius
            let celsius = (fahrenheit - 32) * 5/9;
            celsiusElement.value = celsius.toFixed(2);
            calculationElement.value = `${fahrenheit.toFixed(2)}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
        });
        
    });
});