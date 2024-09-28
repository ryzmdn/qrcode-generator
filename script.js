"use strict";

function generateQRCode() {
  const qrCode = document.getElementById("qrcode");
  const url = document.getElementById("url");
  const downloadBtn = document.getElementById("button-download");

  qrCode.innerHTML = "";

  if (url.value.trim()) {
    new QRCode(qrCode, {
      text: url,
      width: 200,
      height: 200,
    });

    setTimeout(() => {
      downloadBtn.removeAttribute("disabled");
    }, 300);
  } else {
    alert("Please paste a valid URL");
    downloadBtn.setAttribute("disabled");
  }
}

function downloadQRCode() {
  const qrCodeCanvas = document.querySelector("#qrcode canvas");
  const qrCodeImage = qrCodeCanvas.toDataURL("image/png");

  const downloadUrl = document.createElement("a");
  downloadUrl.href = qrCodeImage;
  downloadUrl.download = "qrcode.png";
  downloadUrl.click();
}
