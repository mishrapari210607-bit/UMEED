// UMEED Disaster Management System: form, dashboard, and UI interactions.
const $ = (id) => document.getElementById(id);

const form = $("rescueForm");
const stateSelect = $("state");
const districtSelect = $("district");
const citySelect = $("city");
const sessionRecords = [];
let currentRecord = null;

// State, district, and city data.
const locationData = {
  "Andhra Pradesh": {
    Anantapur: ["Anantapur", "Hindupur"],
    Chittoor: ["Chittoor", "Tirupati"],
    Guntur: ["Guntur", "Mangalagiri"],
    Krishna: ["Vijayawada", "Machilipatnam"],
    Visakhapatnam: ["Visakhapatnam", "Bheemunipatnam"]
  },
  "Arunachal Pradesh": {
    "Itanagar Capital Complex": ["Itanagar", "Naharlagun"],
    Tawang: ["Tawang"],
    "West Kameng": ["Bomdila"]
  },
  Assam: {
    Baksa: ["Mushalpur"],
    Barpeta: ["Barpeta"],
    Cachar: ["Silchar"],
    Dibrugarh: ["Dibrugarh"],
    Kamrup: ["Guwahati"]
  },
  Bihar: {
    Patna: ["Patna", "Danapur"],
    Gaya: ["Gaya"],
    Muzaffarpur: ["Muzaffarpur"],
    Nalanda: ["Bihar Sharif"],
    Bhagalpur: ["Bhagalpur"]
  },
  Chhattisgarh: {
    Raipur: ["Raipur"],
    Bilaspur: ["Bilaspur"],
    Durg: ["Bhilai", "Durg"],
    Bastar: ["Jagdalpur"],
    Korba: ["Korba"]
  },
  Goa: {
    "North Goa": ["Panaji", "Mapusa"],
    "South Goa": ["Margao", "Vasco da Gama"]
  },
  Gujarat: {
    Ahmedabad: ["Ahmedabad"],
    Surat: ["Surat"],
    Vadodara: ["Vadodara"],
    Kutch: ["Bhuj"],
    Rajkot: ["Rajkot"]
  },
  Haryana: {
    Gurugram: ["Gurugram"],
    Faridabad: ["Faridabad"],
    Hisar: ["Hisar"],
    Karnal: ["Karnal"],
    Panchkula: ["Panchkula"]
  },
  "Himachal Pradesh": {
    Shimla: ["Shimla"],
    Kangra: ["Dharamshala"],
    Kullu: ["Kullu", "Manali"],
    Mandi: ["Mandi"],
    Solan: ["Solan"]
  },
  Jharkhand: {
    Ranchi: ["Ranchi"],
    Dhanbad: ["Dhanbad"],
    Bokaro: ["Bokaro Steel City"],
    "East Singhbhum": ["Jamshedpur"],
    Deoghar: ["Deoghar"]
  },
  Karnataka: {
    "Bengaluru Urban": ["Bengaluru"],
    Mysuru: ["Mysuru"],
    Belagavi: ["Belagavi"],
    Dharwad: ["Hubballi"],
    Dakshina: ["Mangaluru"]
  },
  Kerala: {
    Thiruvananthapuram: ["Thiruvananthapuram"],
    Ernakulam: ["Kochi"],
    Kozhikode: ["Kozhikode"],
    Thrissur: ["Thrissur"],
    Wayanad: ["Kalpetta"]
  },
  "Madhya Pradesh": {
    Bhopal: ["Bhopal"],
    Indore: ["Indore"],
    Jabalpur: ["Jabalpur"],
    Gwalior: ["Gwalior"],
    Ujjain: ["Ujjain"]
  },
  Maharashtra: {
    Mumbai: ["Mumbai"],
    "Mumbai Suburban": ["Mumbai"],
    Pune: ["Pune"],
    Nagpur: ["Nagpur"],
    Thane: ["Thane"]
  },
  Manipur: {
    "Imphal East": ["Imphal"],
    "Imphal West": ["Imphal"],
    Bishnupur: ["Bishnupur"],
    Churachandpur: ["Churachandpur"]
  },
  Meghalaya: {
    "East Khasi Hills": ["Shillong"],
    "West Garo Hills": ["Tura"],
    "Ri Bhoi": ["Nongpoh"]
  },
  Mizoram: {
    Aizawl: ["Aizawl"],
    Lunglei: ["Lunglei"],
    Champhai: ["Champhai"]
  },
  Nagaland: {
    Kohima: ["Kohima"],
    Dimapur: ["Dimapur"],
    Mokokchung: ["Mokokchung"]
  },
  Odisha: {
    Khordha: ["Bhubaneswar"],
    Cuttack: ["Cuttack"],
    Puri: ["Puri"],
    Ganjam: ["Berhampur"],
    Sundargarh: ["Rourkela"]
  },
  Punjab: {
    Amritsar: ["Amritsar"],
    Ludhiana: ["Ludhiana"],
    Jalandhar: ["Jalandhar"],
    Patiala: ["Patiala"],
    Bathinda: ["Bathinda"]
  },
  Rajasthan: {
    Jaipur: ["Jaipur"],
    Jodhpur: ["Jodhpur"],
    Udaipur: ["Udaipur"],
    Kota: ["Kota"],
    Ajmer: ["Ajmer"]
  },
  Sikkim: {
    "East Sikkim": ["Gangtok"],
    "West Sikkim": ["Gyalshing"],
    "North Sikkim": ["Mangan"],
    "South Sikkim": ["Namchi"]
  },
  "Tamil Nadu": {
    Chennai: ["Chennai"],
    Coimbatore: ["Coimbatore"],
    Madurai: ["Madurai"],
    Tiruchirappalli: ["Tiruchirappalli"],
    Salem: ["Salem"]
  },
  Telangana: {
    Hyderabad: ["Hyderabad"],
    Rangareddy: ["Hyderabad"],
    Warangal: ["Warangal"],
    Medchal: ["Hyderabad"],
    Nizamabad: ["Nizamabad"]
  },
  Tripura: {
    "West Tripura": ["Agartala"],
    Sepahijala: ["Bishramganj"],
    Gomati: ["Udaipur"],
    "North Tripura": ["Dharmanagar"]
  },
  "Uttar Pradesh": {
    Lucknow: ["Lucknow"],
    "Kanpur Nagar": ["Kanpur"],
    Varanasi: ["Varanasi"],
    Prayagraj: ["Prayagraj"],
    "Gautam Buddha Nagar": ["Noida"]
  },
  Uttarakhand: {
    Dehradun: ["Dehradun"],
    Haridwar: ["Haridwar"],
    Nainital: ["Haldwani"],
    "Udham Singh Nagar": ["Rudrapur"]
  },
  "West Bengal": {
    Kolkata: ["Kolkata"],
    Howrah: ["Howrah"],
    Darjeeling: ["Darjeeling"],
    "North 24 Parganas": ["Barasat"],
    "Paschim Medinipur": ["Midnapore"]
  },
  "Andaman and Nicobar Islands": {
    Nicobar: ["Car Nicobar"],
    "North and Middle Andaman": ["Mayabunder"],
    "South Andaman": ["Port Blair"]
  },
  Chandigarh: {
    Chandigarh: ["Chandigarh"]
  },
  "Dadra and Nagar Haveli and Daman and Diu": {
    "Dadra and Nagar Haveli": ["Silvassa"],
    Daman: ["Daman"],
    Diu: ["Diu"]
  },
  Delhi: {
    "New Delhi": ["New Delhi"],
    "Central Delhi": ["Delhi"],
    "East Delhi": ["Delhi"],
    "North Delhi": ["Delhi"],
    "South West Delhi": ["Delhi"]
  },
  "Jammu and Kashmir": {
    Jammu: ["Jammu"],
    Srinagar: ["Srinagar"],
    Anantnag: ["Anantnag"],
    Baramulla: ["Baramulla"]
  },
  Ladakh: {
    Leh: ["Leh"],
    Kargil: ["Kargil"]
  },
  Lakshadweep: {
    Lakshadweep: ["Kavaratti"]
  },
  Puducherry: {
    Puducherry: ["Puducherry"],
    Karaikal: ["Karaikal"],
    Mahe: ["Mahe"],
    Yanam: ["Yanam"]
  }
};

