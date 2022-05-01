function fibonacci(n) {
    if(n <= 2) {
        return 1;
    } else {
        return alert (this.recursive(n - 1) + this.recursive(n - 2));
    }
 
}

function card() {
  var x = document.getElementById("numero").value;
  document.getElementById("demo").innerHTML = x;
}

