$ (document).ready (function () {


// collect data when submit button is clicked
    $("#submit").click(function (event) {
        event.preventDefault();


// collect all of the user's information
        let salary = document.getElementById("salary").value;
        let credit = document.getElementById("credit").value;
        let months = document.getElementById("months").value;


// statement to check salary
        if (salary >= 40000) {
            if (credit >= 600) {
                loanApproval = 1;
            } else {
                if (months > 12) {
                    loanApproval = 1;
                } else {
                    loanApproval = 0;
                }
            }
        } else {
            if (credit >= 600) {
                if (months > 12) {
                    loanApproval = 1;
                } else {
                    loanApproval = 0;
                }
            } else {
                loanApproval = 0;
            }
        }
        // alerts to validate whether the number is in range
        if (salary < 0) {
            alert("Your salary cannot be a negative number");
        }
        if (credit > 850 || credit < 350) {
            alert("Your credit score is not within the valid range");
        }
        if (months < 0) {
            alert("Your months since employed cannot be a negative number");
        }
        let result;

// statement to display approval or denial in paragraph
        if (loanApproval == 1) {
            result = `Congratulations! You have been approved.`
        }
        if (loanApproval == 0) {
            result = `Sorry! You have been denied.`
        }

        $("p#approval").text(result);
        })
    })

