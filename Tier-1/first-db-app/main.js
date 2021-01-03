const loadDBBtn = document.querySelector('.load-btn');
const queryDBBtn = document.querySelector('.query-btn');
const clearDBBtn = document.querySelector('.clear-btn');
const logList = document.querySelector('.log-list');
const resultList = document.querySelector('.result-list');

class Customer {
  constructor(dbName) {
    this.dbName = dbName;
    if (!window.indexedDB) {
      window.alert(
        "Your browser doesn't support a stable version of IndexedDB. \
        Such and such feature will not be available."
      );
    }
  }

  /**
   * Remove all rows from the database
   * @memberof Customer
   */
  removeAllRows = () => {
    const request = indexedDB.open(this.dbName, 1);

    request.onerror = (event) => {
      addLog(
        `removeAllRows - Database error: ${event.target.error.code} - ${event.target.error.message}`
      );
      console.log(
        'removeAllRows - Database error: ',
        event.target.error.code,
        ' - ',
        event.target.error.message
      );
    };

    request.onsuccess = (event) => {
      addLog('Deleting all customers...');
      console.log('Deleting all customers...');
      const db = event.target.result;
      const txn = db.transaction('customers', 'readwrite');
      txn.onerror = (event) => {
        addLog(
          `removeAllRows - Database error: ${event.target.error.code} - ${event.target.error.message}`
        );
        console.log(
          'removeAllRows - Txn error: ',
          event.target.error.code,
          ' - ',
          event.target.error.message
        );
      };
      txn.oncomplete = (event) => {
        addLog('All rows removed!');
        console.log('All rows removed!');
      };
      const objectStore = txn.objectStore('customers');
      const getAllKeysRequest = objectStore.getAllKeys();
      getAllKeysRequest.onsuccess = (event) => {
        getAllKeysRequest.result.forEach((key) => {
          objectStore.delete(key);
        });
      };
    };
  };

  /**
   * Populate the Customer database with an initial set of customer data
   * @param {[object]} customerData Data to add
   * @memberof Customer
   */
  initialLoad = (customerData) => {
    const request = indexedDB.open(this.dbName, 1);

    request.onerror = (event) => {
      addLog(
        `initialLoad - Database error: ${event.target.error.code} - ${event.target.error.message}`
      );
      console.log(
        'initialLoad - Database error: ',
        event.target.error.code,
        ' - ',
        event.target.error.message
      );
    };

    request.onupgradeneeded = (event) => {
      addLog('Populating customers...');
      console.log('Populating customers...');
      const db = event.target.result;
      const objectStore = db.createObjectStore('customers', {
        keyPath: 'userid',
      });
      objectStore.onerror = (event) => {
        addLog(
          `initialLoad - Database error: ${event.target.error.code} - ${event.target.error.message}`
        );
        console.log(
          'initialLoad - objectStore error: ',
          event.target.error.code,
          ' - ',
          event.target.error.message
        );
      };

      // Create an index to search customers by name and email
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });

      // Populate the database with the initial set of rows
      customerData.forEach(function (customer) {
        objectStore.put(customer);
      });
      db.close();
    };

    request.onsuccess = (event) => {
      addLog('Populating customers...');
      console.log('Populating customers...');
      const db = event.target.result;
      const objectStore = db
        .transaction('customers', 'readwrite')
        .objectStore('customers');

      objectStore.onerror = (event) => {
        addLog(
          `initialLoad - Database error: ${event.target.error.code} - ${event.target.error.message}`
        );
        console.log(
          'initialLoad - objectStore error: ',
          event.target.error.code,
          ' - ',
          event.target.error.message
        );
      };

      // Populate the database with the initial set of rows
      customerData.forEach(function (customer) {
        objectStore.put(customer);
      });
      db.close();
    };
  };

  query = () => {
    const request = indexedDB.open(this.dbName);

    request.onerror = (event) => {
      addLog(
        `query - Database error: ${event.target.error.code} - ${event.target.error.message}`
      );
      console.log(
        'query - Database error: ',
        event.target.error.code,
        ' - ',
        event.target.error.message
      );
    };

    request.onsuccess = (event) => {
      const db = event.target.result;

      let objectStore = db.transaction('customers').objectStore('customers');
      objectStore.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;
        if (cursor) {
          resultList.innerHTML += `<li>Name: ${cursor.value.name}, Email: ${cursor.value.email}</li>`;
          cursor.continue();
        }
      };
    };
  };
}

// Web page event handlers
const DBNAME = 'customer_db';

/**
 * Clear all customer data from the database
 */
const clearDB = () => {
  addLog('Delete all rows from the Customers database');
  console.log('Delete all rows from the Customers database');
  let customer = new Customer(DBNAME);
  customer.removeAllRows();
};

/**
 * Add customer data to the database
 */
const loadDB = () => {
  addLog('Load the Customers database');
  console.log('Load the Customers database');

  // Customers to add to initially populate the database with
  const customerData = [
    { userid: '444', name: 'Bill', email: 'bill@company.com' },
    { userid: '555', name: 'Donna', email: 'donna@home.org' },
  ];
  let customer = new Customer(DBNAME);
  customer.initialLoad(customerData);
};

const queryDB = () => {
  addLog('Query the Customers database');
  console.log('Query the Customers database');
  let customers = new Customer(DBNAME);
  resultList.innerHTML = '';
  customers.query();
};

const addLog = (msg) => {
  logList.innerHTML += `<li>${msg}</li>`;
};

loadDBBtn.addEventListener('click', loadDB);
clearDBBtn.addEventListener('click', clearDB);
queryDBBtn.addEventListener('click', queryDB);