// Populate state dropdown.
Object.keys(locationData)
  .sort()
  .forEach((state) => stateSelect.add(new Option(state, state)));

function resetSelect(select, label) {
  select.innerHTML = `<option value="">${label}</option>`;
  select.disabled = true;
}

stateSelect.addEventListener("change", () => {
  resetSelect(districtSelect, "Select district");
  resetSelect(citySelect, "Select district first");

  if (stateSelect.value) {
    districtSelect.disabled = false;

    Object.keys(locationData[stateSelect.value]).forEach((district) => {
      districtSelect.add(new Option(district, district));
    });
  }

  clearError(stateSelect);
});

districtSelect.addEventListener("change", () => {
  resetSelect(citySelect, "Select city");

  if (districtSelect.value) {
    citySelect.disabled = false;

    locationData[stateSelect.value][districtSelect.value].forEach((city) => {
      citySelect.add(new Option(city, city));
    });
  }

  clearError(districtSelect);
});

// Validation helpers.
function setError(element, message) {
  const field = element.closest(".field");
  field.classList.add("invalid");
  field.querySelector(".error").textContent = message;
}

function clearError(element) {
  const field = element.closest(".field");

  if (!field) return;

  field.classList.remove("invalid");

  const error = field.querySelector(".error");

  if (error) {
    error.textContent = "";
  }
}

