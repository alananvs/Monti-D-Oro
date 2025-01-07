      // Inicializa o mapa
      var map = L.map('map').setView([-15.599207, -47.674723], 13); // Latitude e Longitude

      // Adiciona o tile layer do OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Adiciona um marcador
      L.marker([-15.599207, -47.674723]).addTo(map)
          .bindPopup('Monti D´oro')
          .openPopup();