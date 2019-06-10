var score = 0;
var resultsText = "";

function testForLength(password){
    if (password.length < 8 || password.length > 24){
        // output message telling use it's not right
        resultsText = resultsText + "Your password is not long enough"
        return 0;
    }else{
        resultsText = resultsText + "Your password is long enough"
        return 5;
    }
}

function testForLowercase(password){
    if (password.toUpperCase() != password){
        resultsText = resultsText + ", and there are lowercase letters."
        return 5;
        // need to outline success
    }else{
        resultsText = resultsText + ", and there are no lowercase letters."
        return 0;
        // need to outline what is not there
    }
}

function testForUppercase(password){
    if (password.toLowerCase() != password){
        resultsText = resultsText + ", there are uppercase letters"
        return 5;
    }else{
        resultsText = resultsText + ", there are no uppercase letters"
        return 0;
    }
}

function showText(){
    score = localStorage.getItem("tempStoreScore");
    resultsText = localStorage.getItem("tempStoreMessage");
    var myText = document.querySelector('h3');
    myText.textContent = 'The Result: ' + score;
    var myTextTwo = document.querySelector('h4');
    myTextTwo.textContent = resultsText;
}

function resetPage(){
    window.location.replace('index.html');
}

function generatePassword(){
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var digits = ['1','2','3','4','5','6','7','8','9','0'];
    var sArray = ['!','@','£','$','%','^','&','*','(',')'];
    var password = "";
    for (i = 0; i < 3; i++){
        console.log("hi")
        password = password + letters[Math.floor(Math.random() * letters.length)];
        password = password + digits[Math.floor(Math.random() * digits.length)];
        password = password + sArray[Math.floor(Math.random() * sArray.length)];
        password = password + letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        }
        localStorage.setItem("tempPassword",password);
        window.location.replace("showPassword.html");
}

function testForDigits(password){
    if (password.match(/[0-9]/g) == null){
        resultsText = resultsText + ", there are no digits";
        return 0
    }else{
        resultsText = resultsText + ", there are digits";
        return 5
    }
}

function testForSymbols(password){
    var foundOne = false;
  for (const letter of password){
      if (letter == '!' || letter == '$' || letter == '%' || letter == '^' || letter == '&' || letter == '*'|| letter == '(' || letter == ')' || letter == '-' || letter == '_'  || letter == '=' || letter == '+'){
            foundOne = true
      }
    }
    if (foundOne == true){
        resultsText = resultsText + ", there are symbols";
        return 5
    }else{
        resultsText = resultsText + ", there are no symbols";
        return 0
    }
}

function showNewPassword(){
    newPassword = localStorage.getItem("tempPassword");
    var myText = document.querySelector('h3');
    myText.textContent = newPassword;
}

// You should start with a test alert.

function testPassword(anyPassword){
    var lengthScore = testForLength(anyPassword);
    var digitsScore = testForDigits(anyPassword);
    var symbolsScore = testForSymbols(anyPassword);
    var uppercaseScore = testForUppercase(anyPassword);
    var lowercaseScore = testForLowercase(anyPassword);
    var totalScore = lengthScore + symbolsScore + uppercaseScore + lowercaseScore + digitsScore;
    score = totalScore;
    localStorage.setItem("tempStoreScore",score)
    localStorage.setItem("tempStoreMessage", resultsText)
    window.location.replace("results.html");
}