function value(id) {
  return $(id).value.trim();
}

function validateForm() {
  let valid = true;

  document.querySelectorAll(".field").forEach((field) => {
    field.classList.remove("invalid");
    field.querySelector(".error").textContent = "";
  });

  const required = [
    "fullName",
    "age",
    "gender",
    "phone",
    "email",
    "bloodGroup",
    "disaster",
    "state",
    "district",
    "city",
    "priority",
    "status",
    "medical",
    "family",
    "emergencyContact"
  ];

  required.forEach((id) => {
    if (!value(id)) {
      setError($(id), "This field is required.");
      valid = false;
    }
  });

  if (value("fullName") && (/[0-9]/.test(value("fullName")) || value("fullName").length < 2)) {
    setError($("fullName"), "Use a valid name without numbers.");
    valid = false;
  }

  const age = Number(value("age"));

  if (value("age") && (age < 1 || age > 120)) {
    setError($("age"), "Age must be between 1 and 120.");
    valid = false;
  }

  if (value("family") && Number(value("family")) < 0) {
    setError($("family"), "Family members cannot be negative.");
    valid = false;
  }

  ["phone", "emergencyContact"].forEach((id) => {
    if (value(id) && !/^\d{10}$/.test(value(id))) {
      setError($(id), "Enter exactly 10 digits.");
      valid = false;
    }
  });

  if (value("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email"))) {
    setError($("email"), "Enter a valid email address.");
    valid = false;
  }

  return valid;
}

// Rescue ID generation.
function cityCode(city) {
  return city
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .slice(0, 3)
    .padEnd(3, "X");
}

function dateCode(date) {
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function createUniqueId(disaster, city, date) {
  let index = sessionRecords.length + 1;
  let id;

  do {
    id = `${disaster}-${cityCode(city)}-${dateCode(date)}-${String(index).padStart(4, "0")}`;
    index++;
  } while (sessionRecords.some((record) => record.id === id));

  return id;
}

function showRecord(record) {
  currentRecord = record;

  $("resultId").textContent = record.id;

  const badge = $("priorityBadge");
  badge.textContent = record.priority;
  badge.className = `priority-badge ${record.priority.toLowerCase()}`;

  const details = [
    ["Name", record.name],
    ["Disaster", record.disaster],
    ["State", record.state],
    ["District", record.district],
    ["City", record.city],
    ["Status", record.status],
    ["Date", record.date],
    ["Time", record.time]
  ];

  $("resultDetails").innerHTML = details
    .map(
      ([title, data]) => `
        <div class="detail-item">
          <small>${title}</small>
          <strong>${data}</strong>
        </div>
      `
    )
    .join("");

  $("resultEmpty").classList.add("hidden");
  $("resultCard").classList.remove("hidden");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!validateForm()) {
    showToast("Please correct the highlighted fields.");
    return;
  }

  const payload = {
    full_name: value("fullName"),
    age: value("age"),
    gender: value("gender"),
    phone_number: value("phone"),
    email: value("email"),
    blood_group: value("bloodGroup"),
    disaster_type: $("disaster").options[$("disaster").selectedIndex].text,
    state: value("state"),
    district: value("district"),
    city: value("city"),
    rescue_priority: value("priority"),
    rescue_status: "Pending",
    medical_condition: value("medical"),
    family_members: value("family"),
    emergency_contact: value("emergencyContact")
};

try {

    const response = await fetch("http://127.0.0.1:8000/generate-id/", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(payload)

    });

    const data = await response.json();

    if (!data.success) {

    console.log(data);

    if (data.errors) {
        showToast(Object.values(data.errors).join(", "));
    } else {
        showToast("Registration failed.");
    }

    return;
}

    const now = new Date(data.timestamp);

    const record = {

        id: data.rescue_id,

        name: payload.full_name,

        disaster: payload.disaster_type,

        state: payload.state,

        district: payload.district,

        city: payload.city,

        priority: payload.rescue_priority,

        status: payload.rescue_status,

        date: now.toLocaleDateString(),

        time: now.toLocaleTimeString()

    };

    sessionRecords.push(record);

    showRecord(record);

    
showToast(data.message);
}
catch(error){

    console.error(error);

    showToast("Cannot connect to backend.");

}
});

