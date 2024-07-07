function calculateBMI() {
  // Ambil nilai berat dan tinggi dari input
  const berat = document.getElementById("weight").value;
  const tinggi = document.getElementById("height").value;

  // Periksa apakah input sudah diisi
  if (!berat || !tinggi) {
    let alertMessage = "Silakan masukkan ";
    if (!berat) {
      alertMessage += "berat badan";
    }
    if (!berat && !tinggi) {
      alertMessage += " dan ";
    }
    if (!tinggi) {
      alertMessage += "tinggi badan";
    }
    alertMessage += " Anda.";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<span id="alert">${alertMessage}</span>`;
    return;
  }

  // Periksa apakah input berada dalam kisaran yang masuk akal
  const minWeight = 10;
  const maxWeight = 500;
  const minHeight = 50;
  const maxHeight = 300;

  if (
    berat < minWeight ||
    berat > maxWeight ||
    tinggi < minHeight ||
    tinggi > maxHeight
  ) {
    let alertMessage = "Anda memasukkan ";
    if (berat < minWeight || berat > maxWeight) {
      alertMessage += "berat badan";
    }
    if (
      (berat < minWeight || berat > maxWeight) &&
      (tinggi < minHeight || tinggi > maxHeight)
    ) {
      alertMessage += " dan ";
    }
    if (tinggi < minHeight || tinggi > maxHeight) {
      alertMessage += "tinggi badan";
    }
    alertMessage +=
      " yang tidak sesuai. Mohon masukkan berat badan dan tinggi badan yang sesuai.";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<span id="alert">${alertMessage}</span>`;
    return;
  }

  // Periksa apakah input memiliki minimal dua angka
  if (berat.toString().length < 2 || tinggi.toString().length < 2) {
    let alertMessage = "Silakan masukkan ";
    if (berat.toString().length < 2) {
      alertMessage += "berat badan yang valid (minimal 2 angka)";
    }
    if (berat.toString().length < 2 && tinggi.toString().length < 2) {
      alertMessage += " dan ";
    }
    if (tinggi.toString().length < 2) {
      alertMessage += "tinggi badan yang valid (minimal 2 angka)";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<span id="alert">${alertMessage}</span>`;
    return;
  }

  // Konversi tinggi dari cm ke meter
  const tinggiDalamMeter = tinggi / 100;

  // Hitung BMI
  const bmi = berat / (tinggiDalamMeter * tinggiDalamMeter);

  // Tentukan kategori BMI dan berat badan ideal
  let kategori = "";
  let idealMin = 18.5 * (tinggiDalamMeter * tinggiDalamMeter);
  let idealMax = 24.9 * (tinggiDalamMeter * tinggiDalamMeter);
  if (bmi < 18.5) {
    kategori = "Kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    kategori = "Berat badan normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    kategori = "Kelebihan berat badan";
  } else {
    kategori = "Obesitas";
  }

  // Tampilkan hasil
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      BMI Anda adalah ${bmi.toFixed(2)} - ${kategori}<br>
      Berat badan ideal untuk tinggi ${tinggi} cm adalah antara ${idealMin.toFixed(
    1
  )} kg dan ${idealMax.toFixed(1)} kg.
  `;

  // Tampilkan referensi BMI
  document.getElementById("bmiReference").style.display = "block";
}
