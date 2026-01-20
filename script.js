function sendWhatsApp() {
    var name = document.querySelector('input[placeholder="Your Name"]').value;
    var phone = document.querySelector('input[placeholder="Mobile Number"]').value;
    var message = document.querySelector('textarea').value;

    var text = 
        "New Enquiry%0A" +
        "Name: " + name + "%0A" +
        "Mobile: " + phone + "%0A" +
        "Message: " + message;

    var url = "https://wa.me/918787762664?text=" + text;
    window.open(url, '_blank');
}
