function generateInvoice() {
  // Fetch customer details
  document.getElementById("output-customer-name").innerText = "Name: " + document.getElementById("customer-name").value;
  document.getElementById("output-customer-email").innerText = "Email: " + document.getElementById("customer-email").value;
  document.getElementById("output-customer-address").innerText = "Address: " + document.getElementById("customer-address").value;
  document.getElementById("output-customer-phone").innerText = "Phone: " + document.getElementById("customer-phone").value;
  document.getElementById("output-customer-zip").innerText = "Zip: " + document.getElementById("customer-zip").value;
  document.getElementById("output-customer-city").innerText = "City: " + document.getElementById("customer-city").value;
  document.getElementById("output-customer-country").innerText = "Country: " + document.getElementById("customer-country").value;
  document.getElementById("output-customer-vat").innerText = "VAT: " + document.getElementById("customer-vat").value;
  document.getElementById("output-customer-website").innerText = "Website: " + document.getElementById("customer-website").value;

  // Fetch invoice details
  document.getElementById("output-invoice-number").innerText = "Invoice Number: " + document.getElementById("invoice-number").value;
  document.getElementById("output-invoice-date").innerText = "Invoice Date: " + document.getElementById("invoice-date").value;
  document.getElementById("output-invoice-due-date").innerText = "Due Date: " + document.getElementById("invoice-due-date").value;
  document.getElementById("output-invoice-terms").innerText = "Terms: " + document.getElementById("invoice-terms").value;
  document.getElementById("output-invoice-notes").innerText = "Notes: " + document.getElementById("invoice-notes").value;
  document.getElementById("output-invoice-amount").innerText = "Amount: " + document.getElementById("invoice-amount").value;
  document.getElementById("output-invoice-currency").innerText = "Currency: " + document.getElementById("invoice-currency").value;
  document.getElementById("output-invoice-tax").innerText = "Tax: " + document.getElementById("invoice-tax").value;
  document.getElementById("output-invoice-discount").innerText = "Discount: " + document.getElementById("invoice-discount").value;
  document.getElementById("output-invoice-subtotal").innerText = "Subtotal: " + document.getElementById("invoice-subtotal").value;
  document.getElementById("output-invoice-total").innerText = "Total: " + document.getElementById("invoice-total").value;
  document.getElementById("output-invoice-status").innerText = "Status: " + document.getElementById("invoice-status").value;

  // Show the invoice output
  document.getElementById("invoice-output").style.display = "block";
}

function downloadInvoice() {
  const { jsPDF } = window.jspdf; // Ensure jsPDF is loaded
  const doc = new jsPDF();

  // Get invoice details
  const invoiceOutput = document.getElementById("invoice-output");
  const customerDetails = document.getElementById("customer-output").innerText;
  const invoiceDetails = document.getElementById("invoice-output-details").innerText;

  // Add content to the PDF
  doc.setFontSize(16);
  doc.text("Invoice", 10, 10);

  doc.setFontSize(12);
  doc.text("Customer Details:", 10, 20);
  doc.text( 10, 30);

  doc.text("Invoice Details:", 10, 50);
  doc.text( 10, 60);

  // Save the PDF
  doc.save("invoice.pdf");
}