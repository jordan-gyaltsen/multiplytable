    function newFunction() {
        // const errormsg = document.getElementById("errormsg").value;
        const colmin = parseInt(document.getElementById("colmin").value);
        const colmax = parseInt(document.getElementById("colmax").value);
        const rowmin = parseInt(document.getElementById("rowmin").value);
        const rowmax = parseInt(document.getElementById("rowmax").value);

        if (colmin >= colmax || rowmin >= rowmax){
            const container = document.getElementById('errmsg');
            container.innerHTML = "All Max values have to be greater than their corresponding Min value";
            // else no input errors, proceed with table generation
        } else {
            // reset the table and error message elements for new submssion.
            var table = document.getElementById('mytable');
            document.getElementById('errmsg').innerHTML = ''
            table.innerHTML = ''

        for (var j = rowmin - 1; j <= rowmax; j++) {
            
            if (j == rowmin - 1) {
                var tr = document.createElement("thead");
                var cell = document.createElement("td");
                cell.innerHTML = '';
                tr.appendChild(cell);
                for (i = colmin; i <= colmax; i++) {
                    var cell = document.createElement("th");
                    cell.innerHTML = i;
                    tr.appendChild(cell);
                }
            } else {
                var tr = document.createElement("tr");
                var cell = document.createElement("th");
                cell.innerHTML = j;
                tr.appendChild(cell);
                for (i = colmin; i <= colmax; i++) {
                    var cell = document.createElement("td");
                    cell.innerHTML = i*j;
                    tr.appendChild(cell);
                }
            }
            table.appendChild(tr);
        }
    }        
  }