// Copy Rescue ID.
$("copyBtn").addEventListener("click", async () => {
  if (!currentRecord) return;

  try {
    await navigator.clipboard.writeText(currentRecord.id);
    showToast("Rescue ID copied to clipboard.");
  } catch {
    showToast("Copy is unavailable. Select the ID manually.");
  }
});

// Print rescue slip.
$("printBtn").addEventListener("click", () => window.print());

// Create a basic browser-generated PDF.
function makePdf(record) {
  const lines = [
    "UMEED - DISASTER MANAGEMENT SYSTEM",
    "RESCUE REGISTRATION SLIP",
    "",
    `Rescue ID: ${record.id}`,
    `Name: ${record.name}`,
    `Disaster: ${record.disaster}`,
    `Location: ${record.city}, ${record.district}, ${record.state}`,
    `Priority: ${record.priority}`,
    `Status: ${record.status}`,
    `Date: ${record.date}`,
    `Time: ${record.time}`
  ];

  const clean = (text) =>
    text.replace(/[\\()]/g, "\\$&").replace(/[^\x20-\x7E]/g, "");

  const stream = `BT /F1 15 Tf 54 755 Td ${lines
    .map((line, index) => `${index ? "0 -24 Td " : ""}(${clean(line)}) Tj`)
    .join("\n")} ET`;

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xref = pdf.length;

  pdf += `xref
0 6
0000000000 65535 f 
${offsets
  .slice(1)
  .map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`)
  .join("")}trailer
<< /Size 6 /Root 1 0 R >>
startxref
${xref}
%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

$("downloadBtn").addEventListener("click", () => {
  if (!currentRecord) return;

  const link = document.createElement("a");
  link.href = URL.createObjectURL(makePdf(currentRecord));
  link.download = `${currentRecord.id}.pdf`;
  link.click();

  setTimeout(() => URL.revokeObjectURL(link.href), 300);

  showToast("Rescue slip PDF download started.");
});

// Reset form.
$("resetBtn").addEventListener("click", () => {
  form.reset();

  resetSelect(districtSelect, "Select state first");
  resetSelect(citySelect, "Select district first");

  $("resultCard").classList.add("hidden");
  $("resultEmpty").classList.remove("hidden");

  currentRecord = null;

  document.querySelectorAll(".field").forEach((field) => {
    field.classList.remove("invalid");
    field.querySelector(".error").textContent = "";
  });

  showToast("Form reset.");
});

// Search records created in the active browser session.
$("searchBtn").addEventListener("click", async () => {

    const rescueId = $("searchId").value.trim();

    if (!rescueId) {
        $("searchMessage").textContent = "Enter a Rescue ID.";
        return;
    }

    try {

        const response = await fetch(
            `http://127.0.0.1:8000/search/${rescueId}/`
        );

        const data = await response.json();

        if (!data.success) {

            $("searchMessage").textContent = "Rescue ID not found.";
            return;
        }

        const record = data.record;

        showRecord({

            id: record.rescue_id,
            name: record.full_name,
            disaster: record.disaster_type,
            state: record.state,
            district: record.district,
            city: record.city,
            priority: record.rescue_priority,
            status: record.rescue_status,
            date: new Date(record.created_at).toLocaleDateString(),
            time: new Date(record.created_at).toLocaleTimeString()

        });

        $("searchMessage").textContent = "Record Found Successfully.";

    }

    catch (error) {

        console.log(error);

        $("searchMessage").textContent =
            "Cannot connect to backend.";

    }

});

// Live date and clock.
function updateClock() {
  const now = new Date(data.timestamp);

  $("liveClock").textContent = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  $("currentDate").textContent = now.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
}

updateClock();
setInterval(updateClock, 1000);

// Dark mode.
function updateThemeIcon() {
  $("themeToggle").innerHTML = document.body.classList.contains("dark")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

$("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateThemeIcon();
});

updateThemeIcon();

// Animated dashboard counters.
function animateCounters() {
  document.querySelectorAll(".counter").forEach((counter) => {
    const target = Number(counter.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 55);

    const tick = () => {
      current = Math.min(current + step, target);
      counter.textContent = current.toLocaleString("en-IN");

      if (current < target) {
        requestAnimationFrame(tick);
      }
    };

    tick();
  });
}

animateCounters();

// Toast notification.
function showToast(text) {
  const toast = $("toast");

  toast.textContent = text;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Clear an error while the user edits a field.
document.querySelectorAll("input, select").forEach((element) => {
  element.addEventListener("input", () => clearError(element));
});