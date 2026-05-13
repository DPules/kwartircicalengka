const form = document.getElementById("formPendaftaran");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,

    sekolah: document.getElementById("sekolah").value,

    golongan: document.getElementById("golongan").value,

    jk: document.getElementById("jk").value,

    wa: document.getElementById("wa").value,

    kegiatan: document.getElementById("kegiatan").value,
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwuQRC4J9w3PX8SAgE4XKgw38gzGv4r4Rork-uirzDs1eoWKt1WdGSzJ-SB0v6mpSOxew/exec",
      {
        method: "POST",

        body: JSON.stringify(data),

        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    alert("Pendaftaran berhasil dikirim!");

    form.reset();
  } catch (error) {
    alert("Terjadi kesalahan!");
  }
});
