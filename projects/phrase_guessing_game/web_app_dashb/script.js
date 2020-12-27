const alertBanner = document.getElementById("alert");
const trafficCanvas = document.querySelector('#traffic-chart');

const dailyCanvas = document.querySelector('#daily-chart');
const mobileCanvas = document.querySelector('#mobile-chart');


const user = document.querySelector('#userField');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');



/// create the html for the banner 

  alertBanner.innerHTML = 
  `
    <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>7</strong> overdue tasks to complete </p>
    <p class="alert-banner-close">x</p>
    </div>
  `


 ////alert bannner event listener to turn display off when clicked

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
});


/////////Traffic Chart 

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: '#7477bf',
    borderWidth: 1,
  }]
};

let trafficOptions = {
aspectRatio: 2.5,
animation: {
  duration: 0
},
scales: {
  yAxes: [{
    ticks: {
      beginAtZero:true
    }
  }]
},
legend : {
  display: false
}
};

let trafficChart = new Chart(trafficCanvas, {
type: 'line',
data: trafficData,
options: trafficOptions
});


//////// Daily Chart 

let dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets:[{
      label: '# of Hits',
      data: [50, 100, 150, 200, 250, 300, 350],
      backgroundColor: '#7477bf',
      borderWidth: 1,
    }]
};

let dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
  };

  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

//////// Mobile Chart 

let mobileData = {
  labels: ['Desktop', 'Tablet', 'Phones'],
  datasets: [{
    label: '# of Users',
    data: [3000, 160, 775],
    borderWidth: 0,
    backgroundColor: [
      '#7477bf',
      '#78cf82',
      '#51b6c8'
    ]
    
    
  }]
};

let mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyles: 'bold'
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions


});

////// Message fields


send.addEventListener('click', (event) =>  {
  event.preventDefault();
  //ensure user and message fields are filled out 
    if (user.value === "" && message.value === "") {
      alert ("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
         alert ("Please fill out user field before sending");
      } else if (message.value === "") {
        alert ("Please fill out user field before sending");
      } else {
        alert (`Message successfully sent to: ${user.value}`)
      }
});