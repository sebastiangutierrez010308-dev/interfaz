let currentBalance = 20000;

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener el valor ingresado en el campo "usuario"
  const rawUsername = document.getElementById('username').value.trim();
  
  if (rawUsername) {
    // Si contiene punto (ej: maria.garcia), tomar la primera parte y capitalizar
    let formattedName = rawUsername.split('.')[0];
    formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    
    // Cambiar el saludo en la pantalla principal
    document.getElementById('user-greeting').innerText = `Hola, ${formattedName}`;
  }

  showScreen('screen-dashboard');
});

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function processRecharge() {
  const amountInput = document.getElementById('recharge-amount').value;
  const numericAmount = parseInt(amountInput.replace(/[^0-9]/g, '')) || 0;

  if (numericAmount <= 0) {
    alert('Ingresa un valor válido');
    return;
  }

  currentBalance += numericAmount;

  // Actualizar los textos de saldo
  document.getElementById('current-balance').innerText = `$${currentBalance.toLocaleString('es-CO')}`;
  document.getElementById('new-balance-display').innerText = `$${currentBalance.toLocaleString('es-CO')}`;
  document.getElementById('success-msg').innerText = `Se añadieron $${numericAmount.toLocaleString('es-CO')} a tu tarjeta. Tu saldo ya está disponible.`;

  showScreen('screen-success');
}