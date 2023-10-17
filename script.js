function displayData(htmlFile) {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];
  const currentDate = new Date();

  let tableBody = "";
  for (let i = 0; i < storedFormData.length; i++) {
    const formData = storedFormData[i];
    const dueDate = new Date(formData.dueDate);

    const isPastDue = dueDate < currentDate;
    if (
      (isPastDue && htmlFile === "PastDue.html") ||
      (!isPastDue && htmlFile === "Future.html")
    ) {
      const deleteButton = isPastDue
        ? ""
        : `<button class="delete-button" onclick="deleteEntry(${i})">Delete</button>`;
      tableBody += `
          <tr>
            <th scope="row">${i + 1}</th>
            <td>${formData.title}</td>
            <td>${formData.dueDate}</td>
            <td>${deleteButton}</td>
          </tr>`;
    }
  }

  const table = document.querySelector(
    htmlFile === "PastDue.html" ? "#pastDueTable" : "#futureTable"
  );

  table.querySelector("tbody").innerHTML = tableBody;
}

function deleteEntry(index) {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];
  storedFormData.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(storedFormData));

  displayData("Future.html");
}

const currentURL = window.location.href;
if (currentURL.includes("PastDue.html")) {
  displayData("PastDue.html");
} else if (currentURL.includes("Future.html")) {
  displayData("Future.html");
}
