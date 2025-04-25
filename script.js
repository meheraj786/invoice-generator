class invoice{
  constructor(id, date, amount){
    this.id = id;
    this.date = date;
    this.amount = amount;
  }
}

class invoiceList{
  constructor(){
    this.invoices = [];
  }

  addInvoice(invoice){
    this.invoices.push(invoice);
  }

  removeInvoice(id){
    this.invoices = this.invoices.filter(invoice => invoice.id !== id);
  }

  getInvoices(){
    return this.invoices;
  }
}