// CONSTANTS FOR QUERY SELECTOR
const customNumberInput = document.getElementById('customNumber'); // GETS THE INPUT FIELD WHERE USER ENTERS A NUMBER
const myStudentId = document.getElementById('myStudentId'); // GETS THE PARAGRAPH ELEMENT TO DISPLAY STUDENT ID
const custColorButton = document.querySelector('.custColor'); // GETS THE BUTTON FOR CUSTOM COLOR CHANGE
const randColorButton = document.querySelector('.randColor'); // GETS THE BUTTON FOR RANDOM COLOR CHANGE
const imageSelect = document.getElementById('imageSelect'); // GETS THE DROPDOWN MENU FOR IMAGE SELECTION
const imageDisplay = document.getElementById('images'); // GETS THE IMAGE ELEMENT TO DISPLAY SELECTED IMAGE

// ARRAY OF IMAGE SOURCES
const images = [
    'img/img1.jpg', // IMAGE 1 SOURCE PATH
    'img/img2.jpg', // IMAGE 2 SOURCE PATH
    'img/img3.jpg', // IMAGE 3 SOURCE PATH
    'img/img4.jpg'  // IMAGE 4 SOURCE PATH
];

// FUNCTION TO CHANGE BACKGROUND COLOR BASED ON USER INPUT AND ADD STUDENT ID
function changeCustomColor() {
    const studentId = '200597138- PARTH SURESHCHANDRA'; // ASSIGN STUDENT ID
    myStudentId.textContent = `Student ID: ${studentId}`; // DISPLAY STUDENT ID IN PARAGRAPH ELEMENT
    
    const number = parseInt(customNumberInput.value); // GET THE USER INPUT NUMBER AND CONVERT TO INTEGER
    let bgColor; // VARIABLE TO STORE BACKGROUND COLOR

    // CONDITIONAL CHECK TO ASSIGN BACKGROUND COLOR BASED ON NUMBER RANGE
    if (number < 0 || number > 100) { 
        bgColor = 'red'; // SET COLOR TO RED IF NUMBER IS OUT OF RANGE
    } else if (number <= 20) {
        bgColor = 'green'; // SET COLOR TO GREEN IF NUMBER IS 1-20
    } else if (number <= 40) {
        bgColor = 'blue'; // SET COLOR TO BLUE IF NUMBER IS 21-40
    } else if (number <= 60) {
        bgColor = 'orange'; // SET COLOR TO ORANGE IF NUMBER IS 41-60
    } else if (number <= 80) {
        bgColor = 'purple'; // SET COLOR TO PURPLE IF NUMBER IS 61-80
    } else {
        bgColor = 'yellow'; // SET COLOR TO YELLOW IF NUMBER IS 81-100
    }

    document.body.style.backgroundColor = bgColor; // APPLY THE SELECTED COLOR TO THE PAGE BACKGROUND
}

// FUNCTION TO CHANGE BACKGROUND COLOR BASED ON A RANDOM NUMBER
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 101); // GENERATE A RANDOM NUMBER BETWEEN 0-100
    customNumberInput.value = randomNumber; // DISPLAY THE RANDOM NUMBER IN THE INPUT FIELD
    changeCustomColor(); // CALL THE FUNCTION TO APPLY COLOR CHANGE BASED ON RANDOM NUMBER
}

// FUNCTION TO GENERATE OPTIONS FOR IMAGE SELECTION DROPDOWN LIST
function addList() {
    // CLEAR EXISTING OPTIONS IN DROPDOWN
    imageSelect.innerHTML = '<option value="">Please choose…</option>';
    
    // LOOP THROUGH IMAGE ARRAY AND CREATE OPTIONS FOR DROPDOWN MENU
    images.forEach((image, index) => {
        const option = document.createElement('option'); // CREATE A NEW OPTION ELEMENT
        option.value = image; // SET THE VALUE ATTRIBUTE TO IMAGE PATH
        option.textContent = `Image ${index + 1}`; // SET DISPLAY TEXT FOR OPTION
        imageSelect.appendChild(option); // ADD OPTION TO DROPDOWN LIST
    });
}

// FUNCTION TO CHANGE IMAGE BASED ON DROPDOWN SELECTION
function changeImage() {
    const selectedImage = imageSelect.value; // GET THE SELECTED IMAGE VALUE FROM DROPDOWN
    imageDisplay.src = selectedImage; // SET THE IMAGE SOURCE TO THE SELECTED IMAGE
    imageDisplay.style.display = selectedImage ? 'block' : 'none'; // SHOW IMAGE IF SELECTED, HIDE IF NOT
}

// EVENT LISTENERS FOR BUTTON CLICKS AND DROPDOWN SELECTION
custColorButton.addEventListener('click', changeCustomColor); // CALL FUNCTION ON CUSTOM COLOR BUTTON CLICK
randColorButton.addEventListener('click', changeRandomColor); // CALL FUNCTION ON RANDOM COLOR BUTTON CLICK
imageSelect.addEventListener('change', changeImage); // CALL FUNCTION WHEN DROPDOWN VALUE CHANGES

// INITIALIZE THE IMAGE SELECTION DROPDOWN OPTIONS
addList();
