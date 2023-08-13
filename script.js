// document.addEventListener("DOMContentLoaded", () => {
//   const setAlarmButton = document.getElementById("setAlarmButton");
//   const setMedicineButton = document.getElementById("setMedicineButton");
//   const setFoodButton = document.getElementById("setFoodButton");
//   const setWaterButton = document.getElementById("setWaterButton");
//   const setAppointmentButton = document.getElementById("setAppointmentButton");
//   const setExerciseButton = document.getElementById("setExerciseButton");

//   setAlarmButton.addEventListener("click", () => {
//     // Implement alarm functionality
//     alert("Alarm set!");
//   });

//   setMedicineButton.addEventListener("click", () => {
//     // Implement medicine reminder functionality
//     alert("Medicine reminder set!");
//   });

//   setFoodButton.addEventListener("click", () => {
//     // Implement food reminder functionality
//     alert("Food reminder set!");
//   });

//   setWaterButton.addEventListener("click", () => {
//     // Implement water reminder functionality
//     alert("Water reminder set!");
//   });

//   setAppointmentButton.addEventListener("click", () => {
//     // Implement appointment reminder functionality
//     alert("Appointment reminder set!");
//   });

//   setExerciseButton.addEventListener("click", () => {
//     // Implement exercise reminder functionality
//     alert("Exercise reminder set!");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const setAlarmButton = document.getElementById("setAlarmButton");

  setAlarmButton.addEventListener("click", () => {
    const alarmTime = prompt("Enter the time for the alarm (HH:MM AM/PM):");

    if (alarmTime) {
      const [hour, minute, period] = alarmTime.split(/:|\s/);
      const now = new Date();
      const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        period === "PM" ? parseInt(hour) + 12 : parseInt(hour),
        parseInt(minute)
      );

      const timeDiff = alarmDate - now;

      if (timeDiff <= 0) {
        alert("Please enter a valid future time for the alarm.");
      } else {
        setTimeout(() => {
          playAlarm();
          alert("Alarm! Time to wake up!");
        }, timeDiff);
      }
    }
  });
});

function playAlarm() {
  // In a real scenario, you might want to play an actual alarm sound here.
  console.log("Alarm sound playing...");
}

document.addEventListener("DOMContentLoaded", () => {
  const setAlarmButton = document.getElementById("setMedicineButton");

  setAlarmButton.addEventListener("click", () => {
    const alarmTime = prompt("Enter the time for the alarm (HH:MM AM/PM):");

    if (alarmTime) {
      const [hour, minute, period] = alarmTime.split(/:|\s/);
      const now = new Date();
      const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        period === "PM" ? parseInt(hour) + 12 : parseInt(hour),
        parseInt(minute)
      );

      const timeDiff = alarmDate - now;

      if (timeDiff <= 0) {
        alert("Please enter a valid future time for the alarm.");
      } else {
        setTimeout(() => {
          playAlarm();
          alert("Alarm! Time to wake up!");
        }, timeDiff);
      }
    }
  });
});

function playAlarm() {
  // In a real scenario, you might want to play an actual alarm sound here.
  console.log("Alarm sound playing...");
}

document.addEventListener("DOMContentLoaded", () => {
  const setAlarmButton = document.getElementById("setFoodButton");

  setAlarmButton.addEventListener("click", () => {
    const alarmTime = prompt("Enter the time for the alarm (HH:MM AM/PM):");

    if (alarmTime) {
      const [hour, minute, period] = alarmTime.split(/:|\s/);
      const now = new Date();
      const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        period === "PM" ? parseInt(hour) + 12 : parseInt(hour),
        parseInt(minute)
      );

      const timeDiff = alarmDate - now;

      if (timeDiff <= 0) {
        alert("Please enter a valid future time for the alarm.");
      } else {
        setTimeout(() => {
          playAlarm();
          alert("Alarm! Time to wake up!");
        }, timeDiff);
      }
    }
  });
});

function playAlarm() {
  // In a real scenario, you might want to play an actual alarm sound here.
  console.log("Alarm sound playing...");
}

document.addEventListener("DOMContentLoaded", () => {
  const setAlarmButton = document.getElementById("setWaterButton");

  setAlarmButton.addEventListener("click", () => {
    const alarmTime = prompt("Enter the time for the alarm (HH:MM AM/PM):");

    if (alarmTime) {
      const [hour, minute, period] = alarmTime.split(/:|\s/);
      const now = new Date();
      const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        period === "PM" ? parseInt(hour) + 12 : parseInt(hour),
        parseInt(minute)
      );

      const timeDiff = alarmDate - now;

      if (timeDiff <= 0) {
        alert("Please enter a valid future time for the alarm.");
      } else {
        setTimeout(() => {
          playAlarm();
          alert("Alarm! Time to wake up!");
        }, timeDiff);
      }
    }
  });
});

function playAlarm() {
  // In a real scenario, you might want to play an actual alarm sound here.
  console.log("Alarm sound playing...");
}

document.addEventListener("DOMContentLoaded", () => {
  const setAlarmButton = document.getElementById("setAppointmentButton");

  setAlarmButton.addEventListener("click", () => {
    const alarmTime = prompt("Enter the time for the alarm (HH:MM AM/PM):");

    if (alarmTime) {
      const [hour, minute, period] = alarmTime.split(/:|\s/);
      const now = new Date();
      const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        period === "PM" ? parseInt(hour) + 12 : parseInt(hour),
        parseInt(minute)
      );

      const timeDiff = alarmDate - now;

      if (timeDiff <= 0) {
        alert("Please enter a valid future time for the alarm.");
      } else {
        setTimeout(() => {
          playAlarm();
          alert("Alarm! Time to wake up!");
        }, timeDiff);
      }
    }
  });
});

function playAlarm() {
  // In a real scenario, you might want to play an actual alarm sound here.
  console.log("Alarm sound playing...");
}

document.addEventListener("DOMContentLoaded", () => {
  const setAlarmButton = document.getElementById("setExerciseButton");

  setAlarmButton.addEventListener("click", () => {
    const alarmTime = prompt("Enter the time for the alarm (HH:MM AM/PM):");

    if (alarmTime) {
      const [hour, minute, period] = alarmTime.split(/:|\s/);
      const now = new Date();
      const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        period === "PM" ? parseInt(hour) + 12 : parseInt(hour),
        parseInt(minute)
      );

      const timeDiff = alarmDate - now;

      if (timeDiff <= 0) {
        alert("Please enter a valid future time for the alarm.");
      } else {
        setTimeout(() => {
          playAlarm();
          alert("Alarm! Time to wake up!");
        }, timeDiff);
      }
    }
  });
});

function playAlarm() {
  // In a real scenario, you might want to play an actual alarm sound here.
  console.log("Alarm sound playing...");
}
