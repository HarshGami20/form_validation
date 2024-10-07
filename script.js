function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
};

// const persent = document.querySelector(".per");

// console.log(parent);

// form validations

const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const errors = {name:"",email:"",mobileNumber:"",address:"",gender:"",uploadImage:""};


    // const name = document.getElementById('name').value.trim();
    // const email = document.getElementById('email').value.trim();
    // const mobileNumber = document.getElementById('mobileNumber').value.trim();
    // const address = document.getElementById('address').value.trim();
    // const gender = document.getElementById('gender').value;
    // const profilePic = document.getElementById('uploadImage').files[0];


    // First Name validation
    let name = formData.get("name").trim();
    console.log(name);

    if (!name) {
        errors.name = 'name is required';
    }
    else if (name.length < 3 || name.length > 50) {
        errors.name = 'name must be between 2 and 50 characters long.'
    }
    // else {
    //     errors.name = "";
    // }
    //  Email validation
    const email = formData.get('email');
    if (!email || !/^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errors.email = 'Invalid email address';
    }
    // else {
    //     errors.email = "";
    // }

    // Mobile Number validation
    const mobileNumber = formData.get('mobileNumber');
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
        errors.mobileNumber = 'Invalid mobile number';
    }
    // else {
    //     errors.mobileNumber = "";
    // }
    // Address validation
    const address = formData.get("address");
    if (!formData.get('address')) {
        errors.address = ' Address is required';
    }
    else if (address.length < 10) {
        errors.address = 'Address must be between 10 and 200 characters long.'
    }
    // else {
    //     errors.address = "";
    // }
    // Gender validation
    const gender = formData.get("gender");
    if (!formData.get('gender')) {
        errors.gender = 'Gender is required';
    }
    else if (gender.length === 0) {
        errors.gender = 'Please select a gender.'
    }
    // else{
    //     errors.gender = "";
    // }

    // Profile Picture validation
    const profilePic = formData.get("uploadImage");
    console.log(profilePic);
    
    if(profilePic.size === 0){
        // alert("upload image")
        errors.uploadImage = "Please uplode image*";
    }
    else if (profilePic && profilePic.size > 1024 * 1024 * 5) {
        // errors.uploadImage='Profile picture must be less than 5MB in size.';
        alert("Profile picture must be less than 5MB in size.")
    }


    // Display error messages
    Object.keys(errors).forEach((key) => {
        console.log(key);
        const errorMessage = document.querySelector(`#${key} + .error-message`);
        errorMessage.textContent = errors[key];
        // console.log(errors);
    });

    // If no errors, submit the form
    let val = (Object.values(errors).toString());
    if (val.length <= 5) {
        form.submit();
        alert("Form submitted successfully!")
    }
else{
    alert("plese check inputs")
}
});



// const circularProgress = document.querySelectorAll(".circular-progress");

// circularProgress.forEach((progressBar) => {
//   const progressValue = progressBar.querySelector(".percentage");
//   const innerCircle = progressBar.querySelector(".inner-circle");
//   let startValue = 0,
//     endValue = Number(progressBar.getAttribute("data-percentage")),
//     speed = 50,
//     progressColor = progressBar.getAttribute("data-progress-color");

//   const progress = setInterval(() => {
//     startValue++;
//     progressValue.textContent = `${startValue}%`;
//     progressValue.style.color = `${progressColor}`;

//     innerCircle.style.backgroundColor = `${progressBar.getAttribute(
//       "data-inner-circle-color"
//     )}`;

//     progressBar.style.background = `conic-gradient(${progressColor} ${
//       startValue * 3.6
//     }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
//     if (startValue === endValue) {
//       clearInterval(progress);
//     }
//   }, speed);
// });
