document.getElementById('rzp-button1').onclick = function(e){
    var options = {
        "key": "rzp_test_Bc4U8su9GhxjIw", // Enter the Key ID generated from the Dashboard
        "amount": String(document.getElementById('amount').value)+"00", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Charity Foundation",
        "description": "Test Transaction",
        "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert("Payment Processed Successfully");
            window.location.href="../index.html";
        },
        "prefill": {
            "name": String(document.getElementById('name').value),
            "email": String(document.getElementById('email').value),
            
        },
        "notes": {
            "address": "Corporate Office"
        },
        "theme": {
            "color": "#F37254"
        }
    };
    var rzp1 = new Razorpay(options);
    
        rzp1.open();
        e.preventDefault();
}
