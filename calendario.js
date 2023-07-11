var reservaLink = document.getElementById('reserva-link');
var calendar = document.getElementById('calendar');
var calendarDays = document.getElementById('calendar-days');

// Agrega un evento de clic al enlace de reserva
reservaLink.addEventListener('click', function(event) {
  event.preventDefault();
  calendar.style.display = 'block';
});

// Generar los días del calendario
var daysInMonth = 31; // Número de días en el mes actual
for (var i = 1; i <= daysInMonth; i++) {
  var dayElement = document.createElement('div');
  dayElement.className = 'calendar-day';
  dayElement.textContent = i;
  
  dayElement.addEventListener('click', function() {
    var selectedDay = this.textContent;
    alert('Has seleccionado el día ' + selectedDay + '. ¡Reserva tu turno ahora!');
  });

  calendarDays.appendChild(dayElement);
}