document.addEventListener('DOMContentLoaded', function() {
    const cartaoNumeroInput = document.getElementById('cartao-numero');
    const cartaoNomeInput = document.getElementById('cartao-nome');
    const cartaoValidadeInput = document.getElementById('cartao-validade');
    
    cartaoNumeroInput.addEventListener('input', function() {
        document.getElementById('cartao-numero-preview').textContent = this.value || '#### #### #### ####';
    });
    
    cartaoNomeInput.addEventListener('input', function() {
        document.getElementById('cartao-nome-preview').textContent = this.value.toUpperCase() || 'NOME COMPLETO';
    });
    
    cartaoValidadeInput.addEventListener('input', function() {
        document.getElementById('cartao-validade-preview').textContent = this.value || 'MM/AA';
    });
});
