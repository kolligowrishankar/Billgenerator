document.getElementById('billForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    var customerName = document.getElementById('customerName').value;
    var itemName = document.getElementById('itemName').value;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    
    // Create bill object
    var bill = {
      customerName: customerName,
      itemName: itemName,
      quantity: quantity,
      price: price
    };
    
    // Save bill details to localStorage or database
    // (You can use a server-side language and a database for this)
    localStorage.setItem('bill', JSON.stringify(bill));
    
    // Generate bill preview
    var billPreview = document.getElementById('billPreview');
    billPreview.innerHTML = '<h2>Bill Preview</h2><p>Customer Name: ' + customerName +
                            '</p><p>Item Name: ' + itemName +
                            '</p><p>Quantity: ' + quantity +
                            '</p><p>Price: $' + price +
                            '</p><p>Grand Total: $' + (quantity * price) +
                            '</p><p><img src="https://www.shutterstock.com/shutterstock/photos/302643371/display_1500/stock-vector-thank-you-for-shopping-us-ink-hand-lettering-modern-brush-calligraphy-handwritten-message-for-302643371.jpg" alt="Bill Logo"></p>';
    
    billPreview.style.display = 'block';
    
  });
  