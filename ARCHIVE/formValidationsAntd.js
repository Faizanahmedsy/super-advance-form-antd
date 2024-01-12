export const firstNameValidationHelper = [
  {
    required: true,
    message: "Please enter first name",
  },
  {
    pattern: new RegExp(/^[A-Za-z]+$/),
    message: "First name can only contain letters",
  },
  {
    pattern: /^\S(.*\S)?$/,
    message: "White space is not allowed at the beginning or end",
  },
];

export const lastNameValidationHelper = [
  {
    required: true,
    message: "Please enter last name",
  },
  {
    pattern: new RegExp(/^[A-Za-z]+$/),
    message: "Last name can only contain letters",
  },
  {
    pattern: /^\S(.*\S)?$/,
    message: "White space is not allowed at the beginning or end",
  },
];

export const phoneNumberValidationHelper = [
  {
    required: true,
    message: "Please enter phone number",
  },
  {
    pattern: new RegExp(/^[0-9]+$/),
    message: "Phone number can only contain numbers",
  },
  {
    pattern: /^\S(.*\S)?$/,
    message: "White space is not allowed at the beginning or end",
  },
  {
    min: 10,
    message: "Phone number must be at least 10 digits",
  },
  {
    max: 10,
    message: "Phone number must be at most 10 digits",
  },
  // {
  //   validator: (rule, value) => {
  //     if (value && value.replace(/[^0-9]/g, "").length !== 10) {
  //       return Promise.reject("Please enter a 10-digit phone number");
  //     }
  //     return Promise.resolve();
  //   },
  // },
];

export const postalCodeValidationHelper = [
  {
    required: true,
    message: "Please enter postal code",
  },
  {
    pattern: /^[a-zA-Z0-9 ]*$/,
    message: "Only letters, numbers are allowed",
  },
  {
    pattern: /^\S(.*\S)?$/,
    message: "White space is not allowed at the beginning or end",
  },
];

export const businessRegistrationNumberValidationHelper = [
  {
    required: true,
    message: "Please enter business registration number",
  },
  {
    pattern: /^[a-zA-Z0-9 ]*$/,
    message: "Only letters, numbers are allowed",
  },
  {
    pattern: /^\S*$/,
    message: "White space is not allowed ",
  },
];

export const userCanEnterOnlyNumbersHelper = (event) => {
  if (event.charCode < 48 || event.charCode > 57) {
    event.preventDefault();
  }
};

// export const userCanEnterOnlyNumbers = (e) => {
//   const re = /^[0-9\b]+$/;
//   if (e.target.value === "" || re.test(e.target.value)) {
//     return true;
//   }
//   return false;
// };
