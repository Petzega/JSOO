window.addEventListener('load', () => {
    console.log('Charged!');

    class Product {
        constructor(name, price, year) {
            this.name = name;
            this.price = price;
            this.year = year;
        }
    }

    class UI {
        addProduct(product) {
            const productList = document.getElementById('product-list');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Product:</strong> ${product.name}
                        <strong>Price:</strong> ${product.price}
                        <strong>Year:</strong> ${product.year}
                        <a href="#" class="btn btn-danger" name="delete">Delete</a>
                    </div>
                </div>
            `;
            productList.appendChild(element);
            this.resetForm();
        };
        deleteProduct(element) {
            if (element.name === 'delete') {
                element.parentElement.parentElement.parentElement.remove();
                this.showMessage('Product Deleted Successfully', 'info');
            }
        };
        showMessage(message, type) {
            const div = document.createElement('div');
            div.className = `alert alert-${type} mt-2`;
            div.appendChild(document.createTextNode(message));
            //showing in DOM
            const container = document.querySelector('.container');
            document.querySelector('#app');
            container.insertBefore(div, app);
            setTimeout(() => { document.querySelector('.alert').remove() }, 3000);
        };
        resetForm() {
            document.getElementById('product-form').reset();
        }
    };
    //DOM events
    document.getElementById('product-form').addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        let product = new Product(name, price, year);
        const ui = new UI();
        if(name === '' || price === '' || year === '') {
           return ui.showMessage('Complete All Fields', 'danger');
        };
        ui.addProduct(product);
        ui.showMessage('Product Added Successfully', 'success');
        e.preventDefault();
    });

    document.getElementById('product-list').addEventListener('click', (e) => {
        const ui = new UI();
        ui.deleteProduct(e.target);
    });
});