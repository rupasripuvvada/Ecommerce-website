document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.cart-btn');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Item added to cart!');
        });
    });

    function showNotification(message) {
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerText = message;
        
        container.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });
});

