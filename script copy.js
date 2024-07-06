document.querySelectorAll('.quantity .plus').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        input.value = parseInt(input.value) + 1;
        updateTotal();
    });
});

document.querySelectorAll('.quantity .minus').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
            updateTotal();
        }
    });
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.cart-info p').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity input').value);
        total += price * quantity;
    });
    document.querySelector('.summary h2').textContent = `Total: $${total.toFixed(2)}`;
}
