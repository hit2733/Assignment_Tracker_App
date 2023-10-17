document
  .getElementById("assignmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const batch = document.getElementById("batch").value;
    const dueDate = document.getElementById("dueDate").value;

    const formData = {
      title: title,
      description: description,
      batch: batch,
      dueDate: dueDate,
    };

    saveFormData(formData);
  });

function saveFormData(formData) {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];

  storedFormData.push(formData);
  localStorage.setItem("formData", JSON.stringify(storedFormData));

  Swal.fire({
    icon: "success",
    title: "Hurray",
    text: "Data Added Successfully",
    showConfirmButton: false,
    timer: 1500,
  });

  document.getElementById("title").value = " ";
  document.getElementById("description").value = " ";
  document.getElementById("batch").value = " ";
  document.getElementById("dueDate").value = " ";
}